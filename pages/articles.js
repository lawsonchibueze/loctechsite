import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { DataStore } from "@aws-amplify/datastore";

import { Post } from "../models";
import { useState, useEffect } from "react";

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
    <div className="bg-white">
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
