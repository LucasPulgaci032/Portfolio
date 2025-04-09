import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IoMdGitBranch } from "react-icons/io";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const HabilityDiv = styled.div`
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 50px;
  transform: translateX(700px);
  opacity: 0;
`;

const habilidades = [
  { name: "React js", logo: <FaReact /> },
  { name: "Node js", logo: <FaNodeJs /> },
  { name: "JavaScript", logo: <IoLogoJavascript /> },
  { name: "SQL", logo: <AiOutlineConsoleSql /> },
  { name: "Git", logo: <IoMdGitBranch /> },
];

const conhecimentoFerramentas = [
  "eslint",
  "Jest",
  "React-Router-Dom",
  "Cypress",
  "StoryBook",
  "Styled-components",
  "Arquitetura Rest",
  "Redux",
  "Acessibilidade SEO com React",
];

function Hability() {
  const habilityRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      habilityRef.current,
      { x: 700, opacity: 0 }, 
      {
        x: 0, 
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: habilityRef.current,
          start: "top 80%", 
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => {
      gsap.killTweensOf(habilityRef.current);
    };
  }, []);

  return (
    <HabilityDiv ref={habilityRef}>
      <h1>Conhecimentos Gerais</h1>
      {habilidades.map((item, index) => (
        <ul key={index}>
          <li>
            {item.name} {item.logo}
          </li>
        </ul>
      ))}

      <h1>Conhecimento em React</h1>
      {conhecimentoFerramentas.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </HabilityDiv>
  );
}

export default Hability;
