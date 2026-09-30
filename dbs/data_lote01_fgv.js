/**
 * Lote 01 — questões autorais baseadas no edital e no padrão das provas fornecidas.
 * Estrutura compatível com data(1).js: ans é índice zero-based.
 */

const quizDataFgvLote01 = [
  {
    "id": 1,
    "exam": "FGV",
    "matter": "DevOps",
    "category": "Desenvolvimento de Sistemas",
    "difficulty": "Médio",
    "q": "Uma equipe mantém uma aplicação Java em produção e deseja que cada alteração integrada ao repositório seja automaticamente compilada e submetida a testes antes de ser incorporada à linha principal. A prática descrita está diretamente associada à:",
    "opts": [
      "(A) Entrega contínua, pois toda alteração deve ser publicada automaticamente em produção.",
      "(B) Integração contínua, pois alterações são integradas frequentemente e validadas por uma esteira automatizada.",
      "(C) Programação em pares, pois dois desenvolvedores devem revisar cada commit.",
      "(D) Arquitetura hexagonal, pois a aplicação passa a depender de portas e adaptadores.",
      "(E) Infraestrutura imutável, pois o código não pode ser alterado."
    ],
    "ans": 1,
    "exp": "Integração Contínua (CI) enfatiza integração frequente do código e validação automatizada. Entrega contínua trata da capacidade de disponibilizar versões de forma frequente e confiável."
  },
  {
    "id": 2,
    "exam": "FGV",
    "matter": "Arquitetura de Software",
    "category": "Arquitetura",
    "difficulty": "Difícil",
    "q": "Uma aplicação foi estruturada para que regras de negócio não dependam diretamente de frameworks, banco de dados ou mecanismos de entrega. Adaptadores externos implementam interfaces definidas pelo núcleo da aplicação. Essa descrição é compatível com a:",
    "opts": [
      "(A) arquitetura hexagonal.",
      "(B) arquitetura monolítica sem separação de responsabilidades.",
      "(C) arquitetura cliente-servidor de duas camadas.",
      "(D) arquitetura baseada exclusivamente em filas.",
      "(E) arquitetura orientada a documentos."
    ],
    "ans": 0,
    "exp": "Na arquitetura hexagonal, o núcleo da aplicação é protegido por portas e adaptadores. Dependências externas ficam nas bordas, reduzindo o acoplamento do domínio."
  },
  {
    "id": 3,
    "exam": "FGV",
    "matter": "Microsserviços",
    "category": "Arquitetura",
    "difficulty": "Médio",
    "q": "Em uma arquitetura de microsserviços, diferentes clientes precisam acessar diversos serviços internos sem conhecer sua topologia individual. Um componente recebe as requisições dos clientes e as encaminha aos serviços correspondentes, podendo centralizar preocupações como autenticação e roteamento. Trata-se de um:",
    "opts": [
      "(A) banco de dados relacional.",
      "(B) API Gateway.",
      "(C) compilador.",
      "(D) message broker necessariamente.",
      "(E) servidor DNS autoritativo."
    ],
    "ans": 1,
    "exp": "O API Gateway funciona como ponto de entrada para clientes e pode centralizar roteamento, autenticação, políticas e composição de chamadas. Ele não é sinônimo de banco ou broker."
  },
  {
    "id": 4,
    "exam": "FGV",
    "matter": "Engenharia de Requisitos",
    "category": "Requisitos",
    "difficulty": "Médio",
    "q": "Durante a elicitação de requisitos, o analista reúne representantes de diferentes áreas e conduz uma discussão estruturada para identificar necessidades, conflitos e expectativas. A técnica descrita é mais adequadamente caracterizada como:",
    "opts": [
      "(A) grupo focal/workshop facilitado.",
      "(B) teste unitário.",
      "(C) análise estática.",
      "(D) refatoração.",
      "(E) teste de carga."
    ],
    "ans": 0,
    "exp": "Reuniões estruturadas com representantes para levantar e negociar necessidades são técnicas de elicitação, como workshops e grupos focais. Testes e análise estática pertencem a outras etapas."
  },
  {
    "id": 5,
    "exam": "FGV",
    "matter": "Engenharia de Requisitos",
    "category": "Requisitos",
    "difficulty": "Difícil",
    "q": "Um requisito estabelece que o sistema deverá permitir ao usuário cadastrar um pedido, enquanto outro determina que 95% das requisições de consulta deverão ser respondidas em até dois segundos. A classificação mais adequada é, respectivamente:",
    "opts": [
      "(A) não funcional e funcional.",
      "(B) funcional e não funcional.",
      "(C) funcional e funcional.",
      "(D) não funcional e não funcional.",
      "(E) técnico e exclusivamente regulatório."
    ],
    "ans": 1,
    "exp": "O primeiro descreve uma função oferecida pelo sistema; o segundo estabelece uma característica de desempenho. Portanto: funcional e não funcional."
  },
  {
    "id": 6,
    "exam": "FGV",
    "matter": "Testes de Software",
    "category": "Testes",
    "difficulty": "Médio",
    "q": "Um desenvolvedor pretende verificar, de forma isolada, o comportamento de uma classe responsável pelo cálculo de descontos, substituindo suas dependências externas por dublês de teste. O tipo de teste mais diretamente relacionado a esse objetivo é o teste:",
    "opts": [
      "(A) de aceitação.",
      "(B) unitário.",
      "(C) de sistema exclusivamente.",
      "(D) exploratório de produção.",
      "(E) de recuperação de desastre."
    ],
    "ans": 1,
    "exp": "Teste unitário verifica uma unidade pequena e isolada do software, frequentemente com dependências simuladas ou substituídas por mocks/stubs."
  },
  {
    "id": 7,
    "exam": "FGV",
    "matter": "TDD",
    "category": "Testes",
    "difficulty": "Difícil",
    "q": "Em TDD, uma equipe começa escrevendo um teste que falha, implementa o código mínimo necessário para fazê-lo passar e, em seguida, melhora a estrutura do código sem alterar o comportamento esperado. A sequência corresponde a:",
    "opts": [
      "(A) Deploy–Rollback–Monitor.",
      "(B) Red–Green–Refactor.",
      "(C) Plan–Build–Release.",
      "(D) Scan–Exploit–Patch.",
      "(E) Design–Compile–Delete."
    ],
    "ans": 1,
    "exp": "TDD é tradicionalmente associado ao ciclo Red–Green–Refactor: primeiro o teste falha, depois passa com uma implementação mínima e, por fim, o código é refatorado."
  },
  {
    "id": 8,
    "exam": "FGV",
    "matter": "Git",
    "category": "Controle de Versão",
    "difficulty": "Médio",
    "q": "Em um repositório Git, um desenvolvedor deseja criar uma nova linha de desenvolvimento a partir do estado atual de uma branch, permitindo trabalhar isoladamente até posteriormente integrar as alterações. O recurso apropriado é:",
    "opts": [
      "(A) branch.",
      "(B) tag exclusivamente.",
      "(C) stash como mecanismo permanente de integração.",
      "(D) commit --amend para criar uma linha paralela.",
      "(E) git diff, que cria uma cópia independente."
    ],
    "ans": 0,
    "exp": "Uma branch é uma linha de desenvolvimento independente no Git, permitindo commits separados até uma posterior integração, por exemplo, via merge ou rebase."
  },
  {
    "id": 9,
    "exam": "FGV",
    "matter": "APIs",
    "category": "Web Services",
    "difficulty": "Médio",
    "q": "Uma API REST recebe uma requisição HTTP GET para `/clientes/10`. Considerando a semântica usual de HTTP, o método GET é empregado principalmente para:",
    "opts": [
      "(A) solicitar a representação de um recurso, sem ter como finalidade principal alterar seu estado.",
      "(B) criar obrigatoriamente um novo recurso em toda chamada.",
      "(C) remover o recurso identificado.",
      "(D) substituir integralmente o recurso por outro.",
      "(E) iniciar uma transação distribuída obrigatoriamente."
    ],
    "ans": 0,
    "exp": "GET é utilizado para recuperar uma representação de recurso. Em condições normais, deve ser seguro e não ter como finalidade a alteração do estado do recurso."
  },
  {
    "id": 10,
    "exam": "FGV",
    "matter": "Frontend",
    "category": "Frontend Web",
    "difficulty": "Médio",
    "q": "Uma aplicação Web foi concebida para carregar inicialmente uma estrutura mínima e atualizar partes da interface conforme o usuário navega, sem exigir o carregamento integral de uma nova página a cada interação. Essa característica é típica de uma:",
    "opts": [
      "(A) SPA.",
      "(B) aplicação exclusivamente server-side sem JavaScript.",
      "(C) API SOAP obrigatoriamente.",
      "(D) aplicação batch.",
      "(E) aplicação de linha de comando."
    ],
    "ans": 0,
    "exp": "SPA (Single Page Application) mantém uma única página carregada e atualiza dinamicamente partes da interface, geralmente por JavaScript e chamadas a APIs."
  },
  {
    "id": 11,
    "exam": "FGV",
    "matter": "Banco de Dados",
    "category": "Banco de Dados",
    "difficulty": "Difícil",
    "q": "Uma tabela `Pedido` contém várias ocorrências do mesmo cliente e repete, em cada linha, o nome e o telefone desse cliente. O projeto é alterado para armazenar os dados do cliente em uma relação própria e manter em `Pedido` apenas a referência correspondente. Essa alteração busca principalmente reduzir:",
    "opts": [
      "(A) atomicidade das transações.",
      "(B) redundância e anomalias de atualização.",
      "(C) disponibilidade do banco.",
      "(D) integridade referencial.",
      "(E) isolamento entre transações."
    ],
    "ans": 1,
    "exp": "A normalização procura reduzir redundâncias e anomalias de inserção, atualização e exclusão. A chave estrangeira, por sua vez, pode preservar a integridade referencial."
  },
  {
    "id": 12,
    "exam": "FGV",
    "matter": "SQL",
    "category": "Banco de Dados",
    "difficulty": "Médio",
    "q": "Considere uma tabela `Produto(id, categoria, preco)`. Para obter, para cada categoria, o maior preço registrado, a consulta deve utilizar adequadamente uma função de agregação em conjunto com:",
    "opts": [
      "(A) GROUP BY categoria.",
      "(B) ORDER BY categoria sem agregação.",
      "(C) DISTINCT preco sem agrupamento.",
      "(D) UNION obrigatório.",
      "(E) COMMIT antes do SELECT."
    ],
    "ans": 0,
    "exp": "Ao calcular uma agregação separadamente para cada categoria, é necessário agrupar os registros por categoria: GROUP BY categoria. A função MAX(preco) produz o maior preço de cada grupo."
  },
  {
    "id": 13,
    "exam": "FGV",
    "matter": "Segurança da Informação",
    "category": "Segurança de Software",
    "difficulty": "Difícil",
    "q": "Em uma esteira de desenvolvimento, uma ferramenta examina o código-fonte e procura padrões potencialmente vulneráveis sem executar a aplicação. Essa técnica é conhecida como:",
    "opts": [
      "(A) DAST.",
      "(B) SAST.",
      "(C) teste de aceitação.",
      "(D) teste de usabilidade.",
      "(E) monitoramento de produção."
    ],
    "ans": 1,
    "exp": "SAST (Static Application Security Testing) analisa artefatos de código sem executar a aplicação. DAST testa a aplicação em execução."
  },
  {
    "id": 14,
    "exam": "FGV",
    "matter": "HTTPS/TLS",
    "category": "Segurança de Software",
    "difficulty": "Médio",
    "q": "Ao acessar uma aplicação por HTTPS, o objetivo principal do TLS é proteger a comunicação entre cliente e servidor, fornecendo mecanismos para confidencialidade e integridade e permitindo autenticação baseada em certificados. O HTTPS pode ser entendido, portanto, como:",
    "opts": [
      "(A) HTTP transportado sobre uma camada de segurança fornecida pelo TLS.",
      "(B) HTTP substituído integralmente por UDP sem criptografia.",
      "(C) DNS combinado obrigatoriamente com FTP.",
      "(D) protocolo exclusivo para redes locais.",
      "(E) mecanismo que elimina a necessidade de autenticação do servidor."
    ],
    "ans": 0,
    "exp": "HTTPS é HTTP protegido por TLS. O TLS fornece proteção criptográfica à comunicação e, no uso típico com certificados de servidor, permite autenticar a identidade do servidor."
  },
  {
    "id": 15,
    "exam": "FGV",
    "matter": "UX e Acessibilidade",
    "category": "UX",
    "difficulty": "Médio",
    "q": "Em uma aplicação Web, um botão importante é identificado apenas por uma cor específica. Usuários com determinada deficiência de percepção de cores podem não conseguir distinguir sua função. A medida de projeto mais adequada é:",
    "opts": [
      "(A) remover todo texto do botão.",
      "(B) utilizar somente uma cor ainda mais intensa.",
      "(C) combinar a informação de cor com texto, ícone ou outro indicador perceptível.",
      "(D) ocultar o botão para usuários com deficiência.",
      "(E) substituir o botão por uma imagem sem descrição."
    ],
    "ans": 2,
    "exp": "Informação não deve depender exclusivamente da cor. Texto, ícones, rótulos e outros indicadores tornam a informação perceptível por mais usuários e melhoram a acessibilidade."
  },
];

if (typeof window !== 'undefined') {
  window.quizDataFgvLote01 = quizDataFgvLote01;
  window.quizDataLote01Fgv = quizDataFgvLote01;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quizDataFgvLote01 };
}
