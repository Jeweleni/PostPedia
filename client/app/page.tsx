import heroBackground from "../public/assets/hero-background.png";
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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div className="text-left">
          <h1 
            className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-12 md:leading-16 lg:leading-20 xl:leading-24"
          >
            Welcome to Chatter: A Haven for Text-Based Content
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

  </div>
  )
}
