import React from 'react'
import { Container, Box, Logo, Span, Input, LinkA, Button } from './style'
import ImgLogo from '../../assets/logo.png'

function SignUp({ history }) {
  return (
    <Container>
      <Box>
        <Logo src={ImgLogo} />
        <Span>Assuma o controle de suas anotações.</Span>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />
        <Button>Criar conta</Button>
        <LinkA onClick={() => history.push('/signin')}>Fazer login</LinkA>
      </Box>
    </Container>
  )
}

export default SignUp