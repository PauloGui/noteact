import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import Banner from '../../components/Banner'
import { Container, SideMenu, Content } from './style'
import Form from '../Form'
import Profile from '../../components/Profile'

function Home() {

  const [showProfile, setShowProfile] = useState(false);

  return (
    <Container>
      <SideMenu>
        <SideBar showProfile={showProfile} setShowProfile={setShowProfile} />
      </SideMenu>
      <Content>
        <Banner />
        {
          showProfile &&
          <Profile />
        }
      </Content>
    </Container>
  )
}

export default Home