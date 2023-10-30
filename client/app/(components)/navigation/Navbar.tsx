'use client'
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-auto p-2 justify-between items-center inline-flex">
      <div className="text-primary text-4xl font-bold font-['DM Sans'] leading-[72px]">
        <Link href="/">POSTPEDIA</Link>
      </div>
      <div className="self-stretch justify-center items-center gap-[174px] inline-flex">
        <div className="justify-start items-start gap-9 flex ">
          <Link href="/" className='hover:bg-primary leading-normal'>Home</Link>
          <Link href="/about" className='hover:bg-primary leading-normal'>About us</Link>
          <Link href="/contact" className='hover:bg-primary leading-normal'>Contact</Link>
          <Link href="/feed" className='hover:bg-primary leading-normal'>Blogs</Link>
        </div>
        <div className="justify-start items-start gap-6 flex">
          <Link href="/auth">
            <div className="w-fit h-14 px-4 py-2 rounded-lg border border-primary justify-end items-center gap-2 flex">
              <div className="text-neutral-900 text-lg font-bold font-['DM Sans'] leading-[27px]">Log in</div>
            </div>
          </Link>
          <Link href="/auth">
            <div className="w-fit h-14 px-4 py-2 bg-primary rounded-lg justify-end items-center gap-2 flex">
              <div className="text-white text-lg font-bold font-['DM Sans'] leading-[27px]">Sign up</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
