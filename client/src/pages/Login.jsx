
import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError(""); 
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-1/2 bg-[#86DFFF] rounded-lg flex justify-center items-center p-6">
            <h2 className="text-4xl font-bold text-center">
              Your Job's Success Story Starts Here at Resumify.
            </h2>
          </div>

          <div className="w-1/2 py-16 px-12">
            <h2 className="text-3xl font-bold mb-4">LOGIN TO YOUR ACCOUNT</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName" className="block font-semibold">Full Name:</label>
                <div className="grid grid-cols-2 gap-5 mt-1">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    className="border border-gray-400 py-2 px-3 w-full"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    className="border border-gray-400 py-2 px-3 w-full"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block font-semibold">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="border border-gray-400 py-2 px-3 w-full mt-1"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="block font-semibold">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className="border border-gray-400 py-2 px-3 w-full mt-1"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full py-3 text-center bg-[#0569EB] text-white rounded-lg shadow-lg hover:bg-blue-400 text-xl font-medium transition-all duration-500"
                >
                  Sign in
                </button>
              </div>

              <p className="mt-5">
                Don't have an account?{" "}
                <Link to="/signup"><span className="text-blue-600 cursor-pointer">Sign up</span></Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
