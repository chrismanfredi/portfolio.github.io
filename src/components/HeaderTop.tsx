import React from "react";

import { SiFacebook } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiTacobell } from "react-icons/si";



export default function HeaderTop() {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-6">
                <div className="flex justify-between items-center ml-5">
                    {/* <div className="hidden lg:flex gap-2">
                        <div className="header_top_icon_wrapper">
                            <SiFacebook />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <SiYoutube />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <SiTiktok />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <SiTacobell />
                        </div>
                    </div> */}

                    {/* <div className="flex gap-4 mr-5">
                        <select
                            className="text-gray-500 text-[12px] w-[70px]"
                            name="currency"
                            id="currency"
                        >
                            <option value="USD $">USD $</option>
                            <option value="EUR €">EUR €</option>
                            <option value="JPY ¥">JPY ¥</option>
                        </select>

                        <select
                            className="text-gray-500 text-[12px] w-[80px]"
                            name="language"
                            id="language"
                        >
                             <option value="English">English</option>
                             <option value="Español">Español</option>
                        </select>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

