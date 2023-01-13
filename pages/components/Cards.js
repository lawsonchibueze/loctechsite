import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";

const Cards = ({ courses }) => {
  return (
    <div>
      {
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-row -m-4">
              {courses.map((course) => (
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-100 p-6 rounded-lg">
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={course.image}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p class="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </div>
  );
};

export default Cards;
