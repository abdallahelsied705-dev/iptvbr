import type { RouteDefinition } from "@/config/routes";

const articleImageAlt: Record<string, string> = {
  "/blog/como-escolher-uma-app-iptv/": "Comparação segura de aplicações IPTV em diferentes dispositivos",
  "/blog/iptv-no-smart-tv/": "Smart TV numa sala moderna preparada para configurar IPTV",
  "/blog/iptv-no-firestick/": "Dispositivo de streaming preparado para instalar uma aplicação IPTV",
  "/blog/iptv-buffering-causas/": "Router e ligação doméstica usados para diagnosticar buffering no IPTV",
  "/blog/m3u-vs-xtream-codes/": "Vários dispositivos para comparar configuração M3U e Xtream Codes",
  "/blog/o-que-e-epg/": "Televisão com canais ao vivo e guia eletrónico de programação EPG",
  "/blog/velocidade-internet-iptv/": "Router com Wi-Fi e Ethernet para testar a velocidade necessária para IPTV",
  "/blog/iptv-legalidade-portugal/": "Checklist para avaliar legalidade, transparência e condições de um serviço IPTV",
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
