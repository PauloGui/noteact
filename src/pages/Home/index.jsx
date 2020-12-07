import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Banner from '../../components/Banner'
import { Container, SideMenu, Content } from './style'
import Form from '../../components/Form'
import Profile from '../../components/Profile'

function Home({ history, match }) {

  const [showProfile, setShowProfile] = useState(false);

  return (
    <Container>
      <SideMenu>
        <SideBar history={history} showProfile={showProfile} setShowProfile={setShowProfile} />
      </SideMenu>
      <Content>
        <Route path='/' exact component={Banner} />
        <Route path='/add' exact component={(props) => <Form {...props} edit={false} />} />
        <Route path='/edit/:id' exact component={(props) => <Form {...props} edit />} />
        {
          showProfile &&
          <Profile match={match} />
        }
      </Content>
    </Container>
  )
}

export default Home