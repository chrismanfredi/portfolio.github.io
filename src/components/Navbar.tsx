"use client";
import Link from "next/link";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container mx-auto">
        <div className="flex float-left ml-30 gap-6 mx-auto font-medium py-5 text-black">
          <Link className="navbar_link hover:text-orange-600" href="/">
            Home
          </Link>
          <Link className="navbar_link hover:text-orange-600" href="/shop">
            About
          </Link>
          <Link className="navbar_link" href="">
            Portfolio
          </Link>
          <Link className="navbar_link" href="">
            services
          </Link>
          <Link className="navbar_link" href="">
            Contact
          </Link>
        </div>
        <div className="flex float-right gap-6 mr-30 mx-auto font-medium py-5 text-black">

        </div>
      </div>
    </div>
  );
};
