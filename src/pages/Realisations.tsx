import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageIcon, ArrowRight, Camera } from "lucide-react";

import abattage1 from "@/assets/Apprendre - abattage 1.jpg";
import abattage2 from "@/assets/galerie-abattage-2.jpg";
import abattage3 from "@/assets/galerie-abattage-3.jpg";
import abattage4 from "@/assets/galerie-abattage2.jpg";
import avantApres from "@/assets/galerie-avant-apres.png";
import elagage from "@/assets/Réalisation - élagage 2 .jpg";
import outils from "@/assets/galerie-hache.jpg";
import haubanage from "@/assets/galerie-haubanage.jpg";
import lumiere1 from "@/assets/galerie-lumiere1.jpg";
import lumiere2 from "@/assets/galerie-lumiere2.jpg";
import rabaissage from "@/assets/galerie-rabaissage.jpg";
import tailleHaie from "@/assets/Réalisation -  taille de haie 1.jpg";
import urgenceEte from "@/assets/galerie-urgence-ete.jpg";
import urgenceHiver from "@/assets/galerie-urgence-hiver.jpg";

import { PageHero } from "@/components/PageHero";
import { fadeUpGallery as fadeUp } from "@/lib/motionVariants";

const heroBg = avantApres;

const images = [
  { src: abattage1, alt: "Abattage 1" },
  { src: abattage2, alt: "Abattage 2" },
  { src: abattage3, alt: "Abattage 3" },
  { src: abattage4, alt: "Abattage 4" },
  { src: avantApres, alt: "Avant / Après" },
  { src: elagage, alt: "Élagage" },
  { src: outils, alt: "Outils" },
  { src: haubanage, alt: "Haubanage" },
  { src: lumiere1, alt: "Lumière 1" },
  { src: lumiere2, alt: "Lumière 2" },
  { src: rabaissage, alt: "Rabaissage" },
  { src: tailleHaie, alt: "Taille de haie" },
  { src: urgenceEte, alt: "Urgence été" },
  { src: urgenceHiver, alt: "Urgence hiver" },
];

const Realisations = () => {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <PageHero image={heroBg}>
        <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-6 bg-accent/15 border border-accent/20 px-4 py-1.5 rounded-full">
          <Camera size={12} />
          Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
          Galerie
        </h1>
        <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
          Un aperçu de ce qu'on peut accomplir pour vous.
        </p>
        <Link
          to="/contactez-nous"
          className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all duration-200 shadow-glow-accent hover:-translate-y-0.5 group"
        >
          Contactez-nous
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </PageHero>

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
              Nos <span className="text-gradient">réalisations</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Notre engagement envers la sécurité, la précision et le respect de vos arbres se reflète
              dans chacune de nos réalisations. Voici un aperçu de notre savoir-faire dans tous les
              aspects de l'arboriculture.
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
