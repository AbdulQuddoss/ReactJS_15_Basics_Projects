const reducer = (state, action) => {
  
  if(action.type === 'CLEART_ALL_CART'){
    return {...state, cart: []}
  }

  if(action.type === 'REMOVE_CART'){
    return {...state, cart: state.cart.filter((cart) => cart.id !== action.payload)}
  }

  //  if(action.type === 'INCREAMENT'){
  //   let cartTemp = state.cart.map((cartItem) => {
  //     if(cartItem.id === action.payload){
  //       return {...cartItem, amount: cartItem.amount + 1}
  //     }
  //     return cartItem;
  //   })
  //   return {...state, cart: cartTemp}
  // }

  // if(action.type === 'DECREAMENT'){
  //   let cartTemp = state.cart.map((cartItem) => {
  //     if(cartItem.id === action.payload){
  //       return {...cartItem, amount: cartItem.amount - 1}
  //     }
  //     return cartItem;
  //   }).filter((cartItem) => cartItem.amount !== 0)
  //   return {...state, cart: cartTemp}
  // }

  if(action.type === 'TOGGLE_AMOUNT'){
    let tempCart = state.cart.map((cartItem) => {
      if(cartItem.id === action.payload.id){
        if(action.payload.type === 'inc'){
          return {...cartItem, amount: cartItem.amount +1}
        }
        if(action.payload.type === 'dec'){
          return {...cartItem, amount: cartItem.amount -1}
        }
      }
      return cartItem;
    })
    .filter((item) => item.amount !== 0)
    return {...state, cart: tempCart}
  }

  if(action.type === 'GET_TOTAL'){
    let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
      const {price, amount} = cartItem;
      let itemTotal = price * amount;
      
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    }, {
      total: 0,
      amount: 0
    })
      total = parseFloat(total.toFixed(2))
    return {...state, total, amount}
  }

  if(action.type === 'LOADING'){
    return {...state, loading: true}
  }

  if(action.type === 'DISPLAY'){
    return {...state, cart: action.payload, loading: false}
  }

  throw new Error('No matching action type');
}

export default reducer;