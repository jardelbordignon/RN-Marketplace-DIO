import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'

import formatValue from '../../utils/formatValue'

import { 
  Container,
  CartPrincing,
  CartTotalPrice,
  CartButton,
  CartButtonText
} from './styles'

const FloatingCart = () => {

  const navigation = useNavigation()
  const products = useSelector(({ cart }) => cart)

  const cartSize = useMemo(() => products.length || 0, [products])
  const cartTotal = useMemo(() => (
    products.reduce((acc, prod) => acc += prod.quantity * prod.price, 0)
  ), [products])
  
  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Feather name='shopping-cart' size={24} color='#f3f9ff' />
        <CartButtonText>{cartSize} {cartSize === 1 ? 'item': 'Itens' }</CartButtonText>

        <CartPrincing>
          <CartTotalPrice>{formatValue(cartTotal)}</CartTotalPrice>
        </CartPrincing>

        <Feather name='chevron-right' size={24} color='#f3f9ff' />
      </CartButton>
    </Container>
  )
}

export default FloatingCart