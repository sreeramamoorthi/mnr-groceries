import { Link } from 'react-router-dom';

function NavBar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#28a745",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  const logoStyle = {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textDecoration: "none"
  };

  const linksStyle = {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "background-color 0.3s"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>🛒 MNR Grocery</Link>
      <ul style={linksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
        <li><Link to="/signup" style={linkStyle}>Signup</Link></li>
        <li><Link to="/cart" style={linkStyle}>Cart</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
