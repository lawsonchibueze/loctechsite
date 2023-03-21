// import Head from "next/head";
// import Image from "next/image";
// import styles from "../../styles/Home.module.css";
// import Link from "next/link";
// import { DataStore } from "@aws-amplify/datastore";
// import { Course } from "../../models";
// import { useState, useEffect } from "react";

// export default function FeaturedCourses() {
//   // Create our number formatter.
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "NGN",
//   });

//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     fetchCourses();
//     async function fetchCourses() {
//       const courseData = await DataStore.query(Course);
//       setCourses(courseData);
//       console.log(courseData);
//     }
//     DataStore.observe(Course).subscribe((msg) => {
//       console.log(msg.Course, msg.opType, msg.element);
//     });
//   }, []);
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="md:flex md:items-center md:justify-between">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Featured Courses
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
//           {courses.map((course) => {
//             if (course.isFeatured === true) {
//               return (
//                 <div key={course.id} className="group relative">
//                   <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
//                     <img
//                       src={course.image}
//                       alt={course.name}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <h3 className="mt-4 text-sm text-gray-700">
//                     <Link href={`/courses/${course.id}`}>
//                       <span className="absolute inset-0" />
//                       {course.name}
//                     </Link>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {course.descriptions.substring(0, 60)} ...
//                   </p>
//                   <div className="flex">
//                     <p className="mt-1 text-sm font-medium text-gray-900">
//                       {formatter.format(course.price)}
//                     </p>
//                     <span>{course.duration} Months</span>
//                   </div>
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
