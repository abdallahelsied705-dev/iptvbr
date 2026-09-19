import { businessTruth } from "@/config/business";
export type RouteType =
  | "home"
  | "money"
  | "device"
  | "app"
  | "guide"
  | "support"
  | "comparison"
  | "legal"
  | "blog";

export interface RouteDefinition {
  slug: string;
  type: RouteType;
  intent: string;
  pillar: string;
  primaryKeyword: string;
  title: string;
  description: string;
  canonical: string;
  indexable: boolean;
  follow: boolean;
  parent?: string;
  children?: string[];
  relatedPages?: string[];
  schema: string[];
  image?: string;
  publishedAt?: string;
}

const base = "https://iptvbr.pt";
const route = (slug: string) => `${base}${slug === "/" ? "/" : slug}`;

const define = (
  slug: string,
  type: RouteType,
  primaryKeyword: string,
  title: string,
  description: string,
  parent = "/",
  intent = "informational",
): RouteDefinition => ({
  slug,
  type,
  intent,
  pillar: type,
  primaryKeyword,
  title,
  description,
  canonical: route(slug),
  indexable: true,
  follow: true,
  parent,
  schema: ["WebPage", "BreadcrumbList"],
});

export const routes: RouteDefinition[] = [
  {
    slug: "/",
    type: "home",
    intent: "navigational-commercial",
    pillar: "iptv-portugal",
    primaryKeyword: "iptv portugal",
    title: "IPTV em Portugal",
    description: "Informação sobre IPTV em Portugal, dispositivos, aplicações, guias e suporte no ecossistema IPTVBR.",
    canonical: route("/"),
    indexable: true,
    follow: true,
    children: ["/iptv-portugal/", "/precos/", "/dispositivos/", "/apps/", "/guias/", "/suporte/"],
    schema: ["Organization", "WebSite", "WebPage"],
  },
  define("/iptv-portugal/", "money", "iptv portugal", "IPTV Portugal: Guia, Opções e Subscrição", "Guia central sobre IPTV em Portugal, subscrição, dispositivos, aplicações, instalação e suporte.", "/", "commercial-investigational"),
  define("/subscricao-iptv/", "money", "subscrição iptv", "Subscrição IPTV em Portugal", "Informação sobre subscrição IPTV em Portugal e como funciona o processo.", "/iptv-portugal/", "commercial"),
  define("/comprar-iptv/", "money", "comprar iptv", "Comprar IPTV em Portugal", "Informação para quem procura compreender o processo de compra de uma subscrição IPTV em Portugal.", "/iptv-portugal/", "transactional"),
  define("/precos/", "money", "preços iptv", "Preços IPTV em Portugal", "Consulte a estrutura de planos e informações de preços IPTV em Portugal.", "/iptv-portugal/", "commercial-investigational"),
  define("/reseller/", "money", "revenda iptv portugal", "Programa de Revenda IPTV em Portugal", "Conheça o programa IPTVBR para parceiros, com informação sobre revenda, estrutura comercial, suporte e próximos passos em Portugal.", "/iptv-portugal/", "commercial"),
  { ...define("/teste-iptv/", "money", "teste iptv", "Teste IPTV em Portugal", "Informação sobre disponibilidade de teste IPTV. A disponibilidade deve ser confirmada antes da publicação de qualquer oferta.", "/iptv-portugal/", "commercial"), indexable: businessTruth.trial.verification === "verified" && businessTruth.trial.production?.available === true },

  define("/dispositivos/", "device", "dispositivos iptv", "Dispositivos IPTV", "Compare dispositivos compatíveis com IPTV e encontre guias de configuração para Smart TV, Fire TV, Android, Apple TV, Windows e mobile.", "/", "commercial-informational"),
  define("/dispositivos/iptv-firestick/", "device", "iptv firestick", "IPTV no Fire TV Stick", "Guia sobre IPTV no Fire TV Stick, instalação, aplicações e resolução de problemas.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-smart-tv/", "device", "iptv smart tv", "IPTV na Smart TV", "Informação para utilizar IPTV em Smart TV e escolher o fluxo de configuração adequado.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-samsung/", "device", "iptv samsung", "IPTV na Samsung TV", "Guia para configurar IPTV numa Samsung Smart TV, escolher uma aplicação compatível e resolver problemas frequentes de reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-lg/", "device", "iptv lg", "IPTV na LG Smart TV", "Guia para configurar IPTV numa LG Smart TV com webOS, avaliar aplicações compatíveis e melhorar a ligação e a reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-android-tv/", "device", "iptv android tv", "IPTV no Android TV", "Aprenda a configurar IPTV no Android TV, escolher uma aplicação adequada e otimizar a rede, o comando e a reprodução de conteúdos.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-google-tv/", "device", "iptv google tv", "IPTV no Google TV", "Guia para instalar e configurar IPTV no Google TV, escolher aplicações compatíveis e diagnosticar dificuldades de rede ou reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-apple-tv/", "device", "iptv apple tv", "IPTV no Apple TV", "Descubra como utilizar IPTV no Apple TV, comparar aplicações compatíveis e preparar a rede e o equipamento para uma reprodução estável.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-iphone-ipad/", "device", "iptv iphone ipad", "IPTV no iPhone e iPad", "Guia para configurar IPTV no iPhone e iPad, escolher uma aplicação compatível e gerir Wi-Fi, dados móveis e transmissão para a TV.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-pc/", "device", "iptv pc", "IPTV no PC e Windows", "Saiba como configurar IPTV num computador Windows, comparar aplicações, preparar a ligação à internet e resolver falhas de reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-roku/", "device", "iptv roku portugal", "IPTV no Roku: Compatibilidade e Alternativas", "Guia para perceber as limitações do Roku, aplicações disponíveis e alternativas seguras para ver IPTV em Portugal.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-chromecast/", "device", "iptv chromecast", "IPTV no Chromecast: Como Transmitir para a TV", "Como usar Chromecast e Google Cast com uma aplicação compatível, rede estável e controlo pelo telemóvel.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-nvidia-shield/", "device", "iptv nvidia shield", "IPTV na NVIDIA Shield TV", "Configuração de IPTV na NVIDIA Shield TV com foco em aplicações Android TV, 4K, rede e desempenho.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-windows/", "device", "iptv windows", "IPTV no Windows: Apps, Rede e Configuração", "Guia para configurar IPTV no Windows com aplicações adequadas, reprodução em ecrã completo e diagnóstico de rede.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-android/", "device", "iptv android telemóvel", "IPTV no Android: Guia para Telemóvel e Tablet", "Como escolher uma aplicação IPTV para Android, configurar o acesso e gerir dados móveis, bateria e segurança.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-formuler/", "device", "iptv formuler", "IPTV no Formuler: Guia de Configuração", "Guia para preparar uma box Formuler, compreender a aplicação MyTVOnline e organizar rede, EPG e comando.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-telemovel/", "device", "iptv telemóvel", "IPTV no Telemóvel: Android, iPhone e Tablet", "Guia móvel para ver IPTV com Wi-Fi ou dados, controlar consumo e ligar o telemóvel a um ecrã maior.", "/dispositivos/", "informational"),

  define("/apps/", "app", "apps iptv", "Aplicações IPTV", "Guias e informação sobre aplicações IPTV e configuração em diferentes dispositivos.", "/", "informational-commercial"),
  define("/apps/iptv-smarters-pro/", "app", "iptv smarters pro", "IPTV Smarters Pro: Guia de Configuração", "Guia informativo para compreender a configuração do IPTV Smarters Pro.", "/apps/", "informational"),
  define("/apps/tivimate/", "app", "tivimate", "TiviMate: Guia de IPTV", "Guia do TiviMate para Android TV e Fire TV com passos de configuração, organização de listas, EPG, interface e diagnóstico básico.", "/apps/", "informational"),
  define("/apps/ibo-player/", "app", "ibo player", "IBO Player: Guia de IPTV", "Guia do IBO Player com passos gerais de instalação, ativação da aplicação, configuração do acesso e resolução de problemas frequentes.", "/apps/", "informational"),
  define("/apps/smart-iptv/", "app", "smart iptv", "Smart IPTV: Guia de Configuração", "Guia da aplicação Smart IPTV para televisores compatíveis, incluindo instalação, configuração, listas, rede e diagnóstico de reprodução.", "/apps/", "informational"),

  define("/guias/", "guide", "guias iptv", "Guias IPTV", "Guias práticos sobre IPTV, instalação, aplicações, EPG, M3U e configuração.", "/", "informational"),
  define("/guias/o-que-e-iptv/", "guide", "o que é iptv", "O Que é IPTV?", "Explicação clara sobre IPTV, conceitos básicos e diferenças entre tecnologia e direitos de conteúdo.", "/guias/", "informational"),
  define("/guias/como-funciona-iptv/", "guide", "como funciona iptv", "Como Funciona o IPTV?", "Entenda o funcionamento do IPTV, os componentes envolvidos e o fluxo de reprodução.", "/guias/", "informational"),
  define("/guias/como-instalar-iptv/", "guide", "como instalar iptv", "Como Instalar IPTV", "Guia geral de instalação e configuração, com ligações para guias específicos por dispositivo.", "/guias/", "informational"),
  define("/guias/instalar-iptv-no-firestick/", "guide", "instalar iptv no firestick", "Como Instalar IPTV no Fire TV Stick", "Guia passo a passo para organizar a instalação de IPTV no Fire TV Stick.", "/guias/", "informational"),
  define("/guias/m3u/", "guide", "m3u iptv", "M3U IPTV: O Que é e Como Funciona", "Explicação sobre listas M3U, estrutura e utilização em aplicações compatíveis.", "/guias/", "informational"),
  define("/guias/xtream-codes/", "guide", "xtream codes", "Xtream Codes: Guia de Configuração", "Explicação sobre os dados de acesso usados por aplicações que suportam o formato Xtream.", "/guias/", "informational"),
  define("/guias/epg/", "guide", "epg iptv", "EPG IPTV: Guia do Guia de Programação", "Explique o que é EPG, como é usado e como diagnosticar problemas de programação.", "/guias/", "informational"),
  define("/guias/velocidade-internet-iptv/", "guide", "velocidade internet iptv", "Que Velocidade de Internet é Precisa para IPTV?", "Guia para avaliar ligação de Internet, estabilidade e fatores que influenciam a reprodução.", "/guias/", "informational"),
  define("/guias/iptv-buffering/", "guide", "iptv buffering", "IPTV com Buffering: Causas e Soluções", "Guia para diagnosticar buffering e distinguir problemas de rede, aplicação e dispositivo.", "/guias/", "informational"),
  define("/guias/iptv-e-legal-em-portugal/", "guide", "iptv legal em portugal", "IPTV é Legal em Portugal?", "Guia informativo que distingue a tecnologia IPTV da autorização para distribuir conteúdos protegidos.", "/guias/", "informational"),

  define("/canais/", "guide", "canais iptv", "Canais IPTV", "Estrutura informativa para explorar categorias de canais IPTV sem inventar um catálogo não verificado.", "/", "informational-commercial"),
  define("/canais/canais-portugueses/", "guide", "canais portugueses iptv", "Canais Portugueses e IPTV", "Informação sobre a procura de canais portugueses e como validar a oferta real de um serviço.", "/canais/", "commercial-informational"),
  define("/canais/desporto/", "guide", "iptv desporto", "IPTV e Desporto", "Guia sobre necessidades de streaming desportivo e fatores a verificar num serviço.", "/canais/", "commercial-informational"),
  define("/canais/filmes-series/", "guide", "iptv filmes series", "IPTV para Filmes e Séries", "Guia sobre reprodução de filmes e séries e critérios para avaliar uma oferta IPTV.", "/canais/", "commercial-informational"),

  define("/suporte/", "support", "suporte iptv", "Suporte IPTV", "Encontre caminhos claros para resolver problemas de IPTV, aplicações, dispositivos e reprodução.", "/", "support"),
  define("/suporte/iptv-nao-funciona/", "support", "iptv não funciona", "IPTV Não Funciona: Diagnóstico", "Diagnóstico passo a passo para perceber por que motivo o IPTV não funciona e separar problemas de rede, aplicação, dispositivo ou acesso.", "/suporte/", "support"),
  define("/suporte/buffering/", "support", "iptv buffering solução", "IPTV com Buffering: Como Resolver", "Checklist para resolver buffering no IPTV, testar a ligação, comparar Wi-Fi e Ethernet e identificar limitações da aplicação ou do dispositivo.", "/suporte/", "support"),
  define("/suporte/canais-nao-carregam/", "support", "canais iptv não carregam", "Canais IPTV Não Carregam", "Passos para diagnosticar canais IPTV que não iniciam, ficam a carregar ou param, verificando rede, aplicação, acesso e disponibilidade.", "/suporte/", "support"),
  define("/suporte/epg-nao-funciona/", "support", "epg não funciona", "EPG Não Funciona", "Guia para resolver problemas de EPG, atualizar o guia de programação, rever a fonte de dados e corrigir horários ou categorias em falta.", "/suporte/", "support"),
  define("/suporte/erro-credenciais/", "support", "erro credenciais iptv", "Erro de Credenciais IPTV", "Checklist para resolver erros de utilizador, palavra-passe, URL do servidor e dados de acesso sem expor credenciais confidenciais.", "/suporte/", "support"),
  define("/suporte/problemas-firestick/", "support", "problemas firestick iptv", "Problemas de IPTV no Fire TV Stick", "Resolva problemas frequentes de IPTV no Fire TV Stick relacionados com aplicação, armazenamento, atualização, comando, Wi-Fi e reprodução.", "/suporte/", "support"),
  define("/suporte/problemas-smart-tv/", "support", "problemas smart tv iptv", "Problemas de IPTV na Smart TV", "Diagnóstico de IPTV na Smart TV para falhas da aplicação, ligação à internet, memória, atualização, listas e reprodução de conteúdos.", "/suporte/", "support"),
  define("/suporte/problemas-app/", "support", "problemas app iptv", "Problemas com a App IPTV", "Guia para diagnosticar falhas numa aplicação IPTV, rever configuração, permissões, cache, atualizações, ligação e compatibilidade do dispositivo.", "/suporte/", "support"),

  define("/comparar/", "comparison", "comparar iptv", "Comparar IPTV", "Recursos para comparar opções IPTV com foco em critérios, não em claims não verificados.", "/", "commercial-investigational"),
  define("/comparar/como-escolher-iptv-portugal/", "comparison", "como escolher iptv portugal", "Como Escolher IPTV em Portugal", "Checklist para comparar opções de IPTV, dispositivos, suporte, preço e transparência.", "/comparar/", "commercial-investigational"),
  define("/comparar/iptv-barato-vs-premium/", "comparison", "iptv barato vs premium", "IPTV Barato vs Premium", "Comparação de critérios para avaliar preço, suporte, experiência e transparência.", "/comparar/", "commercial-investigational"),
  define("/comparar/iptv-vs-tv-tradicional/", "comparison", "iptv vs tv tradicional", "IPTV vs TV Tradicional", "Comparação informativa entre modelos de distribuição e experiência de televisão.", "/comparar/", "informational"),

  define("/legalidade/", "legal", "legalidade iptv", "Legalidade do IPTV", "Informação sobre tecnologia IPTV, direitos de autor e necessidade de autorização para conteúdos protegidos.", "/", "informational"),
  define("/sobre-nos/", "legal", "sobre iptvbr", "Sobre a IPTVBR", "Informação institucional sobre o projeto IPTVBR e a sua abordagem de conteúdo.", "/", "navigational"),
  define("/contacto/", "legal", "contacto iptv", "Contacto IPTVBR", "Formas de contacto e apoio para dúvidas relacionadas com o projeto IPTVBR.", "/", "navigational"),
  define("/termos/", "legal", "termos iptvbr", "Termos e Condições", "Termos e condições do site e das interações comerciais, sujeitos a validação final.", "/", "legal"),
  define("/politica-privacidade/", "legal", "politica privacidade iptv", "Política de Privacidade", "Informação sobre privacidade e tratamento de dados, a validar conforme a configuração real do site.", "/", "legal"),
  define("/politica-reembolso/", "legal", "politica reembolso iptv", "Política de Reembolso", "Condições gerais para pedidos de cancelamento e reembolso relacionados com os serviços IPTVBR.", "/", "legal"),
  define("/politica-cookies/", "legal", "política de cookies iptvbr", "Política de Cookies", "Informação sobre cookies, armazenamento técnico e escolhas de privacidade no site IPTVBR.", "/", "legal"),
  define("/aviso-legal/", "legal", "aviso legal iptvbr", "Aviso Legal e Isenção de Responsabilidade", "Limites da informação publicada, marcas de terceiros e responsabilidade do utilizador no site IPTVBR.", "/", "legal"),

  { ...define("/blog/", "blog", "blog iptv portugal", "Blog IPTV Portugal", "Artigos e atualizações sobre IPTV em Portugal, dispositivos, aplicações, tecnologia e suporte.", "/", "informational"), image: "/images/hero/iptv-portugal-streaming.svg" },
  { ...define("/blog/como-escolher-uma-app-iptv/", "blog", "como escolher uma app iptv", "Como Escolher uma App IPTV", "Critérios práticos para comparar aplicações IPTV por dispositivo, interface, configuração e manutenção.", "/blog/", "informational"), image: "/images/blog-photos/seguranca-apps-iptv.webp" },
  { ...define("/blog/iptv-no-smart-tv/", "blog", "iptv smart tv guia", "IPTV na Smart TV: O Que Preparar Antes da Configuração", "Um guia editorial sobre os pontos a validar antes de configurar IPTV numa Smart TV.", "/blog/", "informational"), image: "/images/features/experiencia-iptv-pro.webp" },
  { ...define("/blog/iptv-no-firestick/", "blog", "iptv firestick guia", "IPTV no Fire TV Stick: Roteiro de Configuração", "Roteiro editorial para preparar dispositivo, aplicação, dados de acesso e diagnóstico no Fire TV Stick.", "/blog/", "informational"), image: "/images/features/instalacao-simples-pro.webp" },
  { ...define("/blog/iptv-buffering-causas/", "blog", "iptv buffering causas", "IPTV com Buffering: As Causas Mais Comuns", "Como separar causas relacionadas com rede, aplicação, dispositivo e reprodução quando existe buffering.", "/blog/", "informational"), image: "/images/blog-photos/iptv-wifi-cabo-ethernet.webp" },
  { ...define("/blog/m3u-vs-xtream-codes/", "blog", "m3u vs xtream codes", "M3U vs Xtream Codes: Qual é a Diferença?", "Comparação técnica entre dois formatos de configuração usados por aplicações que suportam IPTV.", "/blog/", "informational"), image: "/images/blog-photos/iptv-varios-dispositivos.webp" },
  { ...define("/blog/o-que-e-epg/", "blog", "o que é epg iptv", "O Que é EPG e Para Que Serve no IPTV?", "Explicação prática sobre EPG, guia de programação, fontes de dados e diagnóstico básico.", "/blog/", "informational"), image: "/images/features/canais-ao-vivo-pro.webp" },
  { ...define("/blog/velocidade-internet-iptv/", "blog", "velocidade internet iptv", "Que Internet é Precisa para IPTV?", "Como avaliar velocidade, estabilidade e condições de rede para uma experiência de streaming mais consistente.", "/blog/", "informational"), image: "/images/blog-photos/iptv-wifi-cabo-ethernet.webp" },
  { ...define("/blog/iptv-legalidade-portugal/", "blog", "iptv legalidade portugal", "IPTV e Legalidade em Portugal: O Que Distinguir", "Um artigo explicativo sobre a diferença entre tecnologia IPTV e autorização para distribuir conteúdos protegidos.", "/blog/", "informational"), image: "/images/blog-photos/checklist-subscricao-iptv.webp" },
  { ...define("/blog/como-escolher-box-iptv/", "blog", "melhor box iptv portugal", "Como Escolher uma Box IPTV em Portugal", "Critérios objetivos para comparar hardware, sistema, ligações, atualizações e desempenho antes de comprar uma box IPTV.", "/blog/", "commercial-investigational"), image: "/images/blog-photos/como-escolher-box-iptv.webp" },
  { ...define("/blog/iptv-wifi-ou-cabo-ethernet/", "blog", "iptv wifi ou cabo", "IPTV por Wi-Fi ou Cabo Ethernet: Qual é Melhor?", "Comparação prática entre Wi-Fi e Ethernet para streaming, com testes simples para melhorar estabilidade e reduzir falhas.", "/blog/", "informational"), image: "/images/blog-photos/iptv-wifi-cabo-ethernet.webp" },
  { ...define("/blog/vpn-para-iptv/", "blog", "vpn para iptv portugal", "VPN para IPTV: Quando Faz Sentido e Quando Não", "Guia equilibrado sobre privacidade, desempenho, limitações e legalidade ao usar VPN com aplicações de streaming.", "/blog/", "informational"), image: "/images/blog-photos/vpn-para-iptv.webp" },
  { ...define("/blog/checklist-antes-de-subscrever-iptv/", "blog", "checklist subscrição iptv", "Checklist Antes de Subscrever IPTV em Portugal", "Uma lista prática para validar preço, compatibilidade, suporte, privacidade e condições antes de escolher um serviço IPTV.", "/blog/", "commercial-investigational"), image: "/images/blog-photos/checklist-subscricao-iptv.webp" },
  { ...define("/blog/seguranca-apps-iptv/", "blog", "segurança apps iptv", "Segurança em Apps IPTV: Proteja Dados e Dispositivos", "Boas práticas para instalar aplicações, proteger credenciais, rever permissões e evitar ficheiros ou fontes duvidosas.", "/blog/", "informational"), image: "/images/blog-photos/seguranca-apps-iptv.webp" },
  { ...define("/blog/iptv-varios-dispositivos-em-casa/", "blog", "iptv vários dispositivos", "IPTV em Vários Dispositivos: Como Organizar a Casa", "Como planear ecrãs, perfis, rede e utilização simultânea sem confundir compatibilidade com número de ligações permitidas.", "/blog/", "informational-commercial"), image: "/images/blog-photos/iptv-varios-dispositivos.webp" },
  { ...define("/blog/iptv-4k-hdr-codecs/", "blog", "iptv 4k hdr codecs", "IPTV em 4K: HDR, Codecs e o Que Realmente Importa", "Explicação sem jargão sobre resolução, HDR, codecs, bitrate e requisitos do dispositivo para streaming 4K.", "/blog/", "informational"), image: "/images/blog-photos/iptv-4k-hdr-codecs.webp" },
  { ...define("/blog/controlo-parental-iptv/", "blog", "controlo parental iptv", "Controlo Parental no IPTV: Guia para Famílias", "Passos para criar uma experiência familiar mais segura usando perfis, PIN, categorias e hábitos de supervisão.", "/blog/", "informational"), image: "/images/blog-photos/controlo-parental-iptv.webp" },
  { ...define("/blog/usar-iptv-fora-de-casa/", "blog", "usar iptv fora de casa", "Usar IPTV Fora de Casa: Rede, Dados e Limitações", "O que verificar antes de usar streaming em viagem: dados móveis, Wi-Fi público, licenças geográficas e segurança.", "/blog/", "informational"), image: "/images/blog-photos/usar-iptv-fora-de-casa.webp" },
  { ...define("/blog/manutencao-app-iptv/", "blog", "manutenção app iptv", "Manutenção da App IPTV: Atualizações, Cache e Desempenho", "Rotina simples para manter a aplicação estável, atualizar com segurança e resolver lentidão sem apagar tudo por impulso.", "/blog/", "support-informational"), image: "/images/blog-photos/manutencao-app-iptv.webp" },
  { ...define("/blog/quanto-consome-iptv/", "blog", "quanto consome iptv", "Quanto Consome IPTV? Dados, Velocidade e Qualidade", "Saiba quantos dados o IPTV pode consumir por hora em SD, HD, Full HD e 4K, como estimar o consumo mensal e reduzir gastos sem prejudicar a qualidade.", "/blog/", "informational"), image: "/images/blog/quanto-consome-iptv.svg" },
  { ...define("/blog/melhor-app-iptv-smart-tv/", "blog", "melhor app iptv para smart tv", "Melhor App IPTV para Smart TV: Como Escolher", "Um método prático para comparar aplicações IPTV por sistema, interface, EPG, segurança e estabilidade.", "/blog/", "informational"), image: "/images/blog/melhor-app-iptv-smart-tv.svg", publishedAt: "2026-09-20T09:00:00Z" },
  { ...define("/blog/iptv-com-som-sem-imagem/", "blog", "iptv com som sem imagem", "IPTV com Som sem Imagem: Diagnóstico do Ecrã Preto", "Passos para diagnosticar ecrã preto com áudio, incluindo codec, aceleração, HDMI, HDR e resolução.", "/blog/", "informational"), image: "/images/blog/iptv-com-som-sem-imagem.svg", publishedAt: "2026-09-21T09:00:00Z" },
  { ...define("/blog/iptv-sem-som/", "blog", "iptv sem som", "IPTV sem Som: Como Resolver Áudio Ausente", "Checklist para resolver IPTV sem som através de faixas de áudio, PCM, passthrough, HDMI e aplicações.", "/blog/", "informational"), image: "/images/blog/iptv-sem-som.svg", publishedAt: "2026-09-22T09:00:00Z" },
  { ...define("/blog/latencia-iptv-vs-buffering/", "blog", "latência iptv", "Latência IPTV vs Buffering: Entende a Diferença", "Aprende a distinguir atraso de interrupções e a ajustar rede, buffer e dispositivo para cada utilização.", "/blog/", "informational"), image: "/images/blog/latencia-iptv-vs-buffering.svg", publishedAt: "2026-09-23T09:00:00Z" },
  { ...define("/blog/router-para-iptv/", "blog", "melhor router para iptv", "Router para IPTV: Wi-Fi 6, Ethernet ou Mesh?", "Critérios para escolher um router para streaming, avaliar cobertura e evitar compras que não resolvem a causa.", "/blog/", "informational"), image: "/images/blog/router-para-iptv.svg", publishedAt: "2026-09-24T09:00:00Z" },
  { ...define("/blog/como-limpar-cache-app-iptv/", "blog", "como limpar cache app iptv", "Como Limpar a Cache da App IPTV sem Perder Dados", "Guia seguro para limpar cache em Android TV, Fire TV, Samsung, LG e Apple TV sem apagar configuração por engano.", "/blog/", "informational"), image: "/images/blog/como-limpar-cache-app-iptv.svg", publishedAt: "2026-09-25T09:00:00Z" },
  { ...define("/blog/mesh-wifi-para-iptv/", "blog", "mesh wifi para iptv", "Mesh Wi-Fi para IPTV: Quando Vale a Pena", "Como posicionar nós Mesh, escolher backhaul e testar cobertura real numa casa com vários ecrãs.", "/blog/", "informational"), image: "/images/blog/mesh-wifi-para-iptv.svg", publishedAt: "2026-09-26T09:00:00Z" },
  { ...define("/blog/adaptador-ethernet-firestick/", "blog", "adaptador ethernet firestick", "Adaptador Ethernet para Fire TV Stick: Guia Prático", "Quando usar Ethernet no Fire TV Stick, como escolher um adaptador compatível e testar a diferença.", "/blog/", "informational"), image: "/images/blog/adaptador-ethernet-firestick.svg", publishedAt: "2026-09-27T09:00:00Z" },
  { ...define("/blog/legendas-audio-iptv/", "blog", "legendas e áudio iptv", "Legendas e Áudio no IPTV: Idioma e Sincronização", "Configura faixas de áudio, idiomas, sincronização de legendas e opções de acessibilidade no player.", "/blog/", "informational"), image: "/images/blog/legendas-audio-iptv.svg", publishedAt: "2026-09-28T09:00:00Z" },
  { ...define("/blog/iptv-segunda-casa/", "blog", "iptv segunda casa", "IPTV na Segunda Casa: Internet, Plano e Segurança", "Como preparar IPTV numa casa de férias, confirmar ligações, calcular dados e proteger equipamentos partilhados.", "/blog/", "informational"), image: "/images/blog/iptv-segunda-casa.svg", publishedAt: "2026-09-29T09:00:00Z" },
];

export function isRoutePublished(item: RouteDefinition, now = new Date()) {
  return !item.publishedAt || new Date(item.publishedAt).getTime() <= now.getTime();
}

export function getRoute(slug: string, now = new Date()) {
  return routes.find((item) => item.slug === slug && isRoutePublished(item, now));
}

export function getChildRoutes(parent: string, now = new Date()) {
  return routes.filter((item) => item.parent === parent && isRoutePublished(item, now));
}
