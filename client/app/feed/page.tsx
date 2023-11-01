'use client'
import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";

const Page = () => {
  return (
    
    <div className="flex">
      {/* Sidebar component */}
      <Sidebar />

      <div className="w-full">
        {/* Navbar component */}
        <Navbar/>


        {/* Your feed content goes here */
        <div className="p-6 w-full justify-center items-stretch">
          <FeedPage />
        </div>
        }
      </div>
    </div>

  );
};

export default Page;
