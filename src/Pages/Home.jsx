import ProductCard from "../Components/ProductCard";
import gpa from "../assets/gpa.jpg";
import mac from "../assets/mac.jfif";
import sony from "../assets/sony.jfif"
import watch from "../assets/watch.avif";
import game from "../assets/game.avif";
import charger from "../assets/charger.webp";


const fastSelling = [
  { id: 1, title: "google pixel 8", price: 39999, image: gpa },
  { id: 2, title: "MacBook Air M2", price: 75599, image: mac },
  { id: 3, title: "Sony Headphones", price: 2299, image: sony },
];

const newArrivals = [
  { id: 4, title: "Smartwatch X2", price: 1199, image: watch },
  { id: 5, title: "Gaming Console Z", price: 5499, image: game },
  { id: 6, title: "Wireless Charger", price: 2349, image: charger},
];

export default function Home({ addtoCart }) {
  return (
    <section className="home">
         
      <h2>Welcome to Infernolark</h2>
      <p className="home-quote">Upgrade your lifestyle with the latest tech. 🚀</p>

      <div className="section">
        <h3>🔥 Fast Selling Products</h3>
        <div className="product-grid">
          {fastSelling.map((p) => (
            <ProductCard key={p.id} product={p} addtoCart={addtoCart} />
          ))}
        </div>
      </div>

      
      <div className="section">
        <h3>🆕 New Arrivals</h3>
        <div className="product-grid">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} addtoCart={addtoCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
