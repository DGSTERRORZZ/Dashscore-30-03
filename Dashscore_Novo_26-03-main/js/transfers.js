const transfersData = [
    { id: 1, player: "Lucas Paquetá", from: "West Ham", to: "Flamengo", value: 35000000, valueStr: "€35M", position: "Meia", date: "2026-01-15", status: "confirmed", flag: "🇧🇷", image: "lucas-paqueta.png" },
    { id: 2, player: "Samuel Lino", from: "Atletico Madrid", to: "Flamengo", value: 17000000, valueStr: "€17M", position: "Atacante", date: "2026-01-10", status: "confirmed", flag: "🇧🇷", image: "samuel-lino.png" },
    { id: 3, player: "Danilo", from: "Juventus", to: "Flamengo", value: 0, valueStr: "Livre", position: "Zagueiro", date: "2026-01-05", status: "confirmed", flag: "🇧🇷", image: "danilo.png" },
    { id: 4, player: "Gonzalo Plata", from: "Al-Rayyan", to: "Flamengo", value: 8000000, valueStr: "€8M", position: "Atacante", date: "2026-01-20", status: "confirmed", flag: "🇪🇨", image: "gonzalo-plata.png" },
    { id: 5, player: "Vitor Roque", from: "Barcelona", to: "Palmeiras", value: 45000000, valueStr: "€45M", position: "Atacante", date: "2026-01-08", status: "confirmed", flag: "🇧🇷", image: "vitor-roque.png" },
    { id: 6, player: "Andreas Pereira", from: "Fulham", to: "Palmeiras", value: 18000000, valueStr: "€18M", position: "Meia", date: "2026-01-12", status: "confirmed", flag: "🇧🇷", image: "andreas-pereira.png" },
    { id: 7, player: "Carlos Miguel", from: "Nottingham Forest", to: "Palmeiras", value: 8000000, valueStr: "€8M", position: "Goleiro", date: "2026-01-18", status: "confirmed", flag: "🇧🇷", image: "carlos-miguel.png" },
    { id: 8, player: "Memphis Depay", from: "Atletico Madrid", to: "Corinthians", value: 0, valueStr: "Livre", position: "Atacante", date: "2026-01-03", status: "confirmed", flag: "🇳🇱", image: "memphis-depay.png" },
    { id: 9, player: "Matheus Pereira", from: "Cruzeiro", to: "Corinthians", value: 12000000, valueStr: "€12M", position: "Meia", date: "2026-01-22", status: "confirmed", flag: "🇧🇷", image: "matheus-pereira.png" },
    { id: 10, player: "Oscar", from: "Shanghai Port", to: "São Paulo", value: 0, valueStr: "Livre", position: "Meia", date: "2026-01-02", status: "confirmed", flag: "🇧🇷", image: "oscar.png" },
    { id: 11, player: "Carlos Vinicius", from: "Benfica", to: "São Paulo", value: 8000000, valueStr: "€8M", position: "Atacante", date: "2026-01-30", status: "confirmed", flag: "🇧🇷", image: "carlos-vinicius.png" },
    { id: 12, player: "Lautaro Díaz", from: "Cruzeiro", to: "Santos", value: 6000000, valueStr: "€6M", position: "Atacante", date: "2026-01-20", status: "confirmed", flag: "🇦🇷", image: "lautaro-diaz.png" },
    { id: 13, player: "Arthur Cabral", from: "Benfica", to: "Botafogo", value: 12000000, valueStr: "€12M", position: "Atacante", date: "2026-01-12", status: "confirmed", flag: "🇧🇷", image: "arthur-cabral.png" },
    { id: 14, player: "Alex Telles", from: "Al-Nassr", to: "Botafogo", value: 7000000, valueStr: "€7M", position: "Lateral", date: "2026-01-25", status: "confirmed", flag: "🇧🇷", image: "alex-telles.png" },
    { id: 15, player: "Dudu", from: "Palmeiras", to: "Atlético-MG", value: 8000000, valueStr: "€8M", position: "Atacante", date: "2026-01-28", status: "confirmed", flag: "🇧🇷", image: "dudu.png" },
    { id: 16, player: "Tetê", from: "Galatasaray", to: "Grêmio", value: 9000000, valueStr: "€9M", position: "Atacante", date: "2026-01-18", status: "confirmed", flag: "🇧🇷", image: "tete.png" },
    { id: 17, player: "Rafael Borré", from: "Werder Bremen", to: "Internacional", value: 7000000, valueStr: "€7M", position: "Atacante", date: "2026-01-22", status: "confirmed", flag: "🇨🇴", image: "rafael-borre.png" },
    { id: 18, player: "Gabriel Barbosa", from: "Flamengo", to: "Cruzeiro", value: 15000000, valueStr: "€15M", position: "Atacante", date: "2026-01-15", status: "confirmed", flag: "🇧🇷", image: "gabriel-barbosa.png" },
    { id: 19, player: "Philippe Coutinho", from: "Aston Villa", to: "Vasco", value: 0, valueStr: "Livre", position: "Meia", date: "2026-01-10", status: "confirmed", flag: "🇧🇷", image: "philippe-coutinho.png" },
    { id: 20, player: "Willian José", from: "Betis", to: "Bahia", value: 7000000, valueStr: "€7M", position: "Atacante", date: "2026-01-15", status: "confirmed", flag: "🇧🇷", image: "willian-jose.png" },
    { id: 21, player: "Erick", from: "Ceará", to: "Vitória", value: 2000000, valueStr: "€2M", position: "Atacante", date: "2026-01-12", status: "confirmed", flag: "🇧🇷", image: "erick.png" },
    { id: 22, player: "Endrick", from: "Palmeiras", to: "Real Madrid", value: 60000000, valueStr: "€60M", position: "Atacante", date: "2026-02-01", status: "confirmed", flag: "🇧🇷", image: "endrick.png" },
    { id: 23, player: "Estevão", from: "Palmeiras", to: "Chelsea", value: 35000000, valueStr: "€35M", position: "Atacante", date: "2026-02-15", status: "confirmed", flag: "🇧🇷", image: "estevao.png" },
    { id: 24, player: "Marcos Leonardo", from: "Santos", to: "Benfica", value: 18000000, valueStr: "€18M", position: "Atacante", date: "2026-01-05", status: "confirmed", flag: "🇧🇷", image: "marcos-leonardo.png" },
    { id: 25, player: "Luiz Henrique", from: "Botafogo", to: "Zenit", value: 25000000, valueStr: "€25M", position: "Atacante", date: "2026-01-18", status: "confirmed", flag: "🇧🇷", image: "luiz-henrique.png" }
];

