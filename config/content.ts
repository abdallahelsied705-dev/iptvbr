import type { RouteDefinition, RouteType } from "@/config/routes";
import { productionContent } from "@/config/content-production";
import { longformContent } from "@/config/content-longform";
import { getActivePricing } from "@/config/business";
import { seoArticles } from "@/config/seo-articles";
import { devicePages } from "@/config/device-pages";
import { scheduledArticles } from "@/config/scheduled-articles";

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  links?: { label: string; href: string }[];
};

export type FAQEntry = { question: string; answer: string };

export type ContentRecord = {
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
  faq: FAQEntry[];
  ctaMessage: string;
  depth: "core" | "supporting";
  entities: string[];
  takeaways: string[];
  steps: string[];
};

const labels: Record<RouteType, string> = {
  home: "IPTV em Portugal",
  money: "Área comercial",
  device: "Dispositivos",
  app: "Aplicações",
  guide: "Guia IPTV",
  support: "Suporte",
  comparison: "Comparação",
  legal: "Informação institucional",
  blog: "Artigo",
};

function links(...items: [string, string][]) {
  return items.map(([label, href]) => ({ label, href }));
}

function moneyContent(route: RouteDefinition): ContentSection[] {
  if (route.slug === "/precos/") {
    const activePricing = getActivePricing();
    const pricingParagraphs = activePricing
      ? [
          "Os planos apresentados nesta página são carregados a partir do Business Truth validado. Confirme a duração, condições e forma de pagamento antes de avançar.",
          "O preço é apenas uma parte da decisão: verifique também compatibilidade, condições de utilização e suporte aplicáveis ao plano escolhido.",
        ]
      : [
          "A estrutura comercial está preparada para apresentar planos de subscrição de forma clara, mas os valores comerciais ainda não foram validados como oferta IPTVBR.",
          "Benchmarks de mercado não são apresentados como preços da IPTVBR. Quando os preços reais forem confirmados, a mesma fonte de dados atualizará os cartões e os elementos comerciais aplicáveis.",
        ];

    return [
      {
        heading: "Planos e preços",
        paragraphs: pricingParagraphs,
        links: links(["Subscrição IPTV", "/subscricao-iptv/"], ["Comprar IPTV", "/comprar-iptv/"], ["Contacto", "/contacto/"]),
      },
      {
        heading: "O que confirmar antes de comprar",
        paragraphs: [
          "Verifique a duração do plano, condições comerciais, política de reembolso, dispositivos suportados e forma de pagamento efetivamente oferecida.",
          "O fluxo definido para este projeto encaminha o utilizador para o WhatsApp antes do pagamento, permitindo confirmar as condições comerciais vigentes.",
        ],
      },
    ];
  }

  if (route.slug === "/teste-iptv/") {
    return [
      {
        heading: "Disponibilidade de teste",
        paragraphs: [
          "Esta página está preparada para uma eventual oferta de teste, mas a existência, duração, condições e elegibilidade do teste continuam por validar.",
          "Nenhuma duração ou vantagem de teste deve ser apresentada como facto comercial até existir confirmação no Business Truth.",
        ],
        links: links(["Ver preços", "/precos/"], ["Falar no WhatsApp", "/contacto/"]),
      },
      {
        heading: "Como usar esta página",
        paragraphs: [
          "Quando o teste for confirmado, esta página deverá explicar claramente quem pode solicitar, quais os passos necessários e quais as condições aplicáveis.",
          "Enquanto esses dados não estiverem confirmados, a prioridade é transparência e não a criação de uma promessa de conversão.",
        ],
      },
    ];
  }

  return [
    {
      heading: "Entender a intenção comercial",
      paragraphs: [
        `A página “${route.title}” pertence à camada comercial do ecossistema IPTVBR. O objetivo é responder à dúvida principal do utilizador sem misturar informações de preço, suporte ou compatibilidade que pertencem a outras páginas.`,
        "A arquitetura mantém o próximo passo visível e liga a recursos relacionados para que o utilizador possa validar o que precisa antes de tomar uma decisão.",
      ],
      links: links(["Preços", "/precos/"], ["Dispositivos", "/dispositivos/"], ["Suporte", "/suporte/"]),
    },
    {
      heading: "Informação comercial verificada",
      paragraphs: [
        "Qualquer preço, teste, número de dispositivos simultâneos, catálogo, garantia ou condição de reembolso deve vir de dados empresariais confirmados.",
        "Estimativas de mercado podem ser usadas internamente como benchmark, mas não devem ser convertidas automaticamente em alegações da IPTVBR.",
      ],
    },
  ];
}

function deviceContent(route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Começar pelo dispositivo",
      paragraphs: [
        `Esta página trata de ${route.primaryKeyword} como uma etapa específica da jornada. O objetivo é explicar o que o utilizador precisa de preparar, qual o tipo de aplicação normalmente envolvido e onde encontrar a ajuda seguinte.`,
        "A compatibilidade final deve refletir apenas dispositivos e aplicações efetivamente testados ou confirmados para o serviço.",
      ],
      links: links(["Ver todos os dispositivos", "/dispositivos/"], ["Ver aplicações", "/apps/"], ["Guias de instalação", "/guias/como-instalar-iptv/"]),
    },
    {
      heading: "Quando algo não funciona",
      paragraphs: [
        "Separe problemas de aplicação, dispositivo, rede e dados de acesso antes de alterar várias variáveis ao mesmo tempo.",
        "A área de suporte contém fluxos específicos para buffering, canais que não carregam e problemas de credenciais.",
      ],
    },
  ];
}

