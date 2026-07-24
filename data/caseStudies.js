export const CASE_STUDY_FILTERS = [
  { id: "tous", label: { fr: "Tous", en: "All" } },
  { id: "marketing-croissance-commerciale", label: { fr: "Marketing & Croissance Commerciale", en: "Marketing & Business Growth" } },
  { id: "digital-intelligence-artificielle", label: { fr: "Digital & Intelligence Artificielle", en: "Digital & Artificial Intelligence" } },
  { id: "image-marque-design", label: { fr: "Image de Marque & Design", en: "Brand Image & Design" } },
  { id: "publicite-media-audiovisuel", label: { fr: "Publicité, Média & Audiovisuel", en: "Advertising, Media & Video" } },
];

export const CASE_STUDIES = [
  {
    id: "thiare-tv",
    category: "image-marque-design",
    image: "/images/realisations/thiare-tv.jpg",
    sector: { fr: "Web TV communautaire", en: "Community web TV" },
    title: {
      fr: "De l'idée à la concrétisation : Thiaré TV",
      en: "From idea to reality: Thiaré TV",
    },
    challenge: {
      fr: "Une web TV communautaire sénégalaise à lancer de zéro : aucune identité de marque, aucune présence digitale existante.",
      en: "A Senegalese community web TV to launch from scratch: no brand identity, no existing digital presence.",
    },
    content: {
      fr: `Blinks Global Business a accompagné Thiaré TV de la conception à la mise en ligne : création de logo, identité visuelle, charte graphique, étude de marché, stratégie d'entreprise et site internet.

De zéro à une présence digitale complète, activée et performante : logo, site, réseaux sociaux et partenariats déployés.`,
      en: `Blinks Global Business supported Thiaré TV from concept to launch: logo creation, visual identity, brand guideline, market research, business strategy and website.

From zero to a complete, active and high-performing digital presence: logo, website, social media and partnerships all deployed.`,
    },
    metrics: [
      { value: "0 → 1", label: { fr: "100 leads qualifiés / mois", en: "100 qualified leads / month" } },
      { value: "Site + Réseaux", label: { fr: "Écosystème complet lancé en 3 semaines", en: "Full ecosystem launched in 3 weeks" } },
      { value: { fr: "Partenariats", en: "Partnerships" }, label: { fr: "Activés", en: "Activated" } },
    ],
  },
  {
    id: "archiprobat",
    category: "digital-intelligence-artificielle",
    image: "/images/realisations/archiprobat.jpg",
    sector: { fr: "BTP", en: "Construction" },
    title: {
      fr: "Refonte digitale pour Archiprobat",
      en: "Digital overhaul for Archiprobat",
    },
    challenge: {
      fr: "Une entreprise de BTP sénégalaise dont l'image et la présence digitale ne reflétaient plus son positionnement sur le marché.",
      en: "A Senegalese construction company whose image and digital presence no longer reflected its market position.",
    },
    content: {
      fr: `Blinks Global Business a restructuré l'image d'Archiprobat et maximisé sa crédibilité marché : nouveau logo, site internet avec agent IA intégré, présence Google optimisée.

Résultat : les clients perçoivent désormais l'entreprise différemment, qui domine maintenant son secteur sur son marché local.`,
      en: `Blinks Global Business restructured Archiprobat's image and maximized its market credibility: new logo, website with an integrated AI agent, optimized Google presence.

Result: clients now perceive the company differently, and it now dominates its sector in its local market.`,
    },
    metrics: [
      { value: { fr: "Nouveau", en: "New" }, label: { fr: "Logo & identité", en: "Logo & identity" } },
      { value: { fr: "Agent IA", en: "AI agent" }, label: { fr: "Intégré au site", en: "Integrated into the site" } },
      { value: "Google", label: { fr: "Présence optimisée", en: "Presence optimized" } },
    ],
  },
  {
    id: "kuky",
    category: "marketing-croissance-commerciale",
    image: "/images/realisations/kuky.jpg",
    sector: { fr: "Santé & bien-être", en: "Health & wellness" },
    title: {
      fr: "Écosystème digital pour Parapharmacie Kuky+++",
      en: "Digital ecosystem for Parapharmacie Kuky+++",
    },
    challenge: {
      fr: "Une parapharmacie sénégalaise cherchant à structurer sa présence digitale et son organisation commerciale pour soutenir sa croissance.",
      en: "A Senegalese pharmacy looking to structure its digital presence and sales organization to support its growth.",
    },
    content: {
      fr: `Blinks Global Business a déployé un écosystème digital complet : WhatsApp Business actif 24h/24, service Click & Collect opérationnel, équipe formée et autonome.

Le chiffre d'affaires de la parapharmacie a scalé grâce à cette digitalisation de bout en bout.`,
      en: `Blinks Global Business deployed a complete digital ecosystem: WhatsApp Business active 24/7, an operational Click & Collect service, and a trained, autonomous team.

The pharmacy's revenue scaled up thanks to this end-to-end digitalization.`,
    },
    metrics: [
      { value: "24h/24", label: { fr: "WhatsApp Business actif", en: "WhatsApp Business active" } },
      { value: "Click & Collect", label: { fr: "Opérationnel", en: "Operational" } },
      { value: { fr: "CA", en: "Revenue" }, label: { fr: "+12% de commandes via WhatsApp", en: "+12% of orders via WhatsApp" } },
    ],
  },
  {
    id: "gs2m",
    category: "marketing-croissance-commerciale",
    image: "/images/realisations/gs2m.jpg",
    sector: { fr: "Éducation", en: "Education" },
    title: {
      fr: "Stratégie de lancement pour GS2M",
      en: "Launch strategy for GS2M",
    },
    challenge: {
      fr: "Un groupe scolaire sénégalais de plus de 1000 élèves ayant besoin d'une stratégie à long terme pour structurer sa vision et accélérer son développement.",
      en: "A Senegalese school group of over 1,000 students needing a long-term strategy to structure its vision and accelerate its growth.",
    },
    content: {
      fr: `Blinks Global Business a activé une stratégie à long terme pour l'établissement, pas une simple prestation ponctuelle, mais un véritable accompagnement qui structure la vision de l'école et accélère son lancement prévu en octobre 2026.`,
      en: `Blinks Global Business activated a long-term strategy for the school, not a one-off service, but genuine ongoing support that structures the school's vision and accelerates its launch planned for October 2026.`,
    },
    metrics: [
      { value: "1000+", label: { fr: "Élèves", en: "Students" } },
      { value: "Oct. 2026", label: { fr: "Lancement prévu oct. 2026", en: "Launch planned Oct. 2026" } },
      { value: { fr: "Stratégie", en: "Strategy" }, label: { fr: "Long terme activée", en: "Long-term strategy activated" } },
    ],
  },
  {
    id: "baobab-care",
    category: "image-marque-design",
    image: "/images/realisations/baobab-care.jpg",
    sector: { fr: "Association caritative", en: "Charity" },
    title: {
      fr: "Une marque à impact pour Baobab Care",
      en: "A brand with impact for Baobab Care",
    },
    challenge: {
      fr: "Une association caritative française à impact social, avec un besoin de visuels percutants et d'une stratégie digitale pour maximiser l'effet de ses campagnes.",
      en: "A French social-impact charity in need of striking visuals and a digital strategy to maximize the impact of its campaigns.",
    },
    content: {
      fr: `Blinks Global Business a transformé l'association en marque à impact : visuels percutants, campagnes de dons optimisées, stratégie digitale déployée avec excellence.

Les bénéficiaires de l'association en ressentent directement les effets.`,
      en: `Blinks Global Business transformed the association into a brand with impact: striking visuals, optimized donation campaigns, and a digital strategy deployed with excellence.

The association's beneficiaries directly feel the effects.`,
    },
    metrics: [
      { value: { fr: "Visuels", en: "Visuals" }, label: { fr: "Impact renforcé", en: "Stronger impact" } },
      { value: { fr: "Dons", en: "Donations" }, label: { fr: "Campagnes optimisées", en: "Optimized campaigns" } },
      { value: { fr: "Marque", en: "Brand" }, label: { fr: "À impact social", en: "With social impact" } },
    ],
  },
];