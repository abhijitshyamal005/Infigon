import React from "react";

const CareerMotivators: React.FC = () => {
  const motivators = [
    { id: 1, text: "Achievement and Results", color: "cyan-400" },
    { id: 2, text: "Helping Others", color: "amber-500" },
    { id: 3, text: "Financial Rewards", color: "teal-300" },
    { id: 4, text: "Creativity and Innovation", color: "yellow-400" },
    { id: 5, text: "Security and Stability", color: "purple-400" },
    { id: 6, text: "Leadership and Influence", color: "blue-400" },
    { id: 7, text: "Continuous Learning", color: "indigo-500" },
    { id: 8, text: "Independence", color: "pink-400" },
    { id: 9, text: "Teamwork and Collaboration", color: "rose-400" },
    { id: 10, text: "Flexibility and Work-Life Balance", color: "orange-400" },
  ];

  const applications = [
    "Enhanced Job Satisfaction",
    "Improved Performance and Engagement",
    "Career Planning and Development",
  ];

  const benefits = [
    "Alignment with Personal Values",
    "Improved Decision-Making",
    "Enhanced Self-Awareness",
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">TOP 10 Career Motivators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {motivators.map(({ id, text, color }) => (
          <div
            key={id}
            className={`flex items-center border-2 border-${color} text-${color.replace('-400', '-600')} rounded-full px-6 py-3 space-x-4 shadow-md`}
          >
            <span className={`w-10 h-10 flex items-center justify-center font-semibold text-lg rounded-full text-white bg-${color}`}>{id}</span>
            <span className="font-semibold text-gray-800 text-lg">{text}</span>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-bold text-blue-900 mt-10 text-center">Purpose and Applications of Career Motivators</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {applications.map((app, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
            <h4 className="font-semibold text-gray-800 text-lg">{app}</h4>
            <p className="text-sm text-gray-600 mt-2">Focuses on concrete, tangible information and present realities.</p>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-bold text-blue-900 mt-10 text-center">Benefits of Understanding Career Motivators</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
            <h4 className="font-semibold text-gray-800 text-lg">{benefit}</h4>
            <p className="text-sm text-gray-600 mt-2">Focuses on concrete, tangible information and present realities.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerMotivators;
