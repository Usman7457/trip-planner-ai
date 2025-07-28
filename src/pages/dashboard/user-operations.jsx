import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import bcrypt from "bcryptjs";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserOperations = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [search, setSearch] = useState("");
  const loggedInUserId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const hashedPassword = bcrypt.hashSync(values.password, 10);
      const newUser = { ...values, password: hashedPassword };
      axios
        .post("http://localhost:3001/users", newUser)
        .then(() => {
          setUsers([...users, newUser]);
          resetForm();
          setAddOpen(false);
          toast.success("User added successfully!");
        })
        .catch((error) => console.error(error));
    },
  });

  const editFormik = useFormik({
    initialValues: {
      name: selectedUser?.name || "",
      email: selectedUser?.email || "",
      password: "",
      role: selectedUser?.role || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string(),
      role: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const hashedPassword = values.password
        ? bcrypt.hashSync(values.password, 10)
        : selectedUser.password;
      const updatedUser = {
        ...selectedUser,
        ...values,
        password: hashedPassword,
      };
      axios
        .put(`http://localhost:3001/users/${selectedUser.id}`, updatedUser)
        .then(() => {
          setUsers(
            users.map((user) =>
              user.id === updatedUser.id ? updatedUser : user
            )
          );
          setEditOpen(false);
          toast.success("User updated successfully!");
        })
        .catch((error) => console.error(error));
    },
  });

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3001/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
        toast.success("User deleted successfully!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Helmet>
        <title>User Operations - Funadiq Trip Planner</title>
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
            <h2 className="text-3xl md:text-4xl">User Operations</h2>
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
              + Add User
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

          <div className="px-4 mt-4 overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 md:px-4 py-2">S.No</th>
                  <th className="border px-2 md:px-4 py-2">User Name</th>
                  <th className="border px-2 md:px-4 py-2">Email</th>
                  <th className="border px-2 md:px-4 py-2">Role</th>
                  <th className="border px-2 md:px-4 py-2">Edit</th>
                  <th className="border px-2 md:px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter(
                    (user) =>
                      (user.name &&
                        user.name
                          .toLowerCase()
                          .includes(search.toLowerCase())) ||
                      (user.email &&
                        user.email.toLowerCase().includes(search.toLowerCase()))
                  )
                  .map((user, index) => (
                    <tr key={user.id}>
                      <td className="border px-2 md:px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border px-2 md:px-4 py-2 text-center">
                        {user.name}
                      </td>
                      <td className="border px-2 md:px-4 py-2 text-center">
                        {user.email}
                      </td>
                      <td className="border px-2 md:px-4 py-2 text-center">
                        {user.role}
                      </td>
                      <td className="border px-2 md:px-4 py-2 text-center">
                        {user.role !== "ftp-admin" &&
                        user.id !== loggedInUserId ? (
                          <button
                            className="text-blue-500 hover:underline mx-1"
                            onClick={() => {
                              setSelectedUser(user);
                              setEditOpen(true);
                            }}
                          >
                            Edit
                          </button>
                        ) : (
                          <span className="text-gray-400"></span>
                        )}
                      </td>
                      <td className="border px-2 md:px-4 py-2 text-center">
                        {user.role !== "ftp-admin" &&
                        user.id !== loggedInUserId ? (
                          <button
                            className="text-red-500 hover:underline mx-1"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        ) : (
                          <span className="text-gray-400"></span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Add User Modal */}
          {isAddOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-11/12 md:w-[600px]">
                <h3 className="text-xl mb-4">Add User</h3>
                <form onSubmit={addFormik.handleSubmit}>
                  <div className="mb-4">
                    <label>Username</label>
                    <input
                      type="text"
                      name="name"
                      value={addFormik.values.name}
                      onChange={addFormik.handleChange}
                      onBlur={addFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    />
                    {addFormik.touched.name && addFormik.errors.name && (
                      <p className="text-red-500 text-sm">
                        {addFormik.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={addFormik.values.email}
                      onChange={addFormik.handleChange}
                      onBlur={addFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    />
                    {addFormik.touched.email && addFormik.errors.email && (
                      <p className="text-red-500 text-sm">
                        {addFormik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={addFormik.values.password}
                      onChange={addFormik.handleChange}
                      onBlur={addFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    />
                    {addFormik.touched.password &&
                      addFormik.errors.password && (
                        <p className="text-red-500 text-sm">
                          {addFormik.errors.password}
                        </p>
                      )}
                  </div>
                  <div className="mb-4">
                    <label>Role</label>
                    <select
                      name="role"
                      value={addFormik.values.role}
                      onChange={addFormik.handleChange}
                      onBlur={addFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    >
                      <option value="">Select Role</option>
                      <option value="visitor">Visitor</option>
                      <option value="ftp-admin">FTP Admin</option>
                    </select>
                    {addFormik.touched.role && addFormik.errors.role && (
                      <p className="text-red-500 text-sm">
                        {addFormik.errors.role}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setAddOpen(false)}
                      className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md text-white mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded-md"
                    >
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Edit User Modal */}
          {isEditOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-11/12 md:w-[600px]">
                <h3 className="text-xl mb-4">Edit User</h3>
                <form onSubmit={editFormik.handleSubmit}>
                  <div className="mb-4">
                    <label>Username</label>
                    <input
                      type="text"
                      name="name"
                      value={editFormik.values.name}
                      onChange={editFormik.handleChange}
                      onBlur={editFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    />
                    {editFormik.touched.name && editFormik.errors.name && (
                      <p className="text-red-500 text-sm">
                        {editFormik.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editFormik.values.email}
                      onChange={editFormik.handleChange}
                      onBlur={editFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    />
                    {editFormik.touched.email && editFormik.errors.email && (
                      <p className="text-red-500 text-sm">
                        {editFormik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label>Password (leave blank to keep current)</label>
                    <input
                      type="password"
                      name="password"
                      value={editFormik.values.password}
                      onChange={editFormik.handleChange}
                      onBlur={editFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    />
                    {editFormik.touched.password &&
                      editFormik.errors.password && (
                        <p className="text-red-500 text-sm">
                          {editFormik.errors.password}
                        </p>
                      )}
                  </div>
                  <div className="mb-4">
                    <label>Role</label>
                    <select
                      name="role"
                      value={editFormik.values.role}
                      onChange={editFormik.handleChange}
                      onBlur={editFormik.handleBlur}
                      className="border p-2 w-full rounded-md"
                    >
                      <option value="">Select Role</option>
                      <option value="visitor">Visitor</option>
                      <option value="ftp-admin">FTP Admin</option>
                    </select>
                    {editFormik.touched.role && editFormik.errors.role && (
                      <p className="text-red-500 text-sm">
                        {editFormik.errors.role}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setEditOpen(false)}
                      className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md mr-2 text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded-md"
                    >
                      Update User
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

export default UserOperations;
