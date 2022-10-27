import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const allCourses = useLoaderData([]);
  return (
    <>
      <h2 className="text-2xl text-center my-2 font-bold">All Courses</h2>
      <div className="grid md:grid-cols-2 gap-5 w-full p-12">
        {allCourses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Courses;