function appContent(route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Compreender a aplicação",
      paragraphs: [
        `O conteúdo sobre “${route.primaryKeyword}” deve explicar a função da aplicação, o tipo de dispositivo onde é utilizada e quais dados de configuração são necessários, sem assumir que todas as versões ou dispositivos são idênticos.`,
        "As instruções finais devem ser escritas a partir da versão realmente testada e mantida pelo projeto.",
      ],
      links: links(["Ver aplicações", "/apps/"], ["Guias", "/guias/como-instalar-iptv/"], ["Suporte", "/suporte/problemas-app/"]),
    },
    {
      heading: "Configuração responsável",
      paragraphs: [
        "Nunca peça ao utilizador para publicar dados de acesso em áreas públicas. Qualquer credencial deve ser tratada como informação privada.",
        "Se a interface da aplicação ou os requisitos de configuração mudarem, o guia deve ser atualizado em vez de manter passos antigos apenas por terem existido anteriormente.",
      ],
    },
  ];
}

function guideContent(route: RouteDefinition): ContentSection[] {
  if (route.slug === "/guias/iptv-e-legal-em-portugal/") {
    return [
      {
        heading: "Tecnologia IPTV não é a mesma coisa que autorização de conteúdo",
        paragraphs: [
          "IPTV descreve uma forma de distribuir vídeo através de redes IP. A legalidade de um serviço específico depende também dos direitos e autorizações aplicáveis ao conteúdo que é distribuído.",
          "Por isso, este guia deve separar sempre o conceito tecnológico das questões de direito de autor, sem atribuir licenças ou autorizações que não tenham sido verificadas.",
        ],
        links: links(["Área de legalidade", "/legalidade/"], ["Sobre IPTV", "/guias/o-que-e-iptv/"], ["Como funciona", "/guias/como-funciona-iptv/"]),
      },
      {
        heading: "Como avaliar uma afirmação de legalidade",
        paragraphs: [
          "Procure informação institucional e documentação verificável quando uma empresa fizer afirmações sobre direitos, licenças ou autorização para determinados conteúdos.",
          "Não trate slogans comerciais como prova de direitos de distribuição.",
        ],
      },
    ];
  }

  return [
    {
      heading: "Passo a passo com contexto",
      paragraphs: [
        `Este guia existe para responder à intenção “${route.primaryKeyword}” e levar o utilizador de uma dúvida concreta para uma ação prática.`,
        "A estrutura deve apresentar pré-requisitos, passos, verificações e caminhos de recuperação quando alguma etapa falhar.",
      ],
      links: links(["Ver todos os guias", "/guias/"], ["Suporte", "/suporte/"], ["Dispositivos", "/dispositivos/"], ["Aplicações", "/apps/"]),
    },
    {
      heading: "Se o resultado não for o esperado",
      paragraphs: [
        "Não altere várias configurações em simultâneo. Primeiro identifique se o problema está no dispositivo, aplicação, rede, credenciais ou na própria fonte do conteúdo.",
        "Quando a causa provável estiver identificada, encaminhe para o artigo de suporte específico correspondente.",
      ],
    },
  ];
}

function supportContent(route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Diagnóstico antes da solução",
      paragraphs: [
        `A página “${route.title}” deve começar por separar sintomas de causas. O mesmo sintoma pode ter origem na rede, aplicação, dispositivo ou dados de acesso.`,
        "O objetivo do suporte é reduzir tentativas aleatórias e conduzir o utilizador por uma sequência curta de verificações.",
      ],
      links: links(["Centro de suporte", "/suporte/"], ["Guias", "/guias/"], ["Problemas de aplicação", "/suporte/problemas-app/"]),
    },
    {
      heading: "Quando pedir ajuda",
      paragraphs: [
        "Se as verificações básicas não resolverem o problema, o utilizador deve ter um caminho claro para fornecer contexto sem expor publicamente credenciais ou outros dados privados.",
        "O contacto atual do projeto passa pelo WhatsApp, onde o caso pode ser analisado com mais contexto.",
      ],
    },
  ];
}

function comparisonContent(route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Comparar por critérios, não por slogans",
      paragraphs: [
        `Esta comparação responde a “${route.primaryKeyword}” usando critérios que o utilizador consegue validar: preço, transparência, compatibilidade, experiência, suporte e condições comerciais.`,
        "O objetivo não é declarar automaticamente um vencedor, mas organizar os fatores que tornam uma decisão mais informada.",
      ],
      links: links(["Como escolher IPTV", "/comparar/como-escolher-iptv-portugal/"], ["Preços", "/precos/"], ["Suporte", "/suporte/"]),
    },
    {
      heading: "Dados que exigem validação",
      paragraphs: [
        "Canais, VOD, uptime, avaliações, garantias e direitos de distribuição são atributos que só devem aparecer como factos quando houver evidência empresarial ou documental adequada.",
        "Benchmarks de concorrentes ajudam na pesquisa, mas não representam automaticamente a oferta IPTVBR.",
      ],
    },
  ];
}

