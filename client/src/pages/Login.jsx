import React, { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
   const Navigate=useNavigate()

  // Validation function
  const validateInput = (name, value) => {
    let error = "";
    if (name === "email") {
      error = /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format";
    } else if (name === "password") {
      error = value.length >= 6 ? "" : "Password must be at least 6 characters";
    } else {
      error = value.trim() !== "" ? "" : "This field is required";
    }
    return error;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input and update errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };

  // Handle form submission
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
              Your Job's Success Story Starts Here at Resumify.
            </h2>
          </div>

          {/* Right Side */}
          <div className="w-1/2 py-12 px-8">
            <h2 className="text-3xl font-bold text-gray-800">LOGIN TO YOUR ACCOUNT</h2>
            <p className="mb-4 text-lg text-gray-600">Sign in to access your account.</p>

            <form onSubmit={handleSubmit}>
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
              <div className="mt-4">
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`border py-2 px-3 w-full rounded-lg focus:ring transition-all ${
                    errors.password
                      ? "border-red-500 focus:ring-red-300"
                      : formData.password
                      ? "border-green-500 focus:ring-green-300"
                      : "border-gray-400 focus:ring-blue-300"
                  }`}
                />
              </div>

              {/* Sign In Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  onClick={() => Navigate("/templates")}
                  className="w-full py-3 bg-[#0569EB] text-white rounded-lg shadow-lg hover:bg-blue-500 text-xl font-medium transition-all duration-300"
                >
                  Sign in
                </button>
              </div>

              {/* Sign Up Redirect */}
              <p className="mt-4 text-center text-gray-700">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
