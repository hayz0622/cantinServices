import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TreePine, Scissors, Cable, Flower2, Sprout, Droplets,
  AlertTriangle, Snowflake, Award, HeartHandshake, Clock,
  MapPin, Phone, ArrowRight, CheckCircle2, ShieldCheck,
} from "lucide-react";

import heroBg1 from "@/assets/hero-bg-1.png";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg3 from "@/assets/hero-bg-3.png";
import parralaxTreeCare from "@/assets/parallax-treecare.jpg";
import parralaxRealisations from "@/assets/realisations-relevage-halle.jpg";
import { ParallaxImageBand } from "@/components/ParallaxImageBand";
import { SERVICE_ZONES } from "@/content/zones";
import { fadeUp } from "@/lib/motionVariants";

const HERO_BG_IMAGES = [
  { src: heroBg1, mobile: "center 50%", desktop: "center 45%" },
  { src: heroBg2, mobile: "center 50%", desktop: "center 42%" },
  { src: heroBg3, mobile: "center 48%", desktop: "center 40%" },
] as const;
const HERO_BG_INTERVAL_MS = 6500;

const services = [
  { icon: TreePine, label: "Abattage", desc: "Abattage sécuritaire d'arbres de toutes tailles", color: "from-green-500/10 to-green-600/5" },
  { icon: Scissors, label: "Élagage", desc: "Taille et entretien de vos arbres", color: "from-emerald-500/10 to-emerald-600/5" },
  { icon: Cable, label: "Haubanage", desc: "Stabilisation des arbres fragilisés", color: "from-teal-500/10 to-teal-600/5" },
  { icon: Flower2, label: "Taille", desc: "Taille d'arbres fruitiers et ornementaux", color: "from-lime-500/10 to-lime-600/5" },
  { icon: Sprout, label: "Plantation et aménagement arboriculture", desc: "Plantation et aménagement d'espaces verts durables", color: "from-green-500/10 to-green-600/5" },
  { icon: Droplets, label: "Fertilisation", desc: "Fertilisation et soins du sol", color: "from-cyan-500/10 to-cyan-600/5" },
  { icon: AlertTriangle, label: "Services d'urgence", desc: "Intervention rapide 24/7", color: "from-amber-500/10 to-amber-600/5" },
  { icon: Snowflake, label: "Déneigement sur corde", desc: "Déneigement de toitures en hauteur", color: "from-sky-500/10 to-sky-600/5" },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Nos certifications",
    desc: "Technicien avec certification en travail sur corde SPRAT et technicien diplômé en élagage et en arboriculture.",
    stat: "SPRAT",
    statLabel: "Certifié",
  },
  {
    icon: HeartHandshake,
    title: "Service client exceptionnel",
    desc: "Nous prenons le temps de comprendre vos besoins et laissons l'endroit plus propre qu'à notre arrivée. Téléphone, texto et courriel disponibles.",
    stat: "5★",
    statLabel: "Satisfaction",
  },
  {
    icon: Clock,
    title: "Disponibilité et flexibilité",
    desc: "Ouverts du lundi au dimanche durant 4 saisons. Service d'urgence disponible en tout temps pour les situations critiques.",
    stat: "7j/7",
    statLabel: "Disponible",
  },
];

