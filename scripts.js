/**
 * Lógica do Simulado Cibersegurança & Tecnologia
 * Suporte a múltiplos bancos: Cesgranrio (base 80 + lote01 15 + lote02 15) e FGV (lote01 15 + lote02 15)
 */

// Mapa de padronização de categorias para consistência perfeita nos filtros
const categoryMap = {
    'Ataques e Protocolos': 'Ataques a Protocolos',
    'Ataques a Redes': 'Segurança em Redes',
    'Hacking e Pentest': 'Red Team & Pentest',
    'Pentest': 'Red Team & Pentest',
    'ATT&CK e CAPEC': 'Red Team & Pentest',
    'Análise de Tráfego': 'Segurança em Redes',
    'Pentest Web': 'Web Security & OWASP',
    'Firewalls': 'Firewall e IDS/IPS',
    'Firewalls e Aplicações': 'Web Security & OWASP',
    'IDS e IPS': 'Firewall e IDS/IPS',
    'SIEM': 'Forense & Incidentes',
    'Engenharia Social': 'Princípios de Segurança',
    'Desenvolvimento de Software': 'Desenvolvimento de Sistemas',
    'Frameworks Java': 'Desenvolvimento de Sistemas',
    'CI/CD': 'Desenvolvimento de Sistemas',
    'Arquitetura Distribuída': 'Arquitetura',
    'Java EE / Integração': 'Arquitetura',
    'DevOps e Arquitetura': 'Arquitetura',
    'Cloud Computing': 'Arquitetura',
    'Versionamento': 'Controle de Versão',
    'SonarQube e Clean Code': 'Testes',
    'SQL e Transações': 'Banco de Dados',
    'Data Warehouse e OLAP': 'Banco de Dados',
    'Segurança da Informação': 'Segurança de Software',
    'SAST e DAST': 'Segurança de Software'
};

// Unificação e normalização dos bancos de questões
function mergeAndInitQuizData() {
    let combined = [];

    // 1. Banco principal (data.js) - Cesgranrio Base (80 questões)
    if (typeof window !== 'undefined' && Array.isArray(window.quizData)) {
        window.quizData.forEach(q => {
            const cat = categoryMap[q.category] || q.category;
            combined.push({
                ...q,
                category: cat,
                exam: q.exam || 'CESGRANRIO',
                matter: q.matter || q.category
            });
        });
    }

    // 2. Lote 01 Cesgranrio (dbs/data_lote01_cesgranrio.js) - 15 questões
    const cesgLote01 = (typeof window !== 'undefined') ? (window.quizDataCesgranrioLote01 || window.quizDataLote01Cesgranrio || window.quizDataLote01) : null;
    if (Array.isArray(cesgLote01)) {
        cesgLote01.forEach(q => {
            const exists = combined.some(item => item.exam === 'CESGRANRIO' && item.q.trim() === q.q.trim());
            if (!exists) {
                const cat = categoryMap[q.category] || q.category;
                combined.push({
                    ...q,
                    originalId: q.id,
                    category: cat,
                    exam: 'CESGRANRIO',
                    matter: q.matter || q.category
                });
            }
        });
    }

    // 3. Lote 02 Cesgranrio (dbs/data_lote02_cesgranrio.js) - 15 questões
    const cesgLote02 = (typeof window !== 'undefined') ? window.quizDataCesgranrioLote02 : null;
    if (Array.isArray(cesgLote02)) {
        cesgLote02.forEach(q => {
            const exists = combined.some(item => item.exam === 'CESGRANRIO' && item.q.trim() === q.q.trim());
            if (!exists) {
                const cat = categoryMap[q.category] || q.category;
                combined.push({
                    ...q,
                    originalId: q.id,
                    category: cat,
                    exam: 'CESGRANRIO',
                    matter: q.matter || q.category
                });
            }
        });
    }

    // 4. Lote 01 FGV (dbs/data_lote01_fgv.js) - 15 questões
    const fgvLote01 = (typeof window !== 'undefined') ? (window.quizDataFgvLote01 || window.quizDataLote01Fgv) : null;
    if (Array.isArray(fgvLote01)) {
        fgvLote01.forEach(q => {
            const exists = combined.some(item => item.exam === 'FGV' && item.q.trim() === q.q.trim());
            if (!exists) {
                const cat = categoryMap[q.category] || q.category;
                combined.push({
                    ...q,
                    originalId: q.originalId || q.id,
                    category: cat,
                    exam: 'FGV',
                    matter: q.matter || q.category
                });
            }
        });
    }

    // 5. Lote 02 FGV (dbs/data_lote02_fgv.js) - 15 questões
    const fgvLote02 = (typeof window !== 'undefined') ? window.quizDataFgvLote02 : null;
    if (Array.isArray(fgvLote02)) {
        fgvLote02.forEach(q => {
            const exists = combined.some(item => item.exam === 'FGV' && item.q.trim() === q.q.trim());
            if (!exists) {
                const cat = categoryMap[q.category] || q.category;
                combined.push({
                    ...q,
                    originalId: q.originalId || q.id,
                    category: cat,
                    exam: 'FGV',
                    matter: q.matter || q.category
                });
            }
        });
    }

    // Normalização sequencial de id e _index
    combined.forEach((q, idx) => {
        q._index = idx;
        q.id = idx + 1; // 1 a N
    });

    if (typeof window !== 'undefined') {
        window.quizData = combined;
    }
    return combined;
}

