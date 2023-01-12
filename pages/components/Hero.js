import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        {/* Flex Container */}

        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center mt-3 sm:text-2xl md:text-4xl md:text-left">
              <span className="text-violet-700"> Get Trained</span>
              <span className="text-black"> Get Certified </span>{" "}
              <span className="text-red-600">Get Ahead</span>
            </h1>
            <p className="max-w-sm text-center text-black md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ducimus, neque optio autem at deserunt. Iusto eveniet,
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 pb-">
            {/* <img src="img/illustration-intro.svg" alt="" /> */}
            <Image src="/assets/hero1.jpg" width={700} height={580} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
