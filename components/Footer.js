import React from "react";
import style from "../styles/Page.module.css";

export default function Footer() {
  return (
    <div className={`${style.page_animation} mx-5 lg:mx-10  border-t `}>
      <div className="flex justify-between space-x-3  flex-wrap py-5">
        <div className=" text-white flex space-x-2 py-2">
          <svg
            className="h-4 w-4 self-center fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM199.2 312.6c14.94 15.06 34.8 23.38 55.89 23.38c.0313 0 0 0 0 0c21.06 0 40.92-8.312 55.83-23.38c9.375-9.375 24.53-9.469 33.97-.1562c9.406 9.344 9.469 24.53 .1562 33.97c-24 24.22-55.95 37.56-89.95 37.56c0 0 .0313 0 0 0c-33.97 0-65.95-13.34-89.95-37.56c-49.44-49.88-49.44-131 0-180.9c24-24.22 55.98-37.56 89.95-37.56c.0313 0 0 0 0 0c34 0 65.95 13.34 89.95 37.56c9.312 9.438 9.25 24.62-.1562 33.97c-9.438 9.344-24.59 9.188-33.97-.1562c-14.91-15.06-34.77-23.38-55.83-23.38c0 0 .0313 0 0 0c-21.09 0-40.95 8.312-55.89 23.38C168.3 230.6 168.3 281.4 199.2 312.6z" />
          </svg>
          <p className="text-xs font-thin self-center py-2">Copywrite 2022</p>
        </div>
        <div className="self-center py-2">
          <p className="text-xs text-white">developed using NextJS</p>
        </div>
        <div className="self-center py-2">
          <p className="text-xs text-white">handcrafted by me</p>
        </div>
      </div>
    </div>
  );
}
