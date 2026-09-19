import type { RouteDefinition, RouteType } from "@/config/routes";

export type ContentBrief = {
  targetWords: [number, number];
  requiredSections: string[];
  questions: string[];
  cta: "whatsapp" | "support" | "explore" | "none";
};

const rules: Record<RouteType, ContentBrief> = {
  home: {
    targetWords: [900, 1500],
    requiredSections: ["value proposition", "journey paths", "devices/apps", "guides/support", "trust"],
    questions: ["O que é IPTV?", "Por onde começar?"],
    cta: "whatsapp",
  },
  money: {
    targetWords: [1200, 2200],
    requiredSections: ["offer context", "conditions", "compatibility", "payment flow", "faq"],
    questions: ["Como funciona a subscrição?", "Quais são as condições?"],
    cta: "whatsapp",
  },
  device: {
    targetWords: [1100, 2000],
    requiredSections: ["device context", "app path", "setup", "troubleshooting", "related resources"],
    questions: ["Qual aplicação devo usar?", "O que devo preparar?"],
    cta: "whatsapp",
  },
  app: {
    targetWords: [1100, 2000],
    requiredSections: ["app role", "supported method", "configuration", "privacy", "troubleshooting"],
    questions: ["Como configurar?", "Que dados são necessários?"],
    cta: "whatsapp",
  },
  guide: {
    targetWords: [1400, 2600],
    requiredSections: ["definition/context", "prerequisites", "steps", "verification", "troubleshooting"],
    questions: ["O que preciso antes de começar?", "O que faço se falhar?"],
    cta: "support",
  },
  support: {
    targetWords: [900, 1800],
    requiredSections: ["symptom", "likely causes", "checks", "solution", "escalation"],
    questions: ["Como confirmar a causa?", "Quando devo pedir ajuda?"],
    cta: "support",
  },
  comparison: {
    targetWords: [1300, 2400],
    requiredSections: ["criteria", "comparison", "trade-offs", "verification", "decision path"],
    questions: ["Que critérios devo comparar?", "Que dados devo confirmar?"],
    cta: "explore",
  },
  legal: {
    targetWords: [900, 1700],
    requiredSections: ["scope", "verified information", "pending business details", "contact/context"],
    questions: ["O que está confirmado?", "Que dados ainda precisam de validação?"],
    cta: "none",
  },
  blog: {
    targetWords: [1200, 2400],
    requiredSections: ["answer", "explanation", "practical guidance", "related resources", "faq"],
    questions: ["Qual é a dúvida principal?", "Qual é o próximo passo útil?"],
    cta: "explore",
  },
};

export function getContentBrief(route: RouteDefinition): ContentBrief {
  return rules[route.type];
}
