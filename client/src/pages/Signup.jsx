import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-1/2 bg-[#86DFFF] rounded-lg flex justify-center">
            <h2 className="text-4xl centered font-bold p-3">Sign up and get the best out of Resumify.</h2>
          </div>

          <div className="w-1/2 py-16 px-12">
            <h2 className="text-3xl font-bold">CREATE ACCOUNT</h2>
            <p className="mb-4 text-xl p-5 text-center">Create your own account in minutes.</p>
            <form>
            <p>Full name:</p>
              <div className="grid grid-cols-2 gap-5">
                
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <p className="mt2">Email Address:</p>

              <div className="mt-2">
                 <input
                  type="email"
                  placeholder="Enter Email address"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>


              <p className="mt-5">Create your password:</p>
              <div className="grid grid-cols-2 gap-5">
                
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>

              <div className="mt-5">
                <button className="w-full py-3 text-center bg-[#0569EB] text-white rounded-lg shadow-lg hover:bg-blue-400 text-xl font-medium transition-all duration-500">Register</button>
              </div>
              <p className="mt-5">Already have an account? <Link to="/login"> <span className="text-blue-600"> Sign in</span></Link></p>
            </form>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Signup;
