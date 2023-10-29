import heroBackground from "../public/assets/hero-background.png";
import aboutImg from "../public/assets/about-img.png";
import profilePic from "../public/assets/profile-pic.png";
import groupPic from "../public/assets/group-pic.png";
import analytics from "../public/assets/analytics.svg";
import interaction from '../public/assets/interaction.svg';
import content from '../public/assets/content.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full h-[800px] ">
        <Image
          src={heroBackground}
          alt='hero-background'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12">
          <div className="text-left">
            <h1
              className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-12 md:leading-16 lg:leading-20 xl:leading-24"
            >
              Welcome to PostPedia: A Haven for Text-Based Content
            </h1>
            <p
              className="text-white font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14 mt-[24px]"
            >
              Unleash the Power of Words, Connect with Like-minded Readers and Writers
            </p>
            <button
              className="text-white font-bold text-base px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-200 focus:outline-none w-[160px] mt-[36px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-center w-full md:w-[95%] mt-8 md:my-24 mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 mx-4 md:mx-0">
          <h2 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-4 md:mb-6">
            About PostPedia
          </h2>
          <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9">
            PostPedia is a multi-functional platform where authors and readers can have access to their own content.
            It aims to be a traditional bookworm’s heaven and a blog to get access to more text-based content.
            Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage
            open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs.
            By promoting dialogue and understanding, we strive
          </p>
        </div>
        <div>
          <Image
            src={aboutImg}
            alt='about-postpedia-image'
            className="w-600 md:w-200 h-500 rounded-8"
          />
        </div>
      </section>
      {/* WHY JOIN US SECTION */}
      <section className="my-[50px]">
        <div className="text-center w-[75%] mx-auto mt-10">
          <h2 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-4 md:mb-6">
            Why you should join PostPedia
          </h2>
          <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9 text-left">
            Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions,
            connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people
          </p>

          <div className="text-left flex flex-wrap justify-between items-center mx-auto">
            <div className="w-72 h-80 p-4 border border-gray-300 rounded-lg my-[30px]">
              <Image
                src={analytics}
                alt='analytics image'
              />
              <h3 className="text-black text-base md:text-lg font-medium my-[12px]">Analytics</h3>
              <p className="text-[#626262] text-base font-normal leading-6">
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of time
              </p>
            </div>

            <div className="w-72 h-80 p-4 border border-gray-300 rounded-lg my-[30px]">
              <Image
                src={interaction}
                alt='analytics image'
              />
              <h3 className="text-black text-base md:text-lg font-medium my-[12px]">Social interactions</h3>
              <p className="text-[#626262] text-base font-normal leading-6">
                Users on the platform can interact with posts they like, comment and engage in discussions
              </p>
            </div>

            <div className="w-72 h-80 p-4 border border-gray-300 rounded-lg my-[30px]">
              <Image
                src={content}
                alt='analytics image'
              />
              <h3 className="text-black text-base md:text-lg font-medium my-[12px]">Content creation</h3>
              <p className="text-[#626262] text-base font-normal leading-6">
                Write nice and appealing with our in-built markdown, a rich text editor
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* REVIEW SECTION */}
      <section className="bg-rgba-50">
        <div className="flex justify-between items-center px-20 py-20">
          <div>
            <Image
              src={profilePic}
              alt='profile-pic'
            />
          </div>
          <div className="w-[70%]">
            <q className="text-black text-base font-normal leading-6">
              PostPedia has become an integral part of my online experience. As a user of this
              incredible blogging platform, I have discovered a vibrant community of
              individuals who are passionate about sharing their ideas and engaging in
              thoughtful discussions.
            </q>
            <h3
              className="text-black text-xl font-semibold leading-9 mt-[48px] mb-[24px]"
            >
              Adebobola Muhydeen, 
              <span
                className="text-black font-body text-base font-normal leading-6"
              >
                Software developer at Apple
              </span>
            </h3>
            <button
              className="text-white font-bold text-base px-4 py-2 rounded-lg 
             bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-200 
              focus:outline-none w-[160px]"
            >
              Join PostPedia
            </button>
          </div>
        </div>
      </section>
      {/* REVIEW SECTION */}
      <section >
        <div className="flex justify-between items-start w-[68%] mx-auto py-[96px]">
          <div>
            <Image
              src={ groupPic }
              alt='group-pic'
            />
          </div>
          <div className="w-[700px]">
            <h2 className="text-black text-4xl font-bold leading-10">
              Write, read and connect with great minds on PostPedia
            </h2>
            <p className="text-black text-base font-normal leading-6 mt-[24px]">
              Share people your great ideas, and also read write-ups based on your interests. 
              connect with people of same interests and goals  
            </p>
            <button
              className="text-white font-bold text-base px-4 py-2 rounded-lg 
             bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-200 
              focus:outline-none w-[160px] mt-[32px]"
            >
              Get started
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
