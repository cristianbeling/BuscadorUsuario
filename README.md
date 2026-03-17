# 🔍 BuscadorUsuario - GitHub Profile Viewer

Um visualizador de perfis do GitHub desenvolvido em JavaScript Vanilla para aperfeiçoar habilidades em desenvolvimento web e integração com APIs.

## 📋 Descrição

O **BuscadorUsuario** é uma aplicação web que permite buscar usuários do GitHub e visualizar informações detalhadas de seus perfis, incluindo dados pessoais e os 10 últimos repositórios atualizados.

## ✨ Funcionalidades

- 🔎 **Busca de Usuários** - Digite o nome de usuário do GitHub e obtenha informações instantâneas
- 👤 **Perfil Detalhado** - Visualize nome, biografia, avatar e contadores de seguidores
- 📦 **Últimos Repositórios** - Lista os 10 repositórios mais recentemente atualizados
- ⭐ **Informações do Repositório** - Veja linguagem, descrição e número de estrelas
- 🎨 **Interface Responsiva** - Design adaptado para desktop e dispositivos móveis
- ⚡ **Carregamento em Tempo Real** - Feedback visual durante requisições à API

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações responsivas
- **JavaScript (ES6+)** - Lógica da aplicação com módulos
- **GitHub API v3** - Integração com dados do GitHub
- **DevIcon** - Ícones de tecnologias

## 📁 Estrutura do Projeto

```
BuscadorUsuario/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── animations.css    # Animações da aplicação
    │   ├── reset.css         # Reset de estilos padrão
    │   ├── responsive.css    # Media queries
    │   └── styles.css        # Estilos principais
    └── js/
        ├── api.js            # Integração com API do GitHub
        ├── index.js          # Lógica principal
        ├── renderer.js       # Renderização de templates
        └── ui.js             # Gerenciamento da interface
```

## 🚀 Como Usar

1. **Abra** o `index.html` em um navegador web
2. **Digite** o nome de um usuário do GitHub no campo de busca
3. **Clique** em "Buscar" ou pressione Enter
4. **Visualize** os detalhes do perfil e repositórios

### Exemplo
```
Digite: "torvalds" para ver o perfil de Linus Torvalds
```

## 📡 Endpoints da API Utilizados

- `GET /users/{username}` - Dados do usuário
- `GET /users/{username}/repos` - Repositórios do usuário (últimos 10, ordenados por atualização)

## 🎯 Funcionalidades Principais do Código

### `api.js`
```javascript
// Busca dados do usuário
buscarUsuarioGitHub(userName)

// Busca os 10 últimos repositórios
buscarRepositorios(userName)
```

### `renderer.js`
```javascript
// Renderiza o perfil com informações do usuário
renderProfile(userData, repositories)

// Renderiza os repositórios em cards
renderRepositorios(repositories)
```

### `ui.js`
Gerencia a interface do usuário, eventos e validações.

### `index.js`
Coordena a aplicação, integrando API, UI e renderização.

## 💡 Aprendizados

Este projeto foi desenvolvido para praticar:
- ✅ Programação com JavaScript Vanilla
- ✅ Trabalho com APIs REST
- ✅ Promises e async/await
- ✅ Manipulação do DOM
- ✅ CSS responsivo e animações
- ✅ Arquitetura modular com ES6 modules
- ✅ Tratamento de erros
- ✅ Feedback de carregamento

## 🔄 Possíveis Melhorias Futuras

- [ ] Adicionar cache local dos usuários buscados
- [ ] Paginação de repositórios
- [ ] Filtrar repositórios por linguagem
- [ ] Mostrar gráfico de linguagens mais utilizadas
- [ ] Adicionar tema dark/light
- [ ] Salvar usuários favoritos
- [ ] Mostrar contribuições do usuário

## 📝 Licença

Este projeto é de código aberto e livre para estudos e modificações.

## 👨‍💻 Autor

Desenvolvido como projeto de aprendizado em JavaScript.