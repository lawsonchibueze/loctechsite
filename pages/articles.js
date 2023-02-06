/* eslint-disable @next/next/no-img-element */
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
        <div className="font-medium text-center lg:text-[40px] text-[22px] text-[#252525]">
          Latest news
          <br />
          are on top all times
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2">
        <div className='grid lg:grid-cols-3 grid-flow-row gap-10 col-span-3'>
          {posts.map((post, index) => {
            return (
              <div key={index} className='flex flex-col shadow-xl gap-4 pb-6 rounded-b-md group overflow-hidden'>
                <img
                  src={post.image}
                  alt=''
                  className='w-full h-52 object-cover rounded-t-md ease-in-out duration-500 group-hover:scale-110'
                />
                <div className='px-6 flex flex-col h-full gap-6'>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-gray-600 text-[14px] flex flex-row gap-2 items-center'>
                      <CalendarIcon className='w-5 h-5' />
                      {post.date}August 10, 2020
                    </h1>
                    <Link href={`/articles/${post.id}`} className='font-medium hover:text-violet-700 transition-colors duration-500 ease-in-out'>{post.title}</Link>
                    <p className='text-sm text-gray-500'>{post.content.substring(0, 70) + '...'}</p>
                  </div>
                  <Link href={`/articles/${post.id}`} className='mt-6'>
                    <button className='self-start px-6 py-2 bg-violet-50 text-violet-900 text-sm font-medium hover:bg-white hover:shadow-xl transition duration-500 ease-in-out group'>
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
