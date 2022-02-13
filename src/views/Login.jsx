import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Login = () => {

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:4000/auth/github", "_self");
  };

  // const facebook = () => {
  //   window.open("http://localhost:5000/auth/facebook", "_self");
  // };

  return (
    <div className="login">
      {/* <h1 className="loginTitle">Choose a Login Method</h1> */}
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <FcGoogle className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <FaFacebook className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <FaGithubSquare className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
