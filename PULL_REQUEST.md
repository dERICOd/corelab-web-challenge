# Documentação do Projeto

Este é um projeto de notas chamado CoreNotes, que permite ao usuário criar, visualizar, atualizar e excluir notas. O projeto é desenvolvido em React e utiliza diversas bibliotecas e serviços para funcionar corretamente, dentre elas: fetch e react-icons. Este documento fornecerá uma visão geral do projeto e detalhes sobre sua estrutura e funcionamento.

## Inicialização do Projeto

Para iniciar o projeto em sua máquina local, siga as etapas abaixo:

1. Clone o repositório do projeto em seu ambiente de desenvolvimento:

   ```
   git clone git@github.com:dERICOd/corelab-web-challenge.git
   ```

2. Navegue até a pasta raiz do projeto:

   ```
   cd CORELAB-WEB-CHALLENGE
   ```

3. Instale as dependências do projeto usando npm:

   ```
   npm install ou npm i
   ```

4. Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

   ```
   npm run dev
   ```

A aplicação estará disponível em http://localhost:3000 no seu navegador web.

## Estrutura de Pastas

O projeto está estruturado da seguinte forma:

Aqui estão as descrições das pastas e arquivos principais do projeto:

- `/src`: Contém todo o código-fonte do projeto.
- `/components`: Contém os componentes React utilizados no projeto.
- `/context`: Contém o contexto de estados globais do aplicativo.
- `/services`: Contém os serviços para interação com a API.
- `/styles`: Contém arquivos de estilo global do projeto.
- `/types`: Define tipos e interfaces utilizados no projeto.

## Componentes Principais

Aqui estão algumas informações sobre os principais componentes do projeto:

### Card

Este componente exibe uma nota individual, permitindo que o usuário visualize, edite, exclua e defina cores para a nota.

### CardList

O componente CardList exibe uma lista de notas. Ele permite ao usuário filtrar notas por favoritos e pesquisar por título e conteúdo.

### Header

O componente Header exibe o cabeçalho e a barra de pesquisa e o título do aplicativo. Os usuários podem pesquisar notas pelo título e conteúdo.

### Modal

O componente Modal permite ao usuário selecionar uma cor para a nota. Ele é acionado ao clicar no ícone de balde de tinta na nota.

### NewCardForm

O componente NewCardForm permite ao usuário criar uma nova nota, fornecendo um título e conteúdo para a nota.

### UpdateCardForm

O componente UpdateCardForm permite ao usuário atualizar uma nota existente, incluindo a edição do título e conteúdo da nota.

## Serviços

O diretório `/services` contém os serviços que interagem com a API do projeto. Os serviços incluem:

- `getAllTasks`: Obtém todas as notas da API.
- `createTask`: Cria uma nova nota na API.
- `deleteTask`: Exclui uma nota existente na API.
- `favoriteTask`: Altera o status de favorito de uma nota na API.
- `setTaskColor`: Define a cor de uma nota na API.
- `updateTask`: Atualiza uma nota existente na API.

## Contexto Global

O contexto global do aplicativo é gerenciado no arquivo `/context/store.tsx`. Ele fornece um contexto que contém o estado das notas e a string de pesquisa para filtrar as notas.

## Estilos

Os estilos globais do projeto estão definidos no arquivo `/styles/globals.css`. Eles incluem configurações de fonte e estilos padrão.

## Inicialização do Aplicativo

O aplicativo é iniciado no arquivo `/main.tsx`. Ele envolve os componentes principais do aplicativo no contexto global do projeto.

## Executando o Projeto

Após seguir as etapas de inicialização do projeto, você poderá executá-lo localmente. Certifique-se de que todas as dependências estão instaladas e que o servidor de desenvolvimento está em execução.
