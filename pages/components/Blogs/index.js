import { CalendarIcon, ChatBubbleBottomCenterTextIcon, EyeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import CommentField from './CommentField'
import Text from './Text'
import author from '/public/images/author.jpg'
import blog from '/public/images/blog.jpg'

export default function Blogs({ post }) {
    return (
        <div>
            <div className="flex flex-col lg:justify-center lg:items-center gap-8 px-4 mt-12">
                <div className="bg-violet-50 px-2 rounded-sm self-center hover:text-white hover:bg-violet-700 cursor-pointer uppercase text-sm font-semibold transition-colors duration-500 ease-in-out">
                    Business
                </div>
                <div className="font-semibold lg:text-5xl text-2xl text-center lg:w-2/3 leading-snug text-gray-800">
                    Back To School Social-Emotional Basics: Relationship, Rhythm, Release
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                    <div className='flex flex-row gap-3 items-center'>
                        <Image
                            src={author}
                            alt='Author'
                            className='h-9 w-9 rounded-full'
                        />
                        <span>Owen Christ</span>
                    </div>
                    <div className='flex flex-row items-center gap-3'>
                        <CalendarIcon className='w-6 h-6' />
                        August 10, 2020
                    </div>
                    <div className='flex flex-row items-center gap-3'>
                        <EyeIcon className='w-6 h-6' />
                        8,182 views
                    </div>
                    <div className='flex flex-row items-center gap-3'>
                        <ChatBubbleBottomCenterTextIcon className='w-6 h-6' />
                        0 comments
                    </div>
                </div>
                <div>
                    <Image
                        src={blog}
                        alt='blog Image'
                        className='rounded-md'
                    />
                </div>
                <Text />
                <CommentField />
            </div>
        </div>
    )
}