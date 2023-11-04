'use client'
import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";
import withAuth from "../auth/hof/withAuth";

const Page = () => {
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

          <FeedPage />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
