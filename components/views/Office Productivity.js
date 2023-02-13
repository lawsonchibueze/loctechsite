import Card from "../Card";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../../models";
import { useState, useEffect } from "react";

export default function Office() {
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row gap-10">
        {courses.map((course, index) => {
          if (course.category === "OFFICE_PRODUCTIVITY") {
            return <Card key={index} course={course} />;
          }
        }).slice(0, 8)}
      </div>
    </div>
  );
}
