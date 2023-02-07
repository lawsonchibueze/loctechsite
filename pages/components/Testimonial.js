/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Testimonial } from "../../models";
import { DataStore } from "aws-amplify";

export default function TestimonialComponent(props) {
  const { text } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const testimonialData = await DataStore.query(Testimonial);
      setTestimonials(testimonialData);
    }
    DataStore.observe(Testimonial).subscribe((msg) => {
      console.log(msg.Testimonial, msg.opType, msg.element);
    });
    fetchTestimonials();
  }, []);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
  };

  const nextSlide = (index) => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="bg-[#f8f8f8]">
      <div className="flex flex-col gap-12 mt-10 lg:p-20 px-4 py-10 relative">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-base font-bold text-violet-700 borde leading-snugr">
            TESTIMONIALS
          </h1>
          <p className="text-[#181818] text-3xl font-medium text-center">
            See What Our Students Have To Say
          </p>
        </div>
        <div className="overflow-hidden flex flex-col">
          <div
            className="flex lg:flex-row flex-col gap-10 transition-all duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {testimonials
              .map((testimonial, index) => {
                return (
                  <div
                    key={index}
                    className="relative bg-white p-8 flex flex-col gap-6 rounded-md min-h-fit"
                  >
                    <img
                      src={testimonial.image}
                      alt=""
                      className="w-16 h-16 rounded-full shadow-xl object-cover"
                    />
                    <h2 className="text-violet-700 font-medium text-[18px]">
                      Great quality!
                    </h2>
                    <p className="text-[#696969] font-light leading-loose text-[16px]">
                      {testimonial.Feedback.substring(0, 150)}
                    </p>
                    <div className="flex gap-4 items-center">
                      <p className="flex flex-col font-bold">
                        {testimonial.name}
                        {/* <span className='font-normal text-[#696969]'>/ {testimonial.occupation}, {testimonial.location}</span> */}
                      </p>
                    </div>
                  </div>
                );
              })
              .slice(0, 4)}
          </div>
        </div>
        {/* <div onClick={prevSlide} className='absolute left-14 bottom-72 cursor-pointer w-10 h-10 shadow-xl border border-gray-200 flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-violet-700 hover:text-white transition-colors duration-300 ease-linear'>
                    <IoIosArrowBack className='w-6 h-6' />
                </div>
                <div onClick={nextSlide} className='absolute right-14 bottom-72 cursor-pointer w-10 h-10 shadow-xl border border-gray-200 flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-violet-700 hover:text-white transition-colors duration-300 ease-linear'>
                    <IoIosArrowForward className='w-6 h-6' />
                </div> */}
      </div>
    </div>
  );
}