const Index = () => {
  const [heroBgIndex, setHeroBgIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroBgIndex((i) => (i + 1) % HERO_BG_IMAGES.length);
    }, HERO_BG_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center text-center overflow-hidden bg-neutral-950">
        <div className="absolute inset-0" aria-hidden>
          {HERO_BG_IMAGES.map((slide, i) => (
            <div
              key={slide.src}
              className={`responsive-focal-bg absolute inset-0 bg-cover bg-no-repeat transition-opacity ease-in-out ${
                i === heroBgIndex ? "opacity-100" : "opacity-0"
              }`}
              style={
                {
                  backgroundImage: `url(${slide.src})`,
                  "--focal-mobile": slide.mobile,
                  "--focal-desktop": slide.desktop,
                  transitionDuration: "1.4s",
                } as CSSProperties
              }
            />
          ))}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.72) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 container py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold px-4 py-2 rounded-full mb-8"
          >
            <CheckCircle2 size={12} className="text-accent" />
            Certification SPRAT · Diplômé en arboriculture
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-3 leading-[1.08] tracking-tight"
          >
            Cantin Services D'arbres
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-display font-bold text-white/80 mb-2"
          >
            Services d'émondage
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-xl md:text-2xl font-display font-semibold mb-8"
          >
            à <span className="text-gradient-amber">Saint-Stanislas-de-Champlain</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nous comprenons l'importance de garder vos arbres en santé et en sécurité.
            Au service des propriétaires résidentiels et gestionnaires municipaux. Disponibles 7 jours sur 7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contactez-nous"
              className="inline-flex items-center gap-2.5 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all duration-200 shadow-glow-primary hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Contactez-nous
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contactez-nous#soumission"
              className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-accent/90 transition-all duration-200 shadow-glow-accent hover:-translate-y-0.5 group"
            >
              Parlez-nous de votre projet ici!
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 55 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────── */}
      <section className="py-5 bg-accent">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TreePine className="text-white/80" size={20} />
            <p className="text-white font-bold text-base">Un arbre à abattre ou élaguer?</p>
          </div>
          <Link
            to="/contactez-nous#soumission"
            className="inline-flex items-center gap-2 bg-white text-accent px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors shadow-sm"
          >
            Soumission gratuite
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
              <span className="w-8 h-0.5 bg-primary" />
              À propos
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
              Des racines{" "}
              <span className="text-gradient">à la cime</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Chez Cantin Services D'arbres, nous offrons des services d'arboriculture complets adaptés à vos besoins.
              Notre équipe s'engage à préserver la santé et la beauté de vos arbres tout en assurant la sécurité
              de votre propriété.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nous servons les propriétaires résidentiels et les gestionnaires municipaux de la Mauricie,
              Mékinac et Portneuf. Disponibles 7 jours sur 7, même en cas d'urgence.
            </p>
          </motion.div>
        </div>
      </section>

      <ParallaxImageBand src={heroBg2} focalYMobile="50%" focalYDesktop="45%" />

      {/* ── Services grid ────────────────────────────────────────── */}
      <section className="py-20 bg-cream-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              Ce que nous faisons
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">
              Nos <span className="text-gradient">services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  to="/nos-services"
                  className="group flex flex-col items-center text-center bg-white rounded-2xl p-7 border border-border/60 shadow-card card-hover h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 border border-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir + <ArrowRight size={11} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reassurance CTA ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="container text-center max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">
              Prendre soin de vos arbres,{" "}
              <span className="text-gradient">c'est aussi prendre soin de vous.</span>
            </h2>
            <p className="text-muted-foreground mb-2 text-lg">
              Notre équipe est là pour vous aider.
            </p>
            <p className="text-muted-foreground mb-8">
              Faites confiance à nos experts diplômés pour tous vos besoins en entretien d'arbres.
            </p>
            <a
              href="tel:4182551688"
              className="inline-flex items-center gap-2.5 border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-200 group"
            >
              <Phone size={17} />
              Appelez-nous maintenant
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <ParallaxImageBand src={parralaxTreeCare} focalYMobile="58%" focalYDesktop="52%" />

      {/* ── Why choose us ────────────────────────────────────────── */}
      <section className="py-20 gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-accent" />
              Nos avantages
              <span className="w-8 h-0.5 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">
              Pourquoi choisir{" "}
              <span className="text-gradient-amber">Cantin Services D'arbres?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeUp}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-accent" size={28} />
                </div>
                <div className="text-3xl font-extrabold text-accent mb-1">{item.stat}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">{item.statLabel}</div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free quote CTA ───────────────────────────────────────── */}
      <section className="gradient-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="container relative text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-3">
              Obtenez une soumission gratuite!
            </h2>
            <p className="mb-3 text-white/80 text-lg">
              Projet d'élagage, d'abattage ou d'entretien d'arbres?
            </p>
            <p className="mb-8 text-white/65">
              Nous évaluons vos besoins et proposons des solutions adaptées, sans frais.
            </p>
            <Link
              to="/contactez-nous#soumission"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-10 py-4 rounded-xl font-bold text-base hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Demander une soumission
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Zones ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              Régions desservies
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">
              Zones de <span className="text-gradient">service</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto"
          >
            {SERVICE_ZONES.map((z) => (
              <div
                key={z}
                className="flex items-center gap-2.5 bg-muted/50 rounded-xl px-4 py-3 border border-border/50 text-sm font-medium hover:bg-primary/6 hover:border-primary/20 hover:text-primary transition-all duration-200 group"
              >
                <MapPin size={13} className="text-primary shrink-0" />
                <span>{z}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxImageBand src={parralaxRealisations} focalYMobile="50%" focalYDesktop="42%" />

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-cream-dark">
        <div className="container text-center max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">
              Améliorez la santé{" "}
              <span className="text-gradient">de votre terrain</span> avec un expert dédié!
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée.
            </p>
            <Link
              to="/contactez-nous"
              className="inline-flex items-center gap-2.5 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-glow-primary hover:-translate-y-0.5 group"
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

export default Index;
