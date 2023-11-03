"use client";
import React, { useRef } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { CiImageOff, CiImageOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { FcAddImage } from "react-icons/fc";
import Image from "next/image";

type Props = {
  setCreatePost: (value: boolean) => void;
};

type error = {
  title: boolean;
  description: boolean;
  state: boolean;
};

const CreatePost = ({ setCreatePost }: Props) => {
  const [showIcons, setShowIcons] = React.useState(false);
  const [addImage, setAddImage] = React.useState(false);
  const [image, setImage] = React.useState<null | string>(null);
  const [error, setError] = React.useState<error>({
    title: false,
    description: false,
    state: false,
  });
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const items = [
    {
      id: 2,
      item: (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          exit={{ opacity: 0, x: 10 }}
          className="grid place-content-center aspect-square rounded-full border border-primary p-1 text-primary cursor-pointer"
          onClick={
            addImage
              ? () => {
                  setAddImage(false);
                  image && setImage(null);
                }
              : () => setAddImage(true)
          }
        >
          {addImage ? <CiImageOff /> : <CiImageOn />}
        </motion.span>
      ),
    },
  ];

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const image = URL.createObjectURL(file);
      setImage(image);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (title === "") {
      setError((p) => ({ ...p, title: true, state: true }));
      return;
    }
    if (description === "") {
      setError((p) => ({ ...p, description: true, state: true }));
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-center bg-white w-full h-full border rounded-lg p-4"
    >
      {/* buttons */}
      <div className="flex justify-between items-center mb-3 w-full">
        <button
          onClick={() => setCreatePost(false)}
          className="px-4 py-2 border border-primary min-w-fit bg-white rounded-lg justify-center items-center flex text-primary text-base font-bold hover:bg-primary hover:bg-opacity-40 duration-100 mt-4"
        >
          <MdOutlineKeyboardBackspace />
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-primary min-w-fit bg-primary rounded-lg justify-center items-center flex text-white text-base font-bold hover:text-primary hover:border-primary hover:bg-white duration-100 mt-4"
        >
          Publish
        </button>
      </div>

      {/* inputs */}
      <div className="flex justify-start items-start w-full h-full border rounded-lg py-5 px-4">
        {/* icons */}
        <div className="flex flex-col gap-2 py-4">
          <span
            onClick={() => setShowIcons((p) => !p)}
            className="grid place-content-center aspect-square rounded-full border p-1 text-gray-400 cursor-pointer"
          >
            <IoIosAdd className="text-2xl text-gray-400" />
          </span>
          {showIcons && items.map((item) => item.item)}
        </div>
        {/* form */}
        <div className="flex w-full h-full flex-col justify-between items-center gap-2 md:gap-5 p-4">
          <input
            id="title"
            value={title}
            onChange={(e) => {
              setError((p) => ({ ...p, title: false, state: false }));
              setTitle(e.target.value);
            }}
            placeholder="Title"
            className={`w-full h-[50px] outline-none ring-0 text-2xl font-bold text-primary rounded-lg py-2 px-4 capitalize ${
              error.state && error.title
                ? "bg-red-100 border-red-500 border-2"
                : "bg-gray-400 bg-opacity-10"
            }`}
          />
          <textarea
            id="description"
            value={description}
            placeholder="Write a post........."
            onChange={(e) => {
              setError((p) => ({ ...p, description: false, state: false }));
              setDescription(e.target.value);
            }}
            className={`flex flex-wrap w-full overflow-y-auto flex-[4] break-all break-words outline-none text-sm text-gray-500 rounded-lg overflow-x-hidden p-4 capitalize overscroll-y-contain resize-none ${
              error.state && error.description
                ? "bg-red-50 border-red-500 border-2"
                : "bg-gray-400 bg-opacity-10"
            }`}
            data-placeholder="Write a post........."
          />
          {addImage && (
            <div className="relative w-full flex-[3] outline-none ring-0 text-2xl font-bold text-primary bg-gray-400 bg-opacity-10 rounded-lg p-2 select-none">
              {image ? (
                <Image
                  src={image ? image : ""}
                  width={0}
                  height={0}
                  alt="placeholder"
                  className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover object-center rounded-lg"
                />
              ) : (
                <label
                  htmlFor="image"
                  className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer"
                >
                  <FcAddImage className="text-gray-400 text-6xl" />
                  <input
                    id="image"
                    onChange={handleImage}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              )}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
