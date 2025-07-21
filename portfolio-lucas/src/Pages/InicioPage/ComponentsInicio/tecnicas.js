import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LuFigma } from "react-icons/lu";
import { FaPython } from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IoMdGitBranch } from "react-icons/io";
import { SiExpress, SiStyledcomponents} from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {Container, Section, Title, CarrouselWrapper, CarrouselTrack, Item, StaticList, MudaEstadoButton} from'../../../Styles/StylesForTecnicas.js'
import { RiTailwindCssFill } from "react-icons/ri";

const habilidades = [
  {name: "HTML", logo: <FaHtml5 />, id:1},
  {name: "CSS", logo: <FaCss3Alt />, id:2},
  { name: "JavaScript", logo: <IoLogoJavascript />, id: 3 },
  { name: "Python", logo: <FaPython />, id: 4 },
  { name: "SQL", logo: <AiOutlineConsoleSql />, id: 5 },
   
];

const ferramentas = [
  { name: "React JS", logo: <FaReact />, id: 1 },
  { name: "Node JS", logo: <FaNodeJs />, id: 2 },
  { name: "Git", logo: <IoMdGitBranch />, id: 3 },
  { name: "Figma", logo: <LuFigma />, id: 4},
  {name: "Express", logo:<SiExpress/>,id: 5},
  {name: "Tailwindcss",logo:<RiTailwindCssFill/>, id: 6},
  {name: "Styled-components", logo: <SiStyledcomponents/> , id: 7}
  
];


function Hability() {
  const containerRef = useRef(null);
  const [mostrarEstatica, setMostrarEstatica] = useState(false);

  const toggleAnimation = () => {
    setMostrarEstatica((prev) => !prev);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
    containerRef.current,
    { x: 700, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true,
      },
    }
  );

  }, []);

  return (
    <Container ref={containerRef}>
      <Section>
        <Title>Tecnologias</Title>
        {mostrarEstatica ? (
          <StaticList>
            {habilidades.map((item) => (
              <Item key={item.id}>
                {item.logo} {item.name}
              </Item>
            ))}
          </StaticList>
        ) : (
          <CarrouselWrapper>
            <CarrouselTrack>
              {[...habilidades, ...habilidades].map((item, i) => (
                <Item key={`${item.id}-${i}`}>
                  {item.logo} {item.name}
                </Item>
              ))}
            </CarrouselTrack>
          </CarrouselWrapper>
        )}
      </Section>

      <Section>
        <Title> Ferramentas</Title>
        {mostrarEstatica ? (
          <StaticList>
            {ferramentas.map((item) => (
              <Item key={item.id}>
                {item.logo} {item.name}
              </Item>
            ))}
          </StaticList>
        ) : (
          <CarrouselWrapper>
            <CarrouselTrack>
              {[...ferramentas, ...ferramentas].map((item, i) => (
                <Item key={`${item.id}-${i}`}>
                  {item.logo} {item.name}
                </Item>
              ))}
            </CarrouselTrack>
          </CarrouselWrapper>
        )}
      </Section>

      <MudaEstadoButton onClick={toggleAnimation}>
        {mostrarEstatica ? "Ativar animação" : "Parar animação"}
      </MudaEstadoButton>
    </Container>
  );
}

export default Hability;
