import {styled} from 'styled-components'
import {
  certificacaoAwari,
  cursoFS1,
  cursoFS2,
  cursoFS3,
  aluraSQL,
  aluraPython
}from '../../../Images/exports'

const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 70px;
  width: 80%;
  height: auto;
  align-items: center;
    
    `
const CertificationsCard = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   height: auto;
   padding: 4px;
   background: linear-gradient(135deg, #9b30ff, #4b0082);
   border-radius: 20px;
`

const ContainerImg = styled.div`
    display: flex;
   flex-direction: column;
   justify-content: flex-end;
`

const ImageCertification = styled.img`
  width: 50%;
  height: auto;
  padding: 10px;
`
const SingleImageCertification = styled.img`
  width: 80%;
  height: auto;
  padding: 14px;
`
const certifications = [
    {nome:"Programação Front end Awari",imagem: [certificacaoAwari]},
    {nome: "Formação Full Stack React e Node js", imagem: [cursoFS1, cursoFS2, cursoFS3]
    },
    {nome:"Modelagem de banco de dados com SQL da alura",imagem:[aluraSQL]},{
     nome:"Iniciando em Python", imagem: [aluraPython]
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
      </ContainerImg>
    </CertificationsCard>
  ))}
</CertificationsContainer>
    )
}

export default Certifications

