import React, { useState } from "react";
import "../css/login.css";
import jwt_decode from "jwt-decode";

import ApiService from "../Api/Api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const apiService = new ApiService();

  const signup = async () => {
    if (email === "" || password === "") {
      alert("Please enter your data");
    } else if (password !== repassword) {
      alert("Password and Re-password does not match");
    } else {
      const data = {
        userEmail: email,
        userPassword: password,
        userRol: "user",
      };

      const res = await apiService.post("/authSesion/Register", data);
      if (res.status !== undefined) {
        localStorage.setItem("jwt", res.token);
        window.location.href = "/";
      }
    }
  };

  const signin = async () => {
    if (email === "" || password === "") {
      alert("Please enter your data");
    } else {
      const data = {
        userEmail: email,
        userPassword: password,
      };
      const res = await apiService.post("/authSesion/Login", data);
      if (res !== undefined) {
        localStorage.setItem("jwt", res.token);
        let decoded = jwt_decode(res.token);

        if (decoded.user.userRol === "admin") {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/";
        }
      }
    }
  };

  return (
    <>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab sign-in-hover">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab sign-up-hover">
            Sign Up
          </label>
          <div className="login-form">
            {/* login */}

            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In"
                  onClick={() => signin()}
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            {/* resgister */}

            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => {
                    setRepassword(e.target.value);
                  }}
                />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={() => signup()}
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a htmlFor="tab-1">Already Member?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
