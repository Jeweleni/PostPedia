import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/profile.png";
import post from "../../../public/assets/post.png";
import { AiOutlineComment } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";

interface ForYouPageProps {
  id: string;
}

const ForYouPage: React.FC<ForYouPageProps> = ({ id }) => {
  return (
    <div id={id} className="w-full">
      {/* User's Profile */}
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex gap-3 justify-start items-center w-full">
          <Image
            className="w-24 h-24 rounded-full object-cover object-center"
            src={profile}
            alt="Author"
          />

          <div className="flex flex-col">
            <h2 className="text-black text-2xl font-medium">Grace Ikpang</h2>
            <div className="flex gap-2">
              <p className="text-zinc-600 text-lg">Product designer.</p>
              <p className="text-zinc-600 text-lg">May 23rd, 2023.</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <p className="text-black text-2xl font-semibold">
          The Impact of social media on Political discourse
        </p>
        <div className="flex gap-2 justify-start items-center text-zinc-600">
          <VscBook /> 10 mins read
        </div>
        <p className="text-zinc-600">
          In the era of digital communication, social media platforms have
          become pervasive in our daily lives, revolutionizing the way we
          connect, share information, and engage with the world.
        </p>
        <div className="w-full bg-stone-300 rounded-lg">
          <Image
            className="w-full object-center object-cover rounded-lg"
            src={post}
            alt="Article"
          />
        </div>

        {/* Article Stats */}
        <div className="w-full flex justify-between items-center gap-5">
          <div className="flex justify-center items-center gap-1">
            <AiOutlineComment />
            <p className="text-zinc-600">200</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <BiLike />
            <p className="text-zinc-600">120</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <BsActivity />
            <p className="text-zinc-600"> 2980 views</p>
          </div>
        </div>
      </div>
      {/* <hr className="my-5" /> */}
    </div>
  );
};

export default ForYouPage;
