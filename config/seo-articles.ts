import type { ContentSection, FAQEntry } from "@/config/content";

type SeoArticle = { sections: ContentSection[]; faq: FAQEntry[] };
const l = (label: string, href: string) => ({ label, href });

export const seoArticles: Record<string, SeoArticle> = {
  "/blog/como-escolher-box-iptv/": {
    sections: [
      { heading: "Começa pelo sistema, não pela publicidade", paragraphs: ["Uma box IPTV é, antes de tudo, um pequeno computador ligado à televisão. O sistema operativo determina as aplicações disponíveis, a frequência das atualizações e a facilidade de configuração. Android TV e Google TV oferecem uma loja de apps pensada para televisão; equipamentos genéricos com Android adaptado podem ter mais liberdade, mas também interfaces e atualizações menos previsíveis.", "Antes de comparar preços, confirma o nome exato do sistema, a versão instalada e durante quanto tempo o fabricante promete atualizações. Uma box rápida hoje pode tornar-se um risco se deixar de receber correções de segurança."], links: [l("IPTV no Android TV", "/dispositivos/iptv-android-tv/"), l("Aplicações IPTV", "/apps/")] },
      { heading: "Memória, armazenamento e codecs", paragraphs: ["Para navegação fluida, procura memória suficiente para manter a aplicação ativa sem fechar processos em segundo plano. O armazenamento serve sobretudo para apps e cache; números elevados não compensam um processador lento ou software mal otimizado.", "Confirma suporte de hardware para H.264, H.265/HEVC, HDR e a resolução real da televisão. A etiqueta 4K na caixa não garante reprodução consistente: o processador, o codec, a porta HDMI e a aplicação precisam de trabalhar em conjunto."], links: [l("Entender IPTV em 4K", "/blog/iptv-4k-hdr-codecs/")] },
      { heading: "Rede e ligações físicas", paragraphs: ["Ethernet é útil quando a box fica perto do router; Wi-Fi de 5 GHz ou Wi-Fi 6 pode funcionar bem com sinal forte. Verifica também Bluetooth para comando ou auscultadores, USB para acessórios e HDMI compatível com a resolução pretendida.", "Evita decidir apenas por um teste de velocidade. Estabilidade, interferência e distância ao router influenciam mais a reprodução do que um pico de Mbps medido durante alguns segundos."], links: [l("Wi-Fi ou Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/")] },
      { heading: "Checklist de compra", paragraphs: ["Confirma certificação do sistema, política de atualizações, comando incluído, devolução, garantia e reputação do vendedor. Depois verifica se a app escolhida existe na loja oficial do dispositivo.", "Uma boa box não corrige um serviço instável nem uma rede doméstica mal configurada. Compra o hardware para resolver uma necessidade concreta: compatibilidade, desempenho, portas ou experiência de utilização."], links: [l("Checklist de subscrição", "/blog/checklist-antes-de-subscrever-iptv/"), l("Ver dispositivos", "/dispositivos/")] },
    ],
    faq: [{ question: "Quanta RAM é necessária numa box IPTV?", answer: "Depende do sistema e das apps. Compara modelos certificados e testes reais; mais RAM não compensa software fraco ou falta de atualizações." }, { question: "Ethernet é obrigatório?", answer: "Não, mas pode oferecer maior previsibilidade. Wi-Fi moderno funciona bem quando o sinal é forte e há pouca interferência." }],
  },
  "/blog/iptv-wifi-ou-cabo-ethernet/": {
    sections: [
      { heading: "Ethernet ganha em previsibilidade", paragraphs: ["Um cabo Ethernet cria uma ligação dedicada entre o router e o dispositivo. Normalmente sofre menos com paredes, redes vizinhas e aparelhos domésticos, por isso tende a manter latência e débito mais estáveis ao longo de uma emissão.", "Não precisas da velocidade máxima da porta para streaming. O valor real está na consistência: menos oscilações quando outras pessoas usam a rede."], links: [l("Guia de velocidade", "/guias/velocidade-internet-iptv/")] },
      { heading: "Quando o Wi-Fi é suficiente", paragraphs: ["Wi-Fi é a opção prática para televisões sem porta de rede ou divisões onde passar cabo não é viável. A banda de 5 GHz oferece mais capacidade a curta distância; 2,4 GHz alcança mais longe, mas costuma estar mais congestionada.", "Coloca o router numa posição aberta, evita escondê-lo atrás da televisão e compara o comportamento no local onde o equipamento será usado. Um teste junto ao router não representa a sala real."], links: [l("Resolver buffering", "/suporte/buffering/")] },
      { heading: "Um teste que produz respostas", paragraphs: ["Reproduz o mesmo conteúdo no mesmo dispositivo durante vários minutos. Testa primeiro por Wi-Fi e depois por cabo, sem mudar outras definições. Observa arranque, interrupções e recuperação — não apenas Mbps.", "Se o cabo resolver o problema, investiga cobertura ou interferência. Se não houver diferença, verifica aplicação, dispositivo e fonte antes de comprar repetidores."], links: [l("Causas de buffering", "/blog/iptv-buffering-causas/"), l("IPTV não funciona", "/suporte/iptv-nao-funciona/")] },
      { heading: "Melhorar sem complicar", paragraphs: ["Atualiza o router, separa equipamentos muito antigos quando possível e usa canais menos congestionados. Numa casa grande, um sistema mesh com backhaul adequado costuma ser mais previsível do que vários repetidores em cadeia.", "A escolha final é simples: usa Ethernet onde é fácil e Wi-Fi onde a flexibilidade importa, validando sempre no ambiente real."], links: [l("Organizar vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/")] },
    ],
    faq: [{ question: "Wi-Fi 5 GHz é sempre melhor?", answer: "É geralmente mais rápido a curta distância, mas perde sinal mais depressa através de paredes. Testa no local de utilização." }, { question: "Um cabo elimina todo o buffering?", answer: "Não. Elimina variáveis da rede sem fios, mas a aplicação, o dispositivo ou a fonte também podem causar interrupções." }],
  },
  "/blog/vpn-para-iptv/": {
    sections: [
      { heading: "O que uma VPN realmente muda", paragraphs: ["Uma VPN cria um túnel cifrado entre o dispositivo e um servidor do fornecedor de VPN. O operador da rede vê a ligação ao servidor, enquanto o destino final vê o endereço desse servidor. Isto pode melhorar privacidade em redes partilhadas, mas não transforma um serviço não autorizado num serviço legal.", "A VPN também acrescenta distância e processamento. Dependendo do servidor, protocolo e equipamento, pode reduzir velocidade ou aumentar latência."], links: [l("Legalidade do IPTV", "/guias/iptv-e-legal-em-portugal/"), l("Política de privacidade", "/politica-privacidade/")] },
      { heading: "Situações em que pode fazer sentido", paragraphs: ["Em Wi-Fi público, uma VPN reputada reduz a exposição do tráfego a outros utilizadores da mesma rede. Também pode ser útil quando precisas de uma camada consistente de privacidade entre vários dispositivos.", "Escolhe um fornecedor com política clara, aplicações atualizadas, suporte para o teu sistema e informação transparente sobre registos. Uma VPN gratuita sem modelo de negócio compreensível pode trocar custo zero por recolha de dados."], links: [l("Segurança das apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Quando não resolve o problema", paragraphs: ["Uma VPN não corrige Wi-Fi fraco, pouca memória, uma app desatualizada ou uma fonte indisponível. Se a reprodução falha, testa primeiro sem mudar várias variáveis ao mesmo tempo.", "Também não deve ser usada para contornar direitos territoriais ou termos do serviço. A disponibilidade de conteúdo depende de licenças, localização e condições contratuais."], links: [l("Diagnóstico de buffering", "/guias/iptv-buffering/"), l("Usar fora de casa", "/blog/usar-iptv-fora-de-casa/")] },
      { heading: "Como testar com rigor", paragraphs: ["Mede a experiência com e sem VPN no mesmo dispositivo, horário e conteúdo. Escolhe um servidor próximo, verifica perdas de velocidade e confirma se a aplicação continua estável.", "Se a VPN piorar a reprodução, não aumentes complexidade sem benefício claro. Privacidade é uma decisão de risco; desempenho é uma medição."], links: [l("Suporte IPTV", "/suporte/")] },
    ],
    faq: [{ question: "Preciso de VPN para usar IPTV?", answer: "Não por definição. A necessidade depende da rede, da privacidade pretendida e dos termos legais do conteúdo e do serviço." }, { question: "Uma VPN aumenta a velocidade?", answer: "Normalmente acrescenta processamento e pode reduzi-la. Em casos específicos o percurso pode mudar, mas isso deve ser testado, não assumido." }],
  },
  "/blog/checklist-antes-de-subscrever-iptv/": {
    sections: [
      { heading: "Confirma a oferta em linguagem concreta", paragraphs: ["Antes de pagar, pede duração, preço total, renovação, número de ligações simultâneas e método de ativação. Expressões como premium ou sem falhas não substituem condições verificáveis.", "Guarda a descrição da oferta e confirma se impostos, taxas, teste e reembolso estão explicados. Se os termos mudam entre página e conversa, pede clarificação por escrito."], links: [l("Planos e preços", "/precos/"), l("Como comprar", "/comprar-iptv/")] },
      { heading: "Valida dispositivo e aplicação", paragraphs: ["Indica o modelo exato da televisão, box ou telemóvel. Compatível com Smart TV é demasiado amplo: Samsung, LG, Android TV e outros sistemas usam lojas e formatos diferentes.", "Confirma a app, a origem da instalação e o formato de acesso. Evita fornecer acesso remoto ao equipamento ou instalar ficheiros de origem desconhecida apenas para acelerar a configuração."], links: [l("Dispositivos", "/dispositivos/"), l("Como escolher uma app", "/blog/como-escolher-uma-app-iptv/")] },
      { heading: "Avalia suporte e transparência", paragraphs: ["Testa o canal de suporte com uma pergunta específica antes da compra. Repara se a resposta esclarece ou apenas pressiona para pagar. Um contacto rápido é útil, mas qualidade significa explicar limites e próximos passos.", "Procura identidade comercial, páginas legais, privacidade e política de reembolso coerentes. Avaliações ajudam, mas não substituem termos claros."], links: [l("Contacto", "/contacto/"), l("Legalidade", "/legalidade/")] },
      { heading: "Decide com um teste controlado", paragraphs: ["Se existir teste legítimo, usa-o no dispositivo e horário reais. Verifica navegação, arranque, qualidade, EPG e suporte — sem partilhar credenciais.", "Compara pelo custo total e adequação, não pelo maior número anunciado de canais. Uma lista enorme sem organização, suporte ou direitos claros pode ter menos valor."], links: [l("Comparar IPTV", "/comparar/como-escolher-iptv-portugal/"), l("Falar com a equipa", "/contacto/")] },
    ],
    faq: [{ question: "Qual é a pergunta mais importante antes de pagar?", answer: "Confirma exatamente o que recebes: duração, preço total, ligações, dispositivo, app, suporte e condições de cancelamento ou reembolso." }, { question: "Mais canais significa melhor serviço?", answer: "Não necessariamente. Organização, estabilidade, suporte, transparência e adequação ao teu uso são critérios mais úteis." }],
  },
  "/blog/seguranca-apps-iptv/": {
    sections: [
      { heading: "Instala a partir de uma origem verificável", paragraphs: ["Prefere lojas oficiais do sistema e confirma o nome do programador. Apps com nomes semelhantes podem ter proprietários, permissões e políticas muito diferentes.", "Se uma instalação exige ficheiro externo, valida a origem, assinatura e necessidade. Não desatives proteções do dispositivo de forma permanente."], links: [l("Aplicações IPTV", "/apps/")] },
      { heading: "Revê permissões e dados", paragraphs: ["Uma aplicação de reprodução normalmente não precisa de contactos, microfone ou localização precisa. Revê permissões depois da instalação e remove as que não sejam necessárias para a função prometida.", "Trata URLs, utilizadores e palavras-passe como credenciais. Não publiques capturas que as mostrem e não reutilizes a mesma password noutros serviços."], links: [l("Política de privacidade", "/politica-privacidade/"), l("Erro de credenciais", "/suporte/erro-credenciais/")] },
      { heading: "Atualizações também são segurança", paragraphs: ["Mantém sistema e aplicação atualizados a partir da mesma origem confiável. Atualizações corrigem falhas, mas uma atualização inesperada fora da loja pode ser um risco.", "Remove apps abandonadas, limpa sessões em dispositivos vendidos e altera credenciais se suspeitares de exposição."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Sinais para parar", paragraphs: ["Pedidos de acesso remoto sem explicação, certificados desconhecidos, pagamentos sem registo, permissões excessivas ou instruções para ignorar alertas merecem pausa.", "Quando precisares de suporte, descreve o erro sem enviar credenciais completas. Uma equipa responsável consegue começar o diagnóstico com dispositivo, versão e mensagem de erro."], links: [l("Centro de suporte", "/suporte/"), l("Contactar", "/contacto/")] },
    ],
    faq: [{ question: "Posso enviar uma captura da app ao suporte?", answer: "Sim, desde que tapes utilizador, password, URLs pessoais, códigos e dados de pagamento." }, { question: "Todas as apps fora da loja são perigosas?", answer: "Não, mas exigem validação adicional da origem, integridade, atualizações e permissões." }],
  },
  "/blog/iptv-varios-dispositivos-em-casa/": {
    sections: [
      { heading: "Compatibilidade não é simultaneidade", paragraphs: ["Um serviço pode funcionar em muitos tipos de equipamento e, ainda assim, permitir apenas uma reprodução de cada vez. Confirma o número de ligações simultâneas antes de planear a utilização familiar.", "Instalar a app em três televisões não significa que o plano autorize três streams. Esta distinção evita bloqueios e expectativas erradas."], links: [l("Subscrição IPTV", "/subscricao-iptv/"), l("Dispositivos", "/dispositivos/")] },
      { heading: "Mapeia a casa", paragraphs: ["Lista quem vê, em que divisão, em que horários e com que equipamento. Um televisor principal pode beneficiar de Ethernet; tablets e telemóveis precisam de boa cobertura Wi-Fi.", "Cria nomes claros para perfis e favoritos. Se a app suportar controlo parental, define um PIN diferente da password de acesso."], links: [l("Wi-Fi ou cabo", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Controlo parental", "/blog/controlo-parental-iptv/")] },
      { heading: "Dimensiona a rede pelo pico", paragraphs: ["Duas reproduções em simultâneo, videochamadas e jogos partilham a ligação. Planeia para o horário mais exigente, não para um teste feito com a casa vazia.", "Prioriza estabilidade e cobertura. Um router bem colocado e ligações por cabo nos pontos fixos costumam melhorar mais do que aumentar apenas a velocidade contratada."], links: [l("Velocidade necessária", "/guias/velocidade-internet-iptv/")] },
      { heading: "Mantém suporte simples", paragraphs: ["Regista dispositivo, app e versão de cada ecrã. Quando surge uma falha, testa se é isolada ou geral antes de reinstalar tudo.", "Atualiza um dispositivo de cada vez quando possível. Assim consegues identificar se uma nova versão introduziu o problema."], links: [l("IPTV não funciona", "/suporte/iptv-nao-funciona/"), l("Manutenção", "/blog/manutencao-app-iptv/")] },
    ],
    faq: [{ question: "Posso usar o mesmo acesso em vários dispositivos?", answer: "Só se as condições do plano permitirem. Compatibilidade com vários equipamentos não garante ligações simultâneas." }, { question: "Como evitar sobrecarregar o Wi-Fi?", answer: "Liga equipamentos fixos por Ethernet quando possível, melhora a cobertura e testa a casa nos horários de maior utilização." }],
  },
  "/blog/iptv-4k-hdr-codecs/": {
    sections: [
      { heading: "4K descreve resolução, não qualidade total", paragraphs: ["4K indica aproximadamente 3840 por 2160 píxeis, mas a imagem também depende de bitrate, compressão, movimento e fonte. Um stream com resolução elevada e compressão agressiva pode parecer pior do que Full HD bem codificado.", "Avalia detalhe em movimento, gradações e estabilidade, não apenas o selo 4K."], links: [l("Filmes e séries", "/canais/filmes-series/")] },
      { heading: "HDR precisa de uma cadeia compatível", paragraphs: ["HDR aumenta gama de brilho e cor quando conteúdo, app, dispositivo, cabo HDMI e televisão suportam o mesmo formato. Se uma etapa falhar, as cores podem parecer lavadas ou o modo HDR não ativar.", "Confirma HDR10, Dolby Vision ou HLG conforme o equipamento. Não assumes que todos os conteúdos 4K são HDR."], links: [l("Escolher box IPTV", "/blog/como-escolher-box-iptv/")] },
      { heading: "Codecs reduzem dados", paragraphs: ["H.264 é amplamente compatível; H.265/HEVC consegue qualidade semelhante com menos bitrate, mas exige descodificação compatível. AV1 é mais recente e eficiente, porém ainda não existe em todos os dispositivos.", "Quando o processador não descodifica por hardware, pode aquecer, perder frames ou reduzir resolução."], links: [l("Apps IPTV", "/apps/")] },
      { heading: "O teste útil", paragraphs: ["Confirma resolução de saída, modo HDR, codec e ligação. Reproduz conteúdo conhecido e observa movimento, áudio e sincronização durante vários minutos.", "Se 4K falhar, testa cabo, porta HDMI, configuração de imagem e rede separadamente. Reduzir temporariamente a resolução ajuda a localizar o limite."], links: [l("Resolver buffering", "/suporte/buffering/"), l("Velocidade de Internet", "/guias/velocidade-internet-iptv/")] },
    ],
    faq: [{ question: "4K precisa sempre de mais Internet?", answer: "Geralmente sim, mas o bitrate varia com codec e compressão. Estabilidade continua tão importante como velocidade." }, { question: "4K e HDR são a mesma coisa?", answer: "Não. 4K é resolução; HDR trata gama de brilho e cor. Podem existir separadamente." }],
  },
  "/blog/controlo-parental-iptv/": {
    sections: [
      { heading: "Começa pela estrutura da família", paragraphs: ["Define quem usa cada dispositivo, que idades existem e em que horários. A melhor configuração combina ferramentas técnicas com regras claras, porque um PIN isolado não substitui supervisão.", "Se a app suportar perfis, cria um perfil infantil com categorias limitadas e favoritos adequados."], links: [l("Vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/")] },
      { heading: "Usa PIN e contas separados", paragraphs: ["Escolhe um PIN que as crianças não consigam adivinhar e que não seja igual ao código de desbloqueio do telemóvel. Protege alterações de definições, compras e categorias sensíveis quando essas opções existem.", "Em Android TV, Apple TV ou Fire TV, combina os controlos da app com os do sistema operativo e da loja."], links: [l("Fire TV Stick", "/dispositivos/iptv-firestick/"), l("Apple TV", "/dispositivos/iptv-apple-tv/")] },
      { heading: "Organização reduz exposição acidental", paragraphs: ["Remove categorias desnecessárias da página inicial, organiza favoritos e desativa reprodução automática quando possível. Um ambiente simples facilita a escolha e reduz entradas acidentais.", "Revê histórico e recomendações periodicamente, sobretudo depois de atualizações que podem repor definições."], links: [l("Manutenção da app", "/blog/manutencao-app-iptv/")] },
      { heading: "Conversa e revisão", paragraphs: ["Explica às crianças como pedir ajuda se aparecer conteúdo inadequado e por que não devem partilhar dados ou clicar em mensagens externas.", "Testa os controlos a partir do perfil infantil, não apenas no menu de configuração. Repete o teste depois de trocar de dispositivo ou app."], links: [l("Segurança das apps", "/blog/seguranca-apps-iptv/")] },
    ],
    faq: [{ question: "O controlo parental da app é suficiente?", answer: "Nem sempre. Combina-o com controlos do dispositivo, perfis separados e supervisão adequada à idade." }, { question: "Quando devo rever as definições?", answer: "Depois de atualizações, mudanças de dispositivo e periodicamente, porque algumas opções podem ser repostas." }],
  },
  "/blog/usar-iptv-fora-de-casa/": {
    sections: [
      { heading: "Confirma primeiro as condições", paragraphs: ["A utilização fora de casa pode depender do plano, número de ligações, localização e licenças do conteúdo. Confirma os termos antes da viagem em vez de assumir que o acesso doméstico funciona em qualquer país.", "Alguns serviços limitam sessões simultâneas ou alterações frequentes de endereço IP por razões de segurança."], links: [l("Subscrição IPTV", "/subscricao-iptv/"), l("Legalidade", "/legalidade/")] },
      { heading: "Calcula dados móveis", paragraphs: ["Streaming consome dados continuamente e 4K pode esgotar um pacote móvel depressa. Usa as definições de qualidade da app, acompanha o consumo e descarrega conteúdos apenas quando o serviço autoriza essa função.", "Em roaming, confirma limites e custos do operador. Uma ligação rápida não significa dados ilimitados."], links: [l("Velocidade de Internet", "/guias/velocidade-internet-iptv/")] },
      { heading: "Wi-Fi público exige cautela", paragraphs: ["Evita introduzir dados de pagamento ou credenciais sensíveis em redes abertas. Confirma o nome da rede com o estabelecimento e mantém sistema e app atualizados.", "Uma VPN reputada pode melhorar privacidade na rede, mas não altera direitos de acesso nem garante melhor desempenho."], links: [l("VPN para IPTV", "/blog/vpn-para-iptv/"), l("Segurança das apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Prepara antes de sair", paragraphs: ["Atualiza a app em casa, confirma o login, leva adaptadores necessários e guarda o contacto de suporte sem expor passwords. Testa também como terminar sessões num dispositivo emprestado.", "No fim, termina a sessão, remove dados locais e esquece redes públicas. Pequenos passos evitam deixar acesso num televisor de hotel ou equipamento partilhado."], links: [l("Suporte", "/suporte/")] },
    ],
    faq: [{ question: "Posso usar IPTV noutro país?", answer: "Depende das condições do serviço e das licenças geográficas. Confirma antes da viagem." }, { question: "É seguro iniciar sessão numa Smart TV de hotel?", answer: "Só se conseguires terminar a sessão e remover dados. Evita guardar credenciais em equipamentos que não controlas." }],
  },
  "/blog/manutencao-app-iptv/": {
    sections: [
      { heading: "Atualiza com um plano", paragraphs: ["Lê notas da versão quando existirem e atualiza pela loja ou origem oficial. Em casa com vários dispositivos, começa por um equipamento secundário para confirmar que login, reprodução e EPG continuam estáveis.", "Não adies correções de segurança indefinidamente, mas evita instalar ficheiros enviados por mensagens sem validar a origem."], links: [l("Segurança das apps", "/blog/seguranca-apps-iptv/")] },
      { heading: "Cache não é o mesmo que dados", paragraphs: ["Limpar cache remove ficheiros temporários e pode resolver lentidão. Limpar dados normalmente repõe a app e pode apagar perfis, favoritos e configurações.", "Antes de tocar em dados, confirma que tens acesso legítimo às credenciais e regista definições importantes sem as publicar."], links: [l("Problemas com a app", "/suporte/problemas-app/")] },
      { heading: "Liberta recursos", paragraphs: ["Fecha apps pesadas, reinicia o dispositivo e mantém armazenamento livre. Pouco espaço pode impedir atualizações e aumentar falhas, sobretudo em boxes ou sticks compactos.", "Se o dispositivo aquece, melhora ventilação e evita colocá-lo atrás de fontes de calor."], links: [l("Escolher box", "/blog/como-escolher-box-iptv/")] },
      { heading: "Diagnostica antes de reinstalar", paragraphs: ["Regista versão, mensagem de erro e momento da falha. Testa rede e outra app legítima antes de concluir que a instalação está corrompida.", "Reinstala apenas quando existe razão clara. Se o problema afeta vários dispositivos ao mesmo tempo, a causa provavelmente não está numa única app."], links: [l("IPTV não funciona", "/suporte/iptv-nao-funciona/"), l("Suporte", "/suporte/")] },
    ],
    faq: [{ question: "Devo limpar cache regularmente?", answer: "Apenas quando há lentidão ou falhas específicas. Não é necessário fazê-lo diariamente." }, { question: "Limpar dados apaga a conta?", answer: "Pode remover login e configurações locais. Confirma as consequências e guarda o necessário antes de avançar." }],
  },
  "/blog/quanto-consome-iptv/": {
    sections: [
      {
        heading: "O consumo depende da qualidade, não apenas do tempo",
        paragraphs: [
          "O IPTV transfere vídeo continuamente enquanto estás a ver. Por isso, o consumo resulta sobretudo do bitrate — a quantidade de dados enviada por segundo — e não apenas da resolução indicada no ecrã. Dois conteúdos em Full HD podem gastar valores diferentes se usarem compressão, frame rate ou níveis de detalhe distintos.",
          "Como referência prática, uma hora pode representar cerca de 0,7 a 1,5 GB em definição standard, 1,5 a 3 GB em HD, 3 a 7 GB em Full HD e 7 a 16 GB em 4K. Estes intervalos não são uma promessa de consumo: servem para planeamento, porque cada fonte, aplicação e codec pode variar.",
          "A forma mais fiável de conhecer o teu caso é medir no dispositivo real durante uma sessão normal. Observa a qualidade selecionada, o tempo reproduzido e os dados registados pelo router, telemóvel ou sistema operativo."
        ],
        links: [l("IPTV em 4K, HDR e codecs", "/blog/iptv-4k-hdr-codecs/"), l("Velocidade de Internet para IPTV", "/guias/velocidade-internet-iptv/")]
      },
      {
        heading: "Como calcular o consumo por hora e por mês",
        paragraphs: [
          "Para criar uma estimativa mensal, multiplica o consumo médio por hora pelo número de horas diárias e pelos dias de utilização. Se uma sessão Full HD gastar 4 GB por hora e a família assistir duas horas por dia, a estimativa chega a 240 GB em 30 dias. Não confundas este valor com velocidade: gigabytes medem volume transferido; megabits por segundo medem a capacidade instantânea da ligação.",
          "Numa casa com vários ecrãs, calcula cada reprodução em simultâneo. Uma televisão em 4K, outra em HD e um telemóvel não dividem um único stream; cada dispositivo recebe os seus próprios dados. Atualizações, jogos, videochamadas e cópias na cloud também contam para o limite do operador.",
          "Deixa uma margem em vez de planear pelo valor mínimo. O bitrate pode aumentar em cenas com movimento, e algumas aplicações ajustam a qualidade automaticamente quando detetam mais capacidade."
        ],
        links: [l("IPTV em vários dispositivos", "/blog/iptv-varios-dispositivos-em-casa/"), l("Planos e preços IPTV", "/precos/")]
      },
      {
        heading: "Velocidade suficiente não significa dados ilimitados",
        paragraphs: [
          "Uma ligação rápida pode reproduzir 4K com estabilidade e, ao mesmo tempo, ter um plafond mensal reduzido. Antes de usar dados móveis, hotspot ou acesso fixo com limite, confirma quantos gigabytes estão incluídos e o que acontece depois: custo adicional, redução de velocidade ou bloqueio.",
          "Para uma única reprodução, a ligação precisa de sustentar o bitrate com margem. Contudo, um teste de velocidade elevado não elimina interferência no Wi-Fi, perdas de pacotes ou congestionamento. O vídeo pode parar mesmo quando o total de dados disponível é amplo.",
          "Ethernet tende a oferecer maior previsibilidade em equipamentos fixos. No Wi-Fi, testa no local da televisão e no horário habitual, pois paredes, distância e redes vizinhas alteram o resultado."
        ],
        links: [l("Wi-Fi ou cabo Ethernet", "/blog/iptv-wifi-ou-cabo-ethernet/"), l("Resolver buffering", "/suporte/buffering/")]
      },
      {
        heading: "Como medir sem depender de estimativas genéricas",
        paragraphs: [
          "No Android e no iPhone, consulta o consumo por aplicação e repõe a estatística antes do teste. Em routers compatíveis, verifica o tráfego do dispositivo ligado à televisão. Alguns sistemas de Smart TV não apresentam um contador detalhado; nesse caso, o painel do router costuma ser a opção mais útil.",
          "Faz um teste de pelo menos 30 minutos com a qualidade normalmente utilizada. Evita downloads em paralelo, regista o valor inicial e final e multiplica apenas depois de confirmar que a sessão foi representativa. Repete com HD e 4K para perceber o impacto real.",
          "Não uses aplicações desconhecidas que pedem credenciais apenas para calcular consumo. Os dados do sistema, do operador ou do router são suficientes e reduzem o risco de expor informação privada."
        ],
        links: [l("Segurança em apps IPTV", "/blog/seguranca-apps-iptv/"), l("Manutenção da aplicação", "/blog/manutencao-app-iptv/")]
      },
      {
        heading: "Reduzir dados sem destruir a experiência",
        paragraphs: [
          "Começa por escolher uma resolução adequada ao tamanho do ecrã. Num telemóvel, Full HD ou 4K pode aumentar o consumo sem ganho visível à distância normal. Se a aplicação disponibilizar qualidade automática, confirma se ela sobe para o máximo mesmo quando estás a usar dados móveis.",
          "Desativa reprodução automática, pré-visualizações e streams deixados em segundo plano. Quando existe opção autorizada de download, prepara o conteúdo por Wi-Fi. Em viagem, define alertas de consumo no sistema e evita usar hotspot sem acompanhar os restantes dispositivos ligados.",
          "Não forces qualidade baixa se o objetivo é ver desporto num ecrã grande. Ajusta primeiro as situações em que a diferença visual é pequena e preserva margem para os conteúdos em que movimento e detalhe realmente importam."
        ],
        links: [l("Usar IPTV fora de casa", "/blog/usar-iptv-fora-de-casa/"), l("IPTV no telemóvel", "/dispositivos/iptv-telemovel/")]
      },
      {
        heading: "Checklist antes de escolher ligação e plano",
        paragraphs: [
          "Confirma a resolução usada com maior frequência, quantas horas a casa assiste por dia, quantos ecrãs funcionam ao mesmo tempo e se a Internet tem limite. Depois mede uma sessão real e compara a estimativa mensal com a margem disponível.",
          "Se tens buffering, não concluas imediatamente que precisas de mais velocidade. Compara Wi-Fi e Ethernet, testa outro horário e verifica aplicação e dispositivo. Se o problema for o plafond, reduzir a resolução ou mudar a forma de acesso pode ser mais relevante do que aumentar Mbps.",
          "Ao comparar uma subscrição IPTV, valida compatibilidade, ligações simultâneas, suporte e condições comerciais. O consumo de Internet é cobrado pelo teu operador de acesso e deve ser considerado separadamente do preço do serviço."
        ],
        links: [l("Checklist antes de subscrever", "/blog/checklist-antes-de-subscrever-iptv/"), l("Comparar opções IPTV", "/comparar/como-escolher-iptv-portugal/"), l("Ver preços e planos", "/precos/")]
      }
    ],
    faq: [
      { question: "Quantos GB gasta uma hora de IPTV?", answer: "Como orientação, cerca de 0,7–1,5 GB em SD, 1,5–3 GB em HD, 3–7 GB em Full HD e 7–16 GB em 4K. O valor real depende do bitrate, codec, aplicação e conteúdo." },
      { question: "IPTV consome dados quando está em pausa?", answer: "Depende da aplicação. Algumas mantêm uma pequena reserva de vídeo ou continuam a atividade em segundo plano. Fecha a reprodução quando não estiveres a ver." },
      { question: "É possível ver IPTV com dados móveis?", answer: "Sim, se o plano, a cobertura e as condições do serviço permitirem. Controla o plafond, define qualidade adequada e acompanha o consumo no telemóvel." },
      { question: "Mais velocidade reduz o consumo de dados?", answer: "Não necessariamente. Uma ligação mais rápida melhora a capacidade de entrega, mas o volume depende sobretudo do bitrate e do tempo de reprodução." }
    ]
  },
};
