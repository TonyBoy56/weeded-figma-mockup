import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import logo from "./weeded-logo.ad5a0e8af72134abb93657cdd20b83cc.svg";

export interface ICreateAccountProps {}

const CreateAccount: React.FunctionComponent<ICreateAccountProps> = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const navigateToAboutMe = () => {
    navigate('/about-me')
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', password);

  }
  return (
    <div className="landing-page flex justify-center items-center h-screen">
      <img src={logo} alt="logo" />
      <div className="p-8 rounded w-2/3">
        <h2 className="common-text flex text-2xl font-bold mb-4">
          Create your Weeded account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <label
              htmlFor="email"
              className="common-text block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="side-by-side mb-5">
              <label
                htmlFor="password"
                className="common-text block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <div className="side-by-side mb-5">
              <label
                htmlFor="confirm-password"
                className="common-text block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 border rounded w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          {/* checkbox here */}
          <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4 accent-green-500 rounded"/>
            <label htmlFor="default-checkbox" className="ml-2 text-md font-medium text-green-700"> I am actively employed as an owner in the cannabis industry</label>
          </div>

          {/* change buttons to be separate divs for grid to function properly */}
          <div className="buttons-side-by-side gap-6 ">
            <div>
              <button
                type="submit"
                className=" bg-transparent border border-white text-white py-1 px-10 rounded hover:border-black rounded"
              >
                Back
              </button>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-green-700 border border-black text-white py-1 px-10 rounded hover:border-white rounded"
                onClick={navigateToAboutMe}
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

export default CreateAccount;
