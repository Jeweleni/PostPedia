"use client";
import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="md:flex md:justify-start md:items-start h-full w-full">
      {/* Sidebar component */}
      <div className="md:flex-[1] w-full border">
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>

      <div className="min-h-screen md:flex-[9] w-full">
        <div className="w-full">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <FeedPage />
        </div>
      </div>
    </div>
  );
};

export default Page;
