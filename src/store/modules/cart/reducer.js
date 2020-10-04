
function cartReducer(state = [], action) {

  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return [...state, action.product]
    case '@cart/REMOVE':
      return state.filter(product => product.id !== action.id)
    case '@cart/UPDATE_QUANTITY_SUCCESS':
      return state.map(product => {
        if (product.id === action.id) product.quantity = Number(action.quantity)
        return product
      })
    default:
      return state
  }

}

export default cartReducer
