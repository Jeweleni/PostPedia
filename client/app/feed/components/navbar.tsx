"use client";
import Image from "next/image";
import React, { useState } from "react";
import userprofile from "../../../public/assets/userprofile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBell } from "react-icons/bi";

// interface NavbarProps {
//     isSidebarOpen: boolean; // Add this prop
//   }

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Handle the search action based on the 'searchQuery' state
    console.log("Searching for:", searchQuery);
  };

  const isSidebarOpen = false;

  return (
    <div className="sticky top-0 left-0 bg-white z-10 w-full p-3 border h-[70px]">
      <div className="w-[min(1000px,70vw)] mx-auto flex justify-between items-center">
        <div className="rounded-lg border border-stone-300 w-5/12 items-start">
          <div className="p-2 justify-start items-start gap-2 flex">
            <AiOutlineSearch className=" text-zinc-600 w-6 h-6" />
            <span className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
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
            </span>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center mr-3">
          <BiBell className="text-4xl" />
          <div className="w-10 h-10 relative">
            <Image
              src={userprofile}
              className="w-full aspect-square rounded-full"
              alt="User Profile"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
