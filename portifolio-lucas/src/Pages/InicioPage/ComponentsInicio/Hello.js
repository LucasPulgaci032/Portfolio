import styled from 'styled-components'

const Inicialization = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   
`

const myDescription = ["Olá, meu nome é Lucas Pulgaci",
    "Sou desenvolvedor Frontend"
    ]


function Hello(){
    return(
      <Inicialization>
        {myDescription.map((item)=>(
           <h1>{item}</h1>
        )
    )}

      </Inicialization>
    )
}

export default Hello;

