import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TreePine, Scissors, Cable, Flower2, Sprout, Droplets, AlertTriangle, Snowflake, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

import imgAbattage from "@/assets/hero-bg-1.png";
import imgHaubanage from "@/assets/Apprendre-haubanage-2.png";
import imgFertilisation from "@/assets/Apprendre_fertilisation.jpg";
import imgUrgence from "@/assets/galerie-urgence-hiver.jpg";
import imgDeneigement from "@/assets/galerie-urgence-hiver.jpg";
import apprendreElagace from "@/assets/apprendre_elagage_1.jpg";
import apprendrePlantation from "@/assets/apprendre_plantation_1.avif";
import parralaxTreeCare from "@/assets/parallax-treecare.jpg";
import heroBg from "@/assets/Realisations - pin forestier 1.jpg";

import { PageHero } from "@/components/PageHero";
import { fadeUp } from "@/lib/motionVariants";

type Service = {
  icon: typeof TreePine;
  label: string;
  image: string;
  imagePositionMobile: string;
  imagePositionDesktop: string;
  intro: string;
  desc: string;
  items: string[];
  hash: string;
  gradient: string;
};

const services: Service[] = [
  {
    icon: TreePine,
    label: "Abattage",
    image: imgAbattage,
    imagePositionMobile: "center 50%",
    imagePositionDesktop: "center 45%",
    intro: "Arbres dangereux ou encombrants",
    desc: "Nos professionnels utilisent des techniques de démontage sécuritaire adaptées à chaque situation. Chaque cas est évalué avec soin pour choisir la méthode la plus appropriée — abattage par le pied ou démontage en espace restreint.",
    items: ["Abattage conventionnel par le pied", "Démontage en espace restreint", "Essouchage", "Nettoyage complet du site"],
    hash: "abattage",
    gradient: "from-green-500/15 to-green-700/5",
  },
  {
    icon: Scissors,
    label: "Élagage",
    image: apprendreElagace,
    imagePositionMobile: "center 40%",
    imagePositionDesktop: "center 35%",
    intro: "Assurez la vitalité et la structure optimale de vos arbres",
    desc: "Relevage, élagage esthétique pour retirer les branches mortes et malades, et interventions nécessaires lorsqu'une branche nuit aux fils électriques, à votre maison ou à votre stationnement. Descente contrôlée sur corde disponible.",
    items: ["Élagage d'entretien et sanitaire", "Élagage de formation", "Relevage de couronne", "Descente contrôlée sur corde"],
    hash: "elagage",
    gradient: "from-emerald-500/15 to-emerald-700/5",
  },
  {
    icon: Cable,
    label: "Haubanage",
    image: imgHaubanage,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 40%",
    intro: "Soyons préventifs — conservez la beauté de votre arbre",
    desc: "Lorsque des branches charpentières présentent des signes de faiblesse structurale, un câble d'acier permet de limiter les risques de chute — idéal pour les arbres en bord de sentier piéton, surplombant un stationnement ou des bâtiments.",
    items: ["Câble d'acier pour branches charpentières", "Arbres en bord de sentier piéton", "Arbres surplombant stationnements", "Évaluation des risques structuraux"],
    hash: "haubanage",
    gradient: "from-teal-500/15 to-teal-700/5",
  },
  {
    icon: Flower2,
    label: "Taille",
    image: parralaxTreeCare,
    imagePositionMobile: "center 55%",
    imagePositionDesktop: "center 50%",
    intro: "Conservez la densité et l'apparence de vos arbres",
    desc: "Haies de conifères ou feuillus, taille de formation et taille d'arbres fruitiers pour une croissance optimale. Une haie non entretenue peut gagner jusqu'à 24 pouces par an — une taille annuelle limite cette expansion à 2 à 4 pouces.",
    items: ["Haies de conifères ou feuillus", "Taille de formation", "Taille d'arbres fruitiers", "Taille de rajeunissement"],
    hash: "taille",
    gradient: "from-lime-500/15 to-lime-700/5",
  },
  {
    icon: Sprout,
    label: "Plantation et aménagement arboricole",
    image: apprendrePlantation,
    imagePositionMobile: "center 55%",
    imagePositionDesktop: "center 50%",
    intro: "Créez des espaces verts durables",
    desc: "Plantations réalisées dans les règles de l'art. Choisissez vos arbres parmi nos pépinières partenaires. Aménagement horticole et conseils pour assurer le futur de vos arbres.",
    items: ["Sélection parmi pépinières partenaires", "Plantation professionnelle", "Aménagement horticole", "Conseils post-plantation"],
    hash: "plantation",
    gradient: "from-green-600/15 to-green-800/5",
  },
  {
    icon: Droplets,
    label: "Fertilisation",
    image: imgFertilisation,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 40%",
    intro: "Revitalisez vos arbres et stimulez leur croissance",
    desc: "Apports nutritifs adaptés aux besoins réels de vos arbres : analyse des carences, fertilisants appropriés au moment optimal. Traitement contre les maladies, fertilisation granulaire et par injections disponibles.",
    items: ["Analyse des carences du sol", "Fertilisation granulaire", "Fertilisation par injections", "Traitement contre les maladies"],
    hash: "fertilisation",
    gradient: "from-cyan-500/15 to-cyan-700/5",
  },
  {
    icon: AlertTriangle,
    label: "Services d'urgence",
    image: imgUrgence,
    imagePositionMobile: "center 48%",
    imagePositionDesktop: "center 42%",
    intro: "Reprenez rapidement le contrôle des situations critiques",
    desc: "Tempête, bris de branche menaçant votre maison, arbre tombé bloquant votre accès — nous intervenons sans délai pour sécuriser votre propriété. Disponible 24h/24, 7j/7.",
    items: ["Intervention 24/7", "Dégagement après tempête", "Stabilisation d'arbres dangereux", "Sécurisation de la propriété"],
    hash: "urgence",
    gradient: "from-amber-500/15 to-amber-700/5",
  },
  {
    icon: Snowflake,
    label: "Déneigement sur corde",
    image: imgDeneigement,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 38%",
    intro: "Libérez vos toitures des accumulations dangereuses",
    desc: "Techniques d'accès sur corde spécialisées pour les zones difficiles d'accès, sans endommager votre propriété ni compromettre notre sécurité. Évite les surcharges pouvant causer des affaissements.",
    items: ["Déneigement de toitures en hauteur", "Accès sur corde spécialisé", "Retrait de glace", "Prévention des surcharges"],
    hash: "deneigement",
    gradient: "from-sky-500/15 to-sky-700/5",
  },
];

