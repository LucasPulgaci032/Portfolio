import styled, { keyframes } from 'styled-components';

const EntranceWords = keyframes`
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
`;

const Inicialization = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  width: 100%;
  max-width: 600px;
  margin-top: 15vh;
  font-weight: bold;
  text-shadow: 0 0 0.1px #9b30ff, 0 0 1px #8a2be2, 0 0 15px #7b68ee;
  animation: ${EntranceWords} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  padding: 0 2rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;


const myDescription = [
  'Olá, sou Lucas Pulgaci Augusto de Campos, desenvolvedor focado em criar soluções eficientes e funcionais com tecnologia. Bora dar uma olhada?'
];

function Hello() {
  return (
    <Inicialization>
      {myDescription.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Inicialization>
  );
}

export default Hello;