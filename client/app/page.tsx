import heroBackground from "../public/assets/new-hero-section.jpg";
import aboutImg from "../public/assets/new-about-img.jpg";
import profilePic from "../public/assets/profile-pic.png";
import groupPic from "../public/assets/group-pic.png";
import analytics from "../public/assets/analytics.svg";
import interaction from "../public/assets/interaction.svg";
import content from "../public/assets/content.svg";
import Image from "next/image";
import { Header } from "./(components)/navigation/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="transition duration-300 ease-in-out">
        {/* HERO SECTION */}
        <section className="relative w-full h-[800px] ">
          <Image
            src={heroBackground}
            alt="hero-background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12">
            <div className="text-left">
              <h1 className="text-primary font-bold font-body text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-12 md:leading-16 lg:leading-20 xl:leading-24">
                Welcome to PostPedia: A Haven for Text-Based Content
              </h1>
              <p className="text-primary font-medium text-base font-body md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-9 lg:leading-12 xl:leading-14 mt-[24px]">
                Unleash the Power of Words, Connect with Like-minded Readers and
                Writers
              </p>
              <button className="main-btn">Get Started</button>
            </div>
          </div>
        </section>
        {/* ABOUT SECTION */}
        <section className="lg:flex lg:flex-row flex-col items-center justify-between w-[90%] mx-auto py-[90px]">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-black font-bold font-body text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-6 md:mb-8">
              About PostPedia
            </h2>
            <p className="text-black font-body text-base md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9">
              PostPedia is a multi-functional platform where authors and readers
              can have access to their own content. It aims to be a traditional
              bookworm’s heaven and a blog to get access to more text-based
              content. Our vision is to foster an inclusive and vibrant
              community where diversity is celebrated. We encourage
              open-mindedness and respect for all individuals, regardless of
              their backgrounds or beliefs. By promoting dialogue and
              understanding, we strive.
            </p>
          </div>
          <div className="lg:w-[40%] w-full mt-5 rounded-10">
            <Image
              src={aboutImg}
              alt="about-postpedia-image"
              className="rounded-10 mx-auto w-full object-cover"
            />
          </div>
        </section>
        {/* WHY JOIN US SECTION */}
        <section className="my-[50px]">
          <div className="text-center lg:w-[75%] px-5 mx-auto mt-10">
            <h2 className="text-black font-bold font-body text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-4 md:mb-6">
              Why you should join PostPedia
            </h2>
            <p className="text-black text-base font-body md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9 text-left ">
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>

            <div className="text-left flex flex-wrap justify-between items-center mt-[30px]">
              <div className="w-72 h-80 p-4 border border-gray-300 rounded-lg my-[30px] mx-auto gap-3">
                <Image src={analytics} alt="analytics image" />
                <h3 className="text-black font-body text-xl font-semibold leading-9 my-[12px]">
                  Analytics
                </h3>
                <p className="text-[#626262] font-body text-base font-normal leading-6">
                  Analytics to track the number of views, likes and comment and
                  also analyze the performance of your articles over a period of
                  time
                </p>
              </div>

              <div className="w-72 h-80 p-4 border border-gray-300 rounded-lg my-[30px] mx-auto">
                <Image src={interaction} alt="analytics image" />
                <h3 className="my-[12px] text-black font-body text-xl font-semibold leading-9">
                  Social interactions
                </h3>
                <p className="text-[#626262] font-body text-base font-normal leading-6">
                  Users on the platform can interact with posts they like,
                  comment and engage in discussions
                </p>
              </div>

              <div className="w-72 h-80 p-4 border border-gray-300 rounded-lg my-[30px] mx-auto">
                <Image src={content} alt="analytics image" />
                <h3 className="text-black font-body text-xl font-semibold leading-9 my-[12px]">
                  Content creation
                </h3>
                <p className="text-[#626262] font-body text-base font-normal leading-6">
                  Write nice and appealing with our in-built markdown, a rich
                  text editor
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* REVIEW SECTION */}
        <section className="bg-rgba-50">
          <div className="lg:flex lg:flex-row flex-col items-center justify-between lg:w-[85%] mx-auto px-5 py-20">
            <div className="lg:w-[30%] mb-4">
              <Image src={profilePic} alt="profile-pic" className="mx-auto" />
            </div>
            <div className="lg:w-[65%] w-80% sm:mt-[15px] lg:text-left sm:text-center">
              <q className="text-black text-base font-body md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9">
                PostPedia has become an integral part of my online experience.
                As a user of this incredible blogging platform, I have
                discovered a vibrant community of individuals who are passionate
                about sharing their ideas and engaging in thoughtful
                discussions.
              </q>
              <h3 className="text-black font-body text-xl font-medium leading-9 mt-[48px] mb-[24px]">
                Adebobola Muhydeen,
                <span className="text-black font-body text-base font-normal leading-6 ml-[5px]">
                  Software developer at Apple
                </span>
              </h3>
              <button className="secondary-btn">Join PostPedia</button>
            </div>
          </div>
        </section>
        {/* REVIEW SECTION */}
        <section className="lg:w-[70%] mx-auto">
          <div className="lg:flex lg:flex-row flex-col items-start justify-between px-[20px] py-[90px]">
            <div className="lg:w-[35%] w-[70%] mx-auto">
              <Image
                src={groupPic}
                alt="Description of the image"
                className="w-full h-auto"
              />
            </div>
            <div className="lg:w-[55%] mt-5">
              <h2 className="text-black font-bold font-body text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-10 lg:leading-12 xl:leading-14 mb-4 md:mb-6">
                Write, read and connect with great minds on PostPedia
              </h2>
              <p className="text-black text-base font-body md:text-lg lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9 mt-[24px]">
                Share people your great ideas, and also read write-ups based on
                your interests. connect with people of same interests and goals
              </p>
              <button
                className="text-white font-bold font-body text-base px-4 py-2 rounded-lg 
             bg-primary hover:bg-transparent hover:text-primary hover:border border-primary
              focus:outline-none w-[157px] h-[56px] transition duration-500 ease-in-out mt-[32px]"
              >
                Get started
              </button>
            </div>
          </div>
        </section>
        <footer className="bg-rgba-50 py-[50px]">
          <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4">
            <h2 className="text-primary font-body text-4xl font-bold leading-12 my-[20px]">
              POSTPEDIA
            </h2>
            <div>
              <h3 className="text-black font-body text-xl font-medium leading-9 mb-[15px]">
                Explore
              </h3>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px] 
              hover:text-primary transition duration-300"
              >
                Community
              </a>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px]
              hover:text-primary transition duration-300"
              >
                Trending blogs
              </a>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px] 
              hover:text-primary transition duration-300"
              >
                PostPedia for teams
              </a>
            </div>

            <div>
              <h3 className="text-black font-body text-xl font-medium leading-9 mb-[15px]">
                Support
              </h3>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px]
              hover:text-primary transition duration-300"
              >
                Support docs
              </a>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px]
             hover:text-primary transition duration-300"
              >
                Join slack
              </a>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px]
             hover:text-primary transition duration-300"
              >
                Contact
              </a>
            </div>

            <div>
              <h3 className="text-black font-body text-xl font-medium leading-9 mb-[15px]">
                Official blog
              </h3>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px]
             hover:text-primary transition duration-300"
              >
                Official blog
              </a>
              <a
                href="#"
                className="text-black font-body text-base font-normal leading-6 block mb-[16px] 
              hover:text-primary transition duration-300"
              >
                Engineering blog
              </a>
            </div>
          </div>
          <div className="text-black text-center mt-8">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Postpedia. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}


export default Home;