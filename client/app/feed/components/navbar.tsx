'use client';
import Image from "next/image";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import userprofile from "../../../public/assets/userprofile.png";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

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
      <div className="w-full h-fit self-stretch p-2 border border-stone-300 justify-end items-start gap-[189px] inline-flex">
        {isSidebarOpen ? ( // Check if the sidebar is open
          // Show only the search bar when the sidebar is open
          <div className="w-fit self-stretch rounded-lg border border-stone-300 justify-start items-center gap-6 inline-flex">
            <div className="px-3 py-2 justify-center items-center gap-2 flex">
              <AiOutlineSearch />
              <span className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
                <input
                  type="text"
                  placeholder="Search PostPedia"
                  className="outline-none border-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </span>
            </div>
          </div>
        ) : (
          // Show User Profile Image and notifications when the sidebar is closed
          <div className="self-stretch justify-end gap-5 inline-flex mr-2">
            <div className="w-12 h-12 relative font-light">
              <AiOutlineBell className="w-12 h-12" />
            </div>
            <div className="w-12 h-12 relative">
              <div className="bg-zinc-300 rounded-full">
                <Image
                  src={userprofile}
                  className="w-12 h-12 rounded-full"
                  alt="User Profile"
                  width={52.68}
                  height={51.34}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Navbar;
