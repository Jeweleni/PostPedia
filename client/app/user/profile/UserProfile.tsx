'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import userprofile from '../../../public/assets/userprofile.png';
import UserHomePage from './UserHomePage';
import { FiEdit2 } from 'react-icons/fi';
import { Button } from '@nextui-org/react';

const UserProfile: React.FC = () => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  // Replace the following data with actual user data
  const [user, setUser] = useState({
    firstname: 'john',
    lastname: 'doe',
    username: 'john_doe',
    followersCount: 1000,
    followingCount: 500,
    about: 'Passionate about technology and blogging!',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      // Handle file upload and set it as the user's image
      // Example: You can use a file input, FileReader, and update the user's image
    }
  };

  const handleAboutSave = () => {
    // Handle saving the edited "about" text
    // Update the user's about field
    setIsEditingAbout(false);
    // Example: You can make an API request to save the updated "about" text
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 relative rounded-full overflow-hidden">
          <Image
            src={userprofile}
            className="w-full aspect-square rounded-full"
            alt="User Profile"
            width={0}
            height={0}
          />
          {isEditingImage && (
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}
        </div>
        <h1 className="text-2xl font-semibold ml-4">
          {user.username}
          {isEditingAbout ? (
            <span className="text-gray-600 ml-2">Editing...</span>
          ) : (
            <Button
              onClick={() => setIsEditingAbout(true)}
              className="ml-2 hover:underline focus:outline-none"
            >
              <FiEdit2 />
            </Button>
          )}
        </h1>
      </div>
      <h2 className="p-2 flex text-xl">
        {user.firstname} {user.lastname}
      </h2>
      <div className="flex space-x-4 mb-4">
        <div className="flex items-center">
          <BiUser className="text-xl" />
          <span className="text-lg">{user.followersCount} Followers</span>
        </div>
        <div className="flex items-center">
          <BiUser className="text-xl" />
          <span className="text-lg">Following {user.followingCount}</span>
        </div>
      </div>
      <div>
        {isEditingAbout ? (
          <div className="mb-2">
            <textarea
              value={user.about}
              onChange={(e) => setUser({ ...user, about: e.target.value })}
              className="w-full border rounded p-2"
            ></textarea>
          </div>
        ) : (
          <p className="text-gray-600 mb-2">{user.about}</p>
        )}
        {isEditingAbout ? (
          <button
            onClick={handleAboutSave}
            className="bg-primary text-white px-3 py-1 rounded hover:bg-primary"
          >
            Save
          </button>
        ) : null}
      </div>
      <div>
        <UserHomePage />
      </div>
    </div>
  );
};

export default UserProfile;
