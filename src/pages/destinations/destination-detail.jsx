import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import box from "../destinations/dataset";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const DestinationDetail = () => {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
    setCount(count + (isRed ? -1 : 1));
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const tripItem = box.find((item) => item.slug === slug);

  if (!tripItem) {
    return <div>Destination Not Found</div>;
  }
  return (
    <>
      <Helmet>
        <title>{tripItem.tripName} - Funadiq Trip Planner</title>
      </Helmet>
      <div className="z-50 flex flex-col-reverse lg:flex-row" id="right-map">
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
              src={tripItem.tripImage}
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
              <Link to="/">
                <img
                  alt="Trip Planner Logo"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="relative z-20 pr-3"
                  style={{ color: "transparent" }}
                  src="/img/logo-white.webp"
                />
              </Link>
            </div>
            <h1 className="relative z-20 py-10 text-2xl font-medium md:text-4xl">
              {tripItem.tripName}
            </h1>
            <div className="absolute right-0 top-0 z-10 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,.4)_0,rgba(0,0,0,.3)+20%,transparent_50%,rgba(0,0,0,.3)_75%,#000)]"></div>
          </div>
          <div className="my-5 flex w-full flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center md:px-12">
            <div className="flex items-center gap-2">
              <div className="MuiAvatar-root MuiAvatar-circular css-3i9vrz">
                <img
                  alt={tripItem.authorName}
                  src={tripItem.authorImage}
                  className="MuiAvatar-img css-1hy9t21 rounded-full h-10 w-10"
                />
              </div>
              <div>
                <p className="text-lg font-medium">{tripItem.authorName}</p>
                <p className="text-sm text-gray-500">{tripItem.creationDate}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-gray-100 ${
                  isRed ? "text-red-500" : ""
                }`}
                onClick={handleClick}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  className="svg-inline--fa fa-heart"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                  ></path>
                </svg>
                {tripItem.totalLikes + count}
              </button>
            </div>
          </div>
          <p className="mt-6 px-4 md:px-12">{tripItem.tripDescription}</p>
          <div className="mt-12">
            <div className="mb-24 mt-8 flex flex-col gap-3">
              <div>
                <div className="mb-8 flex flex-col items-start justify-between gap-2 xl:flex-row">
                  <h2 className="relative line-clamp-1 text-3xl font-medium md:text-4xl">
                    <span className="relative z-20 px-4 md:px-12">
                      {tripItem.tripName}
                    </span>
                    <span className="absolute bottom-2.5 right-5 z-10 h-4 w-full bg-[#DCFFA0]/60 md:right-12"></span>
                  </h2>
                  <div className="flex items-end gap-1 pl-5 pr-0 md:px-12">
                    <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="group flex w-fit cursor-pointer items-center rounded-lg transition-colors"
                        href="https://www.getyourguide.com/s/?q=Mecca, Saudi Arabia&amp;partner_id=XKQT9ML&amp;utm_medium=travel_agent"
                      >
                        <div className="place grid h-6 w-6 place-items-center">
                          <img
                            alt=""
                            loading="lazy"
                            width="10"
                            height="10"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="/img/gyg-icon.png"
                          />
                        </div>
                        <p className="mt-1 line-clamp-1 overflow-clip whitespace-nowrap text-xs text-orange-800 hover:underline md:text-sm">
                          Get Your Guide
                          <svg
                            aria-hidden="true"
                            role="img"
                            className="mb-0.5 ml-0.5 inline text-sm text-orange-800 iconify iconify--material-symbols"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                            ></path>
                          </svg>
                        </p>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="group flex w-fit cursor-pointer items-center rounded-lg transition-colors"
                        href="https://www.viator.com/searchResults/all?text=Mecca, Saudi Arabia&amp;pid=P00104500&amp;mcid=42383&amp;medium=link"
                      >
                        <div className="place grid h-6 w-6 place-items-center">
                          <img
                            alt=""
                            loading="lazy"
                            width="15"
                            height="15"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="/img/viator-icon.jpeg"
                          />
                        </div>
                        <p className="mt-1 line-clamp-1 overflow-clip whitespace-nowrap text-xs text-teal-800 hover:underline md:text-sm">
                          Viator
                          <svg
                            aria-hidden="true"
                            role="img"
                            className="mb-0.5 ml-0.5 inline text-sm text-teal-800 iconify iconify--material-symbols"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                            ></path>
                          </svg>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-12">
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day1.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day1.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day1.foodCharges}</p>
                        </div>
                        <div className="text-lg font-medium">·</div>
                        <p className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bus"
                            className="svg-inline--fa fa-bus"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                            ></path>
                          </svg>
                          <span>{tripItem.Day1.travelCharges}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt={tripItem.Day1.hotelOne}
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
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day1.hotelOne}
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
                                    style={{ color: "transparent" }}
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
                                {tripItem.Day1.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day1.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
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
                        <span>{tripItem.Day1.travelTime}</span>
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
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Jabal Thawr Cultural District"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/2.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day1.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt={tripItem.Day1.tripLocationOne}
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/2.jpeg"
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
                                {tripItem.Day1.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day1.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day1.tripOneTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Jabal Thawr Cultural District&amp;origin_place_id=ChIJZ9-37Y0FwhUR0IyGPROyaKY&amp;destination=Maqaam-e-ibrahim&amp;destination_place_id=ChIJ_____7MEwhUR-yeNHjIXpdI&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Maqaam-e-ibrahim"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/4.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day1.tripLocationTwo}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Maqaam-e-ibrahim"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/4.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day1.tripLocationTwoDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day1.tripTwoTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day1.tripTwoCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day1.tripTwoTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Maqaam-e-ibrahim&amp;origin_place_id=ChIJ_____7MEwhUR-yeNHjIXpdI&amp;destination=Al-Safa&amp;destination_place_id=ChIJlVupXkXRGRURA_voRB7V26Y&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day1.tripLocationThree}
                                </button>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day1.tripThreeTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>Free</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-gray-200 border-solid py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day2.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day2.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day2.foodCharges}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Zamzam Cafe (زمزم كافيه)"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/3.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day2.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt={tripItem.Day2.hotelOne}
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/3.jpeg"
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
                                {tripItem.Day2.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day2.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
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
                        <span>{tripItem.Day2.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.4213,39.823334&amp;destination=Masjid al-Haram&amp;destination_place_id=ChIJk7Q_TbcEwhURhUcJjk_50VU&amp;travelmode=walking&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Masjid al-Haram"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/5.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day2.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt={tripItem.Day2.tripLocationOne}
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/5.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day2.tripOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day2.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day2.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
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
                        <span>{tripItem.Day2.tripOneTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Masjid al-Haram&amp;origin_place_id=ChIJk7Q_TbcEwhURhUcJjk_50VU&amp;destination=Kaaba&amp;destination_place_id=ChIJZ9QoTLcEwhURZ1ciGKZD9bI&amp;travelmode=walking&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Kaaba"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/5.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day2.tripLocationTwo}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Kaaba"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/5.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day2.tripLocationTwoDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day2.tripTwoTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day2.tripTwoCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day3.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day3.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day3.foodCharges}</p>
                        </div>
                        <div className="text-lg font-medium">·</div>
                        <p className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bus"
                            className="svg-inline--fa fa-bus"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                            ></path>
                          </svg>
                          <span>{tripItem.Day3.travelCharges}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt={tripItem.Day3.hotelOne}
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/6.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day3.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt={tripItem.Day3.hotelOne}
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/6.jpeg"
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
                                {tripItem.Day3.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day3.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day3.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.417655,39.859668&amp;destination=Albaya Mosque&amp;destination_place_id=ChIJf8rrF3gEwhUR6boobBtLUW0&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Albaya Mosque"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/7.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day3.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt={tripItem.Day3.tripLocationOne}
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/7.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day3.tripOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day3.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day3.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day3.tripOneTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Albaya Mosque&amp;origin_place_id=ChIJf8rrF3gEwhUR6boobBtLUW0&amp;destination=Clock Tower Museum&amp;destination_place_id=ChIJcb-Wz_0FwhURotVP8DimaQY&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Clock Tower Museum"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/8.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day3.tripLocationTwo}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt={tripItem.Day3.tripLocationTwo}
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/8.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day3.tripLocationTwoDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day3.tripTwoTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day3.tripTwoCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day4.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day4.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day4.foodCharges}</p>
                        </div>
                        <div className="text-lg font-medium">·</div>
                        <p className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bus"
                            className="svg-inline--fa fa-bus"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                            ></path>
                          </svg>
                          <span>{tripItem.Day4.travelCharges}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="كفتريا الخرطوم"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/9.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day4.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="كفتريا الخرطوم"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/9.jpeg"
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
                                {tripItem.Day4.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day4.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day4.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.394242,39.87178&amp;destination=Aisha Al Rajhi Mosque&amp;destination_place_id=ChIJWTWOfrQFwhUR5rlnkOKRODQ&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Aisha Al Rajhi Mosque"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/10.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day4.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Aisha Al Rajhi Mosque"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/10.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day4.tripOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day4.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day4.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day4.tripOneTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Aisha Al Rajhi Mosque&amp;origin_place_id=ChIJWTWOfrQFwhUR5rlnkOKRODQ&amp;destination=Center for the History of Mecca&amp;destination_place_id=ChIJ--bPrzYEwhURJ5PoPR5hj08&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Center for the History of Mecca"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/11.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day4.tripLocationTwo}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Center for the History of Mecca"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/11.jpeg"
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
                                {tripItem.Day4.tripTwoTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day4.tripTwoCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day5.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day5.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day5.foodCharges}</p>
                        </div>
                        <div className="text-lg font-medium">·</div>
                        <p className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bus"
                            className="svg-inline--fa fa-bus"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                            ></path>
                          </svg>
                          <span>{tripItem.Day5.travelCharges}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Ucoffee"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/12.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day5.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Ucoffee"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/12.jpeg"
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
                                {tripItem.Day5.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day5.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day5.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.389416,39.846885&amp;destination=Thour Cave&amp;destination_place_id=ChIJxWQyew4FwhURvVR5v11vyL4&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Thour Cave"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/13.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day5.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Thour Cave"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/13.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day5.tripOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day5.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day5.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day5.tripOneTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Thour Cave&amp;origin_place_id=ChIJxWQyew4FwhURvVR5v11vyL4&amp;destination=Mecca Museum&amp;destination_place_id=ChIJfWVW6agcwhUR9oRlEPd1wrw&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Mecca Museum"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/14.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day5.tripLocationTwo}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Mecca Museum"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/14.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day5.tripTwoDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day5.tripTwoTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day5.tripTwoCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day6.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day6.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day6.foodCharges}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="مطبق ابو شرف"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/15.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day6.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="مطبق ابو شرف"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/15.jpeg"
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
                                {tripItem.Day6.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day6.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
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
                        <span>{tripItem.Day6.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.435203,39.818814&amp;destination=Abu Qubays&amp;destination_place_id=ChIJH8T_Bq4EwhURMIPGkEKfDlM&amp;travelmode=walking&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Abu Qubays"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/16.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day6.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Abu Qubays"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/16.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day6.tripOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day6.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day6.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
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
                        <span>{tripItem.Day6.tripOneTiming}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=Abu Qubays&amp;origin_place_id=ChIJH8T_Bq4EwhURMIPGkEKfDlM&amp;destination=Al Muallaa Cemetery&amp;destination_place_id=ChIJyRQYOqYEwhURPpQQGb4bflw&amp;travelmode=walking&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Al Muallaa Cemetery"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/17.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day6.tripLocationTwo}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Al Muallaa Cemetery"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/17.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day6.tripTwoDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day6.tripTwoTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day6.tripTwoCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day7.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day7.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day7.foodCharges}</p>
                        </div>
                        <div className="text-lg font-medium">·</div>
                        <p className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bus"
                            className="svg-inline--fa fa-bus"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                            ></path>
                          </svg>
                          <span>{tripItem.Day7.travelCharges}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Al Baik (البيك)"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/18.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day7.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Al Baik (البيك)"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/18.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day7.hotelOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day7.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day7.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
                      <div className="flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bus"
                          className="svg-inline--fa fa-bus text-tp-lightgray mr-2"
                          role="img"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                          ></path>
                        </svg>
                        <span>{tripItem.Day7.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.449363,39.864341&amp;destination=Jabal Al Nour&amp;destination_place_id=ChIJC7NJKAgDwhURZU_wuW3mta4&amp;travelmode=transit&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Jabal Al Nour"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/19.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day7.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Jabal Al Nour"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/19.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day7.tripTwoDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day7.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day7.tripOneCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex cursor-default items-center justify-between border-b border-solid border-gray-300 bg-white pb-6 !text-black">
                    <div className="flex items-center font-medium transition-all md:text-2xl">
                      <div>
                        <span className="line-clamp-1 text-2xl md:text-3xl">
                          {tripItem.Day8.day}
                        </span>
                        <span className="text-sm font-normal text-gray-500 md:text-base">
                          {tripItem.Day8.dayDescription}
                        </span>
                      </div>
                    </div>
                    <div className="h-fit rounded-lg border border-solid border-gray-200 px-4 text-[13px] font-normal text-gray-700 md:mb-0 md:px-4 md:py-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ticket"
                            className="svg-inline--fa fa-ticket text-base"
                            role="img"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                            ></path>
                          </svg>
                          +
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="utensils"
                            className="svg-inline--fa fa-utensils text-base"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                            ></path>
                          </svg>
                          <p>{tripItem.Day8.foodCharges}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Starbucks (ستاربكس)"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/20.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day8.hotelOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Starbucks (ستاربكس)"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/20.jpeg"
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
                                {tripItem.Day8.hotelTiming}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day8.hotelCost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm">
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
                        <span>{tripItem.Day8.travelTime}</span>
                        <a
                          rel="noopener noreferrer"
                          className="group flex cursor-pointer no-underline"
                          href="https://www.google.com/maps/dir/?api=1&amp;origin=21.419852,39.825579&amp;destination=Safa and Marwa (Saee)&amp;destination_place_id=ChIJEWSjC7oEwhURRlK9Iny8D5Q&amp;travelmode=walking&amp;zoom=14"
                        >
                          <p className="mx-3">~</p>
                          <p className="text-[12px] text-gray-600 hover:underline">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="group flex gap-1">
                      <div className="group/buttons relative ml-0.5 flex min-h-[100px] w-full cursor-pointer flex-row-reverse items-start justify-between gap-3 rounded-lg transition-all">
                        <img
                          alt="Safa and Marwa (Saee)"
                          loading="lazy"
                          width="200"
                          height="200"
                          decoding="async"
                          data-nimg="1"
                          className="pointer-events-none hidden h-12 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:block md:h-24"
                          style={{ color: "transparent" }}
                          src="/img/21.jpeg"
                        />
                        <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gray-50 p-3 transition-colors md:hover:bg-gray-100">
                          <div className="flex w-full flex-col items-start justify-between gap-0 md:gap-2">
                            <div className="text-tp-purple-2 relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] opacity-100 transition-all md:items-center md:gap-1 md:text-xl">
                              <div className="w-full">
                                <button className="w-[80%] text-start sm:w-full md:hover:underline">
                                  {tripItem.Day8.tripLocationOne}
                                </button>
                                <div className="float-right items-center gap-3">
                                  <img
                                    alt="Safa and Marwa (Saee)"
                                    loading="lazy"
                                    width="90"
                                    height="90"
                                    decoding="async"
                                    data-nimg="1"
                                    className="pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden"
                                    style={{ color: "transparent" }}
                                    src="/img/21.jpeg"
                                  />
                                </div>
                                <span className="w-full text-base text-gray-500">
                                  {tripItem.Day8.tripOneDescription}
                                </span>
                              </div>
                              <div>
                                <div className="float-right items-center gap-3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <div className="relative flex w-fit cursor-default items-center gap-1.5 rounded-full border border-solid border-gray-200 bg-white px-3 py-0.5 text-xs md:text-sm">
                              <span className="text-gray-500">
                                {tripItem.Day8.tripOneTime}
                              </span>
                            </div>
                            <div className="text-xl">•</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base">
                                <span>{tripItem.Day8.tripOneCost}</span>
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
              src={tripItem.cityMap}
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

export default DestinationDetail;
