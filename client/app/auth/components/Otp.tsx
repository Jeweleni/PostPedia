import React from "react";

const Otp = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Enter your OTP</h1>
      <form className="flex flex-col gap-5 w-full">
        <p className="text-gray-500 text-xs font-[500] opacity-80">
          We emailed you a code. Please input the code here for account
          verification
        </p>
        <div className="grid grid-cols-4 aspect-square max-h-[80px] gap-5">
          <input
            type="number"
            maxLength={1}
            max={1}
            className="border rounded-lg"
          />
          <input
            type="number"
            maxLength={1}
            max={1}
            className="border rounded-lg"
          />
          <input
            type="number"
            maxLength={1}
            max={1}
            className="border rounded-lg"
          />
          <input
            type="number"
            maxLength={1}
            max={1}
            className="border rounded-lg"
          />
        </div>
        <button className="h-[50px] bg-primary rounded-lg text-white border-primary border-2  hover:bg-white hover:text-primary hover:border-primary hover:border-2 duration-200 transition-all hover:font-semibold">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Otp;
