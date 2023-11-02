"use client";
import React from "react";
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

type Props = {
  isSidebarOpen: boolean;
};

const Sidebar = ({ isSidebarOpen }: Props) => {
  const router = useRouter();

  const isActive = (route: string) => {
    // return router.pathname === route ? "text-green-300" : "text-black";
  };

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  const feedLinks = [
    {
      name: "Feed",
      icon: <MdOutlineDynamicFeed />,
      route: "/feed",
    },
    {
      name: "Bookmarks",
      icon: <BsBookmarks />,
      route: "/bookmarks",
    },
    {
      name: "Team blogs",
      icon: <AiOutlineTeam />,
      route: "/teamblogs",
    },
    {
      name: "Drafts",
      icon: <MdOutlineDrafts />,
      route: "/drafts",
    },
    {
      name: "Analytics",
      icon: <MdOutlineAnalytics />,
      route: "/analytics",
    },
  ];

  const tags = [
    { name: "Programming" },
    { name: "Data science" },
    { name: "Technology" },
    { name: "Machine learning" },
    { name: "Politics" },
  ];

  return (
    <>
      <div
        className={`w-[min(80vw,300px)] border p-3 md:block ${
          isSidebarOpen
            ? "block md:static fixed bg-white z-50 h-full md:h-auto overflow-auto "
            : "hidden"
        }`}
      >
        <div className="text-primary text-[32px] font-medium mb-2 text-left p-3">
          POSTPEDIA
        </div>
        <div className="text-left items-center ml-3">
          <div className="text-black text-lg font-normal leading-[27px] mb-4  p-2">
            Overview
          </div>
          <ul className="ml-6 text-gray-600">
            {feedLinks.map((link) => (
              <li
                key={link.name}
                className={` hover:text-green-800 flex items-center mb-3 cursor-pointer ${isActive(
                  link.route
                )}`}
                onClick={() => handleNavigate(link.route)}
              >
                <div className=" w-6 mr-2">{link.icon}</div>
                {link.name}
              </li>
            ))}
          </ul>
          <div className="w-[179px] h-[41px] justify-start items-center gap-3 inline-flex my-4  p-2">
            <div className="text-neutral-900 text-lg font-normal leading-[27px]">
              Trending Tags
            </div>
            <div className="w-6 relative">
              <HiArrowTrendingUp />
            </div>
          </div>
          <ul className=" text-gray-600 ml-6">
            {tags.map((tag) => (
              <li key={tag.name} className="flex items-center mb-3">
                {tag.name}
              </li>
            ))}

            <li className="flex items-center mb-3 text-indigo-600 cursor-pointer">
              See all
            </li>
          </ul>

          <div className="text-black text-lg font-normal mt-4 text-left p-2">
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

          <div className="text-red-600 text-lg font-normal mt-4 cursor-pointer ml-6">
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
