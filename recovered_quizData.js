const fs = require('fs');

const htmlContent = fs.readFileSync('simulado.html', 'utf8');
const start = htmlContent.indexOf('const quizData = [');
const end = htmlContent.indexOf('let userAnswers = new Array', start);

if (start === -1 || end === -1) {
  console.error('Could not find quizData bounds in simulado.html');
  process.exit(1);
}

// Extract up to the last ]; before let userAnswers
let snippet = htmlContent.substring(start, end);
const lastBracket = snippet.lastIndexOf('];');
snippet = snippet.substring(0, lastBracket + 2);

snippet = snippet.replace('const quizData =', 'globalThis.quizData =');

try {
  eval(snippet);
} catch (err) {
  console.error('Error evaluating code:', err);
  process.exit(1);
}

const parsedData = globalThis.quizData;
console.log('Parsed items count:', parsedData.length);

const categoryRules = [
  { cat: 'Segurança Industrial (OT/ICS)', keywords: ['isa-62443', '62443', '800-82', 'opc ua', 'iacs', 'industrial', 'automação'] },
  { cat: 'Normas & Governança', keywords: ['iso/iec', 'iso 2700', 'iso 22301', 'iso 27701', 'nist csf', 'cis controls', 'zero trust', 'declaração de aplicabilidade', 'gestão de riscos'] },
  { cat: 'Legislação & Criptografia', keywords: ['lgpd', 'marco civil', 'icp-brasil', 'anatel', 'envelope digital', 'hash', 'sha-1', 'colisão'] },
  { cat: 'Web Security & OWASP', keywords: ['owasp', 'burp', 'xss', 'cross-site', 'sql injection', 'sqlmap', 'aplicação web'] },
  { cat: 'Red Team & Pentest', keywords: ['nmap', 'mimikatz', 'ghidra', 'john the ripper', 'metasploit', 'pass-the-hash', 'kerberoasting', 'sideloading', 'masscan', 'hydra', 'pentest', 'intrusão', 'capec', 'mitre att&ck', 'mitre', 'evil twin'] },
  { cat: 'Forense & Incidentes', keywords: ['forense', 'osint', 'theharvester', 'custódia', 'mft', 'phishing', 'ransomware', 'evidência', 'iso/iec 27035'] },
  { cat: 'Segurança em Redes', keywords: ['wifi', 'wi-fi', 'tls 1.3', 'tcp', 'arp', 'ipsec', 'tcpdump', 'wireshark', 'enlace', 'krack', 'portas'] }
];

function determineCategory(item) {
  const text = (item.q + ' ' + item.exp).toLowerCase();
  for (const rule of categoryRules) {
    if (rule.keywords.some(k => text.includes(k))) {
      return rule.cat;
    }
  }
  return 'Conceitos Gerais';
}

function determineDifficulty(index) {
  const diffs = ['Médio', 'Fácil', 'Difícil', 'Médio', 'Difícil'];
  return diffs[index % diffs.length];
}

const formattedData = parsedData.map((item, index) => {
  return {
    id: index + 1,
    category: determineCategory(item),
    difficulty: determineDifficulty(index),
    q: item.q,
    opts: item.opts,
    ans: item.ans,
    exp: item.exp
  };
});

const fileHeader = `/**
 * Banco de Dados de Questões - Simulado Cesgranrio Transpetro
 * Ênfase 7: Segurança Cibernética e da Informação
 * Total: 50 Questões Objetivas com Gabarito Comentado
 */

const quizData = ${JSON.stringify(formattedData, null, 2)};

if (typeof window !== 'undefined') {
  window.quizData = quizData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quizData };
}
`;

fs.writeFileSync('data.js', fileHeader, 'utf8');
console.log('Successfully written data.js with', formattedData.length, 'questions.');
