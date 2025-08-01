import styled from 'styled-components'

export const DivContainer = styled.div`
  
    width: ${props => props.larguraDiv || '20cm'};
    display: flex;
    align-items: center; 
    text-align:center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    background: linear-gradient(to bottom right, #2196F3, #9C27B0);
    margin-top: 3cm;
    gap: 10px;
    position:absolute;
    left: 50%;
    transform: translateX(-50%);

`

export const StyleText = styled.div`
    h1{
      text-align: left;
      color:#4B0082;
    }
    p{
      text-align: left;
      font-size: 30px;
    }
    
  
`
export const LinkStyle = styled.a`
      font-size: 12px;
       color: white;
       &: hover{
         color:white;
       }
      @media (max-width: 768px){
        font-size: 5px;
      }

`