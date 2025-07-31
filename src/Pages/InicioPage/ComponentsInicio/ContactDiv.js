import { useRef, useEffect } from 'react';
import { ContatoContainer, Contatos, ItemContato, Icone, TextoContato } from '../../../Styles/StylesForContact';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";


gsap.registerPlugin(ScrollTrigger);

const redes = [
  { logo: <MdEmail/>, name: 'Formulário', valor: '/forms', isLink: true },
  { logo: <FaLinkedin />, name: 'Linkedin', valor: 'https://www.linkedin.com/in/lucaspulgaci', isLink: true },
  { logo: <FaGithub />, name: 'GitHub', valor: 'https://github.com/LucasPulgaci032', isLink: true }
];

function Contato() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(containerRef.current, { x: 700, opacity: 0 });

    gsap.to(containerRef.current, {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "top 40%",
        scrub: false,
        toggleActions: "play none none none"
       
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <ContatoContainer ref={containerRef}>
      <Contatos>
        {redes.map((item) => (
          <ItemContato key={item.name}>
           
            <TextoContato>
              {item.valor.startsWith('http') ? (
                <a href={item.valor} target="_blank" rel="noopener noreferrer">
                   <Icone>{item.logo}</Icone>
                </a>
              ) : (
                <Link to={item.valor}> <Icone>{item.logo}</Icone></Link>
              )}
            </TextoContato>
          </ItemContato>
        ))}
      </Contatos>
    </ContatoContainer>
  );
}

export default Contato;
