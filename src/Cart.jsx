import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css"; 

export default function CartPage() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("mnr-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const updateQty = (id, change) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id]) {
        updated[id].qty += change;
        if (updated[id].qty <= 0) delete updated[id];
      }
      localStorage.setItem("mnr-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      delete updated[id];
      localStorage.setItem("mnr-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const items = Object.values(cart);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = subtotal >= 499 ? 0 : 40;
  const total = subtotal + delivery;
  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      {/* Fixed Navbar */}
      <header className="navbar fixed-top">
        <div className="nav-container">
          <Link to="/" className="logo">MNR <span>Grocery</span></Link>
          <div className="nav-right">
            <Link to="/cart" className="cart-btn position-relative">
              Cart
              {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="page-content">
        <div className="container py-5">

          {items.length === 0 ? (
            <div className="empty-cart text-center py-5">
              <div className="empty-icon mb-4"></div>
              <h3 className="text-muted mb-3">Your cart is empty</h3>
              <p className="text-secondary mb-4">Looks like you haven't added anything yet.</p>
              <br/>
              <br/>
              <Link to="/" className="linkone">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="row g-4 g-xl-5">
              {/* Cart Items */}
              <div className="col-lg-8">
                <h4 className="mb-4 fw-bold text-dark">Your Cart ({totalCount} items)</h4>
                <div className="cart-items">
                  {items.map(item => (
                    <div key={item.id} className="cart-item-card">
                      <div className="item-image">
                        <img src={item.image || "https://via.placeholder.com/80"} alt={item.name} />
                      </div>

                      <div className="item-details">
                        <h6 className="item-name">{item.name}</h6>
                        <p className="item-price text-success fw-bold">
                          ₹{item.price} {item.unit && <small className="text-muted">{item.unit}</small>}
                        </p>
                      </div>

                      <div className="item-actions">
                        <div className="qty-controls">
                          <button onClick={() => updateQty(item.id, -1)} className="qty-btn">−</button>
                          <span className="qty-display">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, +1)} className="qty-btn">+</button>
                        </div>
                        <p className="item-total fw-bold">₹{item.price * item.qty}</p>
                        <button onClick={() => removeItem(item.id)} className="remove-btn">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="summary-card sticky-top">
                  <h5 className="summary-title">Order Summary</h5>
                  <div className="summary-row">
                    <span>Subtotal ({totalCount} items)</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Charge</span>
                    <span className={delivery === 0 ? "text-success fw-bold" : ""}>
                      {delivery === 0 ? "FREE" : `₹${delivery}`}
                    </span>
                  </div>
                  {delivery === 0 && (
                    <div className="free-delivery-note">
                      Free delivery applied!
                    </div>
                  )}
                  <hr />
                  <div className="summary-total">
                    <span className="fw-bold">Total</span>
                    <span className="text-success fw-bold fs-4">₹{total}</span>
                  </div>

                  <button className="checkout-btn w-100 mt-4">
                    Proceed to Checkout
                  </button>

                  <div className="savings-note text-center mt-3">
                    {subtotal < 499 && (
                      <small className="text-muted">
                        Add ₹{499 - subtotal} more for <strong>FREE delivery</strong>
                      </small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
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
    </>
  );
}