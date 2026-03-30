import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageIcon, CheckCircle2 } from "lucide-react";

const sections = [
  {
    id: "abattage",
    title: "Abattage",
    badge: "Service principal",
    image: "",
    desc: "L'abattage d'arbres est une opération délicate qui nécessite une expertise professionnelle. Nos arboristes certifiés évaluent chaque situation pour déterminer la méthode la plus sécuritaire.",
    items: ["Abattage conventionnel", "Démontage en espace restreint", "Essouchage", "Nettoyage complet du site"],
    accent: "primary",
  },
  {
    id: "elagage",
    title: "Élagage",
    badge: "Entretien régulier",
    image: "",
    desc: "L'élagage consiste à retirer les branches mortes, malades ou dangereuses pour maintenir la santé et l'esthétique de vos arbres. Un élagage régulier prévient les risques de chutes de branches.",
    items: ["Élagage d'entretien", "Élagage de formation", "Élagage sanitaire", "Taille de réduction"],
    accent: "primary",
  },
  {
    id: "haubanage",
    title: "Haubanage",
    badge: "Sécurité",
    image: "",
    desc: "Le haubanage permet de stabiliser les arbres fragilisés ou à risque de bris en installant des câbles et des tiges de soutien dans la canopée.",
    items: ["Installation de câbles dynamiques", "Haubanage de sécurité", "Évaluation des risques", "Suivi et ajustement"],
    accent: "primary",
  },
  {
    id: "taille",
    title: "Taille",
    badge: "Ornemental & fruitier",
    image: "",
    desc: "La taille d'arbres fruitiers, de haies et d'arbustes ornementaux favorise une croissance saine et une production optimale de fruits.",
    items: ["Taille d'arbres fruitiers", "Taille de haies", "Taille ornementale", "Taille de rajeunissement"],
    accent: "primary",
  },
  {
    id: "plantation",
    title: "Plantation",
    badge: "Aménagement",
    image: "",
    desc: "Nous vous aidons à choisir les bonnes espèces d'arbres et d'arbustes adaptées à votre terrain, au climat et à vos objectifs paysagers.",
    items: ["Sélection d'espèces", "Préparation du sol", "Plantation professionnelle", "Conseils d'entretien post-plantation"],
    accent: "primary",
  },
  {
    id: "fertilisation",
    title: "Fertilisation",
    badge: "Santé du sol",
    image: "",
    desc: "La fertilisation adaptée renforce la vitalité de vos arbres et améliore la qualité de votre sol. Nos experts analysent votre terrain pour recommander le traitement idéal.",
    items: ["Analyse du sol", "Fertilisation profonde", "Amendement organique", "Programme d'entretien annuel"],
    accent: "primary",
  },
  {
    id: "urgence",
    title: "Services d'urgence",
    badge: "Disponible 24/7",
    image: "",
    desc: "En cas de tempête, de verglas ou de bris d'arbre imprévu, notre équipe intervient rapidement 24 heures sur 24, 7 jours sur 7, pour sécuriser votre propriété.",
    items: ["Intervention 24/7", "Dégagement de routes et entrées", "Stabilisation d'arbres dangereux", "Nettoyage après tempête"],
    accent: "accent",
  },
  {
    id: "deneigement",
    title: "Déneigement sur corde",
    badge: "Service hivernal",
    image: "",
    desc: "Notre service de déneigement de toitures utilise des techniques d'accès sur corde pour retirer la neige et la glace des toitures en hauteur de manière sécuritaire.",
    items: ["Déneigement de toitures", "Retrait de glace", "Accès sur corde", "Prévention des dommages"],
    accent: "accent",
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
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative gradient-hero py-24 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(80,58%,38%)" }} />
          <div className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(35,90%,52%)" }} />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-6 bg-accent/15 border border-accent/20 px-4 py-1.5 rounded-full">
              Guide complet
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
              En <span className="text-gradient-amber">apprendre</span> davantage
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Découvrez en détail chacun de nos services d'arboriculture professionnelle.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 50L1440 50L1440 15C1200 45 900 0 720 15C540 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Sections alternées ────────────────────────────────── */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 scroll-mt-24 ${i % 2 === 1 ? "bg-cream-dark" : "bg-white"}`}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full border ${
                  s.accent === "accent"
                    ? "text-accent bg-accent/10 border-accent/20"
                    : "text-primary bg-primary/8 border-primary/15"
                }`}>
                  {s.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-5">
                  {s.title}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base">{s.desc}</p>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2
                        size={18}
                        className={s.accent === "accent" ? "text-accent shrink-0" : "text-primary shrink-0"}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="rounded-2xl shadow-card-hover w-full h-80 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className={`rounded-2xl w-full h-80 flex flex-col items-center justify-center gap-3 border-2 border-dashed relative overflow-hidden ${
                    s.accent === "accent" ? "border-accent/25 bg-accent/5" : "border-primary/20 bg-primary/4"
                  }`}>
                    <div className="absolute inset-0 opacity-[0.03]"
                      style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }}
                    />
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      s.accent === "accent" ? "bg-accent/15" : "bg-primary/10"
                    }`}>
                      <ImageIcon size={28} className={s.accent === "accent" ? "text-accent" : "text-primary"} />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">Photo — {s.title}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Apprendre;
