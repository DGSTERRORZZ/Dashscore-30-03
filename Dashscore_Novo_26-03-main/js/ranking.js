// js/ranking.js
// Ranking de usuários por valor de carteira

function getRanking() {
    const allPortfolios = JSON.parse(localStorage.getItem('userPortfolios') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const ranking = [];
    
    users.forEach(user => {
        const portfolio = allPortfolios[user.id] || [];
        let totalValue = 0;
        portfolio.forEach(player => {
            totalValue += player.projectedValue || player.currentValue;
        });
        
        ranking.push({
            userId: user.id,
            username: user.username,
            portfolioValue: totalValue,
            playersCount: portfolio.length
        });
    });
    
    ranking.sort((a, b) => b.portfolioValue - a.portfolioValue);
    return ranking;
}

function renderRanking() {
    const container = document.getElementById('rankingContainer');
    if (!container) return;
    
    const ranking = getRanking();
    const currentUser = sessionStorage.getItem('currentUser');
    let currentUserId = null;
    
    if (currentUser) {
        currentUserId = JSON.parse(currentUser).id;
    }
    
    if (ranking.length === 0) {
        container.innerHTML = '<div class="empty-ranking">🏆 Nenhum usuário no ranking ainda. Faça login e monte sua carteira!</div>';
        return;
    }
    
    container.innerHTML = `
        <div class="ranking-header">
            <span class="rank">#</span>
            <span class="user">Usuário</span>
            <span class="value">💰 Carteira</span>
            <span class="players">⭐ Jogadores</span>
        </div>
        ${ranking.map((user, index) => `
            <div class="ranking-item ${user.userId === currentUserId ? 'current-user' : ''}">
                <span class="rank">${index + 1}</span>
                <span class="user">${user.username} ${user.userId === currentUserId ? '(você)' : ''}</span>
                <span class="value">€${(user.portfolioValue / 1000000).toFixed(1)}M</span>
                <span class="players">${user.playersCount}</span>
            </div>
        `).join('')}
    `;
}

window.renderRanking = renderRanking;