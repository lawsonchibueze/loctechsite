import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import about1 from '/public/images/about1.jpg'
import about2 from '/public/images/about2.jpg'
import about3 from '/public/images/about3.jpg'

const data = [
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

const blogs = [
    {
        icons: <ArrowLongRightIcon />,
        title: '4 Learning Management System Design Tips For Better eLearning'
    },
    {
        icons: <ArrowLongRightIcon />,
        title: 'The importance Of Intrinsic Motivation for Students'
    },
    {
        icons: <ArrowLongRightIcon />,
        title: 'A Better Alternative To Grading Student Writing'
    },
]

export default function Blog() {
    return (
        <div className="mt-20 lg:p-20 px-4">
            <div className="grid lg:grid-cols-4 grid-flow-row gap-12 ">
                <div className='flex flex-col gap-6 items-center h-fit'>
                    <h1 className='text-base font-semibold text-violet-700 borde leading-snug lg:self-start text-center md:text-xl'>Article Update</h1>
                    <h2 className='text-[#181818] text-3xl font-semibold'>Loctech News and Article</h2>
                    <div className='flex flex-col gap-5'>
                        {blogs.map((blog, index) => {
                            return (
                                <div key={index} className='flex flex-row items-start justify-start gap-2'>
                                    <div className='lg:w-5 lg:h-5 w-8 h-8'>
                                        {blog.icons}
                                    </div>
                                    <Link href='/' className='lg:text-base font-semibold text-xl flex-1 hover:text-violet-700 transition-colors duration-500 ease-in-out min-w-max lg:min-w-0'>
                                        {blog.title}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-flow-row gap-8 col-span-3'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-between'>
                                <Image
                                    src={item.image}
                                    alt=''
                                    className='w-full'
                                />
                                <div className='p-3 flex flex-col gap-1'>
                                    <h1 className='text-gray-600 text-sm text-center'>{item.date}</h1>
                                    <h2 className='font-semibold'>{item.topic}</h2>
                                    <p className='text-sm text-gray-500'>{item.desc.substring(0, 70) + '...'}</p>
                                </div>
                                <Link href='/'>
                                    <button className='self-start px-6 py-3 bg-violet-50 text-violet-900 font-semibold hover:bg-white hover:shadow-xl transition duration-500 ease-in-out group'>
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}