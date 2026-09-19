import type { RouteDefinition } from "@/config/routes";

export type SeoOverride = {
  seoTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Explicit SERP/social refinements for high-value routes.
 * H1 text remains the route.title; these fields only control metadata.
 */
export const seoOverrides: Record<string, SeoOverride> = {
  "/": {
    seoTitle: "IPTV em Portugal: Guia e Opções | IPTVBR",
    ogTitle: "IPTV em Portugal: Guia e Opções",
    ogDescription:
      "Guias sobre IPTV em Portugal, dispositivos, aplicações, instalação e suporte, organizados num só ecossistema.",
  },
  "/iptv-portugal/": {
    seoTitle: "IPTV Portugal: Guia Completo e Subscrição",
    ogTitle: "IPTV Portugal: Guia Completo e Subscrição",
  },
  "/subscricao-iptv/": {
    seoTitle: "Subscrição IPTV em Portugal: Como Funciona",
    ogTitle: "Subscrição IPTV em Portugal",
  },
  "/comprar-iptv/": {
    seoTitle: "Comprar IPTV em Portugal: O Que Verificar",
    ogTitle: "Comprar IPTV em Portugal",
  },
  "/precos/": {
    seoTitle: "Preços IPTV em Portugal: Planos e Condições",
    ogTitle: "Preços IPTV em Portugal",
  },
  "/dispositivos/": {
    seoTitle: "Dispositivos IPTV: Smart TV, Fire TV e Mais",
    ogTitle: "Dispositivos IPTV",
  },
  "/apps/": {
    seoTitle: "Apps IPTV: Guias de Aplicações e Configuração",
    ogTitle: "Apps IPTV",
  },
  "/guias/": {
    seoTitle: "Guias IPTV: Instalação, Apps, M3U, EPG e Mais",
    ogTitle: "Guias IPTV",
  },
  "/suporte/": {
    seoTitle: "Suporte IPTV: Problemas, Diagnóstico e Soluções",
    ogTitle: "Suporte IPTV",
  },
  "/comparar/": {
    seoTitle: "Comparar IPTV: Critérios para Escolher",
    ogTitle: "Comparar IPTV",
  },
  "/legalidade/": {
    seoTitle: "Legalidade do IPTV em Portugal: O Que Distinguir",
    ogTitle: "Legalidade do IPTV em Portugal",
  },
  "/blog/": {
    seoTitle: "Blog IPTV Portugal: Guias, Tecnologia e Suporte",
    ogTitle: "Blog IPTV Portugal",
  },
};

export function getSeoOverride(route: RouteDefinition): SeoOverride {
  return seoOverrides[route.slug] ?? {};
}
