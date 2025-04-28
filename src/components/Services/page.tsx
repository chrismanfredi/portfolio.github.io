import React from "react";
import Image from "next/image";

import  Portfolio1  from "/public/images/portfolio.png";
import  WebDesign  from "/public/images/webdesign.png";
import  WebDevelopment  from "/public/images/webdevelopment.png";
import  GraphicDesign  from "/public/images/graphicdesign.png";
import  Marketing  from "/public/images/marketing.png";

import Carousel from "@/components/Carousel/carousel";




export default function Services(){
  return (
    <main className="mt-[5%]">
      <h2 id="section1" className="mt-1 mb-4 text-4xl font-bold text-gray-900 sm:truncate sm:tracking-tight ml-[46%]">Services</h2>
        <div className="container mx-auto max-w-3/4">
          <section className="banners py-5 md:py-10">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-x-0 md:gap-x-6">
                
                <div className="md:px-0 md:col-span-2 lg:col-span-2 border-1 border-gray-300 shadow-xl">
                  <div className="banner-wrapper">
                    <a className="group" href="./blog_post.html" title="Leveling up in CSS">
                      <div className="banner-wrapper-content">
                      </div>
                    </a>
                    <h2 className="mt-2 mb-4 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight]"> Web Design </h2>                  
                    <Image src={WebDesign} alt="Portfolio 1"/>
                    </div>
                </div>

                <div className="md:px-0 md:col-span-2 lg:col-span-2 border-1 border-gray-300 shadow-xl">
                  <div className="banner-wrapper">
                    <a className="group" href="./blog_post.html" title="Evolving the Google Identity">
                      <div className="banner-wrapper-content">
                      </div>
                    </a>
                    <h2 className="mt-2 mb-4 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight]"> Web Development 
                      </h2>
                      <Image src={WebDevelopment} alt="Portfolio 1"/>
               
                    </div>
                </div>

                <div className="md:px-0 md:col-span-2 lg:col-span-2 border-1 border-gray-300 shadow-xl">
                    <a className="group" href="./blog_post.html" title="Leveling up in CSS">
                      <div className="banner-wrapper-content">
                      </div>
                    </a>
                    <h2 className="mt-2 mb-4 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight]"> Graphic Design 
                      </h2>  
                      <Image src={GraphicDesign} alt="Portfolio 1"/>
             
                   </div>

                   <div className="md:px-0 md:col-span-2 lg:col-span-2 border-1 border-gray-300 shadow-xl">
                    <a className="group" href="./blog_post.html" title="Leveling up in CSS">
                      <div className="banner-wrapper-content">
                      </div>
                    </a>
                    <h2 className="mt-2 mb-4 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight]">  Marketing </h2>  
                    <Image src={Marketing} alt="Portfolio 1"/>
            
                   </div>
              </div>
            </div>
          </section>
        </div>
        <Carousel />
    </main>
  );
};
