export const SITE = {
  name: "Blinks Global Business",
  shortName: "Blinks",
  domain: "https://blinksglobalbusiness.com",
  email: "contact@blinksglobalbusiness.com",
  phone1: "+229 01 56 98 36 20",
  phone2: "+33 7 82 07 46 92",
  phone3: "+221 75 222 22 23",
  address: "Blinks Global Business",
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
  { key: "home", href: "/" },
  {
    key: "services",
    href: "/services",
    children: [
      { key: "expertise", href: "/services" },
      { key: "offers", href: "/offres" },
    ],
  },
  { key: "institutional", href: "/institutionnel" },
  { key: "realisations", href: "/realisations" },
  { key: "about", href: "/a-propos" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { key: "mentions", href: "/mentions-legales" },
  { key: "privacy", href: "/politique-de-confidentialite" },
  { key: "cookies", href: "/politique-de-cookies" },
  { key: "terms", href: "/conditions-generales" },
];