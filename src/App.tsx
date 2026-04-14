import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";

const Index = lazy(() => import("./pages/Index"));
const NosServices = lazy(() => import("./pages/NosServices"));
const Apprendre = lazy(() => import("./pages/Apprendre"));
const Realisations = lazy(() => import("./pages/Realisations"));
const ContactezNous = lazy(() => import("./pages/contactez-nous/ContactezNousPage"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PAGE_TITLES: Record<string, string> = {
  "/": "Cantin Services d'arbres — Émondage à Saint-Stanislas",
  "/nos-services": "Nos Services — Cantin Services d'arbres",
  "/apprendre": "Apprendre — Cantin Services d'arbres",
  "/realisations": "Réalisations — Cantin Services d'arbres",
  "/contactez-nous": "Contactez-nous — Cantin Services d'arbres",
  "/politique-de-confidentialite": "Politique de confidentialité — Cantin Services d'arbres",
};

/** Scrolls to top on route change, or to a #hash section if present. Also sets the page title. */
const ScrollToTopOrHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? "Cantin Services d'arbres";

    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTopOrHash />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nos-services" element={<NosServices />} />
            <Route path="/apprendre" element={<Apprendre />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/contactez-nous" element={<ContactezNous />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
