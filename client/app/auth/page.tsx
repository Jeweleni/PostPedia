"use client";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = () => {
  const [auth, setAuth] = React.useState("login");
  const [toggle, setToggle] = React.useState(true);
  const toggleClass = "transform translate-x-[100%]";

  const toggleAuth = () => {
    if (auth === "login") {
      setAuth("signup");
    } else {
      setAuth("login");
    }
  };

  return (
    <div className="w-[500px] flex flex-col gap-10 ">
      {/* toggle */}
      <div onClick={toggleAuth} className="flex justify-between w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div
            className="w-full h-2 flex items-center bg-gray-400 cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div
              className={
                "bg-primary h-2 w-6/12 transform duration-300 ease-in-out" +
                (toggle ? null : toggleClass)
              }
            ></div>
          </div>
        </div>
      </div>
      {/* login/signup */}
      {auth === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
