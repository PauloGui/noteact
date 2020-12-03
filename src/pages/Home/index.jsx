import React from 'react'
import SideBar from '../../components/SideBar'
import {Container, SideMenu, Content} from './style'

function Home() {
  return(
    <Container>
      <SideMenu>
        <SideBar />
      </SideMenu>
      <Content></Content>
    </Container>
  )
}

export default Home