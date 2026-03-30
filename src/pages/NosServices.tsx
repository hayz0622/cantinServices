import { Link } from "react-router-dom";
import { TreePine, Scissors, Cable, Flower2, Sprout, Droplets, AlertTriangle, Snowflake } from "lucide-react";

const services = [
  { icon: TreePine, label: "Abattage", desc: "Abattage sécuritaire d'arbres dangereux, morts ou indésirables. Nous utilisons des techniques de démontage pour les espaces restreints.", hash: "abattage" },
  { icon: Scissors, label: "Élagage", desc: "Taille d'entretien et élagage de formation pour maintenir la santé et l'esthétique de vos arbres.", hash: "elagage" },
  { icon: Cable, label: "Haubanage", desc: "Installation de câbles et de tiges pour stabiliser les arbres à risque de bris ou de chute.", hash: "haubanage" },
  { icon: Flower2, label: "Taille", desc: "Taille d'arbres fruitiers, de haies et d'arbustes ornementaux pour une croissance optimale.", hash: "taille" },
  { icon: Sprout, label: "Plantation", desc: "Sélection et plantation d'arbres et d'arbustes adaptés à votre terrain et au climat.", hash: "plantation" },
  { icon: Droplets, label: "Fertilisation", desc: "Analyse du sol et fertilisation adaptée pour renforcer la vitalité de vos arbres.", hash: "fertilisation" },
  { icon: AlertTriangle, label: "Services d'urgence", desc: "Intervention rapide 24/7 pour les arbres dangereux suite à des tempêtes ou bris.", hash: "urgence" },
  { icon: Snowflake, label: "Déneigement sur corde", desc: "Déneigement de toitures en hauteur avec des techniques d'accès sur corde.", hash: "deneigement" },
];

const NosServices = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20 text-center text-secondary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-8">
            Des solutions complètes pour l'entretien de vos arbres et de votre terrain.
          </p>
          <Link
            to="/contactez-nous#soumission"
            className="inline-flex border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Soumission gratuite ici!
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-6">
            Préservez la vitalité <span className="text-primary">de vos arbres</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Notre équipe d'arboristes certifiés offre une gamme complète de services pour assurer
            la santé, la sécurité et la beauté de vos arbres. Découvrez nos services ci-dessous.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-cream-dark">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.label}
                to={`/apprendre#${s.hash}`}
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
      <section className="bg-primary py-12">
        <div className="container text-center text-primary-foreground">
          <h2 className="text-3xl font-display font-bold mb-4">Besoin d'un service?</h2>
          <p className="mb-6 text-primary-foreground/80">Contactez-nous pour une évaluation gratuite de vos besoins.</p>
          <Link
            to="/contactez-nous"
            className="border-2 border-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NosServices;
