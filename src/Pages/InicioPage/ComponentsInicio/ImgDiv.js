import lucasImg from '../../../Images/Lucas_image-removebg-preview.png';
import {ImgDiv, StyleImg} from '../../../Styles/StylesForImgDiv'

function ImgRenderDiv() {
  return (
    <ImgDiv>
      <StyleImg src={lucasImg} alt="Foto de Lucas" />
    </ImgDiv>
  );
}

export default ImgRenderDiv;
