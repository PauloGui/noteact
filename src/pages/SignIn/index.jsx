import React from 'react'
import { Container, Box, Logo, Span, Input, LinkA, Button} from './style'
import ImgLogo from '../../assets/logo.png'

function SignIn() {
    return(
        <Container>
            <Box>
                <Logo src={ImgLogo} />
                <Span>Lembre-se de tudo que importa.</Span>
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
                <Button>Entrar</Button>
                <LinkA>Criar Conta</LinkA>
            </Box>
        </Container>
    )
}

export default SignIn