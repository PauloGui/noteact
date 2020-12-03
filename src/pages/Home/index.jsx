import React from 'react'
import SideBar from '../../components/SideBar'
import Banner from '../../components/Banner'
import {Container, SideMenu, Content} from './style'
import Form from '../Form'

function Home() {
  return(
    <Container>
      <SideMenu>
        <SideBar />
      </SideMenu>
      <Content>
        {/* <Banner /> */}
        <Form />
      </Content>
    </Container>
  )
}

export default Home