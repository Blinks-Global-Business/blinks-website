export const BLOG_CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "transformation-digitale", label: "Transformation digitale" },
  { id: "intelligence-artificielle", label: "Intelligence artificielle" },
  { id: "marketing", label: "Marketing" },
  { id: "innovation", label: "Innovation" },
  { id: "entrepreneuriat", label: "Entrepreneuriat" },
];

export const BLOG_POSTS = [
  {
  slug: "avenir-conseil-strategique-ia-generative",
  category: "transformation-digitale",
  title: "L'avenir du conseil stratégique à l'ère de l'IA générative",
  excerpt: "« L'IA va-t-elle remplacer les consultants ? » Mauvaise question. Voici les 5 questions à poser avant de signer avec un cabinet à l'ère de l'IA générative.",
  content: [
    {
      type: "lead",
      text: "« L'IA va-t-elle remplacer les consultants ? » Mauvaise question. La bonne, celle que posent les dirigeants que nous rencontrons à Cotonou, Abidjan, Dakar ou Paris : « Qu'est-ce que ça change pour mon entreprise, et comment choisir le bon partenaire ? » Réponse en 3 minutes.",
    },
    { type: "heading", text: "Le contexte, en un chiffre" },
    {
      type: "paragraph",
      text: "Selon un rapport soutenu par la Banque africaine de développement (2025), l'IA pourrait ajouter jusqu'à 1 000 milliards de dollars au PIB africain d'ici 2035, surtout dans l'agriculture, le commerce, l'industrie, la finance et la santé. Les grands cabinets internationaux ont déjà équipé leurs consultants d'IA. La question : qui le fera, avec la même rigueur, pour les PME africaines ?",
    },
    { type: "heading", text: "Ce que l'IA fait bien et ce qu'elle ne fera pas" },
    {
      type: "paragraph",
      text: "Elle fait bien : synthèses, benchmarks, premières versions de documents, simulations de scénarios.",
    },
    {
      type: "paragraph",
      text: "Elle ne fait pas : comprendre votre marché local, engager sa responsabilité sur une décision, convaincre vos équipes, garantir des faits sans erreur.",
    },
    {
      type: "paragraph",
      text: "Conséquence : l'IA absorbe la production, mais le diagnostic, l'arbitrage et la conduite du changement restent humains. C'est là que se joue désormais la valeur d'un cabinet.",
    },
    {
      type: "callout",
      label: "Point de vue Blinks Global Business",
      text: "Un cabinet sans IA vous facture des heures de production inutiles. Un prestataire qui ne fait que recopier un chatbot vous vend du générique au prix de l'expertise. Le modèle gagnant : le conseil augmenté la vitesse de l'IA + le jugement d'un expert qui connaît votre marché.",
    },
    { type: "heading", text: "Le vrai danger en 2026 : le conseil générique" },
    {
      type: "paragraph",
      text: "N'importe qui peut aujourd'hui générer un « plan stratégique » en 20 minutes et le facturer. Trois signes qui le trahissent :",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Aucune donnée propre à votre entreprise",
        "Aucune référence à votre contexte local",
        "Des recommandations valables pour n'importe quel concurrent",
      ],
    },
    {
      type: "paragraph",
      text: "Un plan qui pourrait être vendu tel quel à votre concurrent ne vaut rien pour vous.",
    },
    { type: "heading", text: "Les 5 questions à poser avant de signer avec un cabinet" },
    {
      type: "list",
      ordered: true,
      items: [
        "Comment utilisez-vous l'IA dans vos missions ? Une réponse floue = mauvais signe.",
        "Que faites-vous de nos données ? Exigez une politique de confidentialité claire.",
        "Quelle part du livrable est vérifiée par un expert humain ? La seule bonne réponse : 100 %.",
        "Que connaissez-vous de notre marché local ? Demandez des exemples précis.",
        "Que se passe-t-il après le rapport ? L'accompagnement de la mise en œuvre est le vrai test.",
      ],
    },
    { type: "heading", text: "En résumé" },
    {
      type: "paragraph",
      text: "L'IA n'a pas tué le conseil stratégique. Elle a tué le conseil qui vendait du temps de production.",
    },
    {
      type: "paragraph",
      text: "Pour les PME africaines, c'est une opportunité : un accompagnement plus rapide, plus profond et plus abordable, à condition de choisir le bon partenaire.",
    },
    {
      type: "cta",
      text: "Où en est votre entreprise face à l'IA ? Blinks Global Business propose un diagnostic de maturité IA : 3 cas d'usage prioritaires identifiés, impact estimé sur vos coûts et votre chiffre d'affaires.",
      buttonLabel: "Prenez rendez-vous dès maintenant",
      buttonType: "rdv",
    },
    {
      type: "sources",
      text: "Sources : Banque africaine de développement / Bazara Tech, rapport sur l'impact économique de l'IA en Afrique (déc. 2025) · PwC, Sizing the Prize · PNUD. Les projections citées sont des estimations d'organismes tiers, non des garanties. Article rédigé en juillet 2026.",
    },
  ],
  author: "Aïssé BA Nachbauer",
  date: "2026-07-20",
  readTime: "3 min de lecture",
  image: "/images/blog/ia-conseil-strategique.jpg",
  featured: true,
},
  {
    slug: "5-strategies-croissance-agile-2025",
    category: "innovation",
    title: "5 stratégies pour une croissance agile en 2025",
    excerpt:
      "Réflexion sur l'adaptation des modèles économiques face à l'instabilité des marchés mondiaux.",
    content: `Contenu complet de l'article à rédiger.`,
    author: "Aïssé BA NACHBAUER",
    date: "2026-07-20",
    readTime: "5 min",
    image: "/images/blog/strategies-croissance.jpg",
  },
  {
    slug: "roi-content-marketing-b2b-demythifie",
    category: "marketing",
    title: "Le ROI du Content Marketing B2B démythifié",
    excerpt:
      "Comment mesurer concrètement l'impact de votre leadership d'opinion sur vos ventes directes.",
    content: `Contenu complet de l'article à rédiger.`,
    author: "Aïssé BA NACHBAUER",
    date: "2026-07-20",
    readTime: "6 min",
    image: "/images/blog/roi-content-marketing.jpg",
  },
  {
    slug: "scale-up-defis-internationalisation",
    category: "entrepreneuriat",
    title: "Scale-up : les défis de l'internationalisation",
    excerpt:
      "De la France vers l'Asie : les erreurs critiques à éviter lors de votre expansion globale.",
    content: `Contenu complet de l'article à rédiger.`,
    author: "Aïssé BA NACHBAUER",
    date: "2026-07-20",
    readTime: "10 min",
    image: "/images/blog/internationalisation.jpg",
  },
  {
    slug: "cybersecurite-priorite-dsi-2024",
    category: "transformation-digitale",
    title: "Cybersécurité : la priorité n°1 des DSI",
    excerpt:
      "Pourquoi la transformation digitale ne peut se faire sans une stratégie de défense robuste.",
    content: `Contenu complet de l'article à rédiger.`,
    author: "Aïssé BA NACHBAUER",
    date: "2026-07-20",
    readTime: "7 min",
    image: "/images/blog/cybersecurite.jpg",
  },
  {
    slug: "ia-experience-collaborateur",
    category: "intelligence-artificielle",
    title: "L'IA et l'expérience collaborateur",
    excerpt:
      "Comment l'automatisation intelligente libère le potentiel créatif de vos équipes.",
    content: `Contenu complet de l'article à rédiger.`,
    author: "Aïssé BA NACHBAUER",
    date: "2026-07-20",
    readTime: "4 min",
    image: "/images/blog/ia-experience-collaborateur.jpg",
  },
  {
    slug: "design-thinking-plus-quun-buzzword",
    category: "innovation",
    title: "Design Thinking : plus qu'un buzzword",
    excerpt:
      "Retour sur 10 ans de méthodologie appliquée aux projets de transformation complexes.",
    content: `Contenu complet de l'article à rédiger.`,
    author: "Aïssé BA NACHBAUER",
    date: "2026-07-20",
    readTime: "9 min",
    image: "/images/blog/design-thinking.jpg",
  },
];