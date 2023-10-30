import React, { useState } from "react";

interface FeedTabsSectionProps {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
  }  

  const FeedTabsSection: React.FC<FeedTabsSectionProps> = ({
    setActiveTab,
    activeTab,
  }) => {
    const handleTabClick = (tabId: string) => {
      setActiveTab(tabId);
    };
  
  return (
    <div className="w-fit h-auto p-5 ml-5 rounded-lg border border-stone-300 justify-start items-center inline-flex">
      <div className="w-full self-stretch justify-start items-start gap-60 inline-flex">
        <div
          className={`flex-col justify-start items-start gap-4 inline-flex ${
            activeTab === "for-you" ? "text-indigo-600" : ""
          }`}
          onClick={() => handleTabClick("for-you")}
        >
          <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
            For You
          </div>
          <div className="w-[84px] h-1.5 bg-indigo-600"></div>
        </div>

        <div
          className={`flex-col justify-start items-start gap-4 inline-flex ${
            activeTab === "featured" ? "text-indigo-600" : ""
          }`}
          onClick={() => handleTabClick("for-you")}
        >
          <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
            Featured
          </div>
          <div className="w-[84px] h-1.5 bg-indigo-600"></div>
        </div>

        <div
          className={`flex-col justify-start items-start gap-4 inline-flex ${
            activeTab === "recent" ? "text-indigo-600" : ""
          }`}
          onClick={() => handleTabClick("for-you")}
        >
          <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
            Recent
          </div>
          <div className="w-[84px] h-1.5 bg-indigo-600"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedTabsSection;
