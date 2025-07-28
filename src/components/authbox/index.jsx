import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In - Funadiq Trip Planner</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200 text-align sm:border-2 border-black">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <Link to="/" rel="noreferrer">
              <img
                alt="Logo"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="h-10 w-10 rounded-full"
                src="img/logo.webp"
                style={{ color: "transparent" }}
              />
            </Link>
            <h3 className="font-display text-2xl font-bold">Sign In</h3>
            <p className="text-sm text-gray-500">
              Sign in to create new trip, save your trip plans and access them
              on any device.
            </p>
          </div>
          <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            <button
              className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border border-gray-200 bg-white text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
              onClick={handleGoogleSignIn}
            >
              <svg viewBox="0 0 100 100" className="h-5 w-5">
                <linearGradient
                  id="b"
                  x1="55.41"
                  x2="12.11"
                  y1="96.87"
                  y2="21.87"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1e8e3e"></stop>
                  <stop offset="1" stop-color="#34a853"></stop>
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="42.7"
                  x2="86"
                  y1="100"
                  y2="25.13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fcc934"></stop>
                  <stop offset="1" stop-color="#fbbc04"></stop>
                </linearGradient>
                <linearGradient
                  id="a"
                  x1="6.7"
                  x2="93.29"
                  y1="31.25"
                  y2="31.25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#d93025"></stop>
                  <stop offset="1" stop-color="#ea4335"></stop>
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M93.29 25a50 50 90 0 0-86.6 0l3 54z"
                ></path>
                <path
                  fill="url(#b)"
                  d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z"
                ></path>
                <path
                  fill="url(#c)"
                  d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z"
                ></path>
                <path
                  fill="#fff"
                  d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z"
                ></path>
                <path
                  fill="#1a73e8"
                  d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z"
                ></path>{" "}
              </svg>
              <p>Sign In with Google</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
