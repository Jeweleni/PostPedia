"use client";
import React from "react";
import { BiShow } from "react-icons/bi";
import { PiEyeClosedBold} from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

type Props = {
  setOtp: React.Dispatch<React.SetStateAction<boolean>>;
  setRegister: React.Dispatch<
    React.SetStateAction<{
      firstname: string;
      lastname: string;
      email: string;
      password: string;
      confirmPassword: string;
    }>
  >;
  register: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Register = ({
  handleRegister,
  setRegister,
  register,
  setSelected,
}: Props) => {
  const [password, setPassword] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleSelected = (value: any) => {
    setSelected(value);
  };

  const toggleVisible = () => {
    setPassword(!password);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-lg font-semibold mb-5 text-center">
        Register as a Writer/Reader
      </h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-6 w-full">
        <div className="flex justify-between items-center">
          {/* First name */}
          <label
            htmlFor="firstname"
            className="flex flex-col text-sm font-[500] w-[47%]"
          >
            First name
            <input
              type="firstname"
              id="firstname"
              className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-1 shadow-sm shadow-gray-300"
              value={register.firstname}
              onChange={handleChange}
              placeholder="John"
            />
          </label>
          {/* Last name */}
          <label
            htmlFor="lastname"
            className="flex flex-col text-sm font-[500] w-[47%]"
          >
            Last name
            <input
              type="lastname"
              id="lastname"
              className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-1 shadow-sm shadow-gray-300"
              value={register.lastname}
              onChange={handleChange}
              placeholder="Doe"
            />
          </label>
        </div>
        {/* Joining as */}
        <div className="w-full">
          <p className="text-sm font-[500]">You are joining as?</p>
          <div className="relative w-full h-[50px]">
            <select
              className="w-full p-2.5 text-gray-500 bg-white outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-1 shadow-sm shadow-gray-300"
              defaultValue={"writer"}
              onChange={(e) => handleSelected(e.target.value)}
            >
              <option value="writer">Writer</option>
              <option className="reader">Reader</option>
            </select>
          </div>
        </div>
        {/* email */}
        <label htmlFor="email" className="flex flex-col text-sm font-[500]">
          Email address
          <input
            type="email"
            id="email"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-1 shadow-sm shadow-gray-300"
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
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-1 shadow-sm shadow-gray-300"
            value={register.password}
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
        {/* confirm password */}
        <label
          htmlFor="password"
          className="flex flex-col text-sm font-[500] relative"
        >
          Confirm password
          <input
            type={password ? "password" : "text"}
            id="confirmPassword"
            className="outline-0 border border-gray-400 border-opacity-40 rounded-lg h-[50px] px-3 mt-1 shadow-sm shadow-gray-300"
            value={register.confirmPassword}
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
          Create account
        </button>
        <button className="flex justify-center items-center gap-3 h-[50px] text-primary rounded-lg font-semibold border-primary border-2 duration-200 transition-all hover:bg-primary hover:bg-opacity-10">
          <FcGoogle className="text-[24px]" />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