function legalContent(route: RouteDefinition): ContentSection[] {
  const legalPages: Record<string, ContentSection[]> = {
    "/sobre-nos/": [
      { heading: "Quem somos", paragraphs: ["A IPTVBR é um projeto orientado ao público em Portugal, criado para reunir informação sobre subscrições IPTV, dispositivos compatíveis, aplicações, instalação e suporte num percurso simples.", "A comunicação do site é preparada em português de Portugal e procura distinguir informação técnica, condições comerciais e temas relacionados com direitos de conteúdo."], links: links(["Falar connosco", "/contacto/"], ["Consultar a legalidade", "/legalidade/"]) },
      { heading: "Como trabalhamos", paragraphs: ["Publicamos guias práticos e ligamos cada tema às páginas de configuração ou suporte relevantes. Preços, compatibilidade e condições devem ser confirmados antes da contratação.", "Não apresentamos marcas de terceiros como nossas. As referências a dispositivos e aplicações servem apenas para explicar compatibilidade e utilização."] },
      { heading: "Compromisso com a transparência", paragraphs: ["O utilizador deve conseguir identificar o canal oficial de contacto, consultar as condições aplicáveis e compreender o percurso antes do pagamento.", "Se uma informação comercial mudar, prevalecem as condições confirmadas diretamente durante o atendimento."], links: links(["Ver termos", "/termos/"], ["Política de reembolso", "/politica-reembolso/"]) },
    ],
    "/contacto/": [
      { heading: "Canal oficial de contacto", paragraphs: ["O WhatsApp é o canal de contacto disponibilizado pela IPTVBR para questões sobre planos, compatibilidade, configuração e acompanhamento de pedidos.", "Para obter uma resposta útil, indica o dispositivo, a aplicação utilizada e uma descrição breve da dúvida. Nunca publiques palavras-passe ou credenciais em páginas públicas."], links: links(["Ver suporte", "/suporte/"], ["Consultar preços", "/precos/"]) },
      { heading: "Antes de efetuar um pagamento", paragraphs: ["Confirma a duração do plano, o número de dispositivos, o preço final, o método de pagamento e as condições de reembolso aplicáveis ao teu pedido.", "Conserva a confirmação da conversa e o comprovativo da transação para facilitar qualquer pedido posterior de suporte."] },
      { heading: "Privacidade no atendimento", paragraphs: ["Partilha apenas os dados estritamente necessários para analisar o pedido. A IPTVBR não solicita que publiques credenciais, códigos ou dados bancários no site.", "Consulta a política de privacidade para compreender os princípios aplicáveis ao tratamento de informações enviadas voluntariamente."], links: links(["Política de privacidade", "/politica-privacidade/"]) },
    ],
    "/termos/": [
      { heading: "Utilização do site", paragraphs: ["Ao utilizar este site, o visitante aceita fazê-lo de forma lícita e responsável. O conteúdo tem finalidade informativa e comercial e não deve ser usado para contornar direitos, restrições ou regras aplicáveis.", "É proibido tentar interferir com o funcionamento do site, explorar falhas técnicas ou utilizar os conteúdos de forma enganadora."] },
      { heading: "Informação comercial", paragraphs: ["A disponibilidade, o preço, a duração, a compatibilidade e as condições de cada opção devem ser confirmados no momento do pedido. Uma informação desatualizada ou um erro evidente não cria automaticamente uma obrigação comercial.", "O utilizador é responsável por confirmar se o dispositivo, a aplicação e a ligação à internet cumprem os requisitos necessários."], links: links(["Ver preços", "/precos/"], ["Política de reembolso", "/politica-reembolso/"]) },
      { heading: "Conteúdos e propriedade intelectual", paragraphs: ["Os textos, elementos visuais e identidade da IPTVBR não podem ser copiados ou apresentados como pertencentes a terceiros sem autorização.", "Nomes e marcas de fabricantes ou aplicações pertencem aos respetivos titulares e são mencionados apenas para fins de identificação e compatibilidade."] },
    ],
    "/politica-privacidade/": [
      { heading: "Dados que podem ser fornecidos", paragraphs: ["Quando o visitante inicia voluntariamente uma conversa pelo WhatsApp, pode fornecer nome, contacto, dados do pedido, dispositivo e informação necessária ao suporte. O site não deve ser usado para enviar palavras-passe ou dados bancários sensíveis.", "A informação deve ser limitada ao necessário para responder à questão, acompanhar o pedido ou cumprir obrigações aplicáveis."] },
      { heading: "Finalidades e conservação", paragraphs: ["Os dados enviados podem ser usados para responder a pedidos, prestar suporte, confirmar condições comerciais, prevenir abuso e manter registos necessários da interação.", "A informação deve ser conservada apenas durante o período necessário à finalidade aplicável ou ao cumprimento de obrigações legais e depois eliminada ou anonimizada quando adequado."] },
      { heading: "Serviços externos e direitos", paragraphs: ["Ao abrir o WhatsApp ou outra ligação externa, aplicam-se também as políticas do respetivo fornecedor. O visitante deve rever essas condições antes de partilhar informação.", "Para pedir acesso, correção ou eliminação de dados associados a uma interação, utiliza o canal oficial de contacto e fornece elementos suficientes para localizar o pedido."], links: links(["Contactar", "/contacto/"], ["Política de cookies", "/politica-cookies/"]) },
    ],
    "/politica-reembolso/": [
      { heading: "Pedido de cancelamento ou reembolso", paragraphs: ["Qualquer pedido deve ser apresentado pelo canal oficial de contacto, identificando o plano, a data, o comprovativo e o motivo. Cada situação é analisada de acordo com a natureza do serviço, o estado da ativação e as condições confirmadas antes do pagamento.", "O envio de um pedido não significa aprovação automática. A equipa pode solicitar informação adicional estritamente necessária para verificar a transação."] },
      { heading: "Serviços digitais e ativação", paragraphs: ["Quando um serviço digital é configurado ou ativado a pedido do cliente, podem existir limitações ao cancelamento depois do início da execução, nos termos permitidos pela legislação aplicável.", "Antes de pagar, confirma quando começa a ativação, quais são as condições aplicáveis e se existe algum período específico para comunicar problemas."], links: links(["Termos e condições", "/termos/"], ["Contactar", "/contacto/"]) },
      { heading: "Como acelerar a análise", paragraphs: ["Guarda a conversa de confirmação, o plano escolhido e o comprovativo. Descreve o problema com datas e factos objetivos, sem partilhar publicamente credenciais.", "Quando um reembolso for aprovado, o prazo de processamento pode depender do método de pagamento e da instituição financeira utilizada."] },
    ],
    "/politica-cookies/": [
      { heading: "O que são cookies", paragraphs: ["Cookies e tecnologias semelhantes permitem guardar pequenas informações no navegador para assegurar funcionalidades, recordar escolhas ou compreender o desempenho de um site.", "Alguns elementos técnicos podem ser estritamente necessários; outros, se forem ativados, devem respeitar as escolhas de privacidade aplicáveis."] },
      { heading: "Controlo no navegador", paragraphs: ["O visitante pode bloquear, eliminar ou limitar cookies através das definições do navegador. O bloqueio de armazenamento estritamente necessário pode afetar algumas funcionalidades.", "Ligações externas, incluindo o WhatsApp, podem utilizar tecnologias próprias sob as políticas dos respetivos fornecedores."], links: links(["Política de privacidade", "/politica-privacidade/"], ["Contactar", "/contacto/"]) },
      { heading: "Alterações à utilização de cookies", paragraphs: ["Se forem adicionadas ferramentas de análise, publicidade ou personalização, esta página e o mecanismo de consentimento devem ser atualizados antes de essas ferramentas serem utilizadas quando a lei exigir consentimento."] },
    ],
    "/aviso-legal/": [
      { heading: "Natureza da informação", paragraphs: ["Os guias do site ajudam a compreender tecnologia, dispositivos, aplicações e diagnóstico. Não substituem aconselhamento jurídico e não constituem garantia universal de compatibilidade ou desempenho.", "A experiência depende, entre outros fatores, da rede, do dispositivo, da aplicação, da região e das condições efetivamente contratadas."] },
      { heading: "Marcas e serviços de terceiros", paragraphs: ["As marcas, nomes de aplicações e dispositivos mencionados pertencem aos respetivos titulares. A sua referência não implica patrocínio, associação ou aprovação, salvo indicação expressa e verificável.", "A IPTVBR não controla alterações efetuadas por serviços externos, lojas de aplicações ou fabricantes."], links: links(["Legalidade do IPTV", "/legalidade/"], ["Termos", "/termos/"]) },
      { heading: "Utilização responsável", paragraphs: ["O utilizador deve garantir que possui autorização para aceder e utilizar os conteúdos e serviços escolhidos. A tecnologia IPTV, por si só, não determina a legalidade da distribuição de um conteúdo.", "Comunica erros ou informações desatualizadas através da página de contacto para que possam ser revistas."] },
    ],
  };

  if (legalPages[route.slug]) return legalPages[route.slug];

  return [
    {
      heading: "Informação transparente",
      paragraphs: [
        `A página “${route.title}” faz parte da camada de confiança do site. O conteúdo deve identificar claramente o que está confirmado, o que ainda precisa de validação e quais os canais oficiais de contacto.`,
        "As páginas legais finais devem ser revistas de acordo com a configuração real da empresa, do site e dos serviços utilizados.",
      ],
      links: links(["Contacto", "/contacto/"], ["Legalidade", "/legalidade/"], ["Política de privacidade", "/politica-privacidade/"]),
    },
    {
      heading: "Não preencher lacunas com suposições",
      paragraphs: [
        "Dados empresariais, termos comerciais, reembolso e informações sobre direitos permanecem pendentes até serem confirmados.",
        "A transparência aqui é uma parte da arquitetura de confiança, não apenas um requisito de design.",
      ],
    },
  ];
}

