import {styled, keyframes} from 'styled-components'

export const slideLoop = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const Container = styled.div`

  
  transform: translateX(700px);
  opacity: 0;
  align-items: center;
  text-align: center;
  
  @media(max-width: 1760px){
       width: 80%;
       height: auto;
  }   
  
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #9b30ff;
  margin-bottom: 20px;
  text-align:center;
`;

export const CarrouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CarrouselTrack = styled.ul`
  display: flex;
  list-style: none;
  gap: 80px;
  animation: ${slideLoop} 10s linear infinite;
  width: max-content;
`;

export const Item = styled.li`
  font-size: 1.5rem;
  color: #D500F9;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 16px
`;

export const StaticList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 25px;
  padding: 25px;
  background-color: #1e1e2f;
  list-style: none;
  color: purple;
  border-radius: 10px;
  font-size: 1.8rem;
  margin-left:auto;
  mrgin-right:auto;
`;

export const MudaEstadoButton = styled.button`
  background-color: #9b30ff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
 

  &:hover {
    background-color: #7e23d6;

}
 
`
;

