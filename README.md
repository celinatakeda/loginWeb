# Sistema de Login
Desenvolver um sistema de login em react.

## Criando o projeto com CRA e typescript
 npx create-react-app login-ts --template typescript

 ## Executando o projeto 
 npm start

 ## Instalando bibliotecas
 npm install react-router-dom axios 

# Mapa do Sistema de Login
## Para Validar o Acesso
```
1. Saber que tem um usuário logado.
2. Se tiver, eu preciso Validar este usu.
3. Se sim, libera o acesso.
```
## Para Logar:
```
1. Receber os Dados do Login.
2. Enviar uma requisição para o BackEnd validar estes dados no banco de dados.
3. Se estiver Correto, Salvar as referências do usuário no browser.
4. Se estiver errado, avisa que está errado.
```
## Para Deslogar:
```
1. Apago a referência que existir no browser.
1.1. Enviar uma requisição ao BackEnd avisando para destruir aquela referência.
2. Atualizo a página.
```

## Trabalhar com gerenciamento de estado 
Para isso trabalharemos com Context
 

 
