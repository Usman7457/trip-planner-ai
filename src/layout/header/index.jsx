import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [email, setEmail] = useState(null);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    // Attach click event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [email]); // Depend on email to ensure the dropdown closes correctly

  const handleSignOut = () => {
    // Remove email and role from local storage
    localStorage.removeItem("email");
    localStorage.removeItem("role"); // Remove user role as well
    setEmail(null);
    navigate("/"); // Redirect to home or login page
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const getInitials = (email) => {
    if (!email) return "";
    return email.slice(0, 2).toUpperCase();
  };

  const userRole = localStorage.getItem("role");

  return (
    <div className="fixed top-0 flex w-full items-center justify-center z-50 transition-all bg-white">
      <div className="mx-5 flex h-14 w-full max-w-screen-xl items-center justify-between md:h-16">
        <div className="flex gap-6">
          <Link className="font-display flex items-center text-2xl" to="/">
            <img
              alt="Funadiq Trip Planner Logo"
              loading="lazy"
              width="29"
              height="29"
              decoding="async"
              data-nimg="1"
              className="mr-2 rounded-sm"
              style={{ color: "transparent" }}
              src="img/logo.webp"
            />
            <h1 className="text-base/7 font-medium md:text-xl/8">
              Funadiq Trip Planner
            </h1>
          </Link>
          <div className="flex">
            <Link
              className="cursor-pointer rounded-full px-4 py-1.5 hover:bg-gray-100 hidden md:block"
              to="/destinations"
            >
              Explore Saudi Arabia
            </Link>
          </div>
        </div>
        <ul className="ml-5 flex gap-2">
          <li
            className="cursor-pointer rounded-full px-4 py-1.5 hover:bg-gray-100 hidden md:block"
            style={{
              opacity: 1,
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          >
            <Link to="/community-trips">Community Trips</Link>
          </li>
          <li
            style={{
              opacity: 1,
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          >
            {email ? (
              <div className="relative flex items-center" ref={dropdownRef}>
                <div
                  className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {getInitials(email)}
                </div>
                {dropdownVisible && (
                  <div className="absolute top-10 right-0 bg-[#f7f7f7] shadow-lg rounded-lg py-2 w-100">
                    <p className="px-4 py-2 text-sm font-semibold text-gray-700">
                      {email}
                    </p>
                    {userRole === "ftp-admin" ? (
                      <Link
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        to="/trips"
                      >
                        My Trips
                      </Link>
                    )}
                    <Link
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      to="/settings"
                    >
                      Change Password
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={handleSignOut}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Link
                  to="/login"
                  className="h-fit cursor-pointer rounded-full bg-black px-4 py-1.5 text-sm transition-colors md:text-base text-white hover:bg-green-800"
                >
                  Sign In
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
