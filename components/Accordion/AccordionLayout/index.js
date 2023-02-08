import { BiMinus, BiPlus } from 'react-icons/bi'

export default function AccordionLayout({ title, children, index, activeIndex, setActiveIndex }) {
    const toggle = (index) => {
        if (activeIndex === index) {
            return setActiveIndex(null)
        }

        setActiveIndex(index)
    }

    return (
        <div>
            <div onClick={() => toggle(index)} className='flex items-center gap-4 p-2 rounded bg-[#f3f3f3] cursor-pointer'>
                <div className="flex items-center justify-center">
                    {
                        (activeIndex === index)
                            ? <BiMinus className='w-5 h-5 text-gray-700' />
                            : <BiPlus className='w-5 h-5 text-gray-700' />
                    }
                </div>
                <div className='flex'>
                    <div className='text-gray-700'>{title}</div>
                </div>
            </div>
            {(activeIndex === index) && (
                <div className="text-gray-900 bg-[#f3f3f3]  flex flex-col gap-6 lg:px-8 px-4 py-4 mb-4">
                    {children}
                </div>
            )}
        </div>
    )
}