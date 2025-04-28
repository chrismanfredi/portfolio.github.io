import React from "react";
import Image from "next/image";
import  PortfolioPicture  from "/public/images/1.png";
import  Computer  from "/public/images/computer2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function AboutMe(){
  return (
    <main className="mt-[10%] mb-[20%]">
        <div className="container mx-auto border-1 border-gray-300 w-full max-w-3/4 shadow-xl">
            <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
                    <form action="#" className="space-y-8">
                <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave a comment..."></textarea>
          </div>
          <button type='submit' className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3.5">
                Send Message
            </button>
      </form>
  </div>
</section>
      </div>
      </main>
  );
};
