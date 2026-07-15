export const CASE_STUDY_FILTERS = [
  { id: "tous", label: "Tous" },
  { id: "sites-web", label: "Sites web" },
  { id: "applications", label: "Applications" },
  { id: "crm-erp", label: "CRM/ERP" },
  { id: "intelligence-artificielle", label: "Intelligence artificielle" },
  { id: "automatisation", label: "Automatisation" },
];

export const CASE_STUDIES = [
  {
    id: "healthconnect",
    category: "applications",
    sector: "ONG",
    title: "Transformation digitale de HealthConnect",
    challenge: "Modernisation des processus et optimisation de l'expérience utilisateur pour une plateforme de coordination médicale internationale.",
    image: "/images/realisations/healthconnect.jpg",
    metrics: [
      { value: "+45%", label: "Conversion" },
      { value: "-30%", label: "Temps de gestion" },
      { value: "2x", label: "Leads qualifiés" },
    ],
  },
  {
    id: "innovatech",
    category: "crm-erp",
    sector: "PME",
    title: "Transformation digitale d'Innovatech",
    challenge: "Déploiement d'un écosystème CRM/ERP sur-mesure pour automatiser la chaîne de valeur industrielle.",
    image: "/images/realisations/innovatech.jpg",
    metrics: [
      { value: "+60%", label: "Productivité" },
      { value: "-25%", label: "Coûts d'exploitation" },
      { value: "+20%", label: "Marge nette" },
    ],
  },
  {
    id: "datagov",
    category: "applications",
    sector: "Institution",
    title: "Souveraineté de DataGov",
    challenge: "Mise en place d'une infrastructure de données sécurisée pour la gestion des services publics dématérialisés.",
    image: "/images/realisations/datagov.jpg",
    metrics: [
      { value: "100%", label: "Sécurisé" },
      { value: "2M+", label: "Utilisateurs" },
      { value: "24/7", label: "Disponibilité" },
    ],
  },
  {
    id: "retailone",
    category: "intelligence-artificielle",
    sector: "Entreprise",
    title: "IA prédictive pour RetailOne",
    challenge: "Optimisation des stocks via un moteur d'intelligence artificielle prédictive basé sur le comportement client.",
    image: "/images/realisations/retailone.jpg",
    metrics: [
      { value: "-18%", label: "Stock" },
      { value: "+12%", label: "Chiffre d'affaires" },
      { value: "-40%", label: "Ruptures" },
    ],
  },
  {
    id: "ecoflow",
    category: "automatisation",
    sector: "Industrie",
    title: "Smart Factory pour EcoFlow",
    challenge: "Digitalisation d'une usine éco-responsable pour un suivi en temps réel de l'empreinte carbone.",
    image: "/images/realisations/ecoflow.jpg",
    metrics: [
      { value: "-40%", label: "CO2" },
      { value: "Real-time", label: "Suivi" },
      { value: "+15%", label: "Efficacité" },
    ],
  },
  {
    id: "urbanshop",
    category: "sites-web",
    sector: "E-commerce",
    title: "Refonte e-commerce d'UrbanShop",
    challenge: "Un tunnel d'achat vieillissant provoquait un taux d'abandon panier élevé et freinait la croissance.",
    image: "/images/realisations/urbanshop.jpg",
    metrics: [
      { value: "+35%", label: "Panier moyen" },
      { value: "-20%", label: "Abandon panier" },
      { value: "3x", label: "Trafic mobile" },
    ],
  },
];

export const TESTIMONIAL = {
  quote:
    "Blinks Global Business a radicalement transformé notre vision du digital. Leur expertise technique et stratégique est un atout majeur pour notre croissance internationale.",
  author: "Directeur Innovation, GlobalBank",
};