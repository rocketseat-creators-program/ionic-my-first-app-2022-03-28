<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Construindo sua primeira aplicação híbrida com Ionic Framework.

Nessa aula iremos conhecer o Ionic Framework, vamos abordar alguns dos seus componentes e aprender a utilizar a CLI para criar a aplicação e também alguns componentes. Além disso, aprenderemos a consumir um serviço externo (Fake API que retorna uma lista de Pokemons) e listar todas essas informações em uma tela. 

- [Template utilizado na aula](https://github.com/rocketseat-experts-club/ionic-my-first-app-2022-03-28/tree/template)

## Tecnologias

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Node](https://nodejs.org/en/)

## Links úteis

- [Ionic Doc](https://ionicframework.com/docs)
- [Installing Ionic](https://ionicframework.com/docs/intro/cli)
- [Ionic CLI](https://ionicframework.com/docs/cli)
    - [start](https://ionicframework.com/docs/cli/commands/start)
- [Ionic Icons](https://ionic.io/ionicons)
- [Color Generator](https://ionicframework.com/docs/theming/color-generator)

## Ambiente, recursos e requisitos necessários

- Ionic 6.19.0;
- Node 16.14.2 (LTS);
- Seu editor de código de preferência (No meu caso, Visual Studio Code);
- Familiaridade com HTML, CSS e TypeScript;
- Vontade de aprender :D

## Comandos utilizados
- ionic start ionic-my-first-app sidemenu --type=angular
- ionic g class models/pokemon
- ionic g class models/pokemon-stat
- ionic g service services/pokemon
- ionic g page pages/about
- ionic g page pages/pokemon-list
- ionic g page pages/pokemon-detail

## Testando a aplicação
- Clone o repositório para a sua máquina
- Abra um terminal na pasta principal da aplicação
- Instale todas as dependências da aplicação utilizando o seguinte comando:
    ```
    npm install
    ```
- Antes de inicializar nossa aplicação, é necessário subir nossa fake API (Back-end server):
    ```
    npm run server
    ```
- Para rodar a aplicação, execute o comando:
    ```
    npm start
    ```
- Abra o seu browser na seguinte URL: http://localhost:4200

**OBS: Caso prefira, é possível rodar ao mesmo tempo tanto a fake API quanto a aplicação, para isso, execute o comando:**
```
npm run dev
```