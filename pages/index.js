import React from "react";
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="bg-neutral-300 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl text-black font-bold mb-8">
          Site Under Construction
        </h1>
        <Image
          src="/assets/logo1.png"
          alt="Site under construction"
          width={200}
          height={200}
          className="max-w-lg mb-3 text-black"
        />
        <p className="text-lg text-black py-2">follow us on social media</p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/loctechtraining" target="_blank">
            <FiFacebook className="text-3xl text-black" />
          </a>
          <a href="https://twitter.com/loctechtraining" target="_blank">
            <FiTwitter className="text-3xl text-black" />
          </a>
          <a
            href="https://www.linkedin.com/company/11495008/admin/"
            target="_blank"
          >
            <FiLinkedin className="text-3xl text-black" />
          </a>
          <a
            href="https://www.youtube.com/@loctechtraining2346"
            target="_blank"
          >
            <FiYoutube className="text-3xl text-black" />
          </a>
        </div>

        <div className="flex flex-col gap-1 text-purple-800 font-bold pt-4">
          <span>+234 703 888 5466</span>
          <span className="font-semibold">customercare@loctechng.com</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
