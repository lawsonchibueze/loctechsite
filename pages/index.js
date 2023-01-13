import Head from "next/head";
import Image from "next/image";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../models";
import { useState, useEffect } from "react";

import FeaturedCourses from "./components/FeaturedCourses";

export default function Home() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchCourse();

    async function fetchCourse() {
      const courseData = await DataStore.query(Course);
      setCourses(courseData);
      console.log(courses);
    }
    DataStore.observe(Course).subscribe((msg) => {
      fetchCourse();
      console.log("Just Updated my Course Data");
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Training | Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Hero />
        <Features />
        <FeaturedCourses />
      </div>
    </div>
  );
}
