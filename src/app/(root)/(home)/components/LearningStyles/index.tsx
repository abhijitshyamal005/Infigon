import React from 'react';

const LearningStyles = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Learning Styles</h1>
        <p className="text-gray-600 mb-4">
          Discover your preferred learning style to optimize your educational and professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Visual (Spatial)</h3>
          <p className="text-gray-600">You learn best through pictures, images, and spatial understanding</p>
          <ul className="mt-3 list-disc list-inside text-gray-600">
            <li>Diagrams and charts</li>
            <li>Visual presentations</li>
            <li>Color coding</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Auditory (Aural)</h3>
          <p className="text-gray-600">You learn best through sound and music</p>
          <ul className="mt-3 list-disc list-inside text-gray-600">
            <li>Verbal lectures</li>
            <li>Discussions</li>
            <li>Audio recordings</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Verbal (Linguistic)</h3>
          <p className="text-gray-600">You learn best through words, both speech and writing</p>
          <ul className="mt-3 list-disc list-inside text-gray-600">
            <li>Reading materials</li>
            <li>Writing notes</li>
            <li>Speech-making</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Physical (Kinesthetic)</h3>
          <p className="text-gray-600">You learn best through movement, hands-on experience</p>
          <ul className="mt-3 list-disc list-inside text-gray-600">
            <li>Physical activities</li>
            <li>Hands-on experiments</li>
            <li>Role-playing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningStyles; 