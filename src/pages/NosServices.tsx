import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TreePine, Scissors, Cable, Flower2, Sprout, Droplets, AlertTriangle, Snowflake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TreePine,
    label: "Abattage",
    desc: "Abattage sécuritaire d'arbres dangereux, morts ou indésirables. Nous utilisons des techniques de démontage pour les espaces restreints.",
    hash: "abattage",
    gradient: "from-green-500/15 to-green-700/5",
  },
  {
    icon: Scissors,
    label: "Élagage",
    desc: "Taille d'entretien et élagage de formation pour maintenir la santé et l'esthétique de vos arbres.",
    hash: "elagage",
    gradient: "from-emerald-500/15 to-emerald-700/5",
  },
  {
    icon: Cable,
    label: "Haubanage",
    desc: "Installation de câbles et de tiges pour stabiliser les arbres à risque de bris ou de chute.",
    hash: "haubanage",
    gradient: "from-teal-500/15 to-teal-700/5",
  },
  {
    icon: Flower2,
    label: "Taille",
    desc: "Taille d'arbres fruitiers, de haies et d'arbustes ornementaux pour une croissance optimale.",
    hash: "taille",
    gradient: "from-lime-500/15 to-lime-700/5",
  },
  {
    icon: Sprout,
    label: "Plantation",
    desc: "Sélection et plantation d'arbres et d'arbustes adaptés à votre terrain et au climat.",
    hash: "plantation",
    gradient: "from-green-600/15 to-green-800/5",
  },
  {
    icon: Droplets,
    label: "Fertilisation",
    desc: "Analyse du sol et fertilisation adaptée pour renforcer la vitalité de vos arbres.",
    hash: "fertilisation",
    gradient: "from-cyan-500/15 to-cyan-700/5",
  },
  {
    icon: AlertTriangle,
    label: "Services d'urgence",
    desc: "Intervention rapide 24/7 pour les arbres dangereux suite à des tempêtes ou bris.",
    hash: "urgence",
    gradient: "from-amber-500/15 to-amber-700/5",
  },
  {
    icon: Snowflake,
    label: "Déneigement sur corde",
    desc: "Déneigement de toitures en hauteur avec des techniques d'accès sur corde.",
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
          <div className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(35,90%,52%)" }} />
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
              Des solutions complètes pour l'entretien de vos arbres et de votre terrain.
            </p>
            <Link
              to="/contactez-nous#soumission"
              className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all duration-200 shadow-glow-accent hover:-translate-y-0.5 group"
            >
              Soumission gratuite
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
            <p className="text-muted-foreground leading-relaxed text-lg">
              Notre équipe d'arboristes certifiés offre une gamme complète de services pour assurer
              la santé, la sécurité et la beauté de vos arbres.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────── */}
      <section className="py-6 pb-24 bg-cream-dark">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  to={`/apprendre#${s.hash}`}
                  className="group flex flex-col items-center text-center bg-white rounded-2xl p-7 border border-border/60 shadow-card card-hover h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 border border-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-primary text-xs font-bold border border-primary/20 rounded-lg px-3 py-1.5 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    Voir les détails <ArrowRight size={11} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
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
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-3">Besoin d'un service?</h2>
            <p className="mb-8 text-white/80 text-lg">Contactez-nous pour une évaluation gratuite de vos besoins.</p>
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
