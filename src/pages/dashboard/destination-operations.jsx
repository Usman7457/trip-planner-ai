import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DestinationOperations = () => {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [newDestination, setNewDestination] = useState({
    countryName: "",
    cityName: "",
    imageUrl: "",
    cityUrl: "",
    trips: [{ tripName: "", tripUrl: "" }],
  });

  // Fetch destinations
  useEffect(() => {
    axios
      .get("http://localhost:3001/destinations")
      .then((response) => {
        // Ensure that response.data is an array
        if (Array.isArray(response.data)) {
          setDestinations(response.data);
        } else {
          console.error("Expected response data to be an array.");
        }
      })
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  // Handle delete destination
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/destinations/${id}`)
      .then(() => {
        setDestinations(destinations.filter((dest) => dest.id !== id));
        toast.success("Destination deleted successfully!");
      })
      .catch((error) => console.error("Error deleting destination:", error));
  };

  // Handle add destination
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/destinations", newDestination)
      .then((response) => {
        setDestinations([...destinations, response.data]); // Use the response data
        setAddOpen(false);
        toast.success("Destination added successfully!");
        setNewDestination({
          countryName: "",
          cityName: "",
          imageUrl: "",
          cityUrl: "",
          trips: [{ tripName: "", tripUrl: "" }],
        });
      })
      .catch((error) => console.error("Error adding destination:", error));
  };

  // Handle edit destination
  const handleEdit = () => {
    axios
      .put(
        `http://localhost:3001/destinations/${selectedDestination.id}`,
        selectedDestination
      )
      .then(() => {
        setDestinations(
          destinations.map((dest) =>
            dest.id === selectedDestination.id ? selectedDestination : dest
          )
        );
        setEditOpen(false);
        toast.success("Destination updated successfully!");
      })
      .catch((error) => console.error("Error updating destination:", error));
  };

  return (
    <>
      <Helmet>
        <title>Destination Operations - Funadiq Trip Planner</title>
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
        <header className="h-36 bg-primary-green px-4 md:px-0 bg-[#dcffa0]">
          <div className="flex h-36 items-center justify-center">
            <h2 className="text-3xl md:text-4xl">Destination Operations</h2>
          </div>
        </header>

        <div className="mx-auto mb-20 mt-10 px-4 sm:w-full md:w-10/12 md:px-0">
          <div className="flex flex-col md:flex-row justify-between mb-10 px-4">
            <Link
              className="flex w-full md:w-auto items-center gap-2 rounded-full bg-[#dcffa0] px-4 py-3 transition-all hover:bg-[#d5ff8e]"
              to="/dashboard"
            >
              Back To Dashboard
            </Link>
            <button
              onClick={() => setAddOpen(true)}
              className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto rounded-full bg-green-600 text-white px-4 py-3"
            >
              + Add Destination
            </button>
          </div>

          <div className="px-4 mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>

          {/* Destination Table */}
          <div className="px-4 mt-4 overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">S.No</th>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Country</th>
                  <th className="border px-4 py-2">City</th>
                  <th className="border px-4 py-2">City URL</th>
                  <th className="border px-4 py-2">Trips</th>
                  <th className="border px-4 py-2">Edit</th>
                  <th className="border px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(destinations) && destinations.length > 0 ? (
                  destinations
                    .filter((destination) =>
                      destination.cityName.includes(search)
                    )
                    .map((destination, index) => (
                      <tr key={destination.id}>
                        <td className="border px-4 py-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <img
                            src={destination.imageUrl}
                            alt={destination.cityName}
                            className="w-16 h-16 object-cover mx-auto rounded"
                          />
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {destination.countryName}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {destination.cityName}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          /{destination.cityUrl}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {/* Nested Table for Trips */}
                          {Array.isArray(destination.trips) &&
                          destination.trips.length > 0 ? (
                            <table className="border-collapse border border-gray-300 w-full">
                              <thead>
                                <tr className="bg-gray-200">
                                  <th className="border px-2 py-1">
                                    Trip Name
                                  </th>
                                  <th className="border px-2 py-1">Trip URL</th>
                                </tr>
                              </thead>
                              <tbody>
                                {destination.trips.map((trip) => (
                                  <tr key={trip.tripId}>
                                    <td className="border px-2 py-1">
                                      {trip.tripName}
                                    </td>
                                    <td className="border px-2 py-1">
                                      /{trip.tripUrl}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <div>No trips available</div>
                          )}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() => {
                              setSelectedDestination(destination);
                              setEditOpen(true);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => handleDelete(destination.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No destinations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Add Destination Modal */}
          {isAddOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div
                className="bg-white p-6 rounded-lg"
                style={{ width: "600px" }}
              >
                <h3 className="text-xl mb-4">Add New Destination</h3>

                {/* Country Name & City Name in one row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Country Name</label>
                    <input
                      type="text"
                      value={newDestination.countryName}
                      onChange={(e) =>
                        setNewDestination({
                          ...newDestination,
                          countryName: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label>City Name</label>
                    <input
                      type="text"
                      value={newDestination.cityName}
                      onChange={(e) =>
                        setNewDestination({
                          ...newDestination,
                          cityName: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                </div>

                {/* Image URL & City URL in one row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={newDestination.imageUrl}
                      onChange={(e) =>
                        setNewDestination({
                          ...newDestination,
                          imageUrl: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label>City URL</label>
                    <input
                      type="text"
                      value={newDestination.cityUrl}
                      onChange={(e) =>
                        setNewDestination({
                          ...newDestination,
                          cityUrl: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                </div>

                {/* Trip Name & Trip URL in one row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Trip Name</label>
                    <input
                      type="text"
                      value={newDestination.trips[0]?.tripName || ""} // Ensure tripName is accessible
                      onChange={(e) =>
                        setNewDestination((prev) => ({
                          ...prev,
                          trips: [
                            {
                              // Add tripName to the first trip object
                              ...prev.trips[0],
                              tripName: e.target.value,
                            },
                          ],
                        }))
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label>Trip URL</label>
                    <input
                      type="text"
                      value={newDestination.trips[0]?.tripUrl || ""} // Ensure tripUrl is accessible
                      onChange={(e) =>
                        setNewDestination((prev) => ({
                          ...prev,
                          trips: [
                            {
                              // Add tripUrl to the first trip object
                              ...prev.trips[0],
                              tripUrl: e.target.value,
                            },
                          ],
                        }))
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setAddOpen(false)}
                    className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleAdd}
                    className="px-4 py-2 bg-green-600 text-white rounded-md"
                  >
                    Add Destination
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Destination Modal */}
          {isEditOpen && selectedDestination && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div
                className="bg-white p-6 rounded-lg"
                style={{ width: "600px" }}
              >
                <h3 className="text-xl mb-4">Edit Destination</h3>

                {/* Country Name & City Name in one row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Country Name</label>
                    <input
                      type="text"
                      value={selectedDestination.countryName}
                      onChange={(e) =>
                        setSelectedDestination({
                          ...selectedDestination,
                          countryName: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label>City Name</label>
                    <input
                      type="text"
                      value={selectedDestination.cityName}
                      onChange={(e) =>
                        setSelectedDestination({
                          ...selectedDestination,
                          cityName: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                </div>

                {/* Image URL & City URL in one row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={selectedDestination.imageUrl}
                      onChange={(e) =>
                        setSelectedDestination({
                          ...selectedDestination,
                          imageUrl: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label>City URL</label>
                    <input
                      type="text"
                      value={selectedDestination.cityUrl}
                      onChange={(e) =>
                        setSelectedDestination({
                          ...selectedDestination,
                          cityUrl: e.target.value,
                        })
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                </div>

                {/* Trip Name & Trip URL in one row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label>Trip Name</label>
                    <input
                      type="text"
                      value={selectedDestination.trips[0].tripName} // Accessing the first trip
                      onChange={(e) =>
                        setSelectedDestination((prev) => ({
                          ...prev,
                          trips: [
                            {
                              ...prev.trips[0],
                              tripName: e.target.value, // Update the tripName for the first trip
                            },
                          ],
                        }))
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label>Trip URL</label>
                    <input
                      type="text"
                      value={selectedDestination.trips[0].tripUrl} // Accessing the first trip
                      onChange={(e) =>
                        setSelectedDestination((prev) => ({
                          ...prev,
                          trips: [
                            {
                              ...prev.trips[0],
                              tripUrl: e.target.value, // Update the tripUrl for the first trip
                            },
                          ],
                        }))
                      }
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setEditOpen(false)}
                    className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleEdit}
                    className="px-4 py-2 bg-green-600 text-white rounded-md"
                  >
                    Update Destination
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DestinationOperations;
