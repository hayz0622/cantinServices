import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Offrez-vous des soumissions gratuites?", a: "Oui! Nous offrons des soumissions gratuites et sans engagement pour tous nos services. Contactez-nous par téléphone ou via le formulaire." },
  { q: "Êtes-vous assurés?", a: "Oui, nous détenons une assurance responsabilité civile complète pour protéger votre propriété et notre équipe." },
  { q: "Quelle est votre zone de service?", a: "Nous desservons toute la région de la Mauricie, incluant Trois-Rivières, Shawinigan, Saint-Tite, Batiscan et les environs." },
  { q: "Offrez-vous un service d'urgence?", a: "Oui, notre service d'urgence est disponible 24 heures sur 24, 7 jours sur 7, pour les situations critiques." },
  { q: "Avez-vous besoin d'un permis pour abattre un arbre?", a: "Dans la plupart des municipalités, un permis est requis. Nous vous accompagnons dans les démarches nécessaires." },
];

const contactItems = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "418-255-1688",
    sub: "Appelez-nous",
    href: "tel:4182551688",
    color: "text-primary",
    bg: "bg-primary/8 border-primary/15",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: Mail,
    label: "Courriel",
    value: "cantinservicesdarbres@gmail.com",
    sub: "Écrivez-nous",
    href: "mailto:cantinservicesdarbres@gmail.com",
    color: "text-primary",
    bg: "bg-primary/8 border-primary/15",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Saint-Stanislas-de-Champlain",
    sub: "Notre base d'opérations",
    href: null,
    color: "text-primary",
    bg: "bg-primary/8 border-primary/15",
    iconBg: "bg-primary/10",
  },
  {
    icon: Clock,
    label: "Heures",
    value: "Lun–Ven : 7h–17h",
    sub: "Sam 8h–12h · Urgence 24/7",
    href: null,
    color: "text-accent",
    bg: "bg-accent/8 border-accent/15",
    iconBg: "bg-accent/10",
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

const ContactezNous = () => {
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
              <MessageSquare size={12} />
              Prenons contact
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
              <span className="text-gradient-amber">Contactez</span>-nous
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Nous sommes disponibles pour répondre à toutes vos questions.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full">
            <path d="M0 50L1440 50L1440 15C1200 45 900 0 720 15C540 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Contact cards row ─────────────────────────────────── */}
      <section className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactItems.map((item, i) => {
              const Inner = (
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`flex flex-col gap-3 rounded-2xl p-5 border ${item.bg} h-full transition-all duration-200 group ${item.href ? "hover:-translate-y-1 hover:shadow-card cursor-pointer" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${item.iconBg}`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className={`font-bold text-sm break-all ${item.href ? "group-hover:text-primary transition-colors" : ""}`}>{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>{Inner}</a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main: coords + form ───────────────────────────────── */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-5">
                <span className="w-8 h-0.5 bg-primary" />
                Coordonnées
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6">
                Nos <span className="text-gradient">coordonnées</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                N'hésitez pas à nous appeler ou écrire. Nous répondons rapidement à toutes les demandes.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:4182551688"
                  className="flex items-center gap-4 group p-4 rounded-xl border border-border/60 bg-white hover:border-primary/30 hover:bg-primary/4 transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-primary transition-colors">418-255-1688</p>
                    <p className="text-sm text-muted-foreground">Appelez-nous directement</p>
                  </div>
                  <ArrowRight size={15} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:cantinservicesdarbres@gmail.com"
                  className="flex items-center gap-4 group p-4 rounded-xl border border-border/60 bg-white hover:border-primary/30 hover:bg-primary/4 transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold group-hover:text-primary transition-colors truncate">cantinservicesdarbres@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                  <ArrowRight size={15} className="ml-auto shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-white">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-bold">Saint-Stanislas-de-Champlain, QC</p>
                    <p className="text-sm text-muted-foreground">Base d'opérations — Mauricie</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-accent/20 bg-accent/6">
                  <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center">
                    <Clock className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-accent">Urgence 24h / 7j</p>
                    <p className="text-sm text-muted-foreground">Lun–Ven 7h–17h · Sam 8h–12h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form right */}
            <motion.div
              id="soumission"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-3 scroll-mt-24"
            >
              <div className="bg-white rounded-2xl border border-border/60 shadow-card p-8">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-5">
                  <span className="w-8 h-0.5 bg-primary" />
                  Formulaire
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6">
                  Demande de <span className="text-gradient">service</span>
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Ce formulaire est un placeholder. L'envoi n'est pas encore implémenté.");
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-bold mb-2 text-foreground">Type de besoin</label>
                    <Select>
                      <SelectTrigger className="rounded-xl border-border/60 h-11 font-medium">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abattage">Abattage</SelectItem>
                        <SelectItem value="elagage">Élagage</SelectItem>
                        <SelectItem value="haubanage">Haubanage</SelectItem>
                        <SelectItem value="taille">Taille</SelectItem>
                        <SelectItem value="plantation">Plantation</SelectItem>
                        <SelectItem value="fertilisation">Fertilisation</SelectItem>
                        <SelectItem value="urgence">Service d'urgence</SelectItem>
                        <SelectItem value="deneigement">Déneigement sur corde</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Nom complet</label>
                      <Input placeholder="Votre nom" className="rounded-xl border-border/60 h-11" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Téléphone</label>
                      <Input placeholder="418-000-0000" type="tel" className="rounded-xl border-border/60 h-11" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Courriel</label>
                    <Input placeholder="votre@courriel.com" type="email" className="rounded-xl border-border/60 h-11" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Adresse</label>
                    <Input placeholder="Votre adresse" className="rounded-xl border-border/60 h-11" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Message</label>
                    <Textarea
                      placeholder="Décrivez vos besoins en détail..."
                      rows={4}
                      className="rounded-xl border-border/60 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl h-12 font-bold text-base transition-all duration-200 hover:shadow-glow-primary group"
                  >
                    Envoyer la demande
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Formulaire non fonctionnel — contactez-nous directement au 418-255-1688
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-cream-dark">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-primary" />
              FAQ
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-border/60 rounded-2xl px-6 shadow-card"
                >
                  <AccordionTrigger className="text-left font-bold hover:text-primary py-5 text-sm">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactezNous;
