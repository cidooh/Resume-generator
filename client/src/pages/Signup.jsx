// import React from "react";
// import { Link } from "react-router";

// const Signup = () => {
//   return (
//     <div className="min-h-screen py-40">
//       <div className="container mx-auto">
//         <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
//           <div className="w-1/2 bg-[#86DFFF] rounded-lg flex justify-center">
//             <h2 className="text-4xl centered font-bold p-3">Sign up and get the best out of Resumify.</h2>
//           </div>

//           <div className="w-1/2 py-16 px-12">
//             <h2 className="text-3xl font-bold">CREATE ACCOUNT</h2>
//             <p className="mb-4 text-xl p-5 text-center">Create your own account in minutes.</p>
//             <form>
//             <p>Full name:</p>
//               <div className="grid grid-cols-2 gap-5">
                
//                 <input
//                   type="text"
//                   placeholder="First name"
//                   className="border border-gray-400 py-1 px-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last name"
//                   className="border border-gray-400 py-1 px-2"
//                 />
//               </div>
//               <p className="mt-2">Email Address:</p>

//               <div className="mt-2">
//                  <input
//                   type="email"
//                   placeholder="Enter Email address"
//                   className="border border-gray-400 py-1 px-2 w-full"
//                 />
//               </div>


//               <p className="mt-5">Create your password:</p>
//               <div className="grid grid-cols-2 gap-5">
                
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="border border-gray-400 py-1 px-2"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="border border-gray-400 py-1 px-2"
//                 />
//               </div>

//               <div className="mt-5">
//                 <button className="w-full py-3 text-center bg-[#0569EB] text-white rounded-lg shadow-lg hover:bg-blue-400 text-xl font-medium transition-all duration-500">Register</button>
//               </div>
//               <p className="mt-5">Already have an account? <Link to="/login"> <span className="text-blue-600"> Sign in</span></Link></p>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div></div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { Link } from "react-router";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateInput = (name, value) => {
    let error = "";
    if (name === "email") {
      error = /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format";
    } else if (name === "password") {
      error = value.length >= 8 ? "" : "Password must be at least 8 characters";
    } else if (name === "confirmPassword") {
      error = value === formData.password ? "" : "Passwords do not match";
    } else {
      error = value.trim() !== "" ? "" : "This field is required";
    }
    return error;
  };

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

   
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateInput(key, formData[key]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex w-10/12 md:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          {/* Left Side */}
          <div className="w-1/2 bg-[#86DFFF] flex items-center justify-center p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Sign up and get the best out of Resumify.
            </h2>
          </div>

          {/* Right Side */}
          <div className="w-1/2 py-12 px-8">
            <h2 className="text-3xl font-bold text-gray-800">CREATE ACCOUNT</h2>
            <p className="mb-4 text-lg text-gray-600">Create your own account in minutes.</p>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="grid grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 font-medium">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`border py-2 px-3 w-full rounded-lg focus:ring transition-all ${
                        errors[field]
                          ? "border-red-500 focus:ring-red-400"
                          : formData[field]
                          ? "border-green-500 focus:ring-green-300"
                          : "border-gray-400 focus:ring-blue-300"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="mt-4">
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border py-2 px-3 w-full rounded-lg focus:ring transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-red-300"
                      : formData.email
                      ? "border-green-500 focus:ring-green-300"
                      : "border-gray-400 focus:ring-blue-300"
                  }`}
                />
              </div>

              {/* Password */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {["password", "confirmPassword"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 font-medium">
                      {field === "password" ? "Password" : "Confirm Password"}
                    </label>
                    <input
                      type="password"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`border py-2 px-3 w-full rounded-lg focus:ring transition-all ${
                        errors[field]
                          ? "border-red-500 focus:ring-red-300"
                          : formData[field]
                          ? "border-green-500 focus:ring-green-300"
                          : "border-gray-400 focus:ring-blue-300"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Register Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0569EB] text-white rounded-lg shadow-lg hover:bg-blue-500 text-xl font-medium transition-all duration-300"
                >
                  Register
                </button>
              </div>

              {/* Login Redirect */}
              <p className="mt-4 text-center text-gray-700">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
