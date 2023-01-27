import Card from '../Card'
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../../models";
import { useState, useEffect } from "react";

export default function All() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetchCourses();
        async function fetchCourses() {
            const courseData = await DataStore.query(Course);
            setCourses(courseData);
            console.log(courseData);
        }
        DataStore.observe(Course).subscribe((msg) => {
            console.log(msg.Course, msg.opType, msg.element);
        });
    }, []);

    return (
        <div>
            <div className='grid lg:grid-cols-4 grid-flow-row gap-6'>
                {courses.map((course, index) => {
                    if (course.isFeatured === true) {
                        return (
                            <Card key={index} course={course} />
                        )
                    }
                })}
            </div>
        </div>
    )
}