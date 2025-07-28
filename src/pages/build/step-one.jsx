import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const StepOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Step One - Funadiq Trip Planner</title>
      </Helmet>
      <div className="z-50 flex flex-col-reverse lg:flex-row" id="right-map">
        <div
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
                    Step 1 of 2
                  </div>
                </div>
              </div>
              <span
                className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-77z270"
                style={{
                  backgroundColor: "rgb(241, 241, 241)",
                  position: "relative",
                  overflow: "hidden",
                  display: "block",
                  zIndex: "0",
                  height: "5px",
                }}
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span
                  className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgb(195, 255, 93) 0%, rgb(192, 255, 173) 56%, rgb(234, 144, 255) 100%)",
                    transform: "translateX(-50%)",
                    width: "100%",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    top: "0px",
                    transition: "transform 0.4s linear 0s",
                    transformOrigin: "left center",
                    backgroundColor: "rgb(25, 118, 210)",
                  }}
                ></span>
              </span>
            </div>
            <div>
              <div className="my-8">
                <div className="px-3 md:px-12">
                  <h2 className="flex w-full gap-4 text-center text-2xl font-normal md:text-start md:text-3xl">
                    Meals preferences
                  </h2>
                  <p className="mb-6 text-base text-gray-600 md:mt-5 md:text-start md:text-lg">
                    Select the meals you would like to include in your trip,
                    your budget for it and the type of food you prefer.
                  </p>
                  <div className="flex flex-col gap-14 my-10">
                    <div className="w-full">
                      <p className="flex w-fit gap-2 text-center text-xl font-medium md:text-start">
                        Budget level
                        <button
                          className="-mt-0.5 md:hidden grid h-7 w-7 place-items-center rounded-full border border-solid border-gray-200 bg-gray-50 text-sm"
                          aria-label="Update dimensions"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:re:"
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
                      </p>
                      <p className="mt-2 hidden text-base text-gray-600 md:block">
                        Depending on the budget level, we will select least or
                        more expensive restaurants.
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <label
                          htmlFor="food-preference-cheap"
                          className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-cheap"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="radio"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Cheap</p>
                          </div>
                          <span className="ml-auto animate-slideUpAndFadeSlow text-base text-gray-600">
                            {" "}
                            $
                          </span>
                        </label>
                        <label
                          htmlFor="food-preference-mid"
                          className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-mid"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="radio"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Mid</p>
                          </div>
                          <span className="ml-auto animate-slideUpAndFadeSlow text-base text-gray-600">
                            {" "}
                            $$
                          </span>
                        </label>
                        <label
                          htmlFor="food-preference-high"
                          className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-high"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="radio"
                          />
                          <div className="text-start">
                            <p className="-mb-1">High</p>
                          </div>
                          <span className="ml-auto animate-slideUpAndFadeSlow text-base text-gray-600">
                            {" "}
                            $$$
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-14 my-10">
                    <div className="w-full">
                      <p className="flex w-fit gap-2 text-center text-xl font-medium md:text-start">
                        Meals to include
                        <button
                          className="-mt-0.5 md:hidden grid h-7 w-7 place-items-center rounded-full border border-solid border-gray-200 bg-gray-50 text-sm"
                          aria-label="Update dimensions"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:re:"
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
                      </p>
                      <p className="mt-2 hidden text-base text-gray-600 md:block">
                        Prices are an estimate of each meal for{" "}
                        <span className="underline">2 days 2 people</span>
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <label
                          htmlFor="food-preference-breakfast"
                          className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-breakfast"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="checkbox"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Breakfast</p>
                            <span className="whitespace-nowrap text-xs text-gray-500">
                              (SAR 15 per meal)
                            </span>
                          </div>
                          <span className="ml-auto animate-slideUpAndFadeSlow text-base text-gray-600">
                            {" "}
                            SAR 60
                          </span>
                        </label>
                        <label
                          htmlFor="food-preference-lunch"
                          className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-lunch"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="checkbox"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Lunch</p>
                            <span className="whitespace-nowrap text-xs text-gray-500">
                              (SAR 30 per meal)
                            </span>
                          </div>
                          <span className="ml-auto animate-slideUpAndFadeSlow text-base text-gray-600">
                            {" "}
                            SAR 120
                          </span>
                        </label>
                        <label
                          htmlFor="food-preference-dinner"
                          className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-dinner"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="checkbox"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Dinner</p>
                            <span className="whitespace-nowrap text-xs text-gray-500">
                              (SAR 45 per meal)
                            </span>
                          </div>
                          <span className="ml-auto animate-slideUpAndFadeSlow text-base text-gray-600">
                            {" "}
                            SAR 180
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-14 my-10">
                    <div className="w-full">
                      <p className="flex w-fit gap-2 text-center text-xl font-medium md:text-start">
                        Type of food:
                        <button
                          className="-mt-0.5 md:hidden grid h-7 w-7 place-items-center rounded-full border border-solid border-gray-200 bg-gray-50 text-sm"
                          aria-label="Update dimensions"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:re:"
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
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <label
                          htmlFor="food-preference-everything"
                          className="pb-3 flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-everything"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="radio"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Everything</p>
                          </div>
                        </label>
                        <label
                          htmlFor="food-preference-vegetarian"
                          className="pb-3 flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-vegetarian"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="radio"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Vegetarian</p>
                          </div>
                        </label>
                        <label
                          htmlFor="food-preference-Vegan"
                          className="pb-3 flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                        >
                          <input
                            id="food-preference-Vegan"
                            className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                            type="radio"
                          />
                          <div className="text-start">
                            <p className="-mb-1">Vegan</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 mt-12 flex w-full flex-col border-t border-solid border-gray-300">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-5 text-lg md:px-12 md:py-8 md:text-xl lg:justify-end undefined">
              <div className="ml-auto w-fit">
                <Link
                  className="ml-auto flex items-center justify-center gap-2 rounded-full bg-black px-6 py-2 text-base text-white ring-2 ring-black ring-offset-2 transition-all hover:scale-110 hover:bg-gray-900 disabled:bg-gray-300 disabled:text-gray-500 disabled:ring-gray-300 md:text-lg"
                  to="/step-two"
                >
                  <span>Next</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="fixed right-0 top-0 z-[60] h-screen w-full overflow-hidden border-l border-solid border-gray-200 transition-transform lg:sticky lg:w-[50%] translate-x-full md:block lg:translate-x-0">
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

export default StepOne;
