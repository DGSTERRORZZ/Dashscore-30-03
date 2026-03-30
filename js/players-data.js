// js/players-data.js
// Dados enriquecidos para o Analista de Mercado

const playersAnalytics = {
    // Jogadores em alta (para investir)
    investimentos: [
        {
            id: 16,
            name: "Vitor Roque",
            club: "Palmeiras",
            age: 21,
            position: "Centroavante",
            currentValue: 45000000,
            projectedValue: 65000000,
            potentialReturn: "+44%",
            transferProbability: 85,
            interestedClubs: ["Barcelona", "Arsenal", "PSG"],
            reason: "Artilheiro do Brasileirão, jovem, cobiçado na Europa",
            stats: { goals: 18, assists: 5, games: 28, rating: 7.8 }
        },
        {
            id: 1,
            name: "Lucas Paquetá",
            club: "Flamengo",
            age: 28,
            position: "Meia Atacante",
            currentValue: 35000000,
            projectedValue: 45000000,
            potentialReturn: "+29%",
            transferProbability: 70,
            interestedClubs: ["Manchester City", "PSG", "Milan"],
            reason: "Destaque da Seleção, experiência internacional",
            stats: { goals: 8, assists: 12, games: 25, rating: 7.5 }
        },
        {
            id: 29,
            name: "Memphis Depay",
            club: "Corinthians",
            age: 32,
            position: "Ponta Esquerda",
            currentValue: 12000000,
            projectedValue: 15000000,
            potentialReturn: "+25%",
            transferProbability: 60,
            interestedClubs: ["MLS", "Arabia", "Flamengo"],
            reason: "Criação de jogadas, marketing, identificação com a torcida",
            stats: { goals: 12, assists: 8, games: 26, rating: 7.4 }
        },
        {
            id: 40,
            name: "Lucas Moura",
            club: "São Paulo",
            age: 33,
            position: "Ponta Direita",
            currentValue: 15000000,
            projectedValue: 18000000,
            potentialReturn: "+20%",
            transferProbability: 50,
            interestedClubs: ["MLS", "Japão", "Flamengo"],
            reason: "Experiência, identificação, ainda tem lenha para queimar",
            stats: { goals: 9, assists: 7, games: 24, rating: 7.2 }
        }
    ],
    
    // Promessas da base (jovens para observar)
    promessas: [
        {
            id: 41,
            name: "Endrick",
            club: "Palmeiras",
            age: 19,
            position: "Centroavante",
            currentValue: 60000000,
            projectedValue: 100000000,
            potentialReturn: "+67%",
            note: "⭐ Já vendido ao Real Madrid - vai brilhar na Europa",
            stats: { goals: 15, assists: 4, games: 22, rating: 8.0 }
        },
        {
            name: "Estevão",
            club: "Palmeiras",
            age: 18,
            position: "Ponta Direita",
            currentValue: 35000000,
            projectedValue: 60000000,
            potentialReturn: "+71%",
            note: "⭐ Vendido ao Chelsea - próxima joia brasileira",
            stats: { goals: 10, assists: 6, games: 20, rating: 7.7 }
        },
        {
            name: "Luis Guilherme",
            club: "Palmeiras",
            age: 19,
            position: "Meia",
            currentValue: 23000000,
            projectedValue: 40000000,
            potentialReturn: "+74%",
            note: "⭐ Vendido ao West Ham - promessa de meio-campo",
            stats: { goals: 5, assists: 8, games: 18, rating: 7.3 }
        },
        {
            name: "Rayan",
            club: "Vasco",
            age: 19,
            position: "Atacante",
            currentValue: 8000000,
            projectedValue: 20000000,
            potentialReturn: "+150%",
            note: "🔥 Revelação do Vasco - observado pelo Barcelona",
            stats: { goals: 7, assists: 3, games: 16, rating: 7.1 }
        }
    ],
    
    // Especulações do dia
    especulacoes: [
        {
            player: "Neymar Jr",
            from: "Al-Hilal",
            to: "Santos",
            probability: 75,
            value: "Livre",
            status: "🟢 ALTA PROBABILIDADE",
            reason: "Contrato curto, vontade do jogador, identificação com o clube"
        },
        {
            player: "Gabriel Jesus",
            from: "Arsenal",
            to: "Palmeiras",
            probability: 55,
            value: "€20M-€30M",
            status: "🟡 PROBABILIDADE MÉDIA",
            reason: "Interesse do clube, jogador quer voltar ao Brasil"
        },
        {
            player: "Casemiro",
            from: "Manchester United",
            to: "São Paulo",
            probability: 40,
            value: "€10M-€15M",
            status: "🔵 BAIXA PROBABILIDADE",
            reason: "Idade avançada, salário alto, interesse especulativo"
        },
        {
            player: "Richarlison",
            from: "Tottenham",
            to: "Flamengo",
            probability: 65,
            value: "€20M-€25M",
            status: "🟡 PROBABILIDADE MÉDIA",
            reason: "Torcedor declarado, momento ruim na Inglaterra"
        },
        {
            player: "Paulinho",
            from: "Atlético-MG",
            to: "Corinthians",
            probability: 80,
            value: "€8M-€12M",
            status: "🟢 ALTA PROBABILIDADE",
            reason: "Jogador quer voltar, identificação com o clube"
        }
    ]
};