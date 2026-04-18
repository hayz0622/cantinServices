import { useEffect, type CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, AlertCircle, Info } from "lucide-react";

import imgAbattage from "@/assets/Apprendre - abattage 1.jpg";
import imgEssouchage from "@/assets/apprendre-abattage.jpg";
import imgElagage from "@/assets/apprendre_elagage_1.jpg";
import imgHaubanage from "@/assets/Apprendre-haubanage-2.png";
import imgTaille from "@/assets/apprendre-taille.jpg";
import imgPlantation from "@/assets/apprendre_plantation_1.avif";
import imgFertilisation from "@/assets/Apprendre_fertilisation.jpg";
import imgUrgence from "@/assets/galerie-urgence-ete.jpg";
import imgDeneigement from "@/assets/galerie-urgence-hiver.jpg";
import imgDeneigementCorde from "@/assets/déneigement_sur_la_code.png";
import heroBg from "@/assets/Apprendre - Taille de formation.jpg";

import { PageHero } from "@/components/PageHero";

/* ────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────── */

type SubSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
  variant?: "info" | "fact" | "default";
  image?: string;
};

type Section = {
  id: string;
  title: string;
  badge: string;
  image: string;
  imagePositionMobile: string;
  imagePositionDesktop: string;
  paragraphs: string[];
  items?: string[];
  itemsLabel?: string;
  subSections?: SubSection[];
  accent: "primary" | "accent";
};

/* ────────────────────────────────────────────────────────────
   Content
   ──────────────────────────────────────────────────────────── */

