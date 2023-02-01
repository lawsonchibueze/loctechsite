import { useEffect, useState } from "react"
import All from "./All"
import Art from "./Art&Design"
import Featured from "./Featured"
import Popularity from "./Popularity"
import Trending from "./Trending"
import { Course } from "../../../models"
import { DataStore } from "@aws-amplify/datastore";

const allTabs = [
    {
        component: <All />
    },
    {
        component: <Popularity />
    },
    {
        component: <Trending />
    },
    {
        component: <Featured />
    },
    {
        component: <Art />
    },
]

export default function Views() {
    const [openTab, setOpenTab] = useState(0)
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetchCourses();
        async function fetchCourses() {
            const courseData = await DataStore.query(Course);
            setCourses(courseData);
        }
        DataStore.observe(Course).subscribe((msg) => {
            console.log(msg.Course, msg.opType, msg.element);
        });
    }, []);

    return (
        <div className='lg:px-32 px-4 mt-20'>
            <h1 className='text-3xl font-semibold text-gray-900 mb-10'>Explore Our Courses</h1>
            <div className="flex lg:flex-row flex-col gap-20">
                <div className="flex justify-between h-fit p-2 sticky top-10">
                    <div className="lg:flex gap-4 hidden flex-col justify-center">
                        {courses.map((course, index) => {
                            return (
                                <div
                                    className={"py-2 px-4 flex items-center cursor-pointer font-semibold transition-all duration-300 ease-in-out text-lg " +
                                        (openTab === index ? 'bg-white text-violet-900 border-l-4 border-violet-700 rounded-sm' : 'bg-gray-100')
                                    }
                                    onClick={(e) => setOpenTab(index)}
                                    key={index}
                                >
                                    {course.category.replaceAll("_", " ")}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex-1">
                    {allTabs.map((item, index) => {
                        return (
                            <div
                                className={index === openTab ? "block" : "hidden"}
                                key={index}
                            >
                                {item.component}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}