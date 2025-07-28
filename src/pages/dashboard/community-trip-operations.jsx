import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CommunityTripOperations = () => {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [tripData, setTripData] = useState({
    tripName: "",
    tripImage: "",
    tripUrl: "",
    tripDescription: "",
    authorName: "",
    days: "",
    totalLikes: "",
  });

  // Fetch community trips from API
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/community-trips"
        );
        setTrips(response.data);
      } catch (error) {
        toast.error("Failed to fetch trips.");
      }
    };

    fetchTrips();
  }, []);

  // Handle delete trip
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/community-trips/${id}`);
      setTrips(trips.filter((trip) => trip.id !== id));
      toast.success("Trip deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete trip.");
    }
  };

  // Filter trips based on search term
  const filteredTrips = trips.filter((trip) =>
    trip.tripName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open modal for adding or editing
  const openModal = (trip = null) => {
    setTripData(
      trip || {
        tripName: "",
        tripImage: "",
        tripUrl: "",
        tripDescription: "",
        authorName: "",
        authorImage: "",
        days: "",
        totalLikes: "",
      }
    );
    setSelectedTrip(trip);
    setIsModalOpen(true);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedTrip) {
        // Update trip
        await axios.put(
          `http://localhost:3001/community-trips/${selectedTrip.id}`,
          tripData
        );
        toast.success("Trip updated successfully.");
      } else {
        // Add new trip
        await axios.post("http://localhost:3001/community-trips", tripData);
        toast.success("Trip added successfully.");
      }
      setIsModalOpen(false);
      setTripData({
        tripName: "",
        tripImage: "",
        tripUrl: "",
        tripDescription: "",
        authorName: "",
        authorImage: "",
        days: "",
        totalLikes: "",
      });
      // Refetch trips after adding or editing
      const response = await axios.get("http://localhost:3001/community-trips");
      setTrips(response.data);
    } catch (error) {
      toast.error("Failed to save trip.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Community Trip Operations - Funadiq Trip Planner</title>
      </Helmet>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div>
        <header className="h-36 bg-[#dcffa0]">
          <div className="flex h-36 items-center justify-center">
            <h2 className="text-3xl md:text-4xl">Community Trip Operations</h2>
          </div>
        </header>

        <div className="mx-auto mb-20 mt-10 px-4 sm:w-full md:w-10/12">
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <Link
              className="flex items-center gap-2 rounded-full bg-[#dcffa0] px-4 py-3 transition-all hover:bg-[#d5ff8e]"
              to="/dashboard"
            >
              Back To Dashboard
            </Link>
            <button
              className="mt-4 md:mt-0 md:ml-4 rounded-full bg-green-600 text-white px-4 py-3"
              onClick={() => openModal()} // Open modal for adding a trip
            >
              + Add Community Trip
            </button>
          </div>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 w-full border rounded p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Trip Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">S.No.</th>
                  <th className="py-2 px-4 border">Image</th>
                  <th className="py-2 px-4 border">Trip Name</th>
                  <th className="py-2 px-4 border">Trip URL</th>
                  <th className="py-2 px-4 border">Author</th>
                  <th className="py-2 px-4 border">Days</th>
                  <th className="py-2 px-4 border">Likes</th>
                  <th className="py-2 px-4 border">Edit</th>
                  <th className="py-2 px-4 border">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrips.map((trip) => (
                  <tr key={trip.id}>
                    <td className="py-2 px-4 border text-center">{trip.id}</td>
                    <td className="py-2 px-4 border text-center">
                      <img
                        src={trip.tripImage} // Fixed the image reference
                        alt={trip.tripName}
                        className="w-16 h-16 object-cover mx-auto rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.tripName}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      /{trip.tripUrl}
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <img
                          src={trip.authorImage}
                          alt={trip.authorName}
                          className="w-10 h-10 object-cover rounded-full"
                        />
                        <span>{trip.authorName}</span>
                      </div>
                    </td>

                    <td className="py-2 px-4 border text-center">
                      {trip.days} Days
                    </td>
                    <td className="py-2 px-4 border text-center">
                      {trip.totalLikes} Likes
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="text-blue-600"
                        onClick={() => openModal(trip)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="text-red-600 ml-4"
                        onClick={() => handleDelete(trip.id)}
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
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 lg:w-2/4 w-full">
              <h2 className="text-xl font-semibold mb-4 text-start text-gray-800">
                {selectedTrip ? "Edit Trip" : "Add Trip"}
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Trip Name, Trip Image URL, and Trip URL in one line (3 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Trip Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.tripName}
                      onChange={(e) =>
                        setTripData({ ...tripData, tripName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Trip Image URL</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.tripImage}
                      onChange={(e) =>
                        setTripData({ ...tripData, tripImage: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Trip URL</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.tripUrl}
                      onChange={(e) =>
                        setTripData({ ...tripData, tripUrl: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
          
                {/* Author Name and Author Image in one line (2 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Author Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.authorName}
                      onChange={(e) =>
                        setTripData({ ...tripData, authorName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Author Image</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.authorImage}
                      onChange={(e) =>
                        setTripData({ ...tripData, authorImage: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
          
                {/* Days and Total Likes in one line (2 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Days</label>
                    <input
                      type="number"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.days}
                      onChange={(e) =>
                        setTripData({ ...tripData, days: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Total Likes</label>
                    <input
                      type="number"
                      className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={tripData.totalLikes}
                      onChange={(e) =>
                        setTripData({ ...tripData, totalLikes: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
          
                {/* Trip Description in one line (1 column) */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Trip Description</label>
                  <textarea
                    className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    value={tripData.tripDescription}
                    onChange={(e) =>
                      setTripData({
                        ...tripData,
                        tripDescription: e.target.value,
                      })
                    }
                    required
                  />
                </div>
          
                {/* Buttons */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded bg-red-600 text-white px-4 py-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-4 rounded bg-green-600 text-white px-4 py-2"
                  >
                    {selectedTrip ? "Update" : "Add"} Trip
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          )}
        </div>
      </div>
    </>
  );
};

export default CommunityTripOperations;
