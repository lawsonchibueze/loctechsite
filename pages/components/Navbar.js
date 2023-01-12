import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <Image src="/assets/logo2.jpg" width={120} height={120} />
          </div>

          {/* Menu-Items */}
          <div className="hidden space-x-6 md:flex">
            <Link href="#" className="hover:text-darkGrayishBlue">
              Home
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              About us
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Courses
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Articles
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Free Courses
            </Link>
          </div>

          {/* Button */}
          <Link
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-violet-500 rounded-full baseline hover:bg-violet-300 md:block"
          >
            Get Started
          </Link>

          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <Link href="#">Pricing</Link>
            <Link href="#">Product</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Community</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
