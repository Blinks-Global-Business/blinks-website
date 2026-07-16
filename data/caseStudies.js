export const CASE_STUDY_FILTERS = [
  { id: "tous", label: "Tous" },
  { id: "marketing-communication", label: "Marketing & Communication" },
  { id: "ia-automatisation", label: "IA & Automatisation" },
  { id: "performance-commerciale", label: "Performance Commerciale" },
  { id: "developpement-digital", label: "Développement Digital" },
  { id: "audiovisuel-media", label: "Audiovisuel & Média" },
];

export const CASE_STUDIES = [
  {
    id: "healthconnect",
    category: "developpement-digital",
    sector: "ONG",
    title: "Transformation digitale de HealthConnect",
    challenge: "Modernisation des processus et optimisation de l'expérience utilisateur pour une plateforme de coordination médicale internationale.",
    content: `HealthConnect coordonnait ses équipes médicales à travers plusieurs pays via des outils dispersés (emails, tableurs, appels téléphoniques), rendant le suivi des interventions lent et sujet à erreurs.

Blinks Global Business a conçu et développé une plateforme web centralisée permettant la coordination en temps réel des équipes, le suivi des dossiers patients et la génération automatique de rapports d'intervention.

Le projet a été mené en 8 semaines, de l'audit initial au déploiement, avec une phase de formation des équipes terrain pour garantir une adoption rapide.`,
    image: "/images/realisations/healthconnect.jpg",
    metrics: [
      { value: "+45%", label: "Conversion" },
      { value: "-30%", label: "Temps de gestion" },
      { value: "2x", label: "Leads qualifiés" },
    ],
  },
  {
    id: "innovatech",
    category: "developpement-digital",
    sector: "PME",
    title: "Transformation digitale d'Innovatech",
    challenge: "Déploiement d'un écosystème CRM/ERP sur-mesure pour automatiser la chaîne de valeur industrielle.",
    content: `Innovatech gérait sa production, ses stocks et sa facturation via des outils non connectés entre eux, générant des doubles saisies et des pertes de temps considérables.

Blinks Glbal Business a développé un écosystème CRM/ERP sur-mesure, connectant la gestion commerciale, les stocks et la facturation dans une seule plateforme, avec des tableaux de bord décisionnels pour la direction.

Résultat : une chaîne de valeur entièrement digitalisée et une visibilité en temps réel sur l'activité de l'entreprise.`,
    image: "/images/realisations/innovatech.jpg",
    metrics: [
      { value: "+60%", label: "Productivité" },
      { value: "-25%", label: "Coûts d'exploitation" },
      { value: "+20%", label: "Marge nette" },
    ],
  },
  {
    id: "datagov",
    category: "developpement-digital",
    sector: "Institution",
    title: "Souveraineté de DataGov",
    challenge: "Mise en place d'une infrastructure de données sécurisée pour la gestion des services publics dématérialisés.",
    content: `Une institution publique souhaitait dématérialiser ses services citoyens tout en garantissant une souveraineté totale sur les données sensibles collectées.

Blinks Global Business a conçu une infrastructure sécurisée hébergée localement, avec authentification forte, chiffrement des données et disponibilité continue pour des millions d'usagers.

Le projet a nécessité une coordination étroite avec les équipes de cybersécurité de l'institution pour garantir la conformité aux normes en vigueur.`,
    image: "/images/realisations/datagov.jpg",
    metrics: [
      { value: "100%", label: "Sécurisé" },
      { value: "2M+", label: "Utilisateurs" },
      { value: "24/7", label: "Disponibilité" },
    ],
  },
  {
    id: "retailone",
    category: "ia-automatisation",
    sector: "Entreprise",
    title: "IA prédictive pour RetailOne",
    challenge: "Optimisation des stocks via un moteur d'intelligence artificielle prédictive basé sur le comportement client.",
    content: `RetailOne faisait face à des ruptures de stock fréquentes sur ses produits phares, ainsi qu'à des surstocks coûteux sur d'autres références.

Blinks Global Business a déployé un moteur d'IA prédictive analysant l'historique de vente, la saisonnalité et les tendances de comportement client pour anticiper la demande avec précision.

Le système s'intègre directement à l'outil de gestion des stocks existant, avec des alertes automatiques de réapprovisionnement.`,
    image: "/images/realisations/retailone.jpg",
    metrics: [
      { value: "-18%", label: "Stock" },
      { value: "+12%", label: "Chiffre d'affaires" },
      { value: "-40%", label: "Ruptures" },
    ],
  },
  {
    id: "ecoflow",
    category: "ia-automatisation",
    sector: "Industrie",
    title: "Smart Factory pour EcoFlow",
    challenge: "Digitalisation d'une usine éco-responsable pour un suivi en temps réel de l'empreinte carbone.",
    content: `EcoFlow souhaitait piloter précisément son impact environnemental mais ne disposait d'aucun outil de mesure en temps réel sur ses lignes de production.

Blinks Global Business a mis en place un système de capteurs connectés couplé à des tableaux de bord d'automatisation, permettant un suivi continu de la consommation énergétique et des émissions carbone.

Les équipes peuvent désormais ajuster la production en temps réel pour optimiser l'efficacité énergétique.`,
    image: "/images/realisations/ecoflow.jpg",
    metrics: [
      { value: "-40%", label: "CO2" },
      { value: "Real-time", label: "Suivi" },
      { value: "+15%", label: "Efficacité" },
    ],
  },
  {
    id: "urbanshop",
    category: "developpement-digital",
    sector: "E-commerce",
    title: "Refonte e-commerce d'UrbanShop",
    challenge: "Un tunnel d'achat vieillissant provoquait un taux d'abandon panier élevé et freinait la croissance.",
    content: `UrbanShop perdait une part importante de ses visiteurs en cours de commande, avec un tunnel d'achat lent et peu intuitif sur mobile.

Blinks Global Business a entièrement repensé l'expérience d'achat : checkout simplifié en 2 étapes, paiement optimisé et refonte complète du parcours mobile.

Le nouveau site a été déployé progressivement, avec des tests A/B pour valider chaque amélioration avant généralisation.`,
    image: "/images/realisations/urbanshop.jpg",
    metrics: [
      { value: "+35%", label: "Panier moyen" },
      { value: "-20%", label: "Abandon panier" },
      { value: "3x", label: "Trafic mobile" },
    ],
  },
  {
    id: "luxbrand",
    category: "marketing-communication",
    sector: "Luxe",
    title: "Repositionnement digital de LuxBrand",
    challenge: "Une marque premium peinait à exister sur les réseaux sociaux face à une concurrence plus visible digitalement.",
    content: `LuxBrand disposait d'un excellent produit mais d'une présence digitale incohérente, avec une identité visuelle datée et une communauté peu engagée.

Blinks Global Business a mené une refonte complète du branding digital, accompagnée d'une stratégie de contenu et de community management sur-mesure pour repositionner la marque comme référence premium.

En 4 mois, la marque a retrouvé une identité forte et cohérente sur l'ensemble de ses canaux digitaux.`,
    image: "/images/realisations/luxbrand.jpg",
    metrics: [
      { value: "+120%", label: "Engagement" },
      { value: "+3x", label: "Communauté" },
      { value: "+28%", label: "Trafic site" },
    ],
  },
  {
    id: "salesboost",
    category: "performance-commerciale",
    sector: "B2B",
    title: "Accélération commerciale pour SalesBoost",
    challenge: "Une entreprise B2B manquait de leads qualifiés pour alimenter son équipe commerciale interne.",
    content: `SalesBoost disposait d'une équipe commerciale performante mais sans flux constant de prospects qualifiés pour l'alimenter.

Blinks Global Business a mis en place un tunnel d'acquisition complet, couplé à un CRM structuré et une équipe commerciale externalisée en renfort pour accélérer la prospection B2B.

Les résultats ont été visibles dès le second mois, avec un pipeline commercial largement renforcé.`,
    image: "/images/realisations/salesboost.jpg",
    metrics: [
      { value: "+80%", label: "Leads qualifiés" },
      { value: "+35%", label: "Taux de closing" },
      { value: "2.5x", label: "Pipeline" },
    ],
  },
];

export const TESTIMONIAL = {
  quote:
    "Blinks Global Business a radicalement transformé notre vision du digital. Leur expertise technique et stratégique est un atout majeur pour notre croissance internationale.",
  author: "Directeur Innovation, GlobalBank",
};