/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import logo from "../../assets/company-logo.png";
import UserPool from "../../UserPool";
import "./Signup.css";

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
        <div>
          <h6 className="text">Name</h6>
          <input className="input-field" onChange={(e) => changeHandle(e)}  type={"text"} name='name' placeholder="Name"></input>
        </div>
        <div>
          <h6 className="text">Email</h6>
          <input className="input-field" onChange={(e) => changeHandle(e)}  type={"text"} name='email' placeholder="Email"></input>
        </div>
        <div>
          <h6 className="text">Password</h6>
          <input className="input-field" onChange={(e) => changeHandle(e)} type={"password"} name='password' placeholder="Password"></input>
        </div>
        <div>
          <h6 className="text">Confirm password</h6>
          <input className="input-field" onChange={(e) => changeHandle(e)} type={"password"} name='confirm-password' placeholder="Password"></input>
        </div>
        <div className="button-wrapper">
          <button className="button-login-page" onClick={onSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
