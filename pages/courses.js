/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Course } from "../models";


export default function Courses() {
  // Create our number formatter.
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
      <Head>
        <title>Loctech Portal | Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <p className="font-medium text-[40px] bg-gray-50 flex items-center justify-center h-52">
          Courses
        </p>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.6
          }}
          className='grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row gap-8 lg:px-20 px-4 my-20'
        >
          {courses.map((course, index) => {
            return (
              <Link key={index} href={`/courses/${course.id}`} className='flex flex-col gap-2 rounded-md shadow-lg'>
                <div className="relative group overflow-hidden">
                  <img
                    src={course.image}
                    alt=''
                    // width={100}
                    // height={100}
                    className="rounded-md ease-in-out duration-500 group-hover:scale-110 w-full h-72 object-cover"
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
                  <span className='font-semibold text-[15px] text-red-700 self-start'>{course.category.replaceAll('_', ' ')}</span>
                  <p className="font-bold text-[15px] text-black">{course.name}</p>
                  <h3 className="text-[#0071dc]">{course.tutor}</h3>
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
                    <h4 className="font-semibold flex flex-row items-center text-lg">₦ {course.price} <span className="text-xs">{course.priceSm}</span></h4>
                  )}
                </div>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  );
}
