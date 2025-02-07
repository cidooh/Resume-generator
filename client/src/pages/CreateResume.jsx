
import React, { useRef, useState } from "react";
import Cvforms from "../comps/Cvforms";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const CreateResume = () => {
  const [formData, setFormData] = useState({});
  const pdfRef = useRef(); 

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${formData.firstName}'s resume.pdf`); 
    });
  };

  return (
    <section className="bg-white shadow-md">
      <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-2">
        {/* Left Section */}
        <div className="w-full h-full md:h-screen">
          <h2 className="text-3xl centered p-3 font-semibold">
            Start Building A Resume Your Way
          </h2>
          <h3 className="text-3xl font-medium p-3 centered">
            Personal Details
          </h3>
          <Cvforms handleFormChange={setFormData} />
        </div>

        {/* Right Section - Display the Form Data */}
        <div className="w-full h-full md:h-screen p-5 border-black">
          <div className="flex justify-between mr-36">
            <h2 className="text-3xl font-semibold">Preview</h2>
            <button
              onClick={downloadPdf}
              className="p-3 bg-[#0569EB] rounded-md shadow-lg mb-10 text-white hover:bg-blue-300 transition-all duration-500"
            >
              Download Resume
            </button>
          </div>

      
<div ref={pdfRef} className="bg-white p-10 shadow-lg rounded-lg text-gray-900">
  {/* Header - Name & Contact */}
  <div className="text-center mb-6">
    <h1 className="text-3xl font-bold">{formData.firstName} {formData.lastName}</h1>
    <p className="text-lg">{formData.email} | {formData.phoneNumber}</p>
    <p className="text-lg">{formData.address}, {formData.postalCode}</p>
  </div>

  <hr className="my-4 border-gray-400" />

  {/* Personal Details */}
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
    <div className="grid grid-cols-2 gap-4">
      <p><strong>Nationality:</strong> {formData.nationality}</p>
      <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
      <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
    </div>
  </div>

  
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Experience</h2>
    <div className="grid grid-cols-2 gap-4">
      <p><strong>Start Date:</strong> {formData.dateStarted}</p>
      <p><strong>End Date:</strong> {formData.dateEnded}</p>
    </div>
  </div>

  
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Links</h2>
    <p><strong>{formData.linkLabel}:</strong> {formData.socialLink}</p>
  </div>

  
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">About Me</h2>
    <p className="text-justify">{formData.description}</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CreateResume;
