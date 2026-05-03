import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Landing';
import LoginPage from './Homepage';
import CartPage from './Cart';
import AboutPage from './About';
import SignupPage from './Signup';

function App() {
  return (
     <Router>
     <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
     </Router>
  

    
  );
}

export default App;
