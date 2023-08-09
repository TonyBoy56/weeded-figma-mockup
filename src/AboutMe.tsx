import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import logo from "./weeded-logo.ad5a0e8af72134abb93657cdd20b83cc.svg";

export interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const navigatetoCreateAccount = () => {
    navigate('/')
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Log the user inputs
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Location:', location);
    console.log('Phone Number:', phoneNumber);
    console.log('State:', state);
    console.log('City:', city);
  };

  return (
    <div className="landing-page flex justify-center items-center h-screen">
      <img src={logo} alt="logo" />
      <div className="p-8 rounded w-2/3">
        <h2 className="common-text flex text-2xl font-bold mb-4">About You</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="side-by-side mb-5">
              <label
                htmlFor="first-name"
                className="common-text block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="first-name"
                id="first-name"
                className="mt-1 p-2 border rounded w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your First Name"
              />
            </div>

            <div className="side-by-side mb-5">
              <label
                htmlFor="last-name"
                className="common-text block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="last-name"
                id="last-name"
                className="mt-1 p-2 border rounded w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your Last Name"
              />
            </div>
          </div>

          {/* Pending drag/drop box implementation */}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Change to dropdown */}
            <div className="side-by-side mb-5">
              <label
                htmlFor="location"
                className="common-text block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="location"
                id="location"
                className="mt-1 p-2 border rounded w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your Location"
              />
            </div>

            <div className="side-by-side mb-5">
              <label
                htmlFor="phone-number"
                className="common-text block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="phone-number"
                id="phone-number"
                className="mt-1 p-2 border rounded w-full"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your Phone Number"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Change to dropdown */}
            <div className="side-by-side mb-5">
              <label
                htmlFor="state"
                className="common-text block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="state"
                id="state"
                className="mt-1 p-2 border rounded w-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter your State"
              />
            </div>

            {/* Change to dropdown */}
            <div className="side-by-side mb-5">
              <label
                htmlFor="city"
                className="common-text block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="city"
                id="city"
                className="mt-1 p-2 border rounded w-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your City"
              />
            </div>
          </div>

          <div className="buttons-side-by-side gap-6 ">
            <div>
              <button
                type="submit"
                className=" bg-transparent border border-white text-white py-1 px-10 rounded hover:border-black rounded"
                onClick={navigatetoCreateAccount}
              >
                Back
              </button>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-green-800 border border-black text-white py-1 px-10 rounded hover:border-white rounded"
                onClick={navigatetoCreateAccount}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
