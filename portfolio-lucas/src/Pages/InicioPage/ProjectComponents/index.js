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
import { APINMongoExpress, APIMongoExpress2 } from "../../../Images/exports.js";
import {
  ApiNodeMongo,
  BibliotecaVirtual,
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
  aspect-ratio: 16 / 9;
  flex-direction:column;
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
  max-width: 100%;   // Limita a imagem à largura da div
  max-height: 400px; // Altura máxima ajustável (você pode mudar esse valor)
  width: auto;
  height: auto;
  cursor: pointer;
  border-radius: 20px;
  transition: transform 0.3s;
  object-fit: contain; // Garante que a imagem seja redimensionada proporcionalmente

  &:hover {
    transform: scale(1.05);
  }`;

const TecnologiesUsedInProject = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  background-color: purple;
  margin-top: 12px;
  list-style: none;
  padding: 20px;
  gap: 16px;
  color: white;
  transition: opacity 0.3s ease;
  justify-content: space-evenly;
  border-radius: 10px;
  overflow-wrap: break-word; 
  word-break: break-word;    
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
  padding:16px;
 
`

const ProjetosObjct = [
  {
    id: 1,
    name: "Api Rest com Node, MongoDB e Express",
    description: ApiNodeMongo,
    imageOne: APINMongoExpress,
    imageTwo: APIMongoExpress2,
    link: "https://github.com/LucasPulgaci032/node-mongo-api",
    tecnologias: ['Node js', 'Express','Nodemon', 'dotenv', 'MongoDB','Mongoose','Postman']
  },
  {
    id: 2,
    name: "Biblioteca Virtual da Alura",
    description: BibliotecaVirtual,
    imageOne: AluraBooks,
    imageTwo: MidAlura2,
    link: "https://github.com/LucasPulgaci032/Alura-Books",
    tecnologias: ["React", "Styled-components", "React-Router", "Axios","Express"],
  },
  
  {
    id: 3,
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
