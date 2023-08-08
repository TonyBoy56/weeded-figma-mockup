import React from "react";
import logo from "./weeded-logo.ad5a0e8af72134abb93657cdd20b83cc.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAccount from "./CreateAccount";
import AboutMe from "./AboutMe";

// const SignInForm = () => {
//   return (
//     <div className="landing-page flex justify-center items-center h-screen">
//       <img src={logo} alt="logo" />
//       <div className="p-8 rounded w-2/3">
//         <h2 className="common-text flex text-2xl font-bold mb-4">
//           Create your Weeded account
//         </h2>
//         <form>
//           <div className="mb-10">
//             <label
//               htmlFor="email"
//               className="common-text block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="side-by-side mb-5">
//               <label
//                 htmlFor="password"
//                 className="common-text block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="side-by-side mb-5">
//               <label
//                 htmlFor="confirm-password"
//                 className="common-text block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Re-enter your password"
//               />
//             </div>
//           </div>

//           {/* checkbox here */}

//           {/* change buttons to be separate divs for grid to function properly */}
//           <div className="buttons-side-by-side gap-6 ">
//             <div>
//               <button
//                 type="submit"
//                 className=" bg-transparent border border-white text-white py-1 px-10 rounded hover:border-black rounded"
//               >
//                 Back
//               </button>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className=" bg-green-800 border border-black text-white py-1 px-10 rounded hover:border-white rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
