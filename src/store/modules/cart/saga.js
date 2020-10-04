import { all, takeLatest, select, call, put } from 'redux-saga/effects'

import api from '../../../services/api'
import formatValue from '../../../utils/formatValue'
import { addToCartSuccess, updateQuantitySuccess } from './actions'

function* addToCart({id}) {
  const productExists = yield select(
    state => state.cart.find(product => product.id === id)
  )

  if (productExists) { // dispara uma action para altualizar a quantidade no carrinho
    yield put(updateQuantitySuccess(id, productExists.quantity + 1))
  } else { //
    const res = yield call(api.get, `products/${id}`)

    const data = {
      ...res.data, quantity: 1, formattedPrice: formatValue(res.data.price)
    }

    yield put(addToCartSuccess(data))
  }
}

function* updateQuantity({id, quantity}) {
  if (quantity <= 0) return null
  yield put(updateQuantitySuccess(id, quantity))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_QUANTITY_REQUEST', updateQuantity)
])