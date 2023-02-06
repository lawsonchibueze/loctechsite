import Image from 'next/image'
import { useState } from 'react';
import { ImQuotesRight } from 'react-icons/im'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { testimonials } from './data'

export default function Testimonial(props) {
    const { text } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
    };

    const nextSlide = (index) => {
        setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='bg-[#f8f8f8]'>
            <div className='flex flex-col gap-12 mt-10 lg:p-32 px-4 py-10 relative'>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-base font-semibold text-violet-700 borde leading-snugr'>TESTIMONIALS</h1>
                    <p className='text-[#181818] text-3xl font-semibold'>See What Our Students Have To Say</p>
                </div>
                <div className='overflow-hidden flex flex-col'>
                    <div className="flex flex-row gap-10 transition-all duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                        {testimonials.map((testimonial, index) => {
                            return (
                                <div
                                    key={index}
                                    className='relative bg-white p-8 flex flex-col gap-6 rounded-md min-h-fit w-[330px] min-w-[330px]'
                                >
                                    <h2 className='text-violet-700 font-semibold text-xl'>Great quality!</h2>
                                    <p className='text-[#696969] font-bold leading-loose text-lg min-w-fit'>I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!</p>
                                    <div className='flex gap-4 items-center'>
                                        <Image
                                            src={testimonial.image}
                                            alt=''
                                            className='w-16 h-16 rounded-full'
                                        />
                                        <p className='flex flex-col font-bold'>
                                            {testimonial.name}
                                            <span className='font-normal text-[#696969]'>/ {testimonial.occupation}, {testimonial.location}</span>
                                        </p>
                                        <div className='absolute top-2 right-4'>
                                            <ImQuotesRight className='w-10 h-10 text-[#dedede]' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div onClick={prevSlide} className='absolute left-14 bottom-72 cursor-pointer w-10 h-10 shadow-xl border border-gray-200 flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-violet-700 hover:text-white transition-colors duration-300 ease-linear'>
                    <IoIosArrowBack className='w-6 h-6' />
                </div>
                <div onClick={nextSlide} className='absolute right-14 bottom-72 cursor-pointer w-10 h-10 shadow-xl border border-gray-200 flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-violet-700 hover:text-white transition-colors duration-300 ease-linear'>
                    <IoIosArrowForward className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}