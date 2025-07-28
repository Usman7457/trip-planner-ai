import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CommunityTrips = () => {
  const [tripData, setTripData] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [visibleTrips, setVisibleTrips] = useState(8);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getTripData = async () => {
      try {
        const apiData = await fetch("http://localhost:5000/api/community-trips/");
        const data = await apiData.json();
        setTripData(data);
        setFilteredTrips(data);
      } catch (error) {
        console.error("Error fetching trips data:", error);
      }
    };
    getTripData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    filterTrips(event.target.value);
  };

  const filterTrips = (searchTerm) => {
    if (!searchTerm) {
      setFilteredTrips(tripData);
    } else {
      const filtered = tripData.filter((trip) =>
        trip.tripName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTrips(filtered);
    }
  };

  const loadMoreTrips = () => {
    setVisibleTrips((prevVisibleTrips) => prevVisibleTrips + 8);
  };

  return (
    <>
      <Helmet>
        <title>Community Trips - Funadiq Trip Planner</title>
      </Helmet>
      <div className="my-12 pt-12">
        <h2 className="text-center text-3xl font-medium md:mt-5 md:text-4xl">
          Trip Finder
        </h2>
        <p className="mt-3 px-4 text-center">
          Find trips created by other users and get inspired for your next trip!
        </p>
        <div className="mx-auto mt-8 flex w-full max-w-2xl gap-2 px-4">
          <input
            aria-invalid="false"
            autoComplete="off"
            id="place"
            placeholder="Search Trips Here ...."
            className="border border-[#999999] text-lg text-center py-2 w-full rounded-lg outline-none focus:border-red-400"
            aria-autocomplete="list"
            autoCapitalize="none"
            spellCheck="false"
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="mx-auto max-w-screen-xl mt-10 px-4 md:px-12">
          <div className="mt-10 grid grid-cols-1 gap-8 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredTrips.slice(0, visibleTrips).map((trip) => (
              <Link
                className="group relative cursor-pointer"
                to={`/community-trip-detail/${trip.tripUrl}`}
                key={trip.id}
              >
                <img
                  alt={trip.tripName}
                  loading="lazy"
                  width="480"
                  height="270"
                  decoding="async"
                  data-nimg="1"
                  className="h-[10.5rem] rounded-lg object-cover"
                  src={trip.tripImage}
                  style={{ color: "transparent" }}
                />
                <div className="mt-2">
                  <h2 className="mb-1 line-clamp-1 text-lg font-medium group-hover:underline">
                    {trip.tripName}
                  </h2>
                  <p className="line-clamp-2 text-sm text-gray-700">
                    {trip.tripDescription}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between md:mt-3">
                  <div className="flex items-center gap-1">
                    <img
                      alt={trip.authorName}
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-full"
                      src={trip.authorImage}
                      style={{ color: "transparent" }}
                    />
                    <span className="line-clamp-1 text-sm">
                      {trip.authorName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-sm">
                      <span>{trip.days} Days</span>
                    </div>
                    <span className="mx-0.5 my-0.5 text-xl">•</span>
                    <div className="flex gap-1">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="heart"
                        className="svg-inline--fa fa-heart w-4 text-red-400 mt-0.5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                        ></path>
                      </svg>
                      <span className="text-sm font-semibold">
                        {trip.totalLikes}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {visibleTrips < filteredTrips.length && (
            <div className="text-center">
              <button
                className="col-span-1 mx-auto flex w-fit items-center justify-center gap-1 rounded-full border border-solid border-red-400 bg-white px-8 py-1 text-red-400 transition-all hover:bg-red-400 hover:text-white sm:col-span-2 md:col-span-3 lg:col-span-4"
                onClick={loadMoreTrips}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommunityTrips;
