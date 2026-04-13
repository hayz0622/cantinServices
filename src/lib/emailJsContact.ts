import emailjs from "@emailjs/browser";
import type { NeedType } from "@/content/serviceNeeds";
import { needLabels } from "@/content/serviceNeeds";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const res = reader.result as string;
      const comma = res.indexOf(",");
      resolve(comma >= 0 ? res.slice(comma + 1) : res);
    };
    reader.onerror = () => reject(reader.error ?? new Error("Lecture du fichier impossible."));
    reader.readAsDataURL(file);
  });
}

function getConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  };
}

export function isEmailJsConfigured() {
  const c = getConfig();
  return Boolean(c.publicKey && c.serviceId && c.templateId);
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
  const { publicKey, serviceId, templateId } = getConfig();
  if (!publicKey || !serviceId || !templateId) {
    throw new EmailJsNotConfiguredError();
  }

  const templateParams: Record<string, unknown> = {
    subject_line: `[Cantin Services] Demande — ${needLabels[params.needType]}`,
    reply_to: params.courriel,
    from_name: `${params.prenom} ${params.nom}`.trim(),
    user_phone: params.telephone,
    service_type: needLabels[params.needType],
    message: params.rapport,
    html_content: buildSubmissionEmailHtml(params.rapport),
  };

  if (params.photoFile) {
    const data = await fileToBase64(params.photoFile);
    const safeName = params.photoFile.name.replace(/[^\w.\- ]+/g, "_") || "photo";
    templateParams.attachments = [{ name: safeName, data }];
  }

  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
