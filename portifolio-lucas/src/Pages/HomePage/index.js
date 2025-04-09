
import Sobre from './sobre'
import Hability from './tecnicas'
import styled from 'styled-components'


const HomeContainer = styled.div`
    display:flex;
    flex-direction: row;
    width: auto;
    heigth: auto;
    

    
`

const HomeDiv = styled.div`
 
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  height: 100vh; 
  gap: 10px;
  margin-left:auto;
  margin-right:auto

`



function SobrePage(){
    return(
      <HomeContainer>
       
       <HomeDiv>
        
        <Sobre/>
        <Hability/>

        </HomeDiv>
        </HomeContainer>
    )
}
export default SobrePage;

