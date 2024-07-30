import React from 'react'
import CartItem from './cartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearAllCart } = useGlobalContext()
 
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {
          cart.map((item, index) => {
            return <CartItem key={index} {...item}/>
          })
        }
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearAllCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer