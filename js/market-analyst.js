// js/market-analyst.js
// Componente do Analista de Mercado

// Verificar se usuário está logado
function isUserLoggedIn() {
    const currentUser = sessionStorage.getItem('currentUser');
    return currentUser !== null;
}

// Obter carteira do usuário logado
function getUserPortfolio() {
    if (!isUserLoggedIn()) return [];
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const allPortfolios = JSON.parse(localStorage.getItem('userPortfolios') || '{}');
    return allPortfolios[currentUser.id] || [];
}

// Salvar carteira do usuário logado
function saveUserPortfolio(portfolio) {
    if (!isUserLoggedIn()) return false;
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const allPortfolios = JSON.parse(localStorage.getItem('userPortfolios') || '{}');
    allPortfolios[currentUser.id] = portfolio;
    localStorage.setItem('userPortfolios', JSON.stringify(allPortfolios));
    return true;
}

// Renderizar cards de investimento (só mostra se logado)
function renderInvestmentCards() {
    const container = document.getElementById('investmentContainer');
    if (!container) return;
    
    if (!isUserLoggedIn()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: #2a2a3a; border-radius: 20px;">
                <p style="color: #ffd966; font-size: 18px; margin-bottom: 15px;">🔒 Faça login para acessar o Analista de Mercado</p>
                <p style="color: #aaa;">Crie uma conta ou faça login para começar a investir nos jogadores!</p>
                <button class="btn-main" onclick="document.getElementById('loginModal').classList.add('active')" style="margin-top: 15px;">Fazer Login</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = playersAnalytics.investimentos.map(player => `
        <div class="invest-card">
            <div class="invest-header">
                <span class="player-name">${player.name}</span>
                <span class="player-club">${player.club}</span>
            </div>
            <div class="invest-details">
                <div class="age">${player.age} anos</div>
                <div class="position">${player.position}</div>
            </div>
            <div class="invest-value">
                <span class="current">€${(player.currentValue / 1000000).toFixed(0)}M</span>
                <span class="arrow">→</span>
                <span class="projected">€${(player.projectedValue / 1000000).toFixed(0)}M</span>
                <span class="return ${player.potentialReturn.includes('+') ? 'positive' : 'negative'}">${player.potentialReturn}</span>
            </div>
            <div class="invest-probability">
                <div class="prob-bar">
                    <div class="prob-fill" style="width: ${player.transferProbability}%"></div>
                </div>
                <span>🎯 ${player.transferProbability}% chance de transferência</span>
            </div>
            <div class="invest-interested">
                <strong>🏠 Interessados:</strong> ${player.interestedClubs.join(', ')}
            </div>
            <div class="invest-reason">
                <em>${player.reason}</em>
            </div>
            <button class="btn-add-carteira" data-player='${JSON.stringify(player)}'>➕ Adicionar à carteira</button>
        </div>
    `).join('');
    
    document.querySelectorAll('.btn-add-carteira').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!isUserLoggedIn()) {
                alert('⚠️ Faça login para adicionar jogadores à sua carteira!');
                document.getElementById('loginModal').classList.add('active');
                return;
            }
            const player = JSON.parse(btn.dataset.player);
            addToPortfolio(player);
        });
    });
}

