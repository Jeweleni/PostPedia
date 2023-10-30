"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdOutlineAnalytics,
  MdOutlineDrafts,
  MdOutlineDynamicFeed,
} from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineBell, AiOutlineTeam } from "react-icons/ai";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";

// interface SidebarProps {
//     isSidebarOpen: boolean;
//     setIsSidebarOpen: (isOpen: boolean) => void;
//   }

const Sidebar = () => {
  // State for sidebar open/close

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const router = useRouter();

  console.log(router);
  const isActive = (route: string) => {
    // return router.pathname === route ? "text-green-300" : "text-black";
  };

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <div className={`w-[268px] relative border p-3`}>
        <div className="text-primary text-[32px] font-medium font-['DM Sans'] mb-2 text-left p-3">
          POSTPEDIA
        </div>
        <div className="text-left items-center ml-3">
          {/* <div className="text-black text-lg font-normal mb-4 text-left p-2">
          Overview
        </div> */}
          <div className="text-black text-lg font-normal font-['DM Sans'] leading-[27px] mb-4  p-2">
            Overview
          </div>
          <ul className="ml-6 text-gray-600">
            <li
              className={` hover:text-green-800 flex items-center mb-3 cursor-pointer ${isActive(
                "/"
              )}`}
              onClick={() => handleNavigate("/feed")}
            >
              <div className=" w-6 mr-2">
                <MdOutlineDynamicFeed />
              </div>
              Feed
            </li>
            <li
              className={`hover:text-green-800 flex items-center mb-2 cursor-pointer ${isActive(
                "/bookmarks"
              )}`}
              onClick={() => handleNavigate("/bookmarks")}
            >
              <div className="w-6 mr-2">
                <BsBookmarks />
              </div>
              Bookmarks
            </li>
            <li
              className={`hover:text-green-800 flex items-center mb-3 cursor-pointer ${isActive(
                "/teamblogs"
              )}`}
              onClick={() => handleNavigate("/teamblogs")}
            >
              <div className="w-6 mr-2">
                <AiOutlineTeam />
              </div>
              Team blogs
            </li>
            <li
              className={`hover:text-green-800 flex items-center mb-3 cursor-pointer ${isActive(
                "/drafts"
              )}`}
              onClick={() => handleNavigate("/drafts")}
            >
              <div className="w-6 mr-2">
                <MdOutlineDrafts />
              </div>
              Drafts
            </li>
            <li
              className={`hover:text-green-800 flex items-center mb-3 cursor-pointer ${isActive(
                "/analytics"
              )}`}
              onClick={() => handleNavigate("/analytics")}
            >
              <div className="w-6 mr-2">
                <MdOutlineAnalytics />
              </div>
              Analytics
            </li>
          </ul>

          {/* <div className="text-black text-lg font-normal font-['DM Sans'] my-4 text-left p-2">
          Trending Tags <HiArrowTrendingUp />
        
        </div> */}
          <div className="w-[179px] h-[41px] justify-start items-center gap-3 inline-flex my-4  p-2">
            <div className="text-neutral-900 text-lg font-normal font-['DM Sans'] leading-[27px]">
              Trending Tags
            </div>
            <div className="w-6 relative">
              <HiArrowTrendingUp />
            </div>
          </div>
          <ul className=" text-gray-600 ml-6">
            <li className="flex items-center mb-3">Programming</li>
            <li className="flex items-center mb-3">Data science</li>
            <li className="flex items-center mb-3">Technology</li>
            <li className="flex items-center mb-3">Machine learning</li>
            <li className="flex items-center mb-3">Politics</li>
            <li className="flex items-center mb-3 text-indigo-600 cursor-pointer">
              See all
            </li>
          </ul>

          <div className="text-black text-lg font-normal font-['DM Sans'] mt-4 text-left p-2">
            Personal
          </div>
          <ul className="ml-6 text-gray-600">
            <li
              className={`flex items-center mb-3 cursor-pointer ${isActive(
                "/personal/account"
              )}`}
              onClick={() => handleNavigate("/personal/account")}
            >
              <div className="w-6 mr-2">
                <BiUser />
              </div>
              Account
            </li>
            <li
              className={`flex items-center mb-3 cursor-pointer ${isActive(
                "/personal/notification"
              )}`}
              onClick={() => handleNavigate("/personal/notification")}
            >
              <div className="w-6 mr-2">
                <AiOutlineBell />
              </div>
              Notifications
            </li>
          </ul>

          <div className="text-red-600 text-lg font-normal font-['DM Sans'] mt-4 cursor-pointer ml-6">
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
