import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Destinations = () => {
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
        <title>Destinations - Funadiq Trip Planner</title>
      </Helmet>
      <div className="flex flex-col mb-12">
        <div className="w-full flex-grow">
          <div className="mx-auto max-w-screen-xl px-4 pt-24 md:px-12">
            <h1 className="mt-5 text-center text-3xl font-medium md:text-4xl">
              Destinations
            </h1>
            <p className="mt-3 text-center">
              Discover more cities around Saudi Arabia!
            </p>
            <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {destinations.length > 0 ? (
                destinations.map((destination) =>
                  destination.countryName === "Saudi Arabia" ? (
                    <li key={destination.id}>
                      <Link
                        className="mb-1 line-clamp-1 text-xl font-normal text-center"
                        to={`/destinations/${destination.cityUrl}`}
                      >
                        <img
                          src={destination.imageUrl}
                          alt={destination.cityName}
                          loading="lazy"
                          width="480"
                          height="270"
                          decoding="async"
                          className="h-[10.5rem] rounded-lg object-cover mb-4"
                        />
                        {destination.cityName}
                      </Link>
                    </li>
                  ) : null
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

export default Destinations;
