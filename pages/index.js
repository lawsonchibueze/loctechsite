import Head from "next/head";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { AnimatePresence } from "framer-motion";
import Blog from "../components/Blog";
import Events from "../components/Events";
import Testimonial from "../components/Testimonial";
import Views from "../components/views";

export default function Home() {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetchCourse();

  //   async function fetchCourse() {
  //     const courseData = await DataStore.query(Course);
  //     setCourses(courseData);
  //     console.log(courses);
  //   }
  //   DataStore.observe(Course).subscribe((msg) => {
  //     fetchCourse();
  //     console.log("Just Updated my Course Data");
  //   });
  // }, [courses]);
  return (
    <div>
      <Head>
        <title>Training | Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Features />
        <Views />
        <Events />
        <Blog />
        <Testimonial />
      </div>
    </div>
  );
}
