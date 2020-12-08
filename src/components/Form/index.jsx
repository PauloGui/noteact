import React, { useState } from "react"
import MDEditor from '@uiw/react-md-editor'
import { Container, ContainerTitle, Input, Button, EditMd } from './styles'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'

export default function Form({ edit }) {

  const { authUser } = useAuth()

  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)

  const submitNote = () => {
    setLoading(true)
    api.post('/notes', { title, content },
      { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
        setLoading(false)
        return alert('Nota nota adicionada')
      }).catch((err) => {
        setLoading(false)
        return alert('Não foi possível salvar a nota!')
      })
  }

  return (
    <Container>
      <ContainerTitle>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título da nota" />
        <Button delete>Excluir</Button>
        <Button onClick={submitNote}> {loading ? 'Salvando' : 'Salvar'}</Button>
      </ContainerTitle>
      <EditMd>
        <MDEditor
          value={content}
          onChange={setContent}
          height={window.innerHeight / 1.4}
          maxHeight={window.innerHeight / 1.4}
        />
      </EditMd>
    </Container>
  )
}