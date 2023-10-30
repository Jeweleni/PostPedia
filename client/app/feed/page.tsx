import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FeedPage from "./pages/feed";

// interface PageProps {
//   isSidebarOpen: boolean;
//   setIsSidebarOpen: (isOpen: boolean) => void;
// }

const Page = () => {
  return (
    <div className="flex">
      {/* Sidebar component */}
      <Sidebar />

      <div className="w-full">
        {/* Navbar component */}
        <Navbar/>


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
