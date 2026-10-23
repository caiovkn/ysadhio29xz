(function () {
  var CHAVE = 'fitocrops-lang';
  var T = {
    en: {
      'meta.ogLocale': 'en_US',
      'skip': 'Skip to main content',
      'nav.open': 'Open menu',
      'nav.close': 'Close menu',
      'nav.label': 'Main',
      'nav.home': 'Home',
      'nav.product': 'Product',
      'nav.about': 'About',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'cta.talk': 'Talk to us',
      'logo.alt': 'Fitocrops Agroscience — home',
      'lang.label': 'Language',
      'map.alt': 'Dotted map with Santa Maria, Brazil marked',
      'hex.alt': 'Module map of the Fitocrops platform',
      'net.alt': 'Field, data, model, and dashboard flow',
      'footer.contact': 'Contact',
      'footer.nav': 'Navigate',
      'footer.company': 'Company',
      'footer.lead': 'Managing partner: Gerson Luis dos Santos Rodrigues Junior',
      'footer.founded': 'Founded 27 June 2025',
      'footer.who': 'About us',
      'footer.legal': 'Fitocrops Agroscience LTDA. Agricultural AI software.',

      'home.title': 'Fitocrops Agroscience | Crop intelligence',
      'intro.skip': 'Skip',
      'home.description': 'Fitocrops is an agricultural AI platform. Field data in, a recommendation out.',
      'home.kicker': 'AI product · Agritech',
      'home.h1': 'Crop intelligence the field can use.',
      'home.lead': 'Fitocrops reads farm data and returns a recommendation on the grower’s dashboard.',
      'home.see': 'See the product',
      'home.plat': 'Platform',
      'home.mods': 'Five modules. One product.',
      'home.modsLead': 'The model is the product. The grower is the user.',
      'home.m1t': 'Field vision',
      'home.m1': 'Images and field readings go in together. The model marks what needs a look this week.',
      'home.m2t': 'Data pipeline',
      'home.m2': 'Ingest, clean, keep a history. Cloud Storage on the way in. BigQuery for the record.',
      'home.m3t': 'Models',
      'home.m3': 'Train and version on Vertex AI. The crop problem sets what the model learns.',
      'home.m4t': 'Inference',
      'home.m4': 'An endpoint the operation can call. Cloud Run or GKE, depending on load.',
      'home.m5t': 'Grower dashboard',
      'home.m5': 'A recommendation on a screen. Not a notebook.',
      'home.flow': 'How a reading moves',
      'home.flowLead': 'Six steps, from the field to the text the operation opens.',
      'home.s1t': 'Field',
      'home.s1': 'An image, a sensor, or a note the farm already keeps.',
      'home.s2t': 'Data',
      'home.s2': 'It lands in the pipeline, versioned, so you can go back to it.',
      'home.s3t': 'Train',
      'home.s3': 'The crop problem becomes a model. Vertex AI holds the version.',
      'home.s4t': 'Infer',
      'home.s4': 'The operation asks. The endpoint answers in that same frame.',
      'home.s5t': 'Recommend',
      'home.s5': 'A line on the dashboard. The grower does not open a notebook.',
      'home.s6t': 'Adjust',
      'home.s6': 'What the field did comes back. The next model starts there.',
      'home.cloudKicker': 'Stack',
      'home.cloud': 'Where the models live.',
      'home.cloudLead': 'Training, storage, and serving sit in one place. Vertex AI, BigQuery, Cloud Storage, Cloud Run.',
      'home.arch': 'Architecture',
      'home.whoBuilds': 'The company',
      'home.who': 'Who it is for',
      'home.whoLead': 'Farms and co-ops that already collect data and still decide by eye.',
      'home.w1t': 'Growers and co-ops',
      'home.w1': 'A recommendation for this season, not an 80-page report.',
      'home.w2t': 'Operations with data',
      'home.w2': 'Images, weather, plots, machines. If the data exists, the pipeline can read it.',
      'home.w3t': 'How we charge',
      'home.w3': 'A subscription to the platform.',
      'home.co': 'Company',
      'home.founded': 'Brazil. Founded 2025.',
      'home.coLead': 'Fitocrops Agroscience LTDA. CNPJ 61.479.389/0001-94. Santa Maria, Rio Grande do Sul. Small company, active.',
      'home.faq': 'Read the FAQ',
      'demo.kicker': 'Product preview',
      'demo.in1': 'Plot 4 · west edge · this week’s images.',
      'demo.out1': 'Stress on the west edge. Look at that strip this week.',
      'demo.in2': 'Weather plus the last spray note.',
      'demo.out2': 'Hold the next pass until the leaf dries. Same model version.',
      'demo.hint': 'A simulation of the recommendation — not a live farm.',
      'fact.l1': 'Modules',
      'fact.l2': 'Steps',
      'fact.l3': 'Founded',

      'prod.title': 'Product | Fitocrops Agroscience',
      'prod.description': 'Fitocrops modules: field vision, data, Vertex AI models, inference, and the grower dashboard.',
      'prod.kicker': 'Product',
      'prod.h1': 'The platform, module by module',
      'prod.lead': 'A software product. A subscription. The model sits in the middle.',
      'prod.vis': 'Vision',
      'prod.dat': 'Data',
      'prod.mod': 'Models',
      'prod.inf': 'Inference',
      'prod.pan': 'Dashboard',
      'prod.arc': 'Architecture',
      'prod.mods': 'Modules',
      'prod.does': 'What it does',
      'prod.gives': 'What you get',
      'prod.v1': 'Field vision',
      'prod.v2': 'Takes an image or a field reading and marks what the operation should look at in this window. It does not replace an agronomist. It covers what one pair of eyes misses.',
      'prod.v3': 'A cut of the plot you sent',
      'prod.v4': 'What the model saw, with the model version',
      'prod.v5': 'What this reading left out',
      'prod.d1': 'Data pipeline',
      'prod.d2': 'Puts images, weather, machines, and handwritten notes into one history. Cloud Storage on intake. BigQuery for the tables.',
      'prod.d3': 'Versioned data, with a source',
      'prod.d4': 'A table ready for the next training run',
      'prod.d5': 'A trail of what came in and what was dropped',
      'prod.o1': 'Models',
      'prod.o2': 'The crop problem becomes an experiment. Train, score, and keep the version on Vertex AI.',
      'prod.o3': 'Model version and the assumptions behind it',
      'prod.o4': 'What the model does not cover',
      'prod.o5': 'A cutoff agreed with the operation',
      'prod.i1': 'Inference',
      'prod.i2': 'An endpoint the operation calls. The answer stays in that frame. Cloud Run or GKE when volume grows.',
      'prod.i3': 'A reply with the model version used',
      'prod.i4': 'A log of the question, for the next pass',
      'prod.i5': 'A clear miss when the data does not fit',
      'prod.p1': 'Grower dashboard',
      'prod.p2': 'The face of the product. Recommendation, history, and the next step. The person in the field does not open a Colab.',
      'prod.p3': 'A screen for the season or the plot you follow',
      'prod.p4': 'A recommendation in the operation’s words',
      'prod.p5': 'How to send the next batch',
      'prod.a1': 'Architecture',
      'prod.a2': 'The stack',
      'prod.a3': 'Models train and serve on Vertex AI. History sits in BigQuery. Raw files go to Cloud Storage. The API runs on Cloud Run.',
      'prod.c1': 'Vertex AI — train and serve',
      'prod.c2': 'BigQuery — history',
      'prod.c3': 'Cloud Storage — raw files',
      'prod.c4': 'Cloud Run — API',
      'prod.c5': 'GKE — when the load asks for it',
      'prod.c6': 'IAM — who can see what',
      'prod.next': 'Want to walk through your operation?',
      'prod.nextLead': 'Tell us the crop and what data you already have.',
      'prod.company': 'The company',

      'about.title': 'About | Fitocrops Agroscience',
      'about.description': 'Fitocrops Agroscience LTDA. Agricultural AI company, founded 2025 in Santa Maria, Brazil.',
      'about.kicker': 'Company',
      'about.h1': 'An AI company. A real one.',
      'about.p1': 'Fitocrops builds software for the field. The model is the product, not a side tool. Founded 27 June 2025 in Santa Maria, Rio Grande do Sul, Brazil.',
      'about.p2': 'We sell a platform on a subscription.',
      'about.how': 'How we work',
      'about.howLead': 'Software. Models. One stack.',
      'about.t1': 'Software product',
      'about.t1p': 'The delivery is the platform. Not a workshop. Not a memo.',
      'about.t2': 'AI first',
      'about.t2p': 'Without the model there is no Fitocrops. Vision, training, and inference sit in the core.',
      'about.t3': 'The stack',
      'about.t3p': 'Vertex AI, BigQuery, Cloud Storage, and Cloud Run.',
      'about.who': 'Who signs',
      'about.who1': 'Managing partner: Gerson Luis dos Santos Rodrigues Junior.',
      'about.who2': 'Partners on the Brazilian registry: Fabio Mulinari dos Santos, Gerson Luis dos Santos Rodrigues Junior, Jansen Rodrigo Pereira Santos, Julio Carlos Pereira da Silva, and Vinicios Duarte Bicca.',
      'about.reg': 'Registry',
      'about.facts': 'Company facts',
      'about.l1': 'Trade name: Fitocrops Agroscience',
      'about.l2': 'Legal name: Fitocrops Agroscience LTDA',
      'about.l3': 'CNPJ: 61.479.389/0001-94',
      'about.l4': 'Opened: 27 June 2025',
      'about.l5': 'Size: small company',
      'about.l6': 'Status: active',
      'about.l7': 'Address: Avenida Roraima, 1000, Bldg. 02, Room 25, Coworking Module 2, Camobi',
      'about.l8': 'Santa Maria, RS, Brazil · 97105-340',
      'about.see': 'See the product',

      'faq.title': 'FAQ | Fitocrops Agroscience',
      'faq.description': 'What Fitocrops builds, how the product works, and how to reach us.',
      'faq.kicker': 'FAQ',
      'faq.h1': 'Short answers.',
      'faq.lead': 'The product, the company, and how to write to us.',
      'faq.s1': 'Product',
      'faq.q1': 'What does Fitocrops build?',
      'faq.a1': 'An agricultural AI platform. Farm data goes in. A model reads it. A recommendation shows up on the grower’s dashboard. We sell that software on a subscription.',
      'faq.q2': 'What does the product do?',
      'faq.a2': 'Five modules: field vision, a data pipeline, models on Vertex AI, an inference endpoint, and a grower dashboard.',
      'faq.q3': 'Where do the models run?',
      'faq.a3': 'They train and serve on Vertex AI. History sits in BigQuery. Raw files go to Cloud Storage. The API runs on Cloud Run.',
      'faq.s2': 'Business',
      'faq.q4': 'Is the product live?',
      'faq.a4': 'The company opened on 27 June 2025. We are building the product. This site describes that work.',
      'faq.q5': 'How do you charge?',
      'faq.a5': 'A subscription to the platform. We do not publish a price list. We set terms after we see the operation.',
      'faq.q6': 'How do I start?',
      'faq.a6': 'Write the crop and the data you already have. We take it from there.',
      'faq.s3': 'Contact',
      'faq.q7': 'Do we need to meet in person?',
      'faq.a7': 'No. Remote is fine. The office is in Santa Maria, Brazil.',
      'faq.q8': 'How does a first note work?',
      'faq.a8': 'Write the crop, the data you already have, and what you want from the note.',
      'faq.q9': 'What helps in that first note?',
      'faq.a9': 'The crop. Whether you already have images, weather, or machine logs. How you want a reply. Sensitive files can wait.',
      'faq.miss': 'Not on this list?',
      'faq.missLead': 'Write it as it is. We read it.',

      'contact.title': 'Contact | Fitocrops Agroscience',
      'contact.description': 'Write to Fitocrops about the agricultural AI product.',
      'contact.kicker': 'Contact',
      'contact.h1': 'Talk to us',
      'contact.lead': 'Tell us the crop and what data you already have. The form builds the message and opens your email.',
      'contact.ch': 'Direct channels',
      'contact.chLead': 'This address works with JavaScript off.',
      'contact.email': 'Email',
      'contact.loc': 'Location',
      'contact.form': 'Form',
      'contact.formLead': 'Fill what you can. A star means required. Checks run in the browser.',
      'contact.noscript': 'The form needs JavaScript. Use the email link on this page.',
      'form.name': 'Name *',
      'form.email': 'Email *',
      'form.phone': 'Phone',
      'form.phoneHelp': 'Optional. Include the country and area code if you want a call back.',
      'form.org': 'Company or farm',
      'form.subject': 'Subject *',
      'form.pick': 'Pick a subject',
      'form.s1': 'Product — farm operation',
      'form.s2': 'Partnership',
      'form.s3': 'A question',
      'form.s4': 'Something else',
      'form.s5': 'Something else',
      'form.msg': 'Message *',
      'form.msgHelp': 'Crop, data you already have, the ask. Twenty characters or more.',
      'form.sendMail': 'Send by email',
      'form.copyLabel': 'Message ready to copy',
      'form.copy': 'Copy message',
      'form.open': 'Open the channel',
      'contact.help': 'What helps in a first note',
      'contact.h1l': 'The crop or the kind of operation',
      'contact.h2l': 'Whether you already have images, weather, plots, or machine logs',
      'contact.h3l': 'Whether this is the product, a partnership, or a question',
      'contact.h4l': 'How you want a reply',
      'contact.helpEnd': 'Sensitive files can wait. Terms come later.',
      'form.err.nome.vazio': 'Enter your name.',
      'form.err.nome.curto': 'The name needs at least 2 characters.',
      'form.err.nome.longo': 'The name can have at most 120 characters.',
      'form.err.email.vazio': 'Enter your email.',
      'form.err.email.formato': 'Enter a valid email, like name@domain.com.',
      'form.err.email.longo': 'The email can have at most 180 characters.',
      'form.err.telefone.longo': 'The phone can have at most 40 characters.',
      'form.err.empresa.longo': 'The company name can have at most 120 characters.',
      'form.err.assunto.vazio': 'Pick a subject.',
      'form.err.mensagem.vazio': 'Write a message.',
      'form.err.mensagem.curto': 'The message needs at least 20 characters.',
      'form.err.mensagem.longo': 'The message can have at most 2000 characters.',
      'form.warn.one': 'There is 1 field to fix before sending.',
      'form.warn.many': 'There are {n} fields to fix before sending.',
      'form.warn.pending': 'This channel is not set up on the site yet. Copy the message below and send it by email.',
      'form.warn.long': 'The message is too long for the mail client. We opened a short version and left the full text below to copy.',
      'form.ok.mail': 'Opening your mail app. If nothing happens, copy the message below.',
      'form.ok.copy': 'Copied. Paste it into your email.',
      'form.warn.select': 'Select the text below and copy it.',
      'form.body.nome': 'Name',
      'form.body.email': 'Email',
      'form.body.telefone': 'Phone',
      'form.body.empresa': 'Company',
      'form.body.assunto': 'Subject',
      'form.body.mensagem': 'Message',
      'form.body.naotel': 'not given',
      'form.body.naoemp': 'not given',
      'form.mail.subject': '[Site contact] '
    },
    pt: {
      'meta.ogLocale': 'pt_BR',
      'skip': 'Ir para o conteúdo',
      'nav.open': 'Abrir menu',
      'nav.close': 'Fechar menu',
      'nav.label': 'Principal',
      'nav.home': 'Home',
      'nav.product': 'Produto',
      'nav.about': 'Sobre',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contato',
      'cta.talk': 'Falar com o time',
      'logo.alt': 'Fitocrops Agroscience — início',
      'lang.label': 'Idioma',
      'map.alt': 'Mapa pontilhado com Santa Maria/RS marcada',
      'hex.alt': 'Mapa dos módulos da plataforma Fitocrops',
      'net.alt': 'Fluxo campo, dado, modelo e painel',
      'footer.contact': 'Contato',
      'footer.nav': 'Navegação',
      'footer.company': 'Empresa',
      'footer.lead': 'Responsável: Gerson Luis dos Santos Rodrigues Junior',
      'footer.founded': 'Constituída em 27/06/2025',
      'footer.who': 'Quem somos',
      'footer.legal': 'Fitocrops Agroscience LTDA. Software de IA agrícola.',

      'home.title': 'Fitocrops Agroscience | Inteligência agrícola',
      'intro.skip': 'Pular',
      'home.description': 'A Fitocrops é uma plataforma de IA agrícola. Dado do campo entra, recomendação sai.',
      'home.kicker': 'Produto de IA · Agritech',
      'home.h1': 'Inteligência agrícola que a lavoura consegue usar.',
      'home.lead': 'A Fitocrops lê o dado da fazenda e devolve uma recomendação no painel de quem planta.',
      'home.see': 'Ver o produto',
      'home.plat': 'Plataforma',
      'home.mods': 'Cinco módulos. Um produto.',
      'home.modsLead': 'O modelo é o produto. Quem usa é quem planta.',
      'home.m1t': 'Visão de lavoura',
      'home.m1': 'Imagem e leitura de campo entram juntas. O modelo marca o que precisa de olho nesta semana.',
      'home.m2t': 'Pipeline de dados',
      'home.m2': 'Recebe, limpa, guarda histórico. Cloud Storage na entrada. BigQuery no registro.',
      'home.m3t': 'Modelos',
      'home.m3': 'Treino e versão no Vertex AI. O problema da lavoura define o que o modelo aprende.',
      'home.m4t': 'Inferência',
      'home.m4': 'Um endpoint que a operação chama. Cloud Run ou GKE, conforme o volume.',
      'home.m5t': 'Painel do produtor',
      'home.m5': 'Uma recomendação na tela. Sem notebook.',
      'home.flow': 'Como a leitura anda',
      'home.flowLead': 'Seis passos, do campo ao texto que a operação abre.',
      'home.s1t': 'Campo',
      'home.s1': 'Uma imagem, um sensor ou um registro que a fazenda já tem.',
      'home.s2t': 'Dado',
      'home.s2': 'Entra no pipeline, versionado, para poder voltar nele.',
      'home.s3t': 'Treino',
      'home.s3': 'O problema da lavoura vira modelo. O Vertex AI guarda a versão.',
      'home.s4t': 'Inferência',
      'home.s4': 'A operação pergunta. O endpoint responde no mesmo recorte.',
      'home.s5t': 'Recomendação',
      'home.s5': 'Uma linha no painel. Quem planta não abre um notebook.',
      'home.s6t': 'Ajuste',
      'home.s6': 'O que a lavoura fez volta. O modelo seguinte começa aí.',
      'home.cloudKicker': 'Pilha',
      'home.cloud': 'Onde os modelos ficam.',
      'home.cloudLead': 'Treino, armazenamento e serving no mesmo lugar. Vertex AI, BigQuery, Cloud Storage, Cloud Run.',
      'home.arch': 'Arquitetura',
      'home.whoBuilds': 'A empresa',
      'home.who': 'Para quem é',
      'home.whoLead': 'Fazenda e cooperativa que já geram dado e ainda decidem no olho.',
      'home.w1t': 'Produtor e cooperativa',
      'home.w1': 'Uma recomendação para esta safra, não um relatório de 80 páginas.',
      'home.w2t': 'Operação com dado',
      'home.w2': 'Imagem, clima, talhão, máquina. Se o dado existe, o pipeline lê.',
      'home.w3t': 'Como cobramos',
      'home.w3': 'Assinatura da plataforma.',
      'home.co': 'Empresa',
      'home.founded': 'Brasil. 2025.',
      'home.coLead': 'Fitocrops Agroscience LTDA. CNPJ 61.479.389/0001-94. Santa Maria/RS. Empresa de pequeno porte, ativa.',
      'home.faq': 'Ler as perguntas',
      'demo.kicker': 'Prévia do produto',
      'demo.in1': 'Talhão 4 · borda oeste · imagens desta semana.',
      'demo.out1': 'Estresse na borda oeste. Olha essa faixa nesta semana.',
      'demo.in2': 'Clima e a nota da última aplicação.',
      'demo.out2': 'Segura a próxima passada até a folha secar. Mesma versão do modelo.',
      'demo.hint': 'Simulação da recomendação — não é uma fazenda ao vivo.',
      'fact.l1': 'Módulos',
      'fact.l2': 'Passos',
      'fact.l3': 'Abertura',

      'prod.title': 'Produto | Fitocrops Agroscience',
      'prod.description': 'Módulos da Fitocrops: visão de lavoura, dados, modelos no Vertex AI, inferência e painel do produtor.',
      'prod.kicker': 'Produto',
      'prod.h1': 'A plataforma, módulo a módulo',
      'prod.lead': 'Software. Assinatura. O modelo no meio.',
      'prod.vis': 'Visão',
      'prod.dat': 'Dados',
      'prod.mod': 'Modelos',
      'prod.inf': 'Inferência',
      'prod.pan': 'Painel',
      'prod.arc': 'Arquitetura',
      'prod.mods': 'Módulos',
      'prod.does': 'O que faz',
      'prod.gives': 'O que devolve',
      'prod.v1': 'Visão de lavoura',
      'prod.v2': 'Recebe imagem ou leitura de campo e marca o que a operação precisa olhar nesta janela. Não substitui agrônomo. Cobre o que um par de olhos deixa passar.',
      'prod.v3': 'Recorte do talhão enviado',
      'prod.v4': 'O que o modelo viu, com a versão do modelo',
      'prod.v5': 'O que esta leitura deixou de fora',
      'prod.d1': 'Pipeline de dados',
      'prod.d2': 'Junta imagem, clima, máquina e registro manual num histórico. Cloud Storage na entrada. BigQuery nas tabelas.',
      'prod.d3': 'Dado versionado, com origem',
      'prod.d4': 'Tabela pronta para o próximo treino',
      'prod.d5': 'Rastro do que entrou e do que saiu',
      'prod.o1': 'Modelos',
      'prod.o2': 'O problema da lavoura vira experimento. Treina, avalia e guarda a versão no Vertex AI.',
      'prod.o3': 'Versão do modelo e as premissas',
      'prod.o4': 'O que o modelo não cobre',
      'prod.o5': 'Ponto de corte combinado com a operação',
      'prod.i1': 'Inferência',
      'prod.i2': 'Endpoint que a operação chama. A resposta fica no recorte. Cloud Run ou GKE quando o volume cresce.',
      'prod.i3': 'Resposta com a versão do modelo',
      'prod.i4': 'Registro da pergunta, para o ajuste',
      'prod.i5': 'Falha clara quando o dado não cabe',
      'prod.p1': 'Painel do produtor',
      'prod.p2': 'A cara do produto. Recomendação, histórico e o próximo passo. Quem planta não abre um Colab.',
      'prod.p3': 'Tela da safra ou do talhão',
      'prod.p4': 'Recomendação na língua da operação',
      'prod.p5': 'Como mandar o próximo lote',
      'prod.a1': 'Arquitetura',
      'prod.a2': 'A pilha',
      'prod.a3': 'Os modelos treinam e servem no Vertex AI. O histórico fica no BigQuery. O bruto vai para o Cloud Storage. A API roda no Cloud Run.',
      'prod.c1': 'Vertex AI — treino e serving',
      'prod.c2': 'BigQuery — histórico',
      'prod.c3': 'Cloud Storage — bruto',
      'prod.c4': 'Cloud Run — API',
      'prod.c5': 'GKE — quando o volume pede',
      'prod.c6': 'IAM — quem acessa o quê',
      'prod.next': 'Quer ver o recorte da operação?',
      'prod.nextLead': 'Conta o cultivo e o dado que já existe.',
      'prod.company': 'A empresa',

      'about.title': 'Sobre | Fitocrops Agroscience',
      'about.description': 'Fitocrops Agroscience LTDA. Empresa de IA agrícola, fundada em 2025 em Santa Maria/RS.',
      'about.kicker': 'Empresa',
      'about.h1': 'Empresa de IA. Empresa de verdade.',
      'about.p1': 'A Fitocrops faz software para a lavoura. O modelo é o produto, não um extra. Constituída em 27 de junho de 2025, em Santa Maria, Rio Grande do Sul.',
      'about.p2': 'Vendemos a plataforma por assinatura.',
      'about.how': 'Como trabalhamos',
      'about.howLead': 'Software. Modelos. Uma pilha.',
      'about.t1': 'Produto de software',
      'about.t1p': 'A entrega é a plataforma. Não é oficina. Não é parecer.',
      'about.t2': 'IA no centro',
      'about.t2p': 'Sem o modelo não existe Fitocrops. Visão, treino e inferência ficam no miolo.',
      'about.t3': 'A pilha',
      'about.t3p': 'Vertex AI, BigQuery, Cloud Storage e Cloud Run.',
      'about.who': 'Quem assina',
      'about.who1': 'Responsável: Gerson Luis dos Santos Rodrigues Junior, sócio-administrador.',
      'about.who2': 'Quadro na Receita: Fabio Mulinari dos Santos, Gerson Luis dos Santos Rodrigues Junior, Jansen Rodrigo Pereira Santos, Julio Carlos Pereira da Silva e Vinicios Duarte Bicca.',
      'about.reg': 'Registro',
      'about.facts': 'Dados oficiais',
      'about.l1': 'Nome fantasia: Fitocrops Agroscience',
      'about.l2': 'Razão social: Fitocrops Agroscience LTDA',
      'about.l3': 'CNPJ: 61.479.389/0001-94',
      'about.l4': 'Abertura: 27/06/2025',
      'about.l5': 'Porte: Empresa de Pequeno Porte',
      'about.l6': 'Situação: Ativa',
      'about.l7': 'Endereço: Avenida Roraima, 1000, Edif. 02, Sala 25, Coworking Módulo 2, Camobi',
      'about.l8': 'Santa Maria/RS · CEP 97105-340',
      'about.see': 'Ver o produto',

      'faq.title': 'FAQ | Fitocrops Agroscience',
      'faq.description': 'O que a Fitocrops constrói, como o produto funciona e como falar com a gente.',
      'faq.kicker': 'FAQ',
      'faq.h1': 'Resposta curta.',
      'faq.lead': 'O produto, a empresa e como escrever.',
      'faq.s1': 'Produto',
      'faq.q1': 'O que a Fitocrops constrói?',
      'faq.a1': 'Uma plataforma de IA agrícola. Dado da fazenda entra. O modelo lê. A recomendação aparece no painel de quem planta. Vendemos esse software por assinatura.',
      'faq.q2': 'O que o produto faz?',
      'faq.a2': 'Cinco módulos: visão de lavoura, pipeline de dados, modelos no Vertex AI, endpoint de inferência e painel do produtor.',
      'faq.q3': 'Onde os modelos rodam?',
      'faq.a3': 'Treino e serving no Vertex AI. Histórico no BigQuery. Bruto no Cloud Storage. API no Cloud Run.',
      'faq.s2': 'Negócio',
      'faq.q4': 'O produto já está no ar?',
      'faq.a4': 'A empresa abriu em 27 de junho de 2025. Estamos construindo o produto. Este site descreve esse trabalho.',
      'faq.q5': 'Como vocês cobram?',
      'faq.a5': 'Assinatura da plataforma. Sem tabela de preço no site. A condição sai depois de ver a operação.',
      'faq.q6': 'Como começo?',
      'faq.a6': 'Escreve o cultivo e o dado que já existe. A gente segue dali.',
      'faq.s3': 'Contato',
      'faq.q7': 'A reunião precisa ser presencial?',
      'faq.a7': 'Não. Pode ser à distância. A sede é Santa Maria/RS.',
      'faq.q8': 'Como é o primeiro contato?',
      'faq.a8': 'Escreve o cultivo, o dado que já existe e o que você quer dessa conversa.',
      'faq.q9': 'O que ajuda na primeira mensagem?',
      'faq.a9': 'O cultivo. Se já tem imagem, clima ou registro de máquina. Como quer a resposta. Arquivo sensível pode esperar.',
      'faq.miss': 'Não está nesta lista?',
      'faq.missLead': 'Manda do jeito que estiver. A gente lê.',

      'contact.title': 'Contato | Fitocrops Agroscience',
      'contact.description': 'Fale com a Fitocrops sobre o produto de IA agrícola.',
      'contact.kicker': 'Contato',
      'contact.h1': 'Falar com o time',
      'contact.lead': 'Conta o cultivo e o dado que já existe. O formulário monta a mensagem e abre o seu e-mail.',
      'contact.ch': 'Canais diretos',
      'contact.chLead': 'Este endereço funciona com o JavaScript desligado.',
      'contact.email': 'E-mail',
      'contact.loc': 'Localização',
      'contact.form': 'Formulário',
      'contact.formLead': 'Preenche o que puder. Asterisco é obrigatório. A checagem roda no navegador.',
      'contact.noscript': 'O formulário precisa de JavaScript. Use o e-mail desta página.',
      'form.name': 'Nome *',
      'form.email': 'E-mail *',
      'form.phone': 'Telefone',
      'form.phoneHelp': 'Opcional. Coloque DDI e DDD se quiser retorno por telefone.',
      'form.org': 'Empresa ou operação',
      'form.subject': 'Assunto *',
      'form.pick': 'Escolha o assunto',
      'form.s1': 'Produto — operação agrícola',
      'form.s2': 'Parceria',
      'form.s3': 'Uma dúvida',
      'form.s4': 'Outro assunto',
      'form.s5': 'Outro assunto',
      'form.msg': 'Mensagem *',
      'form.msgHelp': 'Cultivo, dado que já existe, o pedido. Mínimo de 20 caracteres.',
      'form.sendMail': 'Enviar por e-mail',
      'form.copyLabel': 'Mensagem pronta para copiar',
      'form.copy': 'Copiar mensagem',
      'form.open': 'Abrir o canal',
      'contact.help': 'O que ajuda na primeira mensagem',
      'contact.h1l': 'O cultivo ou o tipo de operação',
      'contact.h2l': 'Se já existe imagem, clima, talhão ou registro de máquina',
      'contact.h3l': 'Se a conversa é produto, parceria ou uma dúvida',
      'contact.h4l': 'Como preferem a resposta',
      'contact.helpEnd': 'Arquivo sensível pode esperar. Condição vem depois.',
      'form.err.nome.vazio': 'Informe o seu nome.',
      'form.err.nome.curto': 'O nome precisa ter ao menos 2 caracteres.',
      'form.err.nome.longo': 'O nome pode ter no máximo 120 caracteres.',
      'form.err.email.vazio': 'Informe o seu e-mail.',
      'form.err.email.formato': 'Informe um e-mail válido, no formato nome@dominio.com.',
      'form.err.email.longo': 'O e-mail pode ter no máximo 180 caracteres.',
      'form.err.telefone.longo': 'O telefone pode ter no máximo 40 caracteres.',
      'form.err.empresa.longo': 'O nome da empresa pode ter no máximo 120 caracteres.',
      'form.err.assunto.vazio': 'Selecione o assunto.',
      'form.err.mensagem.vazio': 'Escreva a mensagem.',
      'form.err.mensagem.curto': 'A mensagem precisa ter ao menos 20 caracteres.',
      'form.err.mensagem.longo': 'A mensagem pode ter no máximo 2000 caracteres.',
      'form.warn.one': 'Há 1 campo a corrigir antes do envio.',
      'form.warn.many': 'Há {n} campos a corrigir antes do envio.',
      'form.warn.pending': 'Este canal ainda não está configurado no site. Copie a mensagem abaixo e envie por e-mail.',
      'form.warn.long': 'A mensagem é longa para o cliente de e-mail. Abrimos uma versão curta e deixamos o texto completo abaixo para copiar.',
      'form.ok.mail': 'Abrindo o e-mail. Se nada acontecer, copie a mensagem abaixo.',
      'form.ok.copy': 'Copiado. Cole no e-mail.',
      'form.warn.select': 'Selecione o texto abaixo e copie.',
      'form.body.nome': 'Nome',
      'form.body.email': 'E-mail',
      'form.body.telefone': 'Telefone',
      'form.body.empresa': 'Empresa',
      'form.body.assunto': 'Assunto',
      'form.body.mensagem': 'Mensagem',
      'form.body.naotel': 'não informado',
      'form.body.naoemp': 'não informada',
      'form.mail.subject': '[Contato pelo site] '
    }
  };

  var extra = window.FITOCROPS_COPY;
  if (extra) {
    var idiomasExtra = ['en', 'pt'];
    for (var xi = 0; xi < idiomasExtra.length; xi++) {
      var idi = idiomasExtra[xi];
      if (!extra[idi] || !T[idi]) continue;
      var chavesExtra = Object.keys(extra[idi]);
      for (var xj = 0; xj < chavesExtra.length; xj++) {
        T[idi][chavesExtra[xj]] = extra[idi][chavesExtra[xj]];
      }
    }
  }

  var estado = 'en';

  function ler() {
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'en' || q === 'pt') return q;
    } catch (e1) {}
    try {
      var s = localStorage.getItem(CHAVE);
      if (s === 'en' || s === 'pt') return s;
    } catch (e2) {}
    return 'en';
  }

  function t(chave, lang) {
    lang = lang || estado;
    if (T[lang] && T[lang][chave]) return T[lang][chave];
    if (T.en[chave]) return T.en[chave];
    return chave;
  }

  function setAttr(el, attr, chave, lang) {
    var valor = t(chave, lang);
    if (attr === 'text') {
      el.textContent = valor;
      return;
    }
    el.setAttribute(attr, valor);
  }

  function aplicar(lang) {
    estado = lang === 'pt' ? 'pt' : 'en';
    document.documentElement.lang = estado === 'pt' ? 'pt-BR' : 'en';
    document.documentElement.setAttribute('data-lang', estado);

    var nos = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nos.length; i++) {
      var el = nos[i];
      var chave = el.getAttribute('data-i18n');
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = t(chave, estado);
      else el.textContent = t(chave, estado);
    }

    var attrs = [
      ['data-i18n-content', 'content'],
      ['data-i18n-alt', 'alt'],
      ['data-i18n-aria', 'aria-label'],
      ['data-i18n-placeholder', 'placeholder'],
      ['data-i18n-value', 'value']
    ];
    for (var a = 0; a < attrs.length; a++) {
      var lista = document.querySelectorAll('[' + attrs[a][0] + ']');
      for (var j = 0; j < lista.length; j++) {
        setAttr(lista[j], attrs[a][1], lista[j].getAttribute(attrs[a][0]), estado);
      }
    }

    var title = document.querySelector('title[data-i18n]');
    if (title) document.title = t(title.getAttribute('data-i18n'), estado);

    var botoes = document.querySelectorAll('[data-lang-set]');
    for (var b = 0; b < botoes.length; b++) {
      botoes[b].setAttribute('aria-pressed', botoes[b].getAttribute('data-lang-set') === estado ? 'true' : 'false');
    }

    try { localStorage.setItem(CHAVE, estado); } catch (e3) {}

    var ev;
    try {
      ev = new CustomEvent('idioma-alterado', { detail: { lang: estado } });
    } catch (e4) {
      ev = document.createEvent('CustomEvent');
      ev.initCustomEvent('idioma-alterado', true, true, { lang: estado });
    }
    document.dispatchEvent(ev);
  }

  function ligar() {
    document.addEventListener('click', function (evento) {
      var alvo = evento.target;
      if (!alvo || !alvo.getAttribute) return;
      var lang = alvo.getAttribute('data-lang-set');
      if (!lang && alvo.closest) {
        var pai = alvo.closest('[data-lang-set]');
        if (pai) lang = pai.getAttribute('data-lang-set');
      }
      if (lang === 'en' || lang === 'pt') {
        evento.preventDefault();
        aplicar(lang);
      }
    });
  }

  window.FitocropsI18n = {
    t: t,
    aplicar: aplicar,
    atual: function () { return estado; }
  };

  estado = ler();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      aplicar(estado);
      ligar();
    });
  } else {
    aplicar(estado);
    ligar();
  }
})();