// Executa fusão antes de instanciar o estado
mergeAndInitQuizData();

let state = {
    mode: 'study', // 'study' | 'exam'
    viewType: 'focus', // 'focus' (padrão) | 'list'
    focusIndex: 0,
    selectedExam: 'ALL', // 'ALL' | 'CESGRANRIO' | 'FGV'
    selectedCategory: 'ALL',
    searchQuery: '',
    userAnswers: new Array(window.quizData ? window.quizData.length : 0).fill(null),
    flagged: new Array(window.quizData ? window.quizData.length : 0).fill(false),
    eliminated: Array.from({ length: window.quizData ? window.quizData.length : 0 }, () => [false, false, false, false, false]),
    isPaused: false,
    examSubmitted: false,
    soundEnabled: true,
    timerSeconds: 0,
    timerInterval: null,
    streak: 0
};

// Web Audio API Synth (Som sem dependências externas)
const audioCtx = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;

function playSound(type) {
    if (!state.soundEnabled || !audioCtx) return;
    try {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'correct') {
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
            osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.12); // E5
            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.25);
        } else if (type === 'incorrect') {
            osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
            osc.frequency.exponentialRampToValueAtTime(164.81, audioCtx.currentTime + 0.15); // E3
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.25);
        }
    } catch (e) { }
}

function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('btn-sound-toggle');
    if (btn) {
        btn.innerText = state.soundEnabled ? '🔊' : '🔇';
        btn.title = state.soundEnabled ? 'Som Ativado' : 'Som Desativado';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Garante unificação dos dados mesmo se scripts carregaram após parsing
    mergeAndInitQuizData();

    if (typeof window.quizData === 'undefined' || !window.quizData.length) {
        alert('Erro ao carregar banco de questões!');
        return;
    }

    // Atualiza contadores dinâmicos no cabeçalho
    const headerTotalEl = document.getElementById('header-total-q');
    if (headerTotalEl) headerTotalEl.innerText = window.quizData.length;
    const hudTotalEl = document.getElementById('hud-total');
    if (hudTotalEl) hudTotalEl.innerText = window.quizData.length;
    const hudGridTotalEl = document.getElementById('hud-grid-total');
    if (hudGridTotalEl) hudGridTotalEl.innerText = window.quizData.length;

    loadLocalStorage();
    initBancaChips();
    initCategoryChips();
    startTimer();
    renderGrid();
    renderQuiz();
    updateHUD();
    setupKeyboardShortcuts();
});

