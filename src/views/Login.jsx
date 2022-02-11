import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <h1 className="loginTitle">Choose your login methods</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <FcGoogle className="icon" />
          </div>
          <div className="loginButton facebook">
            <FaFacebook className="icon" />
          </div>
          <div className="loginButton github">
            <FaGithubSquare className="icon" />
          </div>
        </div>
        <div className="right">
          <input type="text" name="" id="" placeholder="usename" />
          <input type="text" name="" id="" placeholder="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
