import React from "react";

const ImageLeft = () => {
  return (
    <>
      <div className="flex flex-col-reverse flex-wrap sm:flex-row">
        <div className="w-full p-6 sm:w-1/2">
          <img
            alt="The most optimal"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="mx-auto"
            style={{ color: "transparent" }}
            src="img/map.webp"
          />
        </div>
        <div className="mt-8 w-full p-6 sm:w-1/2">
          <div className="align-middle">
            <h3 className="mb-3 w-fit bg-[#dcffa0] text-2xl font-bold leading-none text-black md:text-3xl">
              Get Inspired
            </h3>
            <p className="mb-8 text-gray-600">
              Extract valuable travel insights from Instagram reels and TikToks,
              explore the mentioned explore-sights, and effortlessly include
              them in your own adventure with Funadiq Trip Planner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLeft;
