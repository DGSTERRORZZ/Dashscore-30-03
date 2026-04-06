// js/load_data.js
let dadosBrasileirao = null;

async function carregarDadosBrasileirao() {
    try {
        const response = await fetch('public/data/brasileirao.json');
        const data = await response.json();
        
        console.log('✅ Dados carregados!');
        console.log(`📅 ${data.last_update}`);
        console.log(`🏆 ${data.total_teams} times, ⚽ ${data.total_players} jogadores`);
        
        dadosBrasileirao = data;
        atualizarJogadoresDestaque();
        return data;
    } catch (error) {
        console.error('❌ Erro:', error);
        document.getElementById('playersFavGrid').innerHTML = '<div style="text-align:center;padding:40px;">❌ Erro ao carregar dados. Certifique-se que o servidor está rodando.</div>';
        return null;
    }
}

function atualizarJogadoresDestaque() {
    if (!dadosBrasileirao) return;
    
    const jogadores = dadosBrasileirao.players.slice(0, 20);
    const container = document.getElementById('playersFavGrid');
    
    if (!container) {
        console.log('Container #playersFavGrid não encontrado');
        return;
    }
    
    if (jogadores.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;">⚠️ Nenhum jogador encontrado</div>';
        return;
    }
    
    container.innerHTML = jogadores.map(jogador => {
        let nomeTime = jogador.team.replace(' FC', '').replace(' FBPA', '').replace(' EC', '').replace(' SC', '').replace(' CR', '').replace(' SE', '');
        
        return `
            <div class="player-fav-item">
                <div class="player-fav-avatar">⚽</div>
                <div class="player-fav-info">
                    <h4>${jogador.name}</h4>
                    <p>${jogador.position} • ${nomeTime}</p>
                    <p>${jogador.nationality}</p>
                </div>
                <div class="fav-star">⭐</div>
            </div>
        `;
    }).join('');
    
    console.log(`✅ ${jogadores.length} jogadores exibidos!`);
}

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando...');
    carregarDadosBrasileirao();
});