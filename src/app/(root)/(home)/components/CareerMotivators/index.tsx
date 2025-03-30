import React from "react";

const CareerMotivators: React.FC = () => {
  const motivators = [
    { id: 1, text: "Achievement and Results", color: "border-cyan-400 text-cyan-600" },
    { id: 2, text: "Helping Others", color: "border-amber-500 text-amber-600" },
    { id: 3, text: "Financial Rewards", color: "border-teal-300 text-teal-600" },
    { id: 4, text: "Creativity and Innovation", color: "border-yellow-400 text-yellow-600" },
    { id: 5, text: "Security and Stability", color: "border-purple-400 text-purple-600" },
    { id: 6, text: "Leadership and Influence", color: "border-blue-400 text-blue-600" },
    { id: 7, text: "Continuous Learning", color: "border-indigo-500 text-indigo-600" },
    { id: 8, text: "Independence", color: "border-pink-400 text-pink-600" },
    { id: 9, text: "Teamwork and Collaboration", color: "border-rose-400 text-rose-600" },
    { id: 10, text: "Flexibility and Work-Life Balance", color: "border-orange-400 text-orange-600" },
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
            className={`flex items-center border-2 ${color} rounded-full px-6 py-3 space-x-4 shadow-md`}
          >
            <span className={`w-10 h-10 flex items-center justify-center font-semibold text-lg rounded-full text-white bg-${color.split(' ')[0].replace('border-', '')}`}>{id}</span>
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
