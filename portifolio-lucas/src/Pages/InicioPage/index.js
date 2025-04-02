import ImgRenderDiv from "./ComponentsInicio/ImgDiv";
import Contato from "./ComponentsInicio/ContactDiv";
import styled from "styled-components"

const StartContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
   
`


function StartPage(){

   

    return(
        <StartContainer>
            <ImgRenderDiv/>
            <Contato/>
        </StartContainer>
        
    )
}

export default StartPage;