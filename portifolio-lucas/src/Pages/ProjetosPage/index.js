import React, { useState } from "react";
import MidAlura2 from "../../Images/AluraBooksMid2.png";
import AluraBooks from "../../Images/AluraBooks.png";
import BlueLionImg1 from "../../Images/BlueLion1.png"
import BlueLionImg2 from "../../Images/BlueLion2.png"
import { StyleText, LinkStyle } from "../../StylesForComponents";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { BibliotecaVirtual, CloneInstagram2, AcademiaBlueLion } from "./descriptionProject";

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 70px;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #064e3b, #10b981);
  position: relative;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background: #064e3b;
  border-radius: 8px;
  color: white;
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const Image = styled.img`
  width: 30vw;
  height: auto;
  cursor: pointer;
`;

const ProjetosObjct = [
  {
    id: 1,
    name: "Biblioteca Virtual da Alura",
    description: BibliotecaVirtual,
    imageOne: AluraBooks,
    imageTwo: MidAlura2,
    link: "https://github.com/LucasPulgaci032/Alura-Books",
  },
  {
    id: 2,
    name: "Clone do Instagram",
    description: CloneInstagram2,
    imageOne:'',
    imageTwo: ''
  },
  {
    id: 3,
    name: "Aplicativo de academia com HTML, CSS e JavaScript puro",
    imageOne: BlueLionImg1,
    imageTwo: BlueLionImg2 ,
    description: AcademiaBlueLion,
    link:"https://github.com/LucasPulgaci032/LucasPulgaci032.github.io"
  },
  {
    id: 4,
    name: "Aplicativo de academia com HTML, CSS e JavaScript puro",
    description: "...",
  },
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
            <h1>{item.name}</h1>
            {openProject === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </ProjectHeader>
          {openProject === item.id && (
            <StyleText alinhaParagrafo="left">
              <p>{item.description}</p>
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
                <p>
                  <strong>Repositório:</strong>
                  <LinkStyle
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </LinkStyle>
                </p>
              )}
            </StyleText>
          )}
        </ProjectCard>
      ))}
    </Projects>
  );
}

export default ProjectPage;
