import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import ReactModal from "react-modal";
import "./modal.css";

interface User {
  image: string;
  firstname: string;
  lastname: string;
  username: string;
  followersCount: number;
  followingCount: number;
  about: string;
}

interface EditUserProfileModalProps {
  user: User;
  closeModal: () => void;
}

const EditUserProfileModal: React.FC<EditUserProfileModalProps> = ({
  user,
  closeModal,
}) => {
  const [editedUser, setEditedUser] = useState<User>({ ...user });

  const handleSave = () => {
    // Handle saving the edited information
    closeModal();
  };

  const handleEditUser = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Edit User Profile"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-4">Edit User Profile</h2>
        <Image
          src={editedUser.image}
          width={100}
          height={100}
          alt="User Profile Image"
          className="w-16 h-16 rounded-full"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={editedUser.username}
          onChange={handleEditUser}
          className="w-full border rounded p-2 mb-4"
        />
        <textarea
          name="about"
          placeholder="About"
          value={editedUser.about}
          onChange={handleEditUser}
          className="w-full border rounded p-2 mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-primary text-white px-3 py-1 rounded hover:bg-primary mr-2"
        >
          Save
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </ReactModal>
  );
};

export default EditUserProfileModal;