// Renderizar promessas da base
function renderProspects() {
    const container = document.getElementById('prospectsContainer');
    if (!container) return;
    
    if (!isUserLoggedIn()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: #2a2a3a; border-radius: 20px;">
                <p style="color: #aaa;">🔒 Faça login para ver as promessas da base</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = playersAnalytics.promessas.map(prospect => `
        <div class="prospect-card">
            <div class="prospect-name">⭐ ${prospect.name}</div>
            <div class="prospect-club">${prospect.club}</div>
            <div class="prospect-age">${prospect.age} anos • ${prospect.position}</div>
            <div class="prospect-value">
                €${(prospect.currentValue / 1000000).toFixed(0)}M → €${(prospect.projectedValue / 1000000).toFixed(0)}M
                <span class="return positive">${prospect.potentialReturn}</span>
            </div>
            <div class="prospect-note">${prospect.note}</div>
            <div class="prospect-stats">
                📊 ${prospect.stats.goals} gols | ${prospect.stats.assists} assists | ${prospect.stats.games} jogos
            </div>
        </div>
    `).join('');
}

// Renderizar especulações
function renderRumors() {
    const container = document.getElementById('rumorsContainer');
    if (!container) return;
    
    if (!isUserLoggedIn()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: #2a2a3a; border-radius: 20px;">
                <p style="color: #aaa;">🔒 Faça login para ver as especulações do mercado</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = playersAnalytics.especulacoes.map(rumor => `
        <div class="rumor-card">
            <div class="rumor-header">
                <span class="rumor-player">${rumor.player}</span>
                <span class="rumor-status ${rumor.status.includes('ALTA') ? 'high' : rumor.status.includes('MÉDIA') ? 'medium' : 'low'}">${rumor.status}</span>
            </div>
            <div class="rumor-transfer">
                ${rumor.from} → ${rumor.to}
            </div>
            <div class="rumor-probability">
                <div class="prob-bar">
                    <div class="prob-fill" style="width: ${rumor.probability}%; background: ${rumor.probability >= 70 ? '#4caf50' : rumor.probability >= 40 ? '#ff9800' : '#f44336'}"></div>
                </div>
                <span>🎯 ${rumor.probability}% de chance</span>
            </div>
            <div class="rumor-value">💰 Valor: ${rumor.value}</div>
            <div class="rumor-reason">📢 ${rumor.reason}</div>
        </div>
    `).join('');
}

// Adicionar à carteira
function addToPortfolio(player) {
    if (!isUserLoggedIn()) {
        alert('⚠️ Faça login para adicionar jogadores à sua carteira!');
        document.getElementById('loginModal').classList.add('active');
        return;
    }
    
    let portfolio = getUserPortfolio();
    const existing = portfolio.find(p => p.id === player.id);
    
    if (existing) {
        alert(`${player.name} já está na sua carteira!`);
        return;
    }
    
    portfolio.push({
        id: player.id,
        name: player.name,
        club: player.club,
        age: player.age,
        position: player.position,
        currentValue: player.currentValue,
        projectedValue: player.projectedValue,
        transferProbability: player.transferProbability,
        addedAt: new Date().toISOString()
    });
    
    saveUserPortfolio(portfolio);
    renderPortfolio();
    alert(`✅ ${player.name} adicionado à sua carteira de investimentos!`);
}

// Renderizar carteira do usuário
function renderPortfolio() {
    const container = document.getElementById('portfolioContainer');
    if (!container) return;
    
    if (!isUserLoggedIn()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: #2a2a3a; border-radius: 20px;">
                <p style="color: #ffd966; font-size: 18px; margin-bottom: 15px;">🔒 Faça login para ver sua carteira</p>
                <p style="color: #aaa;">Crie uma conta ou faça login para começar a investir nos jogadores!</p>
                <button class="btn-main" onclick="document.getElementById('loginModal').classList.add('active')" style="margin-top: 15px;">Fazer Login</button>
            </div>
        `;
        return;
    }
    
    let portfolio = getUserPortfolio();
    
    if (portfolio.length === 0) {
        container.innerHTML = '<div class="empty-portfolio">💼 Sua carteira está vazia. Adicione jogadores para investir!</div>';
        return;
    }
    
    let totalCurrent = 0;
    let totalProjected = 0;
    
    container.innerHTML = portfolio.map(player => {
        totalCurrent += player.currentValue;
        totalProjected += player.projectedValue;
        return `
            <div class="portfolio-item">
                <div class="portfolio-name">${player.name}</div>
                <div class="portfolio-club">${player.club}</div>
                <div class="portfolio-value">
                    €${(player.currentValue / 1000000).toFixed(0)}M → €${(player.projectedValue / 1000000).toFixed(0)}M
                </div>
                <button class="btn-remove-portfolio" data-id="${player.id}">❌ Remover</button>
            </div>
        `;
    }).join('');
    
    const totalReturn = totalProjected - totalCurrent;
    const totalPercent = totalCurrent > 0 ? (totalReturn / totalCurrent) * 100 : 0;
    
    const totalizer = document.createElement('div');
    totalizer.className = 'portfolio-total';
    totalizer.innerHTML = `
        <div class="total-label">💼 VALOR TOTAL DA SUA CARTEIRA</div>
        <div class="total-values">
            <span>💰 Investido: €${(totalCurrent / 1000000).toFixed(1)}M</span>
            <span>📈 Projetado: €${(totalProjected / 1000000).toFixed(1)}M</span>
            <span class="${totalReturn >= 0 ? 'positive' : 'negative'}">${totalReturn >= 0 ? '+' : ''}${(totalReturn / 1000000).toFixed(1)}M (${totalPercent.toFixed(1)}%)</span>
        </div>
        <div class="total-message" style="margin-top: 10px; font-size: 12px; color: #ffd966;">
            ${totalPercent >= 20 ? '🔥 Excelente carteira! Potencial de lucro alto!' : totalPercent >= 10 ? '📈 Boa carteira! Continue investindo!' : '💡 Considere diversificar seus investimentos para mais retorno!'}
        </div>
    `;
    container.appendChild(totalizer);
    
    document.querySelectorAll('.btn-remove-portfolio').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            let portfolio = getUserPortfolio();
            portfolio = portfolio.filter(p => p.id !== id);
            saveUserPortfolio(portfolio);
            renderPortfolio();
            renderInvestmentCards();
        });
    });
}

// Inicializar o Analista de Mercado
function initMarketAnalyst() {
    renderInvestmentCards();
    renderProspects();
    renderRumors();
    renderPortfolio();
}

// Exportar para uso global
window.initMarketAnalyst = initMarketAnalyst;
window.isUserLoggedIn = isUserLoggedIn;
window.renderPortfolio = renderPortfolio;