/**
     * Lógica do Simulado Transpetro Cibersegurança
     */

let state = {
    mode: 'study', // 'study' | 'exam'
    viewType: 'list', // 'list' | 'focus'
    focusIndex: 0,
    selectedCategory: 'ALL',
    searchQuery: '',
    userAnswers: new Array(50).fill(null),
    flagged: new Array(50).fill(false),
    eliminated: Array.from({ length: 50 }, () => [false, false, false, false, false]),
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
    btn.innerText = state.soundEnabled ? '🔊' : '🔇';
    btn.title = state.soundEnabled ? 'Som Ativado' : 'Som Desativado';
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.quizData === 'undefined' || !window.quizData.length) {
        alert('Erro ao carregar banco de questões data.js!');
        return;
    }
    loadLocalStorage();
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
    document.getElementById('hud-timer').innerText = `${m}:${s}`;
}

function togglePauseSimulado() {
    state.isPaused = !state.isPaused;
    const pauseModal = document.getElementById('pause-modal');
    const btnText = document.getElementById('pause-btn-text');

    if (state.isPaused) {
        pauseModal.classList.add('open');
        if (btnText) btnText.innerText = '▶️ Retomar';
    } else {
        pauseModal.classList.remove('open');
        if (btnText) btnText.innerText = '⏸️ Pausar';
    }
    saveLocalStorage();
}

// Categorias
function initCategoryChips() {
    const container = document.getElementById('category-chips');
    const categories = ['ALL', ...new Set(window.quizData.map(q => q.category))];

    container.innerHTML = categories.map(cat => `
    <button class="cat-chip ${cat === state.selectedCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
      ${cat === 'ALL' ? '🌐 Todas as Áreas (50)' : cat}
    </button>
  `).join('');
}

function selectCategory(cat) {
    state.selectedCategory = cat;
    initCategoryChips();
    renderQuiz();
}

function handleSearch() {
    state.searchQuery = document.getElementById('search-input').value.toLowerCase();
    renderQuiz();
}

function setMode(mode) {
    state.mode = mode;
    document.getElementById('mode-study').classList.toggle('active', mode === 'study');
    document.getElementById('mode-exam').classList.toggle('active', mode === 'exam');
    renderQuiz();
}

function setViewType(type) {
    state.viewType = type;
    document.getElementById('view-list').classList.toggle('active', type === 'list');
    document.getElementById('view-focus').classList.toggle('active', type === 'focus');
    renderQuiz();
}

function toggleGridDrawer() {
    document.getElementById('grid-drawer').classList.toggle('open');
}

// Renderização Principal
function getFilteredQuestions() {
    return window.quizData.filter(q => {
        const matchesCat = state.selectedCategory === 'ALL' || q.category === state.selectedCategory;
        const matchesSearch = !state.searchQuery ||
            q.q.toLowerCase().includes(state.searchQuery) ||
            q.exp.toLowerCase().includes(state.searchQuery) ||
            q.opts.some(o => o.toLowerCase().includes(state.searchQuery));
        return matchesCat && matchesSearch;
    });
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
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

    renderGrid();
}

