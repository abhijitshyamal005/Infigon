import React from "react";

const CareerMotivators: React.FC = () => {
  const motivators = [
    { id: 1, text: "Achievement and Results", color: "bg-cyan-400" },
    { id: 2, text: "Helping Others", color: "bg-amber-500" },
    { id: 3, text: "Financial Rewards", color: "bg-teal-300" },
    { id: 4, text: "Creativity and Innovation", color: "bg-yellow-400" },
    { id: 5, text: "Security and Stability", color: "bg-purple-400" },
    { id: 6, text: "Leadership and Influence", color: "bg-blue-400" },
    { id: 7, text: "Continuous Learning", color: "bg-indigo-500" },
    { id: 8, text: "Independence", color: "bg-pink-400" },
    { id: 9, text: "Teamwork and Collaboration", color: "bg-rose-400" },
    { id: 10, text: "Flexibility and Work-Life Balance", color: "bg-orange-400" },
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
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-blue-900 mb-4">TOP 10 Career Motivators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {motivators.map(({ id, text, color }) => (
          <div
            key={id}
            className={`flex items-center border-2 rounded-full px-4 py-2 space-x-3 ${color.replace('bg-', 'border-')}`}
          >
            <span className={`w-8 h-8 flex items-center justify-center text-white font-semibold text-lg rounded-full ${color}`}>{id}</span>
            <span className="text-gray-700">{text}</span>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-blue-900 mt-8">Purpose and Applications of Career Motivators in career development include</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {applications.map((app, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-800">{app}</h4>
            <p className="text-sm text-gray-600">Focuses on concrete, tangible information and present realities.</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-blue-900 mt-8">Benefits of understanding interest using career motivators for career planning include</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-800">{benefit}</h4>
            <p className="text-sm text-gray-600">Focuses on concrete, tangible information and present realities.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerMotivators;
