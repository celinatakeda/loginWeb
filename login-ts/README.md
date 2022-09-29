# Criando o projeto com CRA e typescript
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
Para isso trabalharemos com Context.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

