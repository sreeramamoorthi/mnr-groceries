import { Link } from "react-router-dom";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">MNR <span>Grocery</span></h1>
          <div className="nav-right">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="cart-btn">Cart</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container text-center">
          <h1>About MNR Grocery</h1>
          <p className="lead">Fresh groceries delivered in under 60 minutes — with love</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2>From a Small Kitchen to Your Doorstep</h2>
              <p>
                MNR Grocery started in 2023 when three friends got tired of crowded markets and stale vegetables.
                We thought: <strong>"Why can't groceries be fresh, fast, and fun?"</strong>
              </p>
              <p>
                Today, we're proud to deliver farm-fresh produce, dairy, snacks, and daily essentials to thousands of homes — all in under 60 minutes.
              </p>
              <div className="stats">
                <div>
                  <h3>50K+</h3>
                  <p>Happy Families</p>
                </div>
                <div>
                  <h3>1,500+</h3>
                  <p>Products</p>
                </div>
                <div>
                  <h3>&lt;60 min</h3>
                  <p>Delivery Time</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900" alt="MNR Grocery Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2>Why People Choose MNR</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">Leaf</div>
              <h4>Always Fresh</h4>
              <p>Direct from farms & trusted suppliers daily</p>
            </div>
            <div className="value-card">
              <div className="icon">Truck</div>
              <h4>Super Fast</h4>
              <p>Lightning delivery in under 60 minutes</p>
            </div>
            <div className="value-card">
              <div className="icon">Wallet</div>
              <h4>Honest Prices</h4>
              <p>No hidden fees • Best value guaranteed</p>
            </div>
            <div className="value-card">
              <div className="icon">Heart</div>
              <h4>Customer First</h4>
              <p>24/7 support • Easy returns • We care</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* YOUR BEAUTIFUL FOOTER */}
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
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>

          <div className="footer-right">
            <h5>Newsletter</h5>
            <p>Get exclusive deals & updates</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
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