const NosServices = () => {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <PageHero image={heroBg} imagePositionMobile="center 45%" imagePositionDesktop="center 40%">
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
      </PageHero>

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
                className="h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i % 4}
                variants={fadeUp}
              >
                <div
                  className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-border/60 shadow-card outline-none transition-shadow duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-dark"
                  tabIndex={0}
                >
                  <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105">
                    <div
                      className="responsive-focal-bg absolute inset-0 bg-cover transition-transform duration-500 ease-out"
                      style={
                        {
                          backgroundImage: `url(${s.image})`,
                          "--focal-mobile": s.imagePositionMobile,
                          "--focal-desktop": s.imagePositionDesktop,
                        } as CSSProperties
                      }
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50 group-focus-within:bg-black/50" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col text-white">
                    <div className="pointer-events-none invisible absolute inset-0 flex flex-col p-4 pb-5 opacity-0 transition-[opacity,visibility] duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 backdrop-blur-sm`}
                          >
                            <s.icon className="text-white" size={22} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-display text-base font-bold leading-tight drop-shadow-sm">{s.label}</h3>
                            <p className="mt-1 text-xs font-semibold text-accent drop-shadow-sm">{s.intro}</p>
                          </div>
                        </div>
                        <div className="mb-3 mt-3 h-px w-1/2 max-w-[12rem] bg-white/40" />
                        <p className="text-xs leading-relaxed text-white/90 drop-shadow-sm">{s.desc}</p>
                        <ul className="mt-3 space-y-1.5">
                          {s.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs font-medium text-white/95">
                              <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link
                            to={`/apprendre#${s.hash}`}
                            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary min-[400px]:flex-none"
                          >
                            En savoir +
                            <ArrowRight size={11} />
                          </Link>
                          <Link
                            to="/contactez-nous#soumission"
                            className="flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/90 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-accent"
                          >
                            Ici!
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none mt-auto p-4 pb-5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                      <div className="mb-3 h-px w-[45%] max-w-[11rem] bg-white/70" />
                      <div className="flex items-end gap-3">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-sm`}
                        >
                          <s.icon className="text-white" size={24} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-base font-bold leading-tight drop-shadow-md">{s.label}</h3>
                          <p className="mt-0.5 text-xs font-semibold text-accent drop-shadow-md">{s.intro}</p>
                        </div>
                      </div>
                    </div>
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
