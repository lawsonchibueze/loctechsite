import { DataStore } from "@aws-amplify/datastore";
import { CalendarIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Post } from "../models";
import about1 from '/public/images/about1.jpg'
import about2 from '/public/images/about2.jpg'
import about3 from '/public/images/about3.jpg'

const blogs = [
  {
    image: about1,
    date: 'AUGUST 18, 2021',
    topic: 'Global Education Meeting for Everyone',
    desc: 'As our elemntary students headlocks head back to school in person'
  },
  {
    image: about2,
    date: 'November 9, 2021',
    topic: 'London International Conference on Education',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti inventore quisquam qui,'
  },
  {
    image: about3,
    date: 'DECEMBER 31, 2021',
    topic: 'Digital Skills: Using Information to Build Business',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti inventore quisquam qui,'
  },
]

export default function FeaturedPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const postData = await DataStore.query(Post);
      setPosts(postData);
      console.log(postData);
    }
    DataStore.observe(Post).subscribe((msg) => {
      console.log(msg.Post, msg.opType, msg.element);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Articles</title>
        {/* <meta name="description" content={course.name} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-violet-50 h-80 flex items-center justify-center">
        <div className="font-semibold text-center lg:text-5xl text-3xl text-gray-900">
          Latest news
          <br />
          are on top all times
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2">
        <div className='grid lg:grid-cols-3 grid-flow-row gap-8 col-span-3'>
          {blogs.map((blog, index) => {
            return (
              <div key={index} className='flex flex-col shadow-md gap-4 pb-6 rounded-b-md group overflow-hidden'>
                <Image
                  src={blog.image}
                  alt=''
                  className='w-full h-56 object-cover rounded-t-md ease-in-out duration-500 group-hover:scale-110'
                />
                <div className='px-6 flex flex-col h-full gap-6'>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-gray-600 text-sm flex flex-row items-center gap-2'>
                      <CalendarIcon className="h-5 w-5" />
                      {blog.date}
                    </h1>
                    <h2 className='font-semibold'>{blog.topic}</h2>
                    <p className='text-sm text-gray-500'>{blog.desc.substring(0, 70) + '...'}</p>
                  </div>
                  <Link href='/' className="mt-auto">
                    <button className='self-start px-6 py-2 bg-violet-50 text-violet-900 font-semibold hover:bg-white hover:shadow-xl transition duration-500 ease-in-out group'>
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Featured Posts
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {posts.map((post) => {
            return (
              <div key={post.id} className="group relative">
                <h3 className="mt-4 text-3xl text-gray-700">
                  <Link href={`/articles/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{post.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
