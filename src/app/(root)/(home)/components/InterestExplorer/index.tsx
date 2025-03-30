'use client';

import React from 'react';

const RiasecThemes: React.FC = () => {
  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-lg font-semibold text-blue-600">Themes of RIASEC</h1>
      
      {/* RIASEC Circle */}
      <div className="flex justify-center mt-6">
        <img src="\color.png" alt="" />
      </div>
      
      {/* Career Development Section */}
      <div className="mt-10">
        <h2 className="text-md font-semibold text-blue-700">Purpose and Applications of RIASEC in Career Development</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {['Career Exploration', 'Career Guidance', 'Team Building'].map((title) => (
            <div key={title} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600">Focuses on concrete, tangible information and present realities tangible information and present realities.</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Career Planning Section */}
      <div className="mt-10">
        <h2 className="text-md font-semibold text-blue-700">Benefits of Understanding Interest Using RIASEC for Career Planning</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {['Alignment with Preferences', 'Enhanced Self-Awareness', 'Facilitates Goal Setting', 'Assess Fit', 'Improved Decision-Making'].map((title) => (
            <div key={title} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600">Focuses on concrete, tangible information and present realities tangible information and present realities.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiasecThemes;