import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiPhone,
    FiTwitter
} from 'react-icons/fi'

export default function Banner() {
    return (
        <div>
            <div className="bg-violet-900 text-white flex justify-between items-center font-bold lg:px-20 px-4 h-14">
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FiPhone className='text-[#FFC221] w-5 h-5' /> +2348030887945
                    </div>
                    <div className='h-5 w-[1px] bg-gray-400 hidden lg:block'></div>
                    <div className='flex items-center gap-2'>
                        <FiMail className='text-[#FFC221] w-5 h-5' /> career@loctech.ng
                    </div>
                </div>
                <div className='lg:flex items-center gap-4 hidden font-semibold'>
                    <div>Log in</div>
                    <div className='h-5 w-[1px] bg-gray-400'></div>
                    <div>Register</div>
                    <FiTwitter />
                    <FiFacebook />
                    <FiInstagram />
                    <FiLinkedin />
                </div>
            </div>
        </div>
    )
}