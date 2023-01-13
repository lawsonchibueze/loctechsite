import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Example({ courses }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Courses
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {courses.map((course) => (
            <div key={course.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/courses/${course.id}`} key={course.id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {course.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {course.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