function getFAQ(route: RouteDefinition): FAQEntry[] {
  switch (route.type) {
    case "device":
      return [
        { question: "O dispositivo é automaticamente compatível?", answer: "Não. A compatibilidade deve ser confirmada para o dispositivo, aplicação e configuração específicos antes de ser apresentada como garantia." },
        { question: "Onde encontro ajuda de configuração?", answer: "A arquitetura liga a página do dispositivo a guias de instalação, aplicações relacionadas e artigos de suporte." },
      ];
    case "app":
      return [
        { question: "A mesma configuração funciona em todas as versões?", answer: "Não necessariamente. A interface e as opções podem variar por versão e dispositivo, por isso as instruções devem refletir a versão realmente testada." },
        { question: "Devo partilhar os meus dados de acesso publicamente?", answer: "Não. Credenciais e outros dados privados devem ser tratados como informação confidencial." },
      ];
    case "support":
      return [
        { question: "Qual é o primeiro passo para diagnosticar um problema?", answer: "Identifique primeiro se o sintoma aponta para rede, dispositivo, aplicação, credenciais ou outra causa antes de alterar várias configurações." },
        { question: "Posso pedir ajuda pelo WhatsApp?", answer: "Sim. O fluxo de contacto definido para o projeto encaminha o utilizador para o WhatsApp, onde o caso pode ser analisado com contexto." },
      ];
    case "money":
      return [
        { question: "Os preços desta página estão confirmados?", answer: "Os valores guardados atualmente são benchmarks de mercado e não devem ser tratados como preços comerciais IPTVBR até serem validados." },
        { question: "Como funciona o contacto antes do pagamento?", answer: "O fluxo atual direciona o utilizador para o WhatsApp, onde as condições comerciais podem ser confirmadas antes de qualquer pagamento." },
      ];
    default:
      return [
        { question: "Como navegar para o próximo conteúdo?", answer: "Use as ligações contextuais e a navegação para avançar para o próximo tema do mesmo cluster ou para um artigo de suporte relacionado." },
        { question: "Onde são confirmadas as informações comerciais?", answer: "Os dados comerciais devem ser confirmados no Business Truth antes de serem publicados como factos ou ofertas." },
      ];
  }
}

