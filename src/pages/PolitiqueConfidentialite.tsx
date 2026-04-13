import heroBg from "@/assets/realisation - paysage automne.jpg";

import { PageHero } from "@/components/PageHero";

const PolitiqueConfidentialite = () => {
  return (
    <div>
      <PageHero
        image={heroBg}
        imagePositionMobile="center 42%"
        imagePositionDesktop="center 30%"
        className="text-white"
      >
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
          Politique de <span className="text-gradient-amber">confidentialité</span>
        </h1>
      </PageHero>

      <section className="py-16">
        <div className="container max-w-3xl prose prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground">
          <h2>Collecte de renseignements personnels</h2>
          <p>
            Cantin Services D'arbres s'engage à protéger la vie privée de ses clients. Les renseignements
            personnels que nous collectons sont limités à ce qui est nécessaire pour fournir nos services,
            tels que votre nom, adresse, numéro de téléphone et courriel.
          </p>

          <h2>Utilisation des renseignements</h2>
          <p>
            Les renseignements personnels recueillis sont utilisés uniquement pour :
          </p>
          <ul>
            <li>Communiquer avec vous concernant nos services</li>
            <li>Préparer et envoyer des soumissions</li>
            <li>Planifier et exécuter les travaux demandés</li>
            <li>Émettre des factures et gérer les paiements</li>
          </ul>

          <h2>Protection des renseignements</h2>
          <p>
            Nous prenons toutes les mesures raisonnables pour protéger vos renseignements personnels
            contre tout accès non autorisé, toute utilisation abusive ou toute divulgation.
          </p>

          <h2>Partage des renseignements</h2>
          <p>
            Nous ne vendons, ne louons et ne partageons pas vos renseignements personnels avec des
            tiers, sauf si la loi l'exige.
          </p>

          <h2>Cookies et suivi</h2>
          <p>
            Notre site web peut utiliser des cookies pour améliorer l'expérience de navigation.
            Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant notre politique de confidentialité, veuillez nous contacter
            à <a href="mailto:cantinservicesdarbres@gmail.com" className="text-primary hover:underline">cantinservicesdarbres@gmail.com</a> ou
            par téléphone au <a href="tel:4182551688" className="text-primary hover:underline">418-255-1688</a>.
          </p>

          <p className="text-sm">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
