import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Trips = () => {
  const navigate = useNavigate();

  // Scroll to the top and check if the user is authenticated
  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if the user is logged in
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main className="mb-12 w-full flex-grow">
          <div className="mx-auto mt-12 max-w-screen-xl px-4 pt-12 md:px-12">
            <div className="mt-5 flex min-h-[47px] w-full items-center justify-between">
              <h2 className="min-w-fit items-center text-xl font-medium md:text-2xl">
                Your Trips
              </h2>
              <Link
                className="inline-flex items-center justify-center gap-1 rounded-full bg-green-900 px-4 py-2 pl-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                to="/trip"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="text-xl iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                  ></path>
                </svg>
                New trip
              </Link>
            </div>
            <div className="mt-8">
              <div className="mt-8">
                <div className="mx-auto w-fit">
                  <div className="mb-36 flex flex-col justify-center">
                    <div className="mx-auto mt-12 flex w-fit flex-col justify-center">
                      <div className="mb-5 flex items-center justify-center gap-2">
                        <img
                          alt="Trip Planner Logo"
                          loading="lazy"
                          width="80"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://tripplanner.ai/_next/image?url=%2Ftrippy%2Ftrippy-glasses.webp&w=96&q=75"
                        />
                      </div>
                      <h2 className="mx-auto text-center font-medium sm:text-xl lg:text-2xl">
                        🎉 Welcome to Funadiq Trip Planner AI - best trip
                        planning experience! 🎉
                      </h2>
                      <ul className=" my-7 flex flex-col gap-2 text-center text-sm md:text-base">
                        <li className="">
                          Find the best things to do and places to visit
                        </li>
                        <li className="">The best hotels to stay</li>
                      </ul>
                    </div>
                    <Link
                      className="mx-auto mt-6 flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-green-900 px-5 py-2.5 font-medium text-white shadow-md transition-colors hover:bg-green-800 md:text-xl"
                      to="/trip"
                    >
                      Create my first trip!
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus"
                        className="svg-inline--fa fa-plus "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Trips;
