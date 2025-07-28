import React from "react";

const SectionFourBox = () => {
  const boxes = [
    {
      className: "flex flex-col gap-5 text-center",
      title: (
        <>
          <span className="font-semibold text-primary text-purple-400">
            AI-Powered
          </span>{" "}
          Route Optimization
        </>
      ),
      description: (
        <>
          Utilize AI for{" "}
          <strong className="font-medium text-gray-900">
            {" "}
            optimal travel routes.{" "}
          </strong>
          Our app ensures a seamless journey, calculating the best paths, travel
          times, and distances for city tours or cross-country road trips.
        </>
      ),
    },
    {
      className: "flex flex-col gap-5 text-center",
      title: (
        <>
          All-in-One{" "}
          <span className="font-semibold text-primary text-purple-400">
            {" "}
            Travel Organizer{" "}
          </span>
        </>
      ),
      description: (
        <>
          Simplify travel planning with our all-in-one platform. Funadiq Trip Planner
          consolidates hotel and flight details, manages bookings, and imports
          tips and guides. Organize{" "}
          <strong className="font-medium text-gray-900">
            {" "}
            all trip details in one place.{" "}
          </strong>
        </>
      ),
    },
    {
      className: "flex flex-col gap-5 text-center md:col-span-2 lg:col-span-1",
      title: (
        <>
          Collaborative{" "}
          <span className="font-semibold text-primary text-purple-400">
            {" "}
            Group Planning{" "}
          </span>{" "}
          Made Easy
        </>
      ),
      description: (
        <>
          Collaborate on itineraries with companions. Our real-time feature
          makes group travel planning effortless, ensuring everyone stays
          informed and involved in the process.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boxes.map((box, index) => (
          <div key={index} className={box.className}>
            <h1 className="text-center text-xl font-medium">{box.title}</h1>
            <p className="text-gray-600">{box.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionFourBox;
