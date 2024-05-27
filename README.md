# O REI DO QUEIJO LOJA

## Índice
- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Componentes](#componentes)
  - [Cadastro](#cadastro)
  - [Carrinho](#carrinho)
  - [Login](#login)
  - [Index](#index)
- [Roteamento](#roteamento)
- [Estilos](#estilos)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Dependências](#dependências)

## Visão Geral
"Minha Loja" é um aplicativo de e-commerce desenvolvido utilizando React e React Router. O projeto possui funcionalidades para cadastro de usuários, login, exibição de produtos, adição de produtos ao carrinho e finalização de compras.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Biblioteca para gerenciar navegação e rotas no aplicativo React.
- **CSS**: Utilizado para estilização dos componentes.

## Componentes

### Cadastro
- O componente de Cadastro é responsável por permitir que novos usuários se cadastrem no sistema.
- Contém um formulário com campos para nome, usuário, email, senha e confirmação de senha.
- Após o envio do formulário, uma função é acionada para realizar o cadastro e redirecionar o usuário para a página de login.

### Carrinho
- O componente Carrinho exibe os itens que o usuário adicionou ao carrinho de compras.
- Permite que os usuários removam itens do carrinho e calcula o total da compra.
- Verifica se o usuário está logado antes de permitir a finalização da compra, redirecionando para a página de login se necessário.

### Login
- O componente de Login autentica os usuários.
- Contém um formulário para entrada de nome de usuário e senha.
- Após a autenticação bem-sucedida, o usuário é redirecionado para a página do carrinho.

### Index
- O componente Index exibe os produtos disponíveis para compra.
- Os produtos são listados com informações como nome, preço e descrição, além de botões para comprar ou adicionar ao carrinho.
- Quando um produto é adicionado ao carrinho, ele é armazenado no localStorage.

## Roteamento
- O roteamento do aplicativo é gerenciado pelo React Router.
- As rotas definidas são:
  - `/`: Página inicial que exibe os produtos (componente Index).
  - `/login`: Página de login (componente Login).
  - `/cadastro`: Página de cadastro (componente Cadastro).
  - `/carrinho`: Página do carrinho de compras (componente Carrinho).

## Estilos
- Os estilos são definidos em arquivos CSS específicos para cada componente (`cadastro.css`, `carrinho.css`, `login.css`, `style.css`).
- Esses arquivos são importados nos respectivos componentes para aplicar as estilizações.

## Como Executar o Projeto
1. **Clone o repositório**: `git clone <URL-do-repositório>`
2. **Instale as dependências**: `npm install`
3. **Inicie o servidor de desenvolvimento**: `npm start`
4. **Acesse o aplicativo no navegador**: `http://localhost:3000`

## Dependências
- **React**: `^17.0.2`
- **React Router DOM**: `^6.0.0`
- **CSS**: Estilização dos componentes

Para mais detalhes sobre as dependências, consulte o arquivo `package.json` do projeto.

## Criador
- **Davyd Kennyd**