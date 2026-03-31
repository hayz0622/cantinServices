import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TreePine, Scissors, Cable, Flower2, Sprout, Droplets, AlertTriangle, Snowflake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TreePine,
    label: "Abattage",
    intro: "Arbres dangereux ou encombrants",
    desc: "Nos professionnels utilisent des techniques de démontage sécuritaire adaptées à chaque situation. Chaque cas est évalué avec soin pour choisir la méthode la plus appropriée — abattage par le pied ou démontage en espace restreint.",
    items: ["Abattage conventionnel par le pied", "Démontage en espace restreint", "Essouchage", "Nettoyage complet du site"],
    hash: "abattage",
    gradient: "from-green-500/15 to-green-700/5",
  },
  {
    icon: Scissors,
    label: "Élagage",
    intro: "Assurez la vitalité et la structure optimale de vos arbres",
    desc: "Relevage, élagage esthétique pour retirer les branches mortes et malades, et interventions nécessaires lorsqu'une branche nuit aux fils électriques, à votre maison ou à votre stationnement. Descente contrôlée sur corde disponible.",
    items: ["Élagage d'entretien et sanitaire", "Élagage de formation", "Relevage de couronne", "Descente contrôlée sur corde"],
    hash: "elagage",
    gradient: "from-emerald-500/15 to-emerald-700/5",
  },
  {
    icon: Cable,
    label: "Haubanage",
    intro: "Soyons préventifs — conservez la beauté de votre arbre",
    desc: "Lorsque des branches charpentières présentent des signes de faiblesse structurale, un câble d'acier permet de limiter les risques de chute — idéal pour les arbres en bord de sentier piéton, surplombant un stationnement ou des bâtiments.",
    items: ["Câble d'acier pour branches charpentières", "Arbres en bord de sentier piéton", "Arbres surplombant stationnements", "Évaluation des risques structuraux"],
    hash: "haubanage",
    gradient: "from-teal-500/15 to-teal-700/5",
  },
  {
    icon: Flower2,
    label: "Taille",
    intro: "Conservez la densité et l'apparence de vos arbres",
    desc: "Haies de conifères ou feuillus, taille de formation et taille d'arbres fruitiers pour une croissance optimale. Une haie non entretenue peut gagner jusqu'à 24 pouces par an — une taille annuelle limite cette expansion à 2 à 4 pouces.",
    items: ["Haies de conifères ou feuillus", "Taille de formation", "Taille d'arbres fruitiers", "Taille de rajeunissement"],
    hash: "taille",
    gradient: "from-lime-500/15 to-lime-700/5",
  },
  {
    icon: Sprout,
    label: "Plantation et aménagement arboricole",
    intro: "Créez des espaces verts durables",
    desc: "Plantations réalisées dans les règles de l'art. Choisissez vos arbres parmi nos pépinières partenaires. Aménagement horticole et conseils pour assurer le futur de vos arbres.",
    items: ["Sélection parmi pépinières partenaires", "Plantation professionnelle", "Aménagement horticole", "Conseils post-plantation"],
    hash: "plantation",
    gradient: "from-green-600/15 to-green-800/5",
  },
  {
    icon: Droplets,
    label: "Fertilisation",
    intro: "Revitalisez vos arbres et stimulez leur croissance",
    desc: "Apports nutritifs adaptés aux besoins réels de vos arbres : analyse des carences, fertilisants appropriés au moment optimal. Traitement contre les maladies, fertilisation granulaire et par injections disponibles.",
    items: ["Analyse des carences du sol", "Fertilisation granulaire", "Fertilisation par injections", "Traitement contre les maladies"],
    hash: "fertilisation",
    gradient: "from-cyan-500/15 to-cyan-700/5",
  },
  {
    icon: AlertTriangle,
    label: "Services d'urgence",
    intro: "Reprenez rapidement le contrôle des situations critiques",
    desc: "Tempête, bris de branche menaçant votre maison, arbre tombé bloquant votre accès — nous intervenons sans délai pour sécuriser votre propriété. Disponible 24h/24, 7j/7.",
    items: ["Intervention 24/7", "Dégagement après tempête", "Stabilisation d'arbres dangereux", "Sécurisation de la propriété"],
    hash: "urgence",
    gradient: "from-amber-500/15 to-amber-700/5",
  },
  {
    icon: Snowflake,
    label: "Déneigement sur corde",
    intro: "Libérez vos toitures des accumulations dangereuses",
    desc: "Techniques d'accès sur corde spécialisées pour les zones difficiles d'accès, sans endommager votre propriété ni compromettre notre sécurité. Évite les surcharges pouvant causer des affaissements.",
    items: ["Déneigement de toitures en hauteur", "Accès sur corde spécialisé", "Retrait de glace", "Prévention des surcharges"],
    hash: "deneigement",
    gradient: "from-sky-500/15 to-sky-700/5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const NosServices = () => {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative gradient-hero py-24 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(80,58%,38%)" }} />
          <div className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(22,100%,44%)" }} />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-6 bg-accent/15 border border-accent/20 px-4 py-1.5 rounded-full">
              Solutions complètes
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
              Nos <span className="text-gradient-amber">Services</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
              Des solutions complètes adaptées à vos besoins et à ceux de vos arbres.
            </p>
            <Link
              to="/contactez-nous#soumission"
              className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all duration-200 shadow-glow-accent hover:-translate-y-0.5 group"
            >
              Soumission gratuite ici!
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 50L1440 50L1440 15C1200 45 900 0 720 15C540 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-primary" />
              Notre expertise
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-5">
              Préservez la vitalité{" "}
              <span className="text-gradient">de vos arbres</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Que ce soit pour l'entretien régulier de vos arbres, un projet d'aménagement paysager
              ou une intervention urgente, nous offrons des solutions complètes adaptées à vos besoins.
            </p>
            <h3 className="text-xl font-display font-bold text-foreground mt-8">
              De quoi avez-vous besoin?
            </h3>
          </motion.div>
        </div>
      </section>

      {/* ── Services détaillés ────────────────────────────────── */}
      <section className="pb-24 bg-cream-dark pt-4">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i % 4}
                variants={fadeUp}
              >
                <div className="group flex flex-col bg-white rounded-2xl p-7 border border-border/60 shadow-card card-hover h-full">
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 border border-primary/10 group-hover:scale-105 transition-transform duration-300`}>
                      <s.icon className="text-primary" size={26} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg leading-tight">{s.label}</h3>
                      <p className="text-sm text-accent font-semibold mt-0.5">{s.intro}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mt-auto">
                    <Link
                      to={`/apprendre#${s.hash}`}
                      className="flex-1 flex items-center justify-center gap-1.5 text-primary text-xs font-bold border border-primary/20 rounded-lg px-3 py-2.5 hover:bg-primary hover:text-white transition-all duration-200 group/btn"
                    >
                      En savoir +
                      <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      to="/contactez-nous#soumission"
                      className="flex items-center gap-1.5 text-xs font-bold bg-accent/10 text-accent border border-accent/20 rounded-lg px-3 py-2.5 hover:bg-accent hover:text-white transition-all duration-200"
                    >
                      Ici!
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA finale ────────────────────────────────────────── */}
      <section className="gradient-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="container relative text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-3">
              Collaborez avec nos leaders en arboriculture
            </h2>
            <p className="mb-2 text-white/80 text-base">
              à Saint-Raymond et partout ailleurs au Québec.
            </p>
            <p className="mb-8 text-white/65 text-sm">Contactez-nous pour une évaluation gratuite de vos besoins.</p>
            <Link
              to="/contactez-nous"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-white/90 transition-all duration-200 shadow-lg hover:-translate-y-0.5 group"
            >
              Contactez-nous
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NosServices;
