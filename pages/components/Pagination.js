import { useState } from "react";
import { testimonials } from "./data";

export default function Pagination({ totalPages }) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            {testimonials.map((item, index) => (
                <div key={index} className='flex flex-row gap-4'>
                    <div className="flex flex-row gap-4">
                        {currentPage === index + 1 && item.paragraph}
                    </div>
                    <button
                        onClick={() => setCurrentPage(index + 1)}
                        className='flex flex-row gap-3'
                    >
                        {index + 1}
                    </button>
                </div>
            ))}
        </div>
    )
}