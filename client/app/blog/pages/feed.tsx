"use client";
import React, { useState } from "react";
import FeedTabsSection from "./FeedTabsSection";
import { FiEdit2 } from "react-icons/fi";
import ForYouPage from "./ForYou";
import CreatePost from "../components/createPost";

const FeedPage = () => {
  const [activeTab, setActiveTab] = useState("for-you");
  const [createPost, setCreatePost] = useState(false);

  return (
      <div className="p-4 flex justify-between w-full h-[calc(100svh-100px)] overflow-auto no-scrollbar mb-5">
        <div className="w-[90vw] md:max-w-[500px] lg:max-w-[700px] mx-auto my-4">
          {createPost ? (
            <CreatePost setCreatePost={setCreatePost} />
          ) : (
            <div className="p-4 md:p-6 border flex flex-col justify-center items-center gap-3 md:gap-5">
              <div className="flex md:justify-between md:items-end w-full md:gap-5 md:flex-row flex-col">
                <div className="flex flex-col justify-start items-start">
                  <h1 className="text-black text-lg md:text-[32px] font-bold md:font-medium">
                    FEED
                  </h1>
                  <h3 className="md:text-zinc-600 text-zinc-500 text-sm md:text-lg">
                    Explore different content you would love
                  </h3>
                </div>
                <button
                  onClick={() => setCreatePost(true)}
                  className="main-btn border-primary min-w-fit bg-primary rounded-lg items-center gap-3 flex text-white text-base font-bold hover:text-primary hover:border-primary duration-100 mt-4 h-auto p-3"
                >
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
                  <div className="md:p-6 p-4 rounded-lg border border-stone-300">
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
          )}
        </div>
      </div>
  );
};

export default FeedPage;
