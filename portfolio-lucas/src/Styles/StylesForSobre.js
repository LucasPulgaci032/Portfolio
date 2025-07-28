
import styled, { keyframes } from 'styled-components';


const brilhoPulse = keyframes`
  from {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4),
                 0 0 15px rgba(138, 43, 226, 0.6);
  }
  to {
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.8),
                 0 0 25px rgba(138, 43, 226, 1);
  }
`;

const bordaNeon = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


export const SobreDiv = styled.div`
 
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.4);
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 10px;
  max-width: 960px;
  margin: 40px auto;
  width: 90vw;

  h1 {
   font-size: 50px;
   text-shadow: 0 0 8px rgba(255, 255, 255, 0.6),
                 0 0 15px rgba(33, 15, 51, 0.8);
  }
   p {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6),
                 0 0 15px rgba(33, 15, 51, 0.8);
    animation: ${brilhoPulse} 2s infinite alternate;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    border-radius: 22px;
    z-index: -1;
    padding: 10px;
    filter: blur(10px);
    background-size: 300% 300%;
    animation: ${bordaNeon} 5s linear infinite;
  }
`;
