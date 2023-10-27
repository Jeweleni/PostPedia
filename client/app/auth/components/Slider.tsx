import React from "react";

const Slider = ({ auth, toggleAuth, toggle }: any) => {
    const toggleClass = "transform translate-x-[100%]";

  return (
    <div className="flex justify-between w-full flex-col gap-2 mb-5">
      <div className="flex justify-between items-center w-full">
        <h1
          className={
            "text-2xl font-semibold cursor-pointer" +
            (auth === "login" ? " text-primary" : " text-gray-400")
          }
          onClick={() => {
            toggleAuth();
          }}
        >
          Login
        </h1>
        <h1
          className={
            "text-2xl font-semibold cursor-pointer" +
            (auth === "signup" ? " text-primary" : " text-gray-400")
          }
          onClick={() => {
            toggleAuth();
          }}
        >
          Register
        </h1>
      </div>
      <div
        onClick={() => {
          toggleAuth();
        }}
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="w-full h-2 flex items-center bg-gray-400 cursor-pointer">
          <div
            className={
              "bg-primary h-2 w-6/12 transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
