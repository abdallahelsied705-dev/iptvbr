import type { ContentSection, FAQEntry } from "@/config/content";

type ScheduledArticle = { sections: ContentSection[]; faq: FAQEntry[] };
const l = (label: string, href: string) => ({ label, href });

export const scheduledArticles: Record<string, ScheduledArticle> = {
  "/blog/melhor-app-iptv-smart-tv/": {
    sections: [
      { heading: "A melhor app começa pelo sistema da televisão", paragraphs: ["Não existe uma aplicação universalmente melhor para todas as Smart TV. Samsung usa Tizen, LG usa webOS e muitas televisões Sony, TCL ou Philips usam Android TV ou Google TV. A loja disponível, a versão do sistema e a capacidade do equipamento determinam quais opções fazem sentido.", "Antes de comparar interfaces, confirma o modelo exato da televisão e procura a aplicação na loja oficial. Instalar um player recomendado para outro sistema cria frustração e pode levar a ficheiros de origem desconhecida."], links: [l("IPTV na Smart TV", "/dispositivos/iptv-smart-tv/"), l("Samsung TV", "/dispositivos/iptv-samsung/"), l("LG webOS", "/dispositivos/iptv-lg/")] },
      { heading: "Cinco critérios que distinguem um bom player", paragraphs: ["Compara navegação por comando, organização de favoritos, atualização de EPG, controlo parental e recuperação depois de uma falha de rede. Uma lista longa de funções vale pouco se o menu for lento ou exigir vários cliques para retomar a reprodução.", "Verifica ainda política de atualizações, origem da aplicação, tratamento de credenciais e modelo de pagamento. O valor cobrado pelo player pode ser separado da subscrição de conteúdo; confirma sempre o que estás realmente a comprar."], links: [l("O que é EPG", "/blog/o-que-e-epg/"), l("Segurança em apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Teste comparativo em vinte minutos", paragraphs: ["Usa o mesmo dispositivo, rede e configuração em cada aplicação. Mede tempo de abertura, mudança de canal, pesquisa, carregamento do guia e estabilidade durante alguns minutos. Não compares uma app por Wi-Fi com outra por Ethernet.", "Regista também o que acontece quando regressas do modo de suspensão. Uma aplicação rápida no primeiro arranque pode perder sessões, favoritos ou EPG depois de a televisão ficar desligada."], links: [l("Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Escolha final sem slogans", paragraphs: ["Para uma família, perfis e controlo parental podem pesar mais do que personalização visual. Para utilização diária, estabilidade e comando simples costumam ser prioritários. Em televisões antigas, uma box certificada pode oferecer uma experiência melhor do que insistir numa aplicação pesada.", "Escolhe duas opções compatíveis, testa tarefas reais e mantém apenas a que resolve o teu cenário. A melhor aplicação é a que funciona de forma previsível no equipamento que já tens."], links: [l("Comparar dispositivos", "/dispositivos/"), l("Ver preços e planos", "/precos/")] },
    ],
    faq: [
      { question: "Qual é a melhor app IPTV para Samsung ou LG?", answer: "Depende do modelo, da loja disponível e das funções necessárias. Confirma compatibilidade e testa navegação, EPG, favoritos e estabilidade." },
      { question: "Uma aplicação IPTV inclui canais?", answer: "Normalmente o player e o serviço são produtos separados. Confirma o que está incluído antes de pagar." },
      { question: "É seguro instalar uma app fora da loja?", answer: "Exige validação adicional da origem, assinatura, permissões e atualizações. Prefere a loja oficial sempre que possível." },
    ],
  },
  "/blog/iptv-com-som-sem-imagem/": {
    sections: [
      { heading: "Primeiro identifica o padrão do ecrã preto", paragraphs: ["Som sem imagem indica que o áudio foi descodificado, mas a cadeia de vídeo falhou. Testa se acontece em todos os conteúdos, apenas numa qualidade ou só numa aplicação. Este detalhe separa problemas de codec, player, HDMI e fonte.", "Não apagues a configuração logo no início. Regista dispositivo, aplicação, versão, qualidade e momento da falha; depois altera uma variável de cada vez."], links: [l("IPTV não funciona", "/suporte/iptv-nao-funciona/"), l("Problemas com a app", "/suporte/problemas-app/")] },
      { heading: "Codec e aceleração de hardware", paragraphs: ["H.264 é amplamente suportado, enquanto H.265/HEVC e formatos mais recentes dependem do processador e da licença do dispositivo. Quando o player recebe um formato que não consegue descodificar, pode manter o som e apresentar ecrã preto.", "Procura a opção de descodificação por hardware ou software e testa a alternativa apenas para diagnóstico. Se uma opção resolver, confirma temperatura e desempenho antes de a manter."], links: [l("4K, HDR e codecs", "/blog/iptv-4k-hdr-codecs/")] },
      { heading: "HDMI, HDR e resolução de saída", paragraphs: ["Numa box externa, muda temporariamente a resolução para 1080p, testa outra porta HDMI e confirma que o cabo suporta o modo escolhido. Uma incompatibilidade de HDR ou frequência pode produzir imagem ausente mesmo quando o áudio continua.", "Desliga e volta a ligar televisão e box pela ordem correta para renovar a negociação HDMI. Evita adaptadores em cadeia durante o teste."], links: [l("Escolher uma box IPTV", "/blog/como-escolher-box-iptv/")] },
      { heading: "Quando escalar para suporte", paragraphs: ["Se apenas um conteúdo falha em vários dispositivos, reúne o nome e horário sem publicar credenciais. Se todos falham apenas num equipamento, fornece modelo, sistema, app e testes realizados.", "Uma descrição objetiva reduz reinstalações desnecessárias e permite distinguir incompatibilidade local de indisponibilidade da fonte."], links: [l("Contactar suporte", "/suporte/"), l("Ver dispositivos", "/dispositivos/")] },
    ],
    faq: [
      { question: "Por que existe som mas não imagem no IPTV?", answer: "As causas comuns incluem codec de vídeo incompatível, aceleração de hardware, resolução, HDR, HDMI ou falha específica da fonte." },
      { question: "Devo reinstalar a aplicação?", answer: "Não como primeiro passo. Testa conteúdo, codec, saída de vídeo e outra aplicação compatível antes de apagar dados." },
    ],
  },
  "/blog/iptv-sem-som/": {
    sections: [
      { heading: "Confirma se a falha é geral ou isolada", paragraphs: ["Abre dois conteúdos diferentes e testa outra aplicação legítima no mesmo dispositivo. Se apenas um canal fica sem áudio, o problema pode estar na faixa fornecida; se tudo fica mudo, investiga volume, saída e formato.", "Verifica também mute na televisão, box, comando e barra de som. Parece básico, mas múltiplos controlos de volume criam diagnósticos enganadores."], links: [l("Canais não carregam", "/suporte/canais-nao-carregam/")] },
      { heading: "PCM, passthrough e formatos multicanal", paragraphs: ["Configura temporariamente a saída para PCM estéreo. Se o som regressar, a televisão ou soundbar pode não aceitar o formato enviado por passthrough, como Dolby Digital em determinada combinação.", "Depois ativa opções avançadas uma a uma. O objetivo não é manter tudo em estéreo, mas descobrir qual formato quebra a cadeia de áudio."], links: [l("IPTV na Smart TV", "/dispositivos/iptv-smart-tv/")] },
      { heading: "Faixas de áudio e idioma", paragraphs: ["Alguns conteúdos oferecem várias faixas, e uma delas pode estar vazia ou incompatível. Abre o menu de áudio da aplicação e seleciona outra faixa ou idioma.", "Se a escolha não ficar guardada, atualiza a aplicação e confirma as preferências do sistema. Não confundas ausência de faixa com volume baixo."], links: [l("Escolher uma app IPTV", "/blog/como-escolher-uma-app-iptv/")] },
      { heading: "Checklist de oficina", paragraphs: ["Testa PCM, outra faixa, outra porta HDMI e reprodução direta sem soundbar. Reinicia o equipamento depois de alterar o formato e anota qual passo mudou o resultado.", "Se nada resolver, envia ao suporte modelo, aplicação, ligação de áudio e conteúdos afetados, sem partilhar passwords."], links: [l("Suporte IPTV", "/suporte/"), l("Problemas na Smart TV", "/suporte/problemas-smart-tv/")] },
    ],
    faq: [
      { question: "PCM pode resolver IPTV sem som?", answer: "Sim, quando existe incompatibilidade com passthrough ou áudio multicanal. Usa PCM como teste e depois ajusta o formato adequado." },
      { question: "Por que só alguns canais ficam sem áudio?", answer: "Pode existir uma faixa diferente, codec incompatível ou falha específica da fonte." },
    ],
  },
  "/blog/latencia-iptv-vs-buffering/": {
    sections: [
      { heading: "Duas falhas que parecem iguais, mas não são", paragraphs: ["Buffering é uma pausa porque o player não recebeu dados suficientes. Latência é o atraso entre o acontecimento e o momento em que aparece no ecrã. Uma emissão pode reproduzir sem pausas e ainda chegar vários segundos depois.", "Separar os sintomas evita soluções erradas: aumentar o buffer pode reduzir interrupções, mas normalmente aumenta o atraso."], links: [l("Causas de buffering", "/blog/iptv-buffering-causas/"), l("Suporte de buffering", "/suporte/buffering/")] },
      { heading: "Onde nasce a latência", paragraphs: ["Captação, codificação, distribuição, servidor, rede, buffer e descodificação acrescentam pequenas parcelas. Protocolos orientados para estabilidade acumulam mais conteúdo antes de reproduzir; modos de baixa latência aceitam menos margem contra oscilações.", "O atraso do televisor também conta. Processamento de imagem, interpolação de movimento e ligação Bluetooth podem acrescentar tempo perceptível."], links: [l("4K e codecs", "/blog/iptv-4k-hdr-codecs/")] },
      { heading: "Um teste que separa as causas", paragraphs: ["Compara a mesma emissão em dois dispositivos na mesma rede e regista diferença aproximada. Depois testa Ethernet, reduz processamento de imagem e verifica se a app oferece tamanho de buffer.", "Não uses o relógio de uma rede social como referência exata. Compara fontes conhecidas e repete o teste para evitar conclusões baseadas num único momento."], links: [l("Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Velocidade de Internet", "/guias/velocidade-internet-iptv/")] },
      { heading: "O equilíbrio certo para cada utilização", paragraphs: ["Para filmes, alguns segundos adicionais raramente importam e um buffer maior pode estabilizar a experiência. Em conteúdos ao vivo, atraso e continuidade entram em tensão; procura o menor buffer que continue estável na tua rede.", "Se a latência surge em todos os dispositivos, contacta suporte com medições comparáveis. Se aparece apenas num televisor, revê app, processamento e hardware local."], links: [l("Ver planos", "/precos/"), l("Contactar suporte", "/suporte/")] },
    ],
    faq: [
      { question: "Buffering e latência são a mesma coisa?", answer: "Não. Buffering é interrupção por falta temporária de dados; latência é atraso, mesmo quando a reprodução continua fluida." },
      { question: "Reduzir o buffer diminui o atraso?", answer: "Pode diminuir, mas também torna a reprodução mais sensível a oscilações da rede." },
    ],
  },
  "/blog/router-para-iptv/": {
    sections: [
      { heading: "Compra pelo problema que precisas de resolver", paragraphs: ["Um router novo não corrige uma aplicação instável ou uma fonte indisponível. Antes de comprar, mede cobertura, interferência, número de dispositivos e comportamento por Ethernet. Se o cabo funciona e o Wi-Fi falha, existe uma razão concreta para melhorar a rede sem fios.", "Evita escolher apenas pela velocidade anunciada na caixa. Processador, antenas, software, portas e atualizações influenciam a utilização diária."], links: [l("Diagnosticar buffering", "/blog/iptv-buffering-causas/"), l("Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/")] },
      { heading: "Wi-Fi 6, bandas e portas", paragraphs: ["Wi-Fi 6 gere vários equipamentos com mais eficiência, mas o cliente também precisa de suportá-lo. A banda de 5 GHz oferece capacidade a curta distância; 2,4 GHz atravessa melhor algumas barreiras, com mais interferência.", "Para equipamentos fixos, procura portas Gigabit e boa gestão de cabos. Uma porta rápida não aumenta o bitrate do conteúdo, mas evita gargalos na rede local."], links: [l("Vários dispositivos em casa", "/blog/iptv-varios-dispositivos-em-casa/")] },
      { heading: "Quando Mesh faz sentido", paragraphs: ["Numa casa longa ou com vários pisos, um sistema Mesh bem colocado pode ser mais previsível do que repetidores em cadeia. O backhaul — ligação entre os nós — determina quanto da capacidade chega ao destino.", "Não coloques nós onde o sinal já é fraco. Cada nó precisa de receber uma ligação saudável para a poder distribuir."], links: [l("Velocidade para IPTV", "/blog/velocidade-internet-iptv/")] },
      { heading: "Checklist antes da compra", paragraphs: ["Conta divisões, paredes, ecrãs simultâneos e equipamentos com Ethernet. Confirma suporte de atualizações, controlo parental, rede de convidados e gestão simples.", "Escolhe tamanho adequado à casa e testa durante o período de devolução. Um router modesto bem colocado pode superar um modelo caro escondido num armário."], links: [l("Comparar planos", "/precos/"), l("Dispositivos IPTV", "/dispositivos/")] },
    ],
    faq: [
      { question: "Preciso de Wi-Fi 6 para IPTV?", answer: "Não obrigatoriamente. Wi-Fi 5 pode ser suficiente com bom sinal; Wi-Fi 6 ajuda sobretudo em redes com muitos dispositivos." },
      { question: "Mesh elimina buffering?", answer: "Pode melhorar cobertura, mas não corrige falhas da aplicação, dispositivo, acesso à Internet ou fonte." },
    ],
  },
  "/blog/como-limpar-cache-app-iptv/": {
    sections: [
      { heading: "Cache e dados não são a mesma coisa", paragraphs: ["A cache guarda ficheiros temporários para acelerar menus e imagens. Limpar dados repõe a aplicação e pode remover login, favoritos e preferências. Confundir os dois botões transforma uma manutenção simples numa reinstalação.", "Antes de começar, confirma que tens acesso legítimo às credenciais e regista apenas as definições necessárias em local privado."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/"), l("Segurança das apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Android TV e Fire TV", paragraphs: ["Abre Definições, Aplicações, escolhe o player e usa Limpar cache. Os nomes podem variar por versão. Fecha a app antes e reinicia o dispositivo depois para avaliar o efeito.", "Usa Limpar dados apenas se a configuração estiver corrompida e souberes reconstruí-la. Não instales utilitários de limpeza desconhecidos para executar uma tarefa disponível no sistema."], links: [l("Android TV", "/dispositivos/iptv-android-tv/"), l("Fire TV Stick", "/dispositivos/iptv-firestick/")] },
      { heading: "Samsung, LG e Apple TV", paragraphs: ["Algumas Smart TV não oferecem um botão de cache por aplicação. Reiniciar completamente, atualizar, libertar armazenamento ou reinstalar pode ser o caminho disponibilizado pelo fabricante.", "No Apple TV, fechar e reabrir ou reinstalar a aplicação pode substituir a limpeza manual. Consulta sempre a versão do sistema antes de seguir passos escritos para outro equipamento."], links: [l("Samsung", "/dispositivos/iptv-samsung/"), l("LG", "/dispositivos/iptv-lg/"), l("Apple TV", "/dispositivos/iptv-apple-tv/")] },
      { heading: "Quando a limpeza ajuda — e quando não", paragraphs: ["Cache pode ajudar em menus lentos, imagens antigas ou ficheiros temporários danificados. Não resolve Wi-Fi fraco, credenciais inválidas ou indisponibilidade geral.", "Se o problema voltar rapidamente, mede armazenamento, versão e padrão da falha. Repetir a limpeza todos os dias esconde a causa em vez de a resolver."], links: [l("Problemas com a app", "/suporte/problemas-app/"), l("Erro de credenciais", "/suporte/erro-credenciais/")] },
    ],
    faq: [
      { question: "Limpar cache apaga o login?", answer: "Normalmente não. Limpar dados pode apagar login e definições; confirma o nome da opção antes de tocar." },
      { question: "É necessário limpar cache regularmente?", answer: "Não. Faz sentido perante sintomas específicos, não como rotina diária." },
    ],
  },
  "/blog/mesh-wifi-para-iptv/": {
    sections: [
      { heading: "O cenário: uma casa onde o sinal não chega igual", paragraphs: ["Na sala junto ao router tudo funciona; no quarto do piso superior a imagem para. Este padrão aponta para cobertura, não necessariamente para falta de velocidade contratada. Mesh tenta criar vários pontos coordenados com a mesma rede.", "Antes de comprar, testa por cabo ou aproxima temporariamente o dispositivo. Se a falha continuar ao lado do router, procura outra causa."], links: [l("Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Buffering", "/suporte/buffering/")] },
      { heading: "Posição dos nós vale mais do que quantidade", paragraphs: ["O primeiro nó liga ao router; os restantes devem ficar onde ainda recebem bom sinal, não no ponto morto. Um nó escondido atrás da televisão ou no chão perde alcance.", "Começa com dois pontos, mede e só adiciona outro quando existe uma zona concreta por resolver. Nós excessivos podem aumentar interferência e complexidade."], links: [l("Router para IPTV", "/blog/router-para-iptv/")] },
      { heading: "Backhaul sem fios ou por Ethernet", paragraphs: ["Backhaul é a ligação entre nós. Ethernet oferece capacidade previsível quando existe cablagem. Sem fios é mais simples, mas partilha espectro com os dispositivos e depende da distância.", "Sistemas tri-band podem reservar uma banda para backhaul, embora o resultado continue dependente da construção da casa."], links: [l("Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/")] },
      { heading: "Teste de família em horário real", paragraphs: ["Reproduz em dois ecrãs enquanto outros equipamentos usam a rede. Caminha com um telemóvel entre divisões e observa se a transição mantém a ligação.", "Avalia estabilidade durante vários dias, não apenas um teste vazio. O objetivo é cobertura consistente no horário em que a casa está realmente ocupada."], links: [l("Velocidade de Internet", "/guias/velocidade-internet-iptv/"), l("Ver dispositivos", "/dispositivos/")] },
    ],
    faq: [
      { question: "Mesh é melhor do que repetidor?", answer: "Geralmente oferece gestão e transição mais coordenadas, mas posicionamento e backhaul continuam decisivos." },
      { question: "Quantos nós Mesh são necessários?", answer: "Depende da área e construção. Começa pelo mínimo e adiciona apenas para resolver zonas medidas." },
    ],
  },
  "/blog/adaptador-ethernet-firestick/": {
    sections: [
      { heading: "Quando um adaptador resolve um problema real", paragraphs: ["Fire TV Stick depende normalmente de Wi-Fi. Um adaptador Ethernet é útil quando o sinal atrás da televisão oscila, existe muita interferência ou queres uma ligação mais previsível.", "Primeiro confirma que o problema desaparece ao aproximar o router ou testar outro dispositivo por cabo. Assim evitas comprar um acessório para uma falha que vem da app ou da fonte."], links: [l("Fire TV Stick", "/dispositivos/iptv-firestick/"), l("Problemas no Firestick", "/suporte/problemas-firestick/")] },
      { heading: "Compatibilidade, alimentação e velocidade", paragraphs: ["Escolhe um adaptador explicitamente compatível com a geração do Fire TV Stick e com o conector de alimentação. Alguns hubs exigem fonte adequada para manter rede e periféricos estáveis.", "Mesmo adaptadores limitados a 100 Mbps podem superar o bitrate normal de streaming. Estabilidade costuma importar mais do que um número Gigabit que o stick não consegue aproveitar."], links: [l("Velocidade necessária", "/blog/velocidade-internet-iptv/")] },
      { heading: "Instalação em quatro passos", paragraphs: ["Desliga o stick, liga o adaptador entre alimentação e dispositivo, conecta o cabo ao router e volta a alimentar. Nas definições de rede, confirma que a ligação aparece como Ethernet.", "Testa o mesmo conteúdo e horário usados no Wi-Fi. Não mudes app, resolução e cabo ao mesmo tempo."], links: [l("Instalar IPTV no Firestick", "/guias/instalar-iptv-no-firestick/")] },
      { heading: "O que o cabo não consegue corrigir", paragraphs: ["Ethernet remove variáveis sem fios, mas não aumenta memória, não reduz aquecimento e não corrige credenciais ou conteúdo indisponível.", "Se as interrupções persistirem, regista armazenamento, temperatura, versão da app e alcance do problema antes de contactar suporte."], links: [l("Causas de buffering", "/blog/iptv-buffering-causas/"), l("Suporte", "/suporte/")] },
    ],
    faq: [
      { question: "Ethernet melhora o Fire TV Stick?", answer: "Pode melhorar estabilidade quando o Wi-Fi é a causa. Não corrige problemas da aplicação, dispositivo ou fonte." },
      { question: "É preciso adaptador Gigabit?", answer: "Nem sempre. Muitos modelos limitam a velocidade; para streaming, consistência pode ser mais relevante." },
    ],
  },
  "/blog/legendas-audio-iptv/": {
    sections: [
      { heading: "Começa pela faixa disponível", paragraphs: ["Legendas e áudio dependem do que a fonte disponibiliza e do que a aplicação consegue interpretar. Abre o menu durante a reprodução e confirma as faixas listadas antes de procurar uma definição global.", "Quando nenhuma opção aparece, a aplicação pode não ter recebido faixas alternativas. Mudar idioma do sistema não cria conteúdo que não existe."], links: [l("Escolher uma app", "/blog/como-escolher-uma-app-iptv/")] },
      { heading: "Idioma preferido e seleção automática", paragraphs: ["Define português como idioma preferido no sistema e na aplicação quando possível. Alguns players usam códigos diferentes para português europeu e brasileiro; testa a prioridade em vez de assumir.", "Desativa seleção automática se ela escolher comentários, audiodescrição ou uma faixa vazia. Guarda a opção e confirma noutro conteúdo."], links: [l("Apps IPTV", "/apps/")] },
      { heading: "Sincronização de legendas", paragraphs: ["Se o texto chega antes ou depois da voz, procura ajuste de atraso em milissegundos. Corrige em pequenos passos e volta a uma cena com diálogo claro.", "Um atraso que muda ao longo do conteúdo pode indicar frame rate ou ficheiro de legendas inadequado, não um simples offset."], links: [l("4K, HDR e codecs", "/blog/iptv-4k-hdr-codecs/")] },
      { heading: "Acessibilidade e leitura confortável", paragraphs: ["Ajusta tamanho, contraste e fundo sem tapar informação essencial. Em ecrãs pequenos, uma linha curta e legível é melhor do que texto enorme cortado.", "Quando existe audiodescrição ou legendas para surdos, identifica a faixa correta. Guarda preferências por perfil se a aplicação permitir."], links: [l("Controlo parental e perfis", "/blog/controlo-parental-iptv/"), l("Suporte", "/suporte/")] },
    ],
    faq: [
      { question: "Como mudar o idioma do áudio?", answer: "Abre o menu de faixas durante a reprodução e escolhe uma opção disponível. O idioma do sistema apenas define preferência." },
      { question: "Como corrigir legendas atrasadas?", answer: "Usa o ajuste de sincronização em pequenos passos. Se o atraso variar, verifica frame rate e origem da legenda." },
    ],
  },
  "/blog/iptv-segunda-casa/": {
    sections: [
      { heading: "Duas casas significam duas condições de utilização", paragraphs: ["Antes de instalar, confirma se o plano permite utilização noutro endereço e quantas ligações simultâneas estão autorizadas. Compatibilidade com vários dispositivos não significa reproduções ilimitadas em locais diferentes.", "Condições de localização, segurança e licenciamento podem variar. Pede confirmação em vez de copiar credenciais e descobrir o limite durante uma viagem."], links: [l("Subscrição IPTV", "/subscricao-iptv/"), l("Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/")] },
      { heading: "Prepara uma instalação que qualquer pessoa consiga usar", paragraphs: ["Escolhe um dispositivo simples, atualiza-o e organiza favoritos antes de o deixar na segunda casa. Regista o nome da app e passos de reinício sem escrever passwords num papel junto à televisão.", "Se familiares usam o espaço, cria perfis e protege alterações com PIN. Um comando e interface consistentes reduzem chamadas de suporte."], links: [l("Escolher dispositivo", "/dispositivos/"), l("Controlo parental", "/blog/controlo-parental-iptv/")] },
      { heading: "Internet sazonal precisa de teste real", paragraphs: ["Casas de férias podem usar 4G, 5G ou uma ligação ativada apenas em certos meses. Mede cobertura no local, plafond de dados e estabilidade à noite, quando a rede móvel fica mais ocupada.", "Calcula consumo pela qualidade e horas previstas. Uma ligação rápida com poucos gigabytes pode ser inadequada para utilização diária."], links: [l("Quanto consome IPTV", "/blog/quanto-consome-iptv/"), l("Usar IPTV fora de casa", "/blog/usar-iptv-fora-de-casa/")] },
      { heading: "Checklist ao chegar e ao sair", paragraphs: ["Ao chegar, atualiza sistema, testa rede e confirma data e fuso horário. Ao sair, termina sessões em equipamentos partilhados, desliga dispositivos sensíveis e remove dados se a casa for arrendada.", "Guarda o contacto de suporte e descreve a localização apenas quando necessário. Nunca envies credenciais completas em capturas públicas."], links: [l("Segurança das apps", "/blog/seguranca-apps-iptv/"), l("Ver preços", "/precos/")] },
    ],
    faq: [
      { question: "Posso usar a mesma subscrição em duas casas?", answer: "Depende das condições do plano, localização e ligações simultâneas. Confirma antes de instalar." },
      { question: "Internet móvel serve para uma casa de férias?", answer: "Pode servir com cobertura estável e plafond adequado. Mede consumo e testa no horário real." },
    ],
  },
  "/blog/app-iptv-fecha-sozinha/": {
    sections: [
      { heading: "Fecha sozinha ou é encerrada pelo sistema?", paragraphs: ["Uma aplicação pode fechar por erro interno, falta de memória ou porque o sistema precisa de libertar recursos. Observa se regressas ao ecrã inicial, se o dispositivo reinicia ou se aparece uma mensagem; cada comportamento aponta para uma causa diferente.", "Regista a ação anterior à falha: abrir o EPG, mudar rapidamente de canal, iniciar 4K ou retomar depois de suspensão. Um padrão repetível é muito mais útil do que reinstalar sem diagnóstico."], links: [l("Problemas com a app", "/suporte/problemas-app/"), l("Manutenção da aplicação", "/blog/manutencao-app-iptv/")] },
      { heading: "Liberta recursos sem apagar a configuração", paragraphs: ["Fecha aplicações em segundo plano, reinicia o equipamento e confirma espaço livre. Em sticks e boxes compactos, armazenamento cheio e calor podem tornar o sistema agressivo ao encerrar processos.", "Limpa primeiro apenas a cache. Limpar dados pode remover login, favoritos e preferências; usa essa opção apenas quando tens forma segura de reconstruir a configuração."], links: [l("Como limpar cache", "/blog/como-limpar-cache-app-iptv/")] },
      { heading: "Atualização, versão e compatibilidade", paragraphs: ["Atualiza pela loja oficial e confirma se a versão do sistema continua suportada. Uma app recente pode exigir recursos que uma televisão antiga não oferece; uma versão abandonada pode falhar depois de mudanças no serviço.", "Se a falha começou após uma atualização, anota a versão em vez de procurar ficheiros antigos em sites desconhecidos. O suporte precisa desse dado para confirmar um problema conhecido."], links: [l("Escolher uma app IPTV", "/blog/como-escolher-uma-app-iptv/"), l("Segurança nas apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Teste controlado antes do suporte", paragraphs: ["Repete no mesmo conteúdo, testa outro conteúdo e compara numa segunda aplicação compatível sem mudar a rede. Se apenas uma app fecha, a investigação fica concentrada; se o equipamento reinicia, verifica alimentação e temperatura.", "Envia modelo, sistema, versão, espaço livre e passos que reproduzem o erro. Nunca publiques credenciais nem uses acesso remoto de origem duvidosa."], links: [l("Suporte IPTV", "/suporte/"), l("Ver dispositivos", "/dispositivos/")] },
    ],
    faq: [
      { question: "Por que a app IPTV fecha sozinha?", answer: "As causas comuns são falta de memória ou espaço, aquecimento, erro da versão, cache danificada ou incompatibilidade do dispositivo." },
      { question: "Limpar cache pode ajudar?", answer: "Sim, quando ficheiros temporários estão danificados. Evita limpar dados antes de guardar a configuração necessária." },
    ],
  },
  "/blog/epg-hora-errada/": {
    sections: [
      { heading: "O relógio certo começa no dispositivo", paragraphs: ["Confirma data, hora e fuso horário do televisor, box ou telemóvel. Em Portugal, a mudança entre hora de inverno e verão pode criar uma diferença de uma hora quando o sistema está configurado manualmente.", "Ativa hora automática, reinicia e só depois altera compensações dentro da aplicação. Corrigir duas vezes — no sistema e no player — pode deslocar ainda mais o guia."], links: [l("O que é EPG", "/blog/o-que-e-epg/"), l("EPG não funciona", "/suporte/epg-nao-funciona/")] },
      { heading: "Offset da aplicação: usa apenas quando necessário", paragraphs: ["Alguns players oferecem EPG time shift ou offset. Começa em zero e compara um programa conhecido. Ajusta em passos de 30 ou 60 minutos apenas se todas as linhas tiverem o mesmo desvio.", "Se alguns canais estão certos e outros errados, um offset global não resolve; pode existir associação incorreta entre canal e identificador."], links: [l("Configurar EPG", "/guias/epg/")] },
      { heading: "Atualiza a fonte sem destruir favoritos", paragraphs: ["Força uma atualização do EPG e aguarda a conclusão. Limpa apenas os dados específicos do guia quando a app distingue essa opção; apagar toda a aplicação pode remover organização sem corrigir a origem.", "Confirma também país e região. Canais com versões internacionais podem usar grelhas diferentes apesar de nomes semelhantes."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Diagnóstico por padrão", paragraphs: ["Uma hora de diferença em todos os canais aponta para fuso ou horário de verão. Apenas alguns canais apontam para correspondência de IDs. Guia vazio é outro problema: fonte, ligação ou atualização.", "Ao pedir ajuda, envia exemplos com canal, programa, hora apresentada e hora esperada, sem expor URLs privadas."], links: [l("Suporte", "/suporte/"), l("Aplicações IPTV", "/apps/")] },
    ],
    faq: [
      { question: "Como corrigir o EPG uma hora adiantado?", answer: "Confirma fuso e hora automática no dispositivo e deixa o offset da app em zero antes de testar um ajuste." },
      { question: "Por que só alguns canais têm horário errado?", answer: "Normalmente existe associação incorreta entre canais e identificadores do guia, não um problema global de fuso." },
    ],
  },
  "/blog/lista-m3u-nao-carrega/": {
    sections: [
      { heading: "A mensagem de erro é o primeiro dado", paragraphs: ["URL inválido, timeout, acesso recusado e playlist vazia são falhas diferentes. Copia apenas a mensagem — nunca publiques o endereço completo, porque uma playlist pode conter credenciais.", "Confirma se introduziste o URL sem espaços e respeitando maiúsculas, símbolos e protocolo. Teclados de televisão tornam fácil trocar caracteres."], links: [l("Guia M3U", "/guias/m3u/"), l("Erro de credenciais", "/suporte/erro-credenciais/")] },
      { heading: "Separa rede, player e fonte", paragraphs: ["Testa a ligação com outra aplicação legítima, reinicia o router e verifica data do sistema. Depois testa a mesma configuração num segundo player compatível, mantendo dispositivo e rede quando possível.", "Se dois players falham da mesma forma, evita reinstalar repetidamente. Confirma validade e disponibilidade com o fornecedor autorizado."], links: [l("M3U vs Xtream Codes", "/blog/m3u-vs-xtream-codes/"), l("IPTV não funciona", "/suporte/iptv-nao-funciona/")] },
      { heading: "Playlist grande e limites do equipamento", paragraphs: ["Listas extensas exigem memória para analisar categorias, logos e EPG. Uma Smart TV antiga pode parecer bloqueada enquanto processa ou pode fechar a aplicação.", "Reduz funções opcionais durante o teste, liberta armazenamento e aguarda a primeira importação. Se o player permite grupos, carrega apenas o necessário."], links: [l("App fecha sozinha", "/blog/app-iptv-fecha-sozinha/"), l("Escolher uma box", "/blog/como-escolher-box-iptv/")] },
      { heading: "Privacidade durante o suporte", paragraphs: ["Partilha dispositivo, app, hora e texto do erro, mas oculta servidor, utilizador, password e tokens. Não introduzas a playlist em validadores públicos desconhecidos.", "Quando o acesso voltar, remove capturas que contenham dados e altera credenciais se suspeitares de exposição."], links: [l("Segurança em apps", "/blog/seguranca-apps-iptv/"), l("Contactar suporte", "/suporte/")] },
    ],
    faq: [
      { question: "Por que uma lista M3U não carrega?", answer: "Pode existir URL incorreto, acesso expirado, rede indisponível, fonte temporariamente inacessível ou falta de recursos no player." },
      { question: "Posso testar o URL num site online?", answer: "Evita validadores desconhecidos, pois o endereço pode conter credenciais. Usa aplicações confiáveis ou suporte autorizado." },
    ],
  },
  "/blog/imagem-iptv-pixelizada/": {
    sections: [
      { heading: "Pixelização não significa sempre Internet lenta", paragraphs: ["Blocos visíveis podem nascer de bitrate baixo, compressão agressiva, perda de dados, sinal Wi-Fi instável ou descodificação. Se a imagem fica pixelizada apenas em movimento rápido, a compressão pode ser mais relevante do que a velocidade máxima.", "Observa se acontece em todos os conteúdos e horários. Um padrão isolado não deve levar a alterar toda a rede."], links: [l("4K, HDR e codecs", "/blog/iptv-4k-hdr-codecs/"), l("Velocidade para IPTV", "/blog/velocidade-internet-iptv/")] },
      { heading: "Compara qualidade e bitrate", paragraphs: ["Muda temporariamente entre HD e Full HD e observa detalhe em cenas rápidas. Uma etiqueta 4K não garante qualidade se o bitrate for insuficiente.", "Confirma que a aplicação não escolheu qualidade baixa automaticamente após uma oscilação. Volta a automático apenas depois de estabilizar a rede."], links: [l("Quanto consome IPTV", "/blog/quanto-consome-iptv/")] },
      { heading: "Testa a rede sem depender de um único número", paragraphs: ["Liga por Ethernet ou aproxima o dispositivo do router, reproduz o mesmo conteúdo e evita downloads paralelos. Um teste de Mbps pode parecer excelente e esconder perdas ou interferência.", "Se Ethernet resolve, melhora cobertura ou posição. Se o resultado não muda, investiga player, dispositivo e fonte."], links: [l("Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Mesh Wi-Fi", "/blog/mesh-wifi-para-iptv/")] },
      { heading: "Ajustes do televisor", paragraphs: ["Desativa temporariamente redução de ruído e nitidez excessiva; estes filtros podem ampliar artefactos. Usa um modo de imagem neutro para avaliar a fonte.", "Se a pixelização aparece em vários dispositivos no mesmo conteúdo, documenta o horário e contacta suporte em vez de comprar hardware."], links: [l("Problemas na Smart TV", "/suporte/problemas-smart-tv/"), l("Ver preços", "/precos/")] },
    ],
    faq: [
      { question: "Por que a imagem IPTV fica pixelizada?", answer: "As causas incluem compressão, bitrate baixo, instabilidade de rede, interferência Wi-Fi, player ou descodificação." },
      { question: "Mais Mbps eliminam pixelização?", answer: "Não necessariamente. Estabilidade, bitrate da fonte e processamento também influenciam." },
    ],
  },
  "/blog/audio-video-dessincronizado-iptv/": {
    sections: [
      { heading: "Mede antes de corrigir", paragraphs: ["Escolhe uma cena com fala visível e identifica se o áudio chega antes ou depois. Reinicia o conteúdo para confirmar que o atraso é constante; uma diferença que aumenta ao longo do tempo pode indicar frame rate ou descodificação.", "Testa outro conteúdo. Se apenas um item falha, um ajuste global pode desalinhar todo o resto."], links: [l("Legendas e áudio", "/blog/legendas-audio-iptv/"), l("IPTV sem som", "/blog/iptv-sem-som/")] },
      { heading: "Ajuste de sincronização no player", paragraphs: ["Procura Audio delay ou AV sync e altera em passos pequenos, por exemplo 50 milissegundos. Guarda apenas quando o resultado se mantém depois de pausar e retomar.", "Regista o valor original. Ajustes extremos costumam mascarar outro problema na cadeia."], links: [l("Escolher app IPTV", "/blog/como-escolher-uma-app-iptv/")] },
      { heading: "Bluetooth, soundbar e HDMI", paragraphs: ["Auscultadores Bluetooth e processamento de soundbar acrescentam latência. Testa o altifalante interno da televisão e depois volta a introduzir cada componente.", "Em HDMI, experimenta PCM e outra porta. Atualiza firmware da televisão e do sistema de áudio quando existir uma correção relevante."], links: [l("IPTV com som sem imagem", "/blog/iptv-com-som-sem-imagem/")] },
      { heading: "Quando o problema acompanha o dispositivo", paragraphs: ["Se todas as aplicações ficam dessincronizadas, verifica sistema, processamento de imagem e áudio. Modo Jogo pode reduzir atraso visual, embora altere outros tratamentos.", "Se o problema acompanha apenas uma app, reúne versão, codec e passos de reprodução para o suporte."], links: [l("Suporte IPTV", "/suporte/"), l("Dispositivos", "/dispositivos/")] },
    ],
    faq: [
      { question: "Como sincronizar áudio e vídeo no IPTV?", answer: "Usa o ajuste AV sync em pequenos passos e testa sem Bluetooth ou soundbar para localizar a origem." },
      { question: "Bluetooth causa atraso no áudio?", answer: "Pode causar, dependendo do codec e equipamento. Compara com os altifalantes internos." },
    ],
  },
  "/blog/iptv-televisao-antiga/": {
    sections: [
      { heading: "Uma televisão antiga pode continuar útil", paragraphs: ["Se tem entrada HDMI funcional, uma box ou stick certificado pode adicionar aplicações modernas sem substituir o ecrã. A resolução da televisão define o limite visual, mas não impede uma interface atualizada.", "Antes de comprar, confirma HDMI, resolução, espaço físico e acesso a tomada. Televisões muito antigas podem exigir conversores, com perda de simplicidade e qualidade."], links: [l("Dispositivos IPTV", "/dispositivos/"), l("Como escolher box", "/blog/como-escolher-box-iptv/")] },
      { heading: "Stick ou box externa?", paragraphs: ["Um stick ocupa pouco espaço e serve utilização simples. Uma box costuma oferecer mais portas, refrigeração e possibilidade de Ethernet. Escolhe pelo cenário, não pelo formato mais popular.", "Confirma sistema certificado, atualizações e comando. Equipamentos genéricos baratos podem ter software pouco previsível."], links: [l("Fire TV Stick", "/dispositivos/iptv-firestick/"), l("Android TV", "/dispositivos/iptv-android-tv/")] },
      { heading: "Resolução, HDMI e energia", paragraphs: ["Configura a saída para a resolução nativa do televisor. Se aparece ecrã preto, começa em 720p ou 1080p e testa outra porta.", "Alimenta o dispositivo pelo adaptador recomendado. A porta USB de uma TV antiga pode não fornecer corrente suficiente, causando reinícios e falhas."], links: [l("Som sem imagem", "/blog/iptv-com-som-sem-imagem/")] },
      { heading: "Experiência simples para uso diário", paragraphs: ["Organiza favoritos, aumenta tamanho de texto quando possível e remove apps desnecessárias. Um comando com botões claros pode importar mais do que funções avançadas.", "Testa rede no local. Se passar cabo for viável, Ethernet reduz uma variável importante numa instalação fixa."], links: [l("Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Ver planos", "/precos/")] },
    ],
    faq: [
      { question: "É possível usar IPTV numa televisão antiga?", answer: "Sim, normalmente através de uma box ou stick ligado por HDMI e uma aplicação compatível." },
      { question: "Preciso de televisão 4K?", answer: "Não. A qualidade pode ser ajustada à resolução do ecrã, como HD ou Full HD." },
    ],
  },
  "/blog/fire-tv-vs-android-tv-box/": {
    sections: [
      { heading: "Dois caminhos para o mesmo objetivo", paragraphs: ["Fire TV oferece um ecossistema integrado da Amazon e configuração consistente. Android TV ou Google TV existe em várias marcas, com maior diversidade de hardware, portas e preços.", "A comparação justa usa modelos concretos. Uma box premium não deve ser comparada apenas com o stick mais básico."], links: [l("Fire TV Stick", "/dispositivos/iptv-firestick/"), l("Android TV", "/dispositivos/iptv-android-tv/")] },
      { heading: "Aplicações e interface", paragraphs: ["Confirma a aplicação na Amazon Appstore ou Google Play antes da compra. A existência do mesmo nome não garante funções idênticas em todas as versões.", "Avalia pesquisa, favoritos, EPG e navegação por comando. Se dependes de instalação externa, inclui segurança e manutenção no custo da decisão."], links: [l("Melhor app para Smart TV", "/blog/melhor-app-iptv-smart-tv/"), l("Segurança das apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Portas, rede e desempenho", paragraphs: ["Boxes podem incluir Ethernet, USB e mais armazenamento; sticks privilegiam tamanho e simplicidade. Ambos podem exigir adaptador para rede por cabo.", "Para 4K, confirma codec, HDR, memória e refrigeração. A etiqueta de resolução não descreve a fluidez do menu."], links: [l("Adaptador Ethernet Fire TV", "/blog/adaptador-ethernet-firestick/"), l("4K e codecs", "/blog/iptv-4k-hdr-codecs/")] },
      { heading: "Decisão por perfil", paragraphs: ["Escolhe Fire TV se valorizas uma experiência padronizada e o ecossistema Amazon. Considera Android TV/Google TV quando precisas de variedade de hardware, portas ou integração Google.", "Qualquer escolha deve incluir atualizações, garantia e origem confiável. Evita boxes sem identificação clara apenas por prometerem muitas funções."], links: [l("Comparar dispositivos", "/dispositivos/"), l("Preços IPTV", "/precos/")] },
    ],
    faq: [
      { question: "Fire TV é melhor do que Android TV Box?", answer: "Depende do modelo, apps, portas e ecossistema pretendido. Compara equipamentos concretos, não apenas sistemas." },
      { question: "Qual é melhor para Ethernet?", answer: "Muitas boxes incluem porta; Fire TV costuma precisar de adaptador compatível." },
    ],
  },
  "/blog/firestick-armazenamento-cheio/": {
    sections: [
      { heading: "Sinais de armazenamento insuficiente", paragraphs: ["Atualizações que falham, menus lentos, apps que fecham e avisos de espaço são sintomas comuns. Confirma o valor livre nas definições antes de limpar qualquer coisa.", "Não confundas armazenamento com memória RAM. Apagar ficheiros liberta espaço permanente, mas não aumenta a memória física do dispositivo."], links: [l("Problemas no Firestick", "/suporte/problemas-firestick/"), l("App fecha sozinha", "/blog/app-iptv-fecha-sozinha/")] },
      { heading: "Liberta espaço com baixo risco", paragraphs: ["Remove aplicações que já não usas, limpa cache das maiores e apaga downloads conhecidos. Reinicia depois para o sistema recalcular o espaço.", "Evita aplicações de limpeza que prometem acelerar tudo. As ferramentas do Fire OS mostram consumo sem entregar permissões a terceiros."], links: [l("Limpar cache", "/blog/como-limpar-cache-app-iptv/")] },
      { heading: "Dados da app: último recurso", paragraphs: ["Limpar dados pode recuperar espaço, mas remove sessão, favoritos e configuração. Faz isso apenas quando tens as informações necessárias e compreendes o resultado.", "Se uma app volta a ocupar demasiado espaço, verifica downloads, logos, cache de EPG e versões. Uma reinstalação repetida não é manutenção sustentável."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Expansão e escolha de equipamento", paragraphs: ["Alguns modelos suportam armazenamento externo com limitações. Confirma documentação do modelo e não desligues unidades durante escrita.", "Se o espaço continua incompatível com o teu uso, compara um dispositivo com maior armazenamento em vez de gerir permanentemente no limite."], links: [l("Escolher box IPTV", "/blog/como-escolher-box-iptv/"), l("Dispositivos", "/dispositivos/")] },
    ],
    faq: [
      { question: "Quanto espaço livre deve ter o Fire TV Stick?", answer: "Não existe um valor universal, mas deve existir margem para cache e atualizações. Evita operar continuamente junto de zero." },
      { question: "Limpar dados apaga a configuração?", answer: "Normalmente sim. Limpa cache primeiro e usa dados apenas quando estás preparado para configurar novamente." },
    ],
  },
  "/blog/iptv-pc-vlc/": {
    sections: [
      { heading: "Quando o computador é o dispositivo mais prático", paragraphs: ["Um PC permite testar rede, codecs e configuração com mais visibilidade do que muitas televisões. VLC é um player conhecido para fontes legítimas e ficheiros locais, mas não substitui autorização de conteúdo.", "Atualiza o sistema e descarrega o player apenas do site oficial. Evita versões modificadas que prometem listas ou canais incluídos."], links: [l("IPTV no Windows", "/dispositivos/iptv-windows/"), l("Segurança nas apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Abrir uma fonte sem expor dados", paragraphs: ["Usa Abrir fluxo de rede para um endereço fornecido legitimamente e não o guardes em capturas públicas. Se trabalhas com ficheiro M3U, mantém-no numa pasta privada.", "Confirma áudio, vídeo e estabilidade antes de alterar cache de rede. Os valores padrão são um ponto de partida, não um erro."], links: [l("Guia M3U", "/guias/m3u/"), l("Lista M3U não carrega", "/blog/lista-m3u-nao-carrega/")] },
      { heading: "Buffer, hardware e ecrã completo", paragraphs: ["Se existem pausas, compara Ethernet, outra fonte legítima e utilização de CPU. Ativa ou desativa descodificação por hardware apenas como teste; drivers antigos podem causar imagem preta ou artefactos.", "Para ligar à televisão, ajusta resolução e áudio HDMI no Windows. Testa sem duplicar ecrãs se o equipamento perde frames."], links: [l("Latência vs buffering", "/blog/latencia-iptv-vs-buffering/"), l("Som sem imagem", "/blog/iptv-com-som-sem-imagem/")] },
      { heading: "VLC ou aplicação dedicada", paragraphs: ["VLC é útil para diagnóstico e reprodução direta. Uma aplicação dedicada pode organizar EPG, favoritos e perfis de forma mais confortável.", "Escolhe pela tarefa: usa uma ferramenta simples para testar e uma interface adequada ao uso diário, sem duplicar credenciais em programas desnecessários."], links: [l("Aplicações IPTV", "/apps/"), l("Ver planos", "/precos/")] },
    ],
    faq: [
      { question: "VLC pode reproduzir IPTV?", answer: "Pode abrir fontes legítimas compatíveis, incluindo certos fluxos e playlists M3U." },
      { question: "VLC inclui canais IPTV?", answer: "Não. É um player; a fonte e os direitos de acesso são separados." },
    ],
  },
  "/blog/testar-estabilidade-iptv/": {
    sections: [
      { heading: "Um teste útil começa com critérios", paragraphs: ["Não avalies apenas se a imagem abriu. Define antes o que vais observar: tempo de arranque, interrupções, mudança de canal, EPG, qualidade em movimento e resposta do suporte.", "Testa no dispositivo, rede e horário em que pretendes usar. Uma demonstração junto ao router numa manhã vazia não representa a sala num evento concorrido."], links: [l("Checklist antes de subscrever", "/blog/checklist-antes-de-subscrever-iptv/"), l("Como escolher IPTV", "/comparar/como-escolher-iptv-portugal/")] },
      { heading: "Repete o mesmo cenário", paragraphs: ["Escolhe conteúdos de diferentes tipos e mantém resolução e app. Regista início, pausas e recuperação durante pelo menos trinta minutos.", "Depois compara Wi-Fi e Ethernet sem alterar o resto. Se o resultado muda, encontraste uma variável local; se não muda, continua o diagnóstico."], links: [l("Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Buffering", "/blog/iptv-buffering-causas/")] },
      { heading: "Testa suporte antes de precisar dele", paragraphs: ["Faz uma pergunta concreta sobre compatibilidade ou configuração e avalia clareza, não apenas velocidade. Respostas que pressionam pagamento sem explicar condições são um sinal para pausar.", "Confirma duração, dispositivos, ligações simultâneas, renovação e reembolso por escrito."], links: [l("Contacto", "/contacto/"), l("Política de reembolso", "/politica-reembolso/")] },
      { heading: "Decide com evidência, não com um momento perfeito", paragraphs: ["Nenhum teste garante o futuro, mas um método reduz decisões por slogans. Compara estabilidade, organização, suporte, transparência e custo total.", "Se a oferta não permite confirmar condições básicas ou exige instalar software desconhecido, não avances. Uma boa decisão pode ser esperar."], links: [l("Preços IPTV", "/precos/"), l("Legalidade", "/legalidade/")] },
    ],
    faq: [
      { question: "Quanto tempo deve durar um teste de estabilidade?", answer: "Tempo suficiente para observar o uso real; pelo menos trinta minutos e, idealmente, em mais de um horário." },
      { question: "O que devo testar antes de subscrever?", answer: "Dispositivo, app, rede, mudança de canal, EPG, qualidade, suporte e condições comerciais." },
    ],
  },
  "/blog/app-iptv-nao-aparece-smart-tv/": {
    sections: [
      { heading: "A loja depende do sistema, região e modelo", paragraphs: ["Uma aplicação disponível numa Samsung recente pode não aparecer numa LG, Android TV ou modelo antigo. Cada fabricante controla a loja, os países suportados e as versões mínimas.", "Confirma modelo completo, ano, sistema e região configurada. Procurar apenas pelo nome da marca da televisão não é suficiente."], links: [l("IPTV na Smart TV", "/dispositivos/iptv-smart-tv/"), l("Melhor app para Smart TV", "/blog/melhor-app-iptv-smart-tv/")] },
      { heading: "Atualiza antes de procurar alternativas", paragraphs: ["Atualiza o software da televisão, reinicia completamente e volta a pesquisar pelo nome exato e programador. Algumas lojas demoram a atualizar resultados depois de uma alteração de região.", "Não mudes o país apenas para instalar uma app sem compreender o efeito: serviços locais, termos e métodos de pagamento podem mudar."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Quando a televisão deixou de ser suportada", paragraphs: ["Fabricantes e programadores encerram suporte para versões antigas. Instalar um ficheiro encontrado na Internet pode criar risco e continuar sem resolver limitações de memória ou codecs.", "Uma box certificada com atualizações ativas costuma ser uma alternativa mais previsível do que forçar uma aplicação incompatível."], links: [l("IPTV numa TV antiga", "/blog/iptv-televisao-antiga/"), l("Escolher box IPTV", "/blog/como-escolher-box-iptv/")] },
      { heading: "Escolhe o caminho com menor manutenção", paragraphs: ["Compara aplicação oficial, casting e dispositivo externo. Avalia comando, arranque, EPG e atualizações, não apenas o custo inicial.", "Confirma compatibilidade com o serviço antes da compra e evita entregar acesso remoto a terceiros para instalar software desconhecido."], links: [l("Aplicações IPTV", "/apps/"), l("Ver dispositivos", "/dispositivos/")] },
    ],
    faq: [
      { question: "Por que uma app IPTV não aparece na Smart TV?", answer: "Pode não suportar o sistema, região, modelo ou versão do televisor, ou ter sido removida da loja." },
      { question: "Devo mudar a região da televisão?", answer: "Só depois de compreender o impacto em apps, serviços e termos. Uma box compatível pode ser mais simples." },
    ],
  },
  "/blog/chromecast-nao-liga-iptv/": {
    sections: [
      { heading: "Casting precisa de descoberta na rede local", paragraphs: ["Telemóvel e Chromecast devem estar na mesma rede e conseguir comunicar. Redes de convidados, isolamento de clientes e alguns extensores impedem que um dispositivo encontre o outro.", "Confirma o nome do Wi-Fi em ambos e desativa temporariamente dados móveis no telemóvel para evitar que a app escolha outro caminho."], links: [l("IPTV no Chromecast", "/dispositivos/iptv-chromecast/"), l("Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/")] },
      { heading: "O ícone aparece, mas a reprodução não começa", paragraphs: ["Descoberta e reprodução são etapas diferentes. Atualiza app, Google Home e Chromecast; reinicia e testa conteúdo autorizado conhecido.", "Se o ecrã fica preto, investiga codec, resolução e DRM. Espelhar o ecrã não é igual a enviar um stream compatível diretamente."], links: [l("Som sem imagem", "/blog/iptv-com-som-sem-imagem/"), l("4K e codecs", "/blog/iptv-4k-hdr-codecs/")] },
      { heading: "Router, Mesh e mudanças de ponto", paragraphs: ["Num sistema Mesh, confirma que não existe segmentação entre bandas ou nós. Reinicia primeiro o Chromecast e depois o router, sem repor tudo de fábrica.", "VPN no telemóvel pode interferir na descoberta local. Testa sem VPN apenas para diagnóstico e mantém as regras legais do conteúdo."], links: [l("Mesh Wi-Fi", "/blog/mesh-wifi-para-iptv/"), l("VPN para IPTV", "/blog/vpn-para-iptv/")] },
      { heading: "Checklist antes de fazer reset", paragraphs: ["Verifica mesma rede, permissões de rede local, atualizações, alimentação e outro conteúdo. Só faz reposição de fábrica depois de guardar o necessário e confirmar que os passos simples falharam.", "Ao pedir suporte, indica modelo do Chromecast, telemóvel, app e comportamento do ícone de transmissão."], links: [l("Suporte IPTV", "/suporte/"), l("Problemas com a app", "/suporte/problemas-app/")] },
    ],
    faq: [
      { question: "Por que o Chromecast não aparece na app IPTV?", answer: "Normalmente os dispositivos não estão na mesma rede, existe isolamento no router ou falta permissão de rede local." },
      { question: "Espelhar o ecrã é igual a transmitir?", answer: "Não. Casting envia conteúdo compatível ao dispositivo; espelhamento replica o ecrã e pode ter mais atraso." },
    ],
  },
  "/blog/comando-nao-funciona-app-iptv/": {
    sections: [
      { heading: "O problema pode estar no foco, não no comando", paragraphs: ["Se volume e início funcionam mas os menus da app não respondem, a aplicação pode ter interface pensada para toque. Testa setas, voltar e OK noutras apps antes de culpar o hardware.", "Fecha e reabre o player. Um elemento invisível ou janela bloqueada pode prender o foco depois de uma atualização."], links: [l("Escolher uma app IPTV", "/blog/como-escolher-uma-app-iptv/"), l("Problemas com a app", "/suporte/problemas-app/")] },
      { heading: "Pilhas, emparelhamento e Bluetooth", paragraphs: ["Troca pilhas e volta a emparelhar conforme o sistema. Comandos Bluetooth podem controlar energia por infravermelhos e ainda assim perder ligação para navegação.", "Remove obstáculos apenas quando o comando usa infravermelhos. Não assumes que todos os botões usam a mesma tecnologia."], links: [l("Dispositivos IPTV", "/dispositivos/")] },
      { heading: "Mapeamento de teclas e acessibilidade", paragraphs: ["Evita remapeadores desconhecidos com permissões amplas. Procura primeiro definições da app, modo TV ou interface para comando.", "Num telemóvel usado como comando, confirma mesma rede e permissões. Mantém uma forma alternativa de navegação antes de alterar definições."], links: [l("Segurança nas apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Quando escolher outra interface", paragraphs: ["Uma app que exige rato numa televisão pode funcionar tecnicamente, mas não oferece boa experiência diária. Compara uma versão concebida para TV.", "Se apenas uma tecla falha em todas as apps, o comando pode precisar de substituição. Se falha só no player, reúne versão e modelo para suporte."], links: [l("Melhor app para Smart TV", "/blog/melhor-app-iptv-smart-tv/"), l("Suporte", "/suporte/")] },
    ],
    faq: [
      { question: "Por que o comando funciona na TV mas não na app IPTV?", answer: "A app pode ter perdido foco, não suportar navegação por comando ou usar uma interface concebida para toque." },
      { question: "Preciso de um air mouse?", answer: "Só se a aplicação exigir ponteiro. Preferir uma app nativa para TV costuma ser mais simples." },
    ],
  },
  "/blog/iptv-desliga-a-cada-minutos/": {
    sections: [
      { heading: "A periodicidade é uma pista", paragraphs: ["Uma interrupção sempre ao mesmo intervalo sugere sessão, suspensão, poupança de energia ou renovação de acesso. Falhas aleatórias apontam mais para rede, temperatura ou fonte.", "Cronometra três ocorrências e regista se a app fecha, volta ao menu ou apenas congela. A diferença muda o diagnóstico."], links: [l("IPTV não funciona", "/suporte/iptv-nao-funciona/"), l("App fecha sozinha", "/blog/app-iptv-fecha-sozinha/")] },
      { heading: "Energia e suspensão do dispositivo", paragraphs: ["Desativa temporariamente suspensão automática e poupança agressiva para testar. Em sticks, usa o adaptador recomendado em vez de uma porta USB fraca da televisão.", "Se o equipamento reinicia, verifica calor e alimentação antes de alterar a playlist."], links: [l("Problemas no Firestick", "/suporte/problemas-firestick/"), l("Firestick sem espaço", "/blog/firestick-armazenamento-cheio/")] },
      { heading: "Rede, DHCP e mudança entre nós", paragraphs: ["Observa se outros dispositivos perdem ligação ao mesmo tempo. Renova o router, testa Ethernet e, em Mesh, confirma transições entre pontos.", "Uma VPN ou firewall pode encerrar ligações inativas. Testa uma variável de cada vez e repõe a proteção depois."], links: [l("Mesh Wi-Fi", "/blog/mesh-wifi-para-iptv/"), l("Latência vs buffering", "/blog/latencia-iptv-vs-buffering/")] },
      { heading: "Sessão e ligações simultâneas", paragraphs: ["Se outra pessoa inicia reprodução quando a tua para, confirma o número de ligações permitido. Compatibilidade com vários equipamentos não significa simultaneidade.", "Contacta suporte com intervalo, dispositivo, app e testes, sem enviar credenciais."], links: [l("Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/"), l("Ver planos", "/precos/")] },
    ],
    faq: [
      { question: "Por que o IPTV desliga sempre após alguns minutos?", answer: "Pode existir suspensão, alimentação insuficiente, limite de sessão, ligação simultânea, rede ou aquecimento." },
      { question: "Cronometrar a falha ajuda?", answer: "Sim. Um intervalo regular distingue políticas e sessões de oscilações aleatórias." },
    ],
  },
  "/blog/favoritos-iptv-desapareceram/": {
    sections: [
      { heading: "Descobre onde os favoritos eram guardados", paragraphs: ["Algumas aplicações guardam favoritos apenas no dispositivo; outras sincronizam com conta ou perfil. Reinstalar, limpar dados ou trocar de perfil pode mostrar uma lista vazia sem que o serviço tenha mudado.", "Confirma perfil, utilizador e dispositivo antes de criar tudo novamente."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/"), l("Limpar cache", "/blog/como-limpar-cache-app-iptv/")] },
      { heading: "Atualização da lista e mudança de identificadores", paragraphs: ["Quando nomes ou IDs de canais mudam, a app pode perder a associação do favorito. Atualiza a fonte e procura o canal pelo nome antes de concluir que foi removido.", "Evita apagar a playlist enquanto investigas. Uma nova importação pode criar duplicados."], links: [l("M3U vs Xtream Codes", "/blog/m3u-vs-xtream-codes/"), l("Lista M3U não carrega", "/blog/lista-m3u-nao-carrega/")] },
      { heading: "Backup e migração", paragraphs: ["Se o player oferece exportação, guarda o ficheiro localmente e protege-o se contiver configuração. Nem todos os backups são compatíveis entre versões ou sistemas.", "Ao mudar de televisão, confirma se a licença e dados podem ser transferidos; o pagamento da app e o serviço podem ser separados."], links: [l("Apps IPTV", "/apps/"), l("Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/")] },
      { heading: "Reconstruir de forma mais resistente", paragraphs: ["Cria grupos pequenos por utilização, não centenas de favoritos. Regista apenas organização, nunca passwords em notas públicas.", "Se os favoritos desaparecem após cada reinício, verifica armazenamento, permissões e suporte da aplicação."], links: [l("Problemas com a app", "/suporte/problemas-app/"), l("Segurança", "/blog/seguranca-apps-iptv/")] },
    ],
    faq: [
      { question: "Limpar dados apaga favoritos?", answer: "Pode apagar favoritos locais, login e definições. Limpar cache normalmente tem impacto menor." },
      { question: "Posso transferir favoritos para outra TV?", answer: "Depende da app e do formato de backup. Confirma compatibilidade antes de mudar." },
    ],
  },
  "/blog/organizar-canais-iptv/": {
    sections: [
      { heading: "Organização começa pela intenção de uso", paragraphs: ["Separa favoritos diários, notícias, desporto, filmes e família em vez de navegar por milhares de entradas. Uma estrutura pequena reduz tempo de procura e erros no comando.", "Antes de editar, percebe se a ordem vem da fonte ou pode ser personalizada no player."], links: [l("O que é EPG", "/blog/o-que-e-epg/"), l("Escolher uma app", "/blog/como-escolher-uma-app-iptv/")] },
      { heading: "Ocultar não é apagar", paragraphs: ["Muitos players permitem ocultar categorias sem modificar a fonte. Esta opção é reversível e mais segura do que eliminar dados.", "Usa PIN para proteger grupos sensíveis quando existem crianças, mas não confies apenas na organização visual."], links: [l("Controlo parental", "/blog/controlo-parental-iptv/")] },
      { heading: "Nomes, logos e duplicados", paragraphs: ["Canais duplicados podem representar regiões, qualidades ou fontes diferentes. Testa antes de ocultar e mantém a opção estável.", "Logos e nomes dependem de metadados. Atualiza a lista e EPG antes de corrigir manualmente dezenas de entradas."], links: [l("EPG com hora errada", "/blog/epg-hora-errada/")] },
      { heading: "Uma rotina que não vira manutenção infinita", paragraphs: ["Revê favoritos mensalmente e depois de grandes atualizações. Evita reorganizar toda a lista sempre que uma entrada muda.", "Se a app não guarda alterações, verifica espaço e permissões ou escolhe um player com gestão adequada."], links: [l("Favoritos desapareceram", "/blog/favoritos-iptv-desapareceram/"), l("Ver aplicações", "/apps/")] },
    ],
    faq: [
      { question: "É possível ordenar canais IPTV?", answer: "Depende do player. Muitos permitem favoritos, grupos e categorias ocultas sem alterar a fonte." },
      { question: "Por que existem canais duplicados?", answer: "Podem ser versões regionais, qualidades ou fontes diferentes. Testa antes de ocultar." },
    ],
  },
  "/blog/vpn-deixa-iptv-lento/": {
    sections: [
      { heading: "Uma VPN acrescenta caminho e processamento", paragraphs: ["O tráfego passa por um servidor adicional e é cifrado. Distância, carga, protocolo e capacidade do dispositivo podem reduzir velocidade ou aumentar latência.", "Isto não significa que toda VPN seja lenta; significa que o efeito deve ser medido no cenário real."], links: [l("VPN para IPTV", "/blog/vpn-para-iptv/"), l("Latência vs buffering", "/blog/latencia-iptv-vs-buffering/")] },
      { heading: "Testa com e sem VPN de forma comparável", paragraphs: ["Usa o mesmo dispositivo, conteúdo, qualidade e horário. Escolhe um servidor próximo e mede arranque, interrupções e atraso, não apenas Mbps.", "Se desligar a VPN resolve, muda servidor ou protocolo antes de culpar a aplicação."], links: [l("Testar estabilidade", "/blog/testar-estabilidade-iptv/")] },
      { heading: "O dispositivo pode ser o limite", paragraphs: ["Routers e boxes antigos podem ter pouca capacidade para cifrar tráfego. Uma VPN instalada no router afeta vários equipamentos; instalada na app afeta apenas um.", "Observa CPU, temperatura e outras utilizações. Não aumentes complexidade sem uma necessidade clara de privacidade."], links: [l("Router para IPTV", "/blog/router-para-iptv/"), l("Escolher box", "/blog/como-escolher-box-iptv/")] },
      { heading: "Privacidade não altera direitos de acesso", paragraphs: ["VPN não torna legal um conteúdo não autorizado nem garante contornar restrições. Respeita termos, localização e licenças.", "Escolhe fornecedor transparente e evita VPNs gratuitas sem modelo de negócio compreensível."], links: [l("Legalidade IPTV", "/legalidade/"), l("Segurança nas apps", "/blog/seguranca-apps-iptv/")] },
    ],
    faq: [
      { question: "Por que a VPN deixa IPTV lento?", answer: "A VPN acrescenta cifragem e um servidor ao percurso. Distância, carga, protocolo e hardware influenciam." },
      { question: "Qual servidor VPN escolher?", answer: "Normalmente um servidor próximo e pouco carregado, respeitando termos e direitos de acesso." },
    ],
  },
  "/blog/erro-de-rede-iptv/": {
    sections: [
      { heading: "Erro de rede é uma categoria, não um diagnóstico", paragraphs: ["A mensagem pode representar ausência de Internet, DNS, timeout, certificado, firewall ou servidor inacessível. Regista o texto exato e o momento.", "Confirma se outras apps funcionam no mesmo dispositivo. Navegar no telemóvel não prova que a televisão tem ligação."], links: [l("IPTV não funciona", "/suporte/iptv-nao-funciona/"), l("Canais não carregam", "/suporte/canais-nao-carregam/")] },
      { heading: "Reinício na ordem certa", paragraphs: ["Fecha a app, reinicia dispositivo e depois router se outros serviços também falham. Aguarda a ligação estabilizar antes de abrir novamente.", "Evita repor o router de fábrica; isso remove configurações e raramente é o primeiro passo adequado."], links: [l("Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/")] },
      { heading: "Data, DNS e certificados", paragraphs: ["Data errada pode invalidar certificados. Ativa hora automática e atualiza o sistema. Se apenas um domínio falha, não alteres DNS sem compreender o impacto.", "VPN, controlo parental e firewall também podem bloquear ligações. Testa temporariamente uma variável e repõe a proteção depois."], links: [l("Segurança das apps", "/blog/seguranca-apps-iptv/"), l("VPN deixa IPTV lento", "/blog/vpn-deixa-iptv-lento/")] },
      { heading: "Quando a falha está fora de casa", paragraphs: ["Se vários dispositivos e redes falham com a mesma mensagem, reúne evidência e contacta suporte. Não envies passwords ou URLs completas.", "Informa horário, app, dispositivo, operador de Internet e testes realizados para reduzir respostas genéricas."], links: [l("Suporte", "/suporte/"), l("Erro de credenciais", "/suporte/erro-credenciais/")] },
    ],
    faq: [
      { question: "O que significa erro de rede no IPTV?", answer: "Pode indicar Internet ausente, timeout, DNS, certificado, firewall ou indisponibilidade do destino." },
      { question: "Devo repor o router?", answer: "Não como primeiro passo. Reinicia normalmente e testa ligação, data e outras apps." },
    ],
  },
  "/blog/atualizar-app-iptv-seguranca/": {
    sections: [
      { heading: "Atualizar é segurança — se a origem for correta", paragraphs: ["Prefere a loja oficial ou o site verificado do programador. Mensagens com APK, links encurtados ou instruções para desativar proteção merecem cautela.", "Confirma nome do programador e versão instalada. Apps com nomes semelhantes podem não ter o mesmo proprietário."], links: [l("Segurança nas apps", "/blog/seguranca-apps-iptv/"), l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Prepara uma atualização reversível", paragraphs: ["Regista versão, favoritos e definições sem copiar credenciais para locais inseguros. Em casa com vários dispositivos, atualiza primeiro um equipamento secundário.", "Lê notas da versão quando existem e confirma requisitos mínimos. Uma atualização pode deixar de suportar sistemas antigos."], links: [l("Favoritos desapareceram", "/blog/favoritos-iptv-desapareceram/"), l("IPTV numa TV antiga", "/blog/iptv-televisao-antiga/")] },
      { heading: "Depois da instalação", paragraphs: ["Abre menus, EPG, favoritos e reprodução antes de replicar nos restantes ecrãs. Revê permissões: uma atualização não deve justificar acesso a contactos ou microfone sem função clara.", "Se a app fecha, limpa cache e reinicia antes de apagar dados. Guarda a versão que falhou para o suporte."], links: [l("App fecha sozinha", "/blog/app-iptv-fecha-sozinha/"), l("Limpar cache", "/blog/como-limpar-cache-app-iptv/")] },
      { heading: "Quando adiar faz sentido", paragraphs: ["Se a atualização não vem da origem habitual ou exige permissões inexplicáveis, pausa e verifica. Adiar algumas horas para confirmar é diferente de ignorar correções indefinidamente.", "Remove aplicações abandonadas e considera uma alternativa mantida quando já não existem atualizações de segurança."], links: [l("Melhor app para Smart TV", "/blog/melhor-app-iptv-smart-tv/"), l("Ver apps", "/apps/")] },
    ],
    faq: [
      { question: "É seguro atualizar uma app IPTV por APK?", answer: "Só com origem e integridade verificáveis. A loja oficial é preferível quando disponível." },
      { question: "Uma atualização pode apagar favoritos?", answer: "Normalmente não, mas migrações falham. Usa backup quando a app oferece essa opção." },
    ],
  },
  "/blog/iptv-varios-ecras-simultaneo/": {
    sections: [
      { heading: "Instalado em vários dispositivos não significa simultâneo", paragraphs: ["Uma conta pode estar configurada em várias televisões e permitir apenas uma reprodução de cada vez. Confirma o número de ligações do plano antes de organizar a casa.", "Quando uma segunda reprodução interrompe a primeira, não assumes que é falha de rede: pode ser uma regra de sessão."], links: [l("IPTV em vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/"), l("Subscrição IPTV", "/subscricao-iptv/")] },
      { heading: "Calcula rede pelo pior horário", paragraphs: ["Soma streams ativos, videochamadas, jogos e backups no horário de pico. Cada ecrã recebe dados próprios; a velocidade não é partilhada como um único vídeo.", "Reserva margem e liga equipamentos fixos por Ethernet quando possível."], links: [l("Velocidade de Internet", "/guias/velocidade-internet-iptv/"), l("Quanto consome IPTV", "/blog/quanto-consome-iptv/")] },
      { heading: "Perfis, favoritos e controlo parental", paragraphs: ["Cria perfis por pessoa quando a app permite, com favoritos e PIN adequados. Isto organiza uso, mas não aumenta o número de ligações autorizadas.", "Evita partilhar a password principal com todos os dispositivos se existem perfis ou códigos separados."], links: [l("Controlo parental", "/blog/controlo-parental-iptv/"), l("Organizar canais", "/blog/organizar-canais-iptv/")] },
      { heading: "Escolher o plano sem pagar por excesso", paragraphs: ["Mapeia quantos ecrãs realmente funcionam ao mesmo tempo, não quantos existem na casa. Um plano maior só tem valor quando corresponde ao uso.", "Confirma condições, localização e suporte antes do pagamento. Pede esclarecimento sobre simultaneidade em linguagem direta."], links: [l("Preços e planos", "/precos/"), l("Contacto", "/contacto/")] },
    ],
    faq: [
      { question: "Posso ver IPTV em vários ecrãs ao mesmo tempo?", answer: "Só quando o plano permite o número correspondente de ligações simultâneas." },
      { question: "Dois ecrãs consomem o dobro de Internet?", answer: "Aproximadamente, se reproduzem a mesma qualidade e bitrate, porque cada stream transfere dados próprios." },
    ],
  },
};
