import { useEffect, type CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageIcon, CheckCircle2, Lightbulb, AlertCircle } from "lucide-react";

import imgAbattage from "@/assets/apprendre-abattage.jpg";
import imgElagage from "@/assets/apprendre_elagage_1.jpg";
import imgHaubanage from "@/assets/Apprendre-haubanage-2.png";
import imgTaille from "@/assets/apprendre-taille.jpg";
import imgPlantation from "@/assets/apprendre_plantation_1.avif";
import imgFertilisation from "@/assets/Apprendre_fertilisation.jpg";
import imgUrgence from "@/assets/galerie-urgence-ete.jpg";
import imgDeneigement from "@/assets/galerie-urgence-hiver.jpg";
import heroBg from "@/assets/Apprendre - Taille de formation.jpg";

import { PageHero } from "@/components/PageHero";

const sections = [
  {
    id: "abattage",
    title: "Abattage",
    badge: "Service principal",
    image: imgAbattage,
    imagePositionMobile: "center 50%",
    imagePositionDesktop: "center 45%",
    desc: "L'abattage d'arbres est une opération délicate qui nécessite une expertise professionnelle. Nos arboristes diplômés évaluent chaque situation pour choisir la méthode la plus sécuritaire. Rappelons que l'arbre crée de l'ombre, bloque les bourrasques de vent, crée de l'intimité, et peut prendre bien plus que le cours d'une vie pour se développer à maturité — nous traitons chaque abattage avec soin.",
    items: ["Démontage d'arbre en grimpe", "Abattage par le pied", "Déboisement résidentiel (construction)", "Déboisement pour chemin privé", "Nettoyage pour érablière"],
    subSections: [
      {
        title: "Services complémentaires",
        items: ["Élimination complète de la souche", "Déchiquetage de branches et résidus", "Manutention complète du bois"],
      },
      {
        title: "Ai-je besoin d'un permis?",
        isInfo: true,
        text: "Un certificat d'autorisation est généralement obligatoire avant d'abattre un arbre selon votre municipalité — le propriétaire doit souvent faire la demande. Nous vous assistons dans ce processus, pouvons agir comme mandataire et produire un rapport professionnel. Exceptions fréquentes : arbre mort, dangereux ou malade (agrile du frêne), nuisant à une construction autorisée ou planté trop près d'infrastructures. Certaines villes exigent la plantation d'un nouvel arbre pour chaque arbre abattu afin de maintenir la canopée.",
      },
    ],
    accent: "primary",
  },
  {
    id: "elagage",
    title: "Élagage",
    badge: "Entretien régulier",
    image: imgElagage,
    imagePositionMobile: "center 42%",
    imagePositionDesktop: "center 38%",
    desc: "L'élagage consiste à retirer les branches mortes, malades ou dangereuses pour maintenir la santé et l'esthétique de vos arbres. Un élagage régulier prévient les risques de chutes de branches et prolonge la vie de l'arbre.",
    items: ["Élagage d'entretien et sanitaire", "Élagage de formation", "Relevage de couronne", "Taille de réduction", "Descente contrôlée sur corde"],
    accent: "primary",
  },
  {
    id: "haubanage",
    title: "Haubanage",
    badge: "Sécurité & prévention",
    image: imgHaubanage,
    imagePositionMobile: "center 48%",
    imagePositionDesktop: "center 42%",
    desc: "Le haubanage permet de sauvegarder des arbres matures en réduisant le stress mécanique causé par les vents violents et le verglas. C'est souvent une solution plus économique que l'abattage complet, tout en préservant la valeur esthétique et l'ombre de votre propriété.",
    items: ["Installation de câbles dynamiques", "Haubanage de sécurité structurale", "Évaluation des risques", "Suivi et ajustement annuel"],
    subSections: [
      {
        title: "Exemples de situations pouvant nécessiter un haubanage",
        items: [
          "Arbres en bord de sentier piéton",
          "Arbres surplombant un stationnement",
          "Arbres surplombant un bâtiment",
          "Branches charpentières avec signes de faiblesse",
          "Arbres à fort potentiel mais fragilisés",
        ],
        note: "Sachez que cette opération ne blesse pas l'arbre. Saviez-vous qu'un arbre penché naturellement est parfaitement balancé? Les arbres s'adaptent à leur environnement en équilibrant leurs racines et leur structure hors terre.",
      },
    ],
    accent: "primary",
  },
  {
    id: "taille",
    title: "Taille",
    badge: "Ornemental & fruitier",
    image: imgTaille,
    imagePositionMobile: "center 48%",
    imagePositionDesktop: "center 42%",
    desc: "La taille de haies et d'arbustes ornementaux favorise une croissance saine et une esthétique impeccable.",
    items: ["Haies de conifères ou feuillus", "Taille de formation", "Taille d'arbres fruitiers", "Taille de rajeunissement"],
    subSections: [
      {
        title: "Gardez le contrôle sur votre investissement.",
        isFact: true,
        text: "Une haie de cèdres peut gagner de 12 à 24 pouces de volume chaque année si elle n'est pas entretenue. Une taille annuelle rigoureuse permet de limiter cette expansion à seulement 2 à 4 pouces, tout en densifiant le feuillage.",
      },
      {
        title: "Maximisez vos récoltes et vos floraisons",
        text: "Un arbre laissé à lui-même produit souvent moins de fruits et des fleurs moins éclatantes. Que ce soit pour votre vieux pommier familial dans Portneuf ou vos arbustes ornementaux en Mauricie, nous maximisons la beauté et la générosité de votre terrain.",
        items: [
          "Taille de dormance (fin hiver : mars à début avril) — préparez la prochaine récolte. Idéal pour pommiers, poiriers et pruniers : voir la structure sans les feuilles et stimuler une croissance vigoureuse.",
          "Taille estivale — après la récolte, pour modérer la croissance et aérer la couronne.",
          "Taille de formation (arbres jeunes) — définir la structure à long terme.",
        ],
      },
    ],
    accent: "primary",
  },
  {
    id: "plantation",
    title: "Plantation et aménagement arboricole",
    badge: "Aménagement",
    image: imgPlantation,
    imagePositionMobile: "center 55%",
    imagePositionDesktop: "center 48%",
    desc: "Nous vous aidons à choisir les bonnes espèces d'arbres et d'arbustes adaptées à votre terrain, au climat et à vos objectifs paysagers. Plantations réalisées dans les règles de l'art.",
    items: ["Sélection parmi nos pépinières partenaires", "Préparation et amendement du sol", "Plantation professionnelle", "Aménagement horticole", "Conseils d'entretien post-plantation"],
    accent: "primary",
  },
  {
    id: "fertilisation",
    title: "Fertilisation",
    badge: "Santé du sol",
    image: imgFertilisation,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 40%",
    desc: "La fertilisation adaptée renforce la vitalité de vos arbres et améliore la qualité de votre sol. Nos experts analysent votre terrain pour recommander le traitement idéal au moment optimal.",
    items: ["Analyse des carences du sol", "Fertilisation profonde", "Fertilisation granulaire", "Fertilisation par injections", "Traitement contre les maladies", "Programme d'entretien annuel"],
    accent: "primary",
  },
  {
    id: "urgence",
    title: "Services d'urgence",
    badge: "Disponible 24/7",
    image: imgUrgence,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 42%",
    desc: "En cas de tempête, de verglas ou de bris d'arbre imprévu, notre équipe intervient rapidement 24 heures sur 24, 7 jours sur 7, pour sécuriser votre propriété sans délai.",
    items: ["Intervention 24h/7j", "Dégagement de routes et entrées", "Stabilisation d'arbres dangereux", "Nettoyage après tempête ou verglas"],
    accent: "accent",
  },
  {
    id: "deneigement",
    title: "Déneigement sur corde",
    badge: "Service hivernal",
    image: imgDeneigement,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 40%",
    desc: "Notre service de déneigement de toitures utilise des techniques d'accès sur corde spécialisées pour atteindre les zones difficiles d'accès, sans endommager votre propriété ni compromettre la sécurité de notre équipe.",
    items: ["Déneigement de toitures en hauteur", "Accès sur corde spécialisé", "Retrait de glace et de surcharges", "Prévention des affaissements de toiture"],
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
      <PageHero image={heroBg} imagePositionMobile="center 52%" imagePositionDesktop="center 45%">
        <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-6 bg-accent/15 border border-accent/20 px-4 py-1.5 rounded-full">
          Guide complet
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
          Apprendre sur l'entretien <span className="text-gradient-amber">de l'arbre</span>
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-lg">
          Découvrez en détail chacun de nos services d'arboriculture professionnelle.
        </p>
      </PageHero>

      {/* ── Sections ─────────────────────────────────────────── */}
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
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start`}>
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>

                  {/* Plus précisément */}
                  {s.items.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">Plus précisément</p>
                      <ul className="space-y-2.5">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm font-medium">
                            <CheckCircle2
                              size={16}
                              className={`mt-0.5 shrink-0 ${s.accent === "accent" ? "text-accent" : "text-primary"}`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sub-sections */}
                  {s.subSections?.map((sub, si) => (
                    <div
                      key={si}
                      className={`mt-6 rounded-2xl p-5 border ${
                        sub.isInfo
                          ? "bg-primary/4 border-primary/15"
                          : sub.isFact
                          ? "bg-accent/6 border-accent/20"
                          : "bg-muted/40 border-border/60"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {sub.isInfo ? (
                          <AlertCircle size={16} className="text-primary shrink-0" />
                        ) : (
                          <Lightbulb size={16} className="text-accent shrink-0" />
                        )}
                        <p className="text-sm font-bold">{sub.title}</p>
                      </div>
                      {sub.text && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{sub.text}</p>
                      )}
                      {sub.note && (
                        <p className="text-xs text-muted-foreground italic mt-3 leading-relaxed">{sub.note}</p>
                      )}
                      {sub.items && (
                        <ul className="space-y-2 mt-2">
                          {sub.items.map((item: string) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="responsive-focal-object rounded-2xl shadow-card w-full h-96 object-cover sticky top-28"
                      style={
                        {
                          "--focal-mobile": s.imagePositionMobile ?? "center",
                          "--focal-desktop": s.imagePositionDesktop ?? s.imagePositionMobile ?? "center",
                        } as CSSProperties
                      }
                      loading="lazy"
                    />
                  ) : (
                    <div className={`rounded-2xl w-full h-80 lg:h-96 flex flex-col items-center justify-center gap-3 border-2 border-dashed sticky top-28 ${
                      s.accent === "accent" ? "border-accent/25 bg-accent/5" : "border-primary/20 bg-primary/4"
                    }`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        s.accent === "accent" ? "bg-accent/15" : "bg-primary/10"
                      }`}>
                        <ImageIcon size={28} className={s.accent === "accent" ? "text-accent" : "text-primary"} />
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">Photo — {s.title}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Apprendre;
