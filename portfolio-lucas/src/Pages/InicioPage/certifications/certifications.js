import {styled} from 'styled-components'
import {
  certificacaoAwari,
  cursoFS1,
  cursoFS2,
  cursoFS3,
  aluraSQL,
  aluraPython,
  qrCodePythonIniciante,
  qrCodeFormacaoFullStack,
  qrCodeAwari
}from '../../../Images/exports'

const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 70px;
  width: 60%;
  height: auto;
  align-items: center;
    
    `
const CertificationsCard = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 4px;
  background: linear-gradient(135deg, #9b30ff, #4b0082);
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
   
`

const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%; 
`

const ImageCertification = styled.img`
  width: 50%;
  min-width: 150px; 
  height: 50%;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 768px){
    width: 80%;
    min-width: 120px;
    height: auto;
  }
`

const SingleImageCertification = styled.img`
  width: 80%;
  min-width: 150px;
  height: auto;
  padding: 14px;

  @media (max-width: 768px){
    width: 100%;
    min-width: 120px;
    height: auto;
  }
`

const QrCode = styled.img `
   width: 70%;
  height: auto;
  padding: 14px;
       @media (max-width: 768px){
      width:100%;
      height:auto;
    }
`
const certifications = [
    {nome:"Programação Front end Awari",imagem: [certificacaoAwari] ,link:qrCodeAwari},
    {nome: "Formação Full Stack React e Node js", imagem: [cursoFS1, cursoFS2, cursoFS3], link: qrCodeFormacaoFullStack
    },
    {nome:"Modelagem de banco de dados com SQL da alura",imagem:[aluraSQL]},
    {nome:"Iniciando em Python", imagem: [aluraPython], link: qrCodePythonIniciante
    }
]

function Certifications(){
    return (
        <CertificationsContainer>
  {certifications.map(certificado => (
    <CertificationsCard key={certificado.nome}>
      <h1>{certificado.nome}</h1>
      <ContainerImg>
        {certificado.imagem.length > 1 ?certificado.imagem.map((item, index) => (
          <ImageCertification key={index} src={item} />
        )): <SingleImageCertification src={certificado.imagem[0]}/>
        }
        <QrCode src ={certificado.link}/> 
      </ContainerImg>
     
    </CertificationsCard>
  ))}
</CertificationsContainer>
    )
}

export default Certifications

