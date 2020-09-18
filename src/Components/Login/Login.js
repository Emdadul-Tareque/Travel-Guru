import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { initializeLoginFramework, handleGoogleSignIN, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleFbSignIn } from "./loginManager";
import Navbar from "../Navbar/Navbar";
import './Login.css'
import googleIcon from '../../Image/Icon/google.png'
import fbIcon from '../../Image/Icon/fb.png'
import Header from "../Navbar/Header";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIN().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <div>
      <Header></Header>
      <div className="signup-form">
        {newUser && <h2>Create an account</h2>}
        {!newUser && <h2>Login</h2>}
        
        <br />
        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              className="form-field"
              name="First name"
              type="text"
              onBlur={handleBlur}
              placeholder="First name"
              required
            />
          )}
          <br />
          {newUser && (
            <input
              className="form-field"
              name="Last name"
              type="text"
              onBlur={handleBlur}
              placeholder="Last name"
              required
            />
          )}
          <br />
          <input
            type="text"
            className="form-field"
            name="email"
            onBlur={handleBlur}
            placeholder="Your Email address"
            required
          />
          <br />
          <input
            type="password"
            className="form-field"
            name="password"
            onBlur={handleBlur}
            placeholder="Your Password"
            required
          />
          <br />
          {newUser && (
            <input
              type="password"
              className="form-field"
              name="password"
              onBlur={handleBlur}
              placeholder="Confirm Password"
              required
            />
          )}
          <br />
          <input
            className="submit-btn"
            type="submit"
            value={newUser ? "Create an account" : "Sign in"}
          />
        </form>
        {newUser && <small>All ready have an account?</small>}
        {newUser && (
          <input
            className="btn"
            type="submit"
            onClick={() => setNewUser(!newUser)}
            value="login"
          />
        )}
        {!newUser && <small>Don't Have an account? </small>}
        {!newUser && (
          <input
            className="btn"
            type="submit"
            onClick={() => setNewUser(!newUser)}
            value="Create new account"
          />
        )}
      </div>
      <div className="signIn">
        <div>
          <img className="icon" src={fbIcon} alt="" />
        </div>
        <button className="signIn-btn" onClick={fbSignIn}>
          Sign In with facebook
        </button>
        <br />
      </div>

      <div className="signIn">
        <div>
          <img className="icon" src={googleIcon} alt="" />
        </div>
        <button className="signIn-btn" onClick={googleSignIn}>
          Sign In with google
        </button>
        <br />
      </div>
    </div>
  );
}

export default Login;