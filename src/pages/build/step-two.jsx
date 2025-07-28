import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

const StepTwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Step Two - Funadiq Trip Planner</title>
      </Helmet>
      <div className="z-50 flex flex-col-reverse lg:flex-row" id="right-map">
        <section
          id="left-panel"
          className="responsive-left-panel relative flex min-h-screen w-full flex-col justify-between"
        >
          <div>
            <div className="sticky top-0 z-[15] bg-white">
              <div className="relative w-full">
                <div className="flex w-full items-center justify-between  px-4 py-3.5 md:px-12 md:py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      className="flex items-center gap-2.5 rounded-lg bg-white text-base text-black md:text-lg"
                      to="/step-one"
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
                      <div className="flex items-center gap-2 ">
                        <img
                          alt="Trip Plan Logo"
                          loading="lazy"
                          width="26"
                          height="26"
                          decoding="async"
                          data-nimg="1"
                          className="h-7 w-7"
                          src="img/new-logo.webp"
                          style={{ color: "transparent" }}
                        />
                        <h2 className="hidden whitespace-nowrap text-lg font-medium md:flex">
                        Funadiq Trip Planner
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="rounded-md border border-solid border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    Step 2 of 2
                  </div>
                </div>
              </div>
              <span
                className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-77z270"
                style={{
                  backgroundColor: "#f1f1f1",
                  position: "relative",
                  overflow: "hidden",
                  display: "block",
                  height: "4px",
                  zIndex: "0",
                }}
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span
                  className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm"
                  style={{
                    transform: "translateX(0%)",
                    background:
                      "linear-gradient(90deg, rgba(195, 255, 93, 1) 0%, rgba(192, 255, 173, 1) 56%, rgba(234, 144, 255, 1) 100%)",
                    width: "100%",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    top: "0",
                    WebkitTransition: "transform .4s linear",
                    transition: "transform .4s linear",
                    transformOrigin: "left",
                    backgroundColor: "#1976d2",
                  }}
                ></span>
              </span>
            </div>
            <div className="my-8">
              <div>
                <div className="px-3 md:px-12">
                  <div>
                    <div className="flex flex-col justify-start gap-4">
                      <h2 className="flex w-fit gap-2 text-start text-2xl font-medium md:text-3xl">
                        Set your lodging (Optional)
                        <button
                          className="md:hidden grid h-7 w-7 place-items-center rounded-full border border-solid border-gray-200 bg-gray-50 text-sm"
                          aria-label="Update dimensions"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rl:"
                          data-state="closed"
                          trigger="[object Object]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="mb-0.5 iconify iconify--material-symbols"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 7q-.825 0-1.412-.587T10 5t.588-1.412T12 3t1.413.588T14 5t-.587 1.413T12 7m0 14q-.625 0-1.062-.437T10.5 19.5v-9q0-.625.438-1.062T12 9t1.063.438t.437 1.062v9q0 .625-.437 1.063T12 21"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </div>
                    <p className="mb-6 hidden text-base text-gray-600 md:mt-5 md:block md:text-start md:text-lg">
                      Add you lodging, and we'll craft the ideal route around
                      your stay. Optimized adventures start at your doorstep! 🏨
                    </p>
                  </div>
                  <div className="mt-3">
                    <div>
                      <div className="__variable_d37563 text-tp-purple-2 relative flex items-center gap-2">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="hotel"
                          className="svg-inline--fa fa-hotel absolute left-5 z-10 text-sm"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
                          ></path>
                        </svg>
                        <div className="relative w-full __className_d37563">
                          <input
                            className="w-full rounded-md border border-solid border-gray-200 p-2 pl-10 text-base outline-none hover:border-gray-300 focus:ring-0 focus-visible:border-gray-400 focus-visible:ring-0"
                            placeholder="Search your stay address or hotel name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-4 mt-8 md:mx-12">
                <h3 className="mb-2 text-xl font-medium text-purple-400 md:text-2xl">
                  Top Hotel Picks Just For You! ✨
                </h3>
                <p className="mb-6 text-gray-700">
                  We've picked hotels that minimize your commute and maximize
                  your sightseeing. Enjoy a hassle-free stay! 🤩
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id="hotel-bk-330253-0"
                    className="group relative flex h-auto min-h-[11rem] cursor-pointer flex-row items-start rounded-lg border-solid bg-cover bg-center !p-0 transition-all md:h-auto md:gap-2 md:!p-4  __className_d37563 border-2 shadow-xl"
                    href="https://www.stay22.com/allez/booking?aid=tripplannerai&amp;campaign=build-itinerary~a428972a-21d2-4cc9-b6b6-e3a18d58409b~date:2024-07-23&amp;checkin=2024-07-25&amp;checkout=2024-07-25&amp;link=https%3A//www.booking.com/hotel/fr/de-blois.html%3Faid%3D1607597%26checkin%3D2024-10-21%26checkout%3D2024-10-22%26no_rooms%3D1%26group_adults%3D3%26selected_currency%3DUSD"
                  >
                    <div className="h-[11rem] w-[11rem] overflow-hidden rounded-l-md md:h-[13rem] md:rounded-md">
                      <img
                        alt="Enjoy Hostel hotel"
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        data-nimg="1"
                        className="pointer-events-none h-full overflow-hidden  bg-black bg-cover bg-center object-cover shadow-md md:h-[13rem] md:w-[15rem] "
                        src="img/enjoy-hotel.jpeg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex h-[11rem] w-full flex-col justify-between p-2 md:ml-2 md:h-[13rem] md:flex-row md:p-0">
                      <div className="flex h-full w-full flex-col justify-between">
                        <div>
                          <div className="">
                            <h2 className="relative line-clamp-1 text-base font-bold group-hover:underline md:text-xl">
                              Enjoy Hostel
                            </h2>
                            <img
                              alt="Logo de Booking.com"
                              loading="lazy"
                              width="1000"
                              height="700"
                              decoding="async"
                              data-nimg="1"
                              className="mb-1 w-auto object-cover  mt-1 h-4 md:h-5"
                              src="img/booking-logo.webp"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex flex-col items-start gap-1 md:mt-1 md:items-start">
                              <p className="mt-1 line-clamp-1 flex items-center gap-1 overflow-clip text-xs text-gray-500 md:text-sm">
                                <span className="line-clamp-1">
                                  5 Rue Des Plantes, Paris
                                </span>
                              </p>
                              <span className="rounded-sm bg-purple-100 px-1 py-0.5 text-xs md:text-base">
                                Best possible location 🎉 🤫
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                            <p className="line-clamp-1 flex items-center gap-1 text-xs md:mt-1.5 md:gap-2 md:text-base">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base text-gray-500 md:text-lg iconify iconify--material-symbols"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M5 21V10.85L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V21h-2v-3H7v3zm2-9h10v-2H7zm0 4h10v-2H7zm1.75-8h6.5L12 5.525z"
                                ></path>
                              </svg>
                              <span className="font-medium text-gray-800">
                                Hostel
                              </span>
                            </p>
                            <p className="items-center gap-1 text-xs text-[#008234] md:gap-2 md:text-base hidden opacity-0 md:flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base md:text-lg iconify iconify--solar"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                >
                                  <path
                                    strokeLinejoin="round"
                                    d="m8.5 12.5l2 2l5-5"
                                  ></path>
                                  <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path>
                                </g>
                              </svg>
                              <span className="whitespace-nowrap font-medium">
                                Free cancellation
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-auto flex w-full items-end justify-between gap-2 md:w-fit md:flex-col">
                        <div className="flex w-fit flex-row-reverse items-center justify-between gap-1 md:flex-row md:gap-2">
                          <div>
                            <p className="-my-0.5 whitespace-nowrap text-xs md:my-0 md:text-end md:text-base">
                              Okay
                            </p>
                            <p className="line-clamp-1 whitespace-nowrap text-end text-[10px] font-medium text-gray-500 md:text-xs">
                              5650 reviews
                            </p>
                          </div>
                          <span className="mb-1 rounded-md bg-green-800 p-0.5 px-1 text-sm text-white md:mb-0 md:text-lg md:font-semibold">
                            6.9
                          </span>
                        </div>
                        <div className="mt-[-3.5rem] flex flex-col justify-end">
                          <span className="ml-auto line-clamp-1 text-end text-[11px] text-gray-500 md:mt-[8rem] md:text-sm">
                            2 nights, 2 people
                          </span>
                          <div className="mr-1 flex items-center justify-end gap-1">
                            <span className="text-base font-bold md:text-2xl">
                              $149.0
                            </span>
                            <span className="text-sm md:text-base">/night</span>
                          </div>
                          <button className="ml-auto flex h-fit items-center gap-1 whitespace-nowrap rounded-md px-2 py-1 text-xs text-white transition-all disabled:cursor-not-allowed md:px-3 md:py-1.5 md:text-sm bg-black enabled:hover:bg-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="text-xs iconify iconify--ep"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496"
                              ></path>
                            </svg>
                            Select hotel
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id="hotel-bk-657072-0"
                    className="group relative flex h-auto min-h-[11rem] cursor-pointer flex-row items-start rounded-lg border-solid bg-cover bg-center !p-0 transition-all md:h-auto md:gap-2 md:!p-4  __className_d37563  border border-gray-100 shadow-md md:border-gray-300 md:shadow-none md:hover:border-gray-400"
                    href="https://www.stay22.com/allez/booking?aid=tripplannerai&amp;campaign=build-itinerary~a428972a-21d2-4cc9-b6b6-e3a18d58409b~date:2024-07-23&amp;checkin=2024-07-25&amp;checkout=2024-07-25&amp;link=https%3A//www.booking.com/hotel/fr/ibis-budget-paris-la-villette.html%3Faid%3D1607597%26checkin%3D2024-10-21%26checkout%3D2024-10-22%26no_rooms%3D1%26group_adults%3D3%26selected_currency%3DUSD"
                  >
                    <div className="h-[11rem] w-[11rem] overflow-hidden rounded-l-md md:h-[13rem] md:rounded-md">
                      <img
                        alt="ibis Budget Paris La Villette 19ème hotel"
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        data-nimg="1"
                        className="pointer-events-none h-full overflow-hidden  bg-black bg-cover bg-center object-cover shadow-md md:h-[13rem] md:w-[15rem] "
                        src="img/ibis-hotel.jpeg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex h-[11rem] w-full flex-col justify-between p-2 md:ml-2 md:h-[13rem] md:flex-row md:p-0">
                      <div className="flex h-full w-full flex-col justify-between">
                        <div>
                          <div className="">
                            <h2 className="relative line-clamp-1 text-base font-bold group-hover:underline md:text-xl">
                              ibis Budget Paris La Villette 19ème
                            </h2>
                            <img
                              alt="Logo de Booking.com"
                              loading="lazy"
                              width="1000"
                              height="700"
                              decoding="async"
                              data-nimg="1"
                              className="mb-1 w-auto object-cover  mt-1 h-4 md:h-5"
                              src="img/booking-logo.webp"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex flex-col items-start gap-1 md:mt-1 md:items-start">
                              <p className="mt-1 line-clamp-1 flex items-center gap-1 overflow-clip text-xs text-gray-500 md:text-sm">
                                <span className="line-clamp-1">
                                  57 - 63 Avenue Jean Jaures 19 Arr. , Paris
                                </span>
                              </p>
                              <span className="line-clamp-1 text-xs md:text-base">
                                1.1 km to best possible location
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                            <p className="line-clamp-1 flex items-center gap-1 text-xs md:mt-1.5 md:gap-2 md:text-base">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base text-gray-500 md:text-lg iconify iconify--material-symbols"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1 19V4h2v10h8V6h8q1.65 0 2.825 1.175T23 10v9h-2v-3H3v3zm6-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"
                                ></path>
                              </svg>
                              <span className="font-medium text-gray-800">
                                Hotel
                              </span>
                            </p>
                            <p className="items-center gap-1 text-xs text-[#008234] md:gap-2 md:text-base hidden opacity-0 md:flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base md:text-lg iconify iconify--solar"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                >
                                  <path
                                    strokeLinejoin="round"
                                    d="m8.5 12.5l2 2l5-5"
                                  ></path>
                                  <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path>
                                </g>
                              </svg>
                              <span className="whitespace-nowrap font-medium">
                                Free cancellation
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-auto flex w-full items-end justify-between gap-2 md:w-fit md:flex-col">
                        <div className="flex w-fit flex-row-reverse items-center justify-between gap-1 md:flex-row md:gap-2">
                          <div>
                            <p className="-my-0.5 whitespace-nowrap text-xs md:my-0 md:text-end md:text-base">
                              Good
                            </p>
                            <p className="line-clamp-1 whitespace-nowrap text-end text-[10px] font-medium text-gray-500 md:text-xs">
                              10883 reviews
                            </p>
                          </div>
                          <span className="mb-1 rounded-md bg-green-800 p-0.5 px-1 text-sm text-white md:mb-0 md:text-lg md:font-semibold">
                            7.2
                          </span>
                        </div>
                        <div className="mt-[-3.5rem] flex flex-col justify-end">
                          <span className="ml-auto line-clamp-1 text-end text-[11px] text-gray-500 md:mt-[8rem] md:text-sm">
                            2 nights, 2 people
                          </span>
                          <div className="mr-1 flex items-center justify-end gap-1">
                            <span className="text-base font-bold md:text-2xl">
                              $128.0
                            </span>
                            <span className="text-sm md:text-base">/night</span>
                          </div>
                          <button className="ml-auto flex h-fit items-center gap-1 whitespace-nowrap rounded-md px-2 py-1 text-xs text-white transition-all disabled:cursor-not-allowed md:px-3 md:py-1.5 md:text-sm bg-black enabled:hover:bg-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="text-xs iconify iconify--ep"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496"
                              ></path>
                            </svg>
                            Select hotel
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id="hotel-bk-542011-0"
                    className="group relative flex h-auto min-h-[11rem] cursor-pointer flex-row items-start rounded-lg border-solid bg-cover bg-center !p-0 transition-all md:h-auto md:gap-2 md:!p-4  __className_d37563  border border-gray-100 shadow-md md:border-gray-300 md:shadow-none md:hover:border-gray-400"
                    href="https://www.stay22.com/allez/booking?aid=tripplannerai&amp;campaign=build-itinerary~a428972a-21d2-4cc9-b6b6-e3a18d58409b~date:2024-07-23&amp;checkin=2024-07-25&amp;checkout=2024-07-25&amp;link=https%3A//www.booking.com/hotel/fr/ibis-budget-porte-d-orleans-paris-14.html%3Faid%3D1607597%26checkin%3D2024-10-21%26checkout%3D2024-10-22%26no_rooms%3D1%26group_adults%3D3%26selected_currency%3DUSD"
                  >
                    <div className="h-[11rem] w-[11rem] overflow-hidden rounded-l-md md:h-[13rem] md:rounded-md">
                      <img
                        alt="ibis budget Porte D'Orleans hotel"
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        data-nimg="1"
                        className="pointer-events-none h-full overflow-hidden  bg-black bg-cover bg-center object-cover shadow-md md:h-[13rem] md:w-[15rem] "
                        src="img/ibis-hotel.jpeg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex h-[11rem] w-full flex-col justify-between p-2 md:ml-2 md:h-[13rem] md:flex-row md:p-0">
                      <div className="flex h-full w-full flex-col justify-between">
                        <div>
                          <div className="">
                            <h2 className="relative line-clamp-1 text-base font-bold group-hover:underline md:text-xl">
                              ibis budget Porte D'Orleans
                            </h2>
                            <img
                              alt="Logo de Booking.com"
                              loading="lazy"
                              width="1000"
                              height="700"
                              decoding="async"
                              data-nimg="1"
                              className="mb-1 w-auto object-cover  mt-1 h-4 md:h-5"
                              src="img/hostelworld-logo.webp"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex flex-col items-start gap-1 md:mt-1 md:items-start">
                              <p className="mt-1 line-clamp-1 flex items-center gap-1 overflow-clip text-xs text-gray-500 md:text-sm">
                                <span className="line-clamp-1">
                                  15-21 Boulevard Romain Rolland, Paris
                                </span>
                              </p>
                              <span className="line-clamp-1 text-xs md:text-base">
                                1.1 km to best possible location
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                            <p className="line-clamp-1 flex items-center gap-1 text-xs md:mt-1.5 md:gap-2 md:text-base">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base text-gray-500 md:text-lg iconify iconify--material-symbols"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1 19V4h2v10h8V6h8q1.65 0 2.825 1.175T23 10v9h-2v-3H3v3zm6-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"
                                ></path>
                              </svg>
                              <span className="font-medium text-gray-800">
                                Hotel
                              </span>
                            </p>
                            <p className="items-center gap-1 text-xs text-[#008234] md:gap-2 md:text-base hidden opacity-0 md:flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base md:text-lg iconify iconify--solar"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                >
                                  <path
                                    strokeLinejoin="round"
                                    d="m8.5 12.5l2 2l5-5"
                                  ></path>
                                  <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path>
                                </g>
                              </svg>
                              <span className="whitespace-nowrap font-medium">
                                Free cancellation
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-auto flex w-full items-end justify-between gap-2 md:w-fit md:flex-col">
                        <div className="flex w-fit flex-row-reverse items-center justify-between gap-1 md:flex-row md:gap-2">
                          <div>
                            <p className="-my-0.5 whitespace-nowrap text-xs md:my-0 md:text-end md:text-base">
                              Good
                            </p>
                            <p className="line-clamp-1 whitespace-nowrap text-end text-[10px] font-medium text-gray-500 md:text-xs">
                              7832 reviews
                            </p>
                          </div>
                          <span className="mb-1 rounded-md bg-green-800 p-0.5 px-1 text-sm text-white md:mb-0 md:text-lg md:font-semibold">
                            7.4
                          </span>
                        </div>
                        <div className="mt-[-3.5rem] flex flex-col justify-end">
                          <span className="ml-auto line-clamp-1 text-end text-[11px] text-gray-500 md:mt-[8rem] md:text-sm">
                            2 nights, 2 people
                          </span>
                          <div className="mr-1 flex items-center justify-end gap-1">
                            <span className="text-base font-bold md:text-2xl">
                              $148.0
                            </span>
                            <span className="text-sm md:text-base">/night</span>
                          </div>
                          <button className="ml-auto flex h-fit items-center gap-1 whitespace-nowrap rounded-md px-2 py-1 text-xs text-white transition-all disabled:cursor-not-allowed md:px-3 md:py-1.5 md:text-sm bg-black enabled:hover:bg-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="text-xs iconify iconify--ep"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496"
                              ></path>
                            </svg>
                            Select hotel
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id="hotel-bk-1549960-0"
                    className="group relative flex h-auto min-h-[11rem] cursor-pointer flex-row items-start rounded-lg border-solid bg-cover bg-center !p-0 transition-all md:h-auto md:gap-2 md:!p-4  __className_d37563  border border-gray-100 shadow-md md:border-gray-300 md:shadow-none md:hover:border-gray-400"
                    href="https://www.stay22.com/allez/booking?aid=tripplannerai&amp;campaign=build-itinerary~a428972a-21d2-4cc9-b6b6-e3a18d58409b~date:2024-07-23&amp;checkin=2024-07-25&amp;checkout=2024-07-25&amp;link=https%3A//www.booking.com/hotel/fr/hotelf1-paris-porte-de-chatillon-paris.html%3Faid%3D1607597%26checkin%3D2024-10-21%26checkout%3D2024-10-22%26no_rooms%3D1%26group_adults%3D3%26selected_currency%3DUSD"
                  >
                    <div className="h-[11rem] w-[11rem] overflow-hidden rounded-l-md md:h-[13rem] md:rounded-md">
                      <img
                        alt="hotelF1 Paris Porte de Châtillon hotel"
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        data-nimg="1"
                        className="pointer-events-none h-full overflow-hidden  bg-black bg-cover bg-center object-cover shadow-md md:h-[13rem] md:w-[15rem] "
                        src="img/enjoy-hotel.jpeg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex h-[11rem] w-full flex-col justify-between p-2 md:ml-2 md:h-[13rem] md:flex-row md:p-0">
                      <div className="flex h-full w-full flex-col justify-between">
                        <div>
                          <div className="">
                            <h2 className="relative line-clamp-1 text-base font-bold group-hover:underline md:text-xl">
                              hotelF1 Paris Porte de Châtillon
                            </h2>
                            <img
                              alt="Logo de Booking.com"
                              loading="lazy"
                              width="1000"
                              height="700"
                              decoding="async"
                              data-nimg="1"
                              className="mb-1 w-auto object-cover  mt-1 h-4 md:h-5"
                              src="img/booking-logo.webp"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex flex-col items-start gap-1 md:mt-1 md:items-start">
                              <p className="mt-1 line-clamp-1 flex items-center gap-1 overflow-clip text-xs text-gray-500 md:text-sm">
                                <span className="line-clamp-1">
                                  21/23 Avenue de la Porte de Châtillon, Paris
                                </span>
                              </p>
                              <span className="line-clamp-1 text-xs md:text-base">
                                1.2 km to best possible location
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                            <p className="line-clamp-1 flex items-center gap-1 text-xs md:mt-1.5 md:gap-2 md:text-base">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base text-gray-500 md:text-lg iconify iconify--material-symbols"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1 19V4h2v10h8V6h8q1.65 0 2.825 1.175T23 10v9h-2v-3H3v3zm6-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"
                                ></path>
                              </svg>
                              <span className="font-medium text-gray-800">
                                Hotel
                              </span>
                            </p>
                            <p className="items-center gap-1 text-xs text-[#008234] md:gap-2 md:text-base hidden opacity-0 md:flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base md:text-lg iconify iconify--solar"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                >
                                  <path
                                    strokeLinejoin="round"
                                    d="m8.5 12.5l2 2l5-5"
                                  ></path>
                                  <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path>
                                </g>
                              </svg>
                              <span className="whitespace-nowrap font-medium">
                                Free cancellation
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-auto flex w-full items-end justify-between gap-2 md:w-fit md:flex-col">
                        <div className="flex w-fit flex-row-reverse items-center justify-between gap-1 md:flex-row md:gap-2">
                          <div>
                            <p className="-my-0.5 whitespace-nowrap text-xs md:my-0 md:text-end md:text-base">
                              Good
                            </p>
                            <p className="line-clamp-1 whitespace-nowrap text-end text-[10px] font-medium text-gray-500 md:text-xs">
                              12937 reviews
                            </p>
                          </div>
                          <span className="mb-1 rounded-md bg-green-800 p-0.5 px-1 text-sm text-white md:mb-0 md:text-lg md:font-semibold">
                            7.2
                          </span>
                        </div>
                        <div className="mt-[-3.5rem] flex flex-col justify-end">
                          <span className="ml-auto line-clamp-1 text-end text-[11px] text-gray-500 md:mt-[8rem] md:text-sm">
                            2 nights, 2 people
                          </span>
                          <div className="mr-1 flex items-center justify-end gap-1">
                            <span className="text-base font-bold md:text-2xl">
                              $146.0
                            </span>
                            <span className="text-sm md:text-base">/night</span>
                          </div>
                          <button className="ml-auto flex h-fit items-center gap-1 whitespace-nowrap rounded-md px-2 py-1 text-xs text-white transition-all disabled:cursor-not-allowed md:px-3 md:py-1.5 md:text-sm bg-black enabled:hover:bg-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="text-xs iconify iconify--ep"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496"
                              ></path>
                            </svg>
                            Select hotel
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id="hotel-bk-183024-0"
                    className="group relative flex h-auto min-h-[11rem] cursor-pointer flex-row items-start rounded-lg border-solid bg-cover bg-center !p-0 transition-all md:h-auto md:gap-2 md:!p-4  __className_d37563  border border-gray-100 shadow-md md:border-gray-300 md:shadow-none md:hover:border-gray-400"
                    href="https://www.stay22.com/allez/booking?aid=tripplannerai&amp;campaign=build-itinerary~a428972a-21d2-4cc9-b6b6-e3a18d58409b~date:2024-07-23&amp;checkin=2024-07-25&amp;checkout=2024-07-25&amp;link=https%3A//www.booking.com/hotel/fr/etap-paris-porte-de-montmartre.html%3Faid%3D1607597%26checkin%3D2024-10-21%26checkout%3D2024-10-22%26no_rooms%3D1%26group_adults%3D3%26selected_currency%3DUSD"
                  >
                    <div className="h-[11rem] w-[11rem] overflow-hidden rounded-l-md md:h-[13rem] md:rounded-md">
                      <img
                        alt="ibis budget Paris Porte De Montmartre hotel"
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        data-nimg="1"
                        className="pointer-events-none h-full overflow-hidden  bg-black bg-cover bg-center object-cover shadow-md md:h-[13rem] md:w-[15rem] "
                        src="img/ibis-hotel.jpeg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex h-[11rem] w-full flex-col justify-between p-2 md:ml-2 md:h-[13rem] md:flex-row md:p-0">
                      <div className="flex h-full w-full flex-col justify-between">
                        <div>
                          <div className="">
                            <h2 className="relative line-clamp-1 text-base font-bold group-hover:underline md:text-xl">
                              ibis budget Paris Porte De Montmartre
                            </h2>
                            <img
                              alt="Logo de Booking.com"
                              loading="lazy"
                              width="1000"
                              height="700"
                              decoding="async"
                              data-nimg="1"
                              className="mb-1 w-auto object-cover  mt-1 h-4 md:h-5"
                              src="img/hostelworld-logo.webp"
                              style={{ color: "transparent" }}
                            />
                            <div className="flex flex-col items-start gap-1 md:mt-1 md:items-start">
                              <p className="mt-1 line-clamp-1 flex items-center gap-1 overflow-clip text-xs text-gray-500 md:text-sm">
                                <span className="line-clamp-1">
                                  45 rue du Docteur Babinski, Paris
                                </span>
                              </p>
                              <span className="line-clamp-1 text-xs md:text-base">
                                2.4 km to best possible location
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                            <p className="line-clamp-1 flex items-center gap-1 text-xs md:mt-1.5 md:gap-2 md:text-base">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base text-gray-500 md:text-lg iconify iconify--material-symbols"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1 19V4h2v10h8V6h8q1.65 0 2.825 1.175T23 10v9h-2v-3H3v3zm6-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"
                                ></path>
                              </svg>
                              <span className="font-medium text-gray-800">
                                Hotel
                              </span>
                            </p>
                            <p className="items-center gap-1 text-xs text-[#008234] md:gap-2 md:text-base hidden opacity-0 md:flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="mb-0.5 text-base md:text-lg iconify iconify--solar"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                >
                                  <path
                                    strokeLinejoin="round"
                                    d="m8.5 12.5l2 2l5-5"
                                  ></path>
                                  <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path>
                                </g>
                              </svg>
                              <span className="whitespace-nowrap font-medium">
                                Free cancellation
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-auto flex w-full items-end justify-between gap-2 md:w-fit md:flex-col">
                        <div className="flex w-fit flex-row-reverse items-center justify-between gap-1 md:flex-row md:gap-2">
                          <div>
                            <p className="-my-0.5 whitespace-nowrap text-xs md:my-0 md:text-end md:text-base">
                              Okay
                            </p>
                            <p className="line-clamp-1 whitespace-nowrap text-end text-[10px] font-medium text-gray-500 md:text-xs">
                              8943 reviews
                            </p>
                          </div>
                          <span className="mb-1 rounded-md bg-green-800 p-0.5 px-1 text-sm text-white md:mb-0 md:text-lg md:font-semibold">
                            6.1
                          </span>
                        </div>
                        <div className="mt-[-3.5rem] flex flex-col justify-end">
                          <span className="ml-auto line-clamp-1 text-end text-[11px] text-gray-500 md:mt-[8rem] md:text-sm">
                            2 nights, 2 people
                          </span>
                          <div className="mr-1 flex items-center justify-end gap-1">
                            <span className="text-base font-bold md:text-2xl">
                              $110.0
                            </span>
                            <span className="text-sm md:text-base">/night</span>
                          </div>
                          <button className="ml-auto flex h-fit items-center gap-1 whitespace-nowrap rounded-md px-2 py-1 text-xs text-white transition-all disabled:cursor-not-allowed md:px-3 md:py-1.5 md:text-sm bg-black enabled:hover:bg-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="text-xs iconify iconify--ep"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496"
                              ></path>
                            </svg>
                            Select hotel
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer className="sticky bottom-0 z-[55] mt-12 flex w-full flex-col border-t border-solid border-gray-300">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-5 text-lg md:px-12 md:py-8 md:text-xl lg:justify-end undefined">
              <div className="flex w-full items-center justify-between gap-2">
                <Link
                  className="flex items-center gap-2 rounded-full border border-solid border-gray-200 px-5 py-1.5 text-base text-gray-400 hover:bg-gray-50 hover:underline md:text-lg"
                  to="/step-one"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-left"
                    className="svg-inline--fa fa-arrow-left text-sm"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    ></path>
                  </svg>
                  Back
                </Link>
                <Link
                  to="/final-trip"
                  className="line-clamp-1 flex items-center gap-2 rounded-full bg-purple-400 px-5 py-1.5 text-base font-medium text-white ring-2 ring-purple-500 ring-offset-2 transition-transform hover:scale-110 hover:bg-purple-500 md:text-lg"
                >
                  Let's go to my trip! 🔥
                </Link>
              </div>
            </div>
          </footer>
        </section>
        <section className="fixed right-0 top-0 z-[60] h-screen w-full translate-x-full overflow-hidden border-l  border-solid border-gray-200 transition-transform md:block lg:sticky lg:w-[50%] lg:translate-x-0">
          <div className="relative flex h-full w-full flex-row-reverse">
            <iFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.97440853497!2d39.846546599999996!3d21.4360154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1721998423580!5m2!1sen!2s&z=14"
              style={{ border: "0" }}
              width="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iFrame>
          </div>
        </section>
      </div>
    </>
  );
};

export default StepTwo;
