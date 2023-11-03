"use client";
import Link from "next/link";
import styled from "./Header.module.css";
import { useState } from "react";
import { links } from "../../../lib/data";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const shoNa = () => {
    setSh((p) => !p);
  };

  return (
    <header className={styled.header}>
      <Link
        href="/"
        className="text-primary text-4xl font-bold uppercase leading-[72px]"
      >
        Postpedia
      </Link>

      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
        <ul className="flex flex-col items-center h-full md:flex-row md:justify-center md:items-center gap-5 md:bg-transparent">
          {links.map((el, i) => (
            <li key={i} className="links" onClick={shoNa}>
              <Link href={el.link}>{el.title}</Link>
            </li>
          ))}
          <div className="flex flex-col justify-start items-start gap-6 md:hidden mt-10">
            <Link
              href="/auth"
              className="w-firt px-4 py-2 rounded-lg bg-white border border-white justify-end items-center gap-2 text-primary flex text-lg font-bold leading-[27px]"
            >
              Log in
            </Link>
            <Link
              href="/auth"
              className="w-fit px-4 py-2 border-white bg-primary rounded-lg justify-end items-center gap-2 flex text-white text-lg font-bold leading-[27px]"
            >
              Sign up
            </Link>
          </div>
        </ul>
      </nav>

      <div className="hidden justify-start items-start gap-6 md:flex">
        <Link
          href="/auth"
          className="w-fit px-4 py-2 rounded-lg border border-primary justify-end items-center gap-2 flex text-neutral-900 text-lg font-bold leading-[27px] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
        >
          Log in
        </Link>
        <Link
          href="/auth"
          className="w-fit px-4 py-2 border-primary bg-primary rounded-lg justify-end items-center gap-2 flex text-white text-lg font-bold leading-[27px] transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};
