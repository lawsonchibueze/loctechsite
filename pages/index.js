import React from "react";
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="bg-neutral-300 h-screen flex flex-col justify-center items-center text-center">
        <Link href="/https://bit.ly/Scholarship_2023">
          <h1 className="text-4xl text-black font-bold mb-8 ">
            Scholarship 2023
          </h1>
          <h2 className="text-white bg-violet-700 py-4 font-bold">
            Click Now to Register for Scholarship 2023
          </h2>
          <Image
            src="/assets/scholar1.jpeg"
            alt="Site under construction"
            width={400}
            height={400}
            className="max-w-lg mb-3 text-black"
          />
          <Link href="/https://bit.ly/Scholarship_2023" className="pt-4 ">
            <button className="bg-white px-4 rounded-md text-violet-700">
              Register Now{" "}
            </button>
          </Link>
        </Link>

        <div className="flex flex-col gap-1 text-purple-800 font-bold pt-4">
          <span>+234 703 888 5466</span>
          <span className="font-semibold">customercare@loctechng.com</span>
        </div>
        <p className="text-white bg-violet-700 py-4 font-bold p-6 rounded-lg mt-3">
          Site is Currently under Maintainance
        </p>
      </div>
    </div>
  );
};

export default Home;
