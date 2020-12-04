import React from 'react'
import { withRouter } from 'react-router-dom';

import { Container, ImgTitle, ImgSub, Img, Button } from './style'
import ImageTitle from '../../assets/title.png'
import ImageSub from '../../assets/sub.png'
import Image from '../../assets/img.png'

function Banner({ history, location }) {

  return (
    <Container>
      <ImgTitle src={ImageTitle} />
      <ImgSub src={ImageSub} />
      {
        location && location.pathname === '/' &&
        <Button onClick={() => history.push('/signup')}>Cadastre-se</Button>
      }
      <Img src={Image} />
    </Container>
  )
}

export default withRouter(Banner)