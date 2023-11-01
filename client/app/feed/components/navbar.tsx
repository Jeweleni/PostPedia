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

      <div className="w-full h-fit self-stretch p-3 border border-stone-300 items-center inline-flex justify-center gap-80">
        {/* {isSidebarOpen ? ( // Check if the sidebar is open */}
  
          <div className="rounded-lg border border-stone-300 w-5/12 items-start">
            <div className="p-2 justify-start items-start gap-2 flex">
              <AiOutlineSearch className=" text-zinc-600 w-6 h-6"/>
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
          <div className="self-stretch gap-5 inline-flex mr-3">
            <div className="w-10 h-10 relative font-light">
              <AiOutlineBell className="w-10 h-10" />
            </div>
            <div className="w-10 h-10 relative">
              <div className="bg-zinc-300 rounded-full">
                <Image
                  src={userprofile}
                  className="w-10 h-10 rounded-full"
                  alt="User Profile"
                  width={52.68}
                  height={51.34}
                />
              </div>
            </div>
          </div>
          </div>
 
    );
  };
  
  export default Navbar;
