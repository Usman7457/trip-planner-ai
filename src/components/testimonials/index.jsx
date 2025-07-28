import React from "react";
import TestimonialBox from "./testimonialBox";

const Testimonials = () => {
  return (
    <>
      <div className="text-center mx-auto max-w-3xl pt-12 md:pb-10">
        <h2 className="text-center font-bold text-3xl md:text-4xl xl:text-5xl">
          Dont take our word for it
        </h2>
        <p className="mt-3 text-lg text-gray-500 md:text-xl">
          See what our users have to say about revolutionizing their travel
          experiences with Funadiq Trip Planner.
        </p>
      </div>

      <TestimonialBox />
    </>
  );
};

export default Testimonials;
