import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import * as CartActions from '../../store/modules/cart/actions'

import FloatingCart from '../../components/FloatingCart'
import formatValue from '../../utils/formatValue'
import api from '../../services/api'

import { 
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTile,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText
} from './styles'

export default Catalog = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const res = await api.get('/products')
      setProducts(res.data)
    }

    loadProducts()
  }, [])

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id))
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{height: 80}}
          renderItem={({item}) => (
            <Product>
              <ProductTile>{ item.title }</ProductTile>
              <ProductImage source={{uri: item.image_url}} />
              <PriceContainer>
                <ProductPrice>{ formatValue(item.price) }</ProductPrice>
                <ProductButton onPress={() => handleAddToCart(item.id)}>
                  <ProductButtonText>adicionar</ProductButtonText>
                  <Feather name='plus-circle' color='#d1d7e9' size={30} />
                </ProductButton>
              </PriceContainer>
            </Product>
          )} />
      </ProductContainer>

      <FloatingCart />
    </Container>
  )
}
