import Image from 'next/image'
import Link from 'next/link'
import about1 from '/public/images/about1.jpg'
import about2 from '/public/images/about2.jpg'
import about3 from '/public/images/about3.jpg'

const data = [
    {
        image: about1,
        date: 'AUGUST 18, 2021',
        desc: 'Global Education Meeting for Everyone'
    },
    {
        image: about2,
        date: 'November 9, 2021',
        desc: 'London International Conference on Education'
    },
    {
        image: about3,
        date: 'DECEMBER 31, 2021',
        desc: 'Digital Skills: Using Information to Build Business'
    },
]

export default function Events() {

    return (
        <div className='mt-20 lg:p-32 px-4'>
            <div className="flex flex-row gap-12 ">
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-base font-semibold text-violet-700 borde leading-snug self-start'>TESTIMONIALS</h1>
                    <h2 className='text-[#181818] text-3xl font-semibold'>Upcoming Events</h2>
                    <p>You can show all events here to let people take the chance to get involved</p>
                    <button className="px-6 py-3 text-violet-800 font-semibold bg-violet-50 hover:shadow-xl transition-shadow duration-500 ease-in-out self-start">View all</button>
                </div>
                <div className='grid lg:grid-cols-3 grid-flow-row gap-8'>
                    {data.map((item, index) => {
                        return (
                            <Link href='/' key={index} className='flex flex-col justify-between bg-violet-50'>
                                <Image
                                    src={item.image}
                                    alt=''
                                />
                                <div className='p-3 flex flex-col justify-between items-center'>
                                    <h1 className='text-gray-600 text-sm'>{item.date}</h1>
                                    <p className='text-center font-semibold'>{item.desc}</p>
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}