import React from "react";
import PostCard from "../../../(components)/navigation/PostCard";
import ForYouPage from "../../pages/ForYou";

const PostsAnalytics: React.FC = () => {
  return (
    <>
      <div className="p-6 w-fit h-auto flex-col justify-start items-start gap-6 flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-black text-[32px] font-medium font-['DM Sans'] leading-[48px]">
                  Posts analytics
                </div>
                <div>
                  <span className="text-black text-[32px] font-medium font-['DM Sans'] leading-[48px]">
                    May 2023,{" "}
                  </span>
                  <span className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">
                    25 days so far
                  </span>
                </div>
              </div>
              <div className="w-fit h-auto bg-indigo-500"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[13px] flex">
              <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
                Posts highlights
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="text-black text-[32px] font-medium font-['DM Sans'] leading-[48px]">
                  Top posts
                </div>
                <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
                  earned 2980 impressions
                </div>
              </div>
            </div>
            <PostCard
              id={"1"}
              name={"John Doe"}
              role={"Author"}
              date={"Jun 2021"}
              title={
                "How to build a website with React, Tailwind CSS, and Next.js"
              }
              readTime={"5 min"}
              content={"Lorem ipsum dolor sit amet"}
              comments={10}
              likes={100}
              views={1000}
              image={""}
            />
          </div>
        </div>
        <div className="h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-base font-bold font-['DM Sans'] leading-normal">
            View post activity
          </div>
        </div>

        <div className="flex-col justify-center items-start gap-3 flex p-6">
          <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
            Posts summary
          </div>
          <div className="text-zinc-600 text-lg font-normal font-['DM Sans'] leading-[27px]">
            May 2023 summary
          </div>

          <div className="w-fit h-auto bg-indigo-500"></div>

          <div className="justify-start items-start gap-[118px] inline-flex">
            <div className="flex-col justify-start items-center inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">
                Posts
              </div>
              <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
                3
              </div>
            </div>
            <div className="flex-col justify-start items-center inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">
                Posts Impressions
              </div>
              <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
                2.98k views
              </div>
            </div>
          </div>

          <div className="justify-start items-start gap-[43px] inline-flex">
            <div className="flex-col justify-start items-center inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">
                Profile visits
              </div>
              <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
                300
              </div>
            </div>
            <div className="flex-col justify-start items-center inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['DM Sans'] leading-9">
                New followers
              </div>
              <div className="text-black text-2xl font-medium font-['DM Sans'] leading-9">
                300
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsAnalytics;
