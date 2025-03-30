import React from "react";

const EmotionalIntelligence: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold text-blue-700">5 Emotional Elements</h2>
      <div className="flex justify-center gap-6 mt-4">
        {[
          { id: 1, title: "Self-Awareness", gradient: "bg-gradient-to-b from-orange-300 via-orange-100 to-orange-300", color: "bg-orange-400" },
          { id: 2, title: "Self-Regulation", gradient: "bg-gradient-to-b from-blue-300 via-blue-100 to-blue-300", color: "bg-blue-400" },
          { id: 3, title: "Empathy", gradient: "bg-gradient-to-b from-pink-300 via-pink-100 to-pink-300", color: "bg-pink-400" },
          { id: 4, title: "Social Skills", gradient: "bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300", color: "bg-gray-400" },
          { id: 5, title: "Motivation", gradient: "bg-gradient-to-b from-green-300 via-green-100 to-green-300", color: "bg-green-400" },
        ].map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center ${item.gradient} p-6 rounded-full w-32 h-32 shadow-md`}
          >
            <span className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold shadow-white shadow-2xl ${item.color}`}>
              {item.id}
            </span>            <span className="text-center text-xs font-medium">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-lg font-bold text-blue-700">
        Applications of the Emotional Intelligence Test in career development include
      </h3>
      <p className="mt-2 text-gray-700">
        Congratulations on taking the first step for personalized Career Planning & Assessment!
        We understand the significance of making informed decisions as you navigate your academic
        journey and future career.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {[
          "Enhanced Leadership and Communication Skills",
          "Improved Decision Making and Problem Solving",
          "Career Planning and Development",
          "Emotional Intelligence in the Workplace",
          "Leadership Development",
        ].map((title, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-400 mt-1">
              Focuses on concrete, tangible information and present realities.
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-lg font-bold text-blue-700">
        Understanding emotional intelligence for career planning offers several benefits, including
      </h3>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {[
          "Improved Interpersonal Relationships",
          "Enhanced Job Performance"
        ].map((title, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-400 mt-1">
              Focuses on concrete, tangible information and present realities.
            </p>
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default EmotionalIntelligence;