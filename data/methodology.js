import { Search, LineChart, Rocket, TrendingUp } from "lucide-react";

export const METHODOLOGY_STEPS = [
  {
    icon: Search,
    letter: "D",
    label: { fr: "Diagnostic", en: "Diagnosis" },
    description: {
      fr: "Nous auditons votre organisation et vos défis digitaux.",
      en: "We audit your organization and your digital challenges.",
    },
  },
  {
    icon: LineChart,
    letter: "A",
    label: { fr: "Analyse", en: "Analysis" },
    description: {
      fr: "Nous déployons la stratégie et les solutions sur-mesure",
      en: "We deploy the strategy and custom solutions",
    },
  },
  {
    icon: TrendingUp,
    letter: "R",
    label: { fr: "Résultats", en: "Results" },
    description: {
      fr: "Nous mesurons, ajustons et maximisons la performance.",
      en: "We measure, adjust and maximize performance.",
    },
  },
  {
    icon: Rocket,
    letter: "E",
    label: { fr: "Expansion", en: "Expansion" },
    description: {
      fr: "Nous faisons évoluer vos solutions pour une croissance durable.",
      en: "We evolve your solutions to support sustainable growth.",
    },
  },
];