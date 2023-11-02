"use client";
import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";

const Page = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar component */}
      <Sidebar />

      <div className="w-full h-full">
        {/* Navbar component */}
        <Navbar />

        {
          /* Your feed content goes here */
          <FeedPage />
        }
      </div>
    </div>
  );
};

export default Page;
