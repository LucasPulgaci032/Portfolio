import OpcoesHeader from '../OpcoesHeader';

import styled from 'styled-components'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from 'react';

const HeaderContainer = styled.header`
   display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 40px 20px;

  position: fixed;
  top: 0;
  z-index: 500;

  background: linear-gradient(135deg, #3b0764, #0f172a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
   
    
`




function Header(){
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    ScrollTrigger.create({
      start: "top -10",
      end: 99999,
      onUpdate: (self) => {
        const header = document.querySelector("header");
        if (self.direction === 1) {
          
          gsap.to(header, { opacity: 0.7, duration: 0.3 });
        } else {
          
          gsap.to(header, { opacity: 1, duration: 0.3 });
        }
      }
    });
  }, []);
  

    return(
      <HeaderContainer>
       
        <OpcoesHeader/>
      </HeaderContainer>
    )
}

export default Header;