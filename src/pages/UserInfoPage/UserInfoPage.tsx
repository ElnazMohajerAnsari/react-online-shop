import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const UserInfoPage = (props: any) => {
  const user = useLocation().state;

  return (
    <div className="p-6 bg-white flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-neutral-200 rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-900">
              <p className="font-medium text-lg">User Details</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.name.firstname + " " + user.name.lastname}
                    readOnly
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.email}
                    readOnly
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.username}
                    readOnly
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.phone}
                    readOnly
                  />
                </div>

                <div className="md:col-span-3">
                  <label>Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.address.street}
                    readOnly
                  />
                </div>

                <div className="md:col-span-2">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.address.city}
                    readOnly
                  />
                </div>

                <div className="md:col-span-2">
                  <label>Number</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="number"
                      id="number"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={user.address.number}
                      readOnly
                    />
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label>Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.address.zipcode}
                    readOnly
                  />
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <Link
                      to={"/"}
                      className="btn bg-blue-600 px-4 py-2 hover:bg-blue-700 rounded text-white rounded mt-2"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
