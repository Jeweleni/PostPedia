import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/profile.png";
import post from "../../../public/assets/post.png";
import { AiOutlineComment } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { VscBook } from 'react-icons/vsc';

const ForYouPage: React.FC = () => {
  return (
    <>
    <div className="w-fit h-auto relative rounded-lg border border-stone-300">
      {/* User's Profile */}
      <div className="p-6">
      <div className="flex flex-col items-start gap-3">
        <div className="w-24 h-24 relative">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image className="w-24 h-24" src={profile} alt="Author" />
          </div>
        </div>
        <span>
        <div className="w-[249px] text-black text-2xl font-medium font-['DM Sans'] leading-9">
          Grace Ikpang
        </div>
        <div className="flex gap-2">
          <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
            Product designer
          </div>
          <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
            .May 23rd, 2023
          </div>
          
        </div>
        </span>
      </div>

      {/* Article Content */}
      <div className="mt-6 text-black text-[32px] font-medium font-['DM Sans'] leading-[48px]">
        The Impact of social media on Political discourse
      </div>
      <div className="flex mt-2 justify-start items-center">
        <div className="w-6 relative"><VscBook/></div>
        <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">
          10 mins read
        </div>
      </div>
      <div className="w-[706px] mt-4 text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
        In the era of digital communication, social media platforms have become
        pervasive in our daily lives, revolutionizing the way we connect, share
        information, and engage with the world.
      </div>
      <div className="w-fit h-auto bg-stone-300 rounded-lg mt-6 overflow-hidden">
        <Image className="w-fit h-auto" src={post} alt="Article" />
      </div>

      {/* Article Stats */}
      <div className="p-2 w-full h-6 justify-start items-center inline-flex gap-32">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-6  relative">
            <AiOutlineComment />
          </div>
          <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">
            200
          </div>
        </div>
        <div className="justify-start items-center gap-3 flex">
        <div className="w-6  relative">
          <BiLike />
        </div>
        <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">
          120
        </div>
        </div>
        <div className="justify-start items-center gap-3 flex">
        <div className="w-6  relative">
          <BsActivity />
        </div>
        <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">
          2980 views
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default ForYouPage;
