"use client";
import React from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const toggleVisible = () => {
    setPassword(!password);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-7 w-full">
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
            <BiHide
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
