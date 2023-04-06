import React, { useState } from "react";

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");

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
          <input type="email" placeholder="Email" className="email" />
        </div>
        <div className="form-input-div">
          <input
            type={passwordType}
            placeholder="Password"
            className="password"
          />
          <span className="password-show-hide" onClick={toggleShowPassword}>
            {passwordType === "password" ? "SHOW" : "Hide"}
          </span>
        </div>
        <div className="forgot-password-div">
          <span>Forgot Password?</span>
        </div>
        <button>LOG IN</button>
      </form>
    </div>
  );
};

export default LoginForm;
