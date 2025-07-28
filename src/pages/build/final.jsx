import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const FinalTrip = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Final Trip - Funadiq Trip Planner</title>
      </Helmet>

      <div className="z-50 flex flex-col-reverse lg:flex-row" id="right-map">
        <section
          id="left-panel"
          className="responsive-left-panel relative w-full"
        >
          <div className="relative">
            <header className="sticky top-0 z-[60] flex w-full items-center justify-between gap-3 px-4 py-3.5 transition-all md:px-12 md:py-3 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Link
                  className="flex items-center gap-2.5 rounded-lg text-base text-black md:text-lg"
                  to="/new-trip"
                >
                  <div className="rounded-lg px-2 py-1 hover:bg-gray-200">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-left"
                      className="svg-inline--fa fa-arrow-left -leading-[3px] -my-0.5 rounded-lg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </header>
            <div>
              <div className="relative -mt-[65px] flex h-[16rem] items-end justify-start md:h-[34rem]">
                <img
                  alt="Mecca"
                  fetchpriority="high"
                  width="1920"
                  height="1080"
                  decoding="async"
                  data-nimg="1"
                  className="text-white absolute flex h-full w-full flex-col items-start justify-end bg-black bg-cover bg-center bg-no-repeat object-cover"
                  src="img/Kaaba.jpeg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-20 flex w-full flex-col gap-3 px-4 py-6 md:px-12 md:py-10">
                  <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <h1 className="mb-1.5 line-clamp-2 text-4xl font-bold text-white/90 md:mb-5 md:text-4xl lg:text-6xl">
                        Mecca
                      </h1>
                    </div>
                    <div className="flex w-full items-end justify-between gap-3 md:w-fit md:flex-col-reverse">
                      <div className="flex items-center gap-2"></div>
                    </div>
                  </div>
                </div>
                <div className="safe-inset-0 absolute h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.7)] transition-colors"></div>
              </div>
            </div>
            <div className="md:pt-10">
              <div className="animate-slideUpAndFadeSlow">
                <div className="flex w-full gap-2 px-4 md:px-12">
                  <button
                    className="pointer-events-auto rounded-full border border-solid border-gray-300 p-1.5 hover:bg-gray-100 sm:hidden"
                    type="button"
                    id="radix-:rh:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ph"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"
                      ></path>
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    <Link to="/trip">
                      <button className="hidden items-center gap-1 rounded-full border border-solid border-gray-200 py-1 text-sm transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-black sm:flex bg-white px-3 text-gray-700">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--material-symbols"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                          ></path>
                        </svg>
                        Change Destination
                      </button>
                    </Link>
                    <Link to="/trip">
                      <button className="min-h-[30px] items-center gap-1 whitespace-nowrap rounded-full border border-solid px-3 text-sm transition-colors border-gray-200 text-gray-700 hover:!border-gray-300 hover:text-black hidden hover:bg-gray-50 sm:flex">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--material-symbols"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                          ></path>
                        </svg>
                        Change Dates
                      </button>
                    </Link>
                    <Link to="/trip">
                      <button className="min-h-[30px] items-center gap-1 whitespace-nowrap rounded-full border border-solid px-3 text-sm transition-colors border-gray-200 text-gray-700 hover:!border-gray-300 hover:text-black hidden hover:bg-gray-50 sm:flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--material-symbols"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                          ></path>
                        </svg>
                        Change People
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 flex flex-col w-full px-4 md:px-12">
                  <div className="w-full">
                    <div className="mx-0 w-full md:mx-0"></div>
                    <div className="flex flex-col gap-3 w-full bg-white itinerary-days-0">
                      <div data-orientation="vertical" className="w-full">
                        <div
                          data-state="closed"
                          data-orientation="vertical"
                          className="overflow-hidden w-full"
                        >
                          <div
                            type="button"
                            aria-controls="radix-:rl:"
                            aria-expanded="false"
                            data-state="closed"
                            data-orientation="vertical"
                            id="day-accordion-0-0"
                            className="__className_d37563 bg-white flex w-full justify-between !p-0 !px-0 text-black transition-all md:!px-0 md:hover:border-gray-400"
                            data-radix-collection-item=""
                          >
                            <div
                              id="destination-0-first-itinerary-day"
                              className="group flex w-full flex-row items-center justify-between gap-3 border-b border-solid border-gray-300 py-4 pb-8 pl-0 md:pl-0"
                            >
                              <div className="flex items-start font-medium transition-all md:text-2xl w-full">
                                <div className="relative w-full">
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 1 - Thursday 5th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 2 - Friday 6th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 3 - Saturday 7th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 4 - Sunday 8th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 5 - Monday 9th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 6 - Tuesday 10th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 7 - Wednesday 11th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 8 - Thursday 12th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 9 - Friday 13th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion className="flex items-center gap-1 w-full">
                                    <AccordionItem
                                      className="w-full my-3 text-gray-800"
                                      header="Day 10 - Saturday 14th October 2024"
                                    >
                                      <div className="my-8 w-full">
                                        <div className="group flex gap-1 w-full">
                                          <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                            <img
                                              alt="img"
                                              loading="lazy"
                                              width="200"
                                              height="200"
                                              decoding="async"
                                              data-nimg="1"
                                              className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                                              style={{ color: "transparent" }}
                                              src="/img/1.jpeg"
                                            />
                                            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                              <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                  <div className="w-full">
                                                    <button className="w-full text-start sm:w-full md:hover:underline">
                                                      دارة القهوة
                                                    </button>
                                                    <div className="float-right items-center gap-3">
                                                      <img
                                                        alt="دارة القهوة"
                                                        loading="lazy"
                                                        width="90"
                                                        height="90"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                                        style={{
                                                          color: "transparent",
                                                        }}
                                                        src="/img/1.jpeg"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="float-right items-center gap-3"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4 flex items-center gap-2">
                                                <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                                                  <span className="text-gray-500">
                                                    7:30 AM - 8:30 AM
                                                  </span>
                                                </div>
                                                <div className="text-xl">•</div>
                                                <div className="flex items-center gap-2">
                                                  <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                                    <span>$60</span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mx-5 w-full flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                                          <div className="flex items-center justify-center">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="person-walking"
                                              className="svg-inline--fa fa-person-walking text-tp-lightgray mr-2"
                                              role="img"
                                              viewBox="0 0 320 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                                              ></path>
                                            </svg>
                                            <span>3-4 min</span>
                                            <a
                                              rel="noopener noreferrer"
                                              className="group flex cursor-pointer no-underline"
                                              href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389144,39.846823&amp;destination=Jabal Thawr Cultural District&amp;destination_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;travelmode=walking&amp;zoom=14"
                                            >
                                              <p className="mx-3">~</p>
                                              <p className="text-[12px] text-gray-600 hover:underline">
                                                Directions
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </AccordionItem>
                                  </Accordion>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="w-full border px-4 pt-12 md:px-12 pb-12">
                    <h2 className="text-lg font-[500] md:text-xl">
                      Budget breakdown:
                      <span className="py-[5px] pl-1 text-lg font-[400]">
                        SAR 1037
                        <span className="text-sm"> In total</span>
                      </span>
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-4 text-base">
                      <div className="flex items-center gap-2 text-lg">
                        <div className="flex gap-1">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 p-1 text-gray-700">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="ticket"
                              className="svg-inline--fa fa-ticket h-4 w-4 text-base"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                              ></path>
                            </svg>
                          </span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 p-1 text-gray-700">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="utensils"
                              className="svg-inline--fa fa-utensils h-4 w-4 text-base"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <span className="text-base">
                          Activities &amp; Food:
                        </span>
                        <span className="text-base font-medium">SAR 968</span>
                      </div>
                      <div className="flex items-center gap-2 text-lg">
                        <div className="flex items-center gap-2 text-lg">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 p-1 text-gray-700">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="bus"
                              className="svg-inline--fa fa-bus h-4 w-4 text-base"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                              ></path>
                            </svg>
                          </span>
                          <span className="text-base">Transport:</span>
                          <span className="text-base font-medium">SAR 69</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 pt-5 text-lg md:px-12 md:py-8 md:text-xl lg:justify-end undefined">
                  <div className="ml-auto w-fit">
                    <Link
                      className="ml-auto flex items-center justify-center gap-2 rounded-full bg-black px-6 py-2 text-base text-white ring-2 ring-black ring-offset-2 transition-all hover:scale-110 hover:bg-gray-900 disabled:bg-gray-300 disabled:text-gray-500 disabled:ring-gray-300 md:text-lg"
                      to="/trips"
                    >
                      <span>Save My Trip</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="responsive-left-panel pointer-events-none fixed bottom-5 left-0 z-[60] flex w-full justify-end">
              <button className="pointer-events-auto mr-10 flex items-center gap-1 rounded-full border border-solid border-primary-purple/50 bg-[#f4edff] p-2 px-5 text-base shadow-sm shadow-[#c177ff] transition-colors hover:bg-[#fcfbff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="mb-0.5 inline-flex text-lg text-primary-purple-2 iconify iconify--mage"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"
                  ></path>
                </svg>
                <span className="leading-3">Ask Trippy</span>
              </button>
            </div>
          </div>
        </section>
        <section className="fixed right-0 top-0 z-[60] h-screen w-full overflow-hidden border-l border-solid border-gray-200 transition-transform lg:sticky lg:w-[50%] translate-x-full md:block lg:translate-x-0">
          <div className="relative flex h-full w-full flex-row-reverse">
            <iFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.97440853497!2d39.846546599999996!3d21.4360154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1725100940408!5m2!1sen!2s"
              style={{ border: "0" }}
              width="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iFrame>
          </div>
        </section>
        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            inset: "16px",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    </>
  );
};

export default FinalTrip;
