import React from 'react';

const CareerMotivators = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Career Motivators</h1>
        <p className="text-gray-600 mb-4">
          Understanding what drives and motivates you in your career can help you make better career decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Achievement</h3>
          <p className="text-gray-600">Drive for accomplishment, mastery, and success</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Independence</h3>
          <p className="text-gray-600">Desire for autonomy and self-direction</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Recognition</h3>
          <p className="text-gray-600">Need for acknowledgment and appreciation</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Relationships</h3>
          <p className="text-gray-600">Value of connections and working with others</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Support</h3>
          <p className="text-gray-600">Importance of guidance and mentorship</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Working Conditions</h3>
          <p className="text-gray-600">Physical environment and work-life balance</p>
        </div>
      </div>
    </div>
  );
};

export default CareerMotivators; 