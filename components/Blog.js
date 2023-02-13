/* eslint-disable @next/next/no-img-element */
import { ArrowLongRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { DataStore } from "aws-amplify";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Post } from "../models";

const blogs = [
  {
    icons: <ArrowLongRightIcon />,
    title: "4 Learning Management System Design Tips For Better eLearning",
  },
  {
    icons: <ArrowLongRightIcon />,
    title: "The importance Of Intrinsic Motivation for Students",
  },
  {
    icons: <ArrowLongRightIcon />,
    title: "A Better Alternative To Grading Student Writing",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const postData = await DataStore.query(Post);
      setPosts(postData);
    }
    DataStore.observe(Post).subscribe((msg) => {
      console.log(msg.Post, msg.opType, msg.element);
    });
  }, []);

  return (
    <div className="mt-20 lg:p-20 px-4">
      <div className="lg:grid flex flex-col lg:grid-cols-4 lg:grid-flow-row gap-12 ">
        <div className="flex flex-col gap-6 md:items-start items-center h-fit">
          <h1 className="text-xl font-semibold text-violet-700 borde leading-snug lg:self-start md:self-center text-center md:text-2xl uppercase">
            Article Update
          </h1>
          <h2 className="text-[#181818] text-3xl font-medium lg:text-start md:self-start text-center">
            Loctech News and Article
          </h2>
          <div className="flex flex-col gap-5">
            {blogs.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row lg:items-start lg:justify-start gap-2"
                >
                  <div className="lg:w-5 lg:h-5 w-8 h-8">{blog.icons}</div>
                  <Link
                    href="/"
                    className="lg:text-base font-medium flex-1 hover:text-violet-700 transition-colors duration-500 ease-in-out lg:min-w-0"
                  >
                    {blog.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row gap-8 col-span-3">
          {posts
            .map((post, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between group overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-44 object-cover ease-in-out duration-500 group-hover:scale-110"
                  />
                  <div className="flex flex-col gap-1 mt-3">
                    <h1 className="text-gray-600 text-[14px] flex flex-row gap-2 items-center">
                      <CalendarIcon className="w-5 h-5" />
                      {post.date}
                    </h1>
                    <Link
                      href={`/articles/${post.id}`}
                      className="font-semibold hover:text-violet-700 transition-colors duration-500 ease-in-out"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {post.content.substring(0, 70) + "..."}
                    </p>
                  </div>
                  <Link href={`/articles/${post.id}`} className="mt-8">
                    <button className="self-start px-6 py-2 bg-violet-50 text-violet-900 text-sm font-medium hover:bg-white hover:shadow-xl transition duration-500 ease-in-out group">
                      Read More
                    </button>
                  </Link>
                </div>
              );
            })
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
}
