import styled from 'styled-components'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'



const FormsContainer = styled.div`
  width: 70vw;
  height: 70vh;
  margin-top: 150px ;
  border-radius: 10px;
  background: linear-gradient(135deg, #9b30ff, #4b0082);
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
  
`;

const FormsArea = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

`;

const TitleSend = styled.h1`
  width: 50vw;
  font-size: 50px;
  color: #4B0082;
`

const Input = styled.input`
  width: 80%;
  border-radius: 10px;
  z-index: 1;
`
const TextArea = styled.textarea`
   border-radius: 5px;
   z-index: 1;
`
const Button = styled.input`
 
  z-index: 1;
`
const ButtonBack = styled.button`
  position: absolute;
  z-index: 1;
  
`

function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos!")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send(
      "service_g8tf3em",
      "template_qm58x0k",
      templateParams,
      "WgDeWVm5GeMJeg5Fs"
    ).then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }).catch((err) => {
      console.log("ERRO", err)
    })
  }

  return (
    <div>
    <FormsContainer>
       <TitleSend>
         Entre em contato:
       </TitleSend>
      <FormsArea onSubmit={sendEmail}>
        <Input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <Input 
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextArea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button type="submit" value="Enviar" />
      </FormsArea>
    
    </FormsContainer>
      <ButtonBack><Link to='/'>Voltar</Link></ButtonBack>
    </div>
  )
}

export default Forms
