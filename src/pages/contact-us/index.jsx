import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - Funadiq Trip Planner</title>
      </Helmet>
      <div>
        <header className="h-36 bg-primary-green px-4 md:px-0 bg-[#dcffa0]">
          <div className="flex h-36 items-center justify-center">
            <h2 className="text-4xl">Funadiq Trip Planner - Contact Us</h2>
          </div>
        </header>
        <div className="mx-auto mb-20 mt-10 px-4 sm:w-10/12 md:w-6/12 md:px-0">
          <div className="mb-10">
            <div>
              <h2 className="mb-5 text-justify text-2xl font-semibold">
                Address:
              </h2>
              <p className="mb-5 text-justify text-xl">
                1008 Hamman Building, Saudi Arabia
              </p>
            </div>
          </div>
          <div className="mb-10">
            <div>
              <h2 className="mb-5 text-justify text-2xl font-semibold">
                Email:
              </h2>
              <p className="mb-5 text-justify text-xl">info@tripplanner.ai</p>
            </div>
          </div>
          <div className="mb-10">
            <div>
              <h2 className="mb-5 text-justify text-2xl font-semibold">
                Phone:
              </h2>
              <p className="mb-5 text-justify text-xl">+966 123 456 789</p>
            </div>
          </div>
          <Link
            className="flex w-fit items-center gap-2 rounded-full bg-[#dcffa0] px-4 py-3 transition-all hover:bg-[#d5ff8e]"
            to="/"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="house"
              className="svg-inline--fa fa-house text-sm size-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              ></path>
            </svg>
            Go back to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
