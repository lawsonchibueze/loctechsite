/* eslint-disable @next/next/no-img-element */
import { DataStore } from "@aws-amplify/datastore";
// import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Course } from "../../models";
import { motion } from "framer-motion";

export default function Card({ course }) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
    });

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetchCourses();
        async function fetchCourses() {
            const courseData = await DataStore.query(Course);
            setCourses(courseData);
            console.log(courseData);
        }
        DataStore.observe(Course).subscribe((msg) => {
            console.log(msg.Course, msg.opType, msg.element);
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.1
            }}
        >
            <Link href={`/courses/${course.id}`} className='flex flex-col gap-2 rounded-md shadow-lg h-full pb-2'>
                <div className="relative group overflow-hidden">
                    <img
                        src={course.image}
                        alt=''
                        // width={100}
                        // height={100}
                        className="rounded-t-md ease-in-out duration-500 group-hover:scale-110 w-full h-72 object-cover"
                    />
                    {course.discount && (
                        <div className="absolute text-white bg-[#0071dc] top-2 left-3 px-2 font-medium rounded-sm text-sm">
                            {course.discountPercent}
                        </div>
                    )}
                    {course.online && (
                        <div className="absolute text-white bg-[#6CBD7E] top-2 left-3 px-2 font-medium rounded-sm text-sm">
                            Online
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2 text-start h-fit p-4">
                    <span className='font-normal text-[14px] text-red-700 self-start'>{course.category.replaceAll('_', ' ')}</span>
                    {/* {course.level === 'ADVANCE' && (
                        <span className='font-medium px-2 text-[#5b63fe] bg-[#5b63fe26] self-start'>Advance</span>
                    )} */}
                    <p className="font-medium text-[15px] text-black">{course.name}</p>
                    <h3 className="text-violet-700">{course.instructorName}</h3>
                    <span className="text-[15px]">{course.descriptions.substring(0, 70) + '...'}</span>
                    {course.free && (
                        <h4 className="font-bold flex flex-row items-center text-lg text-[#696969]">Free</h4>
                    )}
                    {course.discount ? (
                        <div className="flex flex-row gap-4">
                            <h4 className="font-bold flex flex-row items-center text-lg text-[#d31819]">{course.newPrice} <span className="text-xs">{course.newPriceSm}</span></h4>
                            <h4 className="font-bold flex flex-row items-center text-lg line-through text-[#ababab]">{course.oldPrice} <span className="text-xs">{course.oldPriceSm}</span></h4>
                        </div>
                    ) : (
                        <h4 className="font-semibold flex flex-row items-center text-lg">₦ {course.price.toLocaleString()} <span className="text-xs">{course.priceSm}</span></h4>
                    )}
                </div>
            </Link>
        </motion.div>
    )
}