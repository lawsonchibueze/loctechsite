import Accordion from "./Accordion";

export default function WhatToLearn({ course }) {
    return (
        <div>
            <h1 className="font-semibold text-2xl my-6">What you will be Learning</h1>
            <div className="lg:w-[65%]">
                <Accordion
                    course={course}
                />
            </div>
        </div>
    )
}