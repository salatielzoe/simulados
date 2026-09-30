/**
 * Lote 01 — questões autorais baseadas no edital e no padrão das provas fornecidas.
 * Estrutura compatível com data(1).js: ans é índice zero-based.
 */

const quizDataCesgranrioLote01 = [
  {
    "id": 81,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Red Team & Pentest",
    "difficulty": "Médio",
    "q": "Durante um reconhecimento de uma organização, o analista coleta informações públicas sobre subdomínios, endereços de e-mail e hosts sem enviar requisições diretamente aos ativos da organização. Essa atividade caracteriza principalmente:",
    "opts": [
      "(A) Enumeração ativa.",
      "(B) Footprinting passivo.",
      "(C) Escalação de privilégios.",
      "(D) Exploração de vulnerabilidade.",
      "(E) Encobrimento de rastros."
    ],
    "ans": 1,
    "exp": "O footprinting passivo coleta informações em fontes públicas sem interação direta com os ativos-alvo. Memorize: passivo = observa; ativo = interage."
  },
  {
    "id": 82,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Ataques a Protocolos",
    "difficulty": "Médio",
    "q": "Em uma rede local, um atacante envia respostas ARP falsificadas para associar o seu próprio endereço MAC ao endereço IP do gateway. O objetivo é fazer com que o tráfego de outros hosts passe pelo equipamento do atacante. Esse ataque é conhecido como:",
    "opts": [
      "(A) DNS tunneling.",
      "(B) ARP spoofing/poisoning.",
      "(C) DHCP starvation.",
      "(D) TCP SYN flooding.",
      "(E) IP fragmentation."
    ],
    "ans": 1,
    "exp": "No ARP spoofing/poisoning, o atacante falsifica associações IP–MAC para redirecionar o tráfego na rede local. A associação falsa é o ponto-chave."
  },
  {
    "id": 83,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Ataques Wi-Fi",
    "difficulty": "Fácil",
    "q": "Um usuário conecta seu notebook a uma rede sem fio chamada 'Empresa-WiFi', acreditando tratar-se da rede corporativa. Na realidade, o ponto de acesso foi criado por um atacante para imitar a rede legítima. Esse cenário caracteriza:",
    "opts": [
      "(A) Jamming.",
      "(B) SSID Tracking.",
      "(C) Evil Twin.",
      "(D) Disassociation legítima.",
      "(E) Wardriving exclusivamente passivo."
    ],
    "ans": 2,
    "exp": "Evil Twin é o ponto de acesso malicioso que imita uma rede legítima, geralmente usando o mesmo SSID. Memorize: 'gêmeo' = cópia maliciosa."
  },
  {
    "id": 84,
    "exam": "CESGRANRIO",
    "matter": "Segurança Ofensiva",
    "category": "Malware",
    "difficulty": "Médio",
    "q": "Um código malicioso consegue se propagar automaticamente pela rede, explorando vulnerabilidades de outros equipamentos, sem depender da anexação de uma cópia a um arquivo legítimo. Trata-se de um:",
    "opts": [
      "(A) Worm.",
      "(B) Trojan Horse.",
      "(C) Spyware.",
      "(D) Keylogger.",
      "(E) Rootkit."
    ],
    "ans": 0,
    "exp": "Worm é malware autorreplicável que pode se propagar pela rede sem precisar se anexar a outro arquivo como ocorre tipicamente com vírus. Memorize: worm 'anda' pela rede."
  },
  {
    "id": 85,
    "exam": "CESGRANRIO",
    "matter": "MITRE ATT&CK",
    "category": "Red Team & Pentest",
    "difficulty": "Médio",
    "q": "No MITRE ATT&CK, uma organização identifica que determinado comportamento adversário tem como finalidade manter o acesso a um ambiente comprometido após reinicializações. No modelo ATT&CK, essa finalidade corresponde a uma:",
    "opts": [
      "(A) Técnica.",
      "(B) Tática.",
      "(C) Procedimento específico.",
      "(D) Ferramenta.",
      "(E) Mitigação."
    ],
    "ans": 1,
    "exp": "Tática representa o objetivo do adversário; técnica representa como ele busca atingir esse objetivo. Persistência é uma tática."
  },
  {
    "id": 86,
    "exam": "CESGRANRIO",
    "matter": "Segurança Defensiva",
    "category": "Firewall e IDS/IPS",
    "difficulty": "Médio",
    "q": "Em uma arquitetura de defesa em profundidade, um equipamento deve analisar tráfego e bloquear automaticamente determinados padrões de ataque identificados durante o monitoramento da rede. O componente que melhor corresponde a essa função é o:",
    "opts": [
      "(A) IDS.",
      "(B) IPS.",
      "(C) Proxy reverso exclusivamente.",
      "(D) Filtro de conteúdo DNS exclusivamente.",
      "(E) Hub."
    ],
    "ans": 1,
    "exp": "IDS detecta e alerta; IPS, além de detectar, pode bloquear/prevenir o tráfego malicioso. A palavra-chave é 'bloquear automaticamente'."
  },
  {
    "id": 87,
    "exam": "CESGRANRIO",
    "matter": "Criptografia",
    "category": "Legislação & Criptografia",
    "difficulty": "Médio",
    "q": "Uma mensagem é submetida a uma função hash criptográfica antes de ser transmitida. O destinatário recalcula o hash e compara o resultado recebido com o calculado localmente. Se os valores forem diferentes, a conclusão adequada é que:",
    "opts": [
      "(A) a mensagem certamente foi interceptada por um atacante específico.",
      "(B) a mensagem não pode ter sido modificada em hipótese alguma.",
      "(C) há evidência de que o conteúdo recebido não corresponde ao conteúdo que produziu o resumo original.",
      "(D) a mensagem foi necessariamente cifrada com chave assimétrica.",
      "(E) a identidade do remetente foi automaticamente autenticada."
    ],
    "ans": 2,
    "exp": "Hash permite verificar integridade, não identificar por si só o remetente nem garantir confidencialidade. Memorize: hash = impressão digital do conteúdo."
  },
  {
    "id": 88,
    "exam": "CESGRANRIO",
    "matter": "Criptografia",
    "category": "Legislação & Criptografia",
    "difficulty": "Difícil",
    "q": "Em uma assinatura digital baseada em criptografia assimétrica, o signatário utiliza sua chave privada para produzir a assinatura correspondente ao documento. A verificação da assinatura pelo destinatário utiliza, em regra, a:",
    "opts": [
      "(A) chave privada do destinatário.",
      "(B) chave pública associada ao signatário.",
      "(C) mesma chave simétrica usada para cifrar o documento.",
      "(D) senha do usuário que recebeu o documento.",
      "(E) chave privada do signatário, que deve ser compartilhada com todos."
    ],
    "ans": 1,
    "exp": "A assinatura é produzida com a chave privada do signatário e verificada com a chave pública correspondente. Memorize: assina com privada, verifica com pública."
  },
  {
    "id": 89,
    "exam": "CESGRANRIO",
    "matter": "Segurança Defensiva",
    "category": "Web Security & OWASP",
    "difficulty": "Difícil",
    "q": "Uma aplicação Web concatena diretamente dados fornecidos pelo usuário a uma consulta SQL. Um atacante consegue alterar a estrutura da consulta e obter registros que não deveria acessar. A vulnerabilidade descrita é classificada como:",
    "opts": [
      "(A) SQL Injection.",
      "(B) Cross-Site Request Forgery.",
      "(C) Clickjacking.",
      "(D) Path Traversal.",
      "(E) Session Fixation."
    ],
    "ans": 0,
    "exp": "SQL Injection ocorre quando dados controlados pelo atacante alteram a estrutura ou lógica de uma consulta SQL. A principal defesa é usar consultas parametrizadas/prepared statements."
  },
  {
    "id": 90,
    "exam": "CESGRANRIO",
    "matter": "Segurança Defensiva",
    "category": "Web Security & OWASP",
    "difficulty": "Médio",
    "q": "Uma aplicação Web devolve ao navegador conteúdo fornecido por usuários sem realizar a adequada neutralização de elementos interpretáveis pelo navegador. Um atacante consegue executar JavaScript no contexto da aplicação para outros usuários. O ataque é:",
    "opts": [
      "(A) CSRF.",
      "(B) XSS.",
      "(C) SSRF.",
      "(D) SQL Injection.",
      "(E) Buffer Overflow."
    ],
    "ans": 1,
    "exp": "XSS explora a execução de conteúdo ativo, normalmente JavaScript, no navegador da vítima. Memorize: XSS = script executado no contexto do navegador."
  },
  {
    "id": 91,
    "exam": "CESGRANRIO",
    "matter": "Normas e Governança",
    "category": "Normas & Governança",
    "difficulty": "Fácil",
    "q": "Na ABNT NBR ISO/IEC 27001:2022, a organização que pretende estabelecer um Sistema de Gestão de Segurança da Informação deve determinar os riscos e oportunidades que precisam ser tratados para assegurar que o SGSI possa alcançar os resultados pretendidos. Essa exigência está associada principalmente ao processo de:",
    "opts": [
      "(A) Planejamento do SGSI.",
      "(B) Descarte físico de ativos.",
      "(C) Desenvolvimento de software.",
      "(D) Administração de banco de dados.",
      "(E) Criptografia de arquivos."
    ],
    "ans": 0,
    "exp": "A ISO/IEC 27001 estabelece requisitos para o SGSI, incluindo o planejamento de ações para tratar riscos e oportunidades. Memorize: risco entra no planejamento do SGSI."
  },
  {
    "id": 92,
    "exam": "CESGRANRIO",
    "matter": "Normas e Governança",
    "category": "Normas & Governança",
    "difficulty": "Médio",
    "q": "Uma organização identifica um risco de segurança da informação e decide contratar um seguro para compartilhar com uma terceira parte parte dos impactos financeiros decorrentes de eventual materialização do risco. Essa decisão corresponde ao tratamento denominado:",
    "opts": [
      "(A) Evitação.",
      "(B) Retenção.",
      "(C) Compartilhamento do risco.",
      "(D) Eliminação da ameaça.",
      "(E) Aceitação sem tratamento."
    ],
    "ans": 2,
    "exp": "O compartilhamento/transferência distribui parte das consequências ou responsabilidades com terceiros, como em determinados contratos e seguros. O risco não deixa necessariamente de existir."
  },
  {
    "id": 93,
    "exam": "CESGRANRIO",
    "matter": "Gestão de Identidade",
    "category": "Segurança Defensiva",
    "difficulty": "Médio",
    "q": "Uma empresa deseja permitir que seus funcionários utilizem uma mesma autenticação para acessar diferentes aplicações corporativas, evitando novo login em cada sistema. A solução descrita corresponde ao conceito de:",
    "opts": [
      "(A) SSO.",
      "(B) DLP.",
      "(C) IDS.",
      "(D) VLAN.",
      "(E) NAT."
    ],
    "ans": 0,
    "exp": "SSO (Single Sign-On) permite autenticar-se uma vez e acessar múltiplas aplicações confiáveis sem repetir o processo de login em cada uma."
  },
  {
    "id": 94,
    "exam": "CESGRANRIO",
    "matter": "Gestão de Identidade",
    "category": "Segurança Defensiva",
    "difficulty": "Difícil",
    "q": "Em um modelo de controle de acesso, usuários pertencentes a determinados cargos recebem permissões associadas aos respectivos papéis, em vez de se definir individualmente cada permissão para cada usuário. Esse modelo é conhecido como:",
    "opts": [
      "(A) DAC.",
      "(B) RBAC.",
      "(C) MAC.",
      "(D) ABAC exclusivamente baseado em localização.",
      "(E) Controle por lista de processos."
    ],
    "ans": 1,
    "exp": "RBAC (Role-Based Access Control) associa permissões a papéis e depois associa usuários aos papéis. Memorize: Role = papel."
  },
  {
    "id": 95,
    "exam": "CESGRANRIO",
    "matter": "Resposta a Incidentes",
    "category": "Forense & Incidentes",
    "difficulty": "Médio",
    "q": "Após detectar um incidente de segurança, uma equipe decide isolar imediatamente um servidor comprometido da rede para reduzir a propagação do ataque, preservando o sistema para posterior investigação. A medida descrita é principalmente uma ação de:",
    "opts": [
      "(A) Contenção.",
      "(B) Erradicação completa.",
      "(C) Recuperação definitiva.",
      "(D) Auditoria financeira.",
      "(E) Classificação de dados."
    ],
    "ans": 0,
    "exp": "Contenção busca limitar a extensão e o impacto do incidente. Erradicação é a remoção da causa ou artefatos maliciosos; recuperação restaura os serviços."
  },
];

if (typeof window !== 'undefined') {
  window.quizDataCesgranrioLote01 = quizDataCesgranrioLote01;
  window.quizDataLote01Cesgranrio = quizDataCesgranrioLote01;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quizDataCesgranrioLote01 };
}
