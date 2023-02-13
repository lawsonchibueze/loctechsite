/* eslint-disable @next/next/no-img-element */
import { DataStore } from "@aws-amplify/datastore";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HeroData } from "../models";
import brain from "/public/images/artificial-intelligence.png";
import book from "/public/images/certificate.png";
import cert from "/public/images/porfolio.png";
import cur from "/public/images/user.png";

const items = [
  {
    img: brain,
    text: "Learn The Essential Skills",
  },
  {
    img: book,
    text: "Earn Certificates And Degrees",
  },
  {
    img: cert,
    text: "Get Ready for The Next Career",
  },
  {
    img: cur,
    text: "Master at Different Areas",
  },
];

const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchHeroData() {
      const heroData = await DataStore.query(HeroData);
      setData(heroData);
      // console.log(data);
    }
    // DataStore.observe(HeroData).subscribe((msg) => {
    //   fetchHeroData();
    //   console.log("Just Updated my hero Data");
    // });
    fetchHeroData();
  }, [data]);

  return (
    <div className="flex flex-col bg-[#f8f8f8] min-h-full">
      {data.map((hero, index) => {
        return (
          <div
            className="lg:grid flex flex-col lg:grid-cols-2 md:flex-row gap-10 md:px-8 lg:px-20 px-4 relative lg:mt-32 mt-10"
            key={index}
          >
            <motion.div className="flex flex-col md:pb-10">
              <h2 className="text-violet-700 lg:text-xl lg:text-start md:text-start text-center font-semibold tracking-widest mb-2">
                {hero.smallText}
              </h2>
              <p className="font-semibold lg:text-6xl text-4xl leading-snug lg:text-start md:text-start text-center text-red-700 mb-8">
                {hero.largeText}
              </p>
              <h3 className="text-gray-900 text-2xl lg:text-start md:text-start text-center mb-8 tracking-wider">
                {hero.mediumText}
              </h3>
              <button className="bg-violet-700 text-white font-bold rounded-md lg:w-60 w-72 py-5 lg:py-4 px-6 lg:px-0 lg:text-base text-lg hover:shadow-lg transition-shadow duration-500 ease-linear lg:self-start md:self-start self-center">
                {hero.buttonText}
              </button>
            </motion.div>
            <div className="relative lg:-mt-12">
              <img
                src={hero.image}
                alt="hero 1"
                className="object-cover lg:min-w-full lg:w-fit md:w-full md:h-full"
              />
              {/* <div className="absolute bg-white lg:w-[50%]  px-8 py-5 rounded-lg drop-shadow-xl bottom-12 lg:-left-20 left-1 animate-bounce bg-opacity-60 backdrop-filter backdrop-blur-lg">
                <div className="">Tomorrow is our <span className="font-semibold">&quot;When I Grow Up&quot; Spirit Day!</span>
                  <div className="absolute bg-[#FFC221] p-1 h-14 w-14 rounded-full flex justify-center items-center -top-7 -left-5">
                    <MdOutlineNotificationsActive className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        );
      })}
      <div className="bg-violet-900 lg:flex hidden flex-col lg:flex-row justify-between lg:px-32 px-4 py-6 mt-14 gap-8 lg:gap-0">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-4 flex-col lg:flex-row"
            >
              <Image src={item.img} alt="" className="w-10 h-10" />
              <span className="text-white text-lg font-semibold lg:w-1/2 w-full text-start">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
