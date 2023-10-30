import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";

interface PageProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Page: React.FC<PageProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="flex">
      {/* Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="w-full">
        {/* Navbar component */}
        <Navbar isSidebarOpen={isSidebarOpen} />


        {/* Your feed content goes here */
        <div className="p-4">
          <FeedPage />
        </div>
        }
      </div>
    </div>
  );
};

export default Page;
