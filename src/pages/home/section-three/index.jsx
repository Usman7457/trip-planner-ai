import React from "react";
import HomeBox from "./home-box";

const SectionThree = () => {
  return (
    <>
      <div className="lazy-div" style={{ opacity: 1, transform: "none" }}>
        <div className="bg-background" id="features">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[#C8A0FF] font-medium uppercase tracking-wide text-primary-purple">
              Funadiq Trip Planner
              </h2>
              <h3 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
                The <span className="">only tool</span> you'll ever need!
              </h3>
              <p className="mx-auto mb-5 mt-6 max-w-2xl text-lg text-gray-500">
                Say goodbye to the stress of planning and hello to personalized
                recommendations, efficient itineraries, and seamless dining
                experiences.
              </p>
            </div>
            <HomeBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
