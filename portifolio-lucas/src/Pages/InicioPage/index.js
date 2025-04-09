import ImgRenderDiv from "./ComponentsInicio/ImgDiv";
import Hello from "./ComponentsInicio/Hello";
import Contato from "./ComponentsInicio/ContactDiv";
import styled from "styled-components"

const StartContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
   
`
const StartDiv = styled.div`
    display: flex;
    flex-direction: column;
    
`


function StartPage(){

   

    return(
        <StartContainer>
                <ImgRenderDiv/>
            <StartDiv>
                <Hello/>
                <Contato/>
            </StartDiv>
            
        </StartContainer>
        
    )
}

export default StartPage;