// Timer & Pausa
function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        if (!state.isPaused && !state.examSubmitted) {
            state.timerSeconds++;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(state.timerSeconds / 60).toString().padStart(2, '0');
    const s = (state.timerSeconds % 60).toString().padStart(2, '0');
    const el = document.getElementById('hud-timer');
    if (el) el.innerText = `${m}:${s}`;
}

function togglePauseSimulado() {
    state.isPaused = !state.isPaused;
    const pauseModal = document.getElementById('pause-modal');
    const btnText = document.getElementById('pause-btn-text');

    if (state.isPaused) {
        if (pauseModal) pauseModal.classList.add('open');
        if (btnText) btnText.innerText = '▶️ Retomar';
    } else {
        if (pauseModal) pauseModal.classList.remove('open');
        if (btnText) btnText.innerText = '⏸️ Pausar';
    }
    saveLocalStorage();
}

// Filtro de Bancas (Cesgranrio / FGV / Todas)
function initBancaChips() {
    const container = document.getElementById('banca-chips');
    if (!container) return;

    const total = window.quizData.length;
    const cesgCount = window.quizData.filter(q => q.exam === 'CESGRANRIO').length;
    const fgvCount = window.quizData.filter(q => q.exam === 'FGV').length;

    const bancas = [
        { id: 'ALL', label: `🏢 Todas as Bancas (${total})` },
        { id: 'CESGRANRIO', label: `🎯 Cesgranrio (${cesgCount})` },
        { id: 'FGV', label: `⚖️ FGV (${fgvCount})` }
    ];

    container.innerHTML = bancas.map(b => `
        <button class="banca-chip ${b.id === state.selectedExam ? 'active' : ''}" onclick="selectBanca('${b.id}')">
            ${b.label}
        </button>
    `).join('');
}

function selectBanca(banca) {
    state.selectedExam = banca;
    state.selectedCategory = 'ALL';
    state.focusIndex = 0;
    initBancaChips();
    initCategoryChips();
    renderQuiz();
    renderGrid();
    updateHUD();
    saveLocalStorage();
}

// Filtro de Categorias
function initCategoryChips() {
    const container = document.getElementById('category-chips');
    if (!container) return;

    // Filtra pelo exam ativo
    const pool = state.selectedExam === 'ALL'
        ? window.quizData
        : window.quizData.filter(q => q.exam === state.selectedExam);

    const categories = ['ALL', ...new Set(pool.map(q => q.category))];

    container.innerHTML = categories.map(cat => {
        let label = '';
        if (cat === 'ALL') {
            label = `🌐 Todas as Áreas (${pool.length})`;
        } else {
            const count = pool.filter(q => q.category === cat).length;
            label = `${cat} (${count})`;
        }
        return `
            <button class="cat-chip ${cat === state.selectedCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
                ${label}
            </button>
        `;
    }).join('');
}

function selectCategory(cat) {
    state.selectedCategory = cat;
    state.focusIndex = 0;
    initCategoryChips();
    renderQuiz();
    renderGrid();
    saveLocalStorage();
}

function handleSearch() {
    state.searchQuery = document.getElementById('search-input').value.toLowerCase();
    state.focusIndex = 0;
    renderQuiz();
    renderGrid();
}

function updateModeAndTypeButtons() {
    const listBtn = document.getElementById('view-list');
    const focusBtn = document.getElementById('view-focus');
    if (listBtn) listBtn.classList.toggle('active', state.viewType === 'list');
    if (focusBtn) focusBtn.classList.toggle('active', state.viewType === 'focus');

    const studyBtn = document.getElementById('mode-study');
    const examBtn = document.getElementById('mode-exam');
    if (studyBtn) studyBtn.classList.toggle('active', state.mode === 'study');
    if (examBtn) examBtn.classList.toggle('active', state.mode === 'exam');
}

function setMode(mode) {
    state.mode = mode;
    updateModeAndTypeButtons();
    renderQuiz();
    renderGrid();
    saveLocalStorage();
}

