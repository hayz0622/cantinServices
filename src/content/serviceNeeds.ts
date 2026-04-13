export type NeedType =
  | "abattage"
  | "elagage"
  | "taille"
  | "haubanage"
  | "urgence"
  | "plantation_amenagement_fertilisation"
  | "visite_consultative"
  | "autre";

/** Ordre d’affichage du menu déroulant (aligné sur le formulaire « Service 4 saisons »). */
export const NEED_SELECT_ORDER: NeedType[] = [
  "abattage",
  "elagage",
  "taille",
  "haubanage",
  "urgence",
  "plantation_amenagement_fertilisation",
  "visite_consultative",
  "autre",
];

export const MULTI_STEP_NEEDS: NeedType[] = ["abattage", "elagage", "taille"];

export const needLabels: Record<NeedType, string> = {
  abattage: "Abattage",
  elagage: "Élagage",
  taille: "Taille",
  haubanage: "Haubanage",
  urgence: "Urgence",
  plantation_amenagement_fertilisation: "Plantation & aménagement arboricole & fertilisation",
  visite_consultative: "Visite consultative tarifée (150$+taxes)",
  autre: "Autre",
};

export const contactIntroByNeed: Record<
  NeedType,
  { title: string; subtitle: string; tag: string }
> = {
  abattage: {
    title: "Informations de contact client",
    subtitle: "Complétez vos coordonnées pour finaliser votre demande d'abattage.",
    tag: needLabels.abattage,
  },
  elagage: {
    title: "Informations de contact client",
    subtitle: "Complétez vos coordonnées pour finaliser votre demande d'élagage.",
    tag: needLabels.elagage,
  },
  taille: {
    title: "Informations de contact client",
    subtitle: "Complétez vos coordonnées pour finaliser votre demande de taille.",
    tag: needLabels.taille,
  },
  haubanage: {
    title: "Informations de contact client",
    subtitle: "Nous allons vous contacter sous peu.",
    tag: needLabels.haubanage,
  },
  urgence: {
    title: "Informations de contact client",
    subtitle: "Comptez sur nous pour intervenir dans les plus brefs délais.",
    tag: needLabels.urgence,
  },
  plantation_amenagement_fertilisation: {
    title: "Laissez-nous votre numéro de téléphone",
    subtitle: "Nous vous contacterons pour discuter de vos besoins en plantation, aménagement arboricole ou fertilisation.",
    tag: needLabels.plantation_amenagement_fertilisation,
  },
  visite_consultative: {
    title: "Informations de contact client",
    subtitle:
      "Visite consultative tarifée : 150 $ + taxes. Indiquez vos disponibilités dans le message ; nous vous rappellerons pour fixer le rendez-vous.",
    tag: needLabels.visite_consultative,
  },
  autre: {
    title: "Informations de contact client",
    subtitle: "Parlez-nous de votre besoin et nous vous recontacterons.",
    tag: needLabels.autre,
  },
};

export function needsMultiStep(need: NeedType) {
  return MULTI_STEP_NEEDS.includes(need);
}
