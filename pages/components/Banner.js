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
            <div className="bg-red-700 text-white flex justify-between items-center font-bold lg:px-20 px-4 h-14">
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FiPhone className='text-white w-5 h-5' /> +2347038885466
                    </div>
                    <div className='h-5 w-[1px] bg-gray-400 hidden lg:block'></div>
                    <div className='flex items-center gap-2'>
                        <FiMail className='text-white w-5 h-5' /> customercare@loctechng.com
                    </div>
                </div>
                <div className='lg:flex items-center gap-4 hidden font-medium'>
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