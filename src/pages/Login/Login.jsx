/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import "./Login.css";
import logo from "../../assets/company-logo.png";
import UserPool from "../../UserPool";
import UserContext from './../../context/UserContext';

function Login() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [roleError, setRoleError] = useState(null);
  const [confirmError, setConfirmError] = useState(null);

  const submitHandler = () => {
    setLoginError(null)
    setConfirmError(null)
    setRoleError(null)
    const user = new CognitoUser({
      Username: userObj.email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: userObj.email,
      Password: userObj.password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("On Success");
        console.log(data.accessToken.payload.bla);
        if(data.accessToken.payload["cognito:groups"] === undefined) {
setRoleError(true)
return
        }
        console.log(data.accessToken.payload["cognito:groups"][0]);
        console.log(data.idToken.payload.email);
        // InsertToSqlDb({
        //   username: data.accessToken.payload.username,
        //   role: data.accessToken.payload["cognito:groups"][0],
        //   email: data.idToken.payload.email,
        // });
        setUserDetails({
          username: data.accessToken.payload.username,
          role: data.accessToken.payload["cognito:groups"][0],
          email: data.idToken.payload.email,
        });
        navigate("/");
      },


      onFailure: (err) => {
        console.log("On Failure");
        if (err === 'UserNotConfirmedException: User is not confirmed.') {
         navigate('/')
        console.log(err);
        setLoginError(err);
      }},




      newPasswordRequired: () => {
        setConfirmError(true)
        console.log("New Password Required");
        UserPool.signUp(
          userObj.email,
          userObj.password,
          [],
          null,
          (err, data) => {
            if (err) {
              console.log(err);
            }
            console.log(data);
          }
        );
        console.log("User Created");
      },
    });
  };

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
          <h6 className="text">Email</h6>
          <input className="input-field" onChange={(e) => changeHandle(e)}  type={"text"} name='email' placeholder="Email"></input>
        </div>
        <div>
          <h6 className="text">Password</h6>
          <input className="input-field" onChange={(e) => changeHandle(e)} type={"password"} name='password' placeholder="Password"></input>
        </div>
        {loginError !== null && <p className="wrong">Details are Wrong</p>}
        {roleError !== null && <p className="wrong">Your role is not assigned, please contact your admin</p>}
        {confirmError !== null && <p className="wrong">Your new user has not been confirmed yet, please contact your admin.</p>}
        <div className="button-wrapper">
          <button className="button-login-page" onClick={submitHandler}>Login</button>
          <a href='/signup'><button className="button-login-page" onClick={submitHandler}>Sign Up</button></a>
        </div>
      </div>
    </div>
  );
}

export default Login;
