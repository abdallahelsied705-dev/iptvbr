import type { RouteDefinition } from "@/config/routes";

const articleImageAlt: Record<string, string> = {
  "/blog/como-escolher-box-iptv/": "Box de streaming ligada a uma Smart TV numa sala moderna em Portugal",
  "/blog/iptv-wifi-ou-cabo-ethernet/": "Router doméstico com cabo Ethernet ligado para streaming estável",
  "/blog/vpn-para-iptv/": "Computador portátil com símbolo de proteção de rede e privacidade",
  "/blog/checklist-antes-de-subscrever-iptv/": "Box, comando, bloco de notas e calculadora para comparar uma subscrição IPTV",
  "/blog/seguranca-apps-iptv/": "Configuração de uma aplicação de televisão num computador e vários dispositivos",
  "/blog/iptv-varios-dispositivos-em-casa/": "Telemóvel, tablet e router preparados para streaming em vários dispositivos",
  "/blog/iptv-4k-hdr-codecs/": "Smart TV a mostrar cores e detalhe de imagem HDR em 4K",
  "/blog/controlo-parental-iptv/": "Família a ver televisão em conjunto numa sala com vários ecrãs",
  "/blog/usar-iptv-fora-de-casa/": "Smart TV com conteúdo de viagem numa casa junto ao mar",
  "/blog/manutencao-app-iptv/": "Televisão, comando e bloco de notas para manutenção de uma app IPTV",
};

export function getImageAlt(route: RouteDefinition) {
  return articleImageAlt[route.slug] ?? `${route.title} — guia da IPTVBR em Portugal`;
}
