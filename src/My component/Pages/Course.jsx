import React from 'react';

const Course = ({course}) => {
    console.log(course);
    return (
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={course.picture} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">{course.name}</h1>
              
              <button className="rounded-full bg-orange-500 py-4 px-6 mt-5 font-com text-sm capitalize text-white shadow shadow-black/60">Details</button>
            </div>
          </div>
    );
};

export default Course;