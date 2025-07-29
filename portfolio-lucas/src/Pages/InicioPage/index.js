import {
    ImgRenderDiv,
    Hello,
    Contato,
    Sobre,
    Hability,
  } from './ComponentsInicio/exports';
  import ProjectPage from "./ProjectComponents/index";
  import Certifications from "./certifications/certifications";
  import { StyleSectionName } from "../../Styles/StylesForSectionNames";
  import styled from "styled-components";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { useEffect, useRef } from "react";
  
  gsap.registerPlugin(ScrollTrigger);
  
  const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
   
  `;
  
  const HelloDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
  `;
  
  const StartDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const TitleProjects = styled.h1`
    color: #BF00FF;
  `;
  
  function StartPage() {
    const sectionRefs = useRef([]);
  
    useEffect(() => {
      sectionRefs.current.forEach((el) => {
        if (!el) return;
  
        gsap.to(el, {
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });
    }, []);
  
    return (
      <StartContainer>
        <HelloDiv>
          <ImgRenderDiv />
          <Hello />
        </HelloDiv>
  
        <StartDiv>
          <Sobre />
          <StyleSectionName ref={el => sectionRefs.current[0] = el}>
            Contato
            <hr style={{ backgroundColor: 'white', width:'80vw', alignItems:'right',height: '2px', border: 'none' }} ref={el => sectionRefs.current[0] = el}/>
          </StyleSectionName>
           <Contato />
           <Hability />
        </StartDiv>
  
        <TitleProjects>
          <StyleSectionName ref={el => sectionRefs.current[1] = el}>
            PROJETOS
            <hr style={{ backgroundColor: 'white', width:'80vw', alignItems:'right',height: '2px', border: 'none' }} ref={el => sectionRefs.current[1] = el}/>
          </StyleSectionName>
        </TitleProjects>
  
        <ProjectPage />
  
        <StyleSectionName ref={el => sectionRefs.current[2] = el}>
          CERTIFICAÇÕES E FORMAÇÕES
          <hr style={{ backgroundColor: 'white', width:'80vw', alignItems:'right',height: '2px', border: 'none' }} ref={el => sectionRefs.current[2] = el}/>
        </StyleSectionName>
  
        <Certifications />
      </StartContainer>
    );
  }
  
  export default StartPage;
  