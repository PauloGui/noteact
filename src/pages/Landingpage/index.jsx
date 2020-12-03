import React from 'react'

import { Container, Header, Logo, Button } from './style'
import ImgLogo from '../../assets/logo.png'
import Banner from '../../components/Banner'

function Landingpage() {
    return(
        <Container>
            <Header>
                <Logo src={ImgLogo} />
                <Button>Entrar</Button>
            </Header>
            <Banner />
        </Container>
    )
}

export default Landingpage