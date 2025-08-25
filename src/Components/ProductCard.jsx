import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, addtoCart }) {
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title}
      style={{ width: "100px", height: "100px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>Rs {product.price}</p>
      <button onClick={() => addtoCart(product)}>Add To Cart</button>
      
    </div>
  );
}
