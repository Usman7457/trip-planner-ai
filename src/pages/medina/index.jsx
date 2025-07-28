import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Medina = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:3001/destinations");
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching Destinations:", error);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Medina - Funadiq Trip Planner</title>
      </Helmet>
      <div className="flex flex-col mb-12">
        <div className="w-full flex-grow">
          <div className="mx-auto max-w-screen-xl px-4 pt-24 md:px-12">
            <h1 className="mt-5 text-center text-3xl font-medium md:text-4xl">
              Medina, Saudi Arabia
            </h1>
            <p className="mt-3 text-center">Discover more trips to Medina.</p>
            <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {destinations.length > 0 ? (
                destinations.map((destination) =>
                  destination.cityName === "Medina, Saudi Arabia"
                    ? destination.trips.map((trip) => (
                        <li className="p-2 hover:underline" key={trip.tripId}>
                          <Link
                            className="line-clamp-1 text-sm md:text-base"
                            to={`/destination-detail/${trip.tripUrl}`}
                          >
                            {trip.tripName}
                          </Link>
                        </li>
                      ))
                    : null
                )
              ) : (
                <li>No Data Found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medina;
