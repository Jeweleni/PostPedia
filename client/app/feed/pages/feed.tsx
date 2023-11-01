'use client'
import React, { useState } from "react";
import FeedTabsSection from "./FeedTabsSection";
import { Button } from "@nextui-org/react";
import { FiEdit2 } from 'react-icons/fi';
import ForYouPage from "./ForYou";

const FeedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="w-full h-auto rounded-lg border border-stone-300 justify-between items-center">
    <div className="p-6 justify-between w-full self-stretch">
    <div className="p-6 w-full h-auto relative border border-stone-300">
      <div className=" p-6 w-full gap-80 inline-flex justify-start items-center ">
        <div className="flex-col justify-start items-start gap-3 inline-flex p-6">
          <div className="text-black text-[32px] font-medium font-['DM Sans'] leading-[48px]">
            FEED
          </div>
          <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
            Explore different content you’d love
          </div>
        </div>
        {/* <div className="w-fit px-4 py-2 rounded-lg justify-center items-center gap-2 flex">
          <div className="w-6 h-6 relative">
          </div>
          <Button className="bg-primary text-white font-bold font-['DM Sans'] leading-normal ">
            Post a content
          </Button>
        </div> */}
        <div className="justify-between">
        <Button className="w-[177px] h-14 bg-primary rounded-lg items-center gap-2 inline-flex">
          <div className="w-6 h-6 relative">
            <div className="w-[19.80px] h-[19.80px] left-[2.66px] top-[1.95px] text-white absolute "><FiEdit2/></div>
          </div>
          <div className="text-white text-base font-bold font-['DM Sans'] leading-normal">
            Post a content
          </div>
        </Button>
        </div>
      </div>
      
    
   
    <div className="p-6">
    <FeedTabsSection setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
   <div className="p-6">
    {activeTab === "for-you" && (
      <div id="for-you" >
        <ForYouPage/>
      </div>
    )}

    {activeTab === "featured" && <div id="featured" className="w-fit h-auto relative rounded-lg border border-stone-300 p-6">Featured content</div>}

    {activeTab === "recent" && <div id="recent" className="w-fit h-auto relative rounded-lg border border-stone-300 p-6">Recent content</div>}
  </div>
  </div>
  </div>

  </div>
  );
};

export default FeedPage;
