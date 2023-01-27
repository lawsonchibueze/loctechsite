import Image from "next/image";
import Link from "next/link";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import { useState, useEffect } from "react";

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
        <div>
            <Link href={`/courses/${course.id}`} className='flex flex-col gap-2 hover:shadow-lg h-full transition-shadow duration-500 ease-in-out rounded-md border border-gray-200'>
                <div className="relative group overflow-hidden">
                    <img
                        src={course.image}
                        alt=''
                        // width={100}
                        // height={100}
                        className="rounded-t-md h-full w-full ease-in-out duration-500 group-hover:scale-110 object-contain"
                    />
                    {course.discount && (
                        <div className="absolute text-white bg-[#0071dc] top-2 left-3 px-2 font-semibold rounded-sm text-sm">
                            {course.discountPercent}
                        </div>
                    )}
                    {course.free && (
                        <div className="absolute text-white bg-[#6CBD7E] top-2 left-3 px-2 font-semibold rounded-sm text-sm">
                            FREE
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2 p-3 ">
                    {course.level === 'FOUNDATION' && (
                        <span className='font-semibold px-2 text-[#17b8c1] bg-[#17b8c126] self-start'>Foundation</span>
                    )}
                    {course.level === 'ADVANCE' && (
                        <span className='font-semibold px-2 text-[#5b63fe] bg-[#5b63fe26] self-start'>Advance</span>
                    )}
                    <p className="font-semibold">{course.name}</p>
                    <h3 className="text-[#0071dc]">{course.tutor}</h3>
                    {course.free && (
                        <h4 className="font-bold flex flex-row items-center text-lg text-[#696969]">Free</h4>
                    )}
                    {course.discount ? (
                        <div className="flex flex-row gap-4">
                            <h4 className="font-bold flex flex-row items-center text-lg text-[#d31819]">{course.newPrice} <span className="text-xs">{course.newPriceSm}</span></h4>
                            <h4 className="font-bold flex flex-row items-center text-lg line-through text-[#ababab]">{course.oldPrice} <span className="text-xs">{course.oldPriceSm}</span></h4>
                        </div>
                    ) : (
                        <h4 className="font-bold flex flex-row items-center text-base">{formatter.format(course.price)} <span className="text-xs">{course.priceSm}</span></h4>
                    )}
                </div>
            </Link>
        </div>
    )
}