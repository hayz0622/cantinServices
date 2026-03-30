import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageIcon, ArrowRight, Camera } from "lucide-react";

const images = [
  { src: "", alt: "Abattage 1" },
  { src: "", alt: "Abattage 2" },
  { src: "", alt: "Abattage 3" },
  { src: "", alt: "Abattage 4" },
  { src: "", alt: "Avant / Après" },
  { src: "", alt: "Élagage" },
  { src: "", alt: "Outils" },
  { src: "", alt: "Haubanage" },
  { src: "", alt: "Lumière 1" },
  { src: "", alt: "Lumière 2" },
  { src: "", alt: "Rabaissage" },
  { src: "", alt: "Taille de haie" },
  { src: "", alt: "Urgence été" },
  { src: "", alt: "Urgence hiver" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" },
  }),
};

const Realisations = () => {
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
              <Camera size={12} />
              Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
              Nos <span className="text-gradient-amber">Réalisations</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
              Découvrez quelques-uns de nos projets récents en images.
            </p>
            <Link
              to="/contactez-nous"
              className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all duration-200 shadow-glow-accent hover:-translate-y-0.5 group"
            >
              Contactez-nous
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
      <section className="py-16">
        <div className="container text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-primary" />
              Notre travail
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">
              Galerie <span className="text-gradient">photo</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Voici un aperçu de nos réalisations dans la région de la Mauricie.
              Chaque projet est unique et réalisé avec le plus grand soin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery grid ──────────────────────────────────────── */}
      <section className="pb-24 bg-cream-dark pt-4">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i % 6}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-border/60 group shadow-card card-hover"
              >
                {img.src ? (
                  <div className="relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300 flex items-end">
                      <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{img.alt}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-white flex flex-col items-center justify-center gap-3 text-muted-foreground group-hover:bg-primary/4 transition-colors duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ImageIcon size={24} className="text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{img.alt}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
