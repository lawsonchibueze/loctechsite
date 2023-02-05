import { DataStore } from 'aws-amplify'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Events } from '../../models'
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

export default function Event() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents();
        async function fetchEvents() {
            const eventData = await DataStore.query(Events);
            setEvents(eventData);
        }
        DataStore.observe(Events).subscribe((msg) => {
            console.log(msg.Events, msg.opType, msg.element);
        });
    }, []);

    return (
        <div className='my-32 lg:px-20 px-4'>
            <div className="flex lg:flex-row flex-col gap-12 flex-1">
                <div className='flex flex-col gap-4 items-center lg:w-[30%] w-full'>
                    <h1 className='text-base font-semibold text-violet-700 borde leading-snug self-start'>EVENTS</h1>
                    <h2 className='text-[#181818] text-3xl font-semibold lg:text-start text-center self-start'>Upcoming Events</h2>
                    <p>You can show all events here to let people take the chance to get involved</p>
                    <button className="px-6 py-3 text-violet-800 font-semibold bg-violet-50 hover:shadow-xl transition-shadow duration-500 ease-in-out lg:self-start self-center">View all</button>
                </div>
                <div className='grid lg:grid-cols-3 grid-flow-row gap-8'>
                    {events.map((event, index) => {
                        return (
                            <Link href='/' key={index} className='flex flex-col gap-2 bg-violet-50'>
                                <img
                                    src={event.Image}
                                    alt=''
                                    className='w-full'
                                />
                                <div className='p-3 flex flex-col justify-between'>
                                    <h1 className='text-gray-600 text-sm'>{event.date}</h1>
                                    <p className='font-semibold'>{event.topic}</p>
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}