import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up:", formData);
    // Add your signup logic here
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
        <div 
          className="card shadow-lg border-0 rounded-4" 
          style={{ maxWidth: "560px", width: "100%" }}
        >
          <div className="card-body p-4 p-md-5">

            {/* Logo */}
            <div className="text-center mb-4">
              <h1 className="fw-bold text-success mb-0" style={{ fontSize: "3.5rem" }}>MNR</h1>
              <h4 className="fw-bold text-dark mb-3">Grocery</h4>
              <p className="text-muted">Create your account</p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone (Optional) */}
              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label text-muted small" htmlFor="agree">
                  I agree to the <a href="#" className="text-success text-decoration-none">Terms</a> and <a href="#" className="text-success text-decoration-none">Privacy Policy</a>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="btn btn-success btn-lg w-100 fw-bold rounded-3 py-3 shadow"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-4">
              <small className="text-muted">
                Already have an account?{" "}
                <a href="/login" className="text-success fw-bold">
                  Sign in
                </a>
              </small>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}