let currentPage = 1;
const itemsPerPage = 10;
let filteredTransfers = [...transfersData];

function getClubFileName(clubName) {
    const clubMap = {
        "Flamengo": "flamengo", "Palmeiras": "palmeiras", "Corinthians": "corinthians",
        "São Paulo": "saopaulo", "Santos": "santos", "Botafogo": "botafogo",
        "Atlético-MG": "atletico-mg", "Grêmio": "gremio", "Internacional": "inter",
        "Cruzeiro": "cruzeiro", "Vasco": "vasco", "Bahia": "bahia", "Vitória": "vitoria",
        "West Ham": "westham", "Atletico Madrid": "atletico-madrid", "Juventus": "juventus",
        "Barcelona": "barcelona", "Fulham": "fulham", "Benfica": "benfica",
        "Real Madrid": "real-madrid", "Chelsea": "chelsea", "Galatasaray": "galatasaray",
        "Zenit": "zenit", "Al-Nassr": "al-nassr"
    };
    return clubMap[clubName] || clubName.toLowerCase().replace(/ /g, '-');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

function getStatusClass(status) {
    switch(status) {
        case 'confirmed': return 'status-confirmed';
        case 'rumor': return 'status-rumor';
        case 'speculation': return 'status-speculation';
        default: return '';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'confirmed': return '✅ Confirmada';
        case 'rumor': return '📢 Boatos';
        case 'speculation': return '💭 Especulação';
        default: return status;
    }
}

function updateStats() {
    const total = filteredTransfers.length;
    const totalValue = filteredTransfers.reduce((sum, t) => sum + t.value, 0);
    const avgValue = total > 0 ? totalValue / total : 0;
    const biggestTransfer = Math.max(...filteredTransfers.map(t => t.value), 0);
    
    document.getElementById('totalTransfers').innerText = total;
    document.getElementById('totalValue').innerText = totalValue >= 1000000 ? `€${(totalValue / 1000000).toFixed(1)}M` : `€${(totalValue / 1000).toFixed(0)}k`;
    document.getElementById('avgValue').innerText = avgValue >= 1000000 ? `€${(avgValue / 1000000).toFixed(1)}M` : `€${(avgValue / 1000).toFixed(0)}k`;
    document.getElementById('biggestTransfer').innerText = biggestTransfer >= 1000000 ? `€${(biggestTransfer / 1000000).toFixed(1)}M` : `€${(biggestTransfer / 1000).toFixed(0)}k`;
}

function populateClubFilters() {
    const clubs = [...new Set(transfersData.flatMap(t => [t.from, t.to]))].sort();
    const fromSelect = document.getElementById('filterFromClub');
    const toSelect = document.getElementById('filterToClub');
    
    clubs.forEach(club => {
        fromSelect.innerHTML += `<option value="${club}">${club}</option>`;
        toSelect.innerHTML += `<option value="${club}">${club}</option>`;
    });
}

function applyFilters() {
    const fromClub = document.getElementById('filterFromClub').value;
    const toClub = document.getElementById('filterToClub').value;
    const position = document.getElementById('filterPosition').value;
    const valueRange = document.getElementById('filterValue').value;
    const status = document.getElementById('filterStatus').value;
    const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
    
    filteredTransfers = transfersData.filter(transfer => {
        if (fromClub !== 'all' && transfer.from !== fromClub) return false;
        if (toClub !== 'all' && transfer.to !== toClub) return false;
        if (position !== 'all' && transfer.position !== position) return false;
        if (status !== 'all' && transfer.status !== status) return false;
        
        if (valueRange !== 'all') {
            const value = transfer.value;
            switch(valueRange) {
                case '0-5': if (value >= 5000000) return false; break;
                case '5-10': if (value < 5000000 || value >= 10000000) return false; break;
                case '10-20': if (value < 10000000 || value >= 20000000) return false; break;
                case '20-50': if (value < 20000000 || value >= 50000000) return false; break;
                case '50+': if (value < 50000000) return false; break;
            }
        }
        
        if (searchTerm && !transfer.player.toLowerCase().includes(searchTerm)) return false;
        
        return true;
    });
    
    currentPage = 1;
    renderTransfersList();
    updateStats();
    renderPagination();
}

function renderTransfersList() {
    const container = document.getElementById('transfersList');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageTransfers = filteredTransfers.slice(start, end);
    
    if (pageTransfers.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 60px; color: #aaa;">Nenhuma transferência encontrada 😢</div>';
        return;
    }
    
    container.innerHTML = pageTransfers.map(transfer => `
        <div class="transfer-item" onclick="showTransferDetail(${transfer.id})">
            <div class="transfer-info">
                <div class="player-details">
                    <div class="player-name">${transfer.flag} ${transfer.player}</div>
                    <div class="player-position">${transfer.position}</div>
                </div>
                <div class="transfer-clubs">
                    <div class="club-from">
                        <img src="images/escudos/escudo-${getClubFileName(transfer.from)}.png" onerror="this.style.display='none'">
                        <span>${transfer.from}</span>
                    </div>
                    <div class="transfer-arrow">→</div>
                    <div class="club-to">
                        <img src="images/escudos/escudo-${getClubFileName(transfer.to)}.png" onerror="this.style.display='none'">
                        <span>${transfer.to}</span>
                    </div>
                </div>
            </div>
            <div class="transfer-value">${transfer.valueStr}</div>
            <div class="transfer-date">${formatDate(transfer.date)}</div>
            <div class="transfer-status ${getStatusClass(transfer.status)}">${getStatusText(transfer.status)}</div>
        </div>
    `).join('');
}

function showTransferDetail(id) {
    const transfer = transfersData.find(t => t.id === id);
    if (!transfer) return;
    
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 48px;">${transfer.flag}</div>
            <h2 style="color: #ffd966;">${transfer.player}</h2>
            <p style="color: #ccc;">${transfer.position}</p>
        </div>
        <div class="detail-row"><span class="detail-label">Clube de origem:</span><span class="detail-value">${transfer.from}</span></div>
        <div class="detail-row"><span class="detail-label">Clube de destino:</span><span class="detail-value">${transfer.to}</span></div>
        <div class="detail-row"><span class="detail-label">Valor da transferência:</span><span class="detail-value" style="color: #4caf50;">${transfer.valueStr}</span></div>
        <div class="detail-row"><span class="detail-label">Data:</span><span class="detail-value">${formatDate(transfer.date)}</span></div>
        <div class="detail-row"><span class="detail-label">Status:</span><span class="detail-value">${getStatusText(transfer.status)}</span></div>
    `;
    
    document.getElementById('transferDetailModal').classList.add('active');
}

function renderPagination() {
    const totalPages = Math.ceil(filteredTransfers.length / itemsPerPage);
    const paginationDiv = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        paginationDiv.innerHTML = '';
        return;
    }
    
    let html = '';
    html += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>«</button>`;
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<span style="color: #aaa;">...</span>`;
        }
    }
    
    html += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>»</button>`;
    paginationDiv.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredTransfers.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderTransfersList();
    renderPagination();
}

function setupTransferEvents() {
    document.getElementById('filterFromClub').addEventListener('change', applyFilters);
    document.getElementById('filterToClub').addEventListener('change', applyFilters);
    document.getElementById('filterPosition').addEventListener('change', applyFilters);
    document.getElementById('filterValue').addEventListener('change', applyFilters);
    document.getElementById('filterStatus').addEventListener('change', applyFilters);
    document.getElementById('playerSearch').addEventListener('input', applyFilters);
    document.getElementById('transferSearch').addEventListener('input', (e) => {
        document.getElementById('playerSearch').value = e.target.value;
        applyFilters();
    });
    
    document.getElementById('closeDetailModal').addEventListener('click', () => {
        document.getElementById('transferDetailModal').classList.remove('active');
    });
    
    document.getElementById('transferDetailModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('transferDetailModal')) {
            document.getElementById('transferDetailModal').classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateClubFilters();
    applyFilters();
    setupTransferEvents();
});