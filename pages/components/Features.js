import art from '/public/images/art.png'
import development from '/public/images/development.png'
import routine from '/public/images/routine.png'
import personal from '/public/images/growth.png'
import business from '/public/images/business.png'
import finance from '/public/images/finance.png'
import marketing from '/public/images/marketing.png'
import camera from '/public/images/camera.png'
import data from '/public/images/data.png'
import fitness from '/public/images/fitness.png'
import music from '/public/images/music.png'
import teaching from '/public/images/teaching.png'
import Image from 'next/image'

const categories = [
  {
    icon: art,
    category: 'Art & Design'
  },
  {
    icon: development,
    category: 'Development'
  },
  {
    icon: routine,
    category: 'Lifestyle'
  },
  {
    icon: personal,
    category: 'Personal Development'
  },
  {
    icon: business,
    category: 'Business'
  },
  {
    icon: finance,
    category: 'Finance'
  },
  {
    icon: marketing,
    category: 'Marketing'
  },
  {
    icon: camera,
    category: 'Photography'
  },
  {
    icon: data,
    category: 'Data Science'
  },
  {
    icon: fitness,
    category: 'Health & Fitness'
  },
  {
    icon: music,
    category: 'Music'
  },
  {
    icon: teaching,
    category: 'Teaching & Academics'
  },
]

export default function Features() {
  return (
    <div className='lg:px-20 px-4 py-20 bg-white'>
      <h1 className='text-3xl font-medium text-gray-900 mb-10'>Top Category</h1>
      <div className='grid lg:grid-cols-4 grid-flow-row gap-8'>
        {categories.map((cat, index) => {
          return (
            <div
              className='flex gap-4 items-center bg-[#f0f0f9] px-6 py-4 rounded-md'
              key={index}
            >
              <Image src={cat.icon} alt='' className='w-10 h-10 text-white' />
              <span className='font-normal text-lg text-[#252525]'>{cat.category}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}