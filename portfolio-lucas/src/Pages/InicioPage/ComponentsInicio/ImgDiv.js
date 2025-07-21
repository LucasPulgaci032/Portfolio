import lucasImg from '../../../Images/lucas.jpg.jpg';
import {ImgDiv, StyleImg} from '../../../Styles/StylesForImgDiv'

function ImgRenderDiv() {
  return (
    <ImgDiv>
      <StyleImg src={lucasImg} alt="Foto de Lucas" />
    </ImgDiv>
  );
}

export default ImgRenderDiv;
