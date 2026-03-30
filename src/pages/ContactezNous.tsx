import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

const ContactezNous = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20 text-center text-secondary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-primary">Contactez</span>-nous
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mt-4">
            Nous sommes disponibles pour répondre à toutes vos questions.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <div className="w-12 h-0.5 bg-primary mb-4" />
              <h2 className="text-3xl font-display font-bold mb-8">
                Nos <span className="text-primary">coordonnées</span>
              </h2>
              <div className="space-y-6">
                <a href="tel:4182551688" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">418-255-1688</p>
                    <p className="text-sm text-muted-foreground">Appelez-nous</p>
                  </div>
                </a>
                <a href="mailto:cantinservicesdarbres@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">cantinservicesdarbres@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Écrivez-nous</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Saint-Stanislas-de-Champlain, QC</p>
                    <p className="text-sm text-muted-foreground">Notre base d'opérations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Lun – Ven : 7h à 17h</p>
                    <p className="text-sm text-muted-foreground">Sam : 8h à 12h · Urgence 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form placeholder */}
            <div id="soumission">
              <div className="w-12 h-0.5 bg-primary mb-4" />
              <h2 className="text-3xl font-display font-bold mb-8">
                Demande de <span className="text-primary">service</span>
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Ce formulaire est un placeholder. L'envoi n'est pas encore implémenté.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-1.5">Type de besoin</label>
                  <Select>
                    <SelectTrigger>
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
                    <label className="block text-sm font-medium mb-1.5">Nom complet</label>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Téléphone</label>
                    <Input placeholder="418-000-0000" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Courriel</label>
                  <Input placeholder="votre@courriel.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Adresse</label>
                  <Input placeholder="Votre adresse" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <Textarea placeholder="Décrivez vos besoins..." rows={4} />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Envoyer la demande
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  * Ce formulaire est un placeholder. L'envoi n'est pas encore fonctionnel.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream-dark">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default ContactezNous;
