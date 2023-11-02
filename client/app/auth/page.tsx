"use client";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import main from "../../public/assets/auth.jpg";
import Image from "next/image";
import Slider from "./components/Slider";
import Otp from "./components/Otp";
import Popup from "./components/Popup";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";

const Auth = () => {
  const router = useRouter();
  const [toggle, setToggle] = React.useState(true);
  const [otp, setOtp] = React.useState(false);
  const [popup, setPopup] = React.useState(false);

  const [auth, setAuth] = React.useState("login");
  const [otpCode, setOtpCode] = React.useState("");

  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [selected, setSelected] = React.useState<any>("");

  const toggleAuth = () => {
    if (auth === "login") {
      setAuth("signup");
      setToggle(!toggle);
    } else {
      setAuth("login");
      setToggle(!toggle);
    }
  };

  const onChange = (value: any) => setOtpCode(value);

  const handleOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPopup(true);
    console.log(otpCode);
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login);
  };
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOtp((p: any) => !p);
    const registerInfo = { ...register, selected };
    console.log(registerInfo);
  };

  return (
    <NextUIProvider>
      <div className="mx-auto md:h-screen flex items-center relative">
        {popup && (
          <Popup
            handlePopup={() => {
              router.push("/");
              setPopup(false);
            }}
          />
        )}
        <div className="flex-1 h-full relative hidden md:block">
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
        <div className="flex-5 min-h-full flex md:justify-start md:items-center justify-center items-center flex-col gap-5 px-10 pt-5 my-10 md:min-w-[550px] md:w-auto w-full">
          {!otp && (
            <>
              <Slider auth={auth} toggleAuth={toggleAuth} toggle={toggle} />
            </>
          )}
          {!otp ? (
            auth === "login" ? (
              <>
                <Login
                  login={login}
                  setLogin={setLogin}
                  handleLogin={handleLogin}
                />
              </>
            ) : (
              <>
                <Register
                  register={register}
                  setRegister={setRegister}
                  setSelected={setSelected}
                  setOtp={setOtp}
                  handleRegister={handleRegister}
                />
              </>
            )
          ) : (
            <Otp
              value={otpCode}
              valueLength={6}
              onChange={onChange}
              handleOtp={handleOtp}
            />
          )}
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Auth;
