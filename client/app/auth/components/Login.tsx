"use client";
import React from "react";
import { BiShow } from "react-icons/bi";
import { PiEyeClosedBold } from "react-icons/pi";

type Props = {
  login: {
    email: string;
    password: string;
  };
  setLogin: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Login = ({ login, setLogin, handleLogin }: Props) => {
  const [password, setPassword] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const toggleVisible = () => {
    setPassword(!password);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <form
        onSubmit={(e) => handleLogin(e)}
        className="flex flex-col gap-7 w-full"
      >
        {/* email */}
        <label htmlFor="email" className="flex flex-col text-sm font-[500]">
          Email address
          <input
            type="email"
            id="email"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
            value={login.email}
            onChange={handleChange}
            placeholder="johndoe@email.com"
          />
        </label>
        {/* password */}
        <label
          htmlFor="password"
          className="flex flex-col text-sm font-[500] relative"
        >
          Password
          <input
            type={password ? "password" : "text"}
            id="password"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
            value={login.password}
            onChange={handleChange}
          />
          {password ? (
            <BiShow
              onClick={toggleVisible}
              className="cursor-pointer text-primary text-2xl absolute top-[67%] right-0 -translate-x-1/2 -translate-y-1/2"
            />
          ) : (
            <PiEyeClosedBold
              onClick={toggleVisible}
              className="cursor-pointer text-primary text-2xl absolute top-[67%] right-0 -translate-x-1/2 -translate-y-1/2"
            />
          )}
        </label>
        <button className="h-[50px] bg-primary rounded-lg text-white border-primary border-2  hover:bg-white hover:text-primary hover:border-primary hover:border-2 duration-200 transition-all hover:font-semibold">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
