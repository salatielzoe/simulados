/**
 * Banco de Dados de Questões - Simulado Cesgranrio Transpetro
 * Ênfase 7: Segurança Cibernética e da Informação
 * Total: 50 Questões Objetivas com Gabarito Comentado
 */

const quizData = [
    {
        "id": 1,
        "category": "Red Team & Pentest",
        "difficulty": "Médio",
        "q": "Um analista de segurança cibernética está conduzindo um teste de intrusão e precisa realizar uma varredura de portas furtiva (stealth) que não complete a conexão TCP de três vias (three-way handshake) e que evite registrar conexões completas nas aplicações dos servidores-alvo. O comando Nmap e o sinalizador corretos para atingir esse objetivo são:",
        "opts": [
            "(A) nmap -sT 192.168.1.0/24",
            "(B) nmap -sS 192.168.1.0/24",
            "(C) nmap -sU 192.168.1.0/24",
            "(D) nmap -sA 192.168.1.0/24",
            "(E) nmap -sV 192.168.1.0/24"
        ],
        "ans": 1,
        "exp": "O sinalizador -sS ativa o TCP SYN Scan (meio-aberto / stealth scan). Ele envia um pacote SYN; se receber SYN/ACK, envia imediatamente um RST para abortar a conexão sem completar o aperto de mãos (handshake). O -sT completa a conexão (TCP Connect), o -sU é para UDP, o -sA é ACK scan para mapear regras de firewall e o -sV detecta versões de serviços."
    },
    {
        "id": 2,
        "category": "Legislação & Criptografia",
        "difficulty": "Fácil",
        "q": "Durante a execução de um pentest interno em ambiente Active Directory corporativo, o operador utiliza o Mimikatz para extrair credenciais da memória do processo lsass.exe. O comando específico do Mimikatz utilizado para descarregar senhas em texto claro por meio do provedor WDigest é:",
        "opts": [
            "(A) kerberos::golden",
            "(B) sekurlsa::logonpasswords",
            "(C) lsadump::dcsync",
            "(D) privilege::debug /process:lsass",
            "(E) token::elevate"
        ],
        "ans": 1,
        "exp": "O módulo sekurlsa::logonpasswords do Mimikatz extrai senhas em texto plano, hashes NTLM e tíquetes Kerberos diretamente da memória do LSASS (LSA Security Authority Subsystem Service), lendo os provedores de autenticação como o WDigest."
    },
    {
        "id": 3,
        "category": "Normas & Governança",
        "difficulty": "Difícil",
        "q": "A ABNT NBR ISO/IEC 27002:2022 reestruturou os controles de segurança em 4 temas principais. O controle de 'Gestão de Configuração' (Configuration Management) está classificado sob qual tema?",
        "opts": [
            "(A) Controles Organizacionais",
            "(B) Controles de Pessoas",
            "(C) Controles Físicos",
            "(D) Controles Tecnológicos",
            "(E) Controles Ambientais"
        ],
        "ans": 3,
        "exp": "Na ISO/IEC 27002:2022, o controle 8.9 (Gestão de configurações) é classificado sob o tema 'Controles Tecnológicos' (Tema 8). Os 4 temas da norma são: Organizacionais (Tema 5), Pessoas (Tema 6), Físicos (Tema 7) e Tecnológicos (Tema 8)."
    },
    {
        "id": 4,
        "category": "Segurança Industrial (OT/ICS)",
        "difficulty": "Médio",
        "q": "Na arquitetura de segurança para sistemas de controle e automação industrial (IACS) definida pela norma ANSI/ISA-62443 (e IEC 62443), o conceito que consiste no agrupamento lógico de ativos industriais que compartilham os mesmos requisitos de segurança é denominado:",
        "opts": [
            "(A) Canal Conduíte (Conduit)",
            "(B) Nível de Vetor (Vector Level)",
            "(C) Zona (Zone)",
            "(D) Enclave DMZ",
            "(E) Barramento de Telemetria"
        ],
        "ans": 2,
        "exp": "Na IEC 62443-3-2, uma 'Zona' é uma coleção lógica ou física de ativos que possuem requisitos comuns de segurança cibernética. A comunicação entre diferentes Zonas é governada exclusivamente por 'Condutos' (Conduits)."
    },
    {
        "id": 5,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "O Framework MITRE ATT&CK organiza o comportamento dos adversários cibernéticos. A diferença fundamental entre 'Tática' (Tactic) e 'Técnica' (Technique) no modelo ATT&CK é que a Tática representa:",
        "opts": [
            "(A) a ferramenta ou malware específico utilizado pelo invasor, enquanto a Técnica define a versão do exploit.",
            "(B) o objetivo do adversário (o 'porquê'), enquanto a Técnica descreve a ação concreta executada para alcançar esse objetivo (o 'como').",
            "(C) o indicador de comprometimento (IoC) em nível de rede, enquanto a Técnica detalha o hash do executável.",
            "(D) a resposta do time defensivo (Blue Team), enquanto a Técnica é o ataque executado pelo Red Team.",
            "(E) a fase cronológica estrita de um ataque, sendo a Técnica a probabilidade de falha desse ataque."
        ],
        "ans": 1,
        "exp": "No MITRE ATT&CK, 'Tática' descreve a meta operacional ou tática do atacante (ex.: Acesso Inicial, Persistência, Movimentação Lateral) - o 'porquê'. Já a 'Técnica' descreve a maneira de executar esse objetivo (o 'como')."
    },
    {
        "id": 6,
        "category": "Normas & Governança",
        "difficulty": "Médio",
        "q": "No contexto da gestão de riscos de segurança da informação segundo a ABNT NBR ISO/IEC 27005:2023, quando uma organização decide contratar uma apólice de seguro cibernético para cobrir possíveis perdas financeiras decorrentes de incidentes, ela está adotando a seguinte opção de tratamento de risco:",
        "opts": [
            "(A) Retenção do risco (Risk retention)",
            "(B) Modificação do risco (Risk modification)",
            "(C) Compartilhamento do risco (Risk sharing)",
            "(D) Evitação do risco (Risk avoidance)",
            "(E) Eliminação total do risco (Risk nullification)"
        ],
        "ans": 2,
        "exp": "Compartilhar o risco (risk sharing / transferência) envolve dividir ou repassar parte dos custos e perdas com terceiros, sendo a contratação de apólices de seguro ou contratos com fornecedores os exemplos clássicos citados na ISO 27005."
    },
    {
        "id": 7,
        "category": "Red Team & Pentest",
        "difficulty": "Fácil",
        "q": "A ferramenta de engenharia reversa Ghidra, desenvolvida pela NSA e amplamente utilizada em análise de malwares, possui como funcionalidade nuclear que a distingue de disassemblers puramente estáticos lineares a capacidade de:",
        "opts": [
            "(A) executar exploits em tempo real contra sistemas remotos sem necessidade de payload.",
            "(B) descompilar código de máquina em pseudocódigo legível em linguagem semelhante a C.",
            "(C) calcular automaticamente colisões SHA-256 para forjar certificados digitais.",
            "(D) atuar como firewall de camada de aplicação inspecionando tráfego TLS em tempo real.",
            "(E) converter automaticamente malwares Windows em binários ELF Linux sem perda de funções."
        ],
        "ans": 1,
        "exp": "O principal diferencial do Ghidra (além de sua arquitetura baseada em Sleigh) é o seu Decompiler integrado gratuito, capaz de traduzir instruções de assembly/código de máquina para uma representação em pseudocódigo C de alta legibilidade."
    },
    {
        "id": 8,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "Um atacante posiciona um ponto de acesso sem fio falso nas imediações de um terminal portuário, clonando o SSID e o endereço MAC do roteador legítimo da empresa, transmitindo com maior potência para forçar a reconexão das estações corporativas. Esse vetor de ataque Wi-Fi é classificado como:",
        "opts": [
            "(A) War driving",
            "(B) Evil Twin (Gêmeo Maligno)",
            "(C) Bluebugging",
            "(D) VLAN Hopping",
            "(E) Buffer Overflow"
        ],
        "ans": 1,
        "exp": "O Evil Twin é uma variante maliciosa de rogue AP configurada para imitar exatamente o SSID e configurações de uma rede legítima (muitas vezes forçando a desassociação prévia do AP legítimo) para interceptar o tráfego dos usuários."
    },
    {
        "id": 9,
        "category": "Normas & Governança",
        "difficulty": "Médio",
        "q": "No framework NIST CSF 2.0 (Cybersecurity Framework), lançado em 2024, foi introduzida uma nova Função aos pilares existentes (Identify, Protect, Detect, Respond, Recover). Essa nova Função denomina-se:",
        "opts": [
            "(A) Analyze",
            "(B) Govern (Governar)",
            "(C) Mitigate",
            "(D) Enforce",
            "(E) Automate"
        ],
        "ans": 1,
        "exp": "O NIST CSF 2.0 adicionou oficialmente a Função GOVERN (GV), que permeia todas as outras funções e estabelece a estratégia, políticas, liderança e gestão de riscos da organização em cibersegurança."
    },
    {
        "id": 10,
        "category": "Segurança em Redes",
        "difficulty": "Difícil",
        "q": "No protocolo TLS 1.3 (RFC 8446), para aumentar a segurança e garantir o sigilo direto perfeito (PFS - Perfect Forward Secrecy), foi removido expressamente o suporte a:",
        "opts": [
            "(A) Curvas Elípticas ECDHE",
            "(B) Mecanismos de troca de chaves RSA estático e cifras sem suporte a AEAD",
            "(C) Hashes SHA-256 e SHA-384",
            "(D) Troca de chaves Diffie-Hellman efêmero",
            "(E) Autenticação mútua baseada em certificados X.509"
        ],
        "ans": 1,
        "exp": "O TLS 1.3 removeu completamente o suporte à troca de chaves RSA estático (que não provê Perfect Forward Secrecy) e suites de cifras antigas/vulneráveis (CBC, RC4), exigindo exclusivamente cifras do tipo AEAD (como AES-GCM e ChaCha20-Poly1305) com troca DHE/ECDHE efêmera."
    },
    {
        "id": 11,
        "category": "Normas & Governança",
        "difficulty": "Médio",
        "q": "De acordo com a norma ABNT NBR ISO/IEC 27035-1:2023 (Gestão de incidentes de segurança da informação), o ciclo de vida estruturado do processo de gestão de incidentes é composto pelas fases:",
        "opts": [
            "(A) Identificação, Bloqueio, Erradicação e Punição.",
            "(B) Planejamento e preparação; Detecção e relatório; Avaliação e decisão; Respostas; e Lições aprendidas.",
            "(C) Varredura; Exploração; Pós-exploração; e Limpeza de logs.",
            "(D) Criação de regras; Aplicação de patches; Reinicialização de servidores; e Auditoria.",
            "(E) Análise de impacto; Assinatura de contrato; Execução de testes; e Arquivamento."
        ],
        "ans": 1,
        "exp": "A ISO/IEC 27035-1 estrutura a gestão de incidentes em 5 fases contínuas: 1. Planejamento e preparação; 2. Detecção e relato; 3. Avaliação e decisão; 4. Respostas; 5. Lições aprendidas."
    },
    {
        "id": 12,
        "category": "Forense & Incidentes",
        "difficulty": "Fácil",
        "q": "Em uma investigação de computação forense após um incidente de ransomware, o perito deve coletar evidências voláteis seguindo a Ordem de Volatilidade (RFC 3227). Qual dos seguintes componentes deve ser adquirido prioritariamente?",
        "opts": [
            "(A) Dados em disco rígido magnético não inicializado",
            "(B) Registros em mídia óptica gravável (CD/DVD)",
            "(C) Conteúdo da memória física (RAM) e registradores/cache da CPU",
            "(D) Fitas de backup magnéticas armazenadas no cofre",
            "(E) Tabelas de partições e logs do Active Directory arquivados"
        ],
        "ans": 2,
        "exp": "De acordo com a RFC 3227, a ordem de volatilidade prioriza: 1. Registradores e cache da CPU; 2. Tabela de roteamento, cache ARP, tabela de processos, memória do kernel, memória RAM; 3. Sistemas de arquivos temporários; 4. Discos rígidos; 5. Mídias arquivadas (backups, fitas)."
    },
    {
        "id": 13,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "Ao utilizar a ferramenta John the Ripper para quebrar senhas armazenadas, qual modo de ataque utiliza regras fonéticas e heurísticas pré-programadas para modificar palavras do dicionário (por exemplo, substituindo 'a' por '@' ou adicionando números ao final)?",
        "opts": [
            "(A) Modo Incremental (Incremental mode)",
            "(B) Modo Força Bruta Pura (Pure Brute-force)",
            "(C) Modo Wordlist com Mangle/Rules",
            "(D) Modo Dicionário Simples sem regras",
            "(E) Modo Markov"
        ],
        "ans": 2,
        "exp": "O modo Wordlist com Rules (Regras de 'Mangling') no John the Ripper aplica transformações heurísticas (l33t speak, sufixos numéricos, capitalização) sobre as palavras da wordlist para cobrir variações comuns criadas por usuários."
    },
    {
        "id": 14,
        "category": "Legislação & Criptografia",
        "difficulty": "Médio",
        "q": "No contexto da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), a entidade responsável pela emissão de carimbos de tempo (Time Stamping), comprovando a data e a hora exatas em que um documento eletrônico foi assinado, é a:",
        "opts": [
            "(A) Autoridade Certificadora Raiz (AC Raiz)",
            "(B) Autoridade de Registro (AR)",
            "(C) Autoridade de Carimbo do Tempo (ACT)",
            "(D) Autoridade Fiscalizadora do COAF",
            "(E) Comissão de Valores Mobiliários (CVM)"
        ],
        "ans": 2,
        "exp": "Na estrutura da ICP-Brasil, a Autoridade de Carimbo do Tempo (ACT) é a entidade acreditada junto ao ITI que emite Carimbos de Tempo digitais, atestando formalmente a temporalidade do documento."
    },
    {
        "id": 15,
        "category": "Segurança em Redes",
        "difficulty": "Difícil",
        "q": "Qual ataque de camada de enlace (Link Layer) explora a ausência de autenticação nas mensagens de resolução de endereços IP para MAC em uma rede local Ethernet, permitindo interceptação e desvio de pacotes via Man-in-the-Middle?",
        "opts": [
            "(A) DNS Amplification",
            "(B) BGP Hijacking",
            "(C) ARP Poisoning (ou ARP Spoofing)",
            "(D) SYN Flood",
            "(E) Smurf Attack"
        ],
        "ans": 2,
        "exp": "O ARP Spoofing/Poisoning ocorre quando um atacante envia mensagens ARP Reply forjadas (gratuitous ARP) associando seu endereço MAC ao endereço IP do gateway ou de outro host legítimo da rede local."
    },
    {
        "id": 16,
        "category": "Red Team & Pentest",
        "difficulty": "Médio",
        "q": "O framework MITRE CAPEC (Common Attack Pattern Enumeration and Classification) tem como objetivo primordial:",
        "opts": [
            "(A) catalogar hashes criptográficos de binários de malwares para uso direto em antivírus.",
            "(B) fornecer um dicionário público e abrangente de padrões de ataque conhecidos, auxiliando arquitetos e desenvolvedores a compreender como fraquezas de software são exploradas.",
            "(C) estabelecer a tabela de remuneração de auditores de conformidade ISO 27001.",
            "(D) configurar automaticamente firewalls corporativos por meio de agentes remotos.",
            "(E) registrar formalmente nomes de domínio fraudulentos criados para campanhas de phishing."
        ],
        "ans": 1,
        "exp": "O CAPEC cataloga padrões de ataque (Attack Patterns) para ajudar defensores a entenderem o mecanismo pelo qual fraquezas de software (CWEs) são alavancadas por atacantes."
    },
    {
        "id": 17,
        "category": "Segurança Industrial (OT/ICS)",
        "difficulty": "Fácil",
        "q": "O Guia NIST SP 800-82 (Guide to Operational Technology Security) destaca as diferenças cruciais entre a TI corporativa tradicional e a TO (Tecnologia Operacional / Redes Industriais). Em relação à tríade de segurança (CIA), qual é a prioridade típica em ambientes industriais críticos (TO)?",
        "opts": [
            "(A) Confidencialidade em primeiro lugar, seguida de Integridade e Disponibilidade.",
            "(B) Integridade em primeiro lugar, seguida de Confidencialidade e Disponibilidade.",
            "(C) Disponibilidade e Segurança Física (Safety) em primeiro lugar, seguidas de Integridade e, por último, Confidencialidade.",
            "(D) Confidencialidade e Não-repúdio apenas, ignorando-se a disponibilidade dos PLCs.",
            "(E) A ordem de prioridades entre TI e TO é absolutamente idêntica em todas as situações."
        ],
        "ans": 2,
        "exp": "Em redes industriais (TO), a prioridade número 1 é a Disponibilidade (Availability) e a segurança de vidas e equipamentos (Safety), seguidas da Integridade dos dados do processo. A Confidencialidade costuma ter menor prioridade do que a parada de uma refinaria ou duto."
    },
    {
        "id": 18,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "A ferramenta de inteligência de fontes abertas (OSINT) 'theHarvester' é utilizada primariamente durante qual fase do ciclo de um teste de intrusão cibernético?",
        "opts": [
            "(A) Varredura de vulnerabilidades de buffer overflow",
            "(B) Footprinting e reconhecimento passivo de e-mails, subdomínios, IPs e funcionários",
            "(C) Pós-exploração e movimentação lateral via Kerberoasting",
            "(D) Destruição e ofuscação de logs do Windows Event Viewer",
            "(E) Injeção de código SQL em servidores de banco de dados"
        ],
        "ans": 1,
        "exp": "O theHarvester é uma ferramenta clássica de Footprinting/OSINT projetada para coletar e-mails, nomes de funcionários, subdomínios, IPs e URLs a partir de motores de busca públicos e servidores PGP."
    },
    {
        "id": 19,
        "category": "Normas & Governança",
        "difficulty": "Médio",
        "q": "Na norma ABNT NBR ISO 22301:2020 (Segurança e resiliência - Sistemas de gestão de continuidade de negócios), o parâmetro que define o período máximo admissível em que um processo de negócio pode ficar inoperante após um desastre sem causar dano irreparável à organização é o:",
        "opts": [
            "(A) Recovery Point Objective (RPO)",
            "(B) Maximum Tolerable Period of Disruption (MTPD)",
            "(C) Mean Time Between Failures (MTBF)",
            "(D) Service Level Agreement (SLA)",
            "(E) Return on Security Investment (ROSI)"
        ],
        "ans": 1,
        "exp": "O MTPD (Maximum Tolerable Period of Disruption) ou MAO (Maximum Acceptable Outage) é o tempo máximo aceitável que a organização suporta a paralisação de um serviço antes de incorrer em danos inaceitáveis/fatais."
    },
    {
        "id": 20,
        "category": "Legislação & Criptografia",
        "difficulty": "Difícil",
        "q": "No contexto da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), a pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais é denominada:",
        "opts": [
            "(A) Operador",
            "(B) Encarregado (DPO)",
            "(C) Controlador",
            "(D) Autoridade Nacional",
            "(E) Auditor Externo"
        ],
        "ans": 2,
        "exp": "Conforme o art. 5º, VI, da LGPD, o 'Controlador' é a pessoa a quem competem as decisões sobre o tratamento de dados pessoais. O Operador apenas realiza o tratamento em nome do controlador."
    },
    {
        "id": 21,
        "category": "Segurança em Redes",
        "difficulty": "Médio",
        "q": "Um analista de cibersegurança intercepta o seguinte filtro de captura na ferramenta Wireshark: 'tcp.flags.syn == 1 and tcp.flags.ack == 0'. Qual o objetivo precípuo dessa expressão?",
        "opts": [
            "(A) Capturar pacotes de dados HTTP POST completos.",
            "(B) Identificar pacotes de início de conexão TCP (tentativas de abertura de sessão TCP/SYN).",
            "(C) Capturar o encerramento gracioso de conexões TCP via flag FIN.",
            "(D) Filtrar erros de checksum em transferências UDP.",
            "(E) Visualizar pacotes DNS de broadcast em redes locais."
        ],
        "ans": 1,
        "exp": "Pacotes com SYN=1 e ACK=0 são os pacotes iniciais do aperto de mãos TCP (o primeiro passo do 3-way handshake). São fundamentais para rastrear novas conexões e tentativas de varredura SYN."
    },
    {
        "id": 22,
        "category": "Red Team & Pentest",
        "difficulty": "Fácil",
        "q": "Em relação ao Metasploit Framework, qual é a categoria de módulos que não entrega um payload no sistema remoto, mas executa ações como varreduras de portas, enumeração de serviços, bruteforce e coleta de dados preliminares?",
        "opts": [
            "(A) Exploits",
            "(B) Payloads",
            "(C) Post",
            "(D) Auxiliary",
            "(E) Encoders"
        ],
        "ans": 3,
        "exp": "Os módulos da categoria 'Auxiliary' no Metasploit realizam ações de varredura, scanning, sniffing e verificação sem a finalidade direta de injetar ou executar um payload persistente no alvo."
    },
    {
        "id": 23,
        "category": "Web Security & OWASP",
        "difficulty": "Difícil",
        "q": "O modelo de maturidade OWASP SAMM (Software Assurance Maturity Model) estrutura a segurança no ciclo de vida de desenvolvimento de software em 5 funções de negócio essenciais. Quais são essas funções?",
        "opts": [
            "(A) Identificar, Proteger, Detectar, Responder e Recuperar.",
            "(B) Governança, Design, Implementação, Verificação e Operações.",
            "(C) Análise estática, Análise dinâmica, Pentest, Bug Bounty e Deploy.",
            "(D) Autenticação, Autorização, Auditoria, Confidencialidade e Disponibilidade.",
            "(E) Planejamento, Codificação, Testes, Homologação e Monitoramento."
        ],
        "ans": 1,
        "exp": "O OWASP SAMM divide o processo de desenvolvimento seguro em 5 'Business Functions': Governance, Design, Implementation, Verification e Operations."
    },
    {
        "id": 24,
        "category": "Segurança em Redes",
        "difficulty": "Médio",
        "q": "Na arquitetura de segurança física e lógica de redes corporativas, o protocolo IEEE 802.1X fornece um mecanismo padronizado de autenticação baseada em portas para conexões de estações clientes. Os três componentes fundamentais da arquitetura 802.1X são:",
        "opts": [
            "(A) Cliente, Proxy e DNS Server.",
            "(B) Suplicante (Supplicant), Autenticador (Authenticator) e Servidor de Autenticação (Authentication Server).",
            "(C) CA Raiz, CA Intermediária e Lista de Certificados Revogados (LCR).",
            "(D) Master Key, Session Key e Pre-Shared Key.",
            "(E) Roteador de Borda, Switch Core e Firewall UTM."
        ],
        "ans": 1,
        "exp": "O padrão IEEE 802.1X é composto por: Supplicant (o dispositivo do usuário que solicita acesso), Authenticator (o switch ou access point que controla a porta) e Authentication Server (geralmente um servidor RADIUS/TACACS+)."
    },
    {
        "id": 25,
        "category": "Web Security & OWASP",
        "difficulty": "Difícil",
        "q": "A ferramenta de pentest 'sqlmap' possui um sinalizador específico amplamente utilizado para descarregar o conteúdo integral das tabelas do banco de dados vulnerável após a confirmação da injeção. Esse sinalizador é:",
        "opts": [
            "(A) --scan-all",
            "(B) --dump",
            "(C) --inject-now",
            "(D) --exploit-db",
            "(E) --brute-force"
        ],
        "ans": 1,
        "exp": "O sinalizador --dump no sqlmap instrui a ferramenta a extrair e descarregar os dados das tabelas identificadas no banco de dados."
    },
    {
        "id": 26,
        "category": "Normas & Governança",
        "difficulty": "Médio",
        "q": "A norma ABNT NBR ISO/IEC 27701 é uma extensão da ISO/IEC 27001 e ISO/IEC 27002 para:",
        "opts": [
            "(A) Auditoria contábil e fiscal de empresas de capital aberto.",
            "(B) Gestão da Privacidade da Informação (PIMS - Privacy Information Management System).",
            "(C) Segurança de aplicações em dispositivos móveis Android.",
            "(D) Implementação de cabeamento estruturado e fibra óptica submarina.",
            "(E) Avaliação de impacto ambiental em plataformas petrolíferas."
        ],
        "ans": 1,
        "exp": "A ISO/IEC 27701 especifica requisitos e fornece diretrizes para o estabelecimento, manutenção e melhoria contínua de um Sistema de Gestão da Privacidade da Informação (PIMS/SGPI)."
    },
    {
        "id": 27,
        "category": "Segurança em Redes",
        "difficulty": "Fácil",
        "q": "Durante a análise de tráfego com a ferramenta 'tcpdump' no Linux, um analista quer filtrar apenas o tráfego que trafega na interface 'eth0', destinado à porta TCP 443 e sem resolver os endereços IP para nomes de host. A sintaxe exata do comando é:",
        "opts": [
            "(A) tcpdump -i eth0 -n tcp port 443",
            "(B) tcpdump -e eth0 -r port 443",
            "(C) tcpdump --interface eth0 --dns-resolve port=443",
            "(D) tcpdump -w eth0 port 443 --no-host",
            "(E) tcpdump -d eth0 -s tcp and 443"
        ],
        "ans": 0,
        "exp": "No tcpdump, a opção -i especifica a interface de rede (eth0), e -n instrui a ferramenta a não realizar a resolução reversa de nomes de domínio (DNS), imprimindo os IPs numéricos diretamente."
    },
    {
        "id": 28,
        "category": "Legislação & Criptografia",
        "difficulty": "Difícil",
        "q": "Em relação ao ataque de 'Pass-the-Hash' (PtH), qual das alternativas expressa a característica técnica que viabiliza essa exploração?",
        "opts": [
            "(A) O atacante precisa necessariamente decifrar a senha original em texto claro antes de se autenticar.",
            "(B) O protocolo NTLM permite que um cliente se autentique contra um servidor remoto apresentando diretamente o hash da senha, sem requerer a senha original em texto claro.",
            "(C) O ataque só funciona se a rede utilizar exclusivamente certificados digitais de hardware (tokens USB).",
            "(D) A técnica depende da injeção de pacotes maliciosos na camada física de fibra óptica.",
            "(E) Trata-se de uma falha restrita a roteadores com firmware OpenWrt desatualizado."
        ],
        "ans": 1,
        "exp": "No Pass-the-Hash, o atacante utiliza o hash NTLM capturado da memória (ex.: via Mimikatz) para autenticar-se em outros serviços e nós da rede Active Directory, pois o protocolo aceita a prova de posse do hash sem exigir o plaintext da senha."
    },
    {
        "id": 29,
        "category": "Web Security & OWASP",
        "difficulty": "Médio",
        "q": "O que caracteriza a vulnerabilidade de 'Cross-Site Scripting' do tipo Refletido (Reflected XSS)?",
        "opts": [
            "(A) O payload malicioso é gravado permanentemente no banco de dados do servidor da aplicação.",
            "(B) A injeção ocorre exclusivamente por meio de cabeçalhos de e-mail usando o protocolo SMTP.",
            "(C) O script malicioso é enviado na própria requisição HTTP (ex.: parâmetros de URL) e refletido imediatamente na resposta da página web pelo servidor, sendo executado no navegador da vítima.",
            "(D) Trata-se de uma falha de hardware que permite leitura de dados de memória fora dos limites do processador.",
            "(E) O atacante intercepta fisicamente o cabo de rede para alterar frames Ethernet em trânsito."
        ],
        "ans": 2,
        "exp": "No Reflected XSS, o script malicioso faz parte da requisição enviada pela vítima (geralmente induzida por link de phishing) e é ecoado imediatamente de volta na resposta do servidor sem a devida sanitização ou escaping, rodando no contexto do browser do usuário."
    },
    {
        "id": 30,
        "category": "Normas & Governança",
        "difficulty": "Difícil",
        "q": "O framework CIS Controls v8.1 organiza suas salvaguardas em 3 Grupos de Implementação (IG - Implementation Groups). Uma empresa de pequeno/médio porte com recursos limitados de cibersegurança e foco na higiene cibernética essencial deve adotar prioritariamente as salvaguardas de qual nível?",
        "opts": [
            "(A) IG3",
            "(B) IG2",
            "(C) IG1",
            "(D) Nível Zero",
            "(E) IG-Avançado"
        ],
        "ans": 2,
        "exp": "No CIS Controls, o IG1 é a definição fundamental de 'higiene cibernética básica' (basic cyber hygiene), sendo o ponto de partida obrigatório para qualquer organização antes de progredir para IG2 e IG3."
    },
    {
        "id": 31,
        "category": "Segurança em Redes",
        "difficulty": "Médio",
        "q": "Um atacante executa um ataque do tipo 'ARP Watch Bypass' e realiza o flooding contínuo da tabela de endereços MAC (CAM Table) de um switch corporativo até esgotar sua memória física. Como o switch passa a se comportar em relação ao tráfego após sua tabela CAM ficar completamente cheia?",
        "opts": [
            "(A) O switch desliga automaticamente todas as suas portas para proteger a rede contra vazamento.",
            "(B) O switch passa a operar como um hub, realizando o encaminhamento (flooding) dos frames desconhecidos para todas as suas portas ativas, permitindo a interceptação pelo atacante.",
            "(C) O switch descarta silenciosamente todos os pacotes que trafegam na rede.",
            "(D) O switch eleva a velocidade de transmissão das portas para 100 Gbps para descarregar o buffer.",
            "(E) O switch ativa nativamente criptografia AES-256 em todas as portas de acesso."
        ],
        "ans": 1,
        "exp": "O ataque de MAC Flooding força o estouro da tabela CAM (Content Addressable Memory). Ao não ter espaço para novos MACs, o switch entra em estado 'fail-open', repassando frames em broadcast para todas as portas, permitindo que uma placa de rede em modo promíscuo capture o tráfego alheio."
    },
    {
        "id": 32,
        "category": "Web Security & OWASP",
        "difficulty": "Fácil",
        "q": "A ferramenta 'Burp Suite' é amplamente utilizada em auditorias de segurança web. Qual de suas funções atua interceptando o tráfego HTTP/HTTPS entre o navegador e o servidor web para inspeção e alteração manual das requisições em tempo real?",
        "opts": [
            "(A) Burp Scanner",
            "(B) Burp Proxy",
            "(C) Burp Sequencer",
            "(D) Burp Decoder",
            "(E) Burp Extender"
        ],
        "ans": 1,
        "exp": "O Burp Proxy é o componente central que atua como Man-in-the-Middle local entre o browser e a aplicação alvo, permitindo capturar, analisar e alterar parâmetros de requisições e respostas antes de serem encaminhados."
    },
    {
        "id": 33,
        "category": "Legislação & Criptografia",
        "difficulty": "Difícil",
        "q": "De acordo com o Marco Civil da Internet (Lei nº 12.965/2014), os provedores de conexão à internet são obrigados a manter os registros de conexão (endereços IP, datas e horários de início e término) sob sigilo pelo prazo mínimo legal de:",
        "opts": [
            "(A) 6 meses",
            "(B) 1 ano",
            "(C) 2 anos",
            "(D) 5 anos",
            "(E) 10 anos"
        ],
        "ans": 1,
        "exp": "Conforme o art. 13 do Marco Civil da Internet, na provisão de conexão à internet, cabe ao administrador do sistema autônomo manter os registros de conexão sob sigilo pelo prazo de 1 (um) ano. (Atenção: para registros de aplicações de internet, o prazo do art. 15 é de 6 meses)."
    },
    {
        "id": 34,
        "category": "Princípios de Segurança",
        "difficulty": "Médio",
        "q": "Na terminologia da computação forense, o princípio fundamental de 'Cadeia de Custódia' tem por objetivo:",
        "opts": [
            "(A) processar e punir judicialmente o suspeito antes da conclusão do laudo pericial.",
            "(B) documentar cronologicamente todo o ciclo de vida da evidência digital (coleta, custódia, controle, transferência, análise e custódia final), garantindo sua integridade e admissibilidade jurídica.",
            "(C) aumentar o poder computacional de placas gráficas para quebra de senhas.",
            "(D) garantir que todos os discos periciados sejam formatados antes do arquivamento.",
            "(E) criar cópias públicas das evidências nas redes sociais da instituição."
        ],
        "ans": 1,
        "exp": "A Cadeia de Custódia é o registro meticuloso e ininterrupto de posse e manuseio da evidência, assegurando que o elemento analisado em juízo é exatamente o mesmo coletado na cena do incidente, sem adulterações."
    },
    {
        "id": 35,
        "category": "Legislação & Criptografia",
        "difficulty": "Difícil",
        "q": "Qual algoritmo de hash criptográfico é suscetível a ataques práticos de colisão demonstrados pela academia (como os projetos SHAttered e Flame), sendo formalmente desencorajado para geração de assinaturas digitais na atualidade?",
        "opts": [
            "(A) SHA-256",
            "(B) SHA-3",
            "(C) SHA-1",
            "(D) SHA-512",
            "(E) BLAKE2b"
        ],
        "ans": 2,
        "exp": "O SHA-1 teve colisões práticas demonstradas em 2017 (ataque SHAttered pelo Google/CWI). Por essa razão, foi descontinuado e substituído pelas famílias SHA-2 (SHA-256/512) e SHA-3."
    },
    {
        "id": 36,
        "category": "Normas & Governança",
        "difficulty": "Médio",
        "q": "Na arquitetura Zero Trust (NIST SP 800-207), o princípio fundamental que governa as decisões de controle de acesso aos recursos é sintetizado pela máxima:",
        "opts": [
            "(A) Confie plenamente nos usuários internos que estejam conectados via cabo na rede corporativa.",
            "(B) 'Nunca confie, sempre verifique' (Never trust, always verify), tratando qualquer requisição como originada de uma rede não confiável.",
            "(C) Permita acesso total a qualquer estação de trabalho que possua um antivírus comercial instalado.",
            "(D) Criptografe apenas as comunicações externas que saem pelo gateway de internet.",
            "(E) Centralize todos os privilégios administrativos em uma única conta de usuário com senha forte."
        ],
        "ans": 1,
        "exp": "O modelo Zero Trust assume que a rede interna corporativa é tão hostil quanto a internet pública. Portanto, nenhum usuário ou dispositivo recebe confiança implícita com base em sua localização de rede; cada requisição deve ser explicitamente autenticada, autorizada e criptografada."
    },
    {
        "id": 37,
        "category": "Legislação & Criptografia",
        "difficulty": "Fácil",
        "q": "O ataque de 'Kerberoasting' em ambientes Active Directory tem como alvo a obtenção de hashes de senhas de contas de serviço. O mecanismo explorado nesse ataque baseia-se na requisição de:",
        "opts": [
            "(A) tíquetes de concessão de tíquete (TGT) sem validação de pré-autenticação Kerberos.",
            "(B) tíquetes de serviço (TGS) associados a contas de usuários que possuem Service Principal Names (SPN) configurados, permitindo quebrar o hash offline.",
            "(C) arquivos SAM locais em estações de trabalho sem privilégios de administrador.",
            "(D) certificados SSL inválidos emitidos por autoridades raiz externas.",
            "(E) mensagens de broadcast NetBIOS via protocolo LLMNR."
        ],
        "ans": 1,
        "exp": "No Kerberoasting, qualquer usuário autenticado do domínio pode solicitar um tíquete TGS para um serviço associado a um SPN registrado. Esse TGS é criptografado com a chave/senha da conta que roda o serviço, possibilitando que o atacante extraia o tíquete e tente quebrar a senha offline por força bruta."
    },
    {
        "id": 38,
        "category": "Normas & Governança",
        "difficulty": "Difícil",
        "q": "Na ABNT NBR ISO/IEC 27001:2022, a Declaração de Aplicabilidade (SoA - Statement of Applicability) é um documento obrigatório que deve conter:",
        "opts": [
            "(A) o orçamento financeiro anual detalhado do departamento de tecnologia da informação.",
            "(B) a relação de todos os controles do Anexo A considerados necessários, a justificativa para inclusão ou exclusão e o status de implementação de cada um.",
            "(C) o organograma com nome e CPF de todos os funcionários demitidos por justa causa.",
            "(D) a chave privada do certificado digital principal da organização.",
            "(E) a lista de senhas administrativas dos servidores em formato criptografado."
        ],
        "ans": 1,
        "exp": "A Declaração de Aplicabilidade (SoA), exigida pelo item 6.1.3 da ISO 27001, documenta os controles selecionados (com base no Anexo A da norma), as razões de sua seleção, o status de implementação e as justificativas para eventuais exclusões."
    },
    {
        "id": 39,
        "category": "Segurança em Redes",
        "difficulty": "Médio",
        "q": "O ataque sem fio denominado 'KRACK' (Key Reinstallation Attack), divulgado em 2017 por Mathy Vanhoef, atingiu gravemente a segurança de redes Wi-Fi ao explorar uma vulnerabilidade no:",
        "opts": [
            "(A) protocolo WEP de 64 bits utilizando chaves estáticas.",
            "(B) aperto de mãos de 4 vias (4-way handshake) do protocolo WPA2, forçando a reutilização de nonces e chaves de criptografia.",
            "(C) serviço de DHCP por meio de mensagens de starvation na porta UDP 67.",
            "(D) algoritmo de espalhamento espectral por salto de frequência (FHSS).",
            "(E) mecanismo de autenticação por biometria de roteadores domésticos."
        ],
        "ans": 1,
        "exp": "O ataque KRACK afeta o 4-Way Handshake do WPA/WPA2, manipulando e reenviando a mensagem 3 do aperto de mãos, o que força o cliente a reinstalar uma chave criptográfica já em uso e resetar contadores de pacotes (nonces), permitindo decifrar frames."
    },
    {
        "id": 40,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "A ferramenta de pentest 'Hydra' (THC-Hydra) é especializada na realização de:",
        "opts": [
            "(A) ataques rápidos de força bruta e dicionário online contra múltiplos protocolos de autenticação de rede (SSH, FTP, RDP, HTTP-POST, SMB etc.).",
            "(B) desmontagem estática de código binário e análise de fluxo de controle.",
            "(C) auditoria física de portas seriais RS-485 em navios cargueiros.",
            "(D) envio de e-mails em massa contendo macros maliciosas para campanhas de conscientização.",
            "(E) detecção de intrusão em tempo real baseada em assinaturas Snort."
        ],
        "ans": 0,
        "exp": "O THC-Hydra é a ferramenta de referência para ataques de autenticação online rápidos (network logon cracker), com suporte nativo a dezenas de protocolos como Telnet, SSH, FTP, HTTP, SMB, RDP, VNC, etc."
    },
    {
        "id": 41,
        "category": "Conceitos Gerais",
        "difficulty": "Médio",
        "q": "No contexto da gestão de vulnerabilidades de software, o que representa o índice CVSS (Common Vulnerability Scoring System)?",
        "opts": [
            "(A) O preço de mercado pago pelo fabricante por um exploit de dia zero.",
            "(B) Uma estrutura aberta padronizada para quantificar a severidade e o impacto de vulnerabilidades de segurança de software em uma escala de 0.0 a 10.0.",
            "(C) O tempo médio que uma equipe de suporte leva para aplicar patches de sistema.",
            "(D) O número de linhas de código-fonte vulneráveis encontradas pelo compilador.",
            "(E) O percentual de utilização de memória RAM durante a execução de um exploit."
        ],
        "ans": 1,
        "exp": "O CVSS é o padrão global gerido pelo FIRST para fornecer uma pontuação numérica (de 0.0 a 10.0) que reflete a severidade técnica de uma vulnerabilidade de software com base em métricas de Base, Temporal e Ambiental."
    },
    {
        "id": 42,
        "category": "Forense & Incidentes",
        "difficulty": "Fácil",
        "q": "Em uma análise forense digital de um sistema operacional Windows suspeito de invasão, qual artefato permite verificar o histórico de programas executados pelos usuários, mesmo que os binários originais já tenham sido apagados do disco?",
        "opts": [
            "(A) Arquivos Prefetch (.pf) no diretório C:\\Windows\\Prefetch",
            "(B) Arquivo de hosts localizado em C:\\Windows\\System32\\drivers\\etc",
            "(C) Arquivos de fontes tipográficas TrueType (.ttf)",
            "(D) Tabela de rotas do protocolo IPv6 estático",
            "(E) Cache de ícones da área de trabalho do usuário Guest"
        ],
        "ans": 0,
        "exp": "Os arquivos Prefetch (.pf) são gerados pelo Windows para acelerar a carga de aplicativos e armazenam metadados valiosos para a perícia: o nome do executável, timestamp da última execução, número de vezes que foi aberto e arquivos/DLLs carregados."
    },
    {
        "id": 43,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "A técnica de evasão de defesa denominada 'DLL Sideloading' consiste em:",
        "opts": [
            "(A) substituir fisicamente os pentes de memória RAM por módulos não homologados.",
            "(B) colocar uma DLL maliciosa com o mesmo nome de uma DLL legítima no mesmo diretório de um executável assinado e confiável, fazendo com que este a carregue automaticamente em virtude da ordem de busca do sistema operacional.",
            "(C) deletar a biblioteca padrão de C para impedir o funcionamento do depurador.",
            "(D) alterar o cabeçalho de pacotes TCP para forçar a fragmentação na rede.",
            "(E) injetar comandos em bancos de dados por meio de formulários web vulneráveis."
        ],
        "ans": 1,
        "exp": "No DLL Sideloading (ou DLL Hijacking), o invasor explora a ordem padrão de busca do Windows (que costuma checar o diretório do próprio executável antes dos diretórios de sistema), utilizando um executável legítimo/assinado para carregar sua DLL maliciosa sem despertar alarmes tradicionais de antivírus."
    },
    {
        "id": 44,
        "category": "Segurança Industrial (OT/ICS)",
        "difficulty": "Médio",
        "q": "Em relação ao protocolo seguro de comunicação industrial OPC UA (Open Platform Communications Unified Architecture), amplamente adotado na Indústria 4.0 e integração com SCADA, qual recurso de segurança é nativamente suportado em sua camada de transporte?",
        "opts": [
            "(A) Uso obrigatório de senhas padrão em texto claro no arquivo de configuração XML.",
            "(B) Autenticação mútua de clientes e servidores baseada em certificados digitais X.509, além de assinatura e criptografia de mensagens.",
            "(C) Ausência total de criptografia para garantir latência zero em CLPs legados.",
            "(D) Dependência exclusiva de autenticação biométrica nos sensores de campo.",
            "(E) Roteamento obrigatório via rede Tor para mascarar o IP das usinas."
        ],
        "ans": 1,
        "exp": "Diferente dos protocolos industriais legados (como Modbus clássico), o OPC UA foi concebido com segurança intrínseca (Security by Design), suportando autenticação mútua com certificados X.509, assinatura digital e criptografia em nível de sessão/mensagem."
    },
    {
        "id": 45,
        "category": "Red Team & Pentest",
        "difficulty": "Difícil",
        "q": "A ferramenta de varredura 'Masscan' é amplamente reconhecida na comunidade de testes de segurança cibernética por sua capacidade de:",
        "opts": [
            "(A) analisar assinaturas heurísticas de macrovírus em documentos do Microsoft Office.",
            "(B) realizar varreduras assíncronas de portas TCP/UDP em velocidades extremamente altas (capaz de varrer a internet inteira em poucos minutos) utilizando pilha de rede customizada.",
            "(C) descriptografar comunicações HTTPS em tempo real sem acesso à chave privada.",
            "(D) automatizar a redação de relatórios técnicos de conformidade para o TCE.",
            "(E) gerenciar senhas em cofres corporativos de alta segurança."
        ],
        "ans": 1,
        "exp": "O Masscan é o scanner de portas mais rápido do mundo, capaz de transmitir milhões de pacotes por segundo graças à sua arquitetura assíncrona com driver de rede próprio (semelhante ao scan-engine do Unicornscan)."
    },
    {
        "id": 46,
        "category": "Legislação & Criptografia",
        "difficulty": "Médio",
        "q": "A Resolução nº 740/2020 da ANATEL aprova o Regulamento de Segurança Cibernética Aplicada ao Setor de Telecomunicações. Dentre as obrigações impostas às prestadoras de serviços de telecomunicações de grande porte, encontra-se a de:",
        "opts": [
            "(A) compartilhar senhas mestras de roteadores com o público em geral.",
            "(B) elaborar e manter atualizada uma Política de Segurança Cibernética, além de realizar auditorias de segurança independentes e notificar a ANATEL sobre incidentes relevantes.",
            "(C) proibir a utilização de criptografia em ligações de telefonia móvel no Brasil.",
            "(D) banir permanentemente a tecnologia 5G de todas as capitais brasileiras.",
            "(E) substituir todos os roteadores de borda a cada 90 dias úteis."
        ],
        "ans": 1,
        "exp": "A Resolução 740/2020 da ANATEL obriga as operadoras a implementarem Políticas de Segurança Cibernética formais, estruturas de governança, auditorias periódicas e comunicação obrigatória de incidentes de relevância."
    },
    {
        "id": 47,
        "category": "Forense & Incidentes",
        "difficulty": "Fácil",
        "q": "O ataque de engenharia social denominado 'Spear Phishing' diferencia-se do phishing tradicional pelo fato de:",
        "opts": [
            "(A) ser enviado de forma massiva e aleatória para milhões de pessoas sem distinção de perfil.",
            "(B) ser altamente customizado e direcionado a indivíduos, cargos ou organizações específicas, utilizando dados coletados previamente para conferir alta credibilidade à mensagem.",
            "(C) atacar exclusivamente roteadores de borda via protocolo SNMP v1.",
            "(D) não utilizar qualquer meio de comunicação digital para enganar a vítima.",
            "(E) depender de acesso físico direto do atacante ao teclado da estação de trabalho."
        ],
        "ans": 1,
        "exp": "O Spear Phishing é a evolução do phishing genérico: é um ataque focado em um alvo específico (ex.: diretores financeiros, operadores de oleoduto), contendo dados contextuais personalizados para induzir o clique ou a transferência."
    },
    {
        "id": 48,
        "category": "Normas & Governança",
        "difficulty": "Difícil",
        "q": "No contexto da gestão de continuidade de negócios segundo a norma ABNT NBR ISO/IEC 27031, o parâmetro RPO (Recovery Point Objective) mede:",
        "opts": [
            "(A) o tempo total decorrido entre o alerta do incidente e a chegada dos bombeiros.",
            "(B) o limite máximo aceitável de perda de dados medido em tempo (ou seja, a data/hora do backup recuperável mais recente em relação ao momento da falha).",
            "(C) a velocidade em megabits por segundo da conexão de internet de contingência.",
            "(D) o valor financeiro do hardware danificado que foi ressarcido pela seguradora.",
            "(E) o tempo necessário para refazer a fiação de rede do datacenter primário."
        ],
        "ans": 1,
        "exp": "O RPO (Objetivo de Ponto de Recuperação) expressa a quantidade de dados (medida no tempo) que a organização pode perder; por exemplo, um RPO de 4 horas significa que a base de dados recuperada pode estar defasada em até 4 horas em relação ao momento do colapso."
    },
    {
        "id": 49,
        "category": "Web Security & OWASP",
        "difficulty": "Médio",
        "q": "Durante a execução de um teste de invasão em uma aplicação web, o auditor submete o payload `' UNION SELECT username, password FROM users --` em um campo de busca suscetível a SQL Injection. O uso do sufixo `--` tem por objetivo principal:",
        "opts": [
            "(A) decifrar a senha administrativa em tempo de compilação no frontend.",
            "(B) comentar o restante da instrução SQL original construída pelo código do servidor, impedindo erros de sintaxe decorrentes dos comandos posteriores.",
            "(C) derrubar o serviço do banco de dados por esgotamento de conexões ativas.",
            "(D) converter o banco de dados relacional em uma estrutura de grafos NoSQL.",
            "(E) acionar o mecanismo de rollback de transações do SGBD."
        ],
        "ans": 1,
        "exp": "No SQL padrão e em bancos como PostgreSQL, SQLite e SQL Server, os caracteres `-- ` (traço duplo seguido de espaço) indicam o início de um comentário de linha, anulando todas as cláusulas originais que vinham após o ponto de injeção."
    },
    {
        "id": 50,
        "category": "Legislação & Criptografia",
        "difficulty": "Difícil",
        "q": "No modelo de envelope digital utilizado para transmissão segura de arquivos confidenciais por e-mail (como no S/MIME ou PGP):",
        "opts": [
            "(A) o arquivo original é cifrado com a chave pública do remetente e a chave privada do destinatário.",
            "(B) o arquivo é cifrado com uma chave simétrica de sessão recém-gerada, e essa chave de sessão é cifrada com a chave pública do destinatário.",
            "(C) o arquivo é transmitido em texto plano e apenas o hash de integridade é ocultado.",
            "(D) a criptografia é desnecessária, pois o protocolo TCP já garante sigilo absoluto de ponta a ponta.",
            "(E) a chave de sessão é impressa e encaminhada por correio físico tradicional."
        ],
        "ans": 1,
        "exp": "No envelope digital (criptografia híbrida), o volume grande de dados é cifrado por um algoritmo simétrico rápido (AES) usando uma chave de sessão efêmera; em seguida, essa chave de sessão é cifrada com a chave pública assimétrica do destinatário."
    }
];

if (typeof window !== 'undefined') {
    window.quizData = quizData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizData };
}
