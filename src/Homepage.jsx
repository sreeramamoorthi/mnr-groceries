import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />

      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-success bg-opacity-10 px-3">
        {/* Wider but Shorter Card */}
        <div 
          className="card shadow-lg border-0 rounded-4" 
          style={{ maxWidth: "560px", width: "100%" }}
        >
          <div className="card-body p-4 p-md-5"> {/* Reduced padding = shorter height */}

            {/* Compact Logo */}
            <div className="text-center mb-4">
              <h1 className="fw-bold text-success mb-0" style={{ fontSize: "3.5rem" }}>MNR</h1>
              <h4 className="fw-bold text-dark mb-2">Grocery</h4>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold text-dark mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold text-dark mb-2">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control form-control-lg rounded-3"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember + Forgot - Compact */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check mb-0">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label text-muted small" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-success small fw-semibold text-decoration-none">Forgot password?</a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-success btn-lg w-100 fw-bold rounded-3 py-3 mb-4"
              >
                Sign In
              </button>

            </form>

            {/* Small signup text */}
            <div className="text-center mt-4 pt-3 border-top">
              <small className="text-muted d-block">
                Don't have an account?{" "}
                <Link to="/signup" className="text-success fw-bold text-decoration-none">Sign up here</Link>
              </small>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}