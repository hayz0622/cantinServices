import { Link } from "react-router-dom";
import { TreePine, Scissors, Cable, Flower2, Sprout, Droplets, AlertTriangle, Snowflake, Award, HeartHandshake, Clock, MapPin, Phone, ImageIcon } from "lucide-react";

// TODO: Replace with your hero image import
// import heroImg from "@/assets/hero-soumission.jpg";
const heroImg = "";

const services = [
  { icon: TreePine, label: "Abattage", desc: "Abattage sécuritaire d'arbres de toutes tailles" },
  { icon: Scissors, label: "Élagage", desc: "Taille et entretien de vos arbres" },
  { icon: Cable, label: "Haubanage", desc: "Stabilisation des arbres fragilisés" },
  { icon: Flower2, label: "Taille", desc: "Taille d'arbres fruitiers et ornementaux" },
  { icon: Sprout, label: "Plantation", desc: "Plantation d'arbres et arbustes" },
  { icon: Droplets, label: "Fertilisation", desc: "Fertilisation et soins du sol" },
  { icon: AlertTriangle, label: "Services d'urgence", desc: "Intervention rapide 24/7" },
  { icon: Snowflake, label: "Déneigement sur corde", desc: "Déneigement de toitures en hauteur" },
];

const whyChoose = [
  { icon: Award, title: "Certifications", desc: "Arboristes certifiés ISA avec formation continue et équipements professionnels." },
  { icon: HeartHandshake, title: "Service client", desc: "Écoute, transparence et respect de vos besoins à chaque étape." },
  { icon: Clock, title: "Disponibilité", desc: "Service d'urgence 24/7, disponible même les fins de semaine." },
];

const zones = [
  "Saint-Stanislas-de-Champlain", "Batiscan", "Sainte-Geneviève-de-Batiscan",
  "Champlain", "Saint-Prosper", "Saint-Maurice", "Cap-de-la-Madeleine",
  "Trois-Rivières", "Shawinigan", "Saint-Tite", "Hérouxville",
  "Saint-Narcisse", "Saint-Adelphe", "Sainte-Thècle",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center bg-secondary">
        <div className="absolute inset-0 bg-secondary/90" />
        <div className="relative z-10 container py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Services d'émondage à <br />
            <span className="text-primary">Saint-Stanislas-de-Champlain</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Experts en soins d'arbres résidentiels et commerciaux depuis des années.
          </p>
          <Link
            to="/contactez-nous"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground">
          <p className="text-lg font-display font-semibold">Un arbre à abattre ou élaguer?</p>
          <Link
            to="/contactez-nous#soumission"
            className="border-2 border-primary-foreground px-6 py-2 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Soumission gratuite
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Des racines <span className="text-primary">à la cime</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Chez Cantin Services D'arbres, nous offrons des services professionnels d'entretien d'arbres 
            dans la région de la Mauricie. Notre équipe d'arboristes certifiés s'engage à préserver 
            la santé et la beauté de vos arbres tout en assurant la sécurité de votre propriété. 
            Que ce soit pour l'abattage, l'élagage, le haubanage ou la plantation, nous mettons 
            notre expertise à votre service.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Nos <span className="text-primary">services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.label}
                to="/nos-services"
                className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow group border border-border"
              >
                <s.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display font-semibold text-lg mb-2">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Prendre soin de vos arbres, <span className="text-primary">c'est notre passion</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Faites confiance à nos arboristes certifiés pour tous vos besoins en entretien d'arbres.
          </p>
          <Link
            to="/contactez-nous"
            className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3 rounded-md font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Phone size={18} />
            Appelez-nous
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Pourquoi choisir <span className="text-primary">Cantin</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-background rounded-lg p-8 text-center border border-border">
                <item.icon className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free quote CTA */}
      <section className="bg-primary py-12">
        <div className="container text-center text-primary-foreground">
          <h2 className="text-3xl font-display font-bold mb-4">Soumission gratuite</h2>
          <p className="mb-6 text-primary-foreground/80">Obtenez une évaluation sans frais pour vos travaux d'arboriculture.</p>
          <Link
            to="/contactez-nous#soumission"
            className="border-2 border-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Demander une soumission
          </Link>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Zones de <span className="text-primary">service</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {zones.map((z) => (
              <div key={z} className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>{z}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cream-dark">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Améliorez la santé <span className="text-primary">de votre terrain</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée.
          </p>
          <Link
            to="/contactez-nous"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
