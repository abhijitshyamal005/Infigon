import React from 'react';

const EmotionalIntelligence = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Emotional Intelligence</h1>
        <p className="text-gray-600 mb-4">
          Explore your emotional intelligence capabilities and understand how they impact your professional relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Self-Awareness</h3>
          <p className="text-gray-600">Understanding your emotions and their impact on others</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Self-Management</h3>
          <p className="text-gray-600">Managing emotions and adapting to changing circumstances</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Social Awareness</h3>
          <p className="text-gray-600">Understanding and responding to others' emotions</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Relationship Management</h3>
          <p className="text-gray-600">Building and maintaining positive relationships</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Better communication and collaboration</li>
          <li>Enhanced leadership capabilities</li>
          <li>Improved conflict resolution skills</li>
          <li>Greater stress management abilities</li>
        </ul>
      </div>
    </div>
  );
};

export default EmotionalIntelligence; 