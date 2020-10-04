import React, { useMemo } from 'react'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'

import formatValue from '../../utils/formatValue'
import EmptyCart from '../EmptyCart'
import * as CartActions from '../../store/modules/cart/actions'

import { 
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsItensContainer,
  TotalProductsText,
  SubTotalValue
} from './styles'

const Cart = () => {
  const dispath = useDispatch()
  const products = useSelector(({cart}) => cart)
  
  const cartSize = useMemo(() => products.length || 0, [products])
  const cartTotal = useMemo(() => (
    products.reduce((acc, prod) => acc += prod.quantity * prod.price, 0)
  ), [products])

  function increment({id, quantity}) {
    dispath(CartActions.updateQuantityRequest(id, quantity + 1))
  }

  function decrement({id, quantity}) {
    if (quantity > 1)
      dispath(CartActions.updateQuantityRequest(id, quantity - 1))
    else
      dispath(CartActions.removeFromCart(id))
  }
  
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponentStyle={<View />}
          listFooterComponentStyle={{ height: 80 }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>{`${item.quantity}x ${formatValue(item.price)}`}</ProductSinglePrice>
                  <ProductQuantity>{formatValue(item.price * item.quantity)}</ProductQuantity>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => increment(item)}>
                  <Feather name='plus' color='#e83f5b' size={16} />
                </ActionButton>
                <ActionButton onPress={() => decrement(item)}>
                  <Feather name='minus' color='#e83f5b' size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )  } />
      </ProductContainer>

      <TotalProductsContainer>
        <TotalProductsItensContainer>
          <Feather name='shopping-cart' color='#fff' size={24} />
          <TotalProductsText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</TotalProductsText>
        </TotalProductsItensContainer>
        <SubTotalValue>{formatValue(cartTotal)}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  )
}

export default Cart
