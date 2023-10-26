"use client";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = () => {
  const [auth, setAuth] = React.useState("login");

  const toggleAuth = () => {
    if (auth === "login") {
      setAuth("signup");
    } else {
      setAuth("login");
    }
  };

  return (
    <>
      <div onClick={toggleAuth}>Toggle</div>
      {auth === "login" ? <Login /> : <Register />}
    </>
  );
};

export default Auth;
