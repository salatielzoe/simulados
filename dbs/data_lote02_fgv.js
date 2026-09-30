// LOTE 02 — FGV — PERFIL 3: DESENVOLVIMENTO DE SOFTWARE
const quizDataFgvLote02 = [
  {
    "id": 111,
    "originalId": 16,
    "exam": "FGV",
    "matter": "Java e JPA",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Médio",
    "q": "Em uma aplicação Java que utiliza JPA, uma classe de domínio deve ser persistida em uma tabela relacional. Considerando o papel da JPA, assinale a afirmativa correta.",
    "opts": [
      "(A) JPA é um SGBD relacional que substitui o banco de dados da aplicação.",
      "(B) JPA define uma API/especificação para mapeamento objeto-relacional e persistência de entidades Java.",
      "(C) JPA é um framework exclusivo para testes unitários de classes Java.",
      "(D) JPA é um protocolo de mensageria baseado em filas para aplicações distribuídas.",
      "(E) JPA é uma ferramenta de análise estática que identifica vulnerabilidades no código-fonte."
    ],
    "ans": 1,
    "exp": "JPA é uma especificação/API para persistência e mapeamento objeto-relacional em aplicações Java. Implementações, como Hibernate, realizam esse contrato. Memorize: JPA define o modelo/API; Hibernate pode ser uma implementação."
  },
  {
    "id": 112,
    "originalId": 17,
    "exam": "FGV",
    "matter": "Java e JPA",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Difícil",
    "q": "Em uma aplicação JPA, uma entidade possui um relacionamento muitos-para-um com outra entidade. O desenvolvedor deseja representar a associação no banco por uma chave estrangeira na tabela da entidade que contém a referência. A anotação diretamente relacionada é:",
    "opts": [
      "(A) @ManyToOne",
      "(B) @Override",
      "(C) @FunctionalInterface",
      "(D) @Test",
      "(E) @TransactionalEventListener"
    ],
    "ans": 0,
    "exp": "@ManyToOne representa uma relação em que várias instâncias de uma entidade podem se associar a uma instância de outra. Em um modelo relacional típico, a tabela do lado muitos possui a chave estrangeira."
  },
  {
    "id": 113,
    "originalId": 18,
    "exam": "FGV",
    "matter": "Spring Boot",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Médio",
    "q": "Uma equipe cria uma aplicação com Spring Boot e deseja reduzir a configuração manual necessária para inicializar componentes e dependências comuns. O mecanismo de auto-configuração do Spring Boot tem como finalidade principal:",
    "opts": [
      "(A) substituir o código Java por scripts SQL.",
      "(B) configurar automaticamente componentes da aplicação com base nas dependências e condições detectadas no ambiente.",
      "(C) impedir a utilização de APIs REST.",
      "(D) transformar toda aplicação Spring em um sistema monolítico.",
      "(E) eliminar a necessidade de qualquer arquivo de configuração, independentemente da aplicação."
    ],
    "ans": 1,
    "exp": "A auto-configuração usa condições e dependências presentes no classpath para configurar componentes de forma convencional, reduzindo configuração explícita. Isso não significa que toda configuração manual desapareça."
  },
  {
    "id": 114,
    "originalId": 19,
    "exam": "FGV",
    "matter": "Spring Cloud",
    "category": "Arquitetura",
    "difficulty": "Difícil",
    "q": "Uma organização possui diversos microsserviços e precisa administrar configurações e mecanismos comuns a um ambiente distribuído. Considerando o ecossistema Spring, o Spring Cloud está relacionado principalmente a:",
    "opts": [
      "(A) recursos e padrões voltados a sistemas distribuídos, como configuração e integração entre serviços.",
      "(B) criação exclusiva de interfaces gráficas desktop em Java.",
      "(C) substituição do banco relacional por arquivos XML.",
      "(D) execução de testes unitários sem dependências externas.",
      "(E) compilação do código Java para bytecode."
    ],
    "ans": 0,
    "exp": "Spring Cloud fornece ferramentas e padrões para aplicações distribuídas, incluindo recursos relacionados a configuração, descoberta de serviços, comunicação e resiliência, conforme os componentes usados. Memorize: Spring Boot facilita a aplicação; Spring Cloud apoia o ambiente distribuído."
  },
  {
    "id": 115,
    "originalId": 20,
    "exam": "FGV",
    "matter": "Mensageria e Filas",
    "category": "Arquitetura",
    "difficulty": "Difícil",
    "q": "Em uma arquitetura corporativa Java, um produtor precisa enviar mensagens de forma assíncrona para que consumidores possam processá-las posteriormente, sem que o produtor aguarde a execução do consumidor. A tecnologia Java EE diretamente associada é:",
    "opts": [
      "(A) JMS",
      "(B) JPA",
      "(C) JSP",
      "(D) JSF",
      "(E) JDBC"
    ],
    "ans": 0,
    "exp": "JMS fornece uma API para comunicação assíncrona baseada em mensagens em aplicações Java. JPA trata persistência; JDBC trata acesso a bancos; JSP/JSF estão ligados à camada web."
  },
  {
    "id": 116,
    "originalId": 21,
    "exam": "FGV",
    "matter": "Git",
    "category": "Controle de Versão",
    "difficulty": "Médio",
    "q": "Em um repositório Git, uma equipe deseja desenvolver uma funcionalidade de forma isolada, sem modificar diretamente a linha principal enquanto o trabalho ainda está incompleto. O recurso mais adequado é:",
    "opts": [
      "(A) branch",
      "(B) tag obrigatória",
      "(C) stash como substituto permanente do histórico",
      "(D) merge sem branch",
      "(E) reset --hard como mecanismo de colaboração"
    ],
    "ans": 0,
    "exp": "Uma branch cria uma linha de desenvolvimento separada, permitindo trabalhar isoladamente e depois integrar alterações. Memorize: branch = linha independente de desenvolvimento."
  },
  {
    "id": 117,
    "originalId": 22,
    "exam": "FGV",
    "matter": "Qualidade de Código",
    "category": "Testes",
    "difficulty": "Médio",
    "q": "Uma equipe deseja incorporar ao processo de desenvolvimento uma análise automatizada que identifique problemas de qualidade e possíveis vulnerabilidades no código-fonte antes da entrega. Uma ferramenta como SonarQube é utilizada principalmente para:",
    "opts": [
      "(A) executar exclusivamente testes de carga em produção.",
      "(B) analisar código e fornecer indicadores relacionados à qualidade e a problemas detectáveis automaticamente.",
      "(C) substituir o sistema de versionamento Git.",
      "(D) atuar exclusivamente como banco de dados transacional.",
      "(E) fornecer somente armazenamento de artefatos binários."
    ],
    "ans": 1,
    "exp": "SonarQube é usado para análise de código e acompanhamento de aspectos de qualidade, incluindo bugs, code smells e determinadas vulnerabilidades. Memorize: SonarQube = inspeção automatizada da qualidade do código."
  },
  {
    "id": 118,
    "originalId": 23,
    "exam": "FGV",
    "matter": "Containers e Docker",
    "category": "Arquitetura",
    "difficulty": "Médio",
    "q": "Uma equipe deseja empacotar uma aplicação com suas dependências para obter ambientes consistentes entre desenvolvimento, teste e produção, evitando virtualizar um sistema operacional completo para cada instância. A tecnologia mais diretamente associada é:",
    "opts": [
      "(A) contêiner",
      "(B) BIOS",
      "(C) RAID",
      "(D) proxy reverso",
      "(E) compilador JIT"
    ],
    "ans": 0,
    "exp": "Contêineres empacotam aplicação e dependências em unidades isoladas que compartilham o kernel do sistema hospedeiro, diferentemente de VMs tradicionais que virtualizam uma máquina completa."
  },
  {
    "id": 119,
    "originalId": 24,
    "exam": "FGV",
    "matter": "Computação em Nuvem",
    "category": "Arquitetura",
    "difficulty": "Médio",
    "q": "Uma organização pretende contratar um serviço no qual recebe uma plataforma gerenciada para desenvolver e executar aplicações, sem administrar diretamente a infraestrutura física subjacente. O modelo de serviço é:",
    "opts": [
      "(A) IaaS",
      "(B) PaaS",
      "(C) SaaS",
      "(D) DaaS exclusivamente",
      "(E) On-premises"
    ],
    "ans": 1,
    "exp": "PaaS fornece uma plataforma gerenciada para desenvolvimento e execução de aplicações. IaaS oferece recursos de infraestrutura; SaaS entrega uma aplicação pronta ao usuário."
  },
  {
    "id": 120,
    "originalId": 25,
    "exam": "FGV",
    "matter": "NIST Cybersecurity Framework",
    "category": "Segurança de Software",
    "difficulty": "Difícil",
    "q": "Uma organização utiliza o NIST Cybersecurity Framework versão 1.1 para estruturar suas atividades de segurança. Considerando suas funções centrais, assinale a opção que apresenta somente funções pertencentes ao núcleo do CSF 1.1.",
    "opts": [
      "(A) Identify, Protect, Detect, Respond e Recover.",
      "(B) Plan, Build, Test, Deploy e Retire.",
      "(C) Authenticate, Authorize, Encrypt, Hash e Audit.",
      "(D) Discover, Exploit, Escalate, Persist e Exfiltrate.",
      "(E) Collect, Normalize, Correlate, Block e Restore."
    ],
    "ans": 0,
    "exp": "O NIST Cybersecurity Framework 1.1 organiza o núcleo em cinco funções: Identify, Protect, Detect, Respond e Recover. Memorize: identificar, proteger, detectar, responder e recuperar."
  },
  {
    "id": 121,
    "originalId": 26,
    "exam": "FGV",
    "matter": "SIEM e Monitoramento",
    "category": "Segurança de Software",
    "difficulty": "Difícil",
    "q": "Uma empresa recebe milhares de eventos por minuto, provenientes de firewalls, servidores, aplicações e autenticação. Para identificar padrões distribuídos entre essas fontes, é necessário centralizar e correlacionar eventos. A solução mais diretamente associada é:",
    "opts": [
      "(A) SIEM",
      "(B) JPA",
      "(C) CDN",
      "(D) ORM",
      "(E) CSS"
    ],
    "ans": 0,
    "exp": "SIEM centraliza e correlaciona eventos de múltiplas fontes, apoiando monitoramento, detecção e investigação de incidentes. Memorize: SIEM = Security Information and Event Management."
  },
  {
    "id": 122,
    "originalId": 27,
    "exam": "FGV",
    "matter": "Banco de Dados e Transações",
    "category": "Banco de Dados",
    "difficulty": "Difícil",
    "q": "Em um sistema bancário, uma operação transfere R$ 500,00 da conta A para a conta B. O débito em A ocorre, mas uma falha impede o crédito em B. Para que a operação não deixe o banco em estado intermediário, a propriedade diretamente relacionada à necessidade de desfazer integralmente a operação é:",
    "opts": [
      "(A) Atomicidade",
      "(B) Disponibilidade",
      "(C) Indexação",
      "(D) Normalização",
      "(E) Projeção"
    ],
    "ans": 0,
    "exp": "Atomicidade significa que a transação é tratada como uma unidade: ou suas operações são efetivadas, ou, diante de falha, as alterações realizadas podem ser desfeitas. Memorize: atomicidade = tudo ou nada."
  },
  {
    "id": 123,
    "originalId": 28,
    "exam": "FGV",
    "matter": "Business Intelligence & ETL",
    "category": "Banco de Dados",
    "difficulty": "Médio",
    "q": "Em um ambiente de Business Intelligence, dados provenientes de diferentes fontes são extraídos, transformados e carregados para uma estrutura destinada à análise histórica. O processo descrito corresponde a:",
    "opts": [
      "(A) ETL",
      "(B) DDL",
      "(C) DNS",
      "(D) CRUD",
      "(E) RPC"
    ],
    "ans": 0,
    "exp": "ETL significa Extract, Transform, Load: extrair dados das fontes, transformá-los e carregá-los no destino analítico, como um data warehouse. Memorize: E-T-L = extrair, transformar, carregar."
  },
  {
    "id": 124,
    "originalId": 29,
    "exam": "FGV",
    "matter": "DevOps e CI/CD",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Difícil",
    "q": "Uma equipe automatizou o processo pelo qual cada alteração aprovada no repositório dispara compilação e testes automatizados, fornecendo feedback rápido sobre a integração do código, mas a publicação em produção ainda depende de decisão posterior. Esse cenário caracteriza principalmente:",
    "opts": [
      "(A) Continuous Integration",
      "(B) Continuous Deployment obrigatório",
      "(C) Big Bang Release",
      "(D) Waterfall",
      "(E) Teste exploratório manual"
    ],
    "ans": 0,
    "exp": "Continuous Integration enfatiza a integração frequente das alterações ao código compartilhado, acompanhada de build e testes automatizados. Continuous Deployment implica publicação automática em produção."
  },
  {
    "id": 125,
    "originalId": 30,
    "exam": "FGV",
    "matter": "Segurança de Aplicações",
    "category": "Segurança de Software",
    "difficulty": "Difícil",
    "q": "Durante o ciclo de desenvolvimento, uma empresa executa uma ferramenta de segurança diretamente sobre o código-fonte ou representação do código, sem precisar executar a aplicação para realizar a análise principal. Essa abordagem é classificada como:",
    "opts": [
      "(A) DAST",
      "(B) SAST",
      "(C) IAST exclusivamente",
      "(D) SIEM",
      "(E) WAF"
    ],
    "ans": 1,
    "exp": "SAST (Static Application Security Testing) analisa código ou artefatos estáticos sem depender da execução da aplicação como ocorre no DAST. Memorize: SAST = Static; DAST = Dynamic."
  }
];

if (typeof window !== 'undefined') {
  window.quizDataFgvLote02 = quizDataFgvLote02;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizDataFgvLote02;
}
