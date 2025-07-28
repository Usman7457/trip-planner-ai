import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ForgotPassword = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Enter Email Address"),
  });

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(`http://localhost:3001/users?email=${email}`); // Fetch users by email
      const data = await response.json();
      return data.length > 0; // Check if any users are returned with the given email
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false; // Return false in case of error
    }
  };

  const handleSubmit = async (values) => {
    try {
        // Clear all data in local storage
        localStorage.clear();

        // Save the submitted email in local storage
        localStorage.setItem("email", values.email);

        // Check if the email exists
        const emailExists = await checkEmailExists(values.email);
        if (!emailExists) {
            toast.error("Email address does not exist.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        // Continue with EmailJS logic for sending the password reset email
        const templateParams = { email: values.email };

        const response = await emailjs.send(
            'service_cuczfuh',   // Your EmailJS Service ID
            'template_dxuqt6l',  // Your EmailJS Template ID
            templateParams,
            'j29AXalECNdRBDc-3'  // Your EmailJS User ID (Public Key)
        );

        if (response.status === 200 || response.text === "OK") {
            toast.success('Password reset email sent! Please check your inbox.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => navigate("/login"), 3000);
        } else {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error("Error during forgot password process:", error);

        toast.error(`An error occurred: ${error.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
};

  return (
    <>
      <Helmet>
        <title>Forgot Password - Funadiq Trip Planner</title>
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
            <h3 className="font-display text-2xl font-bold">Forgot Password</h3>
            <p className="text-sm text-gray-500">
              Enter your email address to reset your password.
            </p>
            <br />
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="space-y-4 w-full max-w-lg">
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
                    <button
                      type="submit"
                      className="w-full max-w-lg flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Send Password Reset Email
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

export default ForgotPassword;
