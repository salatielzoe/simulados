// LOTE 03 — FGV — DATAPREV — PERFIL 3: DESENVOLVIMENTO DE SOFTWARE
// Questões de referência: 1º Simulado DATAPREV — questões 41–70.
// IDs globais 126–155; originalId preserva o número da questão do simulado.
const quizDataFgvLote03 = [
  {
    "id": 126,
    "originalId": 41,
    "exam": "FGV",
    "matter": "JPA",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Médio",
    "q": "Em uma aplicação Java que utiliza JPA, considere uma entidade Pedido com um relacionamento @ManyToOne para Cliente. Sobre o comportamento padrão de carregamento (fetch) definido pela especificação JPA para esse relacionamento, assinale a afirmativa correta.",
    "opts": [
      "(A) O carregamento padrão de @ManyToOne é EAGER, embora a estratégia possa ser explicitamente alterada para LAZY.",
      "(B) O carregamento padrão de @ManyToOne é sempre LAZY e não pode ser alterado.",
      "(C) Todo relacionamento @ManyToOne exige cascade = CascadeType.ALL para ser persistido.",
      "(D) @ManyToOne somente pode ser utilizado quando a chave estrangeira também for chave primária da entidade.",
      "(E) A anotação @ManyToOne pertence ao Hibernate e não integra a especificação JPA."
    ],
    "ans": 0,
    "exp": "Na especificação JPA, o fetch padrão de @ManyToOne é EAGER; ele pode ser configurado explicitamente para LAZY. Memorize: ManyToOne e OneToOne têm EAGER como padrão; OneToMany e ManyToMany têm LAZY como padrão."
  },
  {
    "id": 127,
    "originalId": 42,
    "exam": "FGV",
    "matter": "Spring Cloud / API Gateway",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Médio",
    "q": "No contexto de microsserviços e Spring Cloud, assinale a opção que descreve corretamente a função de um API Gateway.",
    "opts": [
      "(A) Substituir o banco de dados de cada microsserviço por um banco central compartilhado.",
      "(B) Executar exclusivamente a descoberta de serviços, sem receber requisições de clientes.",
      "(C) Eliminar a necessidade de autenticação entre clientes e serviços.",
      "(D) Converter obrigatoriamente todos os microsserviços em funções serverless.",
      "(E) Atuar como ponto de entrada para requisições, podendo realizar roteamento e aplicar preocupações transversais, como autenticação e limitação de taxa."
    ],
    "ans": 4,
    "exp": "API Gateway funciona como ponto de entrada para clientes e pode concentrar roteamento e preocupações transversais, como autenticação, autorização, rate limiting e observabilidade. Memorize: Gateway = porta de entrada dos microsserviços."
  },
  {
    "id": 128,
    "originalId": 43,
    "exam": "FGV",
    "matter": "JUnit 5",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Médio",
    "q": "Uma equipe deseja escrever um teste unitário com JUnit 5 para verificar se o método sacar(100) lança SaldoInsuficienteException. Assinale a alternativa que apresenta a abordagem adequada.",
    "opts": [
      "(A) Usar assertEquals(SaldoInsuficienteException.class, conta.sacar(100)).",
      "(B) Usar assertThrows(SaldoInsuficienteException.class, () -> conta.sacar(100)).",
      "(C) Anotar obrigatoriamente o método com @Expected(SaldoInsuficienteException.class).",
      "(D) Colocar a chamada em @BeforeEach, pois exceções só podem ser verificadas na preparação do teste.",
      "(E) Usar assertTrue(conta.sacar(100) instanceof SaldoInsuficienteException)."
    ],
    "ans": 1,
    "exp": "No JUnit 5, assertThrows recebe o tipo esperado e um Executable, normalmente expresso por lambda. Memorize: exceção esperada em JUnit 5 = assertThrows."
  },
  {
    "id": 129,
    "originalId": 44,
    "exam": "FGV",
    "matter": "Git / rebase",
    "category": "DevOps e Versionamento",
    "difficulty": "Difícil",
    "q": "A respeito de Git, assinale a afirmativa correta sobre o comando git rebase quando aplicado a uma branch de trabalho.",
    "opts": [
      "(A) Cria obrigatoriamente um merge commit, preservando exatamente a topologia original.",
      "(B) Apaga permanentemente todos os commits da branch de destino antes da integração.",
      "(C) Pode reaplicar commits sobre uma nova base, reescrevendo o histórico desses commits e alterando seus identificadores.",
      "(D) É sinônimo de git clone e serve para criar uma cópia local do repositório remoto.",
      "(E) Somente pode ser executado em repositórios sem branches remotas."
    ],
    "ans": 2,
    "exp": "Rebase reaplica commits sobre uma nova base e, por isso, pode reescrever o histórico e produzir novos hashes. Memorize: rebase = muda a base; os commits reaplicados ganham novos identificadores."
  },
  {
    "id": 130,
    "originalId": 45,
    "exam": "FGV",
    "matter": "HTTPS / TLS",
    "category": "Arquitetura e Segurança",
    "difficulty": "Médio",
    "q": "Sobre o protocolo HTTPS e o uso de TLS em aplicações web e APIs, assinale a afirmativa correta.",
    "opts": [
      "(A) HTTPS garante que toda aplicação acessada esteja livre de vulnerabilidades de software.",
      "(B) TLS substitui mecanismos de autenticação e autorização da aplicação.",
      "(C) O uso de HTTPS impede ataques de injeção de SQL no servidor.",
      "(D) HTTPS utiliza TLS para fornecer proteção ao canal de comunicação, incluindo confidencialidade e integridade dos dados em trânsito.",
      "(E) TLS torna desnecessária a validação de certificados digitais pelo cliente."
    ],
    "ans": 3,
    "exp": "HTTPS utiliza TLS para proteger a comunicação em trânsito, oferecendo principalmente confidencialidade e integridade e, mediante a autenticação do servidor por certificado, autenticidade do endpoint. Memorize: HTTPS protege o canal; não corrige vulnerabilidades da aplicação."
  },
  {
    "id": 131,
    "originalId": 46,
    "exam": "FGV",
    "matter": "REST / HTTP",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Difícil",
    "q": "Em uma API REST, um cliente envia uma requisição PUT para /usuarios/42 com a representação completa do recurso. Considerando a semântica dos métodos HTTP, assinale a afirmativa correta.",
    "opts": [
      "(A) PUT é obrigatoriamente não idempotente, pois toda chamada deve criar um novo recurso.",
      "(B) PUT só pode ser usado para consultas e nunca deve transportar corpo de requisição.",
      "(C) PUT e POST são semanticamente idênticos e intercambiáveis em qualquer API REST.",
      "(D) PUT é definido como idempotente: repetir a mesma requisição pretendida deve produzir o mesmo efeito desejado no estado do servidor que uma única requisição.",
      "(E) PUT é um padrão de serialização equivalente ao JSON."
    ],
    "ans": 3,
    "exp": "PUT é um método idempotente: repetir a mesma requisição, com a mesma intenção e condições relevantes, deve produzir o mesmo efeito pretendido no estado do servidor. Memorize: GET, PUT e DELETE são definidos como idempotentes; POST não é."
  },
  {
    "id": 132,
    "originalId": 47,
    "exam": "FGV",
    "matter": "Scrum",
    "category": "Metodologias Ágeis",
    "difficulty": "Médio",
    "q": "No Scrum, conforme a lógica de inspeção e adaptação do framework, assinale a opção correta acerca da Sprint Retrospective.",
    "opts": [
      "(A) É realizada apenas quando a Sprint não alcança a Meta da Sprint.",
      "(B) É uma reunião exclusiva entre Product Owner e stakeholders para aprovar o incremento.",
      "(C) Tem como finalidade principal estimar em pontos de função todo o Product Backlog.",
      "(D) Substitui a Daily Scrum no último dia da Sprint.",
      "(E) É uma oportunidade para o Scrum Team inspecionar como ocorreu a última Sprint e planejar formas de aumentar qualidade e eficácia."
    ],
    "ans": 4,
    "exp": "A Sprint Retrospective é uma oportunidade para o Scrum Team inspecionar pessoas, interações, processos, ferramentas e resultados e identificar melhorias. Memorize: Review olha o produto; Retrospective olha o modo de trabalhar."
  },
  {
    "id": 133,
    "originalId": 48,
    "exam": "FGV",
    "matter": "Clean Code",
    "category": "Qualidade de Código",
    "difficulty": "Médio",
    "q": "Em Clean Code, a legibilidade e a manutenção são favorecidas por determinadas práticas de codificação. Assinale a afirmativa correta.",
    "opts": [
      "(A) Comentários devem sempre substituir nomes expressivos de métodos e variáveis.",
      "(B) Funções devem, preferencialmente, acumular várias responsabilidades para reduzir a quantidade de métodos.",
      "(C) Nomes significativos, funções pequenas e foco em uma responsabilidade contribuem para um código mais compreensível e manutenível.",
      "(D) Duplicação é recomendável quando evita a criação de abstrações.",
      "(E) Tratamento de erros deve ser evitado para não aumentar a complexidade ciclomática."
    ],
    "ans": 2,
    "exp": "Clean Code favorece nomes expressivos, funções coesas e responsabilidades bem delimitadas. Memorize: código limpo busca legibilidade, coesão e manutenção; não usa comentários para mascarar código confuso."
  },
  {
    "id": 134,
    "originalId": 49,
    "exam": "FGV",
    "matter": "SonarQube / Quality Gate",
    "category": "Qualidade de Código",
    "difficulty": "Médio",
    "q": "No SonarQube, uma Quality Gate é utilizada para",
    "opts": [
      "(A) compilar o código-fonte e gerar, obrigatoriamente, o executável de produção.",
      "(B) avaliar um conjunto de condições de qualidade e indicar se o projeto ou o novo código atende aos critérios definidos.",
      "(C) substituir o sistema de controle de versão Git.",
      "(D) executar exclusivamente testes manuais de usabilidade.",
      "(E) converter automaticamente código Java em JavaScript."
    ],
    "ans": 1,
    "exp": "Quality Gate reúne condições e limiares de qualidade que determinam se o projeto ou o novo código atende aos critérios definidos. Memorize: Quality Gate = portão de qualidade; passa ou falha conforme critérios."
  },
  {
    "id": 135,
    "originalId": 50,
    "exam": "FGV",
    "matter": "SPA",
    "category": "Frontend Web",
    "difficulty": "Médio",
    "q": "Em aplicações web modernas, assinale a opção que caracteriza corretamente uma Single-Page Application (SPA).",
    "opts": [
      "(A) A aplicação tende a atualizar dinamicamente partes da interface no cliente, evitando o recarregamento integral da página a cada interação de navegação interna.",
      "(B) Toda SPA deve funcionar offline e ser instalável; caso contrário, ela deixa de ser SPA.",
      "(C) Uma SPA não pode consumir APIs REST.",
      "(D) SPA é um protocolo de transporte que substitui HTTPS.",
      "(E) Angular, React e Vue são servidores web cuja função principal é hospedar páginas estáticas."
    ],
    "ans": 0,
    "exp": "SPA é uma abordagem de frontend em que a navegação e a atualização de conteúdo podem ocorrer sem recarregar integralmente o documento a cada interação. Offline e instalação são características associadas a PWA, não requisitos de SPA."
  },
  {
    "id": 136,
    "originalId": 51,
    "exam": "FGV",
    "matter": "Arquitetura Hexagonal",
    "category": "Arquitetura de Software",
    "difficulty": "Médio",
    "q": "Em uma arquitetura hexagonal (Ports and Adapters), assinale a afirmativa correta.",
    "opts": [
      "(A) A regra de negócio deve depender diretamente do framework web utilizado.",
      "(B) Os adaptadores primários são obrigatoriamente bancos de dados relacionais.",
      "(C) Portas definem contratos de interação com o núcleo da aplicação, enquanto adaptadores implementam ou utilizam esses contratos para conectar tecnologias externas.",
      "(D) A arquitetura exige um único adaptador para toda entrada e saída do sistema.",
      "(E) O objetivo central é eliminar interfaces e abstrações para reduzir a quantidade de classes."
    ],
    "ans": 2,
    "exp": "Na arquitetura hexagonal, portas representam contratos entre o núcleo e o exterior; adaptadores conectam tecnologias concretas a esses contratos. Memorize: Ports = contratos; Adapters = conexão com o mundo externo."
  },
  {
    "id": 137,
    "originalId": 52,
    "exam": "FGV",
    "matter": "TDD",
    "category": "Testes de Software",
    "difficulty": "Médio",
    "q": "Uma equipe adota TDD para implementar uma nova regra de negócio. Assinale a alternativa que apresenta corretamente o ciclo clássico dessa prática.",
    "opts": [
      "(A) Refatorar, implantar e só então escrever um teste de aceitação.",
      "(B) Escrever todo o código de produção, medir cobertura e excluir testes redundantes.",
      "(C) Criar primeiro um teste que passe, depois introduzir deliberadamente uma falha e publicar.",
      "(D) Escrever um teste que falha, implementar o mínimo necessário para fazê-lo passar e então refatorar mantendo os testes verdes.",
      "(E) Modelar o banco, gerar a interface gráfica e executar somente testes de sistema."
    ],
    "ans": 3,
    "exp": "TDD segue o ciclo Red-Green-Refactor: primeiro um teste que falha, depois o mínimo de implementação para passar e, por fim, refatoração mantendo os testes passando. Memorize: vermelho → verde → refatorar."
  },
  {
    "id": 138,
    "originalId": 53,
    "exam": "FGV",
    "matter": "Containers",
    "category": "DevOps e Arquitetura",
    "difficulty": "Médio",
    "q": "Sobre containers e máquinas virtuais, no contexto de implantação de microsserviços, assinale a afirmativa correta.",
    "opts": [
      "(A) Containers normalmente compartilham o kernel do sistema operacional hospedeiro, oferecendo isolamento de processos sem exigir um sistema operacional convidado completo para cada instância.",
      "(B) Cada container inclui obrigatoriamente um hipervisor próprio e um kernel exclusivo.",
      "(C) Containers eliminam a necessidade de imagens e dependências da aplicação.",
      "(D) Uma imagem de container é sempre mutável e representa o processo em execução.",
      "(E) O uso de containers impede a orquestração e o escalonamento horizontal de microsserviços."
    ],
    "ans": 0,
    "exp": "Containers normalmente compartilham o kernel do host e isolam processos, sem exigir um sistema operacional convidado completo por instância. Memorize: VM virtualiza uma máquina; container isola processos usando o kernel do host."
  },
  {
    "id": 139,
    "originalId": 54,
    "exam": "FGV",
    "matter": "Elicitação de Requisitos",
    "category": "Engenharia de Requisitos",
    "difficulty": "Médio",
    "q": "No contexto de Engenharia de Requisitos, a técnica de elicitação mais apropriada quando se deseja observar usuários executando suas atividades no ambiente real de trabalho, inclusive para identificar práticas tácitas que eles podem não verbalizar em uma entrevista, é",
    "opts": [
      "(A) brainstorming, exclusivamente.",
      "(B) prototipação descartável, exclusivamente.",
      "(C) análise de interface, exclusivamente.",
      "(D) questionário fechado, exclusivamente.",
      "(E) observação, que pode permitir ao analista acompanhar diretamente processos, comportamentos e contexto de uso."
    ],
    "ans": 4,
    "exp": "A observação permite acompanhar o trabalho no contexto real e revelar práticas e comportamentos que o usuário pode não mencionar espontaneamente. Memorize: quer descobrir o que realmente acontece? Observe o trabalho real."
  },
  {
    "id": 140,
    "originalId": 55,
    "exam": "FGV",
    "matter": "Mensageria",
    "category": "Integração e Arquitetura",
    "difficulty": "Médio",
    "q": "Em sistemas distribuídos baseados em mensageria, considere uma fila na qual produtores publicam mensagens e consumidores as processam de forma assíncrona. Assinale a afirmativa correta.",
    "opts": [
      "(A) Mensageria exige que produtor e consumidor estejam ativos simultaneamente em toda comunicação.",
      "(B) O desacoplamento temporal permite que, conforme as garantias e a persistência oferecidas pelo broker, o produtor envie uma mensagem sem que o consumidor precise processá-la naquele mesmo instante.",
      "(C) Filas garantem, por definição e em qualquer tecnologia, processamento exatamente uma vez sem necessidade de projeto adicional.",
      "(D) Mensageria elimina falhas de rede e torna desnecessárias políticas de retry e idempotência.",
      "(E) Uma fila é equivalente a uma chamada REST síncrona e não oferece buffering."
    ],
    "ans": 1,
    "exp": "Mensageria assíncrona permite desacoplamento temporal: o broker pode armazenar/bufferizar a mensagem para processamento posterior, conforme suas garantias. Memorize: fila = desacoplamento + buffering; exatamente uma vez não é garantia universal."
  },
  {
    "id": 141,
    "originalId": 56,
    "exam": "FGV",
    "matter": "ETL",
    "category": "Business Intelligence",
    "difficulty": "Médio",
    "q": "Uma empresa pretende consolidar dados de vendas provenientes de um sistema ERP, de uma plataforma de CRM e de planilhas departamentais. Antes da disponibilização no data warehouse, os dados passarão por um processo de ETL. Assinale a alternativa que descreve esse processo.",
    "opts": [
      "(A) Extrair os registros das fontes, carregá-los no data warehouse e executar as regras de padronização no ambiente de destino.",
      "(B) Extrair os registros das fontes, aplicar as regras de padronização em uma camada intermediária e carregar os dados tratados no data warehouse.",
      "(C) Consultar as bases operacionais durante a geração de cada relatório e integrar os resultados na camada de apresentação.",
      "(D) Replicar as alterações das fontes em um fluxo de eventos e atribuir as transformações às aplicações consumidoras.",
      "(E) Produzir relatórios em cada sistema de origem e consolidar os indicadores resultantes em um painel corporativo."
    ],
    "ans": 1,
    "exp": "ETL significa Extract, Transform, Load: extrair das fontes, transformar em uma etapa intermediária e carregar os dados tratados no destino. Memorize: no ETL, transforma antes de carregar; no ELT, transforma depois de carregar."
  },
  {
    "id": 142,
    "originalId": 57,
    "exam": "FGV",
    "matter": "OLAP",
    "category": "Business Intelligence",
    "difficulty": "Médio",
    "q": "Um cubo OLAP contém as dimensões Tempo, Região e Produto, além da medida Receita. Inicialmente, um analista visualiza a receita anual de cada região. Em seguida, ele deseja examinar os valores de cada ano por trimestre e, depois, por mês, preservando as demais dimensões da análise. Assinale a operação OLAP correspondente a essa mudança.",
    "opts": [
      "(A) Slice.",
      "(B) Dice.",
      "(C) Roll-up.",
      "(D) Drill-down.",
      "(E) Pivot."
    ],
    "ans": 3,
    "exp": "Drill-down detalha a análise, descendo de um nível mais agregado para níveis mais granulares, como ano → trimestre → mês. Memorize: drill-down = descer no detalhe; roll-up = subir/agregar."
  },
  {
    "id": 143,
    "originalId": 58,
    "exam": "FGV",
    "matter": "Data Mining / Classificação",
    "category": "Business Intelligence",
    "difficulty": "Médio",
    "q": "Uma empresa de telecomunicações possui registros históricos de clientes com informações sobre tempo de contrato, consumo mensal, quantidade de chamados e forma de pagamento. Cada registro também informa se o cliente permaneceu na empresa ou cancelou o serviço. A empresa pretende utilizar esses dados para atribuir novos clientes a uma dessas duas categorias. Assinale a tarefa de mineração de dados adequada ao objetivo apresentado.",
    "opts": [
      "(A) Classificação.",
      "(B) Agrupamento.",
      "(C) Associação.",
      "(D) Regressão.",
      "(E) Detecção de anomalias."
    ],
    "ans": 0,
    "exp": "Classificação atribui observações a classes previamente definidas, como permaneceu/cancelou. Memorize: classe conhecida = classificação; grupo descoberto sem rótulo = agrupamento."
  },
  {
    "id": 144,
    "originalId": 59,
    "exam": "FGV",
    "matter": "ISO/IEC 27001 e 27002",
    "category": "Segurança da Informação",
    "difficulty": "Médio",
    "q": "Uma organização pretende estruturar seu Sistema de Gestão de Segurança da Informação — SGSI — e adotar controles para preservar a confidencialidade, a integridade e a disponibilidade das informações. Considerando as normas ABNT NBR ISO/IEC 27001:2022 e ABNT NBR ISO/IEC 27002:2022, assinale a afirmativa correta.",
    "opts": [
      "(A) A ISO/IEC 27002 estabelece os requisitos certificáveis do SGSI, enquanto a ISO/IEC 27001 contém apenas recomendações facultativas.",
      "(B) A ISO/IEC 27001 aplica-se exclusivamente aos ativos digitais administrados pelo setor de tecnologia da informação.",
      "(C) A ISO/IEC 27001 estabelece requisitos para o SGSI, enquanto a ISO/IEC 27002 apresenta orientações e boas práticas para a implementação de controles de segurança.",
      "(D) A certificação segundo a ISO/IEC 27001 garante que todos os riscos de segurança serão eliminados.",
      "(E) A disponibilidade assegura que as informações somente possam ser alteradas por pessoas autorizadas."
    ],
    "ans": 2,
    "exp": "ISO/IEC 27001 estabelece requisitos para um SGSI e é a norma usada como referência para certificação; ISO/IEC 27002 fornece orientação e boas práticas para controles de segurança. Memorize: 27001 = requisitos/SGSI; 27002 = controles/orientações."
  },
  {
    "id": 145,
    "originalId": 60,
    "exam": "FGV",
    "matter": "OAuth 2.0 e SSO",
    "category": "Controle de Acesso",
    "difficulty": "Difícil",
    "q": "Uma empresa está revisando sua política de controle de acesso e pretende implantar OAuth 2.0 e Single Sign-On — SSO — em suas aplicações. Assinale a medida tecnicamente adequada.",
    "opts": [
      "(A) Utilizar o OAuth 2.0 como protocolo completo de autenticação, pois o access token comprova necessariamente a identidade do usuário.",
      "(B) Elaborar uma política com diretrizes gerais, criar procedimentos operacionais para sua execução, utilizar o OAuth 2.0 para autorização delegada e proteger o SSO com autenticação forte e controles adicionais.",
      "(C) Manter credenciais diferentes em cada aplicação, pois a descentralização da autenticação é a principal característica do SSO.",
      "(D) Conceder a todos os usuários as mesmas permissões para simplificar o gerenciamento dos acessos.",
      "(E) Utilizar access tokens sem limitação de escopo ou prazo de validade, evitando novas solicitações de autorização."
    ],
    "ans": 1,
    "exp": "OAuth 2.0 é um framework de autorização delegada, não um protocolo de autenticação completo. SSO centraliza/integra a experiência de autenticação, mas deve ser protegido por autenticação forte e controles adequados. Memorize: OAuth = autorização; OpenID Connect acrescenta uma camada de identidade sobre OAuth 2.0."
  },
  {
    "id": 146,
    "originalId": 61,
    "exam": "FGV",
    "matter": "Ameaça, Vulnerabilidade, Impacto e Risco",
    "category": "Gestão de Riscos",
    "difficulty": "Médio",
    "q": "Um servidor público de aplicações permanece sem uma atualização de segurança e está exposto à Internet. Um grupo criminoso dispõe de ferramentas capazes de explorar a falha, podendo interromper o serviço e acessar informações sigilosas. Nesse contexto, assinale a afirmativa correta.",
    "opts": [
      "(A) A ausência da atualização corresponde à ameaça, enquanto o grupo criminoso representa a vulnerabilidade.",
      "(B) A possível interrupção do serviço representa a probabilidade de ocorrência do evento.",
      "(C) O risco corresponde exclusivamente à existência da vulnerabilidade, independentemente de ameaças e consequências.",
      "(D) A ausência da atualização é uma vulnerabilidade; o grupo e suas ações representam uma ameaça; e a interrupção do serviço ou exposição de dados constitui possível impacto.",
      "(E) A instalação da atualização elimina definitivamente todos os riscos relacionados ao servidor."
    ],
    "ans": 3,
    "exp": "Vulnerabilidade é uma fraqueza explorável; ameaça é a causa/agente potencial capaz de explorar a fraqueza; impacto é a consequência. O risco resulta da combinação entre possibilidade de ocorrência e consequências. Memorize: vulnerabilidade = fraqueza; ameaça = agente/causa; impacto = consequência."
  },
  {
    "id": 147,
    "originalId": 62,
    "exam": "FGV",
    "matter": "SDL, OWASP Top 10, SAST e DAST",
    "category": "Segurança de Aplicações",
    "difficulty": "Difícil",
    "q": "Uma equipe pretende integrar segurança ao ciclo de desenvolvimento de software e automatizar verificações em sua esteira de integração contínua. Considerando SDL, OWASP Top 10, SAST e DAST, assinale a afirmativa correta.",
    "opts": [
      "(A) A segurança deve ser avaliada somente após a conclusão do desenvolvimento, durante o teste de invasão final.",
      "(B) O SAST testa externamente a aplicação em execução, enquanto o DAST examina o código-fonte sem executar o sistema.",
      "(C) O OWASP Top 10 constitui uma relação exaustiva de todas as vulnerabilidades possíveis e sua adoção isolada garante a segurança da aplicação.",
      "(D) A segurança deve ser incorporada durante todo o ciclo de desenvolvimento; o SAST analisa código ou artefatos sem executar a aplicação; e o DAST testa o comportamento da aplicação em execução.",
      "(E) O DAST identifica necessariamente a linha exata do código-fonte responsável por cada vulnerabilidade encontrada."
    ],
    "ans": 3,
    "exp": "SDL incorpora segurança ao ciclo de desenvolvimento. SAST analisa código/artefatos estáticos; DAST testa a aplicação em execução. OWASP Top 10 é um guia de riscos importantes, não uma lista exaustiva. Memorize: SAST = Static; DAST = Dynamic."
  },
  {
    "id": 148,
    "originalId": 63,
    "exam": "FGV",
    "matter": "Modelagem de Dados",
    "category": "Banco de Dados",
    "difficulty": "Difícil",
    "q": "Uma equipe está projetando o banco de dados de um sistema de benefícios. No modelo conceitual, BENEFICIÁRIO e PROCEDIMENTO participam de uma associação AUTORIZAÇÃO, que possui os atributos data_solicitacao, quantidade e situacao. Um beneficiário pode solicitar vários procedimentos, e um procedimento pode ser solicitado por vários beneficiários. Cada autorização deve identificar exatamente um beneficiário e exatamente um procedimento. Ao transformar esse modelo para o modelo relacional e, posteriormente, físico, a solução tecnicamente adequada é:",
    "opts": [
      "(A) criar uma única tabela BENEFICIARIO, repetindo nela os dados de cada procedimento autorizado, pois a eliminação de junções é requisito da terceira forma normal.",
      "(B) criar AUTORIZACAO com chaves estrangeiras para BENEFICIARIO e PROCEDIMENTO e definir uma chave primária própria ou composta; no modelo físico, especificar tipos, restrições e índices conforme o SGBD.",
      "(C) incorporar os atributos de AUTORIZACAO em PROCEDIMENTO, porque toda associação muitos-para-muitos deve ser absorvida pela entidade que representa o serviço.",
      "(D) manter AUTORIZACAO apenas como metadado do modelo conceitual, uma vez que associações não são representadas no modelo relacional.",
      "(E) criar uma coluna multivalorada procedimentos_autorizados em BENEFICIARIO, preservando atomicidade e integridade referencial por meio de uma restrição CHECK."
    ],
    "ans": 1,
    "exp": "Uma relação N:N é normalmente transformada em uma tabela associativa. AUTORIZACAO deve conter FKs para BENEFICIARIO e PROCEDIMENTO e também seus próprios atributos. Memorize: N:N no relacional → tabela associativa."
  },
  {
    "id": 149,
    "originalId": 64,
    "exam": "FGV",
    "matter": "SQL / NOT EXISTS",
    "category": "Banco de Dados",
    "difficulty": "Difícil",
    "q": "Considere as seguintes tabelas de um banco de dados relacional: EMPREGADO (id_empregado INTEGER PRIMARY KEY, nome VARCHAR(100), id_departamento INTEGER); PROJETO (id_projeto INTEGER PRIMARY KEY, id_departamento INTEGER, situacao CHAR(1)); ALOCACAO (id_empregado INTEGER, id_projeto INTEGER, PRIMARY KEY (id_empregado, id_projeto)). A coluna situacao recebe A para projeto ativo e I para projeto inativo. Deseja-se obter os empregados que atendam simultaneamente às seguintes condições: 1) estão alocados em todos os projetos ativos de seu próprio departamento; e 2) não estão alocados em nenhum projeto inativo. Considerando exclusivamente construções previstas no padrão SQL, assinale a consulta correta.",
    "opts": [
      "(A) SELECT e.id_empregado, e.nome FROM EMPREGADO e JOIN ALOCACAO a ON a.id_empregado = e.id_empregado JOIN PROJETO p ON p.id_projeto = a.id_projeto WHERE p.situacao = 'A' GROUP BY e.id_empregado, e.nome HAVING COUNT(*) = (SELECT COUNT(*) FROM PROJETO p2 WHERE p2.id_departamento = e.id_departamento);",
      "(B) SELECT e.id_empregado, e.nome FROM EMPREGADO e WHERE NOT EXISTS (SELECT 1 FROM PROJETO p WHERE p.id_departamento = e.id_departamento AND p.situacao = 'A' AND NOT EXISTS (SELECT 1 FROM ALOCACAO a WHERE a.id_empregado = e.id_empregado AND a.id_projeto = p.id_projeto)) AND NOT EXISTS (SELECT 1 FROM ALOCACAO a JOIN PROJETO p ON p.id_projeto = a.id_projeto WHERE a.id_empregado = e.id_empregado AND p.situacao = 'I');",
      "(C) SELECT e.id_empregado, e.nome FROM EMPREGADO e WHERE e.id_empregado IN (SELECT a.id_empregado FROM ALOCACAO a JOIN PROJETO p ON p.id_projeto = a.id_projeto WHERE p.id_departamento = e.id_departamento AND p.situacao = 'A') AND e.id_empregado NOT IN (SELECT a.id_empregado FROM ALOCACAO a JOIN PROJETO p ON p.id_projeto = a.id_projeto WHERE p.situacao = 'I');",
      "(D) SELECT e.id_empregado, e.nome FROM EMPREGADO e WHERE EXISTS (SELECT 1 FROM PROJETO p JOIN ALOCACAO a ON a.id_projeto = p.id_projeto WHERE p.id_departamento = e.id_departamento AND p.situacao = 'A' AND a.id_empregado = e.id_empregado) AND NOT EXISTS (SELECT 1 FROM PROJETO p WHERE p.situacao = 'I');",
      "(E) SELECT e.id_empregado, e.nome FROM EMPREGADO e WHERE NOT EXISTS (SELECT 1 FROM ALOCACAO a JOIN PROJETO p ON p.id_projeto = a.id_projeto WHERE a.id_empregado = e.id_empregado AND p.id_departamento <> e.id_departamento) AND EXISTS (SELECT 1 FROM PROJETO p WHERE p.id_departamento = e.id_departamento AND p.situacao = 'A');"
    ],
    "ans": 1,
    "exp": "A alternativa B usa NOT EXISTS aninhado para expressar “não existe projeto ativo do departamento para o qual não exista alocação do empregado”, além de excluir qualquer alocação em projeto inativo. Memorize: para “todos”, uma técnica clássica é procurar a ausência de uma exceção: NOT EXISTS (item que falta)."
  },
  {
    "id": 150,
    "originalId": 65,
    "exam": "FGV",
    "matter": "Slowly Changing Dimension / ETL",
    "category": "Business Intelligence",
    "difficulty": "Difícil",
    "q": "Uma organização mantém um data warehouse com uma dimensão CLIENTE e uma tabela fato FAT_VENDA. O atributo faixa_renda do cliente pode mudar ao longo do tempo, e os analistas precisam reproduzir relatórios históricos segundo a faixa vigente na data de cada venda. Novos arquivos chegam diariamente; podem conter registros repetidos e eventos atrasados. Considerando modelagem dimensional e ingestão, a alternativa que melhor atende ao requisito é:",
    "opts": [
      "(A) aplicar dimensão lentamente mutável do tipo 1, sobrescrevendo faixa_renda, e ligar a fato diretamente à chave natural do cliente.",
      "(B) aplicar dimensão lentamente mutável do tipo 2, criando versões com chave substituta e período de validade; na carga, deduplicar e associar cada fato à versão válida na data do evento, com tratamento idempotente para reprocessamentos.",
      "(C) manter faixa_renda somente na tabela fato, dispensando dimensão e metadados de linhagem, pois fatos devem conter todos os atributos descritivos.",
      "(D) usar uma dimensão do tipo 3 com quantidade ilimitada de colunas de faixa anterior, garantindo todo o histórico e simplificando eventos atrasados.",
      "(E) sobrescrever a dimensão e recalcular todas as vendas antigas a cada carga, pois tabelas fato devem refletir exclusivamente o estado corrente das dimensões."
    ],
    "ans": 1,
    "exp": "SCD Tipo 2 preserva histórico criando versões da dimensão, normalmente com chave substituta e vigência. Deduplicação e idempotência são importantes para reprocessamentos e eventos atrasados. Memorize: Tipo 1 sobrescreve; Tipo 2 cria versões e preserva histórico."
  },
  {
    "id": 151,
    "originalId": 66,
    "exam": "FGV",
    "matter": "Data Lake, Metadados e ELT",
    "category": "Dados e Bases de Dados",
    "difficulty": "Difícil",
    "q": "Uma plataforma analítica recebe documentos JSON sem esquema uniforme, arquivos de imagens e dados tabulares. Ela deve conservar os dados brutos para explorações futuras, registrar origem, esquema, qualidade e transformações, e disponibilizar parte dos resultados para consultas analíticas de baixa latência. Sobre a arquitetura e as tecnologias aplicáveis, assinale a afirmativa correta.",
    "opts": [
      "(A) Um data lake exige que todos os dados sejam normalizados em terceira forma normal antes da ingestão; por isso, imagens e documentos semiestruturados devem ser descartados.",
      "(B) Um banco NoSQL documental é obrigatoriamente desprovido de esquema, integridade e índices, não podendo armazenar versões distintas de documentos JSON.",
      "(C) Metadados técnicos e operacionais são dispensáveis quando os arquivos brutos são preservados, pois a linhagem pode ser inferida integralmente a partir do conteúdo dos objetos.",
      "(D) O data lake pode armazenar dados estruturados, semiestruturados e não estruturados em formato bruto; catálogo, linhagem e regras de qualidade reduzem o risco de um data swamp, e uma camada de processamento ou serving em memória pode acelerar consultas selecionadas.",
      "(E) ETL e ELT são sinônimos: em ambos, toda transformação ocorre necessariamente antes do carregamento no repositório de destino."
    ],
    "ans": 3,
    "exp": "Data lake pode receber dados de diferentes estruturas em sua forma bruta, mas governança, catálogo, linhagem e qualidade são essenciais para evitar um data swamp. ETL transforma antes de carregar; ELT transforma após carregar. Memorize: lake = variedade + bruto; governança evita o “pântano de dados”."
  },
  {
    "id": 152,
    "originalId": 67,
    "exam": "FGV",
    "matter": "Scrum / Product Backlog",
    "category": "Gestão e Governança de TI",
    "difficulty": "Médio",
    "q": "Durante a execução de um produto desenvolvido com Scrum, diferentes gestores passaram a encaminhar solicitações diretamente aos Developers, determinando quais itens deveriam receber maior prioridade no Product Backlog. De acordo com o Scrum Guide, a responsabilidade pelo gerenciamento eficaz e pela ordenação dos itens do Product Backlog é do",
    "opts": [
      "(A) Scrum Master.",
      "(B) Product Owner.",
      "(C) gerente de projetos.",
      "(D) Developers.",
      "(E) conjunto de stakeholders."
    ],
    "ans": 1,
    "exp": "No Scrum, o Product Owner é accountable pela gestão eficaz do Product Backlog, incluindo desenvolvimento e comunicação do Product Goal e ordenação dos itens. Memorize: Product Owner = valor + Product Backlog."
  },
  {
    "id": 153,
    "originalId": 68,
    "exam": "FGV",
    "matter": "COBIT 2019",
    "category": "Governança de TI",
    "difficulty": "Difícil",
    "q": "Segundo o COBIT 2019, governança e gestão possuem propósitos distintos. A respeito disso, assinale a afirmativa correta.",
    "opts": [
      "(A) Governança e gestão são expressões equivalentes.",
      "(B) A gestão avalia as necessidades dos stakeholders e estabelece a direção, enquanto a governança executa as atividades.",
      "(C) A governança avalia necessidades, condições e opções dos stakeholders, estabelece direção e monitora resultados; a gestão planeja, constrói, executa e monitora atividades em alinhamento com essa direção.",
      "(D) Governança corresponde ao domínio APO e gestão ao domínio EDM.",
      "(E) Governança trata prioritariamente de riscos."
    ],
    "ans": 2,
    "exp": "COBIT separa governança de gestão: governança avalia, direciona e monitora; gestão planeja, constrói, executa e monitora atividades alinhadas à direção estabelecida. Memorize: Governança = EDM; Gestão = PBRM."
  },
  {
    "id": 154,
    "originalId": 69,
    "exam": "FGV",
    "matter": "ITIL 4 / Habilitação de Mudança",
    "category": "Gestão de Serviços de TI",
    "difficulty": "Médio",
    "q": "Uma organização deseja maximizar a quantidade de mudanças bem-sucedidas em produtos e serviços, assegurando avaliação de riscos, autorização e gerenciamento apropriado do cronograma das mudanças. A prática diretamente relacionada é",
    "opts": [
      "(A) gerenciamento de incidentes.",
      "(B) habilitação de mudança.",
      "(C) gerenciamento de problemas.",
      "(D) gerenciamento de implantação.",
      "(E) central de serviço."
    ],
    "ans": 1,
    "exp": "Na ITIL 4, a prática de habilitação de mudança busca maximizar o número de mudanças bem-sucedidas, avaliando riscos, autorizando mudanças e gerenciando o cronograma. Memorize: mudança = avaliar risco + autorizar + programar."
  },
  {
    "id": 155,
    "originalId": 70,
    "exam": "FGV",
    "matter": "BPMN / Gateways",
    "category": "Gestão de Processos",
    "difficulty": "Médio",
    "q": "Após analisar uma solicitação, um processo deverá prosseguir por exatamente um entre três caminhos, conforme o valor de determinadas condições. O gateway apropriado é o",
    "opts": [
      "(A) paralelo.",
      "(B) exclusivo.",
      "(C) inclusivo.",
      "(D) baseado em eventos.",
      "(E) complexo, obrigatoriamente."
    ],
    "ans": 1,
    "exp": "Em BPMN, o gateway exclusivo (XOR) seleciona um único caminho entre alternativas, de acordo com a condição. Memorize: XOR = exatamente um; AND = todos em paralelo; OR = um ou mais caminhos."
  }
];
if (typeof window !== 'undefined') window.quizDataFgvLote03 = quizDataFgvLote03;
if (typeof module !== 'undefined' && module.exports) module.exports = quizDataFgvLote03;