const sections: Section[] = [
  /* ── Abattage ─────────────────────────────────────────── */
  {
    id: "abattage",
    title: "Abattage",
    badge: "Service principal",
    image: imgAbattage,
    imagePositionMobile: "center 50%",
    imagePositionDesktop: "center 45%",
    paragraphs: [
      "Que ce soit pour un abattage par le pied ou pour un démontage sur corde, nous savons gérer avec précision et propreté. Avant cette opération, il est recommandé de bien réfléchir aux bienfaits de l'arbre et aux conséquences de son départ. L'arbre crée de l'ombre, bloque les bourrasques de vent, crée de l'intimité, etc.",
      "Bien qu'il soit possible d'en planter d'autres, cela peut prendre bien plus que le cours d'une vie pour qu'ils se développent à maturité.",
    ],
    items: [
      "Démontage d'arbre en grimpe",
      "Abattage par le pied",
      "Déboisement résidentiel à des fins de construction",
      "Déboisement pour la création d'un chemin privé",
      "Nettoyage pour érablière",
    ],
    subSections: [
      {
        title: "Services complémentaires",
        variant: "default",
        image: imgEssouchage,
        items: [
          "Nous offrons d'éliminer toutes traces de souche après avoir procédé à l'abattage",
          "Déchiquetage de branches et résidus d'abattage",
          "Manutention complète du bois",
        ],
      },
      {
        title: "Ai-je besoin d'un permis?",
        variant: "info",
        paragraphs: [
          "Permis d'abattage : Selon votre municipalité, un certificat d'autorisation est généralement obligatoire avant d'abattre un arbre. Souvent, c'est le propriétaire qui doit faire la demande de permis d'abattage auprès de sa municipalité. Cependant, en tant qu'expert en élagage, Cantin Services D'arbres peut vous fournir un rapport d'expertise pour justifier votre demande si nécessaire.",
        ],
        items: [
          "Nous offrons un service d'assistance dans le processus de demande de permis et agissons comme mandataire pour vous.",
          "Nous fournissons un rapport professionnel : certaines villes exigent ou recommandent un rapport d'arboriculteur certifié pour justifier l'abattage (arbre mort, dangereux ou causant des dommages).",
          "Critère : L'abattage est autorisé si l'arbre est mort, dangereux, malade (ex. : agrile du frêne), nuit à une construction autorisée ou est planté trop près d'infrastructures.",
          "Remplacement : La ville exige parfois la plantation d'un nouvel arbre pour chaque arbre abattu afin de maintenir la canopée. Par chance, nous sommes aussi experts en plantation.",
        ],
      },
      {
        title: "Saviez-vous qu'un arbre penché naturellement est parfaitement balancé?",
        variant: "fact",
        paragraphs: [
          "Les arbres s'adaptent en temps réel à leur environnement en créant l'équilibre entre leurs systèmes racinaires et la structure hors terre. Il ne faut donc pas s'inquiéter d'un arbre sain qui penche vers un de vos biens. Consultez-nous afin d'en avoir le cœur net.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── Élagage ──────────────────────────────────────────── */
  {
    id: "elagage",
    title: "Élagage / Émondage",
    badge: "Entretien régulier",
    image: imgElagage,
    imagePositionMobile: "center 42%",
    imagePositionDesktop: "center 38%",
    itemsLabel: "Le rôle de l'élagage",
    paragraphs: [
      "L'élagage d'un arbre consiste à grimper dans l'arbre sans le blesser, afin d'effectuer une tâche désirée :",
    ],
    items: [
      "Création de percées visuelles pour vous permettre de voir au-delà de vos arbres.",
      "Gestion de l'éclairage naturel et des propriétés thermiques de vos bâtiments.",
      "Dégagement en hauteur pour circuler sous votre arbre, par exemple pour la tonte de pelouse.",
      "Élagage Classes 1 et 2 pour l'esthétique et la santé de l'arbre : En éliminant les parties malades, on freine la propagation de champignons et de caries. À chaque manœuvre, l'émondeur s'assure du bien-être et d'une bonne croissance de l'arbre.",
      "Élagage Classe 3 en cas de nécessité et sécurité des infrastructures : Évitez que des branches endommagent votre toiture, vos fils électriques ou tombent sur votre véhicule lors d'une tempête.",
      "En effectuant des coupes de qualité, nous favorisons une bonne compartimentation.",
    ],
    subSections: [
      {
        title: "Rétention",
        variant: "default",
        paragraphs: [
          "Lorsque certaines branches surplombent vos biens, nous procédons à une descente contrôlée des branches sur corde.",
          "Bien que parfois l'abattage soit la seule solution, dans plusieurs cas, nous pouvons élaguer votre arbre afin de résoudre vos préoccupations tout en gardant votre arbre.",
        ],
      },
      {
        title: "Bon à savoir",
        variant: "info",
        paragraphs: [
          "L'élagage se fait sans permis ou sans autorisation municipale, si l'on conserve la forme naturelle de l'arbre et qu'on ne coupe pas plus de 25 % du volume des branches.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── Haubanage ────────────────────────────────────────── */
  {
    id: "haubanage",
    title: "Haubanage",
    badge: "Sécurité & prévention",
    image: imgHaubanage,
    imagePositionMobile: "center 48%",
    imagePositionDesktop: "center 42%",
    itemsLabel: "Pourquoi effectuer un haubanage?",
    paragraphs: [
      "L'haubanage est une technique de consolidation qui consiste à installer des câbles (haubans) flexibles ou rigides pour soutenir des branches massives ou des troncs doubles (codominance).",
    ],
    items: [
      "Sauvetage d'arbres matures : Au lieu d'abattre un arbre magnifique qui présente une fissure ou une faiblesse, l'haubanage permet de le conserver en toute sécurité.",
      "Réduction du stress mécanique : Lors de vents violents ou de verglas (fréquents en Mauricie et dans Portneuf), les haubans limitent l'oscillation des branches fragiles, empêchant ainsi leur rupture.",
      "Investissement durable : C'est une solution souvent plus économique que l'abattage complet, tout en préservant la valeur esthétique et l'ombre de votre propriété.",
    ],
    subSections: [
      {
        title: "Exemples de situations pouvant nécessiter un haubanage",
        variant: "default",
        paragraphs: [
          "Il est fréquent d'haubaner les arbres en bord de sentier piéton ou bien les arbres surplombant un stationnement ou un bâtiment pour éviter tout risque de chute.",
          "Cette opération ne blesse pas l'arbre en question.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── Taille de haie ───────────────────────────────────── */
  {
    id: "taille",
    title: "Taille de haie",
    badge: "Ornemental & fruitier",
    image: imgTaille,
    imagePositionMobile: "center 48%",
    imagePositionDesktop: "center 42%",
    paragraphs: [],
    subSections: [
      {
        title: "Gardez le contrôle sur votre investissement.",
        variant: "fact",
        paragraphs: [
          "Une haie de cèdres peut gagner de 12 à 24 pouces de volume chaque année si elle n'est pas entretenue. Une taille annuelle rigoureuse permet de limiter cette expansion à seulement 2 à 4 pouces, tout en densifiant le feuillage.",
        ],
      },
      {
        title: "Le saviez-vous?",
        variant: "fact",
        paragraphs: [
          "Une fois que le cèdre a pris trop d'ampleur, il est parfois impossible de le réduire sans atteindre le bois mort, ce qui compromet l'esthétique et la santé de votre haie. Un entretien régulier est la clé pour minimiser vos coûts et maximiser votre intimité.",
          "Une coupe annuelle permet également de réduire le risque de propagation de la mineuse du thuya. Cette chenille fait jaunir certaines sections de vos cèdres.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── L'art de la taille fruitière et ornementale ─────── */
  {
    id: "taille-fruitiere",
    title: "L'art de la taille fruitière et ornementale",
    badge: "Récoltes & floraisons",
    image: imgTaille,
    imagePositionMobile: "center 48%",
    imagePositionDesktop: "center 42%",
    paragraphs: [],
    subSections: [
      {
        title: "Maximisez vos récoltes et vos floraisons",
        variant: "default",
        paragraphs: [
          "Saviez-vous qu'un arbre laissé à lui-même produit souvent moins de fruits et des fleurs moins éclatantes?",
          "Nous ne coupons pas seulement des branches; nous préparons votre prochaine récolte. Que vous ayez un vieux pommier familial dans Portneuf ou des arbustes ornementaux en Mauricie, nous adaptons notre technique pour maximiser la beauté et la générosité de votre terrain.",
        ],
      },
      {
        title: "Voici les 3 moments stratégiques de l'année pour intervenir :",
        variant: "info",
        paragraphs: [
          "1. La taille de dormance (fin de l'hiver : mars à début avril) — C'est le moment le plus critique pour les arbres fruitiers (pommiers, poiriers, pruniers). Intervenir avant que la sève ne monte permet de voir parfaitement la structure sans les feuilles. On stimule une croissance vigoureuse pour le printemps. En éliminant les branches nuisibles maintenant, l'arbre dirigera toute son énergie printanière vers la création de gros fruits plutôt que vers du bois inutile.",
          "2. La taille de floraison (après la chute des fleurs : juin) — Ce moment concerne surtout les arbres et les arbustes ornementaux qui fleurissent tôt au printemps (ex. : lilas, magnolias, amélanchiers). Il faut les tailler immédiatement après que les fleurs fanent. Si on attend l'automne pour ces espèces, on coupe les bourgeons déjà formés pour l'année suivante. En taillant en juin, on garantit une explosion de couleurs pour l'année prochaine tout en gardant l'arbuste compact et propre.",
          "3. La fertilisation et la taille de structure (automne : octobre à novembre) — C'est le moment idéal pour préparer l'arbre à l'hiver et à sa future production, soit en apportant des nutriments (phosphore/potassium) pour renforcer les racines et la résistance au froid. C'est aussi le moment d'éliminer le bois mort accumulé durant l'été. Un arbre « nourri » à l'automne démarre beaucoup plus vite au printemps. Pour les arbres à noix (noyers, chênes), c'est une période propice pour nettoyer la structure sans stresser l'arbre.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── Taille de formation ──────────────────────────────── */
  {
    id: "taille-formation",
    title: "Taille de formation",
    badge: "Prévention",
    image: imgElagage,
    imagePositionMobile: "center 42%",
    imagePositionDesktop: "center 38%",
    paragraphs: [],
    subSections: [
      {
        title: "Prévention des risques",
        variant: "default",
        paragraphs: [
          "Un élagage de formation sur un jeune arbre permet de corriger les faiblesses structurelles avant qu'elles ne deviennent un problème majeur et coûteux. Intervenir lorsque l'arbre est jeune, c'est très logique. Étant plus petit, les coupes sont plus faciles d'accès, donc moins coûteuses.",
          "En conditionnant leur développement, on diminue grandement le besoin d'intervention d'élagage professionnel lorsque l'arbre est adulte. Plus tôt nous aurons la chance de suivre le développement de vos arbres, le mieux c'est.",
        ],
      },
      {
        title: "Le saviez-vous?",
        variant: "fact",
        paragraphs: [
          "Les arbres sont naturellement conçus pour évoluer dans un milieu forestier, là où la compétition pour la lumière et les nutriments est un réel défi. Lorsqu'un arbre se développe dans un milieu résidentiel ou urbain, la disponibilité de la lumière est abondante. Généralement, cela modifie la forme de développement naturelle d'un arbre de sorte à créer des défauts de structure normalement absents en forêt.",
          "Lorsqu'on intervient assez tôt, une taille de formation permet de contrôler l'orientation de croissance de l'arbre de sorte à ne pas pousser vers vos fils électriques ou votre maison. Elle permet également de prévenir la formation de défauts structuraux tels que la fourche incluse et la dominance apicale de branche concurrente.",
          "Nous respectons aussi les périodes de taille et le ratio de coupe afin de favoriser une bonne compartimentation et la santé de vos arbres.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── Plantation ───────────────────────────────────────── */
  {
    id: "plantation",
    title: "Plantation et aménagement arboricole",
    badge: "Aménagement",
    image: imgPlantation,
    imagePositionMobile: "center 55%",
    imagePositionDesktop: "center 48%",
    paragraphs: [],
    subSections: [
      {
        title: "Pourquoi faire appel à un professionnel pour vos plantations?",
        variant: "default",
        paragraphs: [
          "Le succès d'un arbre repose sur la règle d'or : « Le bon arbre, au bon endroit. »",
          "Nous analysons votre type de sol, l'ensoleillement et les contraintes d'espace (fils électriques, fondations).",
          "Nous vous accompagnons pour que votre investissement d'aujourd'hui ne devienne pas un problème demain.",
          "Choisissez vos arbres parmi nos pépinières partenaires et nous nous occuperons du transport et de la plantation des arbres choisis dans un espace réfléchi.",
        ],
      },
      {
        title: "Bienfait de l'arbre",
        variant: "fact",
        paragraphs: [
          "Voici quelques incontournables que procurent les arbres",
        ],
        items: [
          "Valorisation immobilière immédiate — Un aménagement paysager incluant des arbres majestueux peut augmenter la valeur marchande de votre propriété de 10 % à 15 %. Un arbre bien entretenu est un actif qui prend de la valeur avec le temps, contrairement à presque tous les autres éléments d'une maison.",
          "Un allié pour votre santé et votre bien-être — La science le confirme : la présence d'arbres réduit le stress, abaisse la pression artérielle et accélère la récupération physique. Les arbres agissent comme des filtres naturels, purifiant l'air que vous respirez et créant une oasis de calme loin du bruit urbain.",
          "Pourquoi pas? La forêt nourricière — Imaginez cueillir vos propres fruits ou noix chaque année. En sélectionnant des espèces fruitières (pommiers, poiriers) ou à noix (noyers, chênes à glands doux), vous transformez votre terrain en une ressource alimentaire fraîche, locale et biologique pour votre famille.",
          "Climatisation naturelle — En été, la canopée de vos arbres bloque les rayons du soleil, réduisant vos factures de climatisation jusqu'à 30 %.",
          "Brise-vent efficace — Les arbres améliorent votre confort extérieur.",
          "Érosion et gestion de l'eau — Les racines des arbres sont l'armature naturelle de votre sol. Elles stabilisent les terrains en pente et préviennent l'érosion. De plus, un arbre mature absorbe des milliers de litres d'eau de pluie, aidant à prévenir les accumulations d'eau autour de vos fondations et la saturation des réseaux municipaux.",
        ],
      },
    ],
    accent: "primary",
  },
  /* ── Fertilisation ────────────────────────────────────── */
  {
    id: "fertilisation",
    title: "Fertilisation",
    badge: "Santé du sol",
    image: imgFertilisation,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 40%",
    paragraphs: [
      "En milieu urbain ou résidentiel, les arbres n'ont pas accès au cycle naturel de la forêt (où les feuilles se décomposent pour nourrir le sol). C'est pourquoi une fertilisation ciblée est essentielle.",
    ],
    subSections: [
      {
        title: "Pourquoi choisir une fertilisation professionnelle?",
        variant: "default",
        paragraphs: [
          "L'erreur la plus commune est d'utiliser un engrais de surface pour pelouse qui n'atteint jamais les racines profondes de l'arbre.",
          "Notre expertise inclut :",
        ],
        items: [
          "Analyse du besoin : Nous identifions les carences spécifiques de vos arbres.",
          "Injection de précision : Nous utilisons des techniques (comme l'injection liquide à basse pression) qui acheminent les nutriments directement dans la zone d'absorption des racines.",
          "Équilibre nutritif : Nous utilisons des produits à libération lente pour nourrir l'arbre sur une longue période sans brûler les racines.",
          "Nous favorisons les fertilisants naturels pour un dégagement graduel et non dommageable à l'environnement.",
        ],
      },
      {
        title: "La fertilisation, un choix intelligent :",
        variant: "info",
        paragraphs: [
          "1. Renforcement du système immunitaire — Un arbre bien nourri est un arbre résistant. La fertilisation aide l'arbre à produire ses propres défenses naturelles contre les insectes ravageurs (comme les pucerons ou les perceurs) et les maladies fongiques. C'est votre première ligne de défense pour éviter des traitements coûteux ou un abattage prématuré.",
          "2. Récupération après un stress climatique — Nos hivers rigoureux en Mauricie et dans Portneuf, ainsi que les périodes de sécheresse estivale, épuisent les réserves d'énergie des arbres. Une fertilisation printanière ou automnale aide à réparer les tissus endommagés et à préparer l'arbre pour la saison suivante.",
          "3. Croissance optimisée et feuillage dense — La fertilisation stimule la production de chlorophylle, ce qui se traduit par : un feuillage d'un vert plus riche et profond, une canopée plus dense offrant plus d'intimité et d'ombre, et une croissance plus rapide pour les jeunes arbres nouvellement plantés.",
          "4. Développement racinaire solide — L'apport de phosphore et de potassium favorise un système racinaire étendu et profond. Un arbre dont les racines sont fortes est beaucoup plus stable lors de tempêtes ou de vents violents, protégeant ainsi votre maison et vos infrastructures.",
          "5. La fertilisation ciblée — Nous apportons les minéraux spécifiques (comme le potassium et le phosphore) qui favorisent la mise à fleurs et le développement des fruits, plutôt qu'un engrais riche en azote qui ne ferait que pousser des feuilles vertes.",
        ],
      },
    ],
    accent: "primary",
  },
  {
    id: "urgence",
    title: "Services d'urgence",
    badge: "Disponible 24/7",
    image: imgUrgence,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 42%",
    paragraphs: [
      "En cas de tempête, de verglas ou de bris d'arbre imprévu, notre équipe intervient rapidement 24 heures sur 24, 7 jours sur 7, pour sécuriser votre propriété sans délai.",
    ],
    items: ["Intervention 24h/7j", "Dégagement de routes et entrées", "Stabilisation d'arbres dangereux", "Nettoyage après tempête ou verglas"],
    accent: "accent",
  },
  {
    id: "deneigement",
    title: "Déneigement sur corde",
    badge: "Service hivernal",
    image: imgDeneigementCorde,
    imagePositionMobile: "center 45%",
    imagePositionDesktop: "center 40%",
    paragraphs: [
      "Notre service de déneigement de toitures utilise des techniques d'accès sur corde spécialisées pour atteindre les zones difficiles d'accès, sans endommager votre propriété ni compromettre la sécurité de notre équipe.",
    ],
    items: ["Déneigement de toitures en hauteur", "Accès sur corde spécialisé", "Retrait de glace et de surcharges", "Prévention des affaissements de toiture"],
    accent: "accent",
  },
];

/* ────────────────────────────────────────────────────────────
   Rendering helpers
   ──────────────────────────────────────────────────────────── */

function SubSectionCard({ sub, accent }: { sub: SubSection; accent: string }) {
  const borderClass =
    sub.variant === "info"
      ? "bg-primary/4 border-primary/15"
      : sub.variant === "fact"
        ? "bg-accent/6 border-accent/20"
        : "bg-muted/40 border-border/60";

  const Icon =
    sub.variant === "info" ? AlertCircle
    : sub.variant === "fact" ? Lightbulb
    : Info;

  const iconColor =
    sub.variant === "info" ? "text-primary"
    : sub.variant === "fact" ? "text-accent"
    : accent === "accent" ? "text-accent" : "text-primary";

  return (
    <div className={`mt-6 rounded-2xl p-5 border ${borderClass}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className={`${iconColor} shrink-0`} />
        <p className="text-sm font-bold">{sub.title}</p>
      </div>
      {sub.image && (
        <img
          src={sub.image}
          alt={sub.title}
          className="w-full h-64 md:h-80 object-cover rounded-xl mb-4"
          loading="lazy"
        />
      )}
      {sub.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
          {p}
        </p>
      ))}
      {sub.items && (
        <ul className="space-y-2 mt-2">
          {sub.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {sub.note && (
        <p className="text-xs text-muted-foreground italic mt-3 leading-relaxed">{sub.note}</p>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */

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
      <PageHero image={heroBg} imagePositionMobile="center 30%" imagePositionDesktop="center 25%" className="min-h-[50vh] md:min-h-[55vh]">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
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

                  {/* Main paragraphs */}
                  {s.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-muted-foreground mb-4 leading-relaxed">{p}</p>
                  ))}

                  {/* Items list */}
                  {s.items && s.items.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">
                        {s.itemsLabel ?? "Plus précisément"}
                      </p>
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
                    <SubSectionCard key={si} sub={sub} accent={s.accent} />
                  ))}
                </div>

                {/* Image */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
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
