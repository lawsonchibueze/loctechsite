/* eslint-disable @next/next/no-img-element */
import {
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import CommentField from "./CommentField";
import author from "/public/images/author.jpg";

export default function Blogs({ post }) {
  return (
    <div>
      <div className="flex flex-col lg:justify-center lg:items-center gap-8 px-4 mt-12">
        <div className="bg-violet-50 px-2 rounded-sm self-center hover:text-white hover:bg-violet-700 cursor-pointer uppercase text-sm font-semibold transition-colors duration-500 ease-in-out">
          Business
        </div>
        <div className="font-medium lg:text-[40px] text-[22px] text-center lg:w-2/3 leading-snug text-[#252525]">
          {post.title}
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 text-[13px]">
          <div className="flex flex-row gap-3 items-center">
            <Image src={author} alt="Author" className="h-9 w-9 rounded-full" />
            <span>Owen Christ</span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <CalendarIcon className="w-6 h-6" />
            August 10, 2020
          </div>
          <div className="flex flex-row items-center gap-3">
            <EyeIcon className="w-6 h-6" />
            8,182 views
          </div>
          <div className="flex flex-row items-center gap-3">
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />0 comments
          </div>
        </div>
        <div>
          <img
            src={post.image}
            alt="blog Image"
            className="rounded-md lg:w-[60rem] lg:h-[50rem]"
          />
        </div>
        <div className="max-w-4xl text-[#696969] leading-relaxed text-[14px] font-light">
          {post.content}
        </div>
        <CommentField />
      </div>
    </div>
  );
}
