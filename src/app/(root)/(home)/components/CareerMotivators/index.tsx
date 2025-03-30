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
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-center">Top 10 Career Motivators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {motivators.map(({ id, text, color }) => (
          <div
            key={id}
            className={`flex items-center border-2 rounded-full px-4 py-2 space-x-3 bg-${color} border-${color} transition-all duration-300 hover:shadow-lg`}
          >
            <span
              className={`w-8 h-8 flex items-center justify-center text-white font-semibold text-lg rounded-full border-2 border-${color} bg-${color}`}
            >
              {id}
            </span>
            <span className="text-gray-700 text-sm sm:text-base">{text}</span>
          </div>
        ))}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-blue-900 mt-8 text-center">Purpose and Applications of Career Motivators</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {applications.map((app, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-all">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{app}</h4>
            <p className="text-xs sm:text-sm text-gray-600">Helps in professional growth and career alignment.</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-blue-900 mt-8 text-center">Benefits of Understanding Career Motivators</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-all">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{benefit}</h4>
            <p className="text-xs sm:text-sm text-gray-600">Enhances clarity in career decision-making.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerMotivators;