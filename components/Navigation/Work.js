import { TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/Work.module.css";

export default function Work() {
  const [hover, setHover] = useState(false);
  return (
    <Link href="/Work">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`${style.Work} bg-white active:scale-105 lg:active:scale-75
        active:duration-300 active:ease-linear rounded-3xl lg:hover:scale-95 transition duration-300 ease-out cursor-pointer`}
      >
        <div className="lg:mt-20 lg:mb-12 hidden lg:inline-block">
          <p
            className={` text-black  mx-5 pt-5 font-bold transition-opacity duration-300 ease-out text-xl`}
          >
            PROJECTS
          </p>
        </div>
        <div className="lg:hidden text-2xl mx-5 py-10 font-bold tracking-widest text-black ">
          <span>Projects</span>
        </div>
        <div className="flex justify-between mx-5 my-5 pb-5 lg:mt-14 lg:pb-0">
          <p className="tracking-widest cursor-pointer text-black font-semibold text-xs self-center">
            Work
          </p>
          <TerminalIcon className="h-5 w-5 text-black self-center" />
        </div>
      </div>
    </Link>
  );
}
