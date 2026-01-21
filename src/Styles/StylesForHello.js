import styled, { keyframes } from 'styled-components';

export const EntranceWords = keyframes`
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

export const Inicialization = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 600px;

  margin: 15vh auto 0 auto;
  
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  box-sizing: border-box; 

  transition: all 0.3s ease-in-out;
`;

export const Title = styled.h1`
  font-weight: bold;
 text-shadow:
    2px 2px 4px rgba(128, 0, 128, 0.8),  
    0 0 6px rgba(255, 255, 255, 0.5);   
  color: white;
  animation: ${EntranceWords} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

  font-size: clamp(1.2rem, 2.5vw, 2rem);

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;
