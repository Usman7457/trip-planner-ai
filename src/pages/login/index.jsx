import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Enter Email Address"),
    password: Yup.string().required("Enter Your Password"),
  });

  return (
    <>
      <Helmet>
        <title>Sign In - Funadiq Trip Planner</title>
      </Helmet>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200 sm:border-2 border-black">
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
            <h3 className="font-display text-2xl font-bold">Login</h3>
            <p className="text-sm text-gray-500">
              Sign in to create new trip, save your trip plans and access them
              on any device.
            </p>
            <br />
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                try {
                  // Fetch all users to check if the email exists
                  const response = await axios.get(
                    "http://localhost:5000/api/users"
                  );
                  const users = response.data;

                  // Check if the email exists
                  const user = users.find(
                    (user) => user.email === values.email
                  );

                  if (!user) {
                    // If email does not exist, show an error message
                    toast.error("Email not found.", {
                      position: "bottom-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    return; // Exit the function early
                  }

                  // If email exists, check the password
                  const isPasswordValid = await bcrypt.compare(
                    values.password,
                    user.password
                  );

                  if (isPasswordValid) {
                    // Save user details (email and role) in localStorage
                    localStorage.setItem("email", values.email);
                    localStorage.setItem("role", user.role); // Save the role

                    // Redirect based on user role
                    toast.success("Sign in successful! Redirecting", {
                      position: "bottom-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });

                    setTimeout(() => {
                      if (user.role === "ftp-admin") {
                        navigate("/dashboard");
                      } else {
                        navigate("/trips");
                      }
                    }, 3000);
                  } else {
                    toast.error("Invalid credentials. Try again!", {
                      position: "bottom-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                } catch (error) {
                  console.error("Error during login:", error);
                  toast.error("An error occurred. Please try again.", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              }}
            >
              {() => (
                <Form className="space-y-4 w-full max-w-lg">
                  <div>
                    <Field
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      className="block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-600 mt-2"
                    />
                  </div>
                  <div>
                    <Field
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                      className="block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-600 mt-2"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full max-w-lg flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Sign In
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            <Link
              to="/forgot-password"
              className="text-center text-base text-gray-700 hover:text-gray-500"
            >
              Forgot password?
            </Link>
            <Link
              to="/sign-up"
              className="text-center text-base text-gray-700 hover:text-gray-500"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
