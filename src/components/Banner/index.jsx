import React from 'react'

import {Container, ImgTitle, ImgSub, Img} from './style'
import ImageTitle from '../../assets/title.png'
import ImageSub from '../../assets/sub.png'
import Image from '../../assets/img.png'

function Banner() {
    return(
        <Container>
                <ImgTitle src={ImageTitle} />
                <ImgSub src={ImageSub} />
                <Img src={Image} />
        </Container>
    )
}

export default Banner