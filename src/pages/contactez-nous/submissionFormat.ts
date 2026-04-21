import type { NeedType } from "@/content/serviceNeeds";
import { needLabels } from "@/content/serviceNeeds";

function displayOuiNon(v: string) {
  if (v === "oui") return "Oui";
  if (v === "non") return "Non";
  return v.trim() || "—";
}

function displayArbreType(v: string) {
  const m: Record<string, string> = { feuillu: "Feuillus", resineux: "Résineux", autre: "Autre" };
  return m[v] ?? (v.trim() || "—");
}

function displayMenage(v: string) {
  if (v === "impeccable") return "Ménage impeccable";
  if (v === "aucun") return "Aucun ménage";
  return v.trim() || "—";
}

function displayElagageRaison(v: string) {
  if (v === "esthetique") return "Esthétique (branches mortes, cassées, malades ou nuisibles)";
  if (v === "necessite") return "Nécessité (branches à risque pour les propriétés)";
  return v.trim() || "—";
}

function displayTailleSousType(v: string) {
  const m: Record<string, string> = {
    haie: "Taille de haie",
    fruitier: "Arbre fruitier, jeune arbre",
    formation: "Taille de formation",
  };
  return m[v] ?? (v.trim() || "—");
}

function displayTailleHaieVariete(v: string) {
  if (v === "cedre") return "Haie de cèdre";
  if (v === "feuillus") return "Feuillus";
  return v.trim() || "—";
}

export function formatAddressBlock(p: {
  rue1: string;
  rue2: string;
  ville: string;
  province: string;
  codePostal: string;
}) {
  const parts = [p.rue1, p.rue2, [p.ville, p.province].filter(Boolean).join(", "), p.codePostal].filter(
    (s) => s && String(s).trim(),
  );
  return parts.length ? parts.join("\n") : "— (non fournie)";
}

export function buildFormattedSubmissionText(args: {
  needType: NeedType;
  prenom: string;
  nom: string;
  telephone: string;
  courriel: string;
  rue1: string;
  rue2: string;
  ville: string;
  province: string;
  codePostal: string;
  messageProjet: string;
  photoFileName: string | null;
  abattage: {
    treeType: string;
    treeSpecies: string[];
    mortOuDifficulte: string;
    diametre: string;
    conserverBois: string;
    dechiquetage: string;
    menage: string;
    obstacles: string;
    broyageSouche: string;
  };
  elagage: {
    raison: string;
    dechiquetage: string;
    menage: string;
    obstacles: string;
  };
  taille: {
    sousType: string;
    haieVariete: string;
    piedLineaire: string;
    hauteurApprox: string;
    nombreArbres: string;
  };
}) {
  const n = args.needType;
  const L = (title: string, body: string) => `\n── ${title} ──\n${body}\n`;

  let detail = "";
  if (n === "abattage") {
    const a = args.abattage;
    detail =
      L("Détails — Abattage", [
        `Type d'arbre : ${displayArbreType(a.treeType)}`,
        `Espèce(s) : ${a.treeSpecies.length > 0 ? a.treeSpecies.join(", ") : "—"}`,
        `Arbre mort ou en difficulté : ${displayOuiNon(a.mortOuDifficulte)}`,
        `Diamètre du tronc (≈ 1 m du sol) : ${a.diametre.trim() || "—"}`,
        `Conserver du bois : ${displayOuiNon(a.conserverBois)}`,
        `Déchiquetage des branches : ${displayOuiNon(a.dechiquetage)}`,
        `Ménage : ${displayMenage(a.menage)}`,
        `Obstacles sous le port de l'arbre : ${displayOuiNon(a.obstacles)}`,
        `Broyage de souche : ${displayOuiNon(a.broyageSouche)}`,
      ].join("\n")) + detail;
  }
  if (n === "elagage") {
    const e = args.elagage;
    detail =
      L("Détails — Élagage", [
        `Raison de l'élagage : ${displayElagageRaison(e.raison)}`,
        `Déchiquetage des branches : ${displayOuiNon(e.dechiquetage)}`,
        `Ménage : ${displayMenage(e.menage)}`,
        `Obstacles sous le port de l'arbre : ${displayOuiNon(e.obstacles)}`,
      ].join("\n")) + detail;
  }
  if (n === "taille") {
    const t = args.taille;
    const lines = [`Type de travail : ${displayTailleSousType(t.sousType)}`];
    if (t.sousType === "haie") {
      lines.push(
        `Type de haie : ${displayTailleHaieVariete(t.haieVariete)}`,
        `Pied linéaire de la haie : ${t.piedLineaire.trim() || "—"}`,
        `Hauteur approximative : ${t.hauteurApprox.trim() || "—"}`,
      );
    }
    if (t.sousType === "fruitier" || t.sousType === "formation") {
      lines.push(`Nombre d'arbres à tailler : ${t.nombreArbres.trim() || "—"}`);
    }
    detail = L("Détails — Taille", lines.join("\n")) + detail;
  }

  const header = [
    "════════════════════════════════════════════════════════════",
    "  NOUVELLE DEMANDE — CANTIN SERVICES (formulaire web)",
    "════════════════════════════════════════════════════════════",
    "",
    `Envoyé le : ${new Date().toLocaleString("fr-CA", { dateStyle: "full", timeStyle: "short" })}`,
    "",
    `Type de besoin : ${needLabels[n]}`,
  ].join("\n");

  const coordonnees = L("Coordonnées", [
    `Prénom : ${args.prenom.trim()}`,
    `Nom : ${args.nom.trim()}`,
    `Téléphone : ${args.telephone.trim()}`,
    `Courriel : ${args.courriel.trim()}`,
    "",
    "Adresse :",
    formatAddressBlock(args),
  ].join("\n"));

  const projet = L("Projet (message du client)", args.messageProjet.trim() || "—");
  const photo = L(
    "Pièce jointe",
    args.photoFileName ? `Une photo a été jointe : ${args.photoFileName}` : "Aucune photo jointe.",
  );

  return `${header}${detail}${coordonnees}${projet}${photo}`;
}
