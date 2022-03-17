import React, { useState } from "react";
import Joi from "joi";
import "../css/login.css";
import auth from "../../services/authServices";

function SignIn(props) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onLoginSubmit = async (event) => {
    event.preventDefault();

    const schema = Joi.object().keys({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(loginData);

    if (error) {
      alert(error.details[0].message);
    } else {
      try {
        const res = await auth.signin(loginData);
        console.log("RESPONSE RECEIVED: ", res.data);
        if (res.status === 200) {
          localStorage.setItem("token", res.data);
          // window.location = "/";
          window.location = props.prevURL ? props.prevURL : "/";
        }
      } catch (err) {
        if (err.response && err.response.status === 400) {
          alert(err.response.data);
        }
        console.log("AXIOS ERROR: ", err.response.data);
      }
    }
  };

  return (
    <React.Fragment>
      <div class="sign-in-htm">
        <form onSubmit={onLoginSubmit}>
          <div class="group">
            <label for="user" class="label">
              Email
            </label>
            <input
              value={loginData.email}
              type="text"
              class="input"
              name="email"
              onChange={handleLoginInput}
            />
          </div>
          <div class="group">
            <label for="pass" class="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleLoginInput}
              value={loginData.password}
              class="input"
              data-type="password"
            />
          </div>
          <div class="group">
            <input type="submit" class="button" value="Sign In" />
          </div>
        </form>
        {/* <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Log in with Google</a>
              </div> */}
      </div>
    </React.Fragment>
  );
}

export default SignIn;
