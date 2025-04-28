import React from "react";
import Image from "next/image";
import  PortfolioPicture  from "/public/images/1.png";
import  Computer  from "/public/images/computer2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function AboutMe(){
  return (
    <main className="mt-[10%]">
        <div className="container mx-auto border-1 border-gray-300 w-full max-w-3/4 shadow-xl">
        <section className="bg-white shadow-block flex flex-col md:flex-row p-7">
        <div className="about-me-author basis-34/100 lg:basis-20/100 text-center pt-45px">
        <Image src={ PortfolioPicture } alt="ProfilePicture" className=" rounded-2xl item-center m-8" />
            <ul className="author-nav text-left">
              <li>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3.5">
                Download My CV
            </button>
              </li>
            </ul>
          </div>

        <div className="about-me-author-content basis-40/100 lg:basis-40/100 py-10 px-7.5 md:py-50px md:px-10 relative">
            <h2 className="mt-1 mb-4 text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Connect</h2>
            <ol className="skills-list">
              <li className="mb-7.5 flex items-start">
                <span className="skills-list-numbering"><FaGithub className="h-10 w-10" /></span>
                <div className="skills-right">
                  <h3 className="mt-2 ml-4">Github</h3>
                </div>
              </li>
              <li className="mb-7.5 flex items-start">
                <span className="skills-list-numbering"><FaLinkedin className="h-10 w-10" /></span>
                <div className="skills-right">
                  <h3 className="mt-2 ml-4">Linkedin</h3>
                </div>
              </li>
            </ol>
          </div>

        <div className="about-me-author-content basis-40/100 lg:basis-40/100 py-10 px-7.5 md:py-50px md:px-10 relative">
            <Image src={ Computer } alt="ProfilePicture" className="h-48 w-72" />
        </div>

        </section>
      </div>
      <div className="container mx-auto w-full ml-[50%] mt-[5%]">
      <button className="">
      <FaArrowDown className="h-10 w-10 animate-bounce hover:cursor-pointer" to="section1" />
      </button>
      </div>
      </main>
  );
};
