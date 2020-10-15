/*Todo projeto React precisa importar React */
import React from 'react';
/*Integração do React com a árvore de elementos do HTML */
import ReactDOM from 'react-dom';
/*Componente */
import App from './App';

/*Método recebe um HTML (tsx) e colocar dentro de um elemento HTML */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

