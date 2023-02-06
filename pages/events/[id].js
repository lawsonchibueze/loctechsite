/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import { withSSRContext } from "aws-amplify";
import { Events } from "../../models";
import Markdown from "react-markdown";
import { useRouter } from "next/router";
import Head from "next/head";
import Blogs from "../components/Blogs";
import { BanknotesIcon, CalendarIcon, ClockIcon, LockClosedIcon, MapPinIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function EventComponent({ event }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Head>
                <title>{event.topic}</title>
                <meta name="description" content={event.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex lg:px-40 gap-8 px-4 mt-12">
                <div className="flex flex-col gap-8">
                    <div className="font-medium lg:text-[40px] text-[22px] leading-snug self-start text-start text-[#252525]">
                        {event.topic}
                    </div>
                    <div className='flex lg:flex-row flex-col gap-5 font-light'>
                        <div className='flex flex-row items-center gap-2'>
                            <MapPinIcon className='w-5 h-5 text-gray-700' />
                            Port Harcourt
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <CalendarIcon className='w-5 h-5' />
                            August 18, 2020 - April 2, 2021
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <ClockIcon className='w-5 h-5' />
                            9:30 am - 11:30 am
                        </div>
                    </div>
                    <div>
                        <img
                            src={event.Image}
                            alt='blog Image'
                            className='rounded-md w-full'
                        />
                    </div>
                    <div className=" leading-relaxed grid lg:grid-cols-3 grid-flow-row gap-20">
                        <div className="flex flex-col gap-4 flex-1 lg:col-span-2">
                            <h1 className="text-[20px] font-medium text-[#252525]">About The Event</h1>
                            <p className="text-[14px] text-[#696969]">
                                {event.content}
                            </p>
                        </div>
                        <div className="w-full shadow-xl rounded-md p-8 h-fit flex flex-col gap-7">
                            <div className="flex flex-row justify-between border-b pb-3">
                                <div className="flex flex-row gap-2 items-center">
                                    <BanknotesIcon className="w-5 h-5" />
                                    Cost:
                                </div>
                                <span className="text-[24px] text-[#d31819] font-semibold">₦{event.cost}</span>
                            </div>
                            <div className="flex flex-row justify-between border-b pb-3">
                                <div className="flex flex-row gap-2 items-center">
                                    <UsersIcon className="w-5 h-5" />
                                    Total Slot:
                                </div>
                                <span className="text-[14px] text-[#696969] font-light">{event.totalSlot}</span>
                            </div>
                            <div className="flex flex-row justify-between border-b pb-3">
                                <div className="flex flex-row gap-2 items-center">
                                    <LockClosedIcon className="w-5 h-5" />
                                    Booked Slot:
                                </div>
                                <span className="text-[14px] text-[#696969] font-light">0</span>
                            </div>
                            <div className="text-[#333333] bg-[#fdb494] border-l-2 border-[#c35a2c] p-4 text-[14px] font-light">
                                This event has expired
                            </div>
                        </div>
                    </div>
                    <div className="text-[#252525] text-[20px] font-medium flex flex-col gap-4">
                        Location
                        <div className="lg:w-1/2 w-full h-96 bg-gray-200"></div>
                    </div>
                    <div className="text-[#252525] text-[20px] font-medium flex flex-col gap-4">
                        Our Speaker
                        <div>
                            <img
                                src={event.Image}
                                alt=""
                                className="w-[170px] h-[170px] rounded-full"
                            />
                            <div className="mt-6 font-bold text-[15px]">Emerson Davidson</div>
                        </div>
                    </div>
                    <div>
                        <form className="mt-10 flex flex-col gap-4">
                            <h1 className="font-semibold text-2xl">Leave your thought here</h1>
                            <span className="text-lg">Your email address will not be published. Required fields are marked *</span>
                            <div className="grid lg:grid-cols-2 grid-flow-row gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="px-4 py-3 lg:w-96 bg-violet-50 focus:bg-white outline-none border border-transparent focus:border-violet-700 transition-colors duration-500 ease-in-out rounded-md"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="px-4 py-3 lg:w-96 bg-violet-50 focus:bg-white outline-none border border-transparent focus:border-violet-700 transition-colors duration-500 ease-in-out rounded-md"
                                />
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Your Comment"
                                    className="lg:col-span-3 px-4 py-3 bg-violet-50 focus:bg-white outline-none border border-transparent focus:border-violet-700 transition-colors duration-500 ease-in-out rounded-md"
                                />
                            </div>
                            <label htmlFor="checkbox" className="flex flex-row gap-2 items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="checkbox"
                                    className="w-4 h-4 border border-gray-200 hover:border-violet-700 cursor-pointer"
                                />
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                            <button
                                className="py-3 px-4 bg-violet-700 text-white rounded-md font-bold lg:w-40 hover:border hover:border-gray-200 hover:bg-white hover:text-violet-700 transition-colors duration-500 ease-in-out"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {event.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function getStaticPaths(req) {
    const { DataStore } = withSSRContext(req);
    const events = await DataStore.query(Events);
    const paths = events.map((event) => ({ params: { id: event.id } }));
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(req) {
    const { DataStore } = withSSRContext(req);
    const { params } = req;
    const { id } = params;
    const event = await DataStore.query(Events, id);

    return {
        props: {
            event: JSON.parse(JSON.stringify(event)),
        },
        revalidate: 1,
    };
}
