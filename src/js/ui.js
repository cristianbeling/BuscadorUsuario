// Módulo de gerenciamento da interface e DOM

export class UIManager {
    constructor() {
        this.inputSearch = document.getElementById('input-search');
        this.btnSearch = document.getElementById('btn-search');
        this.profileResults = document.querySelector('.profile-results');
        
        if (!this.inputSearch || !this.btnSearch || !this.profileResults) {
            throw new Error('Elementos do DOM não encontrados. Verifique os IDs.');
        }
    }

    getSearchInput() {
        return this.inputSearch.value.trim();
    }

    clearInput() {
        this.inputSearch.value = '';
    }

    renderContent(html) {
        this.profileResults.innerHTML = html;
    }

    setLoading(isLoading) {
        this.btnSearch.disabled = isLoading;
        this.inputSearch.disabled = isLoading;
    }

    setButtonLoading(state) {
        if (state) {
            this.btnSearch.textContent = 'Buscando...';
            this.btnSearch.disabled = true;
        } else {
            this.btnSearch.textContent = 'Buscar';
            this.btnSearch.disabled = false;
        }
    }

    onSearch(callback) {
        this.btnSearch.addEventListener('click', () => {
            callback(this.getSearchInput());
        });

        // Permitir busca com Enter
        this.inputSearch.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                callback(this.getSearchInput());
            }
        });
    }

    showValidationError(message) {
        alert(message);
    }
}
