'use client'
import React from "react";

interface FeedTabSectionProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const FeedTabSection: React.FC<FeedTabSectionProps> = ({ setActiveTab, activeTab }) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-fit h-auto rounded-lg border border-stone-300 justify-start items-center inline-flex">
      <div className="p-6 self-stretch justify-start items-start gap-60 inline-flex">
        
      <div
        onClick={() => handleTabClick("for-you")}
        className={`cursor-pointer  ${activeTab === "for-you" ? "border-b-2 border-primary" : ""}`}
      >
        For You
      </div>
      <div
        onClick={() => handleTabClick("featured")}
        className={`cursor-pointer  ${activeTab === "featured" ? "border-b-2 border-primary" : ""}`}
      >
        Featured
      </div>
      <div
        onClick={() => handleTabClick("recent")}
        className={`cursor-pointer  ${activeTab === "recent" ? "border-b-2 border-primary" : ""}`}
      >
        Recent
      </div>
    </div>
    </div>
  );
};

export default FeedTabSection;
