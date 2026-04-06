// js/team-squad.js
// Carrega elenco dinâmico para páginas de clubes

// Mapeamento dos nomes das páginas para os nomes EXATOS no JSON
const timeMapping = {
    "flamengo": "CR Flamengo",
    "palmeiras": "SE Palmeiras",
    "corinthians": "SC Corinthians Paulista",
    "saopaulo": "São Paulo FC",
    "santos": "Santos FC",
    "botafogo": "Botafogo FR",
    "atletico-mg": "CA Mineiro",
    "gremio": "Grêmio FBPA",
    "internacional": "SC Internacional",
    "cruzeiro": "Cruzeiro EC",
    "vasco": "CR Vasco da Gama",
    "bahia": "EC Bahia",
    "vitoria": "EC Vitória",
    "fluminense": "Fluminense FC"
};

// Nomes alternativos para busca (caso o mapeamento falhe)
const alternativeNames = {
    "Flamengo": "CR Flamengo",
    "Palmeiras": "SE Palmeiras",
    "Corinthians": "SC Corinthians Paulista",
    "São Paulo": "São Paulo FC",
    "Santos": "Santos FC",
    "Internacional": "SC Internacional",
    "Grêmio": "Grêmio FBPA",
    "Atlético-MG": "CA Mineiro",
    "Atletico-MG": "CA Mineiro",
    "Cruzeiro": "Cruzeiro EC",
    "Vasco": "CR Vasco da Gama",
    "Bahia": "EC Bahia",
    "Vitória": "EC Vitória",
    "Botafogo": "Botafogo FR",
    "Fluminense": "Fluminense FC"
};

let dadosCarregados = null;

async function carregarElencoPagina() {
    // Identificar qual time pela URL
    const path = window.location.pathname;
    let timeKey = "";
    
    if (path.includes("flamengo")) timeKey = "flamengo";
    else if (path.includes("palmeiras")) timeKey = "palmeiras";
    else if (path.includes("corinthians")) timeKey = "corinthians";
    else if (path.includes("saopaulo")) timeKey = "saopaulo";
    else if (path.includes("santos")) timeKey = "santos";
    else if (path.includes("botafogo")) timeKey = "botafogo";
    else if (path.includes("atletico-mg")) timeKey = "atletico-mg";
    else if (path.includes("gremio")) timeKey = "gremio";
    else if (path.includes("internacional")) timeKey = "internacional";
    else if (path.includes("cruzeiro")) timeKey = "cruzeiro";
    else if (path.includes("vasco")) timeKey = "vasco";
    else if (path.includes("bahia")) timeKey = "bahia";
    else if (path.includes("vitoria")) timeKey = "vitoria";
    else if (path.includes("fluminense")) timeKey = "fluminense";
    else if (path.includes("brasil")) timeKey = "brasil";
    
    console.log("Time identificado pela URL:", timeKey);
    
    if (timeKey && timeKey !== "brasil") {
        // Carregar os dados
        try {
            const response = await fetch('../public/data/brasileirao.json');
            const data = await response.json();
            dadosCarregados = data;
            
            console.log("Dados carregados:", data.total_players, "jogadores");
            console.log("Times disponíveis:", data.teams.map(t => t.name));
            
            // Obter o nome correto do time
            let nomeTimeCorreto = timeMapping[timeKey];
            
            // Se não encontrou, tentar buscar pelos nomes alternativos
            if (!nomeTimeCorreto) {
                // Extrair nome da página (ex: flamengo.html -> Flamengo)
                const pageName = timeKey.charAt(0).toUpperCase() + timeKey.slice(1);
                nomeTimeCorreto = alternativeNames[pageName] || pageName;
            }
            
            console.log("Buscando jogadores do time:", nomeTimeCorreto);
            
            // Filtrar jogadores pelo time
            const jogadores = data.players.filter(j => {
                // Comparação flexível
                const teamName = j.team;
                return teamName === nomeTimeCorreto || 
                       teamName.includes(nomeTimeCorreto) ||
                       nomeTimeCorreto.includes(teamName);
            });
            
            console.log(`Encontrados ${jogadores.length} jogadores para ${nomeTimeCorreto}`);
            
            const playersGrid = document.getElementById('playersGrid');
            if (playersGrid) {
                if (jogadores.length > 0) {
                    playersGrid.innerHTML = jogadores.map((jogador, index) => {
                        const posicaoAbreviada = jogador.position === 'Goalkeeper' ? 'Goleiro' :
                                                  jogador.position === 'Defence' ? 'Defesa' :
                                                  jogador.position === 'Midfield' ? 'Meio-Campo' :
                                                  jogador.position === 'Offence' ? 'Atacante' : jogador.position;
                        return `
                            <div class="player-card-club">
                                <div class="player-avatar">${index + 1}</div>
                                <div class="player-info-club">
                                    <h4>${jogador.name}</h4>
                                    <p>${posicaoAbreviada}</p>
                                </div>
                            </div>
                        `;
                    }).join('');
                } else {
                    playersGrid.innerHTML = `<div style="text-align:center; padding:40px;">⚠️ Nenhum jogador encontrado para este time. O nome exato no JSON é: "${nomeTimeCorreto}"</div>`;
                    console.log("Jogadores disponíveis no JSON:", data.players.slice(0, 5).map(p => ({ name: p.name, team: p.team })));
                }
            }
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
            const playersGrid = document.getElementById('playersGrid');
            if (playersGrid) {
                playersGrid.innerHTML = '<div style="text-align:center; padding:40px;">❌ Erro ao carregar dados. Verifique se o arquivo JSON existe.</div>';
            }
        }
    } else if (timeKey === "brasil") {
        // Para a seleção brasileira, manter dados fixos ou buscar de forma especial
        const playersGrid = document.getElementById('playersGrid');
        if (playersGrid) {
            playersGrid.innerHTML = '<div style="text-align:center; padding:40px;">🇧🇷 Dados da Seleção Brasileira carregados manualmente.</div>';
        }
    }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', carregarElencoPagina);