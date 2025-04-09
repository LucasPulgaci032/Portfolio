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
 
  border-radius: 10px;
  border: solid purple 2px;


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