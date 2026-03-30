import { Link } from "react-router-dom";
import { ImageIcon } from "lucide-react";

// TODO: Replace these with your actual gallery image imports
// import g1 from "@/assets/galerie-abattage-1.jpg";
// import g2 from "@/assets/galerie-abattage-2.jpg";
// etc.

const images = [
  { src: "", alt: "Abattage 1" },    // TODO: g1
  { src: "", alt: "Abattage 2" },    // TODO: g2
  { src: "", alt: "Abattage 3" },    // TODO: g3
  { src: "", alt: "Abattage 4" },    // TODO: g4
  { src: "", alt: "Avant / Après" }, // TODO: g5
  { src: "", alt: "Élagage" },       // TODO: g6
  { src: "", alt: "Outils" },        // TODO: g7
  { src: "", alt: "Haubanage" },     // TODO: g8
  { src: "", alt: "Lumière 1" },     // TODO: g9
  { src: "", alt: "Lumière 2" },     // TODO: g10
  { src: "", alt: "Rabaissage" },    // TODO: g11
  { src: "", alt: "Taille de haie" },// TODO: g12
  { src: "", alt: "Urgence été" },   // TODO: g13
  { src: "", alt: "Urgence hiver" }, // TODO: g14
];

const Realisations = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20 text-center text-secondary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nos <span className="text-primary">Réalisations</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-8">
            Découvrez quelques-uns de nos projets récents en images.
          </p>
          <Link
            to="/contactez-nous"
            className="inline-flex border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container text-center max-w-3xl">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">
            Galerie <span className="text-primary">photo</span>
          </h2>
          <p className="text-muted-foreground">
            Voici un aperçu de nos réalisations dans la région de la Mauricie. Chaque projet est unique et réalisé avec le plus grand soin.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border group">
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-64 bg-muted flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon size={32} />
                    <span className="text-sm">{img.alt}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
