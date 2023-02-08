/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import { Course } from "../models";

const Card = ({ course }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.1,
      }}
    >
      <Link
        href={`/courses/${course.id}`}
        className="flex flex-col gap-2 rounded-md shadow-lg h-full pb-2"
      >
        <div className="relative group overflow-hidden">
          <img
            src={course.image}
            alt=""
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
          <span className="font-semibold text-[15px] text-red-700 self-start">
            {course.category.replaceAll("_", " ")}
          </span>
          <p className="font-bold text-[15px] text-black">{course.name}</p>
          <h3 className="text-violet-700">{course.instructorName}</h3>
          <span className="text-[15px]">
            {course.descriptions.substring(0, 70) + "..."}
          </span>
          {course.free && (
            <h4 className="font-bold flex flex-row items-center text-lg text-[#696969]">
              Free
            </h4>
          )}
          {course.discount ? (
            <div className="flex flex-row gap-4">
              <h4 className="font-bold flex flex-row items-center text-lg text-[#d31819]">
                {course.newPrice}{" "}
                <span className="text-xs">{course.newPriceSm}</span>
              </h4>
              <h4 className="font-bold flex flex-row items-center text-lg line-through text-[#ababab]">
                {course.oldPrice}{" "}
                <span className="text-xs">{course.oldPriceSm}</span>
              </h4>
            </div>
          ) : (
            <h4 className="font-semibold flex flex-row items-center text-lg">
              ₦ {course.price.toLocaleString()}{" "}
              <span className="text-xs">{course.priceSm}</span>
            </h4>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;

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
