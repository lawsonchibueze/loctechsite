import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import brain from '/public/images/artificial-intelligence.png'
import book from '/public/images/certificate.PNG'
import cert from '/public/images/porfolio.PNG'
import cur from '/public/images/user.PNG'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { HeroData } from "../../models";
import { DataStore } from "@aws-amplify/datastore";
const items = [
  {
    img: brain,
    text: 'Learn The Essential Skills'
  },
  {
    img: book,
    text: 'Earn Certificates And Degrees'
  },
  {
    img: cert,
    text: 'Get Ready for The Next Career'
  },
  {
    img: cur,
    text: 'Master at Different Areas'
  },
]

const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchHeroData() {
      const heroData = await DataStore.query(HeroData);
      setData(heroData);
      console.log(data);
    }
    DataStore.observe(HeroData).subscribe((msg) => {
      fetchHeroData();
      console.log("Just Updated my hero Data");
    });
    fetchHeroData();
  }, [data]);

  return (
    <div className="flex flex-col bg-[#f8f8f8] pt-20">
      <div className="flex justify-between lg:px-32 px-4 flex-col lg:flex-row">
        {data.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="flex flex-col gap-5 flex-1"
              >
                <h2 className="text-violet-700 text-xl lg:text-start text-center font-semibold tracking-widest">{item.smallText}</h2>
                <p className="font-semibold text-4xl leading-snug lg:w-3/4 lg:text-start text-center">
                  {item.largeText}
                </p>
                <h3 className="text-gray-900 text-xl lg:text-start text-center">{item.mediumText}</h3>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdmS11WZUloGtsBywpcd8OSqAJwlS2oPUJK6wQPBse1kn5NtA/closedform"
                  target='_blank'
                  rel='noreferrer'
                  className="lg:self-start self-center"
                >
                  <button className="bg-violet-700 text-white font-semibold rounded-sm lg:w-60 py-3 px-6 lg:px-0 text-xl hover:shadow-lg transition-shadow duration-500 ease-linear">
                    {item.buttonText}
                  </button>
                </a>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt="hero 1"
                    className="h-96 object-contain"
                  // width={400}
                  // height={400}
                  />
                  <div className="absolute bg-white w-[75%]  px-8 py-5 rounded-lg drop-shadow-xl bottom-12 lg:-left-20 left-1">
                    <div className="">Tomorrow is our <span className="font-semibold">&quot;When I Grow Up&quot; Spirit Day!</span>
                      <div className="absolute bg-[#FFC221] p-1 h-14 w-14 rounded-full flex justify-center items-center -top-7 -left-5">
                        <MdOutlineNotificationsActive className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div className="bg-violet-900 lg:flex hidden flex-col lg:flex-row justify-between lg:px-32 px-4 py-6 mt-14 gap-8 lg:gap-0">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-4 flex-col lg:flex-row">
              <Image src={item.img} alt='' className="w-10 h-10" />
              <span className="text-white text-lg font-semibold lg:w-1/2 w-full text-start">{item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Hero;
