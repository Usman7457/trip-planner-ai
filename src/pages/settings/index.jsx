import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);

  // Check if the user is logged in
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  // Extract the first two letters from the email
  const getInitials = (email) => {
    return email ? email.substring(0, 2).toUpperCase() : "";
  };

  // Validation schema for the password form
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required")
      .notOneOf([Yup.ref('currentPassword')], "New password cannot be the same as the current password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Please confirm your new password"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Fetch all users to check if the email exists
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      // Find the user by email
      const user = users.find((user) => user.email === email);

      if (!user) {
        toast.error("User not found", {
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

      // Check if the current password is correct
      const isPasswordValid = await bcrypt.compare(
        values.currentPassword,
        user.password
      );

      if (!isPasswordValid) {
        toast.error("Incorrect current password. Please try again.", {
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

      // Hash the new password
      const hashedPassword = await bcrypt.hash(values.newPassword, 10);

      // Update the password in the database
      await axios.put(`http://localhost:3001/users/${user.id}`, {
        ...user,
        password: hashedPassword,
      });

      toast.success("Password updated successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // After successful password change, log the user out and redirect to login
      setTimeout(() => {
        // Clear user data (simulate logout)
        localStorage.removeItem("userEmail");
        navigate("/login");
      }, 1500); // Redirect after 3 seconds
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setSubmitting(false); // Stop the form from submitting
    }
  };

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <main className="mb-12 w-full flex-grow">
        <div className="mx-auto mt-12 max-w-screen-xl px-4 pt-12 md:px-12">
          <h2 className="text-2xl">Profile Settings</h2>
          <p className="text-gray-600">Change your password</p>
          <hr className="my-6 border-gray-300" />
          <div className="mt-12 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/6 flex items-center justify-center bg-black text-white aspect-square rounded-full">
              {email && (
                <span className="text-9xl font-bold">
                  {getInitials(email)}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/6"></div>
            <div className="w-full md:w-3/6">
              {email && (
                <Formik
                  initialValues={{
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label className="block text-base font-medium text-gray-700 mb-4">
                          Current Password
                        </label>
                        <Field
                          name="currentPassword"
                          type="password"
                          placeholder="Enter current password"
                          className="block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        />
                        <ErrorMessage
                          name="currentPassword"
                          component="div"
                          className="text-sm text-red-600 mt-2"
                        />
                      </div>

                      <div>
                        <label className="block text-base font-medium text-gray-700 mb-4">
                          New Password
                        </label>
                        <Field
                          name="newPassword"
                          type="password"
                          placeholder="Enter new password"
                          className="block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        />
                        <ErrorMessage
                          name="newPassword"
                          component="div"
                          className="text-sm text-red-600 mt-2"
                        />
                      </div>

                      <div>
                        <label className="block text-base font-medium text-gray-700 mb-4">
                          Confirm New Password
                        </label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm new password"
                          className="block w-full p-3 rounded-md border border-black shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="text-sm text-red-600 mt-2"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full mt-4 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Updating..." : "Update Password"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
