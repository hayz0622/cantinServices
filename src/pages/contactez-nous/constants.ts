import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const faqs = [
  {
    q: "Offrez-vous des soumissions gratuites?",
    a: "Oui! Nous offrons des soumissions gratuites et sans engagement pour tous nos services. Contactez-nous par téléphone, texto ou via le formulaire.",
  },
  {
    q: "Quelle est votre zone de service?",
    a: "Nous desservons la Mauricie, Mékinac, Portneuf et les environs — incluant Trois-Rivières, Shawinigan, Saint-Tite, Saint-Raymond, Pont-Rouge et davantage.",
  },
  {
    q: "Offrez-vous un service d'urgence?",
    a: "Oui, notre service d'urgence est disponible 24 heures sur 24, 7 jours sur 7, pour les situations critiques.",
  },
  {
    q: "Avez-vous besoin d'un permis pour abattre un arbre?",
    a: "Dans la plupart des municipalités, un certificat d'autorisation est requis. Nous vous accompagnons dans les démarches et pouvons agir comme mandataire.",
  },
];

export const contactItems = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "418-255-1688",
    sub: "Appelez ou textez",
    href: "tel:4182551688",
    accent: false,
  },
  {
    icon: Mail,
    label: "Courriel",
    value: "cantinservicesdarbres@gmail.com",
    sub: "Réponse rapide",
    href: "mailto:cantinservicesdarbres@gmail.com",
    accent: false,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Saint-Raymond, QC",
    sub: "Base d'opérations",
    href: null,
    accent: false,
  },
  {
    icon: Clock,
    label: "Heures",
    value: "Lundi – Dimanche",
    sub: "8h – 20h · Urgence 24/7",
    href: null,
    accent: true,
  },
] as const;