function blogContent(route: RouteDefinition): ContentSection[] {
  const bySlug: Record<string, ContentSection[]> = {
    "/blog/como-escolher-uma-app-iptv/": [
      { heading: "Começa pelo dispositivo e pela loja oficial", paragraphs: ["A escolha começa no sistema operativo: Samsung Tizen, LG webOS, Android TV, Fire TV, Apple TV e telemóvel não disponibilizam exatamente as mesmas aplicações. Confirma a loja do equipamento e a versão mínima suportada antes de comparar funcionalidades.", "Prefere uma aplicação com programador identificável, atualizações recentes e política de privacidade acessível. Um nome conhecido num tutorial antigo não garante que a versão atual continue segura ou compatível."], links: links(["Comparar aplicações IPTV", "/apps/"], ["Guias por dispositivo", "/dispositivos/"], ["Segurança nas apps", "/blog/seguranca-apps-iptv/"]) },
      { heading: "Compara interface, EPG e organização", paragraphs: ["Testa a navegação com o comando ou ecrã tátil que vais usar diariamente. Favoritos, pesquisa, categorias, perfis e controlo parental têm mais impacto na utilização real do que uma lista extensa de opções escondidas.", "Se precisas de guia de programação, confirma como a aplicação associa o EPG aos canais e como atualiza os dados. Um EPG vazio pode resultar da fonte, do identificador do canal ou da configuração — não apenas da aplicação."], links: links(["Entender o EPG", "/blog/o-que-e-epg/"], ["Controlo parental", "/blog/controlo-parental-iptv/"]) },
      { heading: "Valida formatos e desempenho", paragraphs: ["Confirma se a aplicação aceita o formato de acesso disponibilizado, como playlist M3U ou configuração compatível com Xtream Codes. Não convertas nem partilhes credenciais em sites desconhecidos apenas para adaptar um formato.", "Em dispositivos modestos, avalia tempo de abertura, troca de canal, memória e descodificação de vídeo. Uma aplicação visualmente elaborada pode ser menos fluida numa box antiga; compara nas condições reais do teu equipamento."], links: links(["M3U vs Xtream Codes", "/blog/m3u-vs-xtream-codes/"], ["Escolher uma box", "/blog/como-escolher-box-iptv/"]) },
      { heading: "Faz um teste e prepara a manutenção", paragraphs: ["Antes de adotar a aplicação em todos os ecrãs, configura um dispositivo, testa reprodução, áudio, legendas, EPG e recuperação após reinício. Regista a versão que funcionou para facilitar suporte futuro.", "Verifica como limpar cache sem apagar dados, exportar favoritos quando possível e terminar sessões em equipamentos antigos. Atualizações devem vir da mesma loja ou origem confiável usada na instalação."], links: links(["Manutenção da app", "/blog/manutencao-app-iptv/"], ["Guia de instalação", "/guias/como-instalar-iptv/"], ["Ver preços", "/precos/"]) },
    ],
    "/blog/iptv-no-smart-tv/": [
      { heading: "Identifica o sistema da televisão", paragraphs: ["Smart TV não é um único ecossistema. Samsung usa Tizen, LG usa webOS e outras marcas podem integrar Android TV, Google TV ou sistemas próprios. Confirma o modelo completo e o ano porque a loja e as aplicações disponíveis variam.", "Pesquisa a aplicação diretamente na loja oficial da televisão. Se não estiver disponível, não assumes que um ficheiro encontrado na internet é compatível; uma box externa certificada pode ser uma solução mais previsível."], links: links(["Guia para Smart TV", "/dispositivos/iptv-smart-tv/"], ["Samsung", "/dispositivos/iptv-samsung/"], ["LG webOS", "/dispositivos/iptv-lg/"]) },
      { heading: "Prepara rede, memória e atualização", paragraphs: ["Atualiza o software da televisão, confirma espaço disponível e reinicia antes da primeira configuração. Usa Ethernet quando a TV está perto do router; em Wi-Fi, testa 5 GHz com sinal forte no local onde a televisão está instalada.", "Velocidade contratada não substitui estabilidade. Compara o mesmo conteúdo por Wi-Fi e cabo, sem alterar outras definições, para perceber se a rede local é a causa das interrupções."], links: links(["Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/"], ["Velocidade necessária", "/blog/velocidade-internet-iptv/"]) },
      { heading: "Configura a aplicação com segurança", paragraphs: ["Introduz os dados apenas dentro da aplicação validada e evita fotografar ou enviar credenciais em grupos públicos. Depois organiza favoritos, idioma, legendas e EPG antes de concluir o teste.", "Usa o comando para percorrer todas as áreas essenciais. Uma aplicação concebida para telemóvel pode instalar-se em alguns sistemas, mas oferecer navegação inadequada no sofá."], links: links(["Escolher uma app", "/blog/como-escolher-uma-app-iptv/"], ["Configurar EPG", "/guias/epg/"]) },
      { heading: "Diagnostica sem apagar tudo", paragraphs: ["Se a reprodução falhar, verifica primeiro se o problema afeta todos os conteúdos, apenas uma categoria ou apenas a televisão. Testa rede, aplicação e dados de acesso separadamente.", "Limpa cache antes de limpar dados; esta última ação pode remover configuração e favoritos. Regista a mensagem de erro e a versão da aplicação antes de contactar o suporte."], links: links(["Problemas na Smart TV", "/suporte/problemas-smart-tv/"], ["Buffering", "/suporte/buffering/"], ["Ver planos", "/precos/"]) },
    ],
    "/blog/iptv-no-firestick/": [
      { heading: "Prepara o Fire TV Stick", paragraphs: ["Liga o Fire TV Stick ao adaptador de corrente adequado em vez de depender de uma porta USB fraca da televisão. Conclui as atualizações do Fire OS, confirma espaço livre e reinicia o dispositivo antes de instalar a aplicação.", "Identifica o modelo e a geração, porque desempenho, armazenamento e suporte de codecs variam. Um equipamento antigo pode abrir a aplicação, mas ter dificuldade em menus pesados ou vídeo de maior bitrate."], links: links(["Guia Fire TV Stick", "/dispositivos/iptv-firestick/"], ["Escolher box IPTV", "/blog/como-escolher-box-iptv/"]) },
      { heading: "Instala a aplicação por uma origem confiável", paragraphs: ["Começa pela Amazon Appstore e confirma programador, avaliações recentes e data de atualização. Se uma aplicação exigir instalação externa, valida a origem e compreende as permissões antes de ativar opções de programador.", "Não introduzas dados de acesso num APK recebido por mensagem ou num endereço encurtado. Aplicações desatualizadas podem ter falhas de segurança e incompatibilidades com novas versões do sistema."], links: links(["Instalação no Firestick", "/guias/instalar-iptv-no-firestick/"], ["Segurança das apps", "/blog/seguranca-apps-iptv/"]) },
      { heading: "Ajusta rede e experiência", paragraphs: ["Coloca o stick fora da zona apertada atrás da televisão usando o extensor HDMI quando disponível. Isso pode reduzir calor e melhorar receção Wi-Fi. Prefere 5 GHz quando o sinal é forte; 2,4 GHz pode alcançar mais longe, mas sofre mais interferência.", "Depois de configurar, testa troca de canal, EPG, áudio e reprodução prolongada. Organiza favoritos e reduz animações ou funções desnecessárias se a interface ficar lenta."], links: links(["Internet para IPTV", "/blog/velocidade-internet-iptv/"], ["O que é EPG", "/blog/o-que-e-epg/"]) },
      { heading: "Resolve problemas por etapas", paragraphs: ["Se houver buffering, compara outro conteúdo e outro horário antes de reinstalar. Reinicia router e Fire TV, mede o sinal junto à televisão e verifica se o armazenamento está quase cheio.", "Quando a aplicação fecha, limpa primeiro cache e atualiza. Anota mensagem de erro, versão e momento da falha; estes dados tornam o contacto com suporte muito mais eficiente."], links: links(["Problemas no Firestick", "/suporte/problemas-firestick/"], ["Causas de buffering", "/blog/iptv-buffering-causas/"], ["Comparar planos", "/precos/"]) },
    ],
    "/blog/iptv-buffering-causas/": [
      { heading: "Distingue buffering de outras falhas", paragraphs: ["Buffering é a pausa causada pela falta temporária de dados suficientes para continuar a reprodução. Ecrã preto, credenciais inválidas, aplicação que fecha ou EPG vazio são sintomas diferentes e exigem diagnósticos próprios.", "Regista conteúdo, dispositivo, aplicação, horário e frequência. Se apenas um canal falha, a causa provável não é a mesma de uma interrupção que afeta todas as aplicações da casa."], links: links(["Guia de buffering", "/guias/iptv-buffering/"], ["Canais não carregam", "/suporte/canais-nao-carregam/"]) },
      { heading: "Testa primeiro a rede local", paragraphs: ["Reinicia router e dispositivo, aproxima o equipamento ou liga temporariamente por Ethernet. Repete o mesmo conteúdo durante vários minutos e evita executar downloads pesados no teste.", "Um teste de velocidade mostra capacidade num instante, mas não revela sempre perdas, interferência ou variação. Observa estabilidade e compara horários antes de concluir que faltam Mbps."], links: links(["Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"], ["Velocidade de Internet", "/blog/velocidade-internet-iptv/"]) },
      { heading: "Verifica aplicação e dispositivo", paragraphs: ["Atualiza a aplicação pela origem oficial, limpa cache e fecha processos em segundo plano. Confirma espaço livre e temperatura; sticks e boxes sobreaquecidos podem reduzir desempenho.", "Compara outra aplicação compatível apenas quando tens autorização e os mesmos dados de configuração. Se o problema desaparecer, regista versões e definições em vez de mudar tudo ao mesmo tempo."], links: links(["Manutenção da app", "/blog/manutencao-app-iptv/"], ["Escolher aplicação", "/blog/como-escolher-uma-app-iptv/"]) },
      { heading: "Quando contactar suporte", paragraphs: ["Contacta suporte depois de reunir o padrão: hora, dispositivo, tipo de ligação, aplicação, conteúdos afetados e testes realizados. Não envies passwords ou dados completos em capturas públicas.", "Se a falha afetar vários dispositivos na mesma rede, informa isso. Se funcionar em dados móveis mas não no Wi-Fi, inclui esse resultado porque ajuda a separar rede local e serviço."], links: links(["Suporte a buffering", "/suporte/buffering/"], ["IPTV não funciona", "/suporte/iptv-nao-funciona/"], ["Ver planos", "/precos/"]) },
    ],
    "/blog/m3u-vs-xtream-codes/": [
      { heading: "O que é uma playlist M3U", paragraphs: ["M3U é um ficheiro ou endereço que organiza referências a conteúdos numa sequência reconhecida por vários players. Pode ser simples de importar, mas a organização de categorias, nomes e EPG depende da qualidade da lista e da interpretação feita pela aplicação.", "Trata o endereço como uma credencial: não o publiques nem o introduzas em conversores desconhecidos. Algumas aplicações permitem atualizar a playlist sem voltar a escrever tudo; confirma essa opção antes de escolher."], links: links(["Guia M3U", "/guias/m3u/"], ["Segurança das apps", "/blog/seguranca-apps-iptv/"]) },
      { heading: "Como funciona uma configuração Xtream Codes", paragraphs: ["Aplicações compatíveis normalmente pedem servidor, utilizador e password e constroem automaticamente categorias e informação associada. A interface pode ser mais organizada, mas o formato só funciona quando é suportado pelo fornecedor legítimo e pelo player.", "Não confundas o método de login com uma garantia de qualidade ou legalidade. Formato, estabilidade, direitos de distribuição e suporte são critérios separados."], links: links(["Guia Xtream Codes", "/guias/xtream-codes/"], ["Legalidade em Portugal", "/blog/iptv-legalidade-portugal/"]) },
      { heading: "Compara compatibilidade e privacidade", paragraphs: ["Verifica quais formatos a aplicação aceita no teu sistema, como guarda dados e se permite bloquear o acesso com PIN. Em televisão partilhada, evita deixar credenciais visíveis nos menus.", "Se mudares de aplicação, remove a conta do player antigo e termina sessões no dispositivo quando possível. Não envies capturas completas do login ao pedir ajuda."], links: links(["Escolher uma app IPTV", "/blog/como-escolher-uma-app-iptv/"], ["Aplicações", "/apps/"]) },
      { heading: "Qual formato deves escolher", paragraphs: ["Escolhe o formato fornecido de forma legítima e suportado pela aplicação no dispositivo que já tens. Se ambos estiverem disponíveis, compara organização, atualização, EPG e facilidade de diagnóstico sem alterar várias variáveis ao mesmo tempo.", "Faz um teste num único equipamento, regista os passos e só depois replica a configuração nos restantes ecrãs da casa."], links: links(["Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/"], ["Como instalar IPTV", "/guias/como-instalar-iptv/"], ["Ver preços", "/precos/"]) },
    ],
    "/blog/o-que-e-epg/": [
      { heading: "EPG é o guia eletrónico de programação", paragraphs: ["EPG significa Electronic Program Guide. Mostra programa atual, próximos horários e descrições quando a aplicação consegue relacionar cada canal com os dados de programação correspondentes.", "O guia é uma camada de informação separada da reprodução. Um canal pode funcionar sem EPG, e um EPG preenchido não garante que a fonte de vídeo esteja disponível."], links: links(["Guia de EPG", "/guias/epg/"], ["Canais portugueses", "/canais/canais-portugueses/"]) },
      { heading: "Como a aplicação associa canais e programas", paragraphs: ["A fonte de EPG costuma fornecer identificadores, nomes, horários e descrições. O player compara esses identificadores com os canais configurados; diferenças de nome, região ou ID podem deixar linhas vazias.", "Depois da primeira importação, a atualização pode demorar. Confirma fuso horário e país antes de editar associações manualmente."], links: links(["Escolher uma app", "/blog/como-escolher-uma-app-iptv/"], ["Apps IPTV", "/apps/"]) },
      { heading: "Resolver horários errados ou guia vazio", paragraphs: ["Atualiza o EPG dentro da aplicação, confirma ligação à internet e verifica se o endereço de dados continua válido. Se os programas aparecem deslocados, revê fuso horário do sistema e correção de horário na app.", "Quando apenas alguns canais estão vazios, o problema tende a ser de associação. Não apagues toda a configuração antes de testar atualização e correspondência de IDs."], links: links(["EPG não funciona", "/suporte/epg-nao-funciona/"], ["Manutenção da aplicação", "/blog/manutencao-app-iptv/"]) },
      { heading: "Usar o EPG de forma prática", paragraphs: ["Organiza favoritos e usa o guia para reduzir trocas desnecessárias de canal. Em famílias, combina EPG, perfis e controlo parental para tornar a navegação mais simples.", "Revê o comportamento depois de atualizações da aplicação; definições de fuso horário ou cache podem mudar. Regista a versão e o dispositivo quando pedires suporte."], links: links(["Controlo parental", "/blog/controlo-parental-iptv/"], ["Suporte", "/suporte/"], ["Ver planos", "/precos/"]) },
    ],
    "/blog/velocidade-internet-iptv/": [
      { heading: "Velocidade necessária depende da qualidade", paragraphs: ["Uma transmissão de maior resolução e bitrate exige mais capacidade do que conteúdo comprimido em definição standard. Reserva margem para variações e para outros equipamentos da casa, em vez de dimensionar a ligação pelo mínimo teórico.", "Resolução anunciada não revela todo o consumo: codec, frame rate e compressão alteram o débito. Observa o comportamento real durante vários minutos."], links: links(["Guia de velocidade", "/guias/velocidade-internet-iptv/"], ["4K, HDR e codecs", "/blog/iptv-4k-hdr-codecs/"]) },
      { heading: "Estabilidade importa mais do que um pico", paragraphs: ["Um teste rápido pode mostrar muitos Mbps e esconder perdas, interferência e oscilações. Faz vários testes no dispositivo e local onde vais ver televisão, incluindo o horário em que a casa tem maior utilização.", "Latência não determina sozinha a qualidade de vídeo, mas variação e perda de pacotes podem interromper o fluxo. Evita tirar conclusões a partir de uma única medição."], links: links(["Diagnosticar buffering", "/blog/iptv-buffering-causas/"], ["Suporte de buffering", "/suporte/buffering/"]) },
      { heading: "Wi-Fi, Ethernet e equipamentos da casa", paragraphs: ["Ethernet oferece uma ligação previsível quando o cabo é viável. No Wi-Fi, 5 GHz costuma ter maior capacidade a curta distância; 2,4 GHz alcança mais longe, mas enfrenta mais interferência.", "Router, paredes, repetidores e dispositivos antigos influenciam o resultado. Testa por cabo para separar problemas do acesso à internet e da rede sem fios."], links: links(["Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"], ["Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/"]) },
      { heading: "Um teste doméstico que ajuda a decidir", paragraphs: ["Reproduz o mesmo conteúdo no mesmo dispositivo por Wi-Fi e Ethernet, sem mudar a aplicação. Anota arranque, interrupções e recuperação enquanto outros equipamentos usam a rede normalmente.", "Se ambos falharem da mesma forma, investiga aplicação, dispositivo e fonte. Se apenas o Wi-Fi falhar, melhora cobertura ou posição do router antes de aumentar o plano de internet."], links: links(["IPTV não funciona", "/suporte/iptv-nao-funciona/"], ["Dispositivos compatíveis", "/dispositivos/"], ["Comparar preços", "/precos/"]) },
    ],
    "/blog/iptv-legalidade-portugal/": [
      { heading: "IPTV é uma tecnologia, não uma licença", paragraphs: ["IPTV descreve distribuição de televisão ou vídeo através de redes IP. A tecnologia é usada por operadores, emissoras e plataformas legítimas; a legalidade concreta depende dos direitos para distribuir cada conteúdo e das condições aplicáveis.", "Um player, uma playlist ou um formato de login não prova autorização. É necessário avaliar quem fornece o serviço e que informação verificável apresenta."], links: links(["Legalidade do IPTV", "/legalidade/"], ["IPTV é legal em Portugal?", "/guias/iptv-e-legal-em-portugal/"]) },
      { heading: "Sinais de transparência a procurar", paragraphs: ["Procura identificação do responsável, contacto, termos, política de privacidade, condições de pagamento e reembolso. Preços claros e suporte acessível ajudam a avaliar a relação comercial, embora não substituam prova de direitos.", "Desconfia de promessas absolutas, catálogos ilimitados sem explicação, pressão para pagar por métodos irreversíveis ou pedidos para ocultar a utilização."], links: links(["Sobre nós", "/sobre-nos/"], ["Termos", "/termos/"], ["Política de reembolso", "/politica-reembolso/"]) },
      { heading: "Protege dados e pagamento", paragraphs: ["Lê as condições antes de fornecer dados pessoais. Usa meios de pagamento com registo adequado e não partilhes passwords do dispositivo, conta Google, Apple ID ou acesso remoto ao computador.", "Instala aplicações por lojas oficiais e revê permissões. Um pedido para desativar proteção ou instalar ficheiros de origem obscura é um risco independente da questão de direitos de autor."], links: links(["Segurança das apps", "/blog/seguranca-apps-iptv/"], ["Política de privacidade", "/politica-privacidade/"]) },
      { heading: "Como decidir com informação verificável", paragraphs: ["Compara compatibilidade, suporte, termos e informação pública antes de avançar. Se a autorização para determinado conteúdo for importante para a decisão, pede esclarecimento documentado ao fornecedor.", "Esta página é informativa e não substitui aconselhamento jurídico. Para uma situação concreta, consulta legislação atual e um profissional qualificado em Portugal."], links: links(["Checklist de subscrição", "/blog/checklist-antes-de-subscrever-iptv/"], ["Contacto", "/contacto/"], ["Ver preços", "/precos/"]) },
    ],
  };
  return bySlug[route.slug] ?? [
    { heading: "Artigo editorial", paragraphs: [`Este artigo aborda “${route.primaryKeyword}” de forma prática, mantendo a ligação com o resto da rede de conteúdo. O objetivo é responder à questão principal e orientar o leitor para o próximo passo adequado.`], links: links(["Blog IPTV", "/blog/"], ["Guias", "/guias/"], ["Suporte", "/suporte/"]) },
    { heading: "Leitura contextual", paragraphs: ["Cada tema aqui pode ligar-se a um dispositivo, aplicação, guia ou fluxo de suporte quando isso ajuda o utilizador, evitando conteúdo isolado que não serve a jornada."] },
  ];
}

