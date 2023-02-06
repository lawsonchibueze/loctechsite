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
        <div className='lg:px-20 px-4 mt-20 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-medium text-[#252525] mb-10'>Explore Our Courses</h1>
            <div className="flex flex-col gap-10">
                {/* <div className="flex justify-between h-fit p-2"> */}
                <div className="lg:flex gap-2 hidden flex-row justify-center items-center">
                    {courses.map((course, index) => {
                        return (
                            <div
                                className={"py-2 px-4 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out text-base " +
                                    (openTab === index && 'bg-white text-violet-900 border-l-4 border-violet-700 rounded-sm shadow-lg')
                                }
                                onClick={() => setOpenTab(index)}
                                key={index}
                            >
                                {course.category.replaceAll("_", " ")}
                            </div>
                        )
                    })}
                </div>
                {/* </div> */}
                <div className="">
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