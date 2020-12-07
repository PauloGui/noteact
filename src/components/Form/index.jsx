import React, { useState } from "react"
import MDEditor from '@uiw/react-md-editor'
import { Container, ContainerTitle, Input, Button, EditMd } from './styles'

export default function Form({ edit }) {

  const [value, setValue] = useState("")

  return (
    <Container>
      <ContainerTitle>
        <Input placeholder="Título da nota" />
        <Button delete>Excluir</Button>
        <Button>Salvar</Button>
      </ContainerTitle>
      <EditMd>
        <MDEditor
          value={value}
          onChange={setValue}
          height={window.innerHeight / 1.4}
          maxHeight={window.innerHeight / 1.4}
        />
      </EditMd>
    </Container>
  )
}