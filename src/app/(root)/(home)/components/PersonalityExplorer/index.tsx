import React from 'react';

const PersonalityExplorer = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-600"> <span className='text-black'>Understanding </span> Personality Explorer</h1>

      {/* Introduction */}
      <div className="space-y-4">
        <p className='font-medium text-black'>Introduction</p>
        <p className="text-gray-700">
          Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the
          significance of making informed decisions as you navigate your academic journey and future career. We are
          committed to empowering individuals with the tools and insights needed to confidently navigate the world of
          careers and education.
        </p>
        <p className="text-gray-700">
          <span className='font-medium text-black'>To understand your personality, Myers-Brig Type Indicator (MBTI) test was used.</span> It is a personality explorer
          psychometric assessment tool that helps individuals understand their preferences, strengths, and areas for
          growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the MBTI categorizes individuals into 16
          personality types based on four dichotomies. The goal is to gain deeper self-awareness, enhance personal
          development, and improve interpersonal relationships.
        </p>
      </div>

      {/* The Four Dichotomies */}
      <div>
        <h2 className="text-lg font-bold text-blue-600 ">The Four Dichotomies</h2>
        <div className="grid grid-cols-1  gap-6 mt-6 justify-center items-center">
          {/* Extraversion vs Introversion */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Extraversion (E)</p>
              <p className="text-gray-600 text-sm">Energized by social interactions and external activities</p>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-red-500"></div>              <div className="h-1 w-8 bg-red-500"></div>
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Introversion (I)</p>
              <p className="text-gray-600 text-sm">Energized by solitary activities and internal reflection</p>
            </div>
          </div>

          {/* Sensing vs Intuition */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Sensing (S)</p>
              <p className="text-gray-600 text-sm">Focuses on concrete, tangible information and present realities</p>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-red-500"></div>              <div className="h-1 w-8 bg-red-500"></div>
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Intuition (N)</p>
              <p className="text-gray-600 text-sm">Focuses on abstract, conceptual information and future possibilities</p>
            </div>
          </div>

          {/* Thinking vs Feeling */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Thinking (T)</p>
              <p className="text-gray-600 text-sm">Decisions based on logic and objective analysis</p>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-red-500"></div>              <div className="h-1 w-8 bg-red-500"></div>
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Feeling (F)</p>
              <p className="text-gray-600 text-sm">Decisions based on logic and objective analysis</p>
            </div>
          </div>

          {/* Judging vs Perceiving */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Judging (J)</p>
              <p className="text-gray-600 text-sm">Prefers structured, organized approaches and planning</p>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-red-500"></div>              <div className="h-1 w-8 bg-red-500"></div>
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="p-4 border rounded-lg w-64 ">
              <p className="font-medium">Perceiving (P)</p>
              <p className="text-gray-600 text-sm">Prefers flexible, spontaneous approaches and adaptability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose, Applications, and Benefits */}
      <div>
        <h2 className="text-lg font-bold text-blue-600">
          Purpose, Applications, and Benefits of MBTI in Career Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Self Awareness</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Leadership Development</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Career Alignment</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Career Planning</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Team Building</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Conflict Resolution</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Improved Communication</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Strength Identification</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <p className="font-medium">Personal Growth</p>
            <p className="text-gray-600 text-sm">
              Focuses on concrete, tangible information and present realities tangible information and present realities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityExplorer;