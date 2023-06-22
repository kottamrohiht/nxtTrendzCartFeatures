import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length

      const orderTotal = () => {
        let total = 0
        cartList.map(each => {
          const price = each.quantity * each.price
          total += price
          return each
        })

        return total
      }

      return (
        <div className="order-total-container">
          <h1 className="total">
            Order Total:{' '}
            <span className="total-heading"> Rs {orderTotal()}/-</span>
          </h1>
          <p className="cart-length"> {cartLength} Items in cart </p>
          <button type="button" className="button checkoutButton">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
