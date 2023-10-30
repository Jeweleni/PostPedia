'use client'
import React, { useState } from "react";
import FeedTabsSection from "./FeedTabsSection";

const FeedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="w-fit h-auto relative border border-stone-300 p-3">
      <div className="p-6 w-fit gap-80 inline-flex justify-start items-center ">
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-black text-[32px] font-medium font-['DM Sans'] leading-[48px]">
            FEED
          </div>
          <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
            Explore different content you’d love
          </div>
        </div>
        <div className="w-[177px] px-4 py-2 rounded-lg justify-center items-center gap-2 flex">
          <div className="w-6 h-6 relative">
            <div className="w-[19.80px] h-[19.80px] left-[2.66px] top-[1.95px] absolute"></div>
          </div>
          <div className="text-white text-base font-bold font-['DM Sans'] leading-normal">
            Post a content
          </div>
        </div>

        
      </div>
      <FeedTabsSection setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* Content for "For You" section */}
        {activeTab === "for-you" && <div id="for-you" className="">For You content</div>}

        {/* Content for "Featured" section */}
        {activeTab === "featured" && <div id="featured">Featured content</div>}

        {/* Content for "Recent" section */}
        {activeTab === "recent" && <div id="recent">Recent content</div>}
    </div>
  );
};

export default FeedPage;
