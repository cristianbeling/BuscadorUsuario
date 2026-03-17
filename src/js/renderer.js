// Módulo responsável pela renderização de templates

export function renderLoading() {
    return `
        <div class="loader">
            <span class="spinner" aria-hidden="true"></span>
            <span class="loader-text">Carregando...</span>
        </div>
    `;
}

export function renderProfile(userData, repositories = []) {
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
        
        ${renderRepositorios(repositories)}
    `;
}

export function renderRepositorios(repositories) {
    if (!repositories || repositories.length === 0) {
        return `<p class="no-repos">Nenhum repositório encontrado</p>`;
    }

    const reposHTML = repositories.map(repo => `
        <div class="repo-card">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                <h3>${repo.name}</h3>
            </a>
            <p class="repo-description">${repo.description || 'Sem descrição'}</p>
            <div class="repo-info">
                <span class="repo-language">${repo.language || 'Não especificada'}</span>
                <span class="repo-stars">⭐ ${repo.stargazers_count}</span>
                <span class="repo-forks">🍴 ${repo.forks_count}</span>
                <span class="repo-watchers">👀 ${repo.watchers_count}</span>
            
            </div>
        </div>
    `).join('');

    return `
        <div class="repositories-section">
            <h3>📦 10 Últimos Repositórios</h3>
            <div class="repositories-list">
                ${reposHTML}
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
