import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Jeddah = () => {
  const [tripData, setTripData] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    const getTripData = async () => {
      try {
        const apiData = await fetch("http://localhost:3001/saudi-trips");
        const data = await apiData.json();
        console.log(data);
        setTripData(data);
        setFilteredTrips(data);
      } catch (error) {
        console.error("Error fetching trips data:", error);
      }
    };
    getTripData();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jeddah - Funadiq Trip Planner</title>
      </Helmet>
      {tripData.length > 0 ? (
        tripData.map((trip) => (
          <div
            key={trip.id}
            className="z-50 flex flex-col-reverse lg:flex-row"
            id="right-map"
          >
            <div className="fixed bottom-4 right-4 z-[90] flex flex-col items-center justify-end gap-2 lg:hidden">
              <button className="flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-black text-white shadow-md">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-location-dot"
                  className="svg-inline--fa fa-map-location-dot"
                  role="img"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                  ></path>
                </svg>
              </button>
            </div>
            <section
              id="left-panel"
              className="responsive-left-panel relative w-full"
            >
              <div className="h-[25rem] text-white relative flex flex-col items-start justify-between px-4 md:px-12">
                <img
                  alt="Background"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="z-0"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                  sizes="100vw"
                  src={trip.cityImage}
                />
                <div className="mt-8 flex w-full items-center justify-between gap-2">
                  <button
                    onClick={() => navigate(-1)}
                    className="text-white hover:bg-white/25 group relative z-20 flex items-center gap-2 rounded-lg px-3 py-1.5 text-base font-medium transition-colors"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-left"
                      className="svg-inline--fa fa-arrow-left h-[15px]"
                      role="img"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                      ></path>
                    </svg>
                    Back
                  </button>
                </div>
                <h1 className="relative z-20 py-10 text-2xl font-medium md:text-4xl">
                  {trip.cityName}
                </h1>
                <div className="absolute right-0 top-0 z-10 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,.4)_0,rgba(0,0,0,.3)+20%,transparent_50%,rgba(0,0,0,.3)_75%,#000)]"></div>
              </div>
              <div className="mt-12">
                <div className="mt-8 flex flex-col gap-3">
                  <div>
                    <div className="mb-4 flex flex-col items-start justify-between gap-2 xl:flex-row">
                      <h2 className="relative line-clamp-1 text-3xl font-medium md:text-4xl">
                        <span className="relative z-20 px-4 md:px-12">
                          Explore {trip.cityName}
                        </span>
                        <span className="absolute bottom-2.5 right-5 z-10 h-4 w-full bg-[#DCFFA0]/60 md:right-12"></span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="animate-slideUpAndFadeSlow">
                  <div className="flex flex-col w-full px-4 md:px-12">
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
                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Accommodations"
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
                                                      <h1 className="w-full text-start sm:w-full">
                                                        دارة القهوة
                                                      </h1>
                                                      <p className="text-base mt-4">
                                                        Description
                                                      </p>
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
                                                            color:
                                                              "transparent",
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
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Events"
                                      >
                                        <div className="my-8 w-full">
                                          <div className="group flex gap-1 w-full">
                                            <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                                             
                                              <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                                                <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                                                  <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                                                    <div className="w-full">
                                                      <h1 className="w-full text-start sm:w-full">
                                                        دارة القهوة
                                                      </h1>
                                                      <p className="text-base mt-4">
                                                        Description
                                                      </p>
                                                    </div>
                                                    <div>
                                                      <div className="float-right items-center gap-3"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Experiences"
                                      >
                                        <div></div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Shoppings"
                                      >
                                        <div></div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Restraunts"
                                      >
                                        <div></div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Attractions"
                                      >
                                        <div></div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Airports"
                                      >
                                        <div></div>
                                      </AccordionItem>
                                    </Accordion>

                                    <Accordion className="flex items-center gap-1 w-full my-4">
                                      <AccordionItem
                                        className="w-full"
                                        header="Railway Stations"
                                      >
                                        <div></div>
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
                </div>
              </div>
            </section>
            <section className="fixed right-0 top-0 z-[60] h-screen w-full overflow-hidden border-l border-solid border-gray-200 transition-transform lg:sticky lg:w-[50%] translate-x-full md:block lg:translate-x-0">
              <div className="relative flex h-full w-full flex-row-reverse">
                <iFrame
                  src={trip.cityMap}
                  style={{ border: "0" }}
                  width="600"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iFrame>
              </div>
            </section>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Jeddah;
