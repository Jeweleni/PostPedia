"use client";
import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import PostsAnalytics from "./posts/PostsAnalytics";

const Analytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="md:flex md:justify-start md:items-start h-full w-full">
      {/* Sidebar component */}
      <div className="flex-[1] border">
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>

      <div className="min-h-full flex-[9]">
        <div className="w-full ">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <PostsAnalytics />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
