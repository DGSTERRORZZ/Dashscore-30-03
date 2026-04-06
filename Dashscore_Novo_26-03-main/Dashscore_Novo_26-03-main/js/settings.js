// ==================== CONFIGURAÇÕES GLOBAIS ====================

// Configurações padrão
let settings = JSON.parse(localStorage.getItem('dashscore_settings') || JSON.stringify({
    theme: 'dark',
    notifications: true,
    soundEffects: false,
    autoSave: true,
    language: 'pt-BR',
    cardSize: 'medium'
}));

// Dicionário de traduções
const translations = {
    'pt-BR': {
        'settings': 'Configurações',
        'theme': 'Tema',
        'dark': 'Escuro',
        'light': 'Claro',
        'notifications': 'Notificações',
        'sound': 'Efeitos Sonoros',
        'autoSave': 'Auto-salvar',
        'language': 'Idioma',
        'cardSize': 'Tamanho dos Cards',
        'small': 'Pequeno',
        'medium': 'Médio',
        'large': 'Grande',
        'save': 'Salvar',
        'cancel': 'Cancelar',
        'myFavorites': 'Meus Jogadores Favoritos',
        'noFavorites': 'Você ainda não tem favoritos. Clique na estrela ⭐ ao lado dos jogadores para favoritar!',
        'totalValue': 'VALOR TOTAL DO TIME',
        'lineupBuilder': 'Criador de escalação Dashscore - Brasileirão 2026',
        'fillLineup': 'Preencher escalação',
        'clickPlus': 'Clique no + para adicionar jogadores',
        'searchPlayer': 'Procurar jogador por nome, time ou país',
        'teams': 'Times do Brasileirão 2026',
        'savedLineups': 'Escalações salvas',
        'noSavedLineups': 'Nenhuma escalação salva ainda.',
        'buildYourTeam': 'Monte seu 11',
        'clickPlusPosition': 'Clique no botão + em cada posição para escolher jogadores.',
        'useFilters': 'Use os filtros dentro do modal para encontrar jogadores por clube, país ou valor.',
        'updatedData': 'Dados atualizados - Temporada 2026'
    },
    'en-US': {
        'settings': 'Settings',
        'theme': 'Theme',
        'dark': 'Dark',
        'light': 'Light',
        'notifications': 'Notifications',
        'sound': 'Sound Effects',
        'autoSave': 'Auto-save',
        'language': 'Language',
        'cardSize': 'Card Size',
        'small': 'Small',
        'medium': 'Medium',
        'large': 'Large',
        'save': 'Save',
        'cancel': 'Cancel',
        'myFavorites': 'My Favorite Players',
        'noFavorites': 'You have no favorites yet. Click the star ⭐ next to players to favorite!',
        'totalValue': 'TEAM TOTAL VALUE',
        'lineupBuilder': 'Dashscore Lineup Builder - Brasileirão 2026',
        'fillLineup': 'Fill Lineup',
        'clickPlus': 'Click + to add players',
        'searchPlayer': 'Search player by name, team or country',
        'teams': 'Brasileirão 2026 Teams',
        'savedLineups': 'Saved Lineups',
        'noSavedLineups': 'No saved lineups yet.',
        'buildYourTeam': 'Build Your 11',
        'clickPlusPosition': 'Click the + button on each position to choose players.',
        'useFilters': 'Use the filters inside the modal to find players by club, country or value.',
        'updatedData': 'Updated data - 2026 Season'
    }
};

// Função para aplicar traduções
function applyTranslations() {
    const lang = settings.language;
    const t = translations[lang] || translations['pt-BR'];
    
    // Elementos comuns
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });
    
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) el.placeholder = t[key];
    });
    
    // Títulos específicos
    if (document.querySelector('.builder-title')) {
        document.querySelector('.builder-title').textContent = t.lineupBuilder;
    }
    if (document.querySelector('.total-value-label')) {
        document.querySelector('.total-value-label').textContent = t.totalValue;
    }
    if (document.querySelector('.panel h2:first-child')) {
        document.querySelector('.panel h2:first-child').textContent = t.fillLineup;
    }
    if (document.querySelector('.panel-subtitle')) {
        document.querySelector('.panel-subtitle').textContent = t.clickPlus;
    }
    if (document.querySelector('.team-search input')) {
        document.querySelector('.team-search input').placeholder = t.searchPlayer;
    }
    if (document.querySelector('.team-list-title')) {
        document.querySelector('.team-list-title').textContent = t.teams;
    }
    if (document.querySelector('.saved-panel h2')) {
        document.querySelector('.saved-panel h2').textContent = t.savedLineups;
    }
    if (document.querySelector('.info-panel h2')) {
        document.querySelector('.info-panel h2').textContent = t.buildYourTeam;
    }
}

// Função para aplicar tema
function applyTheme() {
    if (settings.theme === 'light') {
        document.body.classList.add('light-theme');
        document.body.style.background = '#f0f0f0';
        document.querySelectorAll('.card, .panel, .players-fav-card, .transfers-list, .stat-card').forEach(el => {
            el.style.background = '#ffffff';
            el.style.color = '#333';
        });
    } else {
        document.body.classList.remove('light-theme');
        document.body.style.background = '#a8a8a8';
        document.querySelectorAll('.card, .panel, .players-fav-card, .transfers-list, .stat-card').forEach(el => {
            el.style.background = '';
            el.style.color = '';
        });
    }
}

