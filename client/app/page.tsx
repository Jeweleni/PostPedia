import heroBackground from "../public/assets/hero-background.png";
import aboutImg from "../public/assets/about-img.png";
import Image from 'next/image';

export default function Home() {
  return (
  <div>
    {/* HERO SECTION */}
    <section className="relative w-full h-[800px] ">
      <Image 
        src={ heroBackground }
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
    <section className="flex flex-col md:flex-row justify-between items-center w-full md:w-[90%] mt-8 md:my-24 mx-auto px-4 sm:px-8 lg:px-12">
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

  </div>
  )
}
