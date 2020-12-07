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
import {useAuth} from '../../hooks/AuthProvider'

function SideBar({ showProfile, setShowProfile, history }) {

  const { setAuthUser } = useAuth()
  return (
    <Container>
      <ContainerTop>
        <User>
          <ImgUser src={ImageUser} />
          <NameUser>João da Silva</NameUser>
        </User>
        <Buttons>
          <Button onClick={() => setShowProfile(!showProfile)}>Meus dados</Button>
          <Button onClick={() => {
              localStorage.removeItem('@noteact_token')
              setAuthUser({ authenticated: false })
            }}>Sair</Button>
        </Buttons>
        <hr />
      </ContainerTop>
      <Button addNote onClick={() => history.push('/add')}>Adicionar nota</Button>

      <AllNotes>
        <Span>Todas as Notas</Span>
        <hr />

        <Input placeholder="Pesquisar" />
        <LinkNote onClick={() => history.push('/edit/1')}>Detalhes da nota</LinkNote>
        <LinkNote onClick={() => history.push('/edit/1')}>Detalhes da nota</LinkNote>
        <LinkNote onClick={() => history.push('/edit/1')}>Detalhes da nota</LinkNote>
        <LinkNote onClick={() => history.push('/edit/1')}>Detalhes da nota</LinkNote>
      </AllNotes>
      <Logo src={ImageLogo} />
    </Container>
  )
}

export default SideBar