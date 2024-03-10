import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

const Checkout = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  // Assuming your ShopContext contains the product data
  const { products } = useContext(ShopContext);

  // Get the IDs of items in the cart
  const cartItemIds = Object.keys(cartItems);

  // Create an array with the necessary product information for items in the cart
  const cartProducts = cartItemIds.map((id) => {
    return {
      ...products.find((product) => product.id === parseInt(id)),
      quantity: cartItems[id],
    };
  });

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartProducts.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Checkout;
