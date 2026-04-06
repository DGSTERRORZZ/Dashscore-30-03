// js/load-stats.js
// Carregar os dados do JSON gerado pelo Python

async function loadPlayerStats() {
    try {
        const response = await fetch('public/data/brasileirao_players.json');
        const data = await response.json();
        
        if (data && data.players) {
            console.log(`✅ ${data.total_players} jogadores carregados do FBref`);
            console.log(`📅 Última atualização: ${data.last_update}`);
            return data.players;
        }
        return [];
    } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        return [];
    }
}

// Atualizar os dados dos jogadores no seu playersData
async function updatePlayersWithRealStats() {
    const fbPlayers = await loadPlayerStats();
    
    if (fbPlayers.length === 0) {
        console.warn('⚠️ Usando dados locais (fallback)');
        return false;
    }
    
    // Mapear estatísticas para seus jogadores
    fbPlayers.forEach(fbPlayer => {
        // Buscar jogador pelo nome
        const player = playersData.find(p => 
            p.name.toLowerCase() === fbPlayer.jogador.toLowerCase() ||
            p.name.toLowerCase().includes(fbPlayer.jogador.toLowerCase().split(' ')[0])
        );
        
        if (player) {
            player.gols = fbPlayer.gols || 0;
            player.assistencias = fbPlayer.assistencias || 0;
            player.jogos = fbPlayer.jogos || 0;
            player.minutos = fbPlayer.minutos || 0;
            player.posicao_real = fbPlayer.posicao || player.position;
            player.cartoesAmarelos = fbPlayer.cartoes_amarelos || 0;
            player.cartoesVermelhos = fbPlayer.cartoes_vermelhos || 0;
        }
    });
    
    console.log(`✅ Dados do FBref integrados com sucesso!`);
    return true;
}

// Função para obter o artilheiro do campeonato
async function getTopScorer() {
    const players = await loadPlayerStats();
    if (players.length === 0) return null;
    
    const sorted = [...players].sort((a, b) => b.gols - a.gols);
    return sorted[0];
}

// Função para obter jogadores por posição
async function getPlayersByPosition(position) {
    const players = await loadPlayerStats();
    return players.filter(p => p.posicao === position);
}

// Exportar para uso global
window.statsAPI = {
    loadPlayerStats,
    updatePlayersWithRealStats,
    getTopScorer,
    getPlayersByPosition
};