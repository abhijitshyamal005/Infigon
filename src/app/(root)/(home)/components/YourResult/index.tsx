'use client';

import React from 'react';

const PersonalityResult: React.FC = () => {
  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-xl font-semibold text-gray-700">
        Your <span className="text-blue-600 font-bold">Result</span>
      </h1>
      <div className="mt-4 border-b flex space-x-6 text-gray-500 text-sm">
        <span className="border-b-2 border-blue-300 pb-2 text-black font-medium">Personality</span>
        <span>Characteristics</span>
        <span>Strengths/Weaknesses</span>
        <span>Work Style</span>
        <span>Preferences</span>
        <span>Interpersonal Interaction</span>
        <span>Work Cul</span>
      </div>
    
      <div className="mt-6 p-6 rounded-lg flex space-x-6">
          <img src="/user.jpg" alt="Avatar" className="w-40 h-40 rounded-lg object-cover" />
        
        <div>
          <h2 className="text-lg font-semibold">Architect | <span className="text-purple-600 font-medium">INTJ Personality</span></h2>
          <div className="mt-2 flex space-x-2">
            <span className="bg-purple-200 text-purple-800 px-3 py-1 text-xs rounded-full">STRATEGIC</span>
            <span className="bg-purple-200 text-purple-800 px-3 py-1 text-xs rounded-full">ANALYTICAL</span>
            <span className="bg-purple-200 text-purple-800 px-3 py-1 text-xs rounded-full">INDEPENDENT</span>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Congratulations on taking the first step for personalized Career Planning & Assessment!
            We understand the significance of making informed decisions as you navigate your academic journey
            and future career. We are committed to empowering individuals with the tools and insights needed to
            confidently navigate the world of careers and education.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PersonalityResult;