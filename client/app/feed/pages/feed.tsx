"use client";
import React, { useState } from "react";
import FeedTabsSection from "./FeedTabsSection";
import { FiEdit2 } from "react-icons/fi";
import ForYouPage from "./ForYou";

const FeedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="p-6 flex justify-between w-full h-[calc(100svh-70px)] overflow-auto ">
      <div className=" w-full ">
        <div className="p-6 w-[min(1000px,70vw)] mx-auto flex flex-col justify-center items-center gap-5">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-black text-[32px] font-medium">FEED</h1>
              <h3 className="text-zinc-600 text-lg font-normal">
                Explore different content you&apos;d love
              </h3>
            </div>
            <button className="main-btn border-primary min-w-fit bg-primary rounded-lg items-center gap-3 flex text-white text-base font-bold p-4 py-3 hover:text-primary hover:border-primary duration-100">
              <FiEdit2 />
              Post a content
            </button>
          </div>

          <>
            <FeedTabsSection
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </>
          <div className="w-full">
            {activeTab === "for-you" && (
              <div className="p-6 rounded-lg border border-stone-300">
                <ForYouPage id={"for-you"} />
              </div>
            )}

            {activeTab === "featured" && (
              <div
                id="featured"
                className="w-fit h-auto relative rounded-lg border border-stone-300 p-6"
              >
                Featured content
              </div>
            )}

            {activeTab === "recent" && (
              <div
                id="recent"
                className="w-fit h-auto relative rounded-lg border border-stone-300 p-6"
              >
                Recent content
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
