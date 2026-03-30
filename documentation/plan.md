
# Plan — Reproduire le site Cantin Services D'arbres

## Structure des pages (5 pages + layout partagé)

### Layout global (Header + Footer)
- **Top bar** : icônes Facebook + Email (brun/olive)
- **Header** : Logo Cantin à gauche, navigation (Accueil | Nos services ▾ | Apprendre | Réalisations | Soumission & contact ▾), bouton téléphone "418-255-1688" à droite
- **Menu mobile** hamburger responsive
- **Footer** : Logo, NEQ, adresse, heures d'ouverture, contact, lien Facebook, copyright 2026, lien politique de confidentialité

### Page 1 — Accueil (`/`)
- Hero plein écran avec image de fond (arboriste), texte "Services d'émondage à Saint-Stanislas-de-Champlain", bouton "Contactez-nous"
- Bande CTA "Un arbre à abattre ou élaguer?" + bouton "Soumission gratuite"
- Section "Des racines à la cime" — texte de présentation
- Section "Nos services" — grille de 8 services avec icônes (Abattage, Élagage, Haubanage, Taille, Plantation, Fertilisation, Services d'urgence, Déneigement sur corde)
- CTA "Prendre soin de vos arbres..."
- Section "Pourquoi choisir Cantin" — 3 cartes (Certifications, Service client, Disponibilité)
- Section "Soumission gratuite" avec CTA
- Section "Zones de service" — liste des villes desservies avec icône pin
- CTA final "Améliorez la santé de votre terrain"

### Page 2 — Nos services (`/nos-services`)
- Hero avec titre + bouton "Soumission gratuite ici!"
- Section intro "Préservez la vitalité de vos arbres"
- Grille des 8 services avec icônes (même que l'accueil, cliquable vers détails)
- Détails de chaque service avec description

### Page 3 — Apprendre (`/apprendre`)
- Hero avec titre
- Sections détaillées pour chaque service : Abattage, Élagage, Haubanage, Taille, Plantation, Fertilisation, Urgence, Déneigement
- Chaque section avec titre, description, liste de sous-services, image

### Page 4 — Réalisations (`/realisations`)
- Hero "Galerie" + bouton "Contactez-nous"
- Section intro
- Grille simple de photos (images du ZIP une fois extraites, placeholders pour l'instant)

### Page 5 — Soumission & contact (`/contactez-nous`)
- Hero "Contactez-nous"
- Section info contact (téléphone, email, adresse, heures) avec icônes
- Formulaire placeholder "Demande de service" (non fonctionnel) — champs visuels : type de besoin, nom, email, téléphone, adresse, message, bouton soumettre
- Section FAQ

### Page 6 — Politique de confidentialité (`/politique-de-confidentialite`)
- Page texte simple

## Design system
- **Palette** : Vert olive/mousse (#8B9A46 / similaire), brun foncé (#3E2723), blanc cassé (#FAFAF5), fond clair crème
- **Typographie** : Titres avec partie en couleur olive, corps en brun foncé
- **Boutons** : Bordure brun foncé avec fond transparent, hover effect
- **Séparateurs** : Ligne olive horizontale au-dessus des titres de section

