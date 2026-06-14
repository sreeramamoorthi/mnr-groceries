import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const [cart, setCart] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { id: 1, name: "Fresh Apple", price: 99, unit: "/kg", category: "fruits", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800" },
    { id: 2, name: "Banana (Dozen)", price: 59, unit: "/kg", category: "fruits", image: "https://jooinn.com/c/background/360/" },
    { id: 3, name: "Fresh Milk 1L", price: 68, unit: "", category: "dairy", image: "milk.png" },
    { id: 4, name: "Whole Wheat Bread", price: 45, unit: "", category: "bakery", image: "whole_wheat_bread_image.png" },
    { id: 5, name: "Egg ", price: 60, unit: "6", category: "dairy", image: "eggs.png" },
    { id: 6, name: "Amul Butter 500g", price: 265, unit: "", category: "dairy", image: "product-img-10.jpg" },
    { id: 7, name: "Basmati Rice", price: 90, unit: "5/kg", category: "cereal grains", image: "basmati_rice_image.png" },
    { id: 8, name: "Lays Chips Classic", price: 20, unit: "", category: "snacks", image: "product-img-4.jpg" },
    { id: 9, name: "Grapes(1kg)", price: 180, unit: "/kg", category: "fruits", image: "grapes.png" },
    { id: 10, name: "Eggplant", price: 45, unit: "/kg", category: "vegetables", image: "eggplant.png" },
    { id: 11, name: "Carrots(1kg)", price: 70, unit: "/kg", category: "vegetables", image: "carrot_image.png" },
    { id: 12, name: "Potatoes(1kg)", price: 40, unit: "/kg", category: "vegetables", image: "potato_image_1.png" },
    { id: 13, name: "Tomatoes(1kg)", price: 50, unit: "/kg", category: "vegetables", image: "tomato_image_2.png" },
    { id: 14, name: "Cabbage(1kg)", price: 60, unit: "/kg", category: "vegetables", image: "cabbage.png" },
    { id: 15, name: "Butter", price: 30, unit: "", category: "dairy", image: "butter.png" },
    { id: 16, name: "Cheese", price: 50, unit: "", category: "dairy", image: "cheese.png" },
    { id: 17, name: "Orange", price: 25, unit: "/kg", category: "fruits", image: "orange_image.png" },
    { id: 18, name: "Nutri Biscuit", price: 50, unit: "", category: "dairy", image: "product-img-2.jpg" },
    { id: 19, name: "Strawberries(1kg)", price: 250, unit: "/kg", category: "fruits", image: "strawberry.png" },
    { id: 20, name: "Mangoes", price: 30, unit: "/kg", category: "fruits", image: "mango_image_1.png" },
    { id: 21, name: "Shrimp", price: 80, unit: "/kg", category: "dairy", image: "shrimp.png" },
    { id: 22, name: "5 Star Bites", price: 120, unit: "", category: "Snacks", image: "product-img-3.jpg" },
    { id: 23, name: "Wheat Floor", price: 25, unit: "/kg", category: "fruits", image: "wheat_flour_image.png" },
    { id: 24, name: "Chocolate Muffin", price: 10, unit: "1", category: "snacks", image: "vanilla_muffins_image.png" },
    { id: 25, name: "Spinach", price: 20, unit: "/kg", category: "dairy", image: "spinach_image_1.png" },
    { id: 26, name: "Beef", price: 110, unit: "/kg", category: "dairy", image: "beef.png" },
    { id: 27, name: "Pineapple(1kg)", price: 50, unit: "/kg", category: "fruits", image: "pineapple.png" },
    { id: 28, name: " White Choco Chips ", price: 20, unit: "", category: "bakery", image: "product-single-img-3.jpg" },
    { id: 29, name: "Pepsi", price: 25, unit: "", category: "snacks", image: "pepsi_image.png" },
    { id: 30, name: "top ramen", price: 50, unit: "", category: "dairy", image: "top_ramen_image.png" },
    { id: 31, name: "sprite", price: 60, unit: "/L", category: "Snacks", image: "sprite_image_1.png" },
    { id: 32, name: "Onion", price: 70, unit: "/kg", category: "vegetables", image: "onion_image_1.png" },
  ];

  const categories = [
    { id: "all", name: "All Products", icon: "" },
    { id: "fruits", name: "Fruits", icon: "" },
    { id: "vegetables", name: "Vegetables", icon: "" },
    { id: "dairy", name: "Milk & Eggs", icon: "" },
    { id: "bakery", name: "Bakery", icon: "" },
    { id: "snacks", name: "Snacks", icon: "" },
    { id: "cereal grains", name: "cereal grains", icon: "" },
  ];

  // 
  useEffect(() => {
    const saved = localStorage.getItem("mnr-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("mnr-cart", JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory]);

  const addToCart = (product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: prev[product.id]
        ? { ...prev[product.id], qty: prev[product.id].qty + 1 }
        : { ...product, qty: 1 }
    }));
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">MNR <span>Grocery</span></h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="nav-right">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/cart" className="cart-btn">
              Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* Category Tabs */}
      <div className="categories-bar">
        <div className="container">
          <div className="categories-list">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container">
        <div className="section-header">
          <h2>
            {searchQuery
              ? `Results for "${searchQuery}"`
              : selectedCategory === "all"
                ? "All Products"
                : categories.find(c => c.id === selectedCategory)?.name
            }
            <span className="result-count">({filteredProducts.length} items)</span>
          </h2>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <p>No products found</p>
            <button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} className="clear-filters">
              Show All Products
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-image">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <div className="price">₹{p.price} <span>{p.unit}</span></div>
                  <button
                    onClick={() => addToCart(p)}
                    className={`add-btn ${cart[p.id] ? "added" : ""}`}
                  >
                    {cart[p.id] ? `Added (${cart[p.id].qty})` : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Your Beautiful Footer */}
      <footer className="site-footer">
        <div className="footer-content container">
          <div className="footer-left">
            <h4 className="footer-brand">MNR Grocery</h4>
            <p className="footer-desc">Fresh and healthy groceries delivered to your door.</p>
            <p className="contact-info">
              Email: <a href="mailto:hello@mnr.grocery">hello@mnr.grocery</a> |
              Phone: <a href="tel:+911234567890">+91 12345 67890</a>
            </p>
          </div>
          <div className="footer-center">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
          <div className="footer-right">
            <h5>Newsletter</h5>
            <p>Get deals & updates</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 MNR Grocery • Fresh. Fast. Yours.</p>
        </div>
      </footer>
    </div>
  );
}