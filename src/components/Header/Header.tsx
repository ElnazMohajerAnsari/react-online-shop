import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import HeaderCartLink from "./HeaderCartLink";
import profileImage from "../../img/profile.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState<void>();

  const getApiUser = useCallback(async () => {
    await fetch("https://fakestoreapi.com/users/1")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  useEffect(() => {
    getApiUser();
  }, [getApiUser]);

  return (
    <div className="container mx-auto px-8 max-w-full mx-auto px-8 bg-neutral-200 py-4 px-8 sticky top-0">
      <header id="header" className="flex flex-wrap items-center">
        <div className="text-start w-1/3 sm:w-1/3 pr-4 pl-4 lg:mb-0">
          <Link
            to="/UserInfoPage"
            state={user}
            className="profile flex items-center"
          >
            <img
              className="profile-picture"
              src={profileImage}
              alt="Profile Picture"
            />
            <p className="py-3 ms-3 pt-3">Hi, John</p>
          </Link>
        </div>
        <Link to="/" className="w-1/3 sm:w-1/3 pr-4 pl-4 text-center">
          <div className="logo-container lg:px-12">
            <p id="logo" className="logo py-3 mx border border-gray-900">
              Online Shop
            </p>
          </div>
        </Link>
        <div className="w-1/3 sm:w-1/3 pr-4 pl-4 p-2 flex justify-end">
          <div className="p-2 flex justify-end">
            <HeaderCartLink />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
