import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaUsers, FaSuitcase, FaPaperPlane, FaGlobe } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);


  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Funadiq Trip Planner</title>
      </Helmet>
      <div className="flex flex-col mb-12">
        <div className="w-full flex-grow">
          <div className="mx-auto max-w-screen-xl px-4 pt-32">
            <h1 className="mt-5 text-center text-3xl font-medium md:text-4xl">
              Welcome To Funadiq Trip Planner
            </h1> 
            <p className="mt-3 text-center">Please Make A Selection</p>
          </div>
          
          <div className="mx-auto max-w-screen-xl mt-24 px-4 md:px-12">
            {/* Grid layout for the cards */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              
              {/* User Operations */}
              <Link className="group relative cursor-pointer text-center" to="/user-operations">
                <FaUsers className="mx-auto text-6xl text-gray-700 group-hover:text-green-500 transition-colors duration-200" />
                <div className="mt-6">
                  <h2 className="mb-1 text-lg font-medium group-hover:underline">User Operations</h2>
                </div>
              </Link>

              {/* Community Trip Operations */}
              <Link className="group relative cursor-pointer text-center" to="/community-trip-operations">
                <FaSuitcase className="mx-auto text-6xl text-gray-700 group-hover:text-green-500 transition-colors duration-200" />
                <div className="mt-6">
                  <h2 className="mb-1 text-lg font-medium group-hover:underline">Community Trip Operations</h2>
                </div>
              </Link>

              {/* Destination Operations */}
              <Link className="group relative cursor-pointer text-center" to="/destination-operations">
                <FaGlobe className="mx-auto text-6xl text-gray-700 group-hover:text-green-500 transition-colors duration-200" />
                <div className="mt-6">
                  <h2 className="mb-1 text-lg font-medium group-hover:underline">Destination Operations</h2>
                </div>
              </Link>

              {/* AI Trip Operations */}
              <Link className="group relative cursor-pointer text-center" to="/ai-trip-operations">
                <FaPaperPlane className="mx-auto text-6xl text-gray-700 group-hover:text-green-500 transition-colors duration-200" />
                <div className="mt-6">
                  <h2 className="mb-1 text-lg font-medium group-hover:underline">AI Trip Operations</h2>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
