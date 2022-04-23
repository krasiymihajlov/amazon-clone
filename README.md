# amazon-clone
Project for a fully functional clone of amazon implemented with React.js
We use dependances like firebase for our base and stripe for our payments plus some cool stuff

Hosting URL: https://fir-d9d80.web.app

For Run:
if use git bash:  $ git clone  https://github.com/krasiymihajlov/amazon-clone.git
- delete node_modules folder (if have any in main directory)
- delete package-lock.json file (if have any in main directory)
- 

Packages:
- npm install - run in terminal on main directory(applies to all commands below) 
- npm install react-router-dom - to Route our pages 
- npm i react-currency-format - Currency formatting library
- npm install @mui/material @emotion/react @emotion/styled  - for our icons: - https://mui.com/
- npm install @mui/icons-material
- npm install -g firebase-tools - (for windows users only)
- npm i firebase; - "https://firebase.google.com/docs/web/setup" - if some of command has errors can try "--force" them to install(don't do that if don't know what happens after that)
- npm install moment - 

Payments:
- npm i @stripe/stripe-js - this allows us to pull stripe in our wrap
- npm i @stripe/react-stripe-js  - https://stripe.com, 
- npm i axios - първо ще направим файла .js(може да трябва да се изтрие)

Cloud Functions(functionality - full back-end )
- firebase init
Answers:
-> Functions: Configure a Cloud Functions directory and its files
-> JavaScript
-> Do you want ESLint to catch probable bugs and enforce style? - y
-> Do you want to install dependencies with npm now? -> y 

- cd functions - run dependacies for this new project with new functionality
- npm i express
- npm i cors
- npm i stripe

- firebase emulators:start - за тестване след настройка на index.js
- firebase deploy --only functions - за deploy


Firebasе: - https://firebase.google.com -> registratiton and new project(this is our base)
1. Firebase configuration: Project Settings -> SDK setup and configuration -> Config -> Coppy in firebase.js file
2. For Authentication click in site project: Authentication -> Email/Password -> Enable -> Save 
3. authentication settings(If needed)- "https://firebase.google.com/docs/auth/web/start"

Deployment:
- firebase login
- firebase init 
- npm run build
- firebase deploy

Follow the steps and questions for "firebase init" :
- Hosting: Configure files for firebase Hosting ... 
- Use an existing project 
- Choose Project Name
- What do you want to use as your public directory? -> build    <- This is important!
- Confugure as a single-page app(rewrite all urls to /index.html)? -> y	 <- This is important!

cool snippets:
- ES7 React/Redux snippets
- Prettier - Code formatter (Additionally set in Settings -> Format On Safe)


