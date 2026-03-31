import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, TreePine } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, hsl(80,58%,38%) 0%, hsl(22,100%,44%) 50%, hsl(80,58%,38%) 100%)" }} />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-5" style={{ background: "radial-gradient(circle, hsl(80,58%,38%) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5" style={{ background: "radial-gradient(circle, hsl(22,100%,44%) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & identity */}
          <div className="flex flex-col items-start gap-5">
            <img
              src={logo}
              alt="Cantin Services d'Arbres"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
              Services d'arboriculture professionnels au service de la Mauricie, Mékinac et Portneuf.
            </p>
            <p className="text-xs text-secondary-foreground/40 font-mono">NEQ : 1181530917</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground/70 hover:text-accent transition-colors group"
            >
              <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Facebook size={15} />
              </span>
              Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-accent inline-block" />
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <a
                href="tel:4182551688"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-accent transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone size={14} />
                </span>
                418-255-1688
              </a>
              <a
                href="mailto:cantinservicesdarbres@gmail.com"
                className="flex items-start gap-3 text-secondary-foreground/80 hover:text-accent transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <Mail size={14} />
                </span>
                <span className="break-all">cantinservicesdarbres@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-secondary-foreground/80">
                <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </span>
                Saint-Raymond, QC
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-accent inline-block" />
              Heures d'ouverture
            </h3>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="shrink-0 text-secondary-foreground/50" />
                  <span>Lun – Dim</span>
                </div>
                <span className="font-semibold text-secondary-foreground">8h – 20h</span>
              </div>
              <div className="mt-4 px-3 py-2.5 rounded-lg border border-accent/30 bg-accent/10 text-accent text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
                Urgence 24h / 7j
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-accent inline-block" />
              Navigation
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { to: "/", label: "Accueil" },
                { to: "/nos-services", label: "Nos services" },
                { to: "/apprendre", label: "Apprendre" },
                { to: "/realisations", label: "Réalisations" },
                { to: "/contactez-nous", label: "Contactez-nous" },
                { to: "/politique-de-confidentialite", label: "Politique de confidentialité" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 text-secondary-foreground/70 hover:text-accent transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-secondary-foreground/30 group-hover:bg-accent transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-secondary-foreground/40">
            <TreePine size={13} />
            <p>© 2026 Tous droits réservés | Cantin Services D'arbres</p>
          </div>
          <Link
            to="/politique-de-confidentialite"
            className="text-xs text-secondary-foreground/40 hover:text-accent transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
