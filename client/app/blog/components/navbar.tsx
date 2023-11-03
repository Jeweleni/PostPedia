"use client";
import Image from "next/image";
import React, { useState } from "react";
import userprofile from "../../../public/assets/userprofile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

type NavbarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Handle the search action based on the 'searchQuery' state
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="sticky top-0 left-0 bg-white z-10 w-full p-3 border h-[70px]">
      <div className="w-[90vw] md:max-w-[500px] lg:max-w-[700px] mx-auto flex justify-between items-center">
        <div className="rounded-lg border border-stone-300 w-5/12 items-start">
          <label className="text-zinc-600 text-lg flex justify-center items-center p-2 gap-2">
            <AiOutlineSearch className=" text-zinc-600 w-6 h-6" />
            <input
              type="text"
              placeholder="Search PostPedia"
              className="outline-none border-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </label>
        </div>
        <div className="flex gap-3 md:gap-5 justify-center items-center">
          <BiBell className="w-7 h-7 md:w-10 md:h-10" />
          <div className="w-7 h-7 md:w-10 md:h-10">
            <Image
              src={userprofile}
              className="w-full aspect-square rounded-full"
              alt="User Profile"
              width={0}
              height={0}
            />
          </div>
          <button
            className="w-7 h-7 md:w-10 md:h-10 md:hidden"
            onClick={() => setIsSidebarOpen((p) => !p)}
          >
            {isSidebarOpen ? (
              <AiOutlineClose className="w-full h-full" />
            ) : (
              <RxHamburgerMenu className="w-full h-full" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
