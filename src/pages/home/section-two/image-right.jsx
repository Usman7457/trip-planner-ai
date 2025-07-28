import React from "react";

const ImageRight = () => {
  const imageUrl = "img/destinations.webp";
  const heading = "The most optimal";
  const paragraph =
    "Craft your perfect itinerary with Funadiq Trip Planner. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.";
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full p-6 sm:w-1/2 md:mt-8">
          <h3 className="mb-3 w-fit bg-[#dcffa0] text-2xl font-bold leading-none text-black md:text-3xl">
            {heading}
          </h3>
          <p className="text-gray-600">{paragraph}</p>
        </div>
        <div className="w-full p-6 sm:w-1/2">
          <img
            alt="The most optimal"
            loading="lazy"
            width="250"
            height="250"
            decoding="async"
            data-nimg="1"
            className="mx-auto"
            style={{ color: "transparent" }}
            src={imageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default ImageRight;
