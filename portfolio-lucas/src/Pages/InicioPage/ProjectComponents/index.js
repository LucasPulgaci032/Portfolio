import React, { useState } from "react";
import MidAlura2 from "../../../Images/AluraBooksMid2.png";
import AluraBooks from "../../../Images/AluraBooks.png";
import BlueLionImg1 from "../../../Images/BlueLion1.png";
import BlueLionImg2 from "../../../Images/BlueLion2.png";
import { StyleText, LinkStyle } from "../../../Styles";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

import {
  BibliotecaVirtual,
  CloneInstagram2,
  AcademiaBlueLion,
} from "./descriptionProject";

const Projects = styled.div`
   display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center; 
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  @media(max-width: 768px){
    flex-direction: column;
   
  }
`;



const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  width: 80%;
  height: 100%; 
  border: 2px solid purple;
  border-radius: 8px;
  padding: 16px;
  box-shadow:  10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
  position: relative;

  &.open {
    width: 40%;
  }
`;


const ClosedProjectImg = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 10px auto;
  padding: 10px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background: #4c1d95;
  border-radius: 8px;
  color: white;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction:row;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
`;

const TitleProject = styled.h1`
  font-size: 36px;
  color: white;
`;

const VetorSize = styled.section`
  transform: scale(2.0);
`;

const Image = styled.img`
  width: 30vw;
  height: auto;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s;
  

  &:hover {
    transform: scale(1.05);
  }
   
`;

const TecnologiesUsedInProject = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: purple;
  margin-top: 12px;
  list-style: none;
  padding: 20px;
  color: white;
  transition: opacity 0.3s ease;
  justify-content: space-evenly;
  border-radius: 10px;
  & > li {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 500;
      @media (max-width: 768px){
        font-size: 12px;
      }
  
  }

  &.closed {
    opacity: 0.6;
  }

  &.open {
    opacity: 1;
  }
`;

const LetterTextSize = styled.div`
  font-size: small ;
  color: white;
`

const ProjetosObjct = [
  {
    id: 1,
    name: "Biblioteca Virtual da Alura",
    description: BibliotecaVirtual,
    imageOne: AluraBooks,
    imageTwo: MidAlura2,
    link: "https://github.com/LucasPulgaci032/Alura-Books",
    tecnologias: ["React", "Styled-components", "React-Router"],
  },
  
  {
    id: 2,
    name: "Aplicativo de academia com HTML, CSS e JavaScript puro",
    imageOne: BlueLionImg1,
    imageTwo: BlueLionImg2,
    description: AcademiaBlueLion,
    link: "https://github.com/LucasPulgaci032/LucasPulgaci032.github.io",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  }
  
];

function ProjectPage() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  const handleFullScreen = (event) => {
    if (event.target.requestFullscreen) {
      event.target.requestFullscreen();
    }
  };

  return (
    <Projects>
      {ProjetosObjct.map((item) => (
        <ProjectCard key={item.id}>
          
          <ProjectHeader onClick={() => toggleProject(item.id)}>
            <TitleProject>{item.name}</TitleProject>
            <VetorSize>
              {openProject === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </VetorSize>
          </ProjectHeader>

          {item.tecnologias && item.tecnologias.length > 0 && (
            <TecnologiesUsedInProject
              className={openProject === item.id ? "open" : "closed"}
            >
              <strong>Tecnologias usadas:</strong>
              {item.tecnologias.map((tec, index) => (
                <li key={index}>{tec}</li>
              ))}
            </TecnologiesUsedInProject>

          )}

          {openProject !== item.id && item.imageOne && (
            <ClosedProjectImg src={item.imageOne} />
          )}


          
          {openProject === item.id && (
            <StyleText>
              <LetterTextSize>{item.description}</LetterTextSize>

              <ImagesWrapper>
                {item.imageOne && (
                  <Image
                    src={item.imageOne}
                    alt={item.name}
                    onClick={handleFullScreen}
                  />
                )}
                {item.imageTwo && (
                  <Image
                    src={item.imageTwo}
                    alt={item.name}
                    onClick={handleFullScreen}
                  />
                )}
              </ImagesWrapper>

              {item.link && (
                <LetterTextSize>
                  <strong>Repositório:</strong>{" "}
                  <LinkStyle
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </LinkStyle>
                </LetterTextSize>
              )}
            </StyleText>
          )}
        </ProjectCard>
      ))}
    </Projects>
  );
}

export default ProjectPage;
