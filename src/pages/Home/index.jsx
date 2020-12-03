import React from 'react'
import SideBar from '../../components/SideBar'
import Banner from '../../components/Banner'
import {Container, SideMenu, Content} from './style'

function Home() {
  return(
    <Container>
      <SideMenu>
        <SideBar />
      </SideMenu>
      <Content>
        <Banner />
      </Content>
    </Container>
  )
}

export default Home