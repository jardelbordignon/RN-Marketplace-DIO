import React, { useState, useMemo } from 'react'
import { View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import { Container, EmptyCartText } from './styles'

const EmptyCart = () => {

  return (
    <Container>
      <Feather name='slash' size={38} color='#f3f9ff' />
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  )
}

export default EmptyCart
