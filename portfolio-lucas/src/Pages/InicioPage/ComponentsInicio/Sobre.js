

import { StyleText } from '../../../Styles';
import textoHome from '../../../Text/textoHome';
import {SobreDiv} from '../../../Styles/StylesForSobre'


function Sobre() {


  return (
    <SobreDiv>
      <StyleText 
       alinhaParagrafo="left">
        <h1>Quem sou?</h1>
        <p>{textoHome.sobre}</p>
      </StyleText>
    </SobreDiv>
  );
}

export default Sobre;
