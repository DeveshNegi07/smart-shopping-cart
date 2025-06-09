import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { FaRegSave } from "react-icons/fa";
import { userContext } from "../context/UserContext";

const Profile = () => {
  const { user, handleSave } = useContext(userContext);
  const [userValue, setUserValue] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-2 min-h-screen bg-gray-50 p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            User Profile
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm">
            Manage your account information
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-300 p-4 sm:p-6 md:p-8">
          <form
            className="space-y-4 sm:space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSave(userValue);
            }}
          >
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={userValue.firstName}
                  name="firstName"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={userValue.lastName}
                  name="lastName"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                value={userValue.email}
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={userValue.phone}
                name="phone"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                rows="3"
                value={userValue.address}
                name="address"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 w-full sm:w-auto rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
              >
                <FaRegSave className="text-sm sm:text-base" />
                Save Changes
              </button>

              <button
                type="button"
                className="px-4 py-2 w-full sm:w-auto rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 hover:text-black text-sm sm:text-base"
                onClick={() => setUserValue(user)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
