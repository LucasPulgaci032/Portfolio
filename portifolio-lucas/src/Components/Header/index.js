import OpcoesHeader from '../OpcoesHeader';
import LogoName from '../LogoName';
import styled from 'styled-components'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from 'react';
// criar um efeito que deixa a header translucida ao descer o scroll e a retorna a opacidade normal quando estiver no topo da pagina  //
const HeaderContainer = styled.header`
    background: linear-gradient(to right, #8a2be2, #7a1db6, #6a1491);
    display:flex;
    width:100%;
    height:auto;
    justify-content: center;
    padding: 50px;
    position: fixed;
    opacity: 1;
    top: 0;
    z-index: 500;
   
    
`




function Header(){


    return(
      <HeaderContainer>
        <LogoName/>
        <OpcoesHeader/>
      </HeaderContainer>
    )
}

export default Header;