import React from 'react';

const PersonalityExplorer = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Understanding Personality Explorer</h1>
        <p className="text-gray-600 mb-4">
          Congratulations on taking the first step for personalized Career Planning & Assessment! 
          We understand the significance of making informed decisions as you navigate your academic 
          journey and future career.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">THE FOUR DICHOTOMIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Extraversion (E) vs Introversion (I)</h3>
            <p className="text-gray-600">How you focus your attention and get your energy</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Sensing (S) vs Intuition (N)</h3>
            <p className="text-gray-600">How you take in information and what you focus on</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Thinking (T) vs Feeling (F)</h3>
            <p className="text-gray-600">How you make decisions and what you consider</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-2">Judging (J) vs Perceiving (P)</h3>
            <p className="text-gray-600">How you approach the outer world and structure your life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityExplorer; 