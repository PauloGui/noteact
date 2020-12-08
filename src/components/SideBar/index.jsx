import React, { useState, useEffect } from 'react'
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
import api from '../../services/api'
import ImageLogo from '../../assets/logo.png'
import { useAuth } from '../../hooks/AuthProvider'

function SideBar({ showProfile, setShowProfile, history, match }) {

  const { authUser, setAuthUser } = useAuth()

  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    api.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      setName(resp.data.user.name)
      setFile(resp.data.user.image)
    })
  }, [])

  useEffect(() => {
    api.get('/notes', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        return setNotes(resp.data.notes)
      }
      alert(resp.data.message)
    }).catch((err) => {
      return alert('Não foi possível localizar as notas')
    })
  }, [])

  const searchBox = () => {
    api.get(`/notes?search=${search}`, { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      return setNotes(resp.data.notes.title)
    }).catch((err) => {
      alert('Nota não encontrada!')
    })
  }

  return (
    <Container>
      <ContainerTop>
        <User>
          <ImgUser src={file} />
          <NameUser>{name}</NameUser>
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

      <Span>Todas as Notas</Span>
      <hr />
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            searchBox()
          }
        }}
        placeholder="Pesquisar" />

      {notes.map(note => (
        <AllNotes key={note.id}>
          <LinkNote onClick={() => history.push('/edit/1')}>{note.title}</LinkNote>
        </AllNotes>
      ))}
      <Logo src={ImageLogo} />
    </Container>
  )
}

export default SideBar