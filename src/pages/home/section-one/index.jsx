import React from "react";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <>
      <div className="relative z-[30] mt-24 h-auto min-h-0 w-full">
        <main className="relative h-full w-full rounded-3xl bg-white pt-8 md:mx-auto">
          <div className="flex flex-col gap-5">
            <div className="px-4 md:px-6 flex flex-col gap-4">
              <h1 className="sr-only text-4xl font-medium tracking-tight text-gray-900 xl:inline xl:text-4xl">
                Funadiq Trip Planner
              </h1>
              <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 md:text-5xl xl:text-7xl">
                Your Next Journey, Optimized
              </h2>
              <p className="mx-auto my-3 max-w-2xl text-center text-gray-700 sm:mx-auto sm:mt-5 sm:text-base md:mt-5 md:text-lg xl:text-xl">
                Build, personalize, and optimize your itineraries with our free
                AI trip planner. Designed for vacations, workations, and
                everyday adventures.
              </p>
              <Link
                className="mx-auto flex items-center gap-2 rounded-full bg-[#00501E] px-8 py-3 text-xl text-white transition-colors hover:bg-[#016C23]"
                to="/community-trips"
              >
                <svg
                  aria-hidden="true"
                  role="img"
                  className="mb-1 text-xl iconify iconify--bx"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2M5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3m0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M19 14c-1.654 0-3 1.346-3 3c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3m0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5"
                  ></path>
                </svg>
                Community Trips
              </Link>
            </div>
            <img
              alt="Hawaii Illustration"
              loading="lazy"
              width="1080"
              height="720"
              decoding="async"
              data-nimg="1"
              className="mx-auto mt-6 h-[30vh] w-auto select-none object-cover lg:h-[40vh]"
              style={{ color: "transparent" }}
              src="img/hawaii-illustration.png"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default SectionOne;
