import { withSSRContext } from "aws-amplify";
import { Course } from "../../models";
import Markdown from "react-markdown";
import { useRouter } from "next/router";

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
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={course.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {course.name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {course.category}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500"></a>
                </span>
              </div>
              <p className="leading-relaxed">{course.descriptions}</p>
              <hr className=" h-2 p-4 pt-5 pb-5 mt-5 mb-5 " />

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {formatter.format(course.price)}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req);
  const courses = await DataStore.query(Course);
  const paths = courses.map((course) => ({ params: { id: course.id } }));
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
