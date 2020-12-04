import React, {useState} from 'react'
import { Container, Box, Logo, Span, Input, LinkA, Button } from './style'
import ImgLogo from '../../assets/logo.png'
import { useAuth } from '../../hooks/AuthProvider'

function SignUp({ history }) {
  const { setAuthUser } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comparePass, setComparePass] = useState('')
  const [loading, setLoading] = useState(false)

  const signUp = () => {
    setLoading(true)
    if(!name || !email || !password || !comparePass) {
      return alert('Todos os campos devem ser preenchidos')
    } if (password !== comparePass) {
      return alert('As senhas devem ser iguais.')
    }
  }
  return (
    <Container>
      <Box>
        <LinkA linklogo onClick={() => history.push('/')}>
          <Logo src={ImgLogo} />
        </LinkA>
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