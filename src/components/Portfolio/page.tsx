import React from "react";
import Image from "next/image";

import  Portfolio1  from "/public/images/portfolio.png";

export default function Portfolio(){
  return (
    <main className="mt-[5%]">
      <h2 className="mt-1 mb-4 text-4xl font-bold text-gray-900 sm:truncate sm:tracking-tight ml-[46%]">Portfolio</h2>
      <div className="container mx-auto max-w-3/4">
        <section className="banners py-5 md:py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-x-0 md:gap-x-6">
          <div className="md:px-0 md:col-span-2 lg:col-span-3 border-1 border-gray-300 shadow-xl">
            <div className="banner-wrapper">
              <a className="group" href="./blog_post.html" title="Leveling up in CSS">
                <div className="banner-wrapper-content">
                </div>
              </a>
              <Image src={Portfolio1} alt="Portfolio 1"/>
            </div>
          </div>
          <div className="md:px-0 md:col-span-2 lg:col-span-3 border-1 border-gray-300 shadow-xl">
            <div className="banner-wrapper">
              <a className="group" href="./blog_post.html" title="Evolving the Google Identity">
                <div className="banner-wrapper-content">
                </div>
              </a>
              <Image src={Portfolio1} alt="Portfolio 2"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="banners py-5 md:py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-x-0 md:gap-x-6">
          <div className="md:px-0 md:col-span-2 lg:col-span-3 border-1 border-gray-300 shadow-xl">
            <div className="banner-wrapper">
              <a className="group" href="./blog_post.html" title="Leveling up in CSS">
                <div className="banner-wrapper-content">
                </div>
              </a>
              <Image src={Portfolio1} alt="Portfolio 3"/>
            </div>
          </div>
          <div className="md:px-0 md:col-span-2 lg:col-span-3 border-1 border-gray-300 shadow-xl">
            <div className="banner-wrapper">
              <a className="group" href="./blog_post.html" title="Evolving the Google Identity">
                <div className="banner-wrapper-content">
                </div>
              </a>
              <Image src={Portfolio1} alt="Portfolio 4"/>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    </main>
  );
};
