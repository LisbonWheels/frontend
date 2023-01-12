/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import logo from "../../assets/company-logo.png";
import UserPool from "../../UserPool";
import { Navigate } from "react-router-dom";

function Signup() {
const navigate = useNavigate()
  const [userObj, setUserObj] = useState(null);

  const onSubmit = () => {
  UserPool.signUp(userObj.email, userObj.password, [], null, (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(data)
  } )
navigate('/login')
  }

     

  const changeHandle = (event) => {
    setUserObj({ ...userObj, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="company-logo-wrapper">
          <img className="company-logo" src={logo} alt="company-logo" />
        </div>
          <input onChange={(e) => changeHandle(e)}  type={"text"} name='email' placeholder="Email"></input>
        <div>
          <input onChange={(e) => changeHandle(e)} type={"password"} name='password' placeholder="Password"></input>

        </div>
        <div className="forgot-password-wrapper">
          <a href="/">Forgot Password?</a>
        </div>
        <div className="button-wrapper">
          <button className="Login" onClick={() => onSubmit()}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
