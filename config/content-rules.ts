import type { RouteType } from "@/config/routes";

export type ContentRule = {
  minSections: number;
  minFaq: number;
  requireSteps: boolean;
  requireEntities: boolean;
  notes: string;
};

export const contentRules: Record<RouteType, ContentRule> = {
  home: { minSections: 2, minFaq: 2, requireSteps: false, requireEntities: true, notes: "Entry point: route users into the main clusters." },
  money: { minSections: 2, minFaq: 2, requireSteps: true, requireEntities: true, notes: "Commercial clarity and verified business facts take priority." },
  device: { minSections: 2, minFaq: 2, requireSteps: true, requireEntities: true, notes: "Device → app → setup → troubleshooting journey." },
  app: { minSections: 2, minFaq: 2, requireSteps: true, requireEntities: true, notes: "App role, supported setup path, privacy, troubleshooting." },
  guide: { minSections: 2, minFaq: 2, requireSteps: true, requireEntities: true, notes: "Explain, demonstrate, verify, recover from failure." },
  support: { minSections: 2, minFaq: 2, requireSteps: true, requireEntities: true, notes: "Problem → cause → checks → next action." },
  comparison: { minSections: 2, minFaq: 2, requireSteps: true, requireEntities: true, notes: "Compare criteria and disclose unverifiable attributes." },
  legal: { minSections: 2, minFaq: 2, requireSteps: false, requireEntities: true, notes: "Distinguish verified facts, policy text, and pending business details." },
  blog: { minSections: 2, minFaq: 2, requireSteps: false, requireEntities: true, notes: "Standalone editorial intent plus contextual links into the graph." },
};
