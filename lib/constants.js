export const SITE = {
  name: "Blinks Global Business",
  shortName: "Blinks",
  tagline: "Conseil. Croissance. Excellence.",
  domain: "https://blinksglobalbusiness.com",
  email: "contact@blinksglobalbusiness.com",
  phone1: "+229 01 56 98 36 20", 
  phone2: "+33 7 82 07 46 92",
  phone3: "+221 75 222 22 23",
  address: " Calavi Kpota, Abomey-Calavi, Bénin",
  hours: "Lundi - Vendredi : 9h00 - 18h00",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/blinks-global-business-officiel/",
  instagram: "https://instagram.com/blinksglobalbusiness",
  facebook: "https://www.facebook.com/share/1cPQKHaZ8d/?mibextid=wwXIfr",
  whatsapp: "https://wa.me/33782074692",
  tiktok: "https://www.tiktok.com/@blinksglobalbusiness?_r=1&_t=ZS-97fvCY67xmK",
  youtube: "https://youtube.com/@blinksglobalbusinessofficiel?si=NJkne_gU8VUUnULk",
};

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Notre Expertise", href: "/services", description: "Nos 4 pôles et notre méthode de travail" },
      { label: "Nos Offres", href: "/offres", description: "Diagnostic, accompagnements et tarifs" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-de-confidentialite" },
  { label: "Cookies", href: "/politique-de-cookies" },
  { label: "Conditions générales", href: "/conditions-generales" },
];