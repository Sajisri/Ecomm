export default function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <p><strong>Total Items:</strong> {cart.length}</p>
        <p><strong>Total Price:</strong> Rs {total.toFixed(2)}</p>
      </div>
      <button disabled={cart.length === 0} className="checkout-btn">
        Place Order
      </button>
    </section>
  );
}
