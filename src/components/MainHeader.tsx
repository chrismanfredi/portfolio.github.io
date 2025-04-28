import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import TypingTextEffect from "./UI/TypingTextEffect";


export default function MainHeader(){
  return (
<>
      <div className="border-b border-gray-200 py-6">
        <div className="container sm:flex justify-between items-center">
          <div className="font-bold text-2xl text-center pb-4 sm:pb-0 text-black lg:ml-[35%]">
          <TypingTextEffect
            fullText="Chris Manfredi - Web Designer & Developer"
            classes=" text-[25px] font-limelight text-black"
            />
          </div>


         
          <div className="flex justify-between items-center mr-10">
            <div className="hidden lg:flex gap-3">
              <div className="header_top_icon_wrapper">
                <FaRegEnvelope />
              </div>
              <div className="header_top_icon_wrapper">
                <FaRegCalendarAlt />
              </div>
              <div className="header_top_icon_wrapper">
                <FaRegUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
