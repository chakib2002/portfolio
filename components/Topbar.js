import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="px-10 py-5 grid grid-cols-1 sm:flex sm:justify-between  ">
      <div className="flex justify-between sm:space-x-16 sm:justify-start">
        <h1 className="text-xs font-semibold self-center">
          Full stack web developer
        </h1>
        <div className="flex space-x-2">
          <LocationMarkerIcon className="h-4 w-4 self-center" />
          <h1 className="text-xs font-semibold self-center">
            Algiers, Algeria
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:flex sm:justify-between my-5 bg-white rounded-full py-1 px-1 ">
        <div className="px-5 my-auto grid text-center sm:text-left">
          <h1 className="text-sm text-black font-semibold">
            Abdelmalek Feddal
          </h1>
          <p className="text-xs text-black font-light">
            Abdelmalek.feddal@gmail.com
          </p>
        </div>
        <div className="hidden sm:inline-flex self-center">
          <Image
            className="rounded-full py-2 my-auto self-center "
            src="/PhotoDeProfile.png"
            alt="profile photo"
            layout="fixed"
            width="65"
            height="65"
          />
        </div>
      </div>
    </div>
  );
}