function setViewType(type) {
    state.viewType = type;
    updateModeAndTypeButtons();
    renderQuiz();
    renderGrid();
    saveLocalStorage();
}

function toggleGridDrawer() {
    const drawer = document.getElementById('grid-drawer');
    if (drawer) drawer.classList.toggle('open');
}

// Filtragem das Questões
function getFilteredQuestions() {
    return window.quizData.filter(q => {
        const matchesExam = state.selectedExam === 'ALL' || q.exam === state.selectedExam;
        const matchesCat = state.selectedCategory === 'ALL' || q.category === state.selectedCategory;
        const matchesSearch = !state.searchQuery ||
            q.q.toLowerCase().includes(state.searchQuery) ||
            (q.exp && q.exp.toLowerCase().includes(state.searchQuery)) ||
            (q.matter && q.matter.toLowerCase().includes(state.searchQuery)) ||
            (q.category && q.category.toLowerCase().includes(state.searchQuery)) ||
            (q.exam && q.exam.toLowerCase().includes(state.searchQuery)) ||
            q.opts.some(o => o.toLowerCase().includes(state.searchQuery));
        return matchesExam && matchesCat && matchesSearch;
    });
}

// Renderização Principal
function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    container.innerHTML = '';

    const questions = getFilteredQuestions();

    if (questions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                Nenhuma questão encontrada para os filtros selecionados.
            </div>
        `;
        return;
    }

    if (state.viewType === 'focus') {
        if (state.focusIndex >= questions.length) state.focusIndex = 0;
        const q = questions[state.focusIndex];
        container.appendChild(createQuestionCard(q, state.focusIndex + 1, questions.length));
    } else {
        questions.forEach((q, idx) => {
            container.appendChild(createQuestionCard(q, idx + 1, questions.length));
        });
    }
}

function createQuestionCard(item, currentIdx, totalIdx) {
    const qIndex = item._index !== undefined ? item._index : (item.id - 1);
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `card-${qIndex}`;

    const selectedOpt = state.userAnswers[qIndex];
    const isFlagged = state.flagged[qIndex];
    const showFeedback = (state.mode === 'study' && selectedOpt !== null) || (state.mode === 'exam' && state.examSubmitted);

    // Garantir vetor de eliminadas
    if (!state.eliminated[qIndex]) {
        state.eliminated[qIndex] = [false, false, false, false, false];
    }

    // Gera HTML das alternativas
    const optionsHtml = item.opts.map((opt, optIndex) => {
        const letter = String.fromCharCode(65 + optIndex); // A, B, C, D, E
        const isEliminated = state.eliminated[qIndex][optIndex];
        let extraClass = '';

        if (selectedOpt === optIndex) extraClass += ' selected';
        if (isEliminated) extraClass += ' eliminated';
        if (showFeedback) {
            if (optIndex === item.ans) extraClass += ' correct';
            else if (selectedOpt === optIndex && selectedOpt !== item.ans) extraClass += ' incorrect';
        }

        return `
            <li class="option-item ${extraClass}">
                <button class="btn-scissor ${isEliminated ? 'active' : ''}" onclick="toggleEliminate(event, ${qIndex}, ${optIndex})" title="Riscar / Eliminar opção ✂️">
                    ✂️
                </button>
                <label class="option-label" onclick="selectAnswer(${qIndex}, ${optIndex})">
                    <span class="option-letter">${letter}</span>
                    <span class="option-text">${opt}</span>
                </label>
            </li>
        `;
    }).join('');

    const diffClass = item.difficulty === 'Fácil' ? 'diff-facil' : item.difficulty === 'Difícil' ? 'diff-dificil' : 'diff-medio';

    let feedbackHtml = '';
    if (showFeedback) {
        const isWin = selectedOpt === item.ans;
        const feedbackTitle = isWin
            ? '✓ Resposta Correta!'
            : `✗ Resposta Incorreta (Gabarito: Alternativa ${String.fromCharCode(65 + item.ans)})`;

        feedbackHtml = `
            <div class="feedback-box ${isWin ? 'correct' : 'incorrect'}" style="display: block;">
                <div class="feedback-title">${feedbackTitle}</div>
                <div class="feedback-exp">${item.exp}</div>
            </div>
        `;
    }

    let focusNavHtml = '';
    if (state.viewType === 'focus') {
        focusNavHtml = `
            <div class="card-footer-nav">
                <button class="btn btn-outline" ${currentIdx <= 1 ? 'disabled style="opacity:0.4"' : ''} onclick="prevFocusCard()">
                    ← Anterior
                </button>
                <span style="font-size:0.85rem; color:var(--text-muted);">Questão ${currentIdx} de ${totalIdx}</span>
                <button class="btn btn-primary" ${currentIdx >= totalIdx ? 'disabled style="opacity:0.4"' : ''} onclick="nextFocusCard()">
                    Próxima →
                </button>
            </div>
        `;
    }

    const examBadgeClass = item.exam === 'FGV' ? 'badge-purple' : 'badge-amber';
    const originalSubInfo = item.originalId && item.exam === 'FGV' 
        ? ` <span style="font-size:0.75rem; opacity:0.75; font-weight:normal;">(FGV #${item.originalId})</span>` 
        : '';
    const matterHtml = item.matter && item.matter !== item.category 
        ? `<span class="q-matter-tag">${item.matter}</span>` 
        : '';

    card.innerHTML = `
        <div class="q-header">
            <div class="q-meta">
                <span class="q-num-tag">Questão ${item.id}${originalSubInfo}</span>
                <span class="badge ${examBadgeClass}" style="font-size:0.72rem; padding: 2px 8px;">${item.exam}</span>
                ${matterHtml}
                <span class="q-category-tag">${item.category}</span>
                <span class="q-difficulty-tag ${diffClass}">${item.difficulty}</span>
            </div>
            <div class="q-actions-top">
                <button class="btn-flag ${isFlagged ? 'active' : ''}" onclick="toggleFlag(${qIndex})" title="Marcar para Revisão">
                    ${isFlagged ? '★' : '☆'}
                </button>
            </div>
        </div>
        
        <div class="q-text">${item.q}</div>
        <ul class="options-list">${optionsHtml}</ul>
        ${feedbackHtml}
        ${focusNavHtml}
    `;

    return card;
}

function toggleEliminate(e, qIndex, optIndex) {
    if (e) e.stopPropagation();
    if (!state.eliminated[qIndex]) {
        state.eliminated[qIndex] = [false, false, false, false, false];
    }
    state.eliminated[qIndex][optIndex] = !state.eliminated[qIndex][optIndex];
    saveLocalStorage();
    renderQuiz();
}

function selectAnswer(qIndex, optIndex) {
    const previousAns = state.userAnswers[qIndex];
    state.userAnswers[qIndex] = optIndex;

    if (state.mode === 'study') {
        const isCorrect = optIndex === window.quizData[qIndex].ans;
        if (isCorrect) {
            if (previousAns !== optIndex) state.streak++;
            playSound('correct');
        } else {
            state.streak = 0;
            playSound('incorrect');
        }
    }

    saveLocalStorage();
    updateHUD();
    renderQuiz();
    renderGrid();
}

function toggleFlag(qIndex) {
    state.flagged[qIndex] = !state.flagged[qIndex];
    saveLocalStorage();
    renderQuiz();
    renderGrid();
}

function prevFocusCard() {
    if (state.focusIndex > 0) {
        state.focusIndex--;
        saveLocalStorage();
        renderQuiz();
        renderGrid();
    }
}

function nextFocusCard() {
    const questions = getFilteredQuestions();
    if (state.focusIndex < questions.length - 1) {
        state.focusIndex++;
        saveLocalStorage();
        renderQuiz();
        renderGrid();
    }
}

// Update HUD
function updateHUD() {
    let answered = 0;
    let correctCount = 0;

    state.userAnswers.forEach((ans, idx) => {
        if (ans !== null && window.quizData[idx]) {
            answered++;
            if (ans === window.quizData[idx].ans) {
                correctCount++;
            }
        }
    });

    const total = window.quizData.length;
    const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;
    const progressPercent = total > 0 ? Math.round((answered / total) * 100) : 0;

    const ansEl = document.getElementById('hud-answered');
    if (ansEl) ansEl.innerText = answered;
    const totalEl = document.getElementById('hud-total');
    if (totalEl) totalEl.innerText = total;
    const scoreEl = document.getElementById('hud-score');
    if (scoreEl) scoreEl.innerText = `${correctCount * 2} pts`;
    const accEl = document.getElementById('hud-accuracy');
    if (accEl) accEl.innerText = `${accuracy}%`;
    const streakEl = document.getElementById('hud-streak');
    if (streakEl) streakEl.innerText = state.streak;
    const barEl = document.getElementById('hud-progress-bar');
    if (barEl) barEl.style.width = `${progressPercent}%`;
}

// Drawer de Grade de Questões
function renderGrid() {
    const grid = document.getElementById('question-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = getFilteredQuestions();
    const filteredIndexes = new Set(filtered.map(q => q._index));

    window.quizData.forEach((q, idx) => {
        const ans = state.userAnswers[idx];
        const isFlagged = state.flagged[idx];
        const isInFilter = filteredIndexes.has(idx);

        let extraClass = '';
        if (ans !== null) extraClass += ' answered';
        if ((state.mode === 'study' && ans !== null) || state.examSubmitted) {
            if (ans === q.ans) extraClass += ' correct-ans';
            else if (ans !== null) extraClass += ' incorrect-ans';
        }
        if (isFlagged) extraClass += ' flagged';
        if (state.viewType === 'focus' && filtered[state.focusIndex] && filtered[state.focusIndex]._index === idx) {
            extraClass += ' active-curr';
        }
        if (q.exam === 'FGV') extraClass += ' banca-fgv';
        else extraClass += ' banca-cesgranrio';
        if (!isInFilter) extraClass += ' dim-filtered';

        const item = document.createElement('div');
        item.className = `q-grid-item ${extraClass}`;
        item.innerText = idx + 1;
        item.title = `Questão ${idx + 1} (${q.exam}) - ${q.matter || q.category}: ${q.difficulty}`;
        item.onclick = () => {
            if (state.viewType === 'focus') {
                const targetPos = filtered.findIndex(item => item._index === idx);
                if (targetPos !== -1) {
                    state.focusIndex = targetPos;
                } else {
                    // Se estiver ocultada por filtros, reseta os filtros para exibir a questão
                    state.selectedExam = 'ALL';
                    state.selectedCategory = 'ALL';
                    state.searchQuery = '';
                    const searchInput = document.getElementById('search-input');
                    if (searchInput) searchInput.value = '';
                    initBancaChips();
                    initCategoryChips();
                    const newFiltered = getFilteredQuestions();
                    state.focusIndex = newFiltered.findIndex(item => item._index === idx);
                }
                saveLocalStorage();
                renderQuiz();
                renderGrid();
            } else {
                const el = document.getElementById(`card-${idx}`);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    // Reseta filtros e rola até a questão
                    state.selectedExam = 'ALL';
                    state.selectedCategory = 'ALL';
                    state.searchQuery = '';
                    const searchInput = document.getElementById('search-input');
                    if (searchInput) searchInput.value = '';
                    initBancaChips();
                    initCategoryChips();
                    renderQuiz();
                    renderGrid();
                    setTimeout(() => {
                        const target = document.getElementById(`card-${idx}`);
                        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 60);
                }
            }
        };
        grid.appendChild(item);
    });
}

// Submeter / Finalizar Simulado
function finishExam() {
    state.examSubmitted = true;
    saveLocalStorage();
    renderQuiz();
    renderGrid();

    let correct = 0;
    const catStats = {};
    const examStats = {
        'CESGRANRIO': { total: 0, correct: 0 },
        'FGV': { total: 0, correct: 0 }
    };

    window.quizData.forEach((q, idx) => {
        if (!catStats[q.category]) catStats[q.category] = { total: 0, correct: 0 };
        catStats[q.category].total++;

        const examKey = q.exam || 'CESGRANRIO';
        if (!examStats[examKey]) examStats[examKey] = { total: 0, correct: 0 };
        examStats[examKey].total++;

        if (state.userAnswers[idx] === q.ans) {
            correct++;
            catStats[q.category].correct++;
            examStats[examKey].correct++;
        }
    });

    const total = window.quizData.length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const m = Math.floor(state.timerSeconds / 60).toString().padStart(2, '0');
    const s = (state.timerSeconds % 60).toString().padStart(2, '0');

    const modalScore = document.getElementById('modal-score');
    if (modalScore) modalScore.innerText = `${correct} / ${total}`;
    const modalAcc = document.getElementById('modal-accuracy');
    if (modalAcc) modalAcc.innerText = `${accuracy}%`;
    const modalTime = document.getElementById('modal-time');
    if (modalTime) modalTime.innerText = `${m}:${s}`;

    let resultStatus = 'Precisa Estudar Mais';
    if (accuracy >= 80) resultStatus = '🎯 Aprovado com Excelência!';
    else if (accuracy >= 60) resultStatus = '🚀 Aprovado / Bom Nível';

    const modalStatus = document.getElementById('modal-status');
    if (modalStatus) modalStatus.innerText = resultStatus;

    const catBreakdownContainer = document.getElementById('modal-cat-breakdown');
    if (catBreakdownContainer) {
        let breakdownHtml = `<div style="margin-bottom: 20px;">`;
        breakdownHtml += `<h4 style="font-size:0.9rem; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Desempenho por Banca:</h4>`;
        
        Object.entries(examStats).forEach(([examName, stat]) => {
            if (stat.total === 0) return;
            const pct = Math.round((stat.correct / stat.total) * 100);
            breakdownHtml += `
                <div class="cat-perf-row" style="margin-bottom:10px;">
                    <div class="cat-perf-label">
                        <strong>${examName}</strong>
                        <span>${stat.correct}/${stat.total} (${pct}%)</span>
                    </div>
                    <div class="progress-bar-container" style="width:100%;">
                        <div class="progress-bar-fill" style="width:${pct}%; background: ${pct >= 70 ? 'var(--correct)' : 'var(--incorrect)'}"></div>
                    </div>
                </div>
            `;
        });
        breakdownHtml += `</div>`;

        breakdownHtml += `<h4 style="font-size:0.9rem; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Desempenho por Área de Conhecimento:</h4>`;
        breakdownHtml += Object.entries(catStats).map(([cat, stat]) => {
            const pct = Math.round((stat.correct / stat.total) * 100);
            return `
                <div class="cat-perf-row">
                    <div class="cat-perf-label">
                        <span>${cat}</span>
                        <span>${stat.correct}/${stat.total} (${pct}%)</span>
                    </div>
                    <div class="progress-bar-container" style="width:100%;">
                        <div class="progress-bar-fill" style="width:${pct}%; background: ${pct >= 70 ? 'var(--correct)' : 'var(--incorrect)'}"></div>
                    </div>
                </div>
            `;
        }).join('');

        catBreakdownContainer.innerHTML = breakdownHtml;
    }

    const resModal = document.getElementById('results-modal');
    if (resModal) resModal.classList.add('open');
}

function closeResultsModal() {
    const resModal = document.getElementById('results-modal');
    if (resModal) resModal.classList.remove('open');
}

function toggleShortcutsModal() {
    const shortModal = document.getElementById('shortcuts-modal');
    if (shortModal) shortModal.classList.toggle('open');
}

// LocalStorage
function saveLocalStorage() {
    const data = {
        userAnswers: state.userAnswers,
        flagged: state.flagged,
        eliminated: state.eliminated,
        mode: state.mode,
        viewType: state.viewType,
        focusIndex: state.focusIndex,
        selectedExam: state.selectedExam,
        selectedCategory: state.selectedCategory,
        timerSeconds: state.timerSeconds,
        streak: state.streak,
        isPaused: state.isPaused
    };
    localStorage.setItem('transpetro_quiz_state', JSON.stringify(data));
}

function loadLocalStorage() {
    const raw = localStorage.getItem('transpetro_quiz_state');
    if (raw) {
        try {
            const data = JSON.parse(raw);
            state.userAnswers = data.userAnswers || state.userAnswers;
            state.flagged = data.flagged || state.flagged;
            state.eliminated = data.eliminated || Array.from({ length: window.quizData.length }, () => [false, false, false, false, false]);
            
            // Corrige dimensões caso o banco de questões tenha crescido
            if (state.userAnswers.length < window.quizData.length) {
                const diff = window.quizData.length - state.userAnswers.length;
                state.userAnswers.push(...new Array(diff).fill(null));
                state.flagged.push(...new Array(diff).fill(false));
                for(let i=0; i<diff; i++) state.eliminated.push([false, false, false, false, false]);
            }
            state.mode = data.mode || state.mode;
            state.viewType = data.viewType || 'focus';
            if (typeof data.focusIndex === 'number' && data.focusIndex >= 0) {
                state.focusIndex = data.focusIndex;
            }
            state.selectedExam = data.selectedExam || 'ALL';
            state.selectedCategory = data.selectedCategory || 'ALL';
            state.timerSeconds = data.timerSeconds || 0;
            state.streak = data.streak || 0;
            state.isPaused = !!data.isPaused;
            if (state.isPaused) {
                const pauseModal = document.getElementById('pause-modal');
                if (pauseModal) pauseModal.classList.add('open');
                const btnText = document.getElementById('pause-btn-text');
                if (btnText) btnText.innerText = '▶️ Retomar';
            }
        } catch (e) { }
    }
    updateModeAndTypeButtons();
}

function confirmResetQuiz() {
    if (confirm('Tem certeza de que deseja reiniciar o simulado? Suas respostas e marcações serão apagadas.')) {
        localStorage.removeItem('transpetro_quiz_state');
        state.userAnswers = new Array(window.quizData.length).fill(null);
        state.flagged = new Array(window.quizData.length).fill(false);
        state.eliminated = Array.from({ length: window.quizData.length }, () => [false, false, false, false, false]);
        state.timerSeconds = 0;
        state.streak = 0;
        state.examSubmitted = false;
        state.isPaused = false;
        const pauseModal = document.getElementById('pause-modal');
        if (pauseModal) pauseModal.classList.remove('open');
        const btnText = document.getElementById('pause-btn-text');
        if (btnText) btnText.innerText = '⏸️ Pausar';
        closeResultsModal();
        renderQuiz();
        renderGrid();
        updateHUD();
    }
}

// Atalhos de Teclado
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT') return;

        const key = e.key.toUpperCase();
        const filtered = getFilteredQuestions();
        const currentQIndex = state.viewType === 'focus' 
            ? (filtered[state.focusIndex] ? filtered[state.focusIndex]._index : 0)
            : (filtered[0] ? filtered[0]._index : 0);

        if (e.code === 'Space') {
            e.preventDefault();
            togglePauseSimulado();
        }
        else if (['1', 'A'].includes(key)) selectAnswer(currentQIndex, 0);
        else if (['2', 'B'].includes(key)) selectAnswer(currentQIndex, 1);
        else if (['3', 'C'].includes(key)) selectAnswer(currentQIndex, 2);
        else if (['4', 'D'].includes(key)) selectAnswer(currentQIndex, 3);
        else if (['5', 'E'].includes(key)) selectAnswer(currentQIndex, 4);
        else if (key === 'N' || e.key === 'ArrowRight') nextFocusCard();
        else if (key === 'P' || e.key === 'ArrowLeft') prevFocusCard();
        else if (key === 'F') toggleFlag(currentQIndex);
        else if (key === 'G') toggleGridDrawer();
    });
}