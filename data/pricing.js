export const DIAGNOSTIC_OFFER = {
  title: { fr: "Diagnostic Stratégique & Digital", en: "Strategic & Digital Diagnostic" },
  price: "19 900",
  currency: "FCFA",
  equivalent: "≈ 30 € / 33 $",
  delay: { fr: "Livré en 5 jours ouvrés", en: "Delivered in 5 business days" },
  features: {
    fr: [
      "Analyse complète de votre présence digitale (site, réseaux, référencement)",
      "Audit de vos processus commerciaux et de votre parcours client",
      "Rapport écrit avec plan d'action priorisé",
      "Restitution personnalisée de 45 minutes en visioconférence",
    ],
    en: [
      "Complete analysis of your digital presence (website, social media, SEO)",
      "Audit of your sales processes and customer journey",
      "Written report with a prioritized action plan",
      "45-minute personalized video-call debrief",
    ],
  },
  highlight: {
    fr: "Le montant du diagnostic est intégralement déduit de votre première facture si vous souscrivez un parcours ou une prestation dans les 30 jours. Votre diagnostic devient gratuit.",
    en: "The diagnostic fee is fully deducted from your first invoice if you subscribe to a support package or service within 30 days. Your diagnostic becomes free.",
  },
};

export const ACCOMPAGNEMENTS = [
  {
    id: "visibilite",
    name: { fr: "Accompagnement Visibilité", en: "Visibility Package" },
    tagline: {
      fr: "Votre marque devient visible et régulière pendant que vous dirigez.",
      en: "Your brand becomes visible and consistent while you run your business.",
    },
    priceOriginal: "199 000",
    price: "149 000",
    period: { fr: "/ mois", en: "/ month" },
    equivalent: "≈ 227,15 € / 260,09 $",
    engagement: { fr: "Engagement 3 mois · prix de lancement", en: "3-month commitment · launch price" },
    recommended: false,
    features: {
      fr: [
        "12 publications réseaux sociaux (visuels + textes) : Facebook, Instagram, LinkedIn, TikTok",
        "2 vidéos courtes / Reels par mois",
        "Community management : réponses, messages, animation de communauté",
        "Calendrier éditorial mensuel validé avec vous",
        "Optimisation SEO de base : fiche Google Business + mots-clés",
        "1 newsletter mensuelle à votre base clients",
        "Rapport de performance mensuel + point stratégique de 30 min",
      ],
      en: [
        "12 social media posts (visuals + copy): Facebook, Instagram, LinkedIn, TikTok",
        "2 short videos / Reels per month",
        "Community management: replies, messages, community engagement",
        "Monthly editorial calendar validated with you",
        "Basic SEO optimization: Google Business profile + keywords",
        "1 monthly newsletter to your customer base",
        "Monthly performance report + 30-minute strategy check-in",
      ],
    },
    resultats: {
      fr: [
        "Présence régulière et professionnelle dès le 1er mois",
        "Visibilité de marque renforcée auprès de votre cible",
        "Communauté engagée qui interagit avec vos contenus",
        "Meilleur positionnement local sur Google",
      ],
      en: [
        "Regular, professional presence from month 1",
        "Stronger brand visibility with your target audience",
        "An engaged community interacting with your content",
        "Better local ranking on Google",
      ],
    },
  },
  {
    id: "croissance",
    name: { fr: "Accompagnement Croissance", en: "Growth Package" },
    tagline: {
      fr: "Une marque, un site et une machine à vendre construits pour vous.",
      en: "A brand, a website and a sales engine built for you.",
    },
    priceOriginal: "449 000",
    price: "349 000",
    period: { fr: "/ mois", en: "/ month" },
    equivalent: "≈ 532,05 € / 609,21 $",
    engagement: { fr: "Engagement 6 mois", en: "6-month commitment" },
    recommended: true,
    features: {
      fr: [
        "Tout le contenu de l'Accompagnement Visibilité",
        "OFFERT : création ou refonte de votre logo + charte graphique (valeur 250 000 FCFA)",
        "OFFERT : site internet professionnel avec chatbot IA intégré (valeur 450 000 FCFA)",
        "Campagnes publicitaires Meta Ads & Google Ads pilotées par la donnée",
        "Email marketing : séquences et newsletters de conversion",
        "Génération de leads qualifiés B2B / B2C / B2G",
        "CRM configuré : suivi client centralisé, du premier contact à la fidélisation",
        "Chatbot IA qui qualifie vos prospects 24h/24, 7j/7",
      ],
      en: [
        "Everything included in the Visibility Package",
        "FREE: logo creation or redesign + brand guideline (worth 250,000 FCFA)",
        "FREE: professional website with integrated AI chatbot (worth 450,000 FCFA)",
        "Data-driven Meta Ads & Google Ads campaigns",
        "Email marketing: conversion sequences and newsletters",
        "Qualified B2B / B2C / B2G lead generation",
        "Configured CRM: centralized customer tracking, from first contact to retention",
        "AI chatbot that qualifies your prospects 24/7",
      ],
    },
    resultats: {
      fr: [
        "Une identité de marque que vos clients remarquent (livrée au mois 1)",
        "Un site qui convertit vos visiteurs en prospects (livré au mois 2)",
        "Un flux régulier de leads qualifiés pour vos équipes",
        "Un pipeline commercial structuré et mesurable",
      ],
      en: [
        "A brand identity your customers will notice (delivered in month 1)",
        "A website that converts your visitors into prospects (delivered in month 2)",
        "A steady flow of qualified leads for your teams",
        "A structured, measurable sales pipeline",
      ],
    },
    note: {
      fr: "Le branding est livré au mois 1, le site avec chatbot au mois 2 pour construire sur des fondations solides.",
      en: "Branding is delivered in month 1, the website with chatbot in month 2, to build on solid foundations.",
    },
  },
  {
    id: "excellence",
    name: { fr: "Accompagnement Excellence", en: "Excellence Package" },
    tagline: { fr: "Votre direction digitale externalisée, au complet.", en: "Your digital leadership, fully outsourced." },
    priceOriginal: "750 000",
    price: "590 000",
    period: { fr: "/ mois", en: "/ month" },
    equivalent: "≈ 899,45 € / 1029,89 $",
    engagement: { fr: "Engagement 12 mois", en: "12-month commitment" },
    recommended: false,
    features: {
      fr: [
        "Tout le contenu de l'Accompagnement Croissance",
        "Automatisation de vos processus (RPA, Make, n8n, Zapier)",
        "Tableaux de bord IA : vos indicateurs clés centralisés en temps réel",
        "Équipe commerciale externalisée dédiée à votre développement B2B / B2C / B2G",
        "Production audiovisuelle renforcée : vidéos institutionnelles et publicitaires",
        "Direction digitale déléguée : un expert Blinks pilote votre stratégie",
        "Comité de pilotage mensuel avec votre direction",
      ],
      en: [
        "Everything included in the Growth Package",
        "Process automation (RPA, Make, n8n, Zapier)",
        "AI dashboards: your key indicators centralized in real time",
        "Outsourced sales team dedicated to your B2B / B2C / B2G growth",
        "Enhanced video production: institutional and advertising videos",
        "Delegated digital leadership: a Blinks expert drives your strategy",
        "Monthly steering committee with your leadership team",
      ],
    },
    resultats: {
      fr: [
        "Des équipes recentrées sur la valeur ajoutée",
        "Des décisions plus rapides grâce à des données centralisées",
        "Une force commerciale immédiatement opérationnelle",
        "Une transformation digitale complète, pilotée et mesurée",
      ],
      en: [
        "Teams refocused on high-value work",
        "Faster decisions thanks to centralized data",
        "A sales force ready to perform immediately",
        "A complete digital transformation, steered and measured",
      ],
    },
  },
];

