import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Facebook, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      { label: "Plantation et aménagement arboricole", path: "/apprendre#plantation" },
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container flex justify-end items-center gap-5 py-2 text-sm">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <Facebook size={14} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href="mailto:cantinservicesdarbres@gmail.com"
            className="hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">cantinservicesdarbres@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-white/95 backdrop-blur-sm border-b border-border/40"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Cantin Services d'Arbres"
              className="h-14 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/8"
                      : "text-foreground hover:text-primary hover:bg-primary/6"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 bg-white border border-border/60 rounded-xl shadow-card py-2 min-w-[210px] z-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm font-medium hover:bg-primary/6 hover:text-primary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Phone CTA — desktop */}
          <a
            href="tel:4182551688"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-glow-primary"
          >
            <Phone size={15} />
            418-255-1688
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[300px] z-50 bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
                <img src={logo} alt="Cantin Services d'Arbres" className="h-10 w-auto" />
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/8"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-6 py-6 border-t border-border/60">
                <a
                  href="tel:4182551688"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors w-full"
                >
                  <Phone size={16} />
                  418-255-1688
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
