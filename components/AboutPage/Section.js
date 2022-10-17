import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Section() {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className={`mx-5 lg:mx-10 text-white lg:grid lg:grid-cols-2 lg:justify-items-center pb-10  md:space-x-5`}
    >
      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">
            &quot; DO WHAT YOU LOVE AND SUCCESS WILL FOLLOW, PASSION IS THE FUEL
            BEHIND A SUCCESSFUL CAREER. &quot;
          </h1>
          <p className="text-xs font-light text-slate-300 tracking-wider mt-2">
            Meg Whiteman
          </p>
        </div>

        <div className="text-slate-300 my-10 md:my-0 text-left text-sm ">
          <p className="md:indent-10  ">
            Hello!My name is Abdelmalek and I am passionate about creating
            things that live on the internet. I am currently a full stack
            freelancer web developer experienced in building (and occasionally
            designing) single-page web applications using the latest technologies such as :{" "}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ml-5 gap-1 mt-2 list-disc">
            <li>Next js</li>
            <li>React js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Node js</li>
            <li>Express js</li>
          </ul>
        
          <p className="md:indent-10">
            {
              /**
                My interest in tech and computer science started back in 2017
                inspired and motivated to create softwares that can help make a
                positive impact in people&apos;s lives .So, I decided to join an
                international organization of education, exchange and development
                World Learning as a computer science student where I met incredible
                mentors who helped me build up my technical and soft skills .Shortly
                afterwards, I was accepted to participate in an Exchange Program
                offered by the US Government where I studied Leadership and
                Entrepreneurship at the university of Reno, in Nevada USA . Back
                from the United States I worked on social projects that made a
                positive change in my community. I was a volunteer Operation Manager
                at Micro club together with a volunteer mentor of Electronics and
                coding at the Algiers STEM Center and a member at an environment
                association Plogging in Algeria where we worked to raise awareness
                about environmental pollution .
               */
            }
          </p>
          <div className="h-6" />
          <p className="md:indent-10">
            {" "}
            I had the privilege to work as a software
            engineer for <a href={'https://yassir.com/en/home/'}  target='_blank'  rel="noreferrer"> <span className="hover:underline text-green-500 cursor-pointer"> an Uber like company </span> </a> for almost a year and I am proud of how
            I helped the company grow using the experience I gained from being an operation Manager at <a href="https://www.facebook.com/Micro.Club.USTHB" target={'_blank'} rel="noreferrer">  <span className="hover:underline text-green-500 cursor-pointer"> Micro club </span>,  </a>
            a professional Mentor at <a href="https://www.worldlearning.org/program/algiers-stem-center/" target={'_blank'} rel="noreferrer"> <span className="hover:underline text-green-500 cursor-pointer"> Algiers STEM Center </span> </a> and an exchange program alumni at <a href="https://dz.usembassy.gov/" target={'_blank'} rel="noreferrer"><span className="hover:underline text-green-500 cursor-pointer">the us embassy in Algiers</span> </a> .
            </p>
            <p className="md:indent-10 my-3">
              Now I am interested in working as a
              freelancer on diver projects, and solve my clients problems depending on their needs by implementing the best solutions and using the latest technologies .{" "}
            </p>
        </div>
      </div>

      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`hidden cursor-pointer  md:my-36 drop-shadow-xl md:block md:relative md:w-[256px] md:h-[350px] lg:w-[270px] lg:h-[350px] my-5 lg:my-20`}
      >
        <Image
          className="z-10 grayscale hover:grayscale-0 transition duration-300 ease-out"
          src="/About.jpeg"
          alt="me"
          layout="fill"
        />
        <div
          className={`absolute border-[5px] border-green-500 h-[350px] w-[270px] top-8 left-8 z-0
           transition duration-300 ease-in ${
             hover
               ? "-translate-x-3 -translate-y-3"
               : "translate-x-0 translate-y-0"
           }`}
        />
      </div>

      <div className="relative md:hidden">
        <Image
          src="/About.jpeg"
          alt="me"
          width="256"
          height="350"
          layout="responsive"
        />
      </div>
    </div>
  );
}
