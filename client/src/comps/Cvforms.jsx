// import React from "react";

import React, { useState } from "react";
import Layout from "../pages/Layout";

const Cvforms = ({ handleFormChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    nationality: "",
    placeOfBirth: "",
    dateOfBirth: "",
    dateStarted: "",
    dateEnded: "",
    description: "",
    linkLabel: "",
    socialLink: "",
    school:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    handleFormChange(updatedForm);
  };
  return (
    <form className="p-10">
      <div className="flex gap-10">
        <div>
          <p>First name</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />

          <p>Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
          <p>Address</p>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
          <p>Nationality</p>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
          <p>Date of Birth</p>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
        </div>

        <div>
          <p>Last name</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
          <p>Phone number</p>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
          <p>Postal Code</p>
          <input
            type="number"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
          <p>Place of Birth</p>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="w-[250px] border border-gray-800 rounded-md p-1"
          />
        </div>
      </div>
      <div>
        <h3 className="centered text-2xl font-semibold">About yourself</h3>
      </div>

      <div>
        <h3 className="centered text-2xl font-semibold">Education</h3>
        <button className="p-2 centered rounded-md text-[#0000FF] border-2 border-black bg-white">
          + Add Education
        </button>

        <div className="border-2 border-black h-[400px] p-1.5">
          <div className="flex gap-10 p-5">
            <div className="p-5">
              <input
                type="text"
                placeholder="Name of School"
                className="w-[250px] border border-gray-800 rounded-md p-1.5"
                name="school"
                value={formData.school}
              />
              <p className="mt-5">Date started</p>
              <input
                type="date"
                name="dateStarted"
                value={formData.dateStarted}
                onChange={handleChange}
                className="w-[250px] border border-gray-800 rounded-md p-1"
              />
            </div>

            <div className="p-5">
              <input
                type="text"
                placeholder="Award"
                className="w-[250px] border border-gray-800 rounded-md p-1.5"
              />
              <p className="mt-5">End Date</p>
              <input
                type="date"
                name="dateEnded"
                value={formData.dateEnded}
                onChange={handleChange}
                className="w-[250px] border border-gray-800 rounded-md p-1"
              />
            </div>
          </div>
          <p className="text-2xl font-semibold centered">Description</p>
          <textarea
            className="p-5"
            placeholder="e.g Graduated with honours"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold centered">Social Links</h2>
          <p>
            You can add links where you would wish hiring managers see! Perhaps
            your portfolio link or your Linkedin profile.
          </p>

          <button className="p-2 centered rounded-md text-[#0000FF] border-2 border-black bg-white">
            <span className="font-bold">+</span> Add Social Links
          </button>

          <input
            type="text"
            placeholder="Add Label"
            name="linkLabel"
            value={formData.linkLabel}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Add Link"
            name="socialLink"
            value={formData.socialLink}
            onChange={handleChange}
          />
        </div>

        <button className="bg-[#0569EB] p-3 rounded-md">Save changes</button>
      </div>
    </form>
  );
};

export default Cvforms;
