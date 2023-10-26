"use client";
import React from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Register = () => {
  const [register, setRegister] = React.useState({
    firstname: "",
    lastname: "",
    joiningAs: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [password, setPassword] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const toggleVisible = () => {
    setPassword(!password);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(register);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-2xl font-semibold">Register as a Writer/Reader</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-7 w-full">
        <div className="flex gap-5 w-full justify-center items-center">
          {/* First name */}
          <label
            htmlFor="firstname"
            className="flex flex-col text-sm font-[500] w-full"
          >
            First name
            <input
              type="firstname"
              id="firstname"
              className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
              value={register.firstname}
              onChange={handleChange}
              placeholder="John"
            />
          </label>
          {/* Last name */}
          <label
            htmlFor="lastname"
            className="flex flex-col text-sm font-[500] w-full"
          >
            Last name
            <input
              type="lastname"
              id="lastname"
              className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
              value={register.lastname}
              onChange={handleChange}
              placeholder="Doe"
            />
          </label>
        </div>
        {/* Joining as */}
        <label htmlFor="email" className="flex flex-col text-sm font-[500]">
          Email address
          <input
            type="email"
            id="email"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
            value={register.email}
            onChange={handleChange}
            placeholder="johndoe@email.com"
          />
        </label>
        {/* email */}
        <label htmlFor="email" className="flex flex-col text-sm font-[500]">
          Email address
          <input
            type="email"
            id="email"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
            value={register.email}
            onChange={handleChange}
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
            value={register.password}
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
        {/* confirm password */}
        <label
          htmlFor="password"
          className="flex flex-col text-sm font-[500] relative"
        >
          Confirm password
          <input
            type={password ? "password" : "text"}
            id="confirmPassword"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-2 shadow-sm shadow-gray-300"
            value={register.confirmPassword}
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
          Create account
        </button>
      </form>
    </div>
  );
};

export default Register;
