import React from "react";
import Image from "next/image";

import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

function SiteUnderConstruction() {
  return (
    <div className="bg-neutral-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-black font-bold mb-8">
        Site Under Construction
      </h1>
      <p className="text-lg mb-8 text-black flex flex-col justify-center items-center">
        We're working hard to bring you something awesome. Stay tuned!
      </p>
      <Image
        src="/assets/logo1.png"
        alt="Site under construction"
        width={200}
        height={200}
        className="max-w-lg mb-8 text-black"
      />
      <p className="text-lg text-black">Follow us on social media:</p>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-facebook-f fa-lg"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      <div className="flex gap-10 items-center text-[#252525] text-xl">
        <a
          href="https://twitter.com/loctechtraining"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
        </a>
        <a
          href="https://facebook.com/loctechtraining/"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
        </a>
        <a
          href="https://www.linkedin.com/company/loctech-it-training-institute"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
        </a>
        <a
          href="https://www.youtube.com/@loctechtraining2346"
          target="_blank"
          rel="noreferrer"
        >
          <FiYoutube className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
        </a>
      </div>
      <div className="flex flex-col gap-1">
        {/* <h1>Call us</h1> */}
        <span className="text-violet-700 font-bold text-lg pt-5">
          +2347038885466
        </span>
      </div>
      {/* <div className="lg:w-1/2 font-semibold">
        4A Etim Okpoyo Street, Bridge Bus Stop, Aba Road, Port Harcourt, Nigeria
      </div> */}
      <div className="font-semibold">customercare@loctechng.com</div>
    </div>
  );
}

export default SiteUnderConstruction;
