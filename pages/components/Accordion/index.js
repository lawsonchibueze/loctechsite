import { useState } from "react";
import { BsDot } from "react-icons/bs";
import AccordionLayout from "./AccordionLayout";

export default function Accordion({ course }) {
    const [activeIndex, setActiveIndex] = useState(false);

    return (
        <div className='flex flex-col gap-3'>
            {course.curriculum
                .map((lesson, index) => {
                    return (
                        <AccordionLayout
                            key={index}
                            title={lesson}
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        >
                            <div className="flex flex-row items-center gap-2">
                                <BsDot className="w-6 h-6 text-violet-700" />
                                {lesson}
                            </div>
                        </AccordionLayout>
                    )
                })}
        </div>
    )
}