// Função para aplicar tamanho dos cards
function applyCardSize() {
    const size = settings.cardSize;
    let scale = 1;
    if (size === 'small') scale = 0.9;
    if (size === 'large') scale = 1.1;
    
    document.querySelectorAll('.player-card, .player-fav-item, .transfer-item').forEach(card => {
        card.style.transform = `scale(${scale})`;
        card.style.transition = 'transform 0.3s ease';
    });
}

// Função para salvar configurações
function saveSettings() {
    localStorage.setItem('dashscore_settings', JSON.stringify(settings));
    applyTheme();
    applyCardSize();
    applyTranslations();
    showToast(settings.language === 'pt-BR' ? 'Configurações salvas!' : 'Settings saved!');
}

// Função para mostrar notificações
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${settings.theme === 'light' ? '#fff' : '#1e1e2a'};
        border-left: 4px solid ${type === 'success' ? '#4caf50' : '#f44336'};
        padding: 12px 20px;
        border-radius: 8px;
        color: ${settings.theme === 'light' ? '#333' : '#fff'};
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    toast.innerHTML = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Abrir modal de configurações
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    
    const themeSelect = document.getElementById('themeSelect');
    const notificationsToggle = document.getElementById('notificationsToggle');
    const soundToggle = document.getElementById('soundToggle');
    const autoSaveToggle = document.getElementById('autoSaveToggle');
    const languageSelect = document.getElementById('languageSelect');
    const cardSizeSelect = document.getElementById('cardSizeSelect');
    
    if (themeSelect) themeSelect.value = settings.theme;
    if (notificationsToggle) notificationsToggle.checked = settings.notifications;
    if (soundToggle) soundToggle.checked = settings.soundEffects;
    if (autoSaveToggle) autoSaveToggle.checked = settings.autoSave;
    if (languageSelect) languageSelect.value = settings.language;
    if (cardSizeSelect) cardSizeSelect.value = settings.cardSize;
    
    modal.classList.add('active');
}

function closeSettingsModal() {
    document.getElementById('settingsModal')?.classList.remove('active');
}

function saveSettingsFromModal() {
    settings.theme = document.getElementById('themeSelect')?.value || 'dark';
    settings.notifications = document.getElementById('notificationsToggle')?.checked || false;
    settings.soundEffects = document.getElementById('soundToggle')?.checked || false;
    settings.autoSave = document.getElementById('autoSaveToggle')?.checked || false;
    settings.language = document.getElementById('languageSelect')?.value || 'pt-BR';
    settings.cardSize = document.getElementById('cardSizeSelect')?.value || 'medium';
    
    saveSettings();
    closeSettingsModal();
}

// Abrir modal de favoritos
function openFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const favoritesList = document.getElementById('favoritesList');
    const favorites = JSON.parse(localStorage.getItem('userFavorites') || '[]');
    const t = translations[settings.language] || translations['pt-BR'];
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `<div style="text-align: center; padding: 40px; color: #aaa;">${t.noFavorites}</div>`;
    } else {
        favoritesList.innerHTML = favorites.map(player => `
            <div class="favorite-item">
                <div class="favorite-info">
                    <span class="favorite-name">${player.flag || '⚽'} ${player.name}</span>
                    <span class="favorite-club">${player.club}</span>
                    <span class="favorite-position">${player.position}</span>
                </div>
                <div class="favorite-value">${player.value}</div>
                <button class="remove-favorite-btn" onclick="removeFavorite(${player.id}, '${player.name}')">❌</button>
            </div>
        `).join('');
    }
    if (modal) modal.classList.add('active');
}

function closeFavoritesModal() {
    document.getElementById('favoritesModal')?.classList.remove('active');
}

function removeFavorite(playerId, playerName) {
    let favorites = JSON.parse(localStorage.getItem('userFavorites') || '[]');
    favorites = favorites.filter(f => f.id !== playerId);
    localStorage.setItem('userFavorites', JSON.stringify(favorites));
    showToast(`⭐ ${playerName} ${settings.language === 'pt-BR' ? 'removido dos favoritos!' : 'removed from favorites!'}`);
    openFavoritesModal();
    if (typeof renderUserFavorites === 'function') renderUserFavorites();
    if (typeof renderFeaturedPlayers === 'function') renderFeaturedPlayers();
}

// Inicializar configurações em todas as páginas
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyCardSize();
    applyTranslations();
    
    // Botões de configurações e favoritos
    const settingsBtn = document.getElementById('settingsBtn');
    const favoriteStarBtn = document.getElementById('favoriteStarBtn');
    
    if (settingsBtn) {
        settingsBtn.removeEventListener('click', openSettingsModal);
        settingsBtn.addEventListener('click', openSettingsModal);
    }
    
    if (favoriteStarBtn) {
        favoriteStarBtn.removeEventListener('click', openFavoritesModal);
        favoriteStarBtn.addEventListener('click', openFavoritesModal);
    }
    
    // Fechar modais
    document.querySelectorAll('.close-settings, .close-favorites, .close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('settingsModal')?.classList.remove('active');
            document.getElementById('favoritesModal')?.classList.remove('active');
        });
    });
    
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });
});