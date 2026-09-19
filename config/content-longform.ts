import type { ContentSection, FAQEntry } from "@/config/content";

export type LongformContent = {
  sections: ContentSection[];
  faq: FAQEntry[];
};

const link = (label: string, href: string) => ({ label, href });

export const longformContent: Record<string, LongformContent> = {
  "/suporte/iptv-nao-funciona/": {
    sections: [
      { heading: "Começa pelo sintoma que estás a ver", paragraphs: ["Quando o IPTV deixa de funcionar, começa por descrever exatamente o sintoma: a aplicação não abre, a lista não aparece, um canal não inicia ou a reprodução interrompe-se.", "O mesmo resultado pode ter causas diferentes. Separar o sintoma evita reinstalações e alterações aleatórias."], links: [link("Centro de suporte", "/suporte/"), link("Problemas de aplicação", "/suporte/problemas-app/")] },
      { heading: "Verificações por camadas", paragraphs: ["Confirma primeiro a ligação de rede e o comportamento de outros serviços no mesmo dispositivo. Depois verifica a aplicação e, por fim, os dados de configuração. Se o problema ocorrer apenas num dispositivo, essa pista também é importante.", "Mantém uma alteração de cada vez e regista o resultado. Isso torna o diagnóstico mais curto e repetível."], links: [link("Velocidade da Internet", "/guias/velocidade-internet-iptv/"), link("Buffering", "/suporte/buffering/")] },
      { heading: "Quando pedir ajuda", paragraphs: ["Se as verificações básicas não resolverem o problema, envia pelo canal privado apenas o contexto necessário para descrever o caso. Nunca publiques credenciais, URLs pessoais ou outros dados sensíveis.", "O WhatsApp é o canal de contacto definido para o projeto e pode ser usado para continuar o diagnóstico com mais contexto."] }
    ],
    faq: [
      { question: "O que devo testar primeiro?", answer: "Identifica o sintoma e verifica rede, aplicação, dispositivo e configuração separadamente." },
      { question: "Devo reinstalar tudo?", answer: "Não como primeira medida. Diagnostica primeiro para não perder pistas sobre a causa." }
    ]
  },

  "/suporte/buffering/": {
    sections: [
      { heading: "Buffering é um sintoma, não uma causa", paragraphs: ["Buffering pode aparecer por razões relacionadas com estabilidade da rede, congestionamento, aplicação, dispositivo ou outra etapa da reprodução. O primeiro objetivo é descobrir onde o comportamento muda.", "Evita concluir que a velocidade nominal da ligação explica automaticamente o problema."], links: [link("Guia de buffering", "/guias/iptv-buffering/"), link("Velocidade da Internet", "/guias/velocidade-internet-iptv/")] },
      { heading: "Faz testes controlados", paragraphs: ["Compara horários, dispositivos ou condições de rede quando possível. Se um vídeo funcionar noutro serviço na mesma rede, isso fornece contexto, mas não elimina todas as outras causas.", "Muda uma variável de cada vez e anota o resultado para não criar um ciclo de tentativas contraditórias."], links: [link("Dispositivos", "/dispositivos/"), link("Problemas Firestick", "/suporte/problemas-firestick/")] },
      { heading: "Quando escalar o problema", paragraphs: ["Se o buffering persistir depois das verificações básicas, prepara uma descrição do dispositivo, aplicação, horário e sintoma. Essa informação é mais útil do que uma lista longa de alterações feitas sem registo."] }
    ],
    faq: [
      { question: "Buffering significa Internet lenta?", answer: "Não necessariamente. A estabilidade, congestionamento, aplicação e dispositivo também podem influenciar a reprodução." },
      { question: "O que devo fazer primeiro?", answer: "Compara o comportamento da rede e testa uma variável de cada vez." }
    ]
  },

  "/suporte/canais-nao-carregam/": {
    sections: [
      { heading: "Descobre se o problema é geral ou isolado", paragraphs: ["Quando um canal não carrega, verifica se o problema acontece apenas nesse canal ou em vários. Essa diferença ajuda a separar um caso isolado de uma falha mais ampla.", "Também observa se a lista aparece corretamente antes de concluir que existe um problema de acesso."], links: [link("Suporte", "/suporte/"), link("IPTV não funciona", "/suporte/iptv-nao-funciona/")] },
      { heading: "Verifica aplicação, fonte e rede", paragraphs: ["Se a aplicação abre e a lista aparece, testa outras entradas disponíveis. Se várias falharem, verifica rede e configuração. Se apenas uma falhar, regista esse comportamento antes de alterar definições.", "Não publiques dados de acesso para demonstrar o problema."], links: [link("Problemas de app", "/suporte/problemas-app/") ] },
      { heading: "Próximo passo", paragraphs: ["Depois de identificar o padrão, segue o guia específico ou contacta o suporte com o sintoma exato, o dispositivo e a aplicação utilizados."] }
    ],
    faq: [
      { question: "Devo testar outros canais?", answer: "Sim. Comparar diferentes entradas ajuda a distinguir um problema isolado de uma falha mais ampla." },
      { question: "Posso enviar a minha password ao suporte público?", answer: "Não. Mantém credenciais e URLs pessoais privados." }
    ]
  },

  "/suporte/epg-nao-funciona/": {
    sections: [
      { heading: "EPG pode falhar sem impedir a reprodução", paragraphs: ["O EPG é uma camada de informação de programação. Uma falha no guia não significa automaticamente que os streams também estejam indisponíveis.", "Começa por confirmar se o problema está apenas no EPG ou se a reprodução falha em paralelo."], links: [link("Guia EPG", "/guias/epg/"), link("EPG", "/blog/o-que-e-epg/")] },
      { heading: "Verifica configuração e correspondência", paragraphs: ["Confirma a configuração usada pela aplicação e verifica se a fonte de programação corresponde aos identificadores usados pelos canais. A forma de configurar pode variar entre aplicações.", "Atualiza ou reaplica a configuração apenas depois de identificar qual etapa está a falhar."] },
      { heading: "Escalação", paragraphs: ["Se o guia continuar vazio ou desalinhado, regista a aplicação, dispositivo, sintoma e momento da falha. Isso permite distinguir um problema de dados de um problema geral de reprodução."] }
    ],
    faq: [
      { question: "EPG e canais são a mesma coisa?", answer: "Não. O EPG é informação de programação; a reprodução dos canais é uma camada diferente." },
      { question: "O que devo verificar primeiro?", answer: "Confirma a configuração do EPG e se o problema afeta apenas a programação ou também a reprodução." }
    ]
  },

  "/suporte/erro-credenciais/": {
    sections: [
      { heading: "Confirma o tipo de erro", paragraphs: ["Quando aparecem erros de credenciais, observa se o problema é uma mensagem de login, dados inválidos, servidor incorreto ou outro campo. Um erro específico ajuda a reduzir o diagnóstico.", "Não partilhes a password publicamente para pedir ajuda."], links: [link("Xtream Codes", "/guias/xtream-codes/"), link("Problemas de app", "/suporte/problemas-app/")] },
      { heading: "Revê os dados sem os expor", paragraphs: ["Confirma espaços acidentais, maiúsculas e minúsculas quando aplicável, e se o servidor ou método de configuração corresponde ao que a aplicação pede. Faz estas verificações num contexto privado.", "Se o problema persistir, contacta o suporte com o texto do erro e sem publicar os valores secretos."] },
      { heading: "Quando pedir correção", paragraphs: ["Se os dados não forem aceites depois de uma verificação cuidadosa, pode ser necessário confirmar a informação com o canal comercial ou de suporte que forneceu a configuração."] }
    ],
    faq: [
      { question: "Posso publicar as minhas credenciais para receber ajuda?", answer: "Não. Usa um canal privado e partilha apenas o contexto necessário." },
      { question: "O que devo confirmar primeiro?", answer: "Verifica o tipo de erro, o método de configuração e os campos introduzidos, sem expor os valores." }
    ]
  },

  "/dispositivos/iptv-firestick/": {
    sections: [
      { heading: "Antes de configurar o Fire TV Stick", paragraphs: ["Confirma que o Fire TV Stick está ligado à rede e identifica a geração ou modelo que estás a utilizar. A configuração pode variar conforme a aplicação disponível e a versão instalada.", "O objetivo é preparar o dispositivo primeiro e só depois escolher uma aplicação e um método de configuração que façam sentido para o ambiente real."], links: [link("Guia de instalação", "/guias/instalar-iptv-no-firestick/"), link("Problemas Firestick", "/suporte/problemas-firestick/")] },
      { heading: "Aplicação e método de configuração", paragraphs: ["A aplicação escolhida deve ser compatível com o dispositivo e com o método de configuração que vais utilizar. Algumas aplicações trabalham com playlist; outras apresentam campos de acesso estruturados.", "Não copies instruções de uma versão antiga para a interface atual sem confirmar os menus. Um pequeno detalhe diferente pode mudar completamente a sequência de passos."], links: [link("Aplicações IPTV", "/apps/"), link("M3U", "/guias/m3u/"), link("Xtream Codes", "/guias/xtream-codes/")] },
      { heading: "Teste e diagnóstico", paragraphs: ["Depois de configurar, testa a reprodução antes de alterar outras definições. Se existir buffering, compara primeiro a rede e o comportamento noutro contexto quando isso for possível.", "Se surgirem erros de credenciais ou a aplicação não carregar, consulta o fluxo de suporte específico em vez de repetir a instalação sem identificar a causa."] }
    ],
    faq: [
      { question: "O Fire TV Stick é compatível com qualquer aplicação IPTV?", answer: "Não. A compatibilidade depende do dispositivo, da aplicação e da versão utilizada e deve ser confirmada antes de ser apresentada como garantia." },
      { question: "Qual é o primeiro passo?", answer: "Prepara a ligação de rede, identifica o dispositivo e confirma a aplicação e o método de configuração suportados." }
    ]
  },

  "/dispositivos/iptv-smart-tv/": {
    sections: [
      { heading: "Identifica o sistema da tua Smart TV", paragraphs: ["Smart TV não é um sistema único. A marca, o modelo e o sistema operativo influenciam as aplicações disponíveis e o percurso de configuração.", "Antes de escolher uma aplicação, confirma o ambiente real da televisão e evita assumir que uma instrução de outro fabricante será idêntica."], links: [link("Samsung", "/dispositivos/iptv-samsung/"), link("LG", "/dispositivos/iptv-lg/")] },
      { heading: "Escolhe o caminho de configuração", paragraphs: ["Depois de identificar o sistema, verifica a aplicação e o método de configuração disponíveis. Mantém as credenciais privadas e segue apenas instruções correspondentes à versão que está efetivamente instalada.", "Se a reprodução funcionar mas alguma função secundária falhar, trata esse problema separadamente para evitar diagnósticos confusos."], links: [link("Aplicações", "/apps/"), link("Como instalar IPTV", "/guias/como-instalar-iptv/")] },
      { heading: "Quando a Smart TV apresenta problemas", paragraphs: ["Se a aplicação fechar, não carregar ou apresentar buffering, separa primeiro rede, aplicação e dispositivo. Reiniciar tudo em simultâneo pode apagar pistas úteis.", "O centro de suporte organiza os problemas por sintoma para reduzir tentativas aleatórias."] }
    ],
    faq: [
      { question: "Todas as Smart TVs usam o mesmo método?", answer: "Não. O sistema operativo, o modelo e as aplicações disponíveis podem mudar o processo." },
      { question: "Onde encontro ajuda?", answer: "Consulta o guia da marca e, quando necessário, o suporte específico para Smart TV." }
    ]
  },

  "/dispositivos/iptv-samsung/": {
    sections: [
      { heading: "Samsung TV: confirma o ambiente primeiro", paragraphs: ["Antes de seguir qualquer tutorial, identifica o modelo e o sistema da Samsung TV. A disponibilidade de aplicações pode variar e as interfaces são atualizadas ao longo do tempo.", "A página deve orientar o utilizador para verificar o caminho real disponível no equipamento, em vez de prometer compatibilidade universal."], links: [link("Smart TV", "/dispositivos/iptv-smart-tv/"), link("Aplicações", "/apps/")] },
      { heading: "Configuração e teste", paragraphs: ["Depois de instalares uma aplicação compatível, segue o método de configuração que ela apresenta. Testa a reprodução e anota o sintoma se alguma etapa falhar.", "Se o problema estiver relacionado com uma aplicação específica, passa para o guia dessa aplicação e evita misturar instruções de diferentes plataformas."], links: [link("Guia de instalação", "/guias/como-instalar-iptv/") ] }
    ],
    faq: [
      { question: "A mesma aplicação funciona em todos os modelos Samsung?", answer: "Não deve ser assumido. A disponibilidade depende do modelo, sistema e da aplicação em questão." },
      { question: "O que devo confirmar antes de configurar?", answer: "Modelo, sistema operativo, aplicação disponível e método de configuração suportado." }
    ]
  },

  "/dispositivos/iptv-lg/": {
    sections: [
      { heading: "LG Smart TV e a importância do modelo", paragraphs: ["O primeiro passo é verificar o modelo e o sistema utilizado pela televisão. Aplicações e menus podem mudar, por isso um tutorial deve ser ligado à versão que foi realmente testada.", "Quando a aplicação necessária não estiver disponível, o caminho deve explicar essa limitação em vez de prometer que qualquer método funciona."], links: [link("Smart TV", "/dispositivos/iptv-smart-tv/"), link("Aplicações", "/apps/")] },
      { heading: "Depois da instalação", paragraphs: ["Adiciona a configuração suportada pela aplicação e testa a reprodução. Se a aplicação abrir mas os dados não carregarem, verifica a configuração e a rede antes de reinstalar repetidamente.", "O suporte pode ajudar a separar problemas de aplicação de problemas do dispositivo."] }
    ],
    faq: [
      { question: "Qual é o primeiro passo numa LG TV?", answer: "Confirma o modelo, sistema e aplicações disponíveis antes de iniciar a configuração." },
      { question: "Uma falha de reprodução significa que a TV é incompatível?", answer: "Não necessariamente. É preciso separar rede, aplicação, configuração e dispositivo antes de concluir que existe incompatibilidade." }
    ]
  },

  "/apps/iptv-smarters-pro/": {
    sections: [
      { heading: "O papel do IPTV Smarters Pro", paragraphs: ["Uma aplicação de reprodução não é o mesmo que um fornecedor de conteúdo. O Smarters Pro funciona como interface para organizar e reproduzir uma fonte que o utilizador configurou.", "O percurso exato pode mudar conforme a versão e o dispositivo, por isso um guia profissional deve indicar a interface realmente testada."], links: [link("Aplicações IPTV", "/apps/"), link("Dispositivos", "/dispositivos/")] },
      { heading: "Configuração sem expor credenciais", paragraphs: ["Ao configurar a aplicação, os dados recebidos devem ser tratados como informação privada. Não os publiques em screenshots ou pedidos de suporte públicos.", "Escolhe o método disponível na versão instalada e introduz apenas os dados necessários. Depois verifica se a fonte aparece e se a reprodução funciona."], links: [link("Xtream Codes", "/guias/xtream-codes/"), link("M3U", "/guias/m3u/")] },
      { heading: "Diagnóstico", paragraphs: ["Se a aplicação abrir mas a lista não aparecer, verifica primeiro os dados e o método de configuração. Se a lista existir mas houver buffering, passa para o diagnóstico de rede e reprodução."] }
    ],
    faq: [
      { question: "A aplicação fornece o conteúdo?", answer: "A aplicação é a interface de reprodução; a origem e os direitos do conteúdo são questões separadas." },
      { question: "Posso publicar as minhas credenciais para pedir ajuda?", answer: "Não. Mantém username, password e URLs pessoais privados." }
    ]
  },

  "/apps/tivimate/": {
    sections: [
      { heading: "TiviMate como ferramenta de reprodução", paragraphs: ["O TiviMate é uma aplicação que organiza fontes IPTV em dispositivos suportados. A experiência depende da versão, dispositivo e configuração adicionada.", "Antes de seguir um tutorial, confirma a interface que tens instalada e o tipo de fonte que pretendes utilizar."], links: [link("Aplicações", "/apps/"), link("Android TV", "/dispositivos/iptv-android-tv/")] },
      { heading: "Playlist e EPG", paragraphs: ["O método de configuração disponível determina como adicionas a fonte. Se estiveres a utilizar uma playlist, verifica se o formato é aceite. Se houver EPG, trata a programação como uma camada separada da reprodução.", "Um EPG vazio não significa necessariamente que os streams estejam indisponíveis."], links: [link("M3U", "/guias/m3u/"), link("EPG", "/guias/epg/")] },
      { heading: "Quando a reprodução não funciona", paragraphs: ["Primeiro identifica se a fonte aparece na aplicação. Depois verifica se o problema ocorre num canal específico ou em vários. Esta distinção ajuda a decidir se deves investigar configuração, rede ou aplicação."] }
    ],
    faq: [
      { question: "TiviMate é um fornecedor IPTV?", answer: "Não. É uma aplicação utilizada para organizar e reproduzir fontes configuradas pelo utilizador." },
      { question: "O que faço se o EPG não aparecer?", answer: "Verifica a configuração e trata o EPG separadamente dos problemas de reprodução." }
    ]
  },

  "/apps/ibo-player/": {
    sections: [
      { heading: "Entender o IBO Player", paragraphs: ["O IBO Player funciona como uma aplicação de reprodução e a experiência pode variar conforme o dispositivo e a versão instalada.", "O guia deve concentrar-se no caminho de configuração suportado pela versão testada e não em instruções genéricas que podem ficar desatualizadas."], links: [link("Aplicações", "/apps/"), link("Guias", "/guias/")] },
      { heading: "Dados de configuração", paragraphs: ["Usa apenas os campos pedidos pela aplicação e mantém as credenciais privadas. Depois de guardar a configuração, verifica se a lista aparece corretamente antes de fazer alterações adicionais.", "Se existir um erro, regista o texto apresentado e a etapa em que aparece; essa informação torna o diagnóstico mais preciso."], links: [link("Problemas de app", "/suporte/problemas-app/")] }
    ],
    faq: [
      { question: "Os menus do IBO Player são sempre iguais?", answer: "Não necessariamente. Versões e dispositivos diferentes podem apresentar interfaces diferentes." },
      { question: "O que fazer quando a configuração falha?", answer: "Confirma o método suportado, os dados introduzidos e a etapa exata em que o erro aparece." }
    ]
  },

  "/apps/smart-iptv/": {
    sections: [
      { heading: "Smart IPTV e o contexto do dispositivo", paragraphs: ["Antes de configurar o Smart IPTV, identifica o sistema do dispositivo e confirma que a aplicação disponível corresponde ao caminho que pretendes seguir.", "Evita aplicar um tutorial escrito para outro sistema sem verificar se os menus e requisitos são iguais."], links: [link("Smart TV", "/dispositivos/iptv-smart-tv/"), link("Aplicações", "/apps/")] },
      { heading: "Adicionar e testar a configuração", paragraphs: ["Segue o método suportado pela versão instalada e trata os dados de acesso como informação privada. Depois testa a reprodução e verifica se o comportamento esperado aparece no dispositivo.", "Se a lista não carregar ou a aplicação apresentar erro, separa a falha de configuração da falha de rede e utiliza o suporte adequado."] }
    ],
    faq: [
      { question: "O Smart IPTV funciona em qualquer televisão?", answer: "Não deve ser assumido. A disponibilidade e o método dependem do dispositivo, sistema e versão da aplicação." },
      { question: "Onde devo guardar os meus dados de acesso?", answer: "Mantém-nos privados e não os publiques em screenshots ou páginas públicas." }
    ]
  },

  "/iptv-portugal/": {
    sections: [
      {
        heading: "O que significa IPTV em Portugal?",
        paragraphs: [
          "IPTV é uma tecnologia de distribuição de vídeo através de redes IP. Em termos simples, em vez de depender exclusivamente de um formato tradicional de transmissão, o conteúdo pode ser entregue através de uma ligação de rede e reproduzido por uma aplicação num dispositivo compatível.",
          "Para quem pesquisa IPTV em Portugal, a parte tecnológica é apenas o início. A experiência real depende do dispositivo utilizado, da aplicação escolhida, da configuração disponível, da qualidade da ligação e das condições comerciais do serviço que está a ser considerado.",
          "É precisamente por isso que a IPTVBR organiza o tema como uma rede: primeiro compreender, depois verificar compatibilidade, depois configurar e, quando necessário, diagnosticar problemas."
        ],
        links: [
          link("O que é IPTV", "/guias/o-que-e-iptv/"),
          link("Como funciona", "/guias/como-funciona-iptv/"),
          link("Ver dispositivos", "/dispositivos/")
        ]
      },
      {
        heading: "O que deves verificar antes de escolher uma subscrição",
        paragraphs: [
          "Uma decisão informada começa por confirmar o que está efetivamente incluído na oferta. Duração do plano, preço, método de pagamento, compatibilidade com o teu dispositivo, aplicação utilizada e condições de suporte devem ser claros antes de qualquer pagamento.",
          "Também é importante separar afirmações verificáveis de slogans. Números de canais, volume de VOD, uptime, número de dispositivos simultâneos ou garantias específicas não devem ser tratados como factos sem confirmação do serviço.",
          "No projeto IPTVBR, os benchmarks usados durante o planeamento servem apenas para orientar a estratégia. Não são automaticamente transformados em características comerciais."
        ],
        links: [
          link("Consultar preços", "/precos/"),
          link("Subscrição IPTV", "/subscricao-iptv/"),
          link("Como escolher IPTV", "/comparar/como-escolher-iptv-portugal/")
        ]
      },
      {
        heading: "Dispositivo, aplicação e configuração fazem parte da mesma jornada",
        paragraphs: [
          "Uma das dúvidas mais comuns é simplesmente: onde vou assistir? A resposta determina o caminho seguinte. Uma Smart TV pode ter um ecossistema de aplicações diferente de um Fire TV Stick, Android TV, Google TV, Apple TV, iPhone, iPad ou PC.",
          "Depois de identificar o dispositivo, o próximo passo é verificar a aplicação e o método de configuração que ela suporta. Alguns fluxos utilizam uma playlist, outros pedem dados estruturados de acesso. Os nomes dos menus também podem mudar de uma versão para outra.",
          "Quando o processo termina, é importante testar a reprodução e guardar as credenciais de forma privada. Se houver uma falha, o diagnóstico deve começar pelo sintoma e separar rede, aplicação, dispositivo e configuração."
        ],
        links: [
          link("Fire TV Stick", "/dispositivos/iptv-firestick/"),
          link("Smart TV", "/dispositivos/iptv-smart-tv/"),
          link("Aplicações IPTV", "/apps/")
        ]
      },
      {
        heading: "Como funciona o percurso comercial atual",
        paragraphs: [
          "O fluxo definido para o projeto encaminha o visitante para o WhatsApp antes do pagamento. Isto permite confirmar as condições comerciais vigentes e esclarecer dúvidas antes de receber o link de pagamento.",
          "Essa etapa deve permanecer clara na interface. A página não deve sugerir um checkout interno se esse checkout não existir. Da mesma forma, qualquer preço ou condição apresentados como oferta devem vir da fonte comercial confirmada do projeto.",
          "Quando os dados reais forem preenchidos no Business Truth, a mesma fonte poderá alimentar os preços, cartões, mensagens e contexto comercial sem duplicar valores em várias áreas."
        ],
        links: [
          link("Comprar IPTV", "/comprar-iptv/"),
          link("Preços", "/precos/"),
          link("Contactar", "/contacto/")
        ]
      },
      {
        heading: "Tecnologia IPTV e direitos de conteúdo são questões diferentes",
        paragraphs: [
          "A existência de tecnologia IPTV não determina, por si só, se um serviço está autorizado a distribuir determinado conteúdo. A parte técnica explica como o vídeo pode chegar ao utilizador; os direitos e autorizações aplicáveis são uma questão separada.",
          "Por isso, qualquer afirmação sobre licenças, autorização de distribuição ou direitos sobre canais e conteúdos deve ser tratada como informação que necessita de evidência específica."
        ],
        links: [
          link("IPTV é legal em Portugal?", "/guias/iptv-e-legal-em-portugal/"),
          link("Área de legalidade", "/legalidade/")
        ]
      }
    ],
    faq: [
      { question: "O que é IPTV?", answer: "É uma tecnologia que permite distribuir vídeo através de redes IP. A tecnologia, por si só, não confirma os direitos de distribuição de um conteúdo específico." },
      { question: "Que dispositivo devo escolher?", answer: "Começa pelo dispositivo que já tens. Depois confirma a aplicação e o método de configuração que são realmente suportados." },
      { question: "Como funciona o pagamento no projeto?", answer: "O fluxo atual passa primeiro pelo WhatsApp, onde as condições comerciais podem ser confirmadas antes do envio do link de pagamento." },
      { question: "Os preços apresentados já estão confirmados?", answer: "Os valores de benchmark usados no projeto ainda não devem ser tratados como oferta comercial verificada até serem confirmados no Business Truth." }
    ]
  },

  "/subscricao-iptv/": {
    sections: [
      {
        heading: "O que deve explicar uma boa subscrição IPTV",
        paragraphs: [
          "Uma página de subscrição deve responder a uma pergunta muito simples: o que acontece depois de o utilizador decidir avançar? Para isso, precisa de explicar duração do plano, condições comerciais, compatibilidade, forma de contacto e percurso até ao pagamento.",
          "A clareza é mais importante do que encher a página com números. Uma oferta pode ter vários planos, mas o visitante deve conseguir perceber rapidamente a diferença entre duração, preço e condições sem procurar informação espalhada por várias páginas."
        ],
        links: [link("Ver preços", "/precos/"), link("Comprar IPTV", "/comprar-iptv/")]
      },
      {
        heading: "Confirma a compatibilidade antes de pagar",
        paragraphs: [
          "O dispositivo é parte da decisão. Antes de concluir uma compra, identifica o equipamento onde pretendes assistir e verifica o caminho de aplicação e configuração disponível para esse equipamento.",
          "A compatibilidade final do serviço IPTVBR permanece sujeita à confirmação dos dispositivos realmente suportados. Por esse motivo, a interface não deve transformar uma lista de dispositivos comuns no mercado numa garantia automática."
        ],
        links: [link("Explorar dispositivos", "/dispositivos/"), link("Aplicações", "/apps/")]
      },
      {
        heading: "O percurso entre WhatsApp e pagamento",
        paragraphs: [
          "O fluxo comercial atual foi desenhado como: contacto pelo WhatsApp, confirmação das condições comerciais e, depois, envio do link de pagamento. Isto é diferente de um checkout totalmente integrado dentro do site.",
          "A vantagem de um percurso assim é permitir esclarecer dúvidas de preço, duração ou compatibilidade antes da transação. O ponto essencial é que a informação apresentada no WhatsApp seja consistente com a fonte comercial usada pelo site."
        ],
        links: [link("Contactar pelo WhatsApp", "/contacto/"), link("Consultar o processo de compra", "/comprar-iptv/")]
      },
      {
        heading: "O que não deve ser assumido",
        paragraphs: [
          "Uma página comercial não deve inventar períodos de teste, número de dispositivos simultâneos, garantias de uptime, quantidade de canais, catálogo VOD ou política de reembolso. Esses dados dependem do serviço real e devem entrar na página apenas depois de confirmação.",
          "Os benchmarks de concorrentes foram úteis para a estratégia e posicionamento, mas não são uma substituição pelos dados empresariais do próprio serviço."
        ],
        links: [link("Ver abordagem de transparência", "/sobre-nos/"), link("Política de reembolso", "/politica-reembolso/")]
      }
    ],
    faq: [
      { question: "Como funciona a subscrição?", answer: "O fluxo atual começa no WhatsApp, onde as condições comerciais são confirmadas antes do pagamento." },
      { question: "Posso confirmar o dispositivo antes de comprar?", answer: "Sim. O percurso recomendado começa por identificar o dispositivo e a aplicação necessários e confirmar a compatibilidade real." },
      { question: "Existe um período de teste?", answer: "A disponibilidade do teste ainda não está confirmada no Business Truth do projeto." },
      { question: "Qual é a política de reembolso?", answer: "Os termos finais de reembolso ainda precisam de ser confirmados antes de serem apresentados como condição comercial." }
    ]
  },

  "/comprar-iptv/": {
    sections: [
      {
        heading: "Comprar IPTV começa por esclarecer o que vais receber",
        paragraphs: [
          "Quando alguém pesquisa como comprar IPTV, normalmente já passou da fase de descoberta e quer reduzir incerteza. A página deve, por isso, responder rapidamente às perguntas essenciais: que plano está disponível, quanto custa, em que dispositivos funciona, qual é o processo de pagamento e onde pedir ajuda.",
          "O objetivo não é criar urgência artificial. Uma decisão de compra mais clara acontece quando a informação relevante está acessível antes do pagamento."
        ],
        links: [link("Ver preços", "/precos/"), link("Ver subscrição", "/subscricao-iptv/")]
      },
      {
        heading: "O processo atual: contacto, confirmação e pagamento",
        paragraphs: [
          "O projeto utiliza o WhatsApp como canal de conversão. O utilizador entra em contacto, esclarece as condições comerciais aplicáveis e recebe depois o link de pagamento definido pelo serviço.",
          "Isto significa que o site deve funcionar como camada de descoberta, decisão e preparação. A comunicação final sobre preço ou condições deve permanecer alinhada com os dados comerciais atuais."
        ],
        links: [link("Contactar", "/contacto/"), link("Ver suporte", "/suporte/")]
      },
      {
        heading: "Antes de pagar, verifica estas cinco coisas",
        paragraphs: [
          "Primeiro, confirma a duração do plano. Segundo, verifica o preço realmente vigente. Terceiro, identifica o dispositivo e a aplicação que pretendes usar. Quarto, consulta as condições de reembolso e suporte quando estiverem formalizadas. Quinto, confirma o método de pagamento e o próximo passo.",
          "Esta checklist evita que uma escolha aparentemente simples se transforme num problema de configuração ou numa surpresa sobre condições comerciais depois do pagamento."
        ],
        links: [link("Dispositivos", "/dispositivos/"), link("Aplicações", "/apps/"), link("Suporte", "/suporte/")]
      }
    ],
    faq: [
      { question: "Onde faço o pagamento?", answer: "O fluxo atual encaminha o utilizador para o WhatsApp, onde as condições são confirmadas antes de receber o link de pagamento." },
      { question: "Preciso de saber o meu dispositivo?", answer: "É altamente recomendável confirmar o dispositivo antes de avançar, porque a aplicação e o método de configuração podem variar." },
      { question: "O site apresenta preços reais?", answer: "A estrutura da página está preparada para isso, mas os benchmarks atuais só podem ser publicados como preços depois da confirmação comercial." }
    ]
  },

  "/precos/": {
    sections: [
      {
        heading: "Como deve ser apresentada uma tabela de preços IPTV",
        paragraphs: [
          "Uma boa página de preços reduz comparação mental. O utilizador deve conseguir identificar rapidamente duração, preço e condições principais de cada plano, sem depender de uma sequência de pop-ups ou mensagens promocionais.",
          "No IPTVBR, os valores usados durante o planeamento continuam isolados como benchmark. A página não deve apresentar esses números como oferta final enquanto não houver confirmação empresarial."
        ],
        links: [link("Subscrição IPTV", "/subscricao-iptv/"), link("Comprar IPTV", "/comprar-iptv/")]
      },
      {
        heading: "Benchmark de mercado não é preço IPTVBR",
        paragraphs: [
          "Durante a fase de planeamento, os preços dos concorrentes podem ajudar a compreender o intervalo de mercado, comparar durações e estudar a apresentação das ofertas. Mas estes dados não substituem o preço real do projeto.",
          "Por isso, a camada Business Truth foi desenhada para separar o benchmark interno da oferta comercial apresentada ao utilizador. Quando o preço for confirmado, o valor pode ser atualizado numa fonte central e reutilizado nos cartões, mensagens e contexto comercial necessários."
        ]
      },
      {
        heading: "O que deve ser claro junto ao preço?",
        paragraphs: [
          "O preço, por si só, não descreve a oferta. O utilizador deve saber a duração do plano, se existe um teste real, que dispositivos são suportados, qual é o limite de dispositivos simultâneos, como funciona o pagamento e quais são as condições de reembolso. Qualquer elemento não confirmado fica fora das alegações comerciais até ser verificado.",
          "Assim, a página de preços torna-se uma ferramenta de decisão e não apenas uma grelha de números."
        ],
        links: [link("Informação sobre subscrição", "/subscricao-iptv/"), link("Comparação", "/comparar/como-escolher-iptv-portugal/")]
      }
    ],
    faq: [
      { question: "Estes preços são finais?", answer: "Não. Os valores atuais no projeto são benchmarks até a oferta comercial real ser confirmada." },
      { question: "É possível alterar o preço sem editar todas as páginas?", answer: "Sim. A arquitetura usa uma fonte central de Business Truth para evitar que os preços sejam repetidos em vários ficheiros." },
      { question: "Existem descontos reais?", answer: "Não apresentamos um desconto a menos que exista uma oferta comercial real e confirmada." }
    ]
  },

  "/guias/como-instalar-iptv/": {
    sections: [
      {
        heading: "Começa por identificar o dispositivo antes da instalação",
        paragraphs: [
          "Não existe um único método de instalação de IPTV que funcione exatamente da mesma forma em todos os equipamentos. O primeiro passo é identificar se estás a usar uma Smart TV, Fire TV Stick, Android TV, Google TV, Apple TV, iPhone/iPad ou PC.",
          "Depois, identifica o sistema operativo e as aplicações realmente disponíveis no dispositivo. Isso evita começar com instruções que não correspondem à interface que tens à frente."
        ],
        links: [link("Dispositivos", "/dispositivos/"), link("Aplicações", "/apps/")]
      },
      {
        heading: "Instala a aplicação adequada e usa o método de configuração suportado",
        paragraphs: [
          "Algumas aplicações utilizam playlists como M3U, enquanto outras apresentam campos estruturados como server, username e password. Os nomes dos menus podem variar conforme a aplicação e a versão.",
          "Por isso, as instruções devem refletir a versão que foi efetivamente testada. Se a interface mudar, o guia deve ser atualizado em vez de deixar o utilizador à procura de botões que já não existem."
        ],
        links: [link("M3U", "/guias/m3u/"), link("Xtream Codes", "/guias/xtream-codes/"), link("EPG", "/guias/epg/")]
      },
      {
        heading: "Testa o resultado antes de considerar a instalação concluída",
        paragraphs: [
          "Depois de adicionar a configuração, testa a reprodução no ambiente que estás a utilizar. Se a imagem funcionar mas o guia de programação apresentar falhas, não assumes que é o mesmo problema: o EPG pode ter causas diferentes das falhas de reprodução.",
          "Se aparecer buffering, separa a qualidade da rede do comportamento da aplicação e do dispositivo. Um teste organizado é mais útil do que alterar várias variáveis ao mesmo tempo."
        ],
        links: [link("Buffering", "/guias/iptv-buffering/"), link("Velocidade da Internet", "/guias/velocidade-internet-iptv/"), link("Suporte", "/suporte/")]
      },
      {
        heading: "Mantém os dados de acesso privados",
        paragraphs: [
          "Qualquer username, password ou URL de playlist pessoal deve ser tratado como informação privada. Não o publiques numa captura de ecrã, comentário público ou página de suporte pública.",
          "Se precisares de ajuda, partilha apenas a informação necessária para descrever o problema e utiliza um canal privado quando forem necessários dados da conta para a verificação."
        ],
        links: [link("Problemas de credenciais", "/suporte/erro-credenciais/")]
      }
    ],
    faq: [
      { question: "Qual é a primeira coisa a fazer antes da instalação?", answer: "Identifica o dispositivo e o sistema operativo e confirma a aplicação e o método de configuração que ela suporta." },
      { question: "M3U e Xtream Codes são a mesma coisa?", answer: "Não. São formas diferentes de configuração que algumas aplicações suportam de maneiras diferentes." },
      { question: "O que faço se aparecer buffering?", answer: "Começa por diagnosticar a rede e depois a aplicação e o dispositivo separadamente, sem alterar várias variáveis ao mesmo tempo." }
    ]
  },

  "/guias/iptv-e-legal-em-portugal/": {
    sections: [
      {
        heading: "Tecnologia é uma coisa; direitos de conteúdo são outra",
        paragraphs: [
          "IPTV descreve um método técnico para entregar vídeo através de redes IP. Mas a questão de saber se é permitido distribuir determinado conteúdo não é respondida apenas pela tecnologia utilizada.",
          "Ao avaliar um serviço, separa a descrição da tecnologia das questões relacionadas com direitos de autor, direitos de transmissão e licenças ou autorizações necessárias para o conteúdo distribuído."
        ],
        links: [link("O que é IPTV?", "/guias/o-que-e-iptv/"), link("Área de legalidade", "/legalidade/")]
      },
      {
        heading: "Como avaliar uma afirmação sobre legalidade?",
        paragraphs: [
          "Não trates uma frase de marketing como «100% legal» como prova independente. Se existir uma afirmação sobre uma licença ou direito de distribuição, procura informação verificável e consistente com a entidade que fornece o serviço e com o conteúdo em causa.",
          "No site, esta página deve manter-se explicativa e não atribuir licenças ou direitos à IPTVBR sem documentação real que os suporte."
        ]
      },
      {
        heading: "O que pode o site explicar sem exagero?",
        paragraphs: [
          "O site pode explicar a diferença entre tecnologia e conteúdo, indicar que os direitos dependem do conteúdo e do serviço específico e encaminhar o utilizador para fontes institucionais quando necessário.",
          "Afirmações específicas sobre licenças da IPTVBR, direitos de determinados canais ou um catálogo concreto continuam a ser dados comerciais e jurídicos que precisam de confirmação antes de serem publicados."
        ],
        links: [link("Página de legalidade", "/legalidade/"), link("Sobre nós", "/sobre-nos/")]
      },
      {
        heading: "Porque foi incluída esta regra no sistema?",
        paragraphs: [
          "Porque as páginas SEO podem crescer rapidamente e uma afirmação não confirmada pode acabar repetida em dezenas de artigos. Ligar o conteúdo ao Business Truth e ao QA reduz esse risco e torna as atualizações comerciais mais seguras.",
          "Assim, o site pode ser claro e útil sem transformar inferências ou benchmarks em factos publicados."
        ]
      }
    ],
    faq: [
      { question: "IPTV em si é legal ou ilegal?", answer: "A tecnologia é um meio de distribuição através de redes IP; avaliar a legalidade da distribuição de um conteúdo específico exige também analisar os direitos e autorizações aplicáveis." },
      { question: "A expressão «100% legal» prova os direitos?", answer: "Não. Afirmações sobre direitos ou licenças precisam de informação ou documentação verificável." },
      { question: "Esta página prova que a IPTVBR tem licenças?", answer: "Não. O Business Truth atual não contém dados confirmados que permitam acrescentar esse tipo de alegação." }
    ]
  }
};
