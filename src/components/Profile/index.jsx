import React from 'react'
import {
  Container,
  Span,
  ImgProfile,
  Input,
  Button
} from './style'
import ImageUser from '../../assets/user.png'
import { MdAddAPhoto } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Profile() {
  return (
    <Container>
      <Span>Meus dados</Span>
      <AiOutlineCloseCircle
        style={{ marginRight: '80' }} />
      <ImgProfile src={ImageUser} />
      <MdAddAPhoto
        style={{
          marginLeft: '80',
          marginBottom: '20'
        }} />
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Span info>Preencha os campos abaixo para alterar sua senha.</Span>
      <Input placeholder="Senha atual" />
      <Input placeholder="Nova senha" />
      <Input placeholder="Confirme a nova senha" />
      <Button>Salvar</Button>
    </Container>
  )
}

export default Profile