export function getContentRecord(route: RouteDefinition): ContentRecord {
  let sections: ContentSection[];

  switch (route.type) {
    case "money": sections = moneyContent(route); break;
    case "device": sections = deviceContent(route); break;
    case "app": sections = appContent(route); break;
    case "guide": sections = guideContent(route); break;
    case "support": sections = supportContent(route); break;
    case "comparison": sections = comparisonContent(route); break;
    case "legal": sections = legalContent(route); break;
    case "blog": sections = blogContent(route); break;
    default:
      sections = [
        {
          heading: "Conteúdo organizado por intenção",
          paragraphs: [
            "A página inicial funciona como um ponto de entrada para o ecossistema IPTVBR e distribui o utilizador por informação comercial, dispositivos, aplicações, guias e suporte.",
            "O objetivo é permitir que cada pessoa encontre o próximo conteúdo adequado sem depender de uma única página sobrecarregada.",
          ],
        },
        {
          heading: "Próximos caminhos",
          paragraphs: [
            "Use a navegação e as ligações contextuais para aprofundar o tema necessário. Cada cluster foi desenhado para reforçar a relação entre descoberta, decisão, configuração e suporte.",
          ],
        },
      ];
  }

  const production = productionContent[route.slug] ?? {
    depth: "supporting" as const,
    entities: [route.primaryKeyword],
    takeaways: [
      "Usa esta página para responder à intenção principal antes de avançar para outro cluster.",
      "Confirma dados comerciais e de compatibilidade antes de os tratar como factos.",
      "Segue as ligações contextuais para aprofundar configuração, suporte ou informação comercial."
    ],
    steps: ["Definir a dúvida", "Verificar o contexto", "Consultar o guia relacionado", "Avançar para o próximo passo"]
  };

  const longform = scheduledArticles[route.slug] ?? seoArticles[route.slug] ?? devicePages[route.slug] ?? longformContent[route.slug];

  return {
    eyebrow: labels[route.type],
    intro: route.description,
    sections: longform?.sections ?? sections,
    faq: longform?.faq ?? getFAQ(route),
    ctaMessage: `Olá, gostaria de obter informações sobre ${route.title}.`,
    depth: production.depth,
    entities: production.entities,
    takeaways: production.takeaways,
    steps: production.steps ?? ["Definir a necessidade", "Consultar a informação", "Validar o contexto", "Avançar para a etapa seguinte"],
  };
}
