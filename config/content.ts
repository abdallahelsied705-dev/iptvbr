import type { RouteDefinition, RouteType } from "@/config/routes";
import { productionContent } from "@/config/content-production";
import { longformContent } from "@/config/content-longform";
import { getActivePricing } from "@/config/business";
import { seoArticles } from "@/config/seo-articles";
import { devicePages } from "@/config/device-pages";

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
      { heading: "Começa pelo dispositivo", paragraphs: ["A melhor aplicação depende do dispositivo, do método de configuração disponível e da experiência que procuras. Começar pelo hardware reduz escolhas desnecessárias.", "Compara interface, facilidade de configuração, estabilidade da aplicação e frequência de manutenção antes de escolher."], links: links(["Aplicações IPTV", "/apps/"], ["Dispositivos", "/dispositivos/"], ["Guia de instalação", "/guias/como-instalar-iptv/"]) },
      { heading: "Verifica o fluxo de configuração", paragraphs: ["Uma boa escolha deve ter um caminho claro desde a instalação até à configuração e ao diagnóstico. Evita instruções que dependam de versões que não tenham sido testadas."], },
    ],
    "/blog/iptv-no-smart-tv/": [
      { heading: "Antes de abrir a aplicação", paragraphs: ["Confirma o sistema da televisão, a aplicação que pretendes usar e o método de configuração suportado. Diferentes modelos podem apresentar interfaces distintas.", "Mantém os dados de acesso privados e evita instalar aplicações de fontes que não consigas validar."], links: links(["IPTV na Smart TV", "/dispositivos/iptv-smart-tv/"], ["Aplicações", "/apps/"], ["Suporte", "/suporte/problemas-smart-tv/"]) },
      { heading: "Quando a reprodução falha", paragraphs: ["Se o conteúdo não iniciar, separa primeiro rede, aplicação, dispositivo e dados de acesso. O diagnóstico em etapas é mais eficiente do que mudar várias configurações em simultâneo."] },
    ],
    "/blog/iptv-no-firestick/": [
      { heading: "Um roteiro simples", paragraphs: ["No Fire TV Stick, organiza o processo em quatro etapas: preparar o dispositivo, escolher a aplicação, inserir os dados de configuração e testar a reprodução.", "As instruções concretas devem refletir a aplicação e a versão realmente testadas pelo projeto."], links: links(["Fire TV Stick", "/dispositivos/iptv-firestick/"], ["Instalação", "/guias/instalar-iptv-no-firestick/"], ["Problemas Firestick", "/suporte/problemas-firestick/"]) },
      { heading: "Evita diagnósticos confusos", paragraphs: ["Se existir buffering ou um erro de ligação, regista primeiro o sintoma e em que etapa aparece. Isso torna a próxima ação mais clara."] },
    ],
    "/blog/iptv-buffering-causas/": [
      { heading: "Buffering não tem uma causa única", paragraphs: ["Buffering pode estar relacionado com a estabilidade da ligação, congestionamento, aplicação, dispositivo ou outra parte do percurso de reprodução. O objetivo é isolar a causa antes de alterar configurações.", "Testa uma variável de cada vez e regista o que mudou."], links: links(["Guia de buffering", "/guias/iptv-buffering/"], ["Suporte", "/suporte/buffering/"]) },
      { heading: "Começa pela rede", paragraphs: ["Verifica se outros serviços de vídeo apresentam problemas semelhantes. Depois compara o comportamento em diferentes aplicações ou dispositivos quando isso for possível."] },
    ],
    "/blog/m3u-vs-xtream-codes/": [
      { heading: "São formatos de configuração diferentes", paragraphs: ["M3U é um formato de playlist que pode conter referências a streams, enquanto aplicações que suportam Xtream Codes normalmente pedem um conjunto estruturado de dados de acesso. A disponibilidade depende da aplicação e da configuração fornecida."], links: links(["M3U", "/guias/m3u/"], ["Xtream Codes", "/guias/xtream-codes/"], ["Aplicações", "/apps/"]) },
      { heading: "Escolhe pelo que a aplicação suporta", paragraphs: ["A decisão prática não é qual formato parece mais sofisticado, mas qual formato é realmente suportado pelo dispositivo e pela aplicação que estás a utilizar."] },
    ],
    "/blog/o-que-e-epg/": [
      { heading: "EPG é o guia de programação", paragraphs: ["EPG significa Electronic Program Guide e fornece informação de programação para canais quando a aplicação consegue associar corretamente essa informação à fonte utilizada.", "Quando o EPG falha, verifica primeiro a configuração e a compatibilidade antes de assumir que a reprodução dos canais também está indisponível."], links: links(["Guia EPG", "/guias/epg/"], ["EPG não funciona", "/suporte/epg-nao-funciona/"]) },
      { heading: "Dados de programação podem precisar de correção", paragraphs: ["Um guia vazio ou desalinhado pode resultar de uma fonte de dados incompleta, configuração incorreta ou incompatibilidade da aplicação. O diagnóstico deve considerar essas possibilidades."] },
    ],
    "/blog/velocidade-internet-iptv/": [
      { heading: "Velocidade não é o único fator", paragraphs: ["Para streaming, a estabilidade da ligação, latência, congestionamento e qualidade da rede local também podem afetar a experiência. Por isso, um teste isolado de velocidade não explica todas as situações de reprodução."], links: links(["Velocidade para IPTV", "/guias/velocidade-internet-iptv/"])} ,
      { heading: "Testa em condições reais", paragraphs: ["Compara a experiência em diferentes horários e dispositivos quando possível e verifica se o comportamento muda com a rede local."] },
    ],
    "/blog/iptv-legalidade-portugal/": [
      { heading: "Tecnologia e direitos são questões diferentes", paragraphs: ["IPTV é uma tecnologia de distribuição de vídeo sobre redes IP. A possibilidade de distribuir determinado conteúdo depende, separadamente, dos direitos e autorizações aplicáveis.", "Qualquer afirmação sobre licenças ou autorização deve ser apoiada por informação verificável."], links: links(["Legalidade do IPTV", "/legalidade/"], ["IPTV é legal em Portugal?", "/guias/iptv-e-legal-em-portugal/"]) },
      { heading: "Como avaliar afirmações comerciais", paragraphs: ["Distingue informação técnica de afirmações sobre direitos de autor e distribuição. Quando necessário, consulta fontes institucionais e documentação verificável."] },
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

  const longform = seoArticles[route.slug] ?? devicePages[route.slug] ?? longformContent[route.slug];

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
