import { useNavigate } from "react-router";
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
  const Navigate=useNavigate()

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
    // Navigate('/login')  
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
                  onClick={() => Navigate("/login")}
                  
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
