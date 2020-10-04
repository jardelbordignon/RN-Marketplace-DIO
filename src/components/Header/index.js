import React from 'react'
import { Image } from 'react-native'

import Logo from '../../assets/logo2.png'

import { Container } from './styles'

export default Header = () => {

  return (
    <Container>
      <Image source={Logo} />
    </Container>
  )
}