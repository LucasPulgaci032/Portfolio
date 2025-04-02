import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle} from 'styled-components';




const GlobalStyle = createGlobalStyle`
      
    body{
 
   background: black;
   margin: 0;
   padding: 0;
   font-family: "Poppins", sans-serif;






   }
  
  
  

   h1{
     padding: 10px;
     text-align: ${props => props.alinhaTexto || 'center'};
     color:${props => props.cor || 'purple'};
   }

   p{
      color:${props => props.corP ||'purple'}
   }

   li { 
          justify-content: space-between;
          color:${props => props.colorLi || 'purple'}
            
       }
   
   img {
    display: flex;
    heigth: ${props => props.altura || "100px"};
    width: ${props => props.largura || "150px"};
    border-radius: 10px;
   }

    
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

