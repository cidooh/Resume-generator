
import { Link } from 'react-router';
import React from 'react';

const Templates = () => {
  return (
    <div className="container mx-auto bg-white shadow-lg p-6">
      {/* Title */}
      <div className="flex justify-center text-6xl font-bold mb-6">
        <h1>Templates</h1>
     
      </div>
      <div className='flex justify-center font-xl '>
      <p className='text-center'>Select a template that best suits you.<br/>   Each Template below follows exact rules that will get you hired faster!</p>
        
        
        </div>
      {/* Template Images */}
      <div className="flex justify-center gap-6 mt-10">
        {["Template1.png", "Template2.png"].map((template, index) => (
          <div key={index} className="relative group">
            <img 
              src={`/images/${template}`} 
              alt={`Template ${index + 1}`} 
              className="w-64 h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover Button */}
           <Link to="/resume"><button className="absolute inset-0 rounded-lg bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Create Resume
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
