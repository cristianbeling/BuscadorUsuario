const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BaseURL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        alert('Por favor, digite um nome de usuário!');
        return;
    }

    // Mostrar estado de carregamento e desabilitar controles
    profileResults.innerHTML = `<div class="loader"><span class="spinner" aria-hidden="true"></span><span class="loader-text">Carregando...</span></div>`;
    btnSearch.disabled = true;
    inputSearch.disabled = true;

    try {
        const response = await fetch(`${BaseURL}/users/${userName}`);

        if (!response.ok) {
            profileResults.innerHTML = `<p>Usuário não encontrado!</p>`;
            return;
        }

        const data = await response.json();

        profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${data.avatar_url}" alt="Avatar de ${data.name || data.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${data.name || data.login}</h2>
                <p>${data.bio || 'Biografia indisponível'}</p>

            </div>
        </div>
        
        <div class="profile-counters">
            <div class="followers">
                <h4>🧑‍💻 Seguidores</h4>
                <span>${data.followers}</span>
            </div>
            <div class="following">
                <h4>🧑‍💻 Seguindo</h4>
                <span>${data.following}</span>
            </div>
        </div>
        `;

    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        profileResults.innerHTML = `<p>Erro ao buscar usuário!</p>`;
    } finally {
        // Reabilitar controles após a requisição
        btnSearch.disabled = false;
        inputSearch.disabled = false;
    }
});

// Função auxiliar (mantida caso deseje usar externamente)
function buscarUsuario(usuario) {
    console.log('Buscando informações do usuário:', usuario);
}
