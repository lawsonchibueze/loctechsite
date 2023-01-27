import { withSSRContext } from "aws-amplify";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineStar } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { BsDot, BsPeople, BsPerson, BsPlayCircle } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { Course } from "../../models";
import Accordion from "../components/Accordion";
import tutor from "/public/images/tutor.jpeg";

export default function CourseComponent({ course }) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
    });

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>{course.name}</title>
                <meta name="description" content={course.name} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative">
                <div className="bg-violet-50 h-60">
                    <div className="flex lg:px-40 px-4 py-6">
                        <div>
                            <div className="text-gray-800 flex flex-col gap-6">
                                <h1 className="font-semibold text-3xl">
                                    {course.name}
                                </h1>
                                <div className="flex flex-row gap-6 items-center">
                                    <h2 className="flex flex-row gap-2 items-center">
                                        <BsDot className="w-6 h-6 text-violet-700" /> {course.tutor}
                                    </h2>
                                    <h3 className="flex flex-row gap-2 items-center">
                                        <BsDot className="w-6 h-6 text-violet-700" /> {course.level}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 bg-white lg:px-40 px-4 py-10">
                    <h1 className="font-semibold text-2xl">About This Course</h1>
                    <div className="text-gray-600 flex flex-col gap-10 lg:w-3/5">
                        {course.descriptions}
                        <span>{course.description2}</span>
                    </div>
                    <div className="lg:w-3/5">
                        <h1 className="font-semibold text-2xl my-6">Skills you will learn</h1>
                        {/* <div className='grid lg:grid-cols-2 gap-7'>
                            {course.skills.map((skill, index) => {
                                return (
                                    <div key={index} className="flex flex-row gap-2 items-center">
                                        <BsCheck2 className="text-violet-700 w-4 h-4 font-bold" />
                                        <span className="text-gray-800 font-semibold">{skill}</span>
                                    </div>
                                )
                            })}
                        </div> */}
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl my-6">Who should learn this course</h1>
                        <div className="flex flex-row flex-wrap w-[70%] gap-4">
                            {course.learningObjective
                                .map((item, index) => {
                                    return (
                                        <div key={index} className='bg-[#f3f3f3] text-[#51565e] font-semibold text-base px-5 py-2 rounded-3xl'>
                                            {item}
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl my-6">Curriculum</h1>
                        <div className="lg:w-[65%]">
                            <Accordion
                                course={course}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl my-6">Course Instructor</h1>
                        <div className="flex lg:flex-row flex-col gap-7">
                            <Link href='/instructor' className="group overflow-hidden">
                                <Image
                                    alt=""
                                    className='h-80 lg:w-72 object-cover rounded-md ease-in-out duration-500 group-hover:scale-110'
                                    src={tutor}
                                />
                            </Link>
                            <div className="flex flex-col gap-2  flex-1">
                                <Link href='/instructor' className="text-2xl font-semibold">{course.tutor}</Link>
                                <div>Web Developer</div>
                                {/* <div>{course.rating} Ratings</div> */}
                                <div className="flex flex-row gap-4 lg:gap-7">
                                    <span className="flex flex-row gap-1 items-center text-gray-500 font-semibold">
                                        <BsPlayCircle className="w-5 h-5" />
                                        5 Courses
                                    </span>
                                    <span className="flex flex-row gap-1 items-center text-gray-500 font-semibold">
                                        <FiMessageSquare className="w-5 h-5" />
                                        4 Reviews
                                    </span>
                                    <span className="flex flex-row gap-1 items-center text-gray-500 font-semibold">
                                        <BsPerson className="w-5 h-5" />
                                        85 Students
                                    </span>
                                </div>
                                <div className="lg:w-1/2 text-gray-700 leading-normal">
                                    {course.aboutTutor}                                </div>
                                <div className="flex flex-row gap-10">
                                    <a href=""><FaFacebookF className="w-5 h-5 text-violet-700" /></a>
                                    <a href=""><FaTwitter className="w-5 h-5 text-violet-700" /></a>
                                    <a href=""><FaInstagram className="w-5 h-5 text-violet-700" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:right-40 lg:top-10 h-fit lg:z-10 bg-white rounded-md shadow-lg flex flex-col gap-4 px-4 lg:px-0">
                    <div className="lg:w-80 relative">
                        <video alt="" className='w-full h-fit rounded-t-md' src={course.video} controls />
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-white to-black mix-blend-multiply" aria-hidden="true" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 rounded-full border border-violet-700 flex items-center justify-center cursor-pointer p-4 m-4">
                                <div className="animate-ping absolute inline-flex w-12 h-12 rounded-full bg-violet-400 opacity-75 cursor-pointer"></div>
                                <FaPlay className="w-12 h-12 text-violet-700" />
                            </div>
                        </div> */}
                    </div>
                    <div className="lg:px-4 px-2 py-3 flex flex-col gap-2">
                        <div className="text-3xl text-gray-800 font-bold">
                            {formatter.format(course.price)}
                            <span className="text-[15px]">{course.priceSm}</span>
                        </div>
                        <div className={course.level === 'All Levels' ? 'text-[#17b8c1] bg-[#17b8c128] self-start py-0.5 px-2 rounded-md' : ''}>
                            {course.level}
                        </div>
                        <div className="flex flex-col gap-6 my-6">
                            <div className="flex flex-row justify-between items-center">
                                <BiTime className="w-6 h-6 text-gray-800" />
                                <span className="text-gray-600">{course.duration} Hour(s)</span>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <BsPeople className="w-6 h-6 text-gray-800" />
                                <span className="text-gray-600">20+ Sudents</span>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <AiOutlineStar className="w-6 h-6 text-gray-800" />
                                <span className="text-gray-600">0 Reviews</span>
                            </div>
                        </div>
                        <button className="bg-violet-700 w-full py-3 font-semibold text-white rounded-md text-lg hover:shadow-xl duration-300 ease-in-out">Start Learning</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export async function getStaticPaths(req) {
    const { DataStore } = withSSRContext(req);
    const courses = await DataStore.query(Course);
    const paths = courses.map((course) => ({ params: { id: course.id } }));
    console.log(paths);
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(req) {
    const { DataStore } = withSSRContext(req);
    const { params } = req;
    const { id } = params;
    const course = await DataStore.query(Course, id);

    return {
        props: {
            course: JSON.parse(JSON.stringify(course)),
        },
        revalidate: 1,
    };
}