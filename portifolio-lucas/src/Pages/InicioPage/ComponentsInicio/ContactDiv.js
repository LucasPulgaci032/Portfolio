import styled, {keyframes} from 'styled-components'
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
/*import { useLayoutEffect } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';*/

const SpinDiv = keyframes`

   0% {
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 1400px;
    opacity: 1;
  }
`





const ContatoContainer = styled.div`
  width: 50%;
  height: 50%;
  display:flex;
  flex-direction:row;
  border-radius: 100px;
  padding: 20px;
  color: white;
  text-align: center;
  border: solid purple 2px;
  animation: ${SpinDiv} 2s ease-in-out forwards;
  margin-top: 100px;
  /*transform:translateX(700px);
  opacity: 0;*/
  
`;

const Contatos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;

 
`;

const ItemContato = styled.li`
  display: flex;
  align-items: center; 
  gap: 10px; 
  font-size: 0.8 rem;
  list-style: none;
  width: 100%;
  justify-content: flex-start;
  margin: 5px;
`;

const Icone = styled.span`
  font-size: 1.5rem; 
  flex-shrink: 0; 
`;

const redes = [
  { logo: <FaPhoneAlt />, name: 'Telefone:', valor: '11945905119' },
  { logo: <FaLinkedin />, name: 'Linkedin:', valor: 'https://www.linkedin.com/in/lucaspulgaci' },
  { logo: <FaGithub />, name: 'GitHub:', valor: 'https://github.com/LucasPulgaci032' }
];

function Contato() {

     /* useLayoutEffect(() => {
             gsap.registerPlugin(ScrollTrigger);
             gsap.to(".contatos",{
              x:0 , 
              opacity:1,
              scrollTrigger:{
                trigger: ".contactItens" ,
                markers:true ,
                start: "top 800px",
                end: "bottom  900px",
                scrub:true
                
                
              } 
             }) 
         
           return () => {
             gsap.killTweensOf(".contatos")
           }   
     }, [])
*/
  return (
    <ContatoContainer className='contatos'>
      <h1>Informações de contato</h1>
      <Contatos className='contactItens'>
        {redes.map((item, index) => (
          <ItemContato key={index}>
          <Icone>{item.logo}
            </Icone>   
            {item.name}{" "}
            {item.name === "Telefone:" ? (
              item.valor
            ) : (
              <Link to={item.valor} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
                {item.valor}
              </Link>
            )}
          </ItemContato>
        ))}
      </Contatos>
    </ContatoContainer>
  );
}

export default Contato;
