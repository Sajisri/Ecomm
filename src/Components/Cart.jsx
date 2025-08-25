import { useNavigate } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import NextButton from "./NextButton";

export default function Cart({ cart, removeFromCart }) {
  const navigate=useNavigate()
  return (
    <section className="cart">
      <h2>Shop Now!</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="cart-item">
            <span>{item.title} - Rs {item.price}</span>
            <button className="remove-btn" onClick={() => removeFromCart(i)}>
              Remove
            </button>
          </div>
        ))
      )}
      <NextButton nextPath="/checkout" />
    </section>
  );
}
