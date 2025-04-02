import lucasImg from '../../../Images/lucas.jpg.jpg'
import styled, { keyframes } from 'styled-components'

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


const ImgDiv = styled.div`
   margin-top: 100px;
   animation: ${swirlInFwd} 2s ease-in-out forwards;
`;

const StyleImg = styled.img`
   width:400px;
   height: 400px;
   border-radius: 100%;
   border: solid purple 5px;
   margin-left: auto;
   margin-right: auto;
   
`;

function ImgRenderDiv() {
    return (
        <ImgDiv>
            <StyleImg src={lucasImg} />
        </ImgDiv>
    );
}

export default ImgRenderDiv;
