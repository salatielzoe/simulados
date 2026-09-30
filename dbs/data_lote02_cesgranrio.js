// LOTE 02 — CESGRANRIO — ÊNFASE 7
const quizDataCesgranrioLote02 = [
  {
    "id": 96,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Ataques a Protocolos",
    "difficulty": "Médio",
    "q": "Durante uma análise de segurança, um atacante envia repetidamente segmentos TCP com a flag SYN para uma porta aberta, sem completar o estabelecimento da conexão. O servidor mantém estruturas de conexões parcialmente abertas até esgotar recursos. Esse ataque é conhecido como:",
    "opts": [
      "(A) DNS cache poisoning",
      "(B) SYN flood",
      "(C) ARP spoofing",
      "(D) UDP amplification",
      "(E) TCP session hijacking"
    ],
    "ans": 1,
    "exp": "O SYN flood explora o handshake TCP: o atacante envia muitos SYN e não conclui as conexões, fazendo o alvo manter estados parcialmente abertos e podendo consumir seus recursos. Memorize: SYN flood = excesso de SYN sem completar o handshake."
  },
  {
    "id": 97,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Ataques a Protocolos",
    "difficulty": "Difícil",
    "q": "Um usuário acessa normalmente um domínio, mas recebe respostas DNS contendo um endereço IP incorreto, fazendo-o ser direcionado para um servidor controlado por terceiros. Esse cenário é típico de:",
    "opts": [
      "(A) DNS cache poisoning",
      "(B) DHCP starvation",
      "(C) ICMP tunneling",
      "(D) TCP SYN flood",
      "(E) HTTP request smuggling"
    ],
    "ans": 0,
    "exp": "DNS cache poisoning consiste em inserir ou fazer prevalecer respostas DNS falsas em um resolvedor/cache, levando consultas legítimas a endereços indevidos. Memorize: poisoning = envenenamento do cache DNS."
  },
  {
    "id": 98,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Segurança em Redes",
    "difficulty": "Médio",
    "q": "Em uma rede local, um equipamento passa a anunciar que o endereço MAC correspondente ao IP do gateway é o seu próprio endereço MAC. Como consequência, o tráfego de outros hosts pode ser desviado para esse equipamento. Essa técnica caracteriza:",
    "opts": [
      "(A) DNS tunneling",
      "(B) ARP spoofing",
      "(C) IP fragmentation",
      "(D) DHCP relay",
      "(E) Port knocking"
    ],
    "ans": 1,
    "exp": "No ARP spoofing, mensagens ARP falsas associam um IP legítimo, como o do gateway, ao MAC do atacante. Isso pode permitir interceptação de tráfego e ataques Man-in-the-Middle. Memorize: ARP traduz IP em MAC na rede local; spoofing falsifica essa associação."
  },
  {
    "id": 99,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Segurança em Redes",
    "difficulty": "Médio",
    "q": "Uma estação recebe automaticamente como gateway padrão e servidor DNS os endereços fornecidos por um equipamento não autorizado conectado à mesma rede. O equipamento legítimo continua funcionando, mas alguns clientes passam a utilizar parâmetros fornecidos pelo equipamento malicioso. O ataque descrito é compatível com:",
    "opts": [
      "(A) Rogue DHCP server",
      "(B) Evil Twin",
      "(C) DNSSEC downgrade",
      "(D) SYN flood",
      "(E) ARP inspection"
    ],
    "ans": 0,
    "exp": "Um Rogue DHCP Server é um servidor DHCP não autorizado que responde às solicitações dos clientes e pode fornecer gateway, DNS e outros parâmetros indevidos. Memorize: DHCP entrega configuração; rogue DHCP entrega configuração maliciosa."
  },
  {
    "id": 100,
    "exam": "CESGRANRIO",
    "matter": "Engenharia Social",
    "category": "Princípios de Segurança",
    "difficulty": "Médio",
    "q": "Um indivíduo entra em uma área restrita acompanhando um funcionário autorizado que abriu a porta, aproveitando-se da situação para evitar a autenticação exigida. Essa técnica é denominada:",
    "opts": [
      "(A) Baiting",
      "(B) Tailgating",
      "(C) Smishing",
      "(D) Pretexting",
      "(E) Quid pro quo"
    ],
    "ans": 1,
    "exp": "Tailgating ocorre quando o atacante aproveita a entrada de uma pessoa autorizada para acessar uma área restrita sem a própria autorização. Memorize: tailgating = seguir alguém autorizado pela porta."
  },
  {
    "id": 101,
    "exam": "CESGRANRIO",
    "matter": "Código Malicioso",
    "category": "Malware",
    "difficulty": "Médio",
    "q": "Um código malicioso é inserido em uma página de pagamento de comércio eletrônico e captura, diretamente no navegador da vítima, dados de cartão digitados no formulário. A categoria associada é:",
    "opts": [
      "(A) Worm",
      "(B) Rootkit",
      "(C) Formjacking",
      "(D) Cryptojacking",
      "(E) Downloader"
    ],
    "ans": 2,
    "exp": "Formjacking consiste em inserir código malicioso em páginas de formulário para capturar dados enviados pelo usuário, especialmente em páginas de pagamento. Memorize: form + hijacking = sequestro dos dados do formulário."
  },
  {
    "id": 102,
    "exam": "CESGRANRIO",
    "matter": "Ferramentas de Segurança",
    "category": "Red Team & Pentest",
    "difficulty": "Fácil",
    "q": "Em um teste de segurança autorizado, a equipe deseja descobrir portas abertas, serviços e informações básicas sobre os hosts de uma rede. A ferramenta tradicionalmente associada a essa atividade é:",
    "opts": [
      "(A) Nmap",
      "(B) Ghidra",
      "(C) Steghide",
      "(D) Hashcat",
      "(E) Volatility"
    ],
    "ans": 0,
    "exp": "O Nmap é amplamente utilizado para descoberta de hosts, varredura de portas e identificação de serviços em avaliações autorizadas. Memorize: Nmap = Network Mapper."
  },
  {
    "id": 103,
    "exam": "CESGRANRIO",
    "matter": "Ferramentas de Segurança",
    "category": "Segurança em Redes",
    "difficulty": "Fácil",
    "q": "Em uma investigação de rede, o analista precisa capturar e examinar pacotes para identificar protocolos, endereços, fluxos e possíveis anomalias. A ferramenta diretamente associada é:",
    "opts": [
      "(A) Wireshark",
      "(B) Ghidra",
      "(C) John the Ripper",
      "(D) Metasploit",
      "(E) SET"
    ],
    "ans": 0,
    "exp": "O Wireshark é um analisador de protocolos de rede usado para captura e inspeção detalhada de pacotes. Memorize: Wireshark = olhar o que está trafegando na rede."
  },
  {
    "id": 104,
    "exam": "CESGRANRIO",
    "matter": "Ferramentas de Segurança",
    "category": "Web Security & OWASP",
    "difficulty": "Médio",
    "q": "Em uma avaliação autorizada de uma aplicação web, a equipe deseja automatizar testes relacionados a SQL Injection em parâmetros de requisições. A ferramenta mais diretamente associada é:",
    "opts": [
      "(A) sqlmap",
      "(B) amass",
      "(C) arpwatch",
      "(D) steghide",
      "(E) airgeddon"
    ],
    "ans": 0,
    "exp": "O sqlmap é uma ferramenta voltada à automação de testes e exploração de SQL Injection em aplicações autorizadas. Memorize: sqlmap = SQL + automação de testes."
  },
  {
    "id": 105,
    "exam": "CESGRANRIO",
    "matter": "Ferramentas de Segurança",
    "category": "Red Team & Pentest",
    "difficulty": "Médio",
    "q": "Uma equipe de teste de intrusão autorizado precisa utilizar uma plataforma que reúna recursos para desenvolvimento, seleção e execução de módulos de exploração e atividades auxiliares de pós-exploração. A ferramenta é:",
    "opts": [
      "(A) Metasploit Framework",
      "(B) Wireshark",
      "(C) Nmap",
      "(D) Ghidra",
      "(E) Maltego"
    ],
    "ans": 0,
    "exp": "O Metasploit Framework é uma plataforma de testes de penetração que reúne módulos e recursos para exploração controlada e atividades relacionadas. Memorize: Metasploit = framework de exploração para pentest autorizado."
  },
  {
    "id": 106,
    "exam": "CESGRANRIO",
    "matter": "MITRE ATT&CK",
    "category": "Red Team & Pentest",
    "difficulty": "Difícil",
    "q": "No contexto dos frameworks MITRE, uma equipe deseja consultar padrões de ataques cibernéticos, enquanto outra deseja mapear comportamentos adversários observados em operações. A distinção correta é:",
    "opts": [
      "(A) CAPEC descreve padrões de ataque; ATT&CK organiza conhecimento sobre táticas e técnicas adversárias.",
      "(B) CAPEC é exclusivamente uma matriz de controles defensivos; ATT&CK é um catálogo de algoritmos criptográficos.",
      "(C) CAPEC substitui o ATT&CK e contém apenas vulnerabilidades CVE.",
      "(D) ATT&CK descreve somente vulnerabilidades de software; CAPEC descreve somente incidentes reais.",
      "(E) Ambos são exclusivamente bancos de assinaturas de antivírus."
    ],
    "ans": 0,
    "exp": "CAPEC organiza padrões de ataque. MITRE ATT&CK organiza conhecimento sobre comportamento adversário, incluindo táticas e técnicas. Memorize: CAPEC = padrões de ataque; ATT&CK = comportamento adversário."
  },
  {
    "id": 107,
    "exam": "CESGRANRIO",
    "matter": "Segurança Defensiva",
    "category": "Firewall e IDS/IPS",
    "difficulty": "Médio",
    "q": "Um firewall mantém informações sobre o estado das conexões e, ao receber um pacote, considera também o estado da sessão à qual ele pertence. Esse firewall é classificado como:",
    "opts": [
      "(A) Filtro de pacotes sem estado",
      "(B) Firewall stateful",
      "(C) Proxy reverso exclusivamente",
      "(D) IDS passivo",
      "(E) WAF dedicado"
    ],
    "ans": 1,
    "exp": "Um firewall stateful acompanha o estado das conexões e usa esse contexto nas decisões de filtragem. Um filtro stateless analisa cada pacote sem manter esse estado de sessão. Memorize: stateful = conhece o estado da conexão."
  },
  {
    "id": 108,
    "exam": "CESGRANRIO",
    "matter": "WAF & Aplicações Web",
    "category": "Web Security & OWASP",
    "difficulty": "Médio",
    "q": "Uma organização deseja proteger aplicações web contra ataques à camada de aplicação, como tentativas de SQL Injection e XSS, usando regras específicas para requisições HTTP. O componente mais diretamente adequado é o:",
    "opts": [
      "(A) WAF",
      "(B) Hub",
      "(C) Repetidor",
      "(D) DHCP Server",
      "(E) Balanceador L2 sem inspeção de aplicação"
    ],
    "ans": 0,
    "exp": "O Web Application Firewall (WAF) inspeciona e aplica regras sobre tráfego de aplicações web, ajudando a detectar e bloquear ataques como SQL Injection e XSS. Memorize: WAF = firewall da aplicação web."
  },
  {
    "id": 109,
    "exam": "CESGRANRIO",
    "matter": "SIEM & Logs",
    "category": "Forense & Incidentes",
    "difficulty": "Difícil",
    "q": "Uma organização centraliza logs de firewall, servidores, aplicações e autenticação. A solução correlaciona eventos de diferentes fontes e gera alertas para apoiar a investigação de incidentes. Essa solução corresponde a:",
    "opts": [
      "(A) SIEM",
      "(B) RAID",
      "(C) SSO",
      "(D) HSM",
      "(E) CDN"
    ],
    "ans": 0,
    "exp": "SIEM significa Security Information and Event Management. Seu foco inclui centralização, correlação e análise de eventos de segurança de múltiplas fontes. Memorize: SIEM = reúne logs + correlaciona eventos + apoia detecção."
  },
  {
    "id": 110,
    "exam": "CESGRANRIO",
    "matter": "Segurança Defensiva",
    "category": "Firewall e IDS/IPS",
    "difficulty": "Médio",
    "q": "Considere uma solução que identifica tráfego suspeito e gera alertas, mas não está posicionada para bloquear automaticamente o tráfego malicioso. Em relação ao IPS, essa característica é mais associada a um:",
    "opts": [
      "(A) IDS",
      "(B) WAF",
      "(C) Proxy",
      "(D) EDR",
      "(E) CASB"
    ],
    "ans": 0,
    "exp": "O IDS tem como função principal detectar atividades suspeitas e alertar. O IPS, além de detectar, pode atuar preventivamente bloqueando ou interrompendo tráfego considerado malicioso. Memorize: IDS = detecta; IPS = detecta e pode prevenir/bloquear."
  }
];

if (typeof window !== 'undefined') {
  window.quizDataCesgranrioLote02 = quizDataCesgranrioLote02;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizDataCesgranrioLote02;
}
