import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const Destination = () => {
  const [tripData, setTripData] = useState([]);
  const { cityUrl } = useParams();

  useEffect(() => {
    const getTripData = async () => {
      try {
        const apiData = await fetch("http://localhost:3001/destinations");
        const data = await apiData.json();
        setTripData(data);
      } catch (error) {
        console.error("Error fetching trips data:", error);
      }
    };
    getTripData();
  }, []);

  const tripItem = tripData.find(item => item.cityUrl === cityUrl);

  return (
    <>
      <Helmet>
        <title>{tripItem ? `${tripItem.cityName} - Funadiq Trip Planner` : "Loading..."}</title>
      </Helmet>
      {tripItem ? (
        <div>
          <h1>{tripItem.cityName}</h1>
          <img src={tripItem.imageUrl} alt={tripItem.cityName} />
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading destination details...</p>
      )}
    </>
  );
};

export default Destination;
