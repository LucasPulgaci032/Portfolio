
import Sobre from './sobre'
import Hability from './tecnicas'
import Contato from '../InicioPage/ComponentsInicio/ContactDiv'
import styled from 'styled-components'


const HomeContainer = styled.div`
    display:flex;
    width: auto;
    heigth: auto;
    margin-left:auto;
    margin-right:auto

    
`

const HomeDiv = styled.div`
 
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  height: 100vh; 
  gap: 10px;
  
`
const TecnicasContactDiv = styled.div`
   display:flex;
   gap: 16px;
`


function SobrePage(){
    return(
      <HomeContainer>
       
       <HomeDiv>
        
        <Sobre/>
        <TecnicasContactDiv>
        <Hability/>
        <Contato/>
        </TecnicasContactDiv>
        </HomeDiv>
        </HomeContainer>
    )
}
export default SobrePage;

