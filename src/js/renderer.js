// Módulo responsável pela renderização de templates

export function renderLoading() {
    return `
        <div class="loader">
            <span class="spinner" aria-hidden="true"></span>
            <span class="loader-text">Carregando...</span>
        </div>
    `;
}

export function renderProfile(userData) {
    const { avatar_url, name, login, bio, followers, following } = userData;
    
    return `
        <div class="profile-card">
            <img src="${avatar_url}" alt="Avatar de ${name || login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${name || login}</h2>
                <p>${bio || 'Biografia indisponível'}</p>
            </div>
        </div>
        
        <div class="profile-counters">
            <div class="followers">
                <h4>🧑‍💻 Seguidores</h4>
                <span>${followers}</span>
            </div>
            <div class="following">
                <h4>🧑‍💻 Seguindo</h4>
                <span>${following}</span>
            </div>
        </div>
    `;
}

export function renderError(message = 'Erro ao buscar usuário!') {
    return `<p class="error-message">${message}</p>`;
}

export function renderEmptySearch() {
    return `<p class="empty-message">Por favor, digite um nome de usuário!</p>`;
}
