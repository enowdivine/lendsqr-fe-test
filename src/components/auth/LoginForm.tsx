import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const loginData = {
  email: "lendsqr@gmail.com",
  password: "Lendsqr",
};

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const LoginHandle = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (email && password) {
      if (email === loginData.email && password === loginData.password) {
        localStorage.setItem("user", JSON.stringify(email));
        toast.success("Success");
        setLoading(false);
        navigate("/dashboard");
      } else {
        setLoading(false);
        toast.error("Invalid Credentials");
      }
    } else {
      toast.error("Email & password is required");
      setLoading(false);
      return;
    }
  };

  const toggleShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="login-form">
      <h4>Welcome!</h4>
      <p>Enter details to login.</p>
      <form className="login-form">
        <div className="form-input-div">
          <input
            type="email"
            placeholder="Email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input-div">
          <input
            type={passwordType}
            placeholder="Password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-show-hide" onClick={toggleShowPassword}>
            {passwordType === "password" ? "SHOW" : "Hide"}
          </span>
        </div>
        <div className="forgot-password-div">
          <span>Forgot Password?</span>
        </div>
        <button onClick={LoginHandle}>
          {loading ? "Loading..." : "LOG IN"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
