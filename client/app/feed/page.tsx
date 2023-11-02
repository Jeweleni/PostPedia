"use client";
import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="flex h-full">
      {/* Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="w-full h-full">
        {/* Navbar component */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {
          /* Your feed content goes here */
          <FeedPage />
        }
      </div>
    </div>
  );
};

export default Page;
