import React from "react";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="showcase">
        <div className="brand-logo">
          <img src={require("../../assets/images/Union.png")} alt="unit-logo" />
          <img
            src={require("../../assets/images/lendsqr.png")}
            alt="lendsqr-logo"
            className="lendsqr-text-logo"
          />
        </div>
        <div className="showcase-image">
          <img
            src={require("../../assets/images/pablo-sign-in.png")}
            alt="Pablo sign in"
          />
        </div>
      </div>
      <div className="login-form-section">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
