import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Logo from "../../components/logo/Logo";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="showcase">
        <Logo />
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
