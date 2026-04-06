// js/load_data.js
// Carrega os dados da API Football-Data.org

let dadosBrasileirao = null;

async function carregarDadosBrasileirao() {
    try {
        const response = await fetch('public/data/brasileirao.json');
        const data = await response.json();
        
        console.log('✅ Dados carregados!');
        console.log(`📅 Última atualização: ${data.last_update}`);
        console.log(`🏆 ${data.total_teams} times, ⚽ ${data.total_players} jogadores`);
        
        dadosBrasileirao = data;
        return data;
    } catch (error) {
        console.error('❌ Erro ao carregar dados:', error);
        return null;
    }
}

// Função para obter jogadores por time
function getJogadoresPorTime(nomeTime) {
    if (!dadosBrasileirao) return [];
    return dadosBrasileirao.players.filter(j => j.team === nomeTime);
}

// Função para buscar jogador por nome
function buscarJogadorPorNome(nome) {
    if (!dadosBrasileirao) return null;
    return dadosBrasileirao.players.find(j => 
        j.name.toLowerCase().includes(nome.toLowerCase())
    );
}

// Atualizar os jogadores em destaque no index.html
function atualizarJogadoresDestaque() {
    if (!dadosBrasileirao) return;
    
    // Pegar os 10 primeiros jogadores como destaque
    const jogadoresDestaque = dadosBrasileirao.players.slice(0, 10);
    
    const container = document.getElementById('playersFavGrid');
    if (!container) return;
    
    container.innerHTML = jogadoresDestaque.map(jogador => {
        const clubShield = getClubShield(jogador.team);
        return `
            <div class="player-fav-item">
                <div class="player-fav-avatar">
                    ${clubShield ? `<img src="${clubShield}">` : '⚽'}
                </div>
                <div class="player-fav-info">
                    <h4>${jogador.name}</h4>
                    <p>${jogador.position} • ${jogador.team}</p>
                    <p>${jogador.nationality}</p>
                </div>
                <div class="fav-star" data-id="${jogador.id}" data-name="${jogador.name}" data-club="${jogador.team}" data-nationality="${jogador.nationality}" data-position="${jogador.position}">⭐</div>
            </div>
        `;
    }).join('');
    
    // Reatribuir eventos das estrelas
    attachStarEvents();
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', async () => {
    await carregarDadosBrasileirao();
    atualizarJogadoresDestaque();
});

// Exportar para uso global
window.dadosAPI = {
    carregarDadosBrasileirao,
    getJogadoresPorTime,
    buscarJogadorPorNome,
    dadosBrasileirao
};