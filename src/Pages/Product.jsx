import React from "react";
import ProductCard from "../Components/ProductCard"
import phone from "../assets/phone.jpg"
import lap from "../assets/lap.jpg"
import headphone from "../assets/headphone.webp"
import earbuds from "../assets/earbuds.webp"
import { useNavigate } from "react-router-dom";
import NextButton from "../Components/NextButton";
const products = [
  { id: 1, title: "Laptop", price: 77999, image:lap },
  { id: 2, title: "Phone", price: 30699, image:phone},
  { id: 3, title: "Headphones", price: 4199, image: headphone },
  { id: 3, title: "Earbuds", price: 2199, image:earbuds },
];

export default function Products({ addtoCart }) {
    const navigate=useNavigate()
  return (
    <section className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addtoCart={addtoCart} />
        ))}
        
      </div>
      <NextButton nextPath="/cart" />
    </section>
  );
}
