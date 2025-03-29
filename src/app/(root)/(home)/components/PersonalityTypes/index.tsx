import React from 'react';

const personalityTypes = [
  { title: 'Inspector', code: 'ISTJ', description: 'Focuses on concrete, tangible information and present realities', image: 'inspector.png' },
  { title: 'Protector', code: 'ISFJ', description: 'Focuses on concrete, tangible information and present realities', image: 'protector.png' },
  { title: 'Artist', code: 'ISFP', description: 'Focuses on concrete, tangible information and present realities', image: 'artist.png' },
  { title: 'Consul', code: 'ESFJ', description: 'Focuses on concrete, tangible information and present realities', image: 'consul.png' },
  { title: 'Virtuoso', code: 'ISTP', description: 'Focuses on concrete, tangible information and present realities', image: 'virtuoso.png' },
  { title: 'Entrepreneur', code: 'ESTP', description: 'Focuses on concrete, tangible information and present realities', image: 'entrepreneur.png' },
  { title: 'Entertainer', code: 'ESFP', description: 'Focuses on concrete, tangible information and present realities', image: 'entertainer.png' },
  { title: 'Executive', code: 'ESTJ', description: 'Focuses on concrete, tangible information and present realities', image: 'executive.png' },
  { title: 'Advocate', code: 'INFJ', description: 'Focuses on concrete, tangible information and present realities', image: 'advocate.png' },
  { title: 'Mediator', code: 'INFP', description: 'Focuses on concrete, tangible information and present realities', image: 'mediator.png' },
  { title: 'Campaigner', code: 'ENFP', description: 'Focuses on concrete, tangible information and present realities', image: 'campaigner.png' },
  { title: 'Protagonist', code: 'ENFJ', description: 'Focuses on concrete, tangible information and present realities', image: 'protagonist.png' },
  { title: 'Architect', code: 'INTJ', description: 'Focuses on concrete, tangible information and present realities', image: 'architect.png' },
  { title: 'Thinker', code: 'INTP', description: 'Focuses on concrete, tangible information and present realities', image: 'thinker.png' },
  { title: 'Debater', code: 'ENTP', description: 'Focuses on concrete, tangible information and present realities', image: 'debater.png' },
  { title: 'Commander', code: 'ENTJ', description: 'Focuses on concrete, tangible information and present realities', image: 'commander.png' },
];

const PersonalityTypes = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Personality Types</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {personalityTypes.map((type, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 "
          ><div className="bg-green-300 rounded-lg">
            <img
              src={`/images/${type.image}`}
              alt={type.title}
              className="w-20 h-20 mx-auto mb-4 "
              loading="lazy"
            />
            </div>
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{type.title}</h3>
              <p className="text-xs text-gray-500 bg-green-300 px-2 rounded-2xl font-medium flex items-center justify-center">{type.code}</p>            </div>
            <p className="text-sm text-gray-600 mt-2">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityTypes;