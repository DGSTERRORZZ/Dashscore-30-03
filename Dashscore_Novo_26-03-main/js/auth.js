let users = JSON.parse(localStorage.getItem('users') || '[]');

function validatePassword(password, username) {
    const errors = [];
    if (password.length < 8) errors.push("Mínimo de 8 caracteres");
    if (!/[A-Z]/.test(password)) errors.push("Pelo menos 1 letra maiúscula");
    if (!/[a-z]/.test(password)) errors.push("Pelo menos 1 letra minúscula");
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) errors.push("Pelo menos 1 caractere especial (!@#$%^&*)");
    if (username && password.toLowerCase().includes(username.toLowerCase())) errors.push("A senha não pode conter seu nome de usuário");
    return { valid: errors.length === 0, errors };
}

function getPasswordStrength(password, username) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;
    if (username && !password.toLowerCase().includes(username.toLowerCase())) strength++;
    if (strength <= 2) return { level: 'weak', text: 'Fraca' };
    if (strength <= 4) return { level: 'medium', text: 'Média' };
    return { level: 'strong', text: 'Forte' };
}

function registerUser(username, email, password, confirmPassword) {
    if (!username || !email || !password || !confirmPassword) return { success: false, message: "Preencha todos os campos!" };
    if (password !== confirmPassword) return { success: false, message: "As senhas não coincidem!" };
    if (users.find(u => u.username === username)) return { success: false, message: "Este nome de usuário já está em uso!" };
    if (users.find(u => u.email === email)) return { success: false, message: "Este email já está cadastrado!" };
    const passwordValidation = validatePassword(password, username);
    if (!passwordValidation.valid) return { success: false, message: `A senha não atende aos requisitos:\n${passwordValidation.errors.join('\n')}` };
    const newUser = { id: Date.now(), username, email, password, favorites: { players: [], teams: [], lineups: [] }, savedLineups: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: "Cadastro realizado com sucesso!" };
}

function loginUser(identifier, password) {
    const user = users.find(u => u.username === identifier || u.email === identifier);
    if (!user) return { success: false, message: "Usuário ou email não encontrado!" };
    if (user.password !== password) return { success: false, message: "Senha incorreta!" };
    // USANDO sessionStorage EM VEZ DE localStorage - ao fechar a aba ou dar F5, o login some
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: "Login realizado com sucesso!", user };
}

function logoutUser() { 
    sessionStorage.removeItem('currentUser'); 
}

function getCurrentUser() {
    const userStr = sessionStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function addFavorite(type, id, data) {
    const user = getCurrentUser();
    if (!user) return false;
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex === -1) return false;
    if (type === 'player') {
        if (!users[userIndex].favorites.players.find(p => p.id === id)) users[userIndex].favorites.players.push(data);
    } else if (type === 'team') {
        if (!users[userIndex].favorites.teams.find(t => t.id === id)) users[userIndex].favorites.teams.push(data);
    } else if (type === 'lineup') {
        if (!users[userIndex].favorites.lineups.find(l => l.id === id)) users[userIndex].favorites.lineups.push(data);
    }
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
    return true;
}

function removeFavorite(type, id) {
    const user = getCurrentUser();
    if (!user) return false;
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex === -1) return false;
    if (type === 'player') users[userIndex].favorites.players = users[userIndex].favorites.players.filter(p => p.id !== id);
    else if (type === 'team') users[userIndex].favorites.teams = users[userIndex].favorites.teams.filter(t => t.id !== id);
    else if (type === 'lineup') users[userIndex].favorites.lineups = users[userIndex].favorites.lineups.filter(l => l.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
    return true;
}

function isFavorite(type, id) {
    const user = getCurrentUser();
    if (!user) return false;
    if (type === 'player') return user.favorites.players.some(p => p.id === id);
    else if (type === 'team') return user.favorites.teams.some(t => t.id === id);
    else if (type === 'lineup') return user.favorites.lineups.some(l => l.id === id);
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const showRegisterBtn = document.getElementById('showRegisterBtn');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const closeLoginBtn = document.getElementById('closeLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const regPassword = document.getElementById('regPassword');
    const regUsername = document.getElementById('regUsername');
    const registerError = document.getElementById('registerError');

    if (loginBtn) loginBtn.addEventListener('click', () => loginModal.classList.add('active'));
    if (showRegisterBtn) showRegisterBtn.addEventListener('click', (e) => { e.preventDefault(); loginModal.classList.remove('active'); registerModal.classList.add('active'); });
    if (showLoginBtn) showLoginBtn.addEventListener('click', (e) => { e.preventDefault(); registerModal.classList.remove('active'); loginModal.classList.add('active'); });
    if (closeLoginBtn) closeLoginBtn.addEventListener('click', () => loginModal.classList.remove('active'));
    if (closeRegisterBtn) closeRegisterBtn.addEventListener('click', () => registerModal.classList.remove('active'));

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.classList.remove('active');
        if (e.target === registerModal) registerModal.classList.remove('active');
    });

    if (regPassword) {
        regPassword.addEventListener('input', () => {
            const username = regUsername ? regUsername.value : '';
            const password = regPassword.value;
            const strength = getPasswordStrength(password, username);
            let strengthBar = document.querySelector('.password-strength');
            if (!strengthBar && password.length > 0) {
                strengthBar = document.createElement('div');
                strengthBar.className = 'password-strength';
                strengthBar.innerHTML = '<div class="password-strength-bar"></div>';
                regPassword.parentElement.appendChild(strengthBar);
            }
            if (strengthBar) {
                const bar = strengthBar.querySelector('.password-strength-bar');
                bar.className = `password-strength-bar ${strength.level}`;
            }
            const hint = document.getElementById('passwordHint');
            if (hint) {
                if (strength.level === 'weak') hint.style.color = '#ff9b9b';
                else if (strength.level === 'medium') hint.style.color = '#ffb84b';
                else hint.style.color = '#4caf50';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const identifier = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const result = loginUser(identifier, password);
            if (result.success) { loginModal.classList.remove('active'); location.reload(); }
            else alert(result.message);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const result = registerUser(username, email, password, confirmPassword);
            if (result.success) {
                alert(result.message);
                registerModal.classList.remove('active');
                loginModal.classList.add('active');
            } else {
                if (registerError) { registerError.textContent = result.message; registerError.style.display = 'block'; }
                else alert(result.message);
            }
        });
    }
});