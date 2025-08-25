import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/">🛒Infernolark</Link></h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}
