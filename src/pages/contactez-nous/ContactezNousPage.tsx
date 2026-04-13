import { useCallback, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare, CloudUpload, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-soumission.jpg";

import { PageHero } from "@/components/PageHero";
import { SERVICE_ZONES } from "@/content/zones";
import {
  NEED_SELECT_ORDER,
  contactIntroByNeed,
  needLabels,
  needsMultiStep,
  type NeedType,
} from "@/content/serviceNeeds";
import { fadeUp } from "@/lib/motionVariants";

import { contactItems, faqs } from "./constants";
import {
  EmailJsNotConfiguredError,
  isEmailJsConfigured,
  sendContactEmail,
} from "@/lib/emailJsContact";
import { CanopyHintIllustration, RadioBlock } from "./formComponents";
import { buildFormattedSubmissionText } from "./submissionFormat";
const ContactezNous = () => {
  const [needType, setNeedType] = useState<NeedType | "">("");
  const [flowStep, setFlowStep] = useState<"details" | "contact">("details");

  const [abattageTreeType, setAbattageTreeType] = useState("");
  const [abattageMortOuDifficulte, setAbattageMortOuDifficulte] = useState("");
  const [abattageDiametre, setAbattageDiametre] = useState("");
  const [abattageConserverBois, setAbattageConserverBois] = useState("");
  const [abattageDechiquetage, setAbattageDechiquetage] = useState("");
  const [abattageMenage, setAbattageMenage] = useState("");
  const [abattageObstacles, setAbattageObstacles] = useState("");
  const [abattageBroyageSouche, setAbattageBroyageSouche] = useState("");

  const [elagageRaison, setElagageRaison] = useState("");
  const [elagageDechiquetage, setElagageDechiquetage] = useState("");
  const [elagageMenage, setElagageMenage] = useState("");
  const [elagageObstacles, setElagageObstacles] = useState("");

  const [tailleSousType, setTailleSousType] = useState("");
  /** Sous-type haie : cèdre ou feuillus */
  const [tailleHaieVariete, setTailleHaieVariete] = useState("");
  const [taillePiedLineaire, setTaillePiedLineaire] = useState("");
  const [tailleHauteurApprox, setTailleHauteurApprox] = useState("");
  /** Fruitier / taille de formation */
  const [tailleNombreArbres, setTailleNombreArbres] = useState("");

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [rue1, setRue1] = useState("");
  const [rue2, setRue2] = useState("");
  const [ville, setVille] = useState("");
  const [province, setProvince] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [courriel, setCourriel] = useState("");
  const [messageProjet, setMessageProjet] = useState("");
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const [detailError, setDetailError] = useState("");

  const resetDetailFields = useCallback(() => {
    setAbattageTreeType("");
    setAbattageMortOuDifficulte("");
    setAbattageDiametre("");
    setAbattageConserverBois("");
    setAbattageDechiquetage("");
    setAbattageMenage("");
    setAbattageObstacles("");
    setAbattageBroyageSouche("");
    setElagageRaison("");
    setElagageDechiquetage("");
    setElagageMenage("");
    setElagageObstacles("");
    setTailleSousType("");
    setTailleHaieVariete("");
    setTaillePiedLineaire("");
    setTailleHauteurApprox("");
    setTailleNombreArbres("");
  }, []);

  const handleTailleSousTypeChange = (v: string) => {
    setTailleSousType(v);
    if (v !== "haie") {
      setTailleHaieVariete("");
      setTaillePiedLineaire("");
      setTailleHauteurApprox("");
    }
    if (v !== "fruitier" && v !== "formation") {
      setTailleNombreArbres("");
    }
  };

  const resetContactFields = useCallback(() => {
    setPrenom("");
    setNom("");
    setTelephone("");
    setRue1("");
    setRue2("");
    setVille("");
    setProvince("");
    setCodePostal("");
    setCourriel("");
    setMessageProjet("");
    setPhotoName(null);
    setPhotoFile(null);
    setFileInputKey((k) => k + 1);
  }, []);

  const handleNeedTypeChange = (value: string) => {
    const next = value as NeedType;
    setNeedType(next);
    setDetailError("");
    resetDetailFields();
    resetContactFields();
    setFlowStep(needsMultiStep(next) ? "details" : "contact");
  };

  const validateDetails = () => {
    if (!needType) return false;
    if (needType === "abattage") {
      if (!abattageTreeType) {
        setDetailError("Veuillez indiquer si votre arbre est un feuillu, un résineux ou autre.");
        return false;
      }
    }
    if (needType === "elagage") {
      if (!elagageRaison) {
        setDetailError("Veuillez sélectionner la raison de l'élagage.");
        return false;
      }
    }
    if (needType === "taille") {
      if (!tailleSousType) {
        setDetailError("Veuillez préciser le type de taille.");
        return false;
      }
      if (tailleSousType === "haie") {
        if (!tailleHaieVariete) {
          setDetailError("Veuillez indiquer le type de haie (cèdre ou feuillus).");
          return false;
        }
        if (!taillePiedLineaire.trim()) {
          setDetailError("Veuillez indiquer le pied linéaire de la haie.");
          return false;
        }
        if (!tailleHauteurApprox.trim()) {
          setDetailError("Veuillez indiquer la hauteur approximative de la haie.");
          return false;
        }
      }
      if ((tailleSousType === "fruitier" || tailleSousType === "formation") && !tailleNombreArbres.trim()) {
        setDetailError("Veuillez indiquer combien d'arbres sont à tailler.");
        return false;
      }
    }
    setDetailError("");
    return true;
  };

  const handleSuite = () => {
    if (validateDetails()) setFlowStep("contact");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!needType) {
      toast.error("Veuillez sélectionner un type de besoin.");
      return;
    }
    const p = prenom.trim();
    const n = nom.trim();
    const tel = telephone.trim();
    const mail = courriel.trim();
    if (!p || !n || !tel || !mail) {
      toast.error("Veuillez remplir le prénom, le nom, le téléphone et le courriel.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      toast.error("Veuillez entrer une adresse courriel valide.");
      return;
    }

    const rapport = buildFormattedSubmissionText({
      needType: needType as NeedType,
      prenom: p,
      nom: n,
      telephone: tel,
      courriel: mail,
      rue1,
      rue2,
      ville,
      province,
      codePostal,
      messageProjet,
      photoFileName: photoFile ? photoFile.name : photoName,
      abattage: {
        treeType: abattageTreeType,
        mortOuDifficulte: abattageMortOuDifficulte,
        diametre: abattageDiametre,
        conserverBois: abattageConserverBois,
        dechiquetage: abattageDechiquetage,
        menage: abattageMenage,
        obstacles: abattageObstacles,
        broyageSouche: abattageBroyageSouche,
      },
      elagage: {
        raison: elagageRaison,
        dechiquetage: elagageDechiquetage,
        menage: elagageMenage,
        obstacles: elagageObstacles,
      },
      taille: {
        sousType: tailleSousType,
        haieVariete: tailleHaieVariete,
        piedLineaire: taillePiedLineaire,
        hauteurApprox: tailleHauteurApprox,
        nombreArbres: tailleNombreArbres,
      },
    });

    if (!isEmailJsConfigured()) {
      toast.error(
        "Envoi courriel non configuré. Ajoutez VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID et VITE_EMAILJS_TEMPLATE_ID dans un fichier .env (voir .env.example).",
      );
      return;
    }

    setIsSending(true);
    try {
      await sendContactEmail({
        needType: needType as NeedType,
        prenom: p,
        nom: n,
        telephone: tel,
        courriel: mail,
        rapport,
        photoFile,
      });
      toast.success("Demande envoyée. Merci — nous vous contacterons bientôt.");
      setNeedType("");
      setFlowStep("details");
      resetDetailFields();
      resetContactFields();
    } catch (err) {
      if (err instanceof EmailJsNotConfiguredError) {
        toast.error("Configuration EmailJS manquante. Vérifiez les variables VITE_EMAILJS_* dans .env.");
      } else {
        console.error(err);
        toast.error("L'envoi a échoué. Réessayez ou appelez le 418-255-1688.");
      }
    } finally {
      setIsSending(false);
    }
  };

  const showDetails =
    needType && needsMultiStep(needType as NeedType) && flowStep === "details";
  const showContact = needType && (!needsMultiStep(needType as NeedType) || flowStep === "contact");
  const intro = needType ? contactIntroByNeed[needType as NeedType] : null;

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <PageHero image={heroBg} imagePositionMobile="center 38%" imagePositionDesktop="center 28%">
        <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-6 bg-accent/15 border border-accent/20 px-4 py-1.5 rounded-full">
          <MessageSquare size={12} />
          Prenons contact
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-5 leading-tight">
          <span className="text-gradient-amber">Contactez</span>-nous
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-lg">
          Nous sommes disponibles pour répondre à toutes vos questions et planifier une intervention.
        </p>
      </PageHero>

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
                  className={`flex flex-col gap-3 rounded-2xl p-5 border h-full transition-all duration-200 group ${
                    item.accent
                      ? "bg-accent/8 border-accent/20"
                      : "bg-primary/5 border-primary/12"
                  } ${item.href ? "hover:-translate-y-1 hover:shadow-card cursor-pointer" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                    item.accent ? "bg-accent/15 group-hover:bg-accent/25" : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <item.icon size={18} className={item.accent ? "text-accent" : "text-primary"} />
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
            {/* Left: coordonnées */}
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
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">
                Parlons de votre{" "}
                <span className="text-gradient">projet d'arboriculture</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Que vous ayez des questions sur nos services, que vous souhaitiez planifier une intervention
                ou discuter d'un projet d'abattage, d'élagage ou tout autre service — notre équipe est à
                votre écoute. Remplissez notre formulaire ou contactez-nous directement.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:4182551688"
                  className="flex items-center gap-4 group p-4 rounded-xl border border-border/60 bg-white hover:border-primary/30 hover:bg-primary/4 transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-primary transition-colors">418-255-1688</p>
                    <p className="text-sm text-muted-foreground">Téléphone ou texto</p>
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
                    <p className="text-sm text-muted-foreground">Courriel</p>
                  </div>
                  <ArrowRight size={15} className="ml-auto shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-white">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-bold">Saint-Raymond, QC</p>
                    <p className="text-sm text-muted-foreground">Base d'opérations — Mauricie & Portneuf</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-accent/20 bg-accent/6">
                  <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center">
                    <Clock className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-accent">Lundi – Dimanche · 8h – 20h</p>
                    <p className="text-sm text-muted-foreground">Urgence disponible 24h / 7j</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
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
                <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-2">
                  Demande de <span className="text-gradient">service</span>
                </h2>
                <p className="text-sm font-medium text-muted-foreground mb-6">Service 4 saisons</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-sm font-bold mb-2 block leading-snug">
                      Vous recherchez un professionnel pour quel besoin ?{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select value={needType || undefined} onValueChange={handleNeedTypeChange}>
                      <SelectTrigger className="rounded-xl border-border/60 h-11 font-medium">
                        <SelectValue placeholder="Veuillez choisir" />
                      </SelectTrigger>
                      <SelectContent>
                        {NEED_SELECT_ORDER.map((id) => (
                          <SelectItem key={id} value={id}>
                            {needLabels[id]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {!needType ? (
                    <p className="text-sm text-muted-foreground">
                      Choisissez un besoin ci-dessus pour afficher le formulaire correspondant.
                    </p>
                  ) : null}

                  {showDetails && needType === "abattage" ? (
                    <div className="space-y-6">
                      <Separator />
                      <h3 className="text-xl md:text-2xl font-display font-extrabold text-primary">
                        {needLabels.abattage}
                      </h3>
                      <RadioBlock
                        label="Votre arbre est-il un feuillu ou un résineux ?"
                        required
                        value={abattageTreeType}
                        onChange={setAbattageTreeType}
                        options={[
                          { value: "feuillu", label: "Feuillus" },
                          { value: "resineux", label: "Résineux" },
                          { value: "autre", label: "Autre" },
                        ]}
                      />
                      <RadioBlock
                        label="L'arbre semble être mort ou en difficulté ?"
                        value={abattageMortOuDifficulte}
                        onChange={setAbattageMortOuDifficulte}
                        options={[
                          { value: "oui", label: "Oui" },
                          { value: "non", label: "Non" },
                        ]}
                      />
                      <div className="space-y-2">
                        <Label className="text-sm font-bold">
                          Diamètre approximatif du tronc (à 1 mètre du sol)
                        </Label>
                        <Input
                          value={abattageDiametre}
                          onChange={(e) => setAbattageDiametre(e.target.value)}
                          placeholder="Ex. : 35 cm, 13 po"
                          className="rounded-xl border-border/60 h-11"
                        />
                        <p className="text-xs text-muted-foreground">Indiquez une mesure approximative au besoin.</p>
                      </div>
                      <RadioBlock
                        label="Je désire conserver le bois de plus de 4 po de diamètre"
                        value={abattageConserverBois}
                        onChange={setAbattageConserverBois}
                        options={[
                          { value: "oui", label: "Oui" },
                          { value: "non", label: "Non" },
                        ]}
                      />
                      <RadioBlock
                        label="Déchiquetage des branches"
                        value={abattageDechiquetage}
                        onChange={setAbattageDechiquetage}
                        options={[
                          { value: "oui", label: "Oui" },
                          { value: "non", label: "Non" },
                        ]}
                      />
                      <RadioBlock
                        label="Ménage"
                        value={abattageMenage}
                        onChange={setAbattageMenage}
                        options={[
                          { value: "impeccable", label: "Ménage impeccable" },
                          { value: "aucun", label: "Aucun ménage" },
                        ]}
                      />
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                        <div className="flex-1 space-y-2 min-w-0">
                          <Label className="text-sm font-bold leading-snug">
                            Y a-t-il des bâtiments ou objets fixes directement sous le port de l'arbre ?
                          </Label>
                          <RadioGroup value={abattageObstacles} onValueChange={setAbattageObstacles} className="gap-2.5">
                            {[
                              { value: "oui", label: "Oui" },
                              { value: "non", label: "Non" },
                            ].map((o) => (
                              <label
                                key={o.value}
                                className={cn(
                                  "flex items-start gap-3 rounded-xl border border-border/60 px-3 py-2.5 cursor-pointer transition-colors",
                                  abattageObstacles === o.value ? "border-primary/50 bg-primary/5" : "hover:bg-muted/40",
                                )}
                              >
                                <RadioGroupItem value={o.value} className="mt-0.5" />
                                <span className="text-sm font-medium">{o.label}</span>
                              </label>
                            ))}
                          </RadioGroup>
                        </div>
                        <CanopyHintIllustration />
                      </div>
                      <RadioBlock
                        label="Souche : je veux faire broyer la souche"
                        value={abattageBroyageSouche}
                        onChange={setAbattageBroyageSouche}
                        options={[
                          { value: "oui", label: "Oui" },
                          { value: "non", label: "Non" },
                        ]}
                      />
                      {detailError ? <p className="text-sm text-destructive">{detailError}</p> : null}
                      <Separator />
                      <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={() => {
                            setNeedType("");
                            setFlowStep("details");
                            resetDetailFields();
                            resetContactFields();
                          }}
                        >
                          Retour
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={handleSuite}
                        >
                          Suite
                        </Button>
                      </div>
                    </div>
                  ) : null}

                  {showDetails && needType === "elagage" ? (
                    <div className="space-y-6">
                      <Separator />
                      <h3 className="text-xl md:text-2xl font-display font-extrabold text-primary">
                        {needLabels.elagage}
                      </h3>
                      <RadioBlock
                        label="Raison de l'élagage"
                        required
                        value={elagageRaison}
                        onChange={setElagageRaison}
                        options={[
                          {
                            value: "esthetique",
                            label:
                              "Esthétique : élagage des branches mortes, cassées, malades ou nuisibles",
                          },
                          {
                            value: "necessite",
                            label:
                              "Nécessité : branches à risque de causer des dommages à vos propriétés",
                          },
                        ]}
                      />
                      <RadioBlock
                        label="Déchiquetage des branches"
                        value={elagageDechiquetage}
                        onChange={setElagageDechiquetage}
                        options={[
                          { value: "oui", label: "Oui" },
                          { value: "non", label: "Non" },
                        ]}
                      />
                      <RadioBlock
                        label="Ménage"
                        value={elagageMenage}
                        onChange={setElagageMenage}
                        options={[
                          { value: "impeccable", label: "Ménage impeccable" },
                          { value: "aucun", label: "Aucun ménage" },
                        ]}
                      />
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                        <div className="flex-1 space-y-2 min-w-0">
                          <Label className="text-sm font-bold leading-snug">
                            Y a-t-il des bâtiments ou objets fixes directement sous le port de l'arbre ?
                          </Label>
                          <RadioGroup value={elagageObstacles} onValueChange={setElagageObstacles} className="gap-2.5">
                            {[
                              { value: "oui", label: "Oui" },
                              { value: "non", label: "Non" },
                            ].map((o) => (
                              <label
                                key={o.value}
                                className={cn(
                                  "flex items-start gap-3 rounded-xl border border-border/60 px-3 py-2.5 cursor-pointer transition-colors",
                                  elagageObstacles === o.value ? "border-primary/50 bg-primary/5" : "hover:bg-muted/40",
                                )}
                              >
                                <RadioGroupItem value={o.value} className="mt-0.5" />
                                <span className="text-sm font-medium">{o.label}</span>
                              </label>
                            ))}
                          </RadioGroup>
                        </div>
                        <CanopyHintIllustration />
                      </div>
                      {detailError ? <p className="text-sm text-destructive">{detailError}</p> : null}
                      <Separator />
                      <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={() => {
                            setNeedType("");
                            setFlowStep("details");
                            resetDetailFields();
                            resetContactFields();
                          }}
                        >
                          Retour
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={handleSuite}
                        >
                          Suite
                        </Button>
                      </div>
                    </div>
                  ) : null}

                  {showDetails && needType === "taille" ? (
                    <div className="space-y-6">
                      <Separator />
                      <h3 className="text-xl md:text-2xl font-display font-extrabold text-primary">
                        {needLabels.taille}
                      </h3>
                      <RadioBlock
                        label="Taille"
                        required
                        value={tailleSousType}
                        onChange={handleTailleSousTypeChange}
                        options={[
                          { value: "haie", label: "Taille de haie" },
                          { value: "fruitier", label: "Arbre fruitier, jeune arbre" },
                          { value: "formation", label: "Taille de formation" },
                        ]}
                      />

                      {tailleSousType === "haie" ? (
                        <div className="space-y-5 rounded-xl border border-primary/15 bg-primary/5 p-4 sm:p-5">
                          <RadioBlock
                            label="Taille de haie"
                            required
                            value={tailleHaieVariete}
                            onChange={setTailleHaieVariete}
                            options={[
                              { value: "cedre", label: "Haie de cèdre" },
                              { value: "feuillus", label: "Feuillus" },
                            ]}
                          />
                          <div className="space-y-2">
                            <Label className="text-sm font-bold">Pied linéaire de la haie</Label>
                            <Input
                              value={taillePiedLineaire}
                              onChange={(e) => setTaillePiedLineaire(e.target.value)}
                              placeholder="ex. : 120 pi, 35 m"
                              className="rounded-xl border-border/60 h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-sm font-bold">
                              Hauteur approximative en pieds ou mètre
                            </Label>
                            <Input
                              value={tailleHauteurApprox}
                              onChange={(e) => setTailleHauteurApprox(e.target.value)}
                              placeholder="ex. : 8 pi, 2,5 m"
                              className="rounded-xl border-border/60 h-11"
                            />
                          </div>
                        </div>
                      ) : null}

                      {tailleSousType === "fruitier" || tailleSousType === "formation" ? (
                        <div className="space-y-2 rounded-xl border border-primary/15 bg-primary/5 p-4 sm:p-5">
                          <Label className="text-sm font-bold">
                            Combien d&apos;arbres avez-vous à tailler ?
                          </Label>
                          <Input
                            value={tailleNombreArbres}
                            onChange={(e) => setTailleNombreArbres(e.target.value)}
                            inputMode="numeric"
                            placeholder="ex. : 23"
                            className="rounded-xl border-border/60 h-11"
                          />
                        </div>
                      ) : null}

                      {detailError ? <p className="text-sm text-destructive">{detailError}</p> : null}
                      <Separator />
                      <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={() => {
                            setNeedType("");
                            setFlowStep("details");
                            resetDetailFields();
                            resetContactFields();
                          }}
                        >
                          Retour
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={handleSuite}
                        >
                          Suite
                        </Button>
                      </div>
                    </div>
                  ) : null}

                  {showContact && intro ? (
                    <div className="space-y-8">
                      <Separator />
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-extrabold">{intro.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{intro.subtitle}</p>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mt-3">
                          {intro.tag}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-sm font-bold">
                          Nom complet <span className="text-destructive">*</span>
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label className="text-xs text-muted-foreground font-medium">Prénom</Label>
                            <Input
                              value={prenom}
                              onChange={(e) => setPrenom(e.target.value)}
                              className="rounded-xl border-border/60 h-11"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label className="text-xs text-muted-foreground font-medium">Nom de famille</Label>
                            <Input
                              value={nom}
                              onChange={(e) => setNom(e.target.value)}
                              className="rounded-xl border-border/60 h-11"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-bold">
                          Téléphone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                          placeholder="(000) 000-0000"
                          type="tel"
                          className="rounded-xl border-border/60 h-11"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-sm font-bold">Adresse</Label>
                        <Input
                          value={rue1}
                          onChange={(e) => setRue1(e.target.value)}
                          placeholder="Ligne d'adresse 1"
                          className="rounded-xl border-border/60 h-11"
                        />
                        <Input
                          value={rue2}
                          onChange={(e) => setRue2(e.target.value)}
                          placeholder="Ligne d'adresse 2"
                          className="rounded-xl border-border/60 h-11"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                            placeholder="Ville"
                            className="rounded-xl border-border/60 h-11"
                          />
                          <Input
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            placeholder="Province"
                            className="rounded-xl border-border/60 h-11"
                          />
                        </div>
                        <Input
                          value={codePostal}
                          onChange={(e) => setCodePostal(e.target.value)}
                          placeholder="Code postal"
                          className="rounded-xl border-border/60 h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-bold">
                          Courriel <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          value={courriel}
                          onChange={(e) => setCourriel(e.target.value)}
                          type="email"
                          placeholder="votre@courriel.com"
                          className="rounded-xl border-border/60 h-11"
                        />
                      </div>

                      <Separator />

                      <h4 className="text-base md:text-lg font-display font-extrabold">Information sur le projet</h4>

                      <div className="space-y-2">
                        <Label className="text-sm font-bold">Parlez-nous de votre projet</Label>
                        <Textarea
                          value={messageProjet}
                          onChange={(e) => setMessageProjet(e.target.value)}
                          rows={5}
                          className="rounded-xl border-border/60 min-h-[140px]"
                          placeholder="Décrivez la situation, l'accès, les contraintes, etc."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-bold">Photo (photo de l'arbre)</Label>
                        <label className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border/80 bg-muted/20 px-4 py-8 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-colors">
                          <CloudUpload className="text-primary" size={28} />
                          <span className="font-bold text-sm">Joindre fichier</span>
                          <span className="text-xs text-muted-foreground">Glissez-déposez un fichier ici ou cliquez pour parcourir</span>
                          <Input
                            key={fileInputKey}
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null;
                              setPhotoFile(f);
                              setPhotoName(f ? f.name : null);
                            }}
                          />
                        </label>
                        {photoName ? (
                          <p className="text-xs text-muted-foreground">Fichier sélectionné : {photoName}</p>
                        ) : null}
                      </div>

                      <Separator />

                      <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-xl border-primary/50 h-11 font-bold"
                          onClick={() => {
                            if (needType && needsMultiStep(needType)) {
                              setFlowStep("details");
                              setDetailError("");
                            } else {
                              setNeedType("");
                              resetDetailFields();
                              resetContactFields();
                            }
                          }}
                        >
                          Retour
                        </Button>
                        <Button
                          type="submit"
                          variant="outline"
                          disabled={isSending}
                          className="rounded-xl border-primary/50 h-11 font-bold sm:min-w-[140px]"
                        >
                          {isSending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                              Envoi…
                            </>
                          ) : (
                            "Envoyer"
                          )}
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        Les champs marqués d&apos;un astérisque (*) sont obligatoires. La demande est transmise par
                        courriel (EmailJS) avec le même contenu qu&apos;auparavant, dans une mise en page HTML. Urgence
                        : 418-255-1688.
                      </p>
                    </div>
                  ) : null}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Zones ─────────────────────────────────────────────── */}
      <section className="py-16 bg-cream-dark">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              Régions desservies
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold">
              Zones de <span className="text-gradient">service</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {SERVICE_ZONES.map((z) => (
              <div
                key={z}
                className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-border/50 text-sm font-medium hover:bg-primary/6 hover:border-primary/20 hover:text-primary transition-all duration-200"
              >
                <MapPin size={13} className="text-primary shrink-0" />
                <span>{z}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20">
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
