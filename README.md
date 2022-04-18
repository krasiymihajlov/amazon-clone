# amazon-clone
Project for a fully functional clone of amazon implemented with React.js

For Run:
if use git bash:  $ git clone  https://github.com/krasiymihajlov/amazon-clone.git
- delete node_modules folder (if have any in main directory)
- delete package-lock.json file (if have any in main directory)
- run in terminal on main directory: -  npm install

Used tools packages:

Firebasе: - https://firebase.google.com -> registratiton and new project(this is our base)
Follow the steps:
1. npm install -g firebase-tools
2. Firebase configuration: Project Settings -> SDK setup and configuration -> Config -> Coppy in firebase.js file
3. For Authentication: Authentication -> Email/Password -> Enable -> Save -> BAM! That work
4. npm i firebase

For icons: - https://mui.com/
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material

Snippets:
- ES7 React/Redux snippets
- Prettier - Code formatter (Additionally set in Settings -> Format On Safe)

To Route our pages: 
- npm install react-router-dom

Currency formatting library:
- npm i react-currency-format
