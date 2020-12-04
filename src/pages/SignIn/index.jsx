import React from 'react'
import { Container, Box, Logo, Span, Input, LinkA, Button } from './style'
import ImgLogo from '../../assets/logo.png'

function SignIn({ history }) {
  return (
    <Container>
      <Box>
        <LinkA linklogo onClick={() => history.push('/')}>
          <Logo src={ImgLogo} />
        </LinkA>
        <Span>Lembre-se de tudo que importa.</Span>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
        <LinkA onClick={() => history.push('/signup')}>Criar Conta</LinkA>
      </Box>
    </Container>
  )
}

export default SignIn