import lucasImg from '../../../Images/LucasImagem.png';
import {ImgDiv, StyleImg} from '../../../Styles/StylesForImgDiv'

function ImgRenderDiv() {
  return (
    <ImgDiv>
      <StyleImg src={lucasImg} alt="Foto de Lucas" />
    </ImgDiv>
  );
}

export default ImgRenderDiv;
