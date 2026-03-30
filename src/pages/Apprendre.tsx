import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageIcon } from "lucide-react";

// TODO: Replace these with your actual image imports
// import apprendreAbattage from "@/assets/apprendre-abattage.jpg";
// import apprendreElagage from "@/assets/apprendre-elagage.png";
// import apprendreHaubanage from "@/assets/apprendre-haubanage.png";
// import apprendreTaille from "@/assets/apprendre-taille.jpg";
// import apprendrePlantation from "@/assets/apprendre-plantation.avif";
// import galerieUrgenceEte from "@/assets/galerie-urgence-ete.jpg";
// import galerieUrgenceHiver from "@/assets/galerie-urgence-hiver.jpg";
// import galerieLumiere1 from "@/assets/galerie-lumiere1.jpg";

const sections = [
  {
    id: "abattage",
    title: "Abattage",
    image: "", // TODO: apprendreAbattage
    desc: "L'abattage d'arbres est une opération délicate qui nécessite une expertise professionnelle. Nos arboristes certifiés évaluent chaque situation pour déterminer la méthode la plus sécuritaire.",
    items: ["Abattage conventionnel", "Démontage en espace restreint", "Essouchage", "Nettoyage complet du site"],
  },
  {
    id: "elagage",
    title: "Élagage",
    image: "", // TODO: apprendreElagage
    desc: "L'élagage consiste à retirer les branches mortes, malades ou dangereuses pour maintenir la santé et l'esthétique de vos arbres. Un élagage régulier prévient les risques de chutes de branches.",
    items: ["Élagage d'entretien", "Élagage de formation", "Élagage sanitaire", "Taille de réduction"],
  },
  {
    id: "haubanage",
    title: "Haubanage",
    image: "", // TODO: apprendreHaubanage
    desc: "Le haubanage permet de stabiliser les arbres fragilisés ou à risque de bris en installant des câbles et des tiges de soutien dans la canopée.",
    items: ["Installation de câbles dynamiques", "Haubanage de sécurité", "Évaluation des risques", "Suivi et ajustement"],
  },
  {
    id: "taille",
    title: "Taille",
    image: "", // TODO: apprendreTaille
    desc: "La taille d'arbres fruitiers, de haies et d'arbustes ornementaux favorise une croissance saine et une production optimale de fruits.",
    items: ["Taille d'arbres fruitiers", "Taille de haies", "Taille ornementale", "Taille de rajeunissement"],
  },
  {
    id: "plantation",
    title: "Plantation",
    image: "", // TODO: apprendrePlantation
    desc: "Nous vous aidons à choisir les bonnes espèces d'arbres et d'arbustes adaptées à votre terrain, au climat et à vos objectifs paysagers.",
    items: ["Sélection d'espèces", "Préparation du sol", "Plantation professionnelle", "Conseils d'entretien post-plantation"],
  },
  {
    id: "fertilisation",
    title: "Fertilisation",
    image: "", // TODO: galerieLumiere1
    desc: "La fertilisation adaptée renforce la vitalité de vos arbres et améliore la qualité de votre sol. Nos experts analysent votre terrain pour recommander le traitement idéal.",
    items: ["Analyse du sol", "Fertilisation profonde", "Amendement organique", "Programme d'entretien annuel"],
  },
  {
    id: "urgence",
    title: "Services d'urgence",
    image: "", // TODO: galerieUrgenceEte
    desc: "En cas de tempête, de verglas ou de bris d'arbre imprévu, notre équipe intervient rapidement 24 heures sur 24, 7 jours sur 7, pour sécuriser votre propriété.",
    items: ["Intervention 24/7", "Dégagement de routes et entrées", "Stabilisation d'arbres dangereux", "Nettoyage après tempête"],
  },
  {
    id: "deneigement",
    title: "Déneigement sur corde",
    image: "", // TODO: galerieUrgenceHiver
    desc: "Notre service de déneigement de toitures utilise des techniques d'accès sur corde pour retirer la neige et la glace des toitures en hauteur de manière sécuritaire.",
    items: ["Déneigement de toitures", "Retrait de glace", "Accès sur corde", "Prévention des dommages"],
  },
];

const Apprendre = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20 text-center text-secondary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            En <span className="text-primary">apprendre</span> davantage
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mt-4">
            Découvrez en détail chacun de nos services d'arboriculture.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-16 ${i % 2 === 1 ? "bg-cream-dark" : ""}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "order-2" : ""}>
                <div className="w-12 h-0.5 bg-primary mb-4" />
                <h2 className="text-3xl font-display font-bold mb-4">
                  {s.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "order-1" : ""}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="rounded-lg shadow-lg w-full h-80 bg-muted flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon size={32} />
                    <span className="text-sm">Image — {s.title}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Apprendre;
