import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import bcrypt from "bcryptjs";

const RecoverPassword = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Enter a new password"),
  });

  const handleSubmit = async (values) => {
    try {
      const storedEmail = localStorage.getItem('email');
      if (!storedEmail) {
        toast.error("Session Expired!!", { position: "bottom-right", autoClose: 3000 });
        return;
      }

      // Step 1: Retrieve user details by email to get the ID
      const getUserResponse = await axios.get(`http://localhost:3001/users?email=${storedEmail}`);
      if (getUserResponse.data.length === 0) {
        toast.error("User not found.", { position: "bottom-right", autoClose: 3000 });
        return;
      }
      
      const userId = getUserResponse.data[0].id;
      // Step 2: Hash the new password
      const hashedPassword = await bcrypt.hash(values.password, 10);
      
      // Step 3: Update password using the user ID
      const response = await axios.put(`http://localhost:3001/users/${userId}`, {
        ...getUserResponse.data[0], // Keep existing user data
        password: hashedPassword, // Update only the password
      });
      
      if (response.status === 200) {
        localStorage.removeItem('email');
        toast.success('Password updated successfully! Redirecting to login page...', { position: "bottom-right", autoClose: 3000 });
        setTimeout(() => navigate("/login"), 3000);
      } else {
        throw new Error("Failed to update password.");
      }
  
    } catch (error) {
      console.error("Error during password recovery process:", error);
      toast.error("An error occurred while updating the password. Please try again.", { position: "bottom-right", autoClose: 3000 });
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Recover Password - Funadiq Trip Planner</title>
      </Helmet>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200 sm:border-2 border-black">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <Link to="/" rel="noreferrer">
              <img
                alt="Logo"
                className="h-10 w-10 rounded-full"
                src="img/logo.webp"
              />
            </Link>
            <h3 className="font-display text-2xl font-bold">Recover Password</h3>
            <p className="text-sm text-gray-500">Enter your new password.</p>
            <br />
            <Formik
              initialValues={{ password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="space-y-4 w-full max-w-lg">
                  <div>
                    <Field
                      name="password"
                      placeholder="Enter New Password"
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
                      Recover Password
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            <Link
              to="/login"
              className="text-center text-base text-gray-700 hover:text-gray-700"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecoverPassword;
