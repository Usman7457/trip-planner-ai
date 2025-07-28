import React from "react";
import SectionFourBox from "./sectionFourBox";

const SectionFour = () => {
  const title = (
    <>
      Customized <span className="font-semibold">Itineraries</span> for Every
      Travel Dream
    </>
  );
  const description =
    "Funadiq Trip Planner is your ultimate companion for any travel scenario. Whether it's a solo adventure, a family vacation, or a group expedition, our app tailors every aspect of your journey. Experience the convenience of:";
  return (
    <>
      <div className="border-t border-solid border-gray-300">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex w-full flex-col justify-center gap-2">
            <h1 className="text-center text-3xl font-medium mt-6">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-center">{description}</p>
          </div>
          <SectionFourBox />
        </div>
      </div>
    </>
  );
};

export default SectionFour;
