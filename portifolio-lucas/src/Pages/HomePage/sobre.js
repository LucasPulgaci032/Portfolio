import { useLayoutEffect } from 'react';
import { StyleText } from '../../StylesForComponents'
import styled from 'styled-components'
import textoHome from '../../Text/textoHome';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

const SobreDiv = styled.div`
  width: ${props => props.larguraDiv || '20cm'};
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 18px;
  margin-top: 5cm;
  border-radius: 10px;
  background: linear-gradient(to right, #064e3b, #10b981);
  border: solid white 2px;


 `;


    
function Sobre(){

  /*    useLayoutEffect(()=>{
          gsap.registerPlugin(ScrollTrigger);
          gsap.to('.sobreDiv',{
            x: 2 , 
            opacity:1,
            scrollTrigger:{
              trigger: ".styleText" ,
              markers: true,
              start: "top 150px",
              end: "bottom 400px ",
              scrub:true
            } 
          })
          
      },[])

*/
    return(

       
        <SobreDiv className='sobreDiv'>
           
            <StyleText  
            className='styleText'
            alinhaParagrafo ='left'>
            <h1>Quem sou?</h1>
            <p>
                {textoHome.sobre}
            </p>
            </StyleText>
            
       </SobreDiv>
       
      
      
    )
}

export default Sobre