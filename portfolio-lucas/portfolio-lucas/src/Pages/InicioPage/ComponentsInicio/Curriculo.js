import { BsFileEarmarkPerson } from 'react-icons/bs';
import styled from 'styled-components';

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: purple;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
  z-index: 1;
  &:hover {
    background-color: darkviolet;
  }

  svg {
    font-size: 20px;
  }
`;

 function Curriculo() {
  return (
    <DownloadButton
      href="/Curriculo-Lucas-Pulgaci-Augusto-de-Campos.pdf
"
      download
    >
      <BsFileEarmarkPerson />
      Baixar Currículo
    </DownloadButton>
  );
}

export default Curriculo
