import Head from "next/head";
import Image from "next/image";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { special, stats } from "./components/data";
import BreadCrumb from "./components/Breadcrumb";
import aboutImg from '/public/images/about-us-02-introduce-image.png';

export default function AboutUs() {
    return (
        <div>
            <Head>
                <title>Loctech Portal | About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>
                    <div className="lg:px-20 px-4">
                        <BreadCrumb />
                    </div>
                    <div className="lg:px-32 px-4 my-20">
                        <p className="font-semibold text-4xl leading-snug lg:w-[40%] text-[#252525]">
                            The Leading Global Marketplace for Learning and Instruction
                        </p>
                        <div className="relative">
                            <Image src={aboutImg} alt="" />
                            <div className="absolute bg-white lg:w-64 w-[75%]  px-8 py-5 rounded-lg drop-shadow-xl lg:bottom-36 bottom-0 left-4 lg:left-56">
                                <div className="">Tomorrow is our <span className="font-semibold">&quot;When I Grow Up&quot; Spirit Day!</span>
                                    <div className="absolute bg-[#FFC221] p-1 h-14 w-14 rounded-full flex justify-center items-center -top-7 -left-5">
                                        <MdOutlineNotificationsActive className="w-10 h-10 text-white font-normal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 bg-[#F4F9FF] flex lg:flex-row flex-col justify-center py-8 gap-14">
                        {stats.map((stat, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-4 hover:shadow-xl hover:bg-white w-[350px] rounded-lg p-6 items-center transition-all duration-700 ease-in-out'
                                >
                                    <Image
                                        src={stat.image}
                                        alt=""
                                        className="text-[#0071dc] w-20 h-20 mb-6"
                                    />
                                    <div className="text-[#0071dc] font-semibold text-4xl">
                                        {stat.count}
                                    </div>
                                    <div className="text-[#031F4280] text-xl">
                                        {stat.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="lg:px-32 px-4 my-20 bg-[#f8f8f8] flex flex-col justify-center items-center gap-8 py-8">
                        <div className="flex flex-col items-center gap-5">
                            <p className="font-semibold text-5xl leading-snug text-[#252525]">
                                What Make Us Spcecial?
                            </p>
                            <span className="text-[#696969] text-center">Lorem ipsum dolor sit amet, consectetur adipisc ing elit.</span>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-10">
                            {special.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='flex flex-col gap-10'
                                    >
                                        <div className="relative">
                                            <Image
                                                src={item.image}
                                                alt=""
                                                className=""
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#2d415f] mix-blend-multiply" aria-hidden="true" />
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-2xl">{item.bgText}</div>
                                        </div>
                                        <div className="text-center text-[#696969]">{item.text}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}