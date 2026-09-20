export type ExternalResource = {
  label: string;
  href: string;
};

const resourcePairs: Record<string, ExternalResource[]> = {
  "/blog/como-escolher-uma-app-iptv/": [
    { label: "Appolo IPTV — recursos de aplicações", href: "https://www.appoloiptv.com/" },
    { label: "Dexter Fire TV — informação para streaming devices", href: "https://dexterfiretv.com/" },
  ],
  "/blog/iptv-no-smart-tv/": [
    { label: "MultiVision IPTV — experiência multi-ecrã", href: "https://www.multivision-iptv.com/" },
    { label: "Belgische IPTV — referência europeia", href: "https://belgischeiptv.be/" },
  ],
  "/blog/iptv-no-firestick/": [
    { label: "Dexter Fire TV — recursos para Fire TV", href: "https://dexterfiretv.com/" },
    { label: "Golden Gate IPTV — guia internacional", href: "https://goldengateiptv.com/" },
  ],
  "/blog/iptv-buffering-causas/": [
    { label: "Golden Gate IPTV — streaming e estabilidade", href: "https://goldengateiptv.com/" },
  ],
  "/blog/m3u-vs-xtream-codes/": [
    { label: "IPTV Panel Resellers — perspetiva técnica", href: "https://iptvpanelresellers.com/" },
  ],
  "/blog/o-que-e-epg/": [
    { label: "IPTV Polski — referência internacional", href: "https://iptvpolski.pl/" },
  ],
  "/blog/velocidade-internet-iptv/": [
    { label: "Nederland IPTV — streaming nos Países Baixos", href: "https://nederlandiptv.org/" },
  ],
  "/blog/iptv-legalidade-portugal/": [
    { label: "IPTV em Portugal — referência portuguesa", href: "https://iptvemportugal.pt/" },
    { label: "IPTV Portuguesse — referência portuguesa", href: "https://iptvportuguesse.com/" },
  ],
  "/blog/como-escolher-box-iptv/": [
    { label: "Dexter Fire TV — dispositivos de streaming", href: "https://dexterfiretv.com/" },
  ],
  "/blog/iptv-wifi-ou-cabo-ethernet/": [
    { label: "Nederland IPTV — referência de streaming", href: "https://nederlandiptv.org/" },
  ],
  "/blog/vpn-para-iptv/": [
    { label: "Chile IPTV — referência internacional", href: "https://chileiptv.com/" },
    { label: "Israel IPTV — referência internacional", href: "https://israeliptv.co.il/" },
  ],
  "/blog/checklist-antes-de-subscrever-iptv/": [
    { label: "IPTV em Portugal — comparação local", href: "https://iptvemportugal.pt/" },
  ],
  "/blog/seguranca-apps-iptv/": [
    { label: "Israel IPTV — referência internacional", href: "https://israeliptv.co.il/" },
  ],
  "/blog/iptv-varios-dispositivos-em-casa/": [
    { label: "MultiVision IPTV — referência multi-ecrã", href: "https://www.multivision-iptv.com/" },
  ],
  "/blog/iptv-4k-hdr-codecs/": [
    { label: "Golden Gate IPTV — referência 4K internacional", href: "https://goldengateiptv.com/" },
  ],
  "/blog/controlo-parental-iptv/": [
    { label: "Belgische IPTV — referência europeia", href: "https://belgischeiptv.be/" },
  ],
  "/blog/usar-iptv-fora-de-casa/": [
    { label: "Romanian IPTV — referência europeia", href: "https://romanianiptv.ro/" },
    { label: "Greek IPTV — referência regional", href: "https://greeksiptv.gr/" },
  ],
  "/blog/manutencao-app-iptv/": [
    { label: "Appolo IPTV — recursos de aplicação", href: "https://www.appoloiptv.com/" },
  ],
  "/blog/quanto-consome-iptv/": [
    { label: "Chile IPTV — referência internacional", href: "https://chileiptv.com/" },
    { label: "IPTV Polski — referência internacional", href: "https://iptvpolski.com/" },
  ],
  "/blog/melhor-app-iptv-smart-tv/": [{ label: "Appolo IPTV — recursos de aplicações", href: "https://www.appoloiptv.com/" }],
  "/blog/iptv-com-som-sem-imagem/": [{ label: "Golden Gate IPTV — referência de streaming", href: "https://goldengateiptv.com/" }],
  "/blog/iptv-sem-som/": [{ label: "MultiVision IPTV — referência internacional", href: "https://www.multivision-iptv.com/" }],
  "/blog/latencia-iptv-vs-buffering/": [{ label: "Belgische IPTV — referência europeia", href: "https://belgischeiptv.be/" }],
  "/blog/router-para-iptv/": [{ label: "Nederland IPTV — referência de rede", href: "https://nederlandiptv.org/" }],
  "/blog/como-limpar-cache-app-iptv/": [{ label: "Dexter Fire TV — recursos para streaming devices", href: "https://dexterfiretv.com/" }],
  "/blog/mesh-wifi-para-iptv/": [{ label: "Romanian IPTV — referência europeia", href: "https://romanianiptv.ro/" }],
  "/blog/adaptador-ethernet-firestick/": [{ label: "Dexter Fire TV — recursos para Fire TV", href: "https://dexterfiretv.com/" }],
  "/blog/legendas-audio-iptv/": [{ label: "Greek IPTV — referência regional", href: "https://iptvgreeks.gr/" }],
  "/blog/iptv-segunda-casa/": [{ label: "Chile IPTV — referência internacional", href: "https://chileiptv.com/" }],
};

export function getExternalResources(slug: string): ExternalResource[] {
  return resourcePairs[slug] ?? [];
}
