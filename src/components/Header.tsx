import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Facebook, Mail, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Accueil", path: "/" },
  {
    label: "Nos services",
    path: "/nos-services",
    children: [
      { label: "Abattage", path: "/apprendre#abattage" },
      { label: "Élagage", path: "/apprendre#elagage" },
      { label: "Haubanage", path: "/apprendre#haubanage" },
      { label: "Taille", path: "/apprendre#taille" },
      { label: "Plantation", path: "/apprendre#plantation" },
      { label: "Fertilisation", path: "/apprendre#fertilisation" },
      { label: "Services d'urgence", path: "/apprendre#urgence" },
      { label: "Déneigement sur corde", path: "/apprendre#deneigement" },
    ],
  },
  { label: "Apprendre", path: "/apprendre" },
  { label: "Réalisations", path: "/realisations" },
  {
    label: "Soumission & contact",
    path: "/contactez-nous",
    children: [
      { label: "Contactez-nous", path: "/contactez-nous" },
      { label: "Soumission gratuite", path: "/contactez-nous#soumission" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container flex justify-end items-center gap-4 py-1.5 text-sm">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Facebook size={16} />
          </a>
          <a href="mailto:cantinservicesdarbres@gmail.com" className="hover:text-primary transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Cantin Services d'Arbres" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:4182551688"
            className="hidden md:flex items-center gap-2 border-2 border-secondary text-secondary px-4 py-2 rounded-md text-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Phone size={16} />
            418-255-1688
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                      location.pathname === link.path ? "text-primary bg-muted" : "text-foreground"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:4182551688"
                className="flex items-center gap-2 border-2 border-secondary text-secondary px-4 py-2 rounded-md text-sm font-semibold mt-2 justify-center"
              >
                <Phone size={16} />
                418-255-1688
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
