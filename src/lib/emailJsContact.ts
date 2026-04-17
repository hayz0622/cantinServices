import emailjs from "@emailjs/browser";
import type { NeedType } from "@/content/serviceNeeds";
import { needLabels } from "@/content/serviceNeeds";

const MAX_RAPPORT_UTF8_BYTES = 35 * 1024;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function truncateUtf8Bytes(s: string, maxBytes: number): string {
  const enc = new TextEncoder();
  if (enc.encode(s).length <= maxBytes) return s;
  let end = s.length;
  while (end > 0 && enc.encode(s.slice(0, end)).length > maxBytes) {
    end -= 1;
  }
  return `${s.slice(0, end)}\n\n[… Texte tronqué : limite EmailJS (~50 Ko pour les variables).]`;
}

export function buildSubmissionEmailHtml(rapport: string) {
  const safe = escapeHtml(rapport);
  return `
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0;border:0;">
  <tr>
    <td align="center" style="padding:0 12px 12px;border:0;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border-collapse:collapse;box-shadow:0 4px 24px rgba(15,23,42,0.08);border:1px solid #e2e8f0;">
        <tr>
          <td style="background-color:#166534;background-image:linear-gradient(135deg,#14532d 0%,#166534 100%);padding:26px 28px;">
            <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.2;color:#ecfdf5;">Cantin Services</h1>
            <p style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.4;color:#bbf7d0;">Nouvelle demande — formulaire web</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px 32px;font-family:Arial,Helvetica,sans-serif;">
            <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px 22px;">
              <pre style="margin:0;white-space:pre-wrap;word-break:break-word;font-family:Consolas,'Courier New',monospace;font-size:13px;line-height:1.5;color:#1e293b;">${safe}</pre>
            </div>
            <p style="margin:20px 0 0;font-size:12px;line-height:1.4;color:#94a3b8;">Répondez à ce message pour joindre directement le client (adresse dans le bloc ci-dessus).</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim();
}

async function uploadPhotoToCloudinary(photoFile: File): Promise<string> {
  const { cloudinaryCloudName, cloudinaryUploadPreset } = getConfig();
  if (!cloudinaryCloudName || !cloudinaryUploadPreset) {
    throw new Error("CLOUDINARY_NOT_CONFIGURED");
  }

  const formData = new FormData();
  formData.append("file", photoFile);
  formData.append("upload_preset", cloudinaryUploadPreset);

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;
  const response = await fetch(endpoint, { method: "POST", body: formData });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`CLOUDINARY_UPLOAD_FAILED: ${response.status} ${errorText}`);
  }
  const payload = (await response.json()) as { secure_url?: string };
  if (!payload.secure_url) {
    throw new Error("CLOUDINARY_UPLOAD_FAILED: secure_url missing");
  }
  return payload.secure_url;
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function serializeEmailJsError(err: unknown) {
  if (err && typeof err === "object" && "status" in err) {
    const e = err as { status: number; text?: string };
    return {
      kind: "EmailJSResponseStatus",
      status: e.status,
      text: typeof e.text === "string" ? e.text : undefined,
    };
  }
  if (err instanceof Error) {
    return { kind: "Error", name: err.name, message: err.message, stack: err.stack };
  }
  return { kind: "unknown", string: String(err) };
}

async function reportEmailJsErrorToDevTerminal(payload: Record<string, unknown>) {
  if (!import.meta.env.DEV) return;
  try {
    await fetch("/__cantin/dev-emailjs-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ at: new Date().toISOString(), ...payload }),
    });
  } catch {
    // no-op
  }
}

function getConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    adminTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    confirmationTemplateId: import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
    cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    cloudinaryUploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  };
}

export function isEmailJsConfigured() {
  const c = getConfig();
  return Boolean(c.publicKey && c.serviceId && c.adminTemplateId && c.confirmationTemplateId);
}

export class EmailJsNotConfiguredError extends Error {
  constructor() {
    super("EMAILJS_NOT_CONFIGURED");
    this.name = "EmailJsNotConfiguredError";
  }
}

export async function sendContactEmail(params: {
  needType: NeedType;
  prenom: string;
  nom: string;
  telephone: string;
  courriel: string;
  rapport: string;
  photoFile: File | null;
}) {
  const { publicKey, serviceId, adminTemplateId, confirmationTemplateId } = getConfig();
  if (!publicKey || !serviceId || !adminTemplateId || !confirmationTemplateId) {
    throw new EmailJsNotConfiguredError();
  }

  const subjectLine = `[Cantin Services] Demande — ${needLabels[params.needType]}`;
  const fromName = `${params.prenom} ${params.nom}`.trim();
  const serviceType = needLabels[params.needType];

  try {
    let rapportBody = params.rapport;
    if (params.photoFile) {
      const cloudinaryUrl = await uploadPhotoToCloudinary(params.photoFile);
      rapportBody = `${rapportBody}\n\n── Photo transmise (Cloudinary) ──\nNom du fichier : ${params.photoFile.name}\nLien : ${cloudinaryUrl}`;
    }
    const rapportForEmail = truncateUtf8Bytes(rapportBody, MAX_RAPPORT_UTF8_BYTES);
    const htmlContent = buildSubmissionEmailHtml(rapportForEmail);

    await emailjs.send(
      serviceId,
      adminTemplateId,
      {
        subject_line: subjectLine,
        reply_to: params.courriel,
        from_name: fromName,
        user_phone: params.telephone,
        service_type: serviceType,
        html_content: htmlContent,
      },
      { publicKey },
    );

    await sleep(1100);

    const confirmationTemplateParams: Record<string, unknown> = {
      name: fromName,
      title: serviceType,
      to_email: params.courriel,
      email: params.courriel,
      reply_to: "cantinservicesdarbres@gmail.com",
      subject_line: `Confirmation de votre demande — ${serviceType}`,
    };

    await emailjs.send(serviceId, confirmationTemplateId, confirmationTemplateParams, { publicKey });
  } catch (err) {
    await reportEmailJsErrorToDevTerminal({
      step: "sendContactEmail",
      cloudinaryEnabled: true,
      photo: params.photoFile
        ? { name: params.photoFile.name, size: params.photoFile.size, type: params.photoFile.type }
        : null,
      serviceId,
      adminTemplateId,
      confirmationTemplateId,
      error: serializeEmailJsError(err),
    });
    throw err;
  }
}
