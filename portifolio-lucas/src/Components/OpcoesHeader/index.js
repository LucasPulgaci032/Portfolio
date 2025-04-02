import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Lista = styled.ul`
  display: flex;
  align-items: center;
`;

const ItensLista = styled.ul`
  display: flex;
  gap: 16px;
  font-size: 16px;
  font-family: Georgia;
  align-items: center;
  text-align: center;
  padding: 0 5px;
  list-style: none;
`;



const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  color: ${(props) => (props.$isActive ? "black" : "white")}; 

  &:hover {
    color: green;
  }
`
const itens = [
  { nome: "Início", path: "/" },
  { nome: "Quem sou?", path: "/sobre" },
  { nome: "Projetos", path: "/projetos" },
  
  
];

function OpcoesHeader() {
  const [activeLink, setActiveLink] = useState(window.location.pathname); 

  return (
    <Lista>
     
      <ItensLista>
        {itens.map((item) => (
          <li key={item.path}>
            <StyledLink
              to={item.path}
              $isActive={activeLink === item.path}
              onClick={() => setActiveLink(item.path)}
            >
              {item.nome}
            </StyledLink>
          </li>
        ))}
      </ItensLista>
    </Lista>
  );
}

export default OpcoesHeader;