function createQuestionCard(item, currentIdx, totalIdx) {
    const qIndex = item.id - 1;
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

    card.innerHTML = `
    <div class="q-header">
      <div class="q-meta">
        <span class="q-num-tag">Questão ${item.id}</span>
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
}

function toggleFlag(qIndex) {
    state.flagged[qIndex] = !state.flagged[qIndex];
    saveLocalStorage();
    renderQuiz();
}

function prevFocusCard() {
    if (state.focusIndex > 0) {
        state.focusIndex--;
        renderQuiz();
    }
}

function nextFocusCard() {
    const questions = getFilteredQuestions();
    if (state.focusIndex < questions.length - 1) {
        state.focusIndex++;
        renderQuiz();
    }
}

// Update HUD
function updateHUD() {
    let answered = 0;
    let correctCount = 0;

    state.userAnswers.forEach((ans, idx) => {
        if (ans !== null) {
            answered++;
            if (ans === window.quizData[idx].ans) {
                correctCount++;
            }
        }
    });

    const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;
    const progressPercent = Math.round((answered / 50) * 100);

    document.getElementById('hud-answered').innerText = answered;
    document.getElementById('hud-score').innerText = `${correctCount * 2} pts`;
    document.getElementById('hud-accuracy').innerText = `${accuracy}%`;
    document.getElementById('hud-streak').innerText = state.streak;
    document.getElementById('hud-progress-bar').style.width = `${progressPercent}%`;
}

// Drawer de Grade de Questões
function renderGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';

    window.quizData.forEach((q, idx) => {
        const ans = state.userAnswers[idx];
        const isFlagged = state.flagged[idx];
        let extraClass = '';

        if (ans !== null) extraClass += ' answered';
        if ((state.mode === 'study' && ans !== null) || state.examSubmitted) {
            if (ans === q.ans) extraClass += ' correct-ans';
            else if (ans !== null) extraClass += ' incorrect-ans';
        }
        if (isFlagged) extraClass += ' flagged';
        if (state.viewType === 'focus' && state.focusIndex === idx) extraClass += ' active-curr';

        const item = document.createElement('div');
        item.className = `q-grid-item ${extraClass}`;
        item.innerText = idx + 1;
        item.onclick = () => {
            if (state.viewType === 'focus') {
                state.focusIndex = idx;
                renderQuiz();
            } else {
                const el = document.getElementById(`card-${idx}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

    let correct = 0;
    const catStats = {};

    window.quizData.forEach((q, idx) => {
        if (!catStats[q.category]) catStats[q.category] = { total: 0, correct: 0 };
        catStats[q.category].total++;

        if (state.userAnswers[idx] === q.ans) {
            correct++;
            catStats[q.category].correct++;
        }
    });

    const accuracy = Math.round((correct / 50) * 100);
    const m = Math.floor(state.timerSeconds / 60).toString().padStart(2, '0');
    const s = (state.timerSeconds % 60).toString().padStart(2, '0');

    document.getElementById('modal-score').innerText = `${correct} / 50`;
    document.getElementById('modal-accuracy').innerText = `${accuracy}%`;
    document.getElementById('modal-time').innerText = `${m}:${s}`;

    let resultStatus = 'Precisa Estudar Mais';
    if (accuracy >= 80) resultStatus = '🎯 Aprovado com Excelência!';
    else if (accuracy >= 60) resultStatus = '🚀 Aprovado / Bom Nível';

    document.getElementById('modal-status').innerText = resultStatus;

    const catBreakdownContainer = document.getElementById('modal-cat-breakdown');
    catBreakdownContainer.innerHTML = Object.entries(catStats).map(([cat, stat]) => {
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

    document.getElementById('results-modal').classList.add('open');
}

function closeResultsModal() {
    document.getElementById('results-modal').classList.remove('open');
}

function toggleShortcutsModal() {
    document.getElementById('shortcuts-modal').classList.toggle('open');
}

// LocalStorage
function saveLocalStorage() {
    const data = {
        userAnswers: state.userAnswers,
        flagged: state.flagged,
        eliminated: state.eliminated,
        mode: state.mode,
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
            state.eliminated = data.eliminated || Array.from({ length: 50 }, () => [false, false, false, false, false]);
            state.mode = data.mode || state.mode;
            state.timerSeconds = data.timerSeconds || 0;
            state.streak = data.streak || 0;
            state.isPaused = !!data.isPaused;
            if (state.isPaused) {
                document.getElementById('pause-modal').classList.add('open');
                const btnText = document.getElementById('pause-btn-text');
                if (btnText) btnText.innerText = '▶️ Retomar';
            }
        } catch (e) { }
    }
}

function confirmResetQuiz() {
    if (confirm('Tem certeza de que deseja reiniciar o simulado? Suas respostas e marcações serão apagadas.')) {
        localStorage.removeItem('transpetro_quiz_state');
        state.userAnswers = new Array(50).fill(null);
        state.flagged = new Array(50).fill(false);
        state.eliminated = Array.from({ length: 50 }, () => [false, false, false, false, false]);
        state.timerSeconds = 0;
        state.streak = 0;
        state.examSubmitted = false;
        state.isPaused = false;
        document.getElementById('pause-modal').classList.remove('open');
        const btnText = document.getElementById('pause-btn-text');
        if (btnText) btnText.innerText = '⏸️ Pausar';
        closeResultsModal();
        renderQuiz();
        updateHUD();
    }
}

// Atalhos de Teclado
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT') return;

        const key = e.key.toUpperCase();
        const currentQIndex = state.viewType === 'focus' ? state.focusIndex : 0;

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