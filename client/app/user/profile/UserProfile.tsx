import React, { useState } from 'react';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import userprofile from '../../../public/assets/userprofile.png';
import UserHomePage from './UserHomePage';
import { FiEdit2 } from 'react-icons/fi';
import EditUserProfileModal from './Edit-Profile';

interface User {
  image: string;
  firstname: string;
  lastname: string;
  username: string;
  followersCount: number;
  followingCount: number;
  about: string;
}

const UserProfile: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user, setUser] = useState<User>({
    image: '/userprofile',
    firstname: 'John',
    lastname: 'Doe',
    username: 'john_doe',
    followersCount: 1000,
    followingCount: 500,
    about: 'Passionate about technology and blogging!',
  });

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 relative rounded-full overflow-hidden">
          <Image
            src={userprofile}
            className="w-full aspect-square rounded-full"
            alt="User Profile"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-2xl font-semibold ml-4">
          {user.username}
          <FiEdit2 onClick={openEditModal} className="cursor-pointer ml-2" />
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
        <p className="text-gray-600 mb-2">{user.about}</p>
      </div>
      <div>
       
      </div>

      {isEditModalOpen && (
        <EditUserProfileModal
          user={user}
          closeModal={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
