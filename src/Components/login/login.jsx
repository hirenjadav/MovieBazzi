import React from "react";
import "../css/login.css";
import SignIn from "./signin";
import SignUp from "./signup";

function Login(props) {
  return (
    <div className="login-page">
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="login-form">
            <SignIn />
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
