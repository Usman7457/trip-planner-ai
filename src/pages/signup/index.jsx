import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Enter Email Address"),
    password: Yup.string().required("Enter Your Password"),
    name: Yup.string().required("Enter Your Name"),
  });

  return (
    <>
      <Helmet>
        <title>Sign Up - Funadiq Trip Planner</title>
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
            <h3 className="font-display text-2xl font-bold">Sign Up</h3>
            <p className="text-sm text-gray-500">
              Sign up to create new trip, save your trip plans and access them
              on any device.
            </p>
            <br />
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  // Fetch existing users to check for duplicate emails
                  const response = await axios.get("http://localhost:3001/users");
                  const existingUsers = response.data;

                  // Check if the email already exists
                  const emailExists = existingUsers.some(user => user.email === values.email);

                  if (emailExists) {
                    // If email already exists, show an error message
                    toast.error("Email already exists. Please try a different email.", {
                      position: "bottom-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  } else {
                    // Proceed with signup
                    const hashedPassword = await bcrypt.hash(values.password, 10);
                    await axios.post("http://localhost:3001/users", {
                      ...values,
                      password: hashedPassword,
                      role: "visitor", 
                    });
                    
                    toast.success("Sign-up successful! Redirecting...", {
                      position: "bottom-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    
                    resetForm();
                    setTimeout(() => {
                      navigate("/login");
                    }, 3000);
                  }
                } catch (error) {
                  toast.error("An error occurred. Please try again.", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  console.error("Error saving data:", error);
                }
              }}
            >
              {() => (
                <Form className="space-y-4 w-full max-w-lg">
                  <div>
                    <Field
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      className="mt-1 block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-600 mt-2"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      className="mt-1 block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
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
                      className="mt-1 block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
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
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            <Link
              to="/login"
              className="text-center text-base text-gray-700 hover:text-gray-500"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
