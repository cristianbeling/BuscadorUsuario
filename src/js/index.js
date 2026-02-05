import { UIManager } from './ui.js';
import { buscarUsuarioGitHub } from './api.js';
import { renderLoading, renderProfile, renderError, renderEmptySearch } from './renderer.js';

class App {
    constructor() {
        this.ui = new UIManager();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.ui.onSearch((userName) => {
            this.handleSearch(userName);
        });
    }

    async handleSearch(userName) {
        // Validação
        if (!userName) {
            this.ui.showValidationError('Por favor, digite um nome de usuário!');
            return;
        }

        // Mostrar loading
        this.ui.renderContent(renderLoading());
        this.ui.setLoading(true);

        try {
            // Buscar dados da API
            const userData = await buscarUsuarioGitHub(userName);

            // Renderizar perfil
            this.ui.renderContent(renderProfile(userData));

        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            
            // Renderizar erro apropriado
            if (error.message === 'Usuário não encontrado') {
                this.ui.renderContent(renderError('Usuário não encontrado!'));
            } else {
                this.ui.renderContent(renderError('Erro ao buscar usuário!'));
            }

        } finally {
            // Reabilitar controles
            this.ui.setLoading(false);
        }
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
