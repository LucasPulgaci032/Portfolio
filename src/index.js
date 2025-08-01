import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: auto;
    font-family: "Poppins", sans-serif;
    background-color: #050A1A;
    align-items: center;
    overflow-x: hidden;
  }
  @media (max-width: 768px) {
    body {
      
    }
  }

  
  

  h1 {
    padding: 10px;
    text-align: ${props => props.alinhaTexto || 'center'};
    color: ${props => props.cor || '#2E003E'};
  }

  p {
    color: ${props => props.corP || 'white'};
  }


`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
