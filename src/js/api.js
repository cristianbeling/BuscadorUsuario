// Módulo de integração com a API do GitHub
const BaseURL = 'https://api.github.com';

export async function buscarUsuarioGitHub(userName) {
    if (!userName || typeof userName !== 'string') {
        throw new Error('Nome de usuário inválido');
    }

    const response = await fetch(`${BaseURL}/users/${userName.trim()}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return await response.json();
}
