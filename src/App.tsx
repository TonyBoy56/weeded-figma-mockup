import React from "react";
// import logo from './logo.svg';
import "./App.css";

const SignInForm = () => {
  return (
    <div className="landing-page flex justify-center items-center h-screen">
      <div className="p-8 rounded w-2/3">
        <h2 className="common-text flex justify-center text-2xl font-bold mb-4">
          Create your Weeded account
        </h2>
        <form>
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
                placeholder="Enter your password"
              />
            </div>

            <div className="side-by-side mb-5">
              <label
                htmlFor="password"
                className="common-text block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          {/* change buttons to be separate divs for grid to function properly */}
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
