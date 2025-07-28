import React from "react";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl md:mt-14">
        <h2 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
          Journey Inspirations from Travelers
        </h2>
        <p className="mx-auto mt-10 max-w-3xl px-6 text-center text-base lg:px-12 lg:text-lg">
          Dive into unique
          <a className="text-[#E84D60] underline mx-1" href="/public-trips">
            trip itineraries
          </a>
          crafted by our global travelers. Find your next adventure and share
          your own journey with fellow explorers.
        </p>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-5 px-6 md:flex-row lg:gap-12 lg:px-12">
          <div className="flex flex-auto flex-col gap-5 lg:gap-12">
            <div
              className="group relative items-end overflow-hidden rounded-xl md:rounded-3xl flex h-[15rem] max-w-[50rem] md:h-[16rem]"
              style={{ transform: "none" }}
            >
              <Link className="h-full w-full" to="/jeddah">
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-gradient-to-t from-black/70 via-transparent via-40% to-black/40"></div>
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-transparent transition-colors duration-700 group-hover:bg-black/50"></div>
                <img
                  alt="Trip to Makkah"
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover transition-all duration-700 group-hover:scale-110 absolute h-full w-full"
                  style={{ color: "transparent" }}
                  src="img/jeddah.avif"
                />
                <div
                  className="relative z-[22] flex h-full flex-col justify-between p-4 md:p-7 lg:p-8"
                  user="[object Object]"
                >
                  <div className="absolute right-5 top-5 z-[20] rounded-lg bg-white ring ring-white ring-offset-2 transition-all duration-300 ease-in-out hover:bg-gray-200 group-hover:text-gray-700 md:right-8 md:top-[-58px] md:p-1 md:group-hover:top-8 xl:group-hover:top-8">
                    <svg
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 iconify iconify--material-symbols"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      Trip to Jeddah
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-white md:mt-5 md:text-base undefined">
                      Join me on an exciting 10-day journey through Tokyo, where
                      we'll visit iconic landmarks, indulge in delicious
                      cuisine, and immerse ourselves in the vibrant culture of
                      Japan's capital city.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="group items-end overflow-hidden rounded-xl md:rounded-3xl relative flex h-[15rem] max-w-[50rem] md:h-[25rem]"
              style={{ transform: "none" }}
            >
              <Link className="h-full w-full" to="/medina">
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-gradient-to-t from-black/70 via-transparent via-40% to-black/40"></div>
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-transparent transition-colors duration-700 group-hover:bg-black/50"></div>
                <img
                  alt="Trip to Medina"
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="transition-all duration-700 group-hover:scale-110 absolute h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="img/tunis-madinah.jpg"
                />
                <div
                  className="relative z-[22] flex h-full flex-col justify-between p-4 md:p-7 lg:p-8"
                  user="[object Object]"
                >
                  <div className="absolute right-5 top-5 z-[20] rounded-lg bg-white ring ring-white ring-offset-2 transition-all duration-300 ease-in-out hover:bg-gray-200 group-hover:text-gray-700 md:right-8 md:top-[-58px] md:p-1 md:group-hover:top-8 xl:group-hover:top-8">
                    <svg
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 iconify iconify--material-symbols"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      Trip to Medina
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-white md:mt-5 md:text-base undefined">
                      Embark on a thrilling 6-day journey through Dubai, United
                      Arab Emirates. Explore vibrant souks, iconic landmarks,
                      world-class shopping, and enchanting attractions. Join us
                      as we uncover the hidden gems and unforgettable
                      experiences that Dubai has to offer.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-2 hidden flex-col gap-5 md:flex lg:gap-12">
            <div
              className="group items-end overflow-hidden rounded-xl md:rounded-3xl relative flex h-[15rem] max-w-[50rem] md:h-[25rem]"
              style={{ transform: "none" }}
            >
              <Link className="h-full w-full" to="/mecca">
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-gradient-to-t from-black/70 via-transparent via-40% to-black/40"></div>
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-transparent transition-colors duration-700 group-hover:bg-black/50"></div>
                <img
                  alt="Trip to Jeddah"
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="transition-all duration-700 group-hover:scale-110 absolute h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="img/makkah-hotel.jpg"
                />
                <div
                  className="relative z-[22] flex h-full flex-col justify-between p-4 md:p-7 lg:p-8"
                  user="[object Object]"
                >
                  <div className="absolute right-5 top-5 z-[20] rounded-lg bg-white ring ring-white ring-offset-2 transition-all duration-300 ease-in-out hover:bg-gray-200 group-hover:text-gray-700 md:right-8 md:top-[-58px] md:p-1 md:group-hover:top-8 xl:group-hover:top-8">
                    <svg
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 iconify iconify--material-symbols"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      Trip to Makkah
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-white md:mt-5 md:text-base undefined">
                      Experience the best of New York City in just 7 days!
                      Explore iconic landmarks, indulge in delicious meals, and
                      immerse yourself in the vibrant culture of the city that
                      never sleeps.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="group items-end overflow-hidden rounded-xl md:rounded-3xl relative flex h-[15rem] max-w-[50rem] md:h-[18rem]"
              style={{ transform: "none" }}
            >
              <Link className="h-full w-full" to="/dammam">
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-gradient-to-t from-black/70 via-transparent via-40% to-black/40"></div>
                <div className="absolute right-0 top-0 z-[20] h-full w-full bg-transparent transition-colors duration-700 group-hover:bg-black/50"></div>
                <img
                  alt="Trip to Dammam"
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="transition-all duration-700 group-hover:scale-110 absolute h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="img/home-dammam.jpg"
                />
                <div
                  className="relative z-[22] flex h-full flex-col justify-between p-4 md:p-7 lg:p-8"
                  user="[object Object]"
                >
                  <div className="absolute right-5 top-5 z-[20] rounded-lg bg-white ring ring-white ring-offset-2 transition-all duration-300 ease-in-out hover:bg-gray-200 group-hover:text-gray-700 md:right-8 md:top-[-58px] md:p-1 md:group-hover:top-8 xl:group-hover:top-8">
                    <svg
                      aria-hidden="true"
                      role="img"
                      className="text-gray-700 iconify iconify--material-symbols"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      Trip to Dammam
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-white md:mt-5 md:text-base undefined">
                      Join me on a thrilling 5-day adventure in Rome, where
                      we'll explore ancient ruins, marvel at stunning
                      architecture, and indulge in mouthwatering pizza. Get
                      ready for an unforgettable experience!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
