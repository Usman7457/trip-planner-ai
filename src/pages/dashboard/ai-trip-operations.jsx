import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AiTripOperations = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [newTrip, setNewTrip] = useState({
    id: "",
    cityName: "",
    cityImage: "",
    cityMap: "",
    accommodation: [
      {
        accommodationName: "",
        accommodationUrl: "",
        accommodationImage1: "",
        accommodationDetail: "",
      },
    ],
    events: [
      {
        eventName: "",
        eventUrl: "",
        eventImage1: "",
        eventDescription: "",
      },
    ],
    experiences: [
      {
        experienceName: "",
        experienceUrl: "",
        experienceImage1: "",
        experienceDescription: "",
      },
    ],
    shopping: [
      {
        shoppingName: "",
        shoppingUrl: "",
        shoppingImage1: "",
        shoppingDescription: "",
      },
    ],
    restaurants: [
      {
        restaurantName: "",
        restaurantUrl: "",
        restaurantImage1: "",
        restaurantDescription: "",
      },
    ],
    attractions: [
      {
        attractionName: "",
        attractionUrl: "",
        attractionImage1: "",
        attractionImage2: "",
        attractionImage3: "",
        attractionDescription: "",
      },
    ],
    airports: [
      {
        airportName: "",
        airportUrl: "",
        airportImage1: "",
      },
    ],
    trainStations: [
      {
        trainStationName: "",
        trainStationUrl: "",
        trainStationImage1: "",
      },
    ],
  });

  // Fetch trips from the API
  useEffect(() => {
    fetch("http://localhost:3001/saudi-trips")
      .then((response) => response.json())
      .then((data) => {
        const normalizedData = data.map((trip) => ({
          ...trip,
          accommodation: trip.accommodation || [],
          events: trip.events || [],
          experiences: trip.experiences || [],
          shopping: trip.shopping || [],
          restaurants: trip.restaurants || [],
          attractions: trip.attractions || [],
          airports: trip.airports || [],
          trainStations: trip.trainStations || [],
        }));
        setTrips(normalizedData);
      })
      .catch((error) => {
        console.error("Error fetching trip data:", error);
        toast.error("Failed to load AI trips.");
      });
  }, []);

  // Handle Add/Edit Submission
  const handleSubmit = async () => {
    try {
      if (editingTrip) {
        const response = await fetch(
          `http://localhost:3001/saudi-trips/${newTrip.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTrip),
          }
        );
        if (!response.ok) throw new Error("Failed to update trip");

        setTrips(
          trips.map((trip) => (trip.id === newTrip.id ? { ...newTrip } : trip))
        );
        toast.success("AI Trip updated successfully!");
      } else {
        const response = await fetch("http://localhost:3001/saudi-trips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newTrip, id: String(Date.now()) }),
        });
        if (!response.ok) throw new Error("Failed to add trip");

        const addedTrip = await response.json();
        setTrips([...trips, addedTrip]);
        toast.success("AI Trip added successfully!");
      }

      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  // Reset form state
  const resetForm = () => {
    setNewTrip({
      id: "",
      cityName: "",
      cityImage: "",
      cityMap: "",
      accommodation: [
        {
          accommodationName: "",
          accommodationUrl: "",
          accommodationImage1: "",
          accommodationDetail: "",
        },
      ],
      events: [
        {
          eventName: "",
          eventUrl: "",
          eventImage1: "",
          eventDescription: "",
        },
      ],
      experiences: [
        {
          experienceName: "",
          experienceUrl: "",
          experienceImage1: "",
          experienceDescription: "",
        },
      ],
      shopping: [
        {
          shoppingName: "",
          shoppingUrl: "",
          shoppingImage1: "",
          shoppingDescription: "",
        },
      ],
      restaurants: [
        {
          restaurantName: "",
          restaurantUrl: "",
          restaurantImage1: "",
          restaurantDescription: "",
        },
      ],
      attractions: [
        {
          attractionName: "",
          attractionUrl: "",
          attractionImage1: "",
          attractionImage2: "",
          attractionImage3: "",
          attractionDescription: "",
        },
      ],
      airports: [
        {
          airportName: "",
          airportUrl: "",
          airportImage1: "",
        },
      ],
      trainStations: [
        {
          trainStationName: "",
          trainStationUrl: "",
          trainStationImage1: "",
        },
      ],
    });
    setEditingTrip(null);
  };

  // Handle Edit Trip
  const handleEditTrip = (trip) => {
    setEditingTrip(trip);
    setNewTrip(trip);
    setShowModal(true);
  };

  // Handle Delete Trip
  const handleDeleteTrip = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/saudi-trips/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete trip");

      setTrips(trips.filter((trip) => trip.id !== id));
      toast.error("AI Trip deleted!");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  // Search function
  const filteredTrips = trips.filter((trip) =>
    trip.cityName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>AI Trip Operations - Funadiq Trip Planner</title>
      </Helmet>

      <ToastContainer position="bottom-right" autoClose={5000} />

      <div>
        <header className="h-36 bg-[#dcffa0]">
          <div className="flex h-36 items-center justify-center">
            <h2 className="text-3xl md:text-4xl">AI Trip Operations</h2>
          </div>
        </header>

        <div className="mx-auto mb-20 mt-10 px-4 sm:w-full md:w-10/12">
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <Link
              className="flex items-center gap-2 rounded-full text-center bg-[#dcffa0] px-4 py-3 transition-all hover:bg-[#d5ff8e]"
              to="/dashboard"
            >
              Back To Dashboard
            </Link>
            <button
              className="mt-4 md:mt-0 md:ml-4 rounded-full bg-green-600 text-white px-4 py-3"
              onClick={() => {
                setShowModal(true);
                resetForm(); // New trip form
              }}
            >
              + Add AI Trip
            </button>
          </div>

          <input
            type="text"
            placeholder="Search trips..."
            className="mb-4 w-full border rounded p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Trip Data Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">S.No.</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Map</th>
                  <th className="py-2 px-4 border">Accommodations</th>
                  <th className="py-2 px-4 border">Events</th>
                  <th className="py-2 px-4 border">Experiences</th>
                  <th className="py-2 px-4 border">Shopping</th>
                  <th className="py-2 px-4 border">Restaurants</th>
                  <th className="py-2 px-4 border">Attractions</th>
                  <th className="py-2 px-4 border">Airports</th>
                  <th className="py-2 px-4 border">Train Stations</th>
                  <th className="py-2 px-4 border">Edit</th>
                  <th className="py-2 px-4 border">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrips.map((trip) => (
                  <tr key={trip.id}>
                    <td className="py-2 px-4 border text-center">{trip.id}</td>
                    <td className="py-2 px-4 border text-center">
                      {trip.cityName}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <iFrame
                        src={trip.cityMap}
                        style={{ border: "0" }}
                        width="150"
                        height="150"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded"
                      ></iFrame>
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.accommodation && trip.accommodation.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                              <th className="border px-2 py-1">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.accommodation.map((acc, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={acc.accommodationImage1}
                                    alt={acc.accommodationImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {acc.accommodationName}
                                </td>
                                <td className="border px-2 py-1">
                                  {acc.accommodationUrl}
                                </td>
                                <td className="border px-2 py-1">
                                  {acc.accommodationDetail
                                    .split(" ")
                                    .slice(0, 5)
                                    .join(" ")}
                                  ....
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div>No accommodations available</div>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.events && trip.events.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                              <th className="border px-2 py-1">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.events.map((eve, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={eve.eventImage1}
                                    alt={eve.eventImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {eve.eventName}
                                </td>
                                <td className="border px-2 py-1">
                                  {eve.eventUrl}
                                </td>
                                <td className="border px-2 py-1">
                                  {eve.eventDescription
                                    .split(" ")
                                    .slice(0, 5)
                                    .join(" ")}
                                  ....
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No events available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.experiences && trip.experiences.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                              <th className="border px-2 py-1">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.experiences.map((exp, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={exp.experienceImage1}
                                    alt={exp.experienceImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {exp.experienceName}
                                </td>
                                <td className="border px-2 py-1">
                                  {exp.experienceUrl}
                                </td>
                                <td className="border px-2 py-1">
                                  {exp.experienceDescription
                                    .split(" ")
                                    .slice(0, 5)
                                    .join(" ")}
                                  ....
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No experiences available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.shopping && trip.shopping.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                              <th className="border px-2 py-1">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.shopping.map((shop, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={shop.shoppingImage1}
                                    alt={shop.shoppingImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {shop.shoppingName}
                                </td>
                                <td className="border px-2 py-1">
                                  {shop.shoppingUrl}
                                </td>
                                <td className="border px-2 py-1">
                                  {shop.shoppingDescription
                                    .split(" ")
                                    .slice(0, 5)
                                    .join(" ")}
                                  ....
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No shopping available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.restaurants && trip.restaurants.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                              <th className="border px-2 py-1">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.restaurants.map((res, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={res.restaurantImage1}
                                    alt={res.restaurantImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {res.restaurantName}
                                </td>
                                <td className="border px-2 py-1">
                                  {res.restaurantUrl}
                                </td>
                                <td className="border px-2 py-1">
                                  {res.restaurantDescription
                                    .split(" ")
                                    .slice(0, 5)
                                    .join(" ")}
                                  ....
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No restaurants available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.attractions && trip.attractions.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                              <th className="border px-2 py-1">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.attractions.map((at, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={at.attractionImage1}
                                    alt={at.attractionImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {at.attractionName}
                                </td>
                                <td className="border px-2 py-1">
                                  {at.attractionUrl}
                                </td>
                                <td className="border px-2 py-1">
                                  {at.attractionDescription
                                    .split(" ")
                                    .slice(0, 5)
                                    .join(" ")}
                                  ....
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No attractions available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.airports && trip.airports.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.airports.map((air, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={air.airportImage1}
                                    alt={air.airportImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {air.airportName}
                                </td>
                                <td className="border px-2 py-1">
                                  {air.airportUrl}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No airports available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.trainStations && trip.trainStations.length > 0 ? (
                        <table className="border-collapse border border-gray-300 w-full">
                          <thead>
                            <tr>
                              <th className="border px-2 py-1">Image</th>
                              <th className="border px-2 py-1">Name</th>
                              <th className="border px-2 py-1">URL</th>
                            </tr>
                          </thead>
                          <tbody>
                            {trip.trainStations.map((train, index) => (
                              <tr key={index}>
                                <td className="border px-2 py-1">
                                  <img
                                    src={train.trainStationImage1}
                                    alt={train.trainStationImage1}
                                    className="w-16 h-12 object-cover mx-auto rounded"
                                  />
                                </td>
                                <td className="border px-2 py-1">
                                  {train.trainStationName}
                                </td>
                                <td className="border px-2 py-1">
                                  {train.trainStationUrl}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No train stations available</p>
                      )}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="text-blue-600"
                        onClick={() => handleEditTrip(trip)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="text-red-600 ml-4"
                        onClick={() => handleDeleteTrip(trip.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for Add/Edit Trip */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white rounded p-4 w-full max-w-4xl">
                <h3 className="text-xl mb-4 px-2">
                  {editingTrip ? "Edit AI Trip" : "Add AI Trip"}
                </h3>

                <div className="overflow-auto max-h-96 px-2">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block mb-1">City Name</label>
                      <input
                        type="text"
                        className="border rounded p-2 w-full"
                        value={newTrip.cityName}
                        onChange={(e) =>
                          setNewTrip({ ...newTrip, cityName: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-1">City Map</label>
                      <input
                        type="text"
                        className="border rounded p-2 w-full"
                        value={newTrip.cityMap}
                        onChange={(e) =>
                          setNewTrip({ ...newTrip, cityMap: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-1">City Image</label>
                      <input
                        type="text"
                        className="border rounded p-2 w-full"
                        value={newTrip.cityImage}
                        onChange={(e) =>
                          setNewTrip({ ...newTrip, cityImage: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Accommodations</b>
                    </label>
                    {newTrip.accommodation.map((item, index) => (
                      <div
                        key={item.accommodationId}
                        className="grid grid-cols-4 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Accommodation Name"
                          value={item.accommodationName}
                          onChange={(e) => {
                            const updatedAccommodations = [
                              ...newTrip.accommodation,
                            ];
                            updatedAccommodations[index].accommodationName =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              accommodation: updatedAccommodations,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Accommodation URL"
                          value={item.accommodationUrl}
                          onChange={(e) => {
                            const updatedAccommodations = [
                              ...newTrip.accommodation,
                            ];
                            updatedAccommodations[index].accommodationUrl =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              accommodation: updatedAccommodations,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Accommodation Image"
                          value={item.accommodationImage1}
                          onChange={(e) => {
                            const updatedAccommodations = [
                              ...newTrip.accommodation,
                            ];
                            updatedAccommodations[index].accommodationImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              accommodation: updatedAccommodations,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Accommodation Detail"
                          value={item.accommodationDetail}
                          onChange={(e) => {
                            const updatedAccommodations = [
                              ...newTrip.accommodation,
                            ];
                            updatedAccommodations[index].accommodationDetail =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              accommodation: updatedAccommodations,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Events</b>
                    </label>
                    {newTrip.events.map((item, index) => (
                      <div
                        key={item.eventId}
                        className="grid grid-cols-4 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Event Name"
                          value={item.eventName}
                          onChange={(e) => {
                            const updatedEvents = [...newTrip.events];
                            updatedEvents[index].eventName = e.target.value;
                            setNewTrip({ ...newTrip, events: updatedEvents });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Event URL"
                          value={item.eventUrl}
                          onChange={(e) => {
                            const updatedEvents = [...newTrip.events];
                            updatedEvents[index].eventUrl = e.target.value;
                            setNewTrip({ ...newTrip, events: updatedEvents });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Event Image"
                          value={item.eventImage1}
                          onChange={(e) => {
                            const updatedEvents = [...newTrip.events];
                            updatedEvents[index].eventImage1 = e.target.value;
                            setNewTrip({ ...newTrip, events: updatedEvents });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Event Detail"
                          value={item.eventDescription}
                          onChange={(e) => {
                            const updatedEvents = [...newTrip.events];
                            updatedEvents[index].eventDescription =
                              e.target.value;
                            setNewTrip({ ...newTrip, events: updatedEvents });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Experiences</b>
                    </label>
                    {newTrip.experiences.map((item, index) => (
                      <div
                        key={item.experienceId}
                        className="grid grid-cols-4 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Experience Name"
                          value={item.experienceName}
                          onChange={(e) => {
                            const updatedExperiences = [...newTrip.experiences];
                            updatedExperiences[index].experienceName =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              experiences: updatedExperiences,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Experience URL"
                          value={item.experienceUrl}
                          onChange={(e) => {
                            const updatedExperiences = [...newTrip.experiences];
                            updatedExperiences[index].experienceUrl =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              experiences: updatedExperiences,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Experience Image"
                          value={item.experienceImage1}
                          onChange={(e) => {
                            const updatedExperiences = [...newTrip.experiences];
                            updatedExperiences[index].experienceImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              experiences: updatedExperiences,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Experience Detail"
                          value={item.experienceDescription}
                          onChange={(e) => {
                            const updatedExperiences = [...newTrip.experiences];
                            updatedExperiences[index].experienceDescription =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              experiences: updatedExperiences,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Shopping</b>
                    </label>
                    {newTrip.shopping.map((item, index) => (
                      <div
                        key={item.shoppingId}
                        className="grid grid-cols-4 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Shopping Name"
                          value={item.shoppingName}
                          onChange={(e) => {
                            const updatedShopping = [...newTrip.shopping];
                            updatedShopping[index].shoppingName =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              shopping: updatedShopping,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Shopping URL"
                          value={item.shoppingUrl}
                          onChange={(e) => {
                            const updatedShopping = [...newTrip.shopping];
                            updatedShopping[index].shoppingUrl = e.target.value;
                            setNewTrip({
                              ...newTrip,
                              shopping: updatedShopping,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Shopping Image"
                          value={item.shoppingImage1}
                          onChange={(e) => {
                            const updatedShopping = [...newTrip.shopping];
                            updatedShopping[index].shoppingImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              shopping: updatedShopping,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Shopping Detail"
                          value={item.shoppingDescription}
                          onChange={(e) => {
                            const updatedShopping = [...newTrip.shopping];
                            updatedShopping[index].shoppingDescription =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              shopping: updatedShopping,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Restaurants</b>
                    </label>
                    {newTrip.restaurants.map((item, index) => (
                      <div
                        key={item.restaurantId}
                        className="grid grid-cols-4 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Restaurant Name"
                          value={item.restaurantName}
                          onChange={(e) => {
                            const updatedRestaurants = [...newTrip.restaurants];
                            updatedRestaurants[index].restaurantName =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              restaurants: updatedRestaurants,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Restaurant URL"
                          value={item.restaurantUrl}
                          onChange={(e) => {
                            const updatedRestaurants = [...newTrip.restaurants];
                            updatedRestaurants[index].restaurantUrl =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              restaurants: updatedRestaurants,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Restaurant Image"
                          value={item.restaurantImage1}
                          onChange={(e) => {
                            const updatedRestaurants = [...newTrip.restaurants];
                            updatedRestaurants[index].restaurantImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              restaurants: updatedRestaurants,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Restaurant Detail"
                          value={item.restaurantDescription}
                          onChange={(e) => {
                            const updatedRestaurants = [...newTrip.restaurants];
                            updatedRestaurants[index].restaurantDescription =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              restaurants: updatedRestaurants,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Attractions</b>
                    </label>
                    {newTrip.attractions.map((item, index) => (
                      <div
                        key={item.attractionId}
                        className="grid grid-cols-4 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Attraction Name"
                          value={item.attractionName}
                          onChange={(e) => {
                            const updatedAttractions = [...newTrip.attractions];
                            updatedAttractions[index].attractionName =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              attractions: updatedAttractions,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Attraction URL"
                          value={item.attractionUrl}
                          onChange={(e) => {
                            const updatedAttractions = [...newTrip.attractions];
                            updatedAttractions[index].attractionUrl =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              attractions: updatedAttractions,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Attraction Image"
                          value={item.attractionImage1}
                          onChange={(e) => {
                            const updatedAttractions = [...newTrip.attractions];
                            updatedAttractions[index].attractionImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              attractions: updatedAttractions,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Attraction Detail"
                          value={item.attractionDescription}
                          onChange={(e) => {
                            const updatedAttractions = [...newTrip.attractions];
                            updatedAttractions[index].attractionDescription =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              attractions: updatedAttractions,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Airports</b>
                    </label>
                    {newTrip.airports.map((item, index) => (
                      <div
                        key={item.airportId}
                        className="grid grid-cols-3 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Airport Name"
                          value={item.airportName}
                          onChange={(e) => {
                            const updatedAirports = [...newTrip.airports];
                            updatedAirports[index].airportName = e.target.value;
                            setNewTrip({
                              ...newTrip,
                              airports: updatedAirports,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Airport Image"
                          value={item.airportImage1}
                          onChange={(e) => {
                            const updatedAirports = [...newTrip.airports];
                            updatedAirports[index].airportImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              airports: updatedAirports,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Airport URL"
                          value={item.airportUrl}
                          onChange={(e) => {
                            const updatedAirports = [...newTrip.airports];
                            updatedAirports[index].airportUrl = e.target.value;
                            setNewTrip({
                              ...newTrip,
                              airports: updatedAirports,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      <b>Train Stations</b>
                    </label>
                    {newTrip.trainStations.map((item, index) => (
                      <div
                        key={item.trainStationId}
                        className="grid grid-cols-3 gap-4 mb-2"
                      >
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Station Name"
                          value={item.trainStationName}
                          onChange={(e) => {
                            const updatedStations = [...newTrip.trainStations];
                            updatedStations[index].trainStationName =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              trainStations: updatedStations,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Station Image"
                          value={item.trainStationImage1}
                          onChange={(e) => {
                            const updatedStations = [...newTrip.trainStations];
                            updatedStations[index].trainStationImage1 =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              trainStations: updatedStations,
                            });
                          }}
                        />
                        <input
                          type="text"
                          className="border rounded p-2 w-full"
                          placeholder="Station URL"
                          value={item.trainStationUrl}
                          onChange={(e) => {
                            const updatedStations = [...newTrip.trainStations];
                            updatedStations[index].trainStationUrl =
                              e.target.value;
                            setNewTrip({
                              ...newTrip,
                              trainStations: updatedStations,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      className="rounded bg-red-600 text-white px-4 py-2"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 rounded bg-green-600 text-white px-4 py-2"
                      onClick={handleSubmit}
                    >
                      {editingTrip ? "Update" : "Add"} Trip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AiTripOperations;
