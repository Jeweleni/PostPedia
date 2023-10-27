"use client";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import main from "../../public/assets/auth.jpg";
import Image from "next/image";
import Slider from "./components/Slider";
import Otp from "./components/Otp";

const Auth = () => {
  const [auth, setAuth] = React.useState("login");
  const [toggle, setToggle] = React.useState(true);
  const [otp, setOtp] = React.useState(false);

  const toggleAuth = () => {
    if (auth === "login") {
      setAuth("signup");
      setToggle(!toggle);
    } else {
      setAuth("login");
      setToggle(!toggle);
    }
  };

  return (
    <div className="mx-auto md:h-[calc(100vh-80px)] flex justify-between items-center">
      <div className="w-[60%] h-full relative hidden md:block">
        <Image
          priority={true}
          width={0}
          height={0}
          src={main}
          alt="cover"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute h-full w-full bg-black top-0 left-0 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-[80%] z-20">
          <h1 className="text-center text-2xl font-semibold">POSTPEDIA</h1>
          <p className="text-center">
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
      </div>
      <div className="w-full md:w-[40%] h-full flex justify-center items-start">
        <div className="w-full flex justify-center items-center flex-col h-full p-10 md:max-w-[500px]">
          {!otp && (
            <Slider auth={auth} toggleAuth={toggleAuth} toggle={toggle} />
          )}
          {!otp ? (
            auth === "login" ? (
              <Login />
            ) : (
              <Register setOtp={setOtp} />
            )
          ) : (
            <Otp />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
