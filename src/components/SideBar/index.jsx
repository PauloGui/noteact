import React from 'react'
import {
  Container,
  ContainerTop,
  User,
  ImgUser,
  NameUser,
  Buttons,
  Button,
  AllNotes,
  Span,
  Input,
  LinkNote,
  Logo
} from './style'
import ImageUser from '../../assets/user.png'
import ImageLogo from '../../assets/logo.png'

function SideBar({ showProfile, setShowProfile }) {
  return (
    <Container>
      <ContainerTop>
        <User>
          <ImgUser src={ImageUser} />
          <NameUser>João da Silva</NameUser>
        </User>
        <Buttons>
          <Button onClick={() => setShowProfile(!showProfile)}>Meus dados</Button>
          <Button>Sair</Button>
        </Buttons>
        <hr />
      </ContainerTop>
      <Button addNote>Adicionar nota</Button>

      <AllNotes>
        <Span>Todas as Notas</Span>
        <hr />

        <Input placeholder="Pesquisar" />
        <LinkNote href="/">Detalhes da nota</LinkNote>
        <LinkNote href="/">Detalhes da nota</LinkNote>
        <LinkNote href="/">Detalhes da nota</LinkNote>
        <LinkNote href="/">Detalhes da nota</LinkNote>
        <Logo src={ImageLogo} />
      </AllNotes>
    </Container>
  )
}

export default SideBar