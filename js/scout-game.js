// js/scout-game.js
// Teste do Olheiro - Minigame de adivinhação de jogadores

let currentChallenge = null;
let score = 0;
let questionsAnswered = 0;
let hintsUsed = 0;

// Banco de jogadores para o jogo
const scoutPlayers = [
    { 
        id: 16, name: "Vitor Roque", club: "Palmeiras", age: 21, position: "Centroavante",
        stats: { goals: 18, assists: 5, games: 28, height: "1.72m", foot: "Destro" },
        clues: ["Jogador mais jovem do elenco", "Apelido é 'Tigrinho'", "Revelado pelo Cruzeiro"]
    },
    { 
        id: 1, name: "Lucas Paquetá", club: "Flamengo", age: 28, position: "Meia Atacante",
        stats: { goals: 8, assists: 12, games: 25, height: "1.80m", foot: "Canhoto" },
        clues: ["Usa a 10 do Flamengo", "Jogou no West Ham", "Tem uma dança característica"]
    },
    { 
        id: 29, name: "Memphis Depay", club: "Corinthians", age: 32, position: "Ponta Esquerda",
        stats: { goals: 12, assists: 8, games: 26, height: "1.76m", foot: "Destro" },
        clues: ["Holandês no Timão", "Usa a 94", "Tem tatuagens pelo corpo todo"]
    },
    { 
        id: 40, name: "Lucas Moura", club: "São Paulo", age: 33, position: "Ponta Direita",
        stats: { goals: 9, assists: 7, games: 24, height: "1.72m", foot: "Destro" },
        clues: ["Ex-Tottenham", "Fez hat-trick na semi da Champions", "Revelado pelo São Paulo"]
    },
    { 
        id: 41, name: "Endrick", club: "Palmeiras", age: 19, position: "Centroavante",
        stats: { goals: 15, assists: 4, games: 22, height: "1.73m", foot: "Canhoto" },
        clues: ["Já vendido ao Real Madrid", "Joia de R$ 300 milhões", "Chute forte"]
    }
];

// Função para iniciar novo desafio
function startNewChallenge() {
    const randomIndex = Math.floor(Math.random() * scoutPlayers.length);
    currentChallenge = { ...scoutPlayers[randomIndex] };
    questionsAnswered++;
    
    // Revelar 3 estatísticas iniciais
    const statsToShow = ['goals', 'assists', 'games'];
    const visibleStats = {};
    statsToShow.forEach(stat => {
        visibleStats[stat] = currentChallenge.stats[stat];
    });
    
    // Embaralhar opções
    const otherPlayers = scoutPlayers.filter(p => p.id !== currentChallenge.id);
    const shuffledOthers = [...otherPlayers].sort(() => 0.5 - Math.random());
    const options = [currentChallenge.name, shuffledOthers[0]?.name, shuffledOthers[1]?.name].filter(Boolean);
    const shuffledOptions = [...options].sort(() => 0.5 - Math.random());
    
    // Atualizar interface
    const gameContainer = document.getElementById('scoutGame');
    if (gameContainer) {
        gameContainer.innerHTML = `
            <div class="scout-card">
                <div class="scout-header">
                    <span class="scout-title">🧠 TESTE DO OLHEIRO</span>
                    <span class="scout-score">Pontuação: ${score}</span>
                </div>
                <div class="scout-stats">
                    <div class="stat-row">
                        <span class="stat-label">⚽ Gols na temporada:</span>
                        <span class="stat-value">${visibleStats.goals}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">🎯 Assistências:</span>
                        <span class="stat-value">${visibleStats.assists}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">📊 Jogos disputados:</span>
                        <span class="stat-value">${visibleStats.games}</span>
                    </div>
                    <div class="stat-row hint-row" id="hintRow" style="display: none;">
                        <span class="stat-label">💡 Dica:</span>
                        <span class="stat-value hint-text"></span>
                    </div>
                </div>
                <div class="scout-options">
                    ${shuffledOptions.map(opt => `
                        <button class="scout-option" data-name="${opt}">${opt}</button>
                    `).join('')}
                </div>
                <div class="scout-actions">
                    <button class="scout-hint-btn" id="scoutHintBtn">🔍 Usar dica (-5 pontos)</button>
                    <button class="scout-skip-btn" id="scoutSkipBtn">⏭️ Pular (-2 pontos)</button>
                </div>
                <div class="scout-feedback" id="scoutFeedback"></div>
            </div>
        `;
    }
    
    // Adicionar eventos
    document.querySelectorAll('.scout-option').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(btn.dataset.name));
    });
    document.getElementById('scoutHintBtn')?.addEventListener('click', showHint);
    document.getElementById('scoutSkipBtn')?.addEventListener('click', skipChallenge);
}

// Função para verificar resposta
function checkAnswer(selectedName) {
    const isCorrect = selectedName === currentChallenge.name;
    const feedbackDiv = document.getElementById('scoutFeedback');
    
    if (isCorrect) {
        const pointsEarned = 10 - (hintsUsed * 2);
        score += pointsEarned;
        feedbackDiv.innerHTML = `<div class="scout-correct">✅ Correto! +${pointsEarned} pontos!</div>`;
        saveScore();
        setTimeout(() => startNewChallenge(), 2000);
    } else {
        score = Math.max(0, score - 5);
        feedbackDiv.innerHTML = `<div class="scout-wrong">❌ Errado! Era ${currentChallenge.name}. -5 pontos!</div>`;
        saveScore();
        setTimeout(() => startNewChallenge(), 2000);
    }
    hintsUsed = 0;
}

// Função para mostrar dica
function showHint() {
    if (hintsUsed >= currentChallenge.clues.length) {
        alert('Sem mais dicas para este jogador!');
        return;
    }
    
    score = Math.max(0, score - 5);
    hintsUsed++;
    
    const hintRow = document.getElementById('hintRow');
    const hintText = document.querySelector('.hint-text');
    
    if (hintRow && hintText) {
        hintRow.style.display = 'flex';
        hintText.textContent = currentChallenge.clues[hintsUsed - 1];
    }
    
    saveScore();
}

// Função para pular desafio
function skipChallenge() {
    score = Math.max(0, score - 2);
    saveScore();
    startNewChallenge();
}

// Salvar pontuação
function saveScore() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        const scores = JSON.parse(localStorage.getItem('scoutScores') || '{}');
        scores[user.id] = { score: score, date: new Date().toISOString() };
        localStorage.setItem('scoutScores', JSON.stringify(scores));
    }
    localStorage.setItem('scoutScore', score);
    
    const scoreElement = document.querySelector('.scout-score');
    if (scoreElement) scoreElement.textContent = `Pontuação: ${score}`;
}

// Carregar pontuação salva
function loadScore() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        const scores = JSON.parse(localStorage.getItem('scoutScores') || '{}');
        if (scores[user.id]) {
            score = scores[user.id].score;
        } else {
            score = 0;
        }
    } else {
        score = parseInt(localStorage.getItem('scoutScore') || '0');
    }
}

// Inicializar jogo
function initScoutGame() {
    loadScore();
    startNewChallenge();
}

// Exportar
window.initScoutGame = initScoutGame;