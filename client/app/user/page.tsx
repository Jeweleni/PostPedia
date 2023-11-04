'use client'
import React from 'react';
import UserProfile from './profile/UserProfile';
import UserHomePage from './profile/UserHomePage';
import Navbar from '../blog/components/navbar';
import Sidebar from '../blog/components/sidebar';
import withAuth from "../auth/hof/withAuth";


const UserProfilePage = () => {
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
      <UserProfile />
      
    </div>
    </div>
    </div>
  );
};

export default UserProfilePage;
