import React from "react";
import { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import Link from "next/link";

const CourseCards = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {courses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={course.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {course.category}
                    </h1>
                    <p className="leading-relaxed mb-3">{course.excerpt}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default CourseCards;
