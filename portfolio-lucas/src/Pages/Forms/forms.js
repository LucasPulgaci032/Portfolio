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
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content:center;
  
`;

const FormsArea = styled.form`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: 

`;

const TitleSend = styled.h1`
 
  font-size: 30px;
  color: #4B0082;
`

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 2px solid #a259ff;
  border-radius: 10px;
  background-color: #f3e8ff;
  color: #4a0072;
  font-size: 16px;
  z-index: 1;
  outline: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #7e22ce;
    box-shadow: 0 0 8px rgba(126, 34, 206, 0.4);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #c084fc;
  background-color: #faf5ff;
  color: #4b0082;
  font-size: 16px;
  z-index: 1;
  resize: vertical;
  outline: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #9333ea;
    box-shadow: 0 0 8px rgba(147, 51, 234, 0.4);
  }
`;

const Button = styled.input`
  padding: 10px 20px;
  background-color: #8b5cf6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7c3aed;
  }
`;

const ButtonBack = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  background-color: #c4b5fd ;
  color: #5b21b6;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
  transition: 0.3s ease;

  &:hover {
    background-color: #d8b4fe;
    color: #3b0764;
    border-color: #a78bfa;
  }
`;


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
