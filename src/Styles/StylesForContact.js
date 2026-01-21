import {styled, keyframes} from 'styled-components'

 export const SpinDiv = keyframes`
  0% {
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 1400px;
    opacity: 1;
  }
`;

export const ContatoContainer = styled.div`
   width: 100%;
  max-width: 300px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  background-color: #1e1e2f;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 1
  h1, p, img, ul, li {
    max-width: 100%;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 40px;
    gap: 10px;
    align-items: center;
  }

  @media (max-width: 400px) {
    padding: 20px;
    max-width: 95vw;
  }



`;

export const Contatos = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemContato = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  width: 200px;
  text-align: center;
`;

export const Icone = styled.span`
  font-size: 3.5rem;
  color: #9b30ff;
    & : hover {
       transform: scale(1.1);
    }
`;

export const TextoContato = styled.span`
  font-size: 2rem;
  color: white;
  word-break: break-word;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: #bb86fc;
    }
  }
`;