export const A_LA_CARTE = [
  {
    name: { fr: "Site web professionnel", en: "Professional website" },
    price: { fr: "dès 297 000 FCFA", en: "from 297,000 FCFA" },
    description: {
      fr: "Site vitrine, institutionnel ou e-commerce sur mesure. Design + développement, optimisé conversion, mobile-first, hébergement clé en main. Livré en 14 jours.",
      en: "Custom showcase, institutional or e-commerce website. Design + development, conversion-optimized, mobile-first, turnkey hosting. Delivered in 14 days.",
    },
  },
  {
    name: { fr: "Application, CRM & ERP", en: "Application, CRM & ERP" },
    price: { fr: "dès 690 000 FCFA", en: "from 690,000 FCFA" },
    description: {
      fr: "Applications web et mobiles, CRM, ERP, portails, intranets et chatbots IA développés sur mesure. Maintenance incluse 30 jours.",
      en: "Custom-built web and mobile applications, CRM, ERP, portals, intranets and AI chatbots. 30 days of maintenance included.",
    },
  },
  {
    name: { fr: "Identité visuelle & logo", en: "Visual identity & logo" },
    price: { fr: "dès 147 000 FCFA", en: "from 147,000 FCFA" },
    description: {
      fr: "Logo principal + variantes, charte graphique complète, déclinaisons réseaux sociaux et papeterie. Livré en 7 jours, 2 rounds de modifications inclus.",
      en: "Primary logo + variations, complete brand guideline, social media and stationery adaptations. Delivered in 7 days, 2 rounds of revisions included.",
    },
  },
  {
    name: { fr: "Production vidéo", en: "Video production" },
    price: { fr: "dès 190 000 FCFA", en: "from 190,000 FCFA" },
    description: {
      fr: "Vidéos, clips, spots publicitaires et institutionnels de qualité professionnelle. Fichiers sources inclus, à vous, à vie.",
      en: "Professional-quality videos, clips and advertising or institutional spots. Source files included, yours to keep, forever.",
    },
  },
  {
    name: { fr: "Supports imprimés & objets publicitaires", en: "Printed materials & promotional items" },
    price: { fr: "dès 90 000 FCFA", en: "from 90,000 FCFA" },
    description: {
      fr: "Affiches, flyers, brochures, kakémonos, PLV, goodies et signalétique alignés sur votre identité visuelle.",
      en: "Posters, flyers, brochures, roll-ups, point-of-sale displays, merchandise and signage aligned with your visual identity.",
    },
  },
  {
    name: { fr: "Campagne publicitaire ponctuelle", en: "One-off advertising campaign" },
    price: { fr: "dès 147 000 FCFA", en: "from 147,000 FCFA" },
    description: {
      fr: "Campagne Meta Ads ou Google Ads clé en main : ciblage, créations, pilotage et rapport de résultats. Budget publicitaire non inclus.",
      en: "Turnkey Meta Ads or Google Ads campaign: targeting, creatives, management and results report. Ad budget not included.",
    },
  },
];

export const POURQUOI_BLINKS = {
  fr: [
    "Un interlocuteur unique pour toute votre transformation digitale",
    "Des livrables chiffrés et des délais annoncés et tenus",
    "Une porte d'entrée sans risque : le diagnostic à 19 900 F, déduit si vous continuez",
    "L'intelligence artificielle intégrée à chaque niveau de nos services",
    "Un engagement clair, un prix fixe, zéro surprise",
  ],
  en: [
    "A single point of contact for your entire digital transformation",
    "Quantified deliverables and deadlines that are announced and kept",
    "A risk-free entry point: the 19,900 FCFA diagnostic, deducted if you continue",
    "Artificial intelligence built into every level of our services",
    "A clear commitment, a fixed price, zero surprises",
  ],
};