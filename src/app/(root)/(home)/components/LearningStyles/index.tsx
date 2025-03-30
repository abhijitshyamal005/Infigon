import React from "react";
import { FaEarListen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { PiBookOpenTextBold } from "react-icons/pi";
import { FaHandPaper } from "react-icons/fa";

const LearningStyles: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold">
        Understanding <span className="text-pink-600">Learning Styles</span>
      </h2>
      <p className="mt-2 text-gray-700 font-semibold">Introduction</p>
      <p className="text-gray-600">
        The <strong>VARK Learning Style</strong> test identifies an individual's preferred learning style based on visual, auditory, reading, and kinesthetic.
      </p>
      <div className="flex justify-around gap-10 mt-9 mb-9 text-7xl">
        <FaEarListen className="text-red-500" />
        <FaEye className="text-blue-500" />
        <PiBookOpenTextBold className="text-orange-500" />
        <FaHandPaper className="text-green-500" />
      </div>
      
      <h3 className="mt-6 text-lg font-bold text-blue-700">
        The purposes and applications of learning styles in career development include
      </h3>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {[
          "Tailored Learning Strategies",
          "Optimized Training Programs",
          "Improved Communication and Collaboration",
          "Enhanced Job Performance",
          "Personalized Skill Development",
          "Increased Retention and Recall",
          "Enhanced Adaptability",
        ].map((title, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-600 mt-1">
              Focuses on concrete, tangible information and present realities.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningStyles;
