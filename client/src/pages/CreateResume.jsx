
import React, { useState } from "react";
import Cvforms from "../comps/Cvforms";

const CreateResume = () => {
  const [formData, setFormData] = useState({});

  return (
    <section className="bg-white shadow-md">
      <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-2">
        {/* Left Section */}
        <div className="w-full h-full md:h-screen">
          <h2 className="text-3xl centered p-3 font-semibold">
            Start Building A Resume your way
          </h2>
          <h3 className="text-3xl font-medium p-3 centered">
            Personal Details
          </h3>
          <Cvforms handleFormChange={setFormData} />
        </div>

        {/* Right Section - Display the Form Data */}
        <div className="w-full h-full md:h-screen p-5 border-black">
          <div className="flex justify-between mr-36">
          <h2 className="text-3xl font-semibold ">Preview</h2>
          <button className="p-3 bg-[#0569EB] rounded-md shadow-lg mb-10 text-white hover:bg-blue-300 transition-all duration-500">Download CV</button>
          </div>
<div className="flex justify-between">
          {/* Personal Data */}
<div className=" p-4 text-2xl">
  <p className="text-2xl font-semibold">Personal Data</p>
<p className="">{formData.firstName} {formData.lastName}</p>
<p>{formData.email}</p>
          <p> {formData.phoneNumber}</p>
          <p>{formData.address}</p>
          <p> {formData.postalCode}</p>
          <p> {formData.nationality}</p>
          <p>{formData.placeOfBirth}</p>
          <p>{formData.dateOfBirth}</p>
</div>
<div className="flex p-5 gap-5"> 
         <p> {formData.dateStarted}</p>
          <p>{formData.dateEnded}</p>
          
          <p>{formData.linkLabel}</p>
          <p>{formData.socialLink}</p>
          </div>

          <div className="mr-28 ">
            <p className="text-2xl font-semibold">About Me</p>
            <p className="h-[200px] w-[200px]">{formData.description}</p>
          </div>

        </div>

        </div>
      </div>
    </section>
  );
};

export default CreateResume;
