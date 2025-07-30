import {styled, keyframes} from 'styled-components'


const swirlInFwd = keyframes`
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
`;

const purpleGlow = keyframes`
  0% {
    box-shadow: 0 0 5px #9b30ff, 0 0 10px #9b30ff;
  }
  50% {
    box-shadow: 0 0 15px #b266ff, 0 0 25px #b266ff;
  }
  100% {
    box-shadow: 0 0 5px #9b30ff, 0 0 10px #9b30ff;
  }
`;

export const ImgDiv = styled.div`
  margin-top: 120px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${swirlInFwd} 2s ease-in-out forwards;
    @media (max-width:768px){
      max-width: 40px;
      max-height: 40px;
    }
`;

export const StyleImg = styled.img`
  width: 200px;
  height: auto;
  border-radius: 20px;
  border: 4px solid transparent;
  background: linear-gradient(45deg, #9b30ff, #4b0082);
  background-origin: border-box;
  padding: 4px;
  animation: ${purpleGlow} 2s infinite ease-in-out, ${swirlInFwd} 2s ease-in-out forwards;
      @media(max-width: 768px){
         width: 150px;
      }
`;
