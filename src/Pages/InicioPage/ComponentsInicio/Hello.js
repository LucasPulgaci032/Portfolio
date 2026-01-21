import {Inicialization, Title} from '../../../Styles/StylesForHello'

const myDescription = [
  'Olá, sou Lucas Pulgaci Augusto de Campos, desenvolvedor focado em criar soluções eficientes e funcionais com tecnologia. Bora dar uma olhada?'
];

function Hello() {
  return (
    <Inicialization>
      
      {myDescription.map((item, index) => (
        <Title key={index}>{item}</Title>
      ))}
    </Inicialization>
  );
}

export default Hello;