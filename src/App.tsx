import React from "react";
// import logo from './logo.svg';
import "./App.css";

const SignInForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded w-2/3">
        <h2 className="flex justify-center text-2xl font-bold mb-4">
          Create your Weeded Account
        </h2>
        <form>
          <div className="mb-10">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter your email"
            />
          </div>

          <div className="side-by-side mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-1/2"
              placeholder="Enter your password"
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-1/2"
              placeholder="Re-enter your password"
            />
          </div>

          <div className="buttons-side-by-side ">
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Back
            </button>

            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  return <SignInForm />;
}

export default App;
