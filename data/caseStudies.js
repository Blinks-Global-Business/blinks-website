export const CASE_STUDY_FILTERS = [
  { id: "tous", label: "Tous" },
  { id: "marketing-croissance-commerciale", label: "Marketing & Croissance Commerciale" },
  { id: "digital-intelligence-artificielle", label: "Digital & Intelligence Artificielle" },
  { id: "image-marque-design", label: "Image de Marque & Design" },
  { id: "publicite-media-audiovisuel", label: "Publicité, Média & Audiovisuel" },
];

export const CASE_STUDIES = [
  {
    id: "thiare-tv",
    category: "image-marque-design",
    sector: "Web TV communautaire",
    title: "De l'idée à la concrétisation : Thiaré TV",
    challenge: "Une web TV communautaire sénégalaise à lancer de zéro : aucune identité de marque, aucune présence digitale existante.",
    content: `Blinks Global Business a accompagné Thiaré TV de la conception à la mise en ligne : création de logo, identité visuelle, charte graphique, étude de marché, stratégie d'entreprise et site internet.

De zéro à une présence digitale complète, activée et performante : logo, site, réseaux sociaux et partenariats déployés.`,
    image: "/images/realisations/thiare-tv.jpg",
    metrics: [
      { value: "0 → 1", label: " 100 leads qualifiés / mois " },
      { value: "Site + Réseaux", label: "Écosystème complet lancé en 3 semaines" },
      { value: "Partenariats", label: "Activés" },
    ],
  },
  {
    id: "archiprobat",
    category: "digital-intelligence-artificielle",
    sector: "BTP",
    title: "Refonte digitale pour Archiprobat",
    challenge: "Une entreprise de BTP sénégalaise dont l'image et la présence digitale ne reflétaient plus son positionnement sur le marché.",
    content: `Blinks Global Business a restructuré l'image d'Archiprobat et maximisé sa crédibilité marché : nouveau logo, site internet avec agent IA intégré, présence Google optimisée.

Résultat : les clients perçoivent désormais l'entreprise différemment, qui domine maintenant son secteur sur son marché local.`,
    image: "/images/realisations/archiprobat.jpg",
    metrics: [
      { value: "Nouveau", label: "Logo & identité" },
      { value: "Agent IA", label: "Intégré au site" },
      { value: "Google", label: "Présence optimisée" },
    ],
  },
  {
    id: "kuky",
    category: "marketing-croissance-commerciale",
    sector: "Santé & bien-être",
    title: "Écosystème digital pour Parapharmacie Kuky+++",
    challenge: "Une parapharmacie sénégalaise cherchant à structurer sa présence digitale et son organisation commerciale pour soutenir sa croissance.",
    content: `Blinks Global Business a déployé un écosystème digital complet : WhatsApp Business actif 24h/24, service Click & Collect opérationnel, équipe formée et autonome.

Le chiffre d'affaires de la parapharmacie a scalé grâce à cette digitalisation de bout en bout.`,
    image: "/images/realisations/kuky.jpg",
    metrics: [
      { value: "24h/24", label: "WhatsApp Business actif" },
      { value: "Click & Collect", label: "Opérationnel" },
      { value: "CA", label: " +12% de commandes via WhatsApp" },
    ],
  },
  {
    id: "gs2m",
    category: "marketing-croissance-commerciale",
    sector: "Éducation",
    title: "Stratégie de lancement pour GS2M",
    challenge: "Un groupe scolaire sénégalais de plus de 1000 élèves ayant besoin d'une stratégie à long terme pour structurer sa vision et accélérer son développement.",
    content: `Blinks Global Business a activé une stratégie à long terme pour l'établissement, pas une simple prestation ponctuelle, mais un véritable accompagnement qui structure la vision de l'école et accélère son lancement prévu en octobre 2026.`,
    image: "/images/realisations/gs2m.jpg",
    metrics: [
      { value: "1000+", label: "Élèves" },
      { value: "Oct. 2026", label: "Lancement prévu oct. 2026" },
      { value: "Stratégie", label: "Long terme activée" },
    ],
  },
  {
    id: "baobab-care",
    category: "image-marque-design",
    sector: "Association caritative",
    title: "Une marque à impact pour Baobab Care",
    challenge: "Une association caritative française à impact social, avec un besoin de visuels percutants et d'une stratégie digitale pour maximiser l'effet de ses campagnes.",
    content: `Blinks Global Business a transformé l'association en marque à impact : visuels percutants, campagnes de dons optimisées, stratégie digitale déployée avec excellence.

Les bénéficiaires de l'association en ressentent directement les effets.`,
    image: "/images/realisations/baobab-care.jpg",
    metrics: [
      { value: "Visuels", label: "Impact renforcé" },
      { value: "Dons", label: "Campagnes optimisées" },
      { value: "Marque", label: "À impact social" },
    ],
  },
];