import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className="bg-[#ffffff]">
      <div className="lg:px-20 px-4 pt-12">
        <div className="flex justify-between items-start lg:flex-row flex-col lg:gap-0 gap-8 pb-5">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/logo1.png"
              width={200}
              height={200}
              alt="navbar"
              className="-ml-12"
            />
            <div className="flex flex-col gap-1">
              <h1>Call us</h1>
              <span className="text-violet-700 font-bold text-lg">+2347038885466</span>
            </div>
            <div className="lg:w-1/2 font-semibold">
              4A Etim Okpoyo Street, Bridge Bus Stop, Aba Road, Port Harcourt, Nigeria
            </div>
            <div className="font-semibold">
              customercare@loctechng.com
            </div>
            <div className="flex gap-10 items-center text-[#252525] text-xl">
              <a href="https://twitter.com/loctechtraining" target='_blank' rel='noreferrer'>
                <FiTwitter className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="https://facebook.com/loctechtraining/" target='_blank' rel='noreferrer'>
                <FiFacebook className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="https://www.linkedin.com/company/loctech-it-training-institute" target='_blank' rel='noreferrer'>
                <FiLinkedin className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="https://www.youtube.com/@loctechtraining2346" target='_blank' rel='noreferrer'>
                <FiYoutube className="hover:text-violet-700 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-flow-row gap-8 lg:gap-32">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg text-[#252525]">About</h1>
              <ul className="flex flex-col gap-5 text-base font-semibold text-[#9b9b9b]">
                <li>About Us</li>
                <li>Courses</li>
                <li>Instructor</li>
                <li>Events</li>
                <li>Become A Teacher</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg text-[#252525]">Links</h1>
              <ul className="flex flex-col gap-5 text-base font-semibold text-[#9b9b9b]">
                <li>News & Blogs</li>
                <li>Library</li>
                <li>Gallery</li>
                <li>Partners</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg text-[#252525]">Support</h1>
              <ul className="flex flex-col gap-5 text-base font-semibold text-[#9b9b9b]">
                <li>Documentation</li>
                <li>FAQs</li>
                <li>Forum</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-6 lg:gap-0 items-center lg:justify-between lg:mt-24 py-10 pb-10 border-t pt-4">
          <div>
            © {date} Loctech. All Rights Reserved
          </div>
          <div className="flex flow-row gap-10 text-[#252525] font-semibold">
            <Link className="hover:text-[#0071dc] transition-colors duration-300 ease-in-out" href='#'>Terms of Use</Link>
            <Link className="hover:text-[#0071dc] transition-colors duration-300 ease-in-out" href='#'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}