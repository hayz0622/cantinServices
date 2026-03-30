import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & NEQ */}
          <div className="flex flex-col items-start gap-4">
            <img src={logo} alt="Cantin Services d'Arbres" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm text-secondary-foreground/70">NEQ : 2278444873</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:4182551688" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                418-255-1688
              </a>
              <a href="mailto:cantinservicesdarbres@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                cantinservicesdarbres@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Saint-Stanislas-de-Champlain, QC</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Heures d'ouverture</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Lun – Ven : 7h à 17h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Sam : 8h à 12h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Dim : Fermé</span>
              </div>
              <p className="text-xs text-secondary-foreground/60 mt-2">Service d'urgence 24/7</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Navigation</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-primary transition-colors">Accueil</Link>
              <Link to="/nos-services" className="block hover:text-primary transition-colors">Nos services</Link>
              <Link to="/apprendre" className="block hover:text-primary transition-colors">Apprendre</Link>
              <Link to="/realisations" className="block hover:text-primary transition-colors">Réalisations</Link>
              <Link to="/contactez-nous" className="block hover:text-primary transition-colors">Contactez-nous</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-secondary-foreground/60">
          <p>© 2026 Cantin Services D'arbres. Tous droits réservés.</p>
          <Link to="/politique-de-confidentialite" className="hover:text-primary transition-colors">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
