// js/estatisticas.js
// Estatísticas do Brasileirão

async function carregarEstatisticas() {
    const data = await carregarDadosBrasileirao();
    if (!data) return null;
    
    // Estatísticas por time
    const estatisticasTimes = {};
    data.teams.forEach(time => {
        estatisticasTimes[time.name] = {
            nome: time.name,
            jogadores: 0,
            logo: time.crest
        };
    });
    
    data.players.forEach(jogador => {
        if (estatisticasTimes[jogador.team]) {
            estatisticasTimes[jogador.team].jogadores++;
        }
    });
    
    return {
        totalTimes: data.total_teams,
        totalJogadores: data.total_players,
        ultimaAtualizacao: data.last_update,
        times: Object.values(estatisticasTimes).sort((a, b) => b.jogadores - a.jogadores)
    };
}

// Mostrar ranking de times por número de jogadores
async function mostrarRankingTimes() {
    const stats = await carregarEstatisticas();
    if (!stats) return;
    
    const container = document.getElementById('rankingTimes');
    if (!container) return;
    
    container.innerHTML = `
        <div class="ranking-card">
            <h3>📊 Ranking de Times por Jogadores</h3>
            <div class="ranking-list">
                ${stats.times.map((time, index) => `
                    <div class="ranking-item">
                        <span class="ranking-pos">${index + 1}º</span>
                        <span class="ranking-name">${time.nome}</span>
                        <span class="ranking-value">${time.jogadores} jogadores</span>
                    </div>
                `).join('')}
            </div>
            <p class="ranking-footer">⚽ Total: ${stats.totalJogadores} jogadores | 🏆 ${stats.totalTimes} times</p>
        </div>
    `;
}

// Adicionar CSS para o ranking
const styleRanking = document.createElement('style');
styleRanking.textContent = `
    .ranking-card {
        background: #1a1a2e;
        border-radius: 20px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    .ranking-card h3 {
        color: #ffd966;
        margin-bottom: 15px;
        font-size: 20px;
    }
    .ranking-list {
        max-height: 300px;
        overflow-y: auto;
    }
    .ranking-item {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #333;
        gap: 15px;
    }
    .ranking-pos {
        font-weight: bold;
        color: #ffd966;
        min-width: 40px;
    }
    .ranking-name {
        flex: 1;
        color: #fff;
    }
    .ranking-value {
        color: #aaa;
        font-size: 14px;
    }
    .ranking-footer {
        margin-top: 15px;
        padding-top: 10px;
        text-align: center;
        color: #ffd966;
        font-size: 14px;
        border-top: 1px solid #333;
    }
`;
document.head.appendChild(styleRanking);

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    mostrarRankingTimes();
});