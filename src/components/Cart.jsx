import React from 'react';

const Cart = ({ cartItems, removeFromCart, clearCart, proceedToCheckout }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(({ id, name, price, quantity }) => (
              <li key={id}>
                {name} x {quantity} = ₹{price * quantity}
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={proceedToCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
