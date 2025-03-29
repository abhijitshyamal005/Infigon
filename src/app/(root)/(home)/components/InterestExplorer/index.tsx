import React from 'react';

const InterestExplorer = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Interest Explorer</h1>
        <p className="text-gray-600 mb-4">
          Discover your career interests and explore potential paths that align with your passions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Realistic</h3>
          <p className="text-gray-600">Working with things, machines, tools, plants or animals</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Investigative</h3>
          <p className="text-gray-600">Research, analysis, intellectual curiosity</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Artistic</h3>
          <p className="text-gray-600">Creativity, self-expression, aesthetics</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Social</h3>
          <p className="text-gray-600">Helping, teaching, counseling others</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Enterprising</h3>
          <p className="text-gray-600">Leadership, persuading, managing others</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Conventional</h3>
          <p className="text-gray-600">Organization, data, attention to detail</p>
        </div>
      </div>
    </div>
  );
};

export default InterestExplorer; 