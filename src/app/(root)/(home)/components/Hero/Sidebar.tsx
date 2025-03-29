import React, { useState } from 'react';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

interface SidebarProps {
    activeComponent: string;
    setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeComponent, setActiveComponent }) => {
    const [expandedItem, setExpandedItem] = useState<string | null>("PersonalityExplorer");

    const handleItemClick = (id: string) => {
        setActiveComponent(id);
        setExpandedItem(expandedItem === id ? null : id);
    };

    const renderContent = (id: string) => {
        if (expandedItem !== id) return null;

        switch (id) {
            case 'PersonalityExplorer':
                return (
                    <div className="pl-9 pr-2 py-3 space-y-2 text-sm">
                        <p className="text-gray-700 font-medium">Understanding Personality Explorer</p>
                        <p className="text-gray-600">Personality Types</p>
                        <p className="text-gray-600">Your Result</p>
                    </div>
                );
            case 'InterestExplorer':
                return (
                    <div className="pl-9 pr-2 py-3 space-y-2 text-sm">
                        <p className="text-gray-700 font-medium">Understanding Interest Explorer</p>
                        <p className="text-gray-600">RIASEC Model</p>
                        <p className="text-gray-600">Your Result</p>
                    </div>
                );
            case 'CareerMotivators':
                return (
                    <div className="pl-9 pr-2 py-3 space-y-2 text-sm">
                        <p className="text-gray-700 font-medium">Understanding Career Motivators</p>
                        <p className="text-gray-600">10 Career Motivators</p>
                        <p className="text-gray-600">Your Result</p>
                    </div>
                );
            case 'EmotionalIntelligence':
                return (
                    <div className="pl-9 pr-2 py-3 space-y-2 text-sm">
                        <p className="text-gray-700 font-medium">Understanding Emotional Intelligence</p>
                        <p className="text-gray-600">Daniel Goleman Emotional Intelligence Test</p>
                        <p className="text-gray-600">Your Result</p>
                    </div>
                );
            case 'LearningStyles':
                return (
                    <div className="pl-9 pr-2 py-3 space-y-2 text-sm">
                        <p className="text-gray-700 font-medium">Understanding Learning Styles</p>
                        <p className="text-gray-600">Your Result</p>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div className="w-72 py-6 px-4 h-screen overflow-y-auto border-r border-gray-200">
            <div className="flex flex-col space-y-4">
                {/* Personality Explorer */}
                <div>
                    <div className={`bg-white rounded-lg ${
                        activeComponent === "PersonalityExplorer" 
                        ? "border-r-4 border-r-blue-500 shadow-md" 
                        : ""
                    }`}>
                        <button
                            onClick={() => handleItemClick("PersonalityExplorer")}
                            className="w-full p-4"
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/p1.png" 
                                    alt="Personality" 
                                    width={24} 
                                    height={24} 
                                    className={`${
                                        activeComponent === "PersonalityExplorer" 
                                        ? "[filter:invert(31%)_sepia(98%)_saturate(1234%)_hue-rotate(206deg)_brightness(97%)_contrast(101%)]" 
                                        : ""
                                    }`}
                                />
                                <div className="flex flex-col items-start">
                                    <span className="text-gray-600 text-sm">TEST 1</span>
                                    <span className="text-blue-600 font-medium">Personality Explorer</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {renderContent("PersonalityExplorer")}
                </div>
                <hr className="border-gray-300" />
    
                {/* Interest Explorer */}
                <div>
                    <div className={`bg-white rounded-lg ${
                        activeComponent === "InterestExplorer" 
                        ? "border-r-4 border-r-green-500 shadow-md" 
                        : ""
                    }`}>
                        <button
                            onClick={() => handleItemClick("InterestExplorer")}
                            className="w-full p-4"
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/p2.png" 
                                    alt="Interest" 
                                    width={24} 
                                    height={24} 
                                    className={`${
                                        activeComponent === "InterestExplorer" 
                                        ? "[filter:invert(48%)_sepia(98%)_saturate(427%)_hue-rotate(118deg)_brightness(94%)_contrast(101%)]" 
                                        : ""
                                    }`}
                                />
                                <div className="flex flex-col items-start">
                                    <span className="text-gray-600 text-sm">TEST 2</span>
                                    <span className="text-green-600 font-medium">Interest Explorer</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {renderContent("InterestExplorer")}
                </div>
                <hr className="border-gray-300" />
    
                {/* Career Motivators */}
                <div>
                    <div className={`bg-white rounded-lg ${
                        activeComponent === "CareerMotivators" 
                        ? "border-r-4 border-r-orange-500 shadow-md" 
                        : ""
                    }`}>
                        <button
                            onClick={() => handleItemClick("CareerMotivators")}
                            className="w-full p-4"
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/p3.png" 
                                    alt="Career" 
                                    width={24} 
                                    height={24} 
                                    className={`${
                                        activeComponent === "CareerMotivators" 
                                        ? "[filter:invert(48%)_sepia(98%)_saturate(427%)_hue-rotate(118deg)_brightness(94%)_contrast(101%)]" 
                                        : ""
                                    }`}
                                />
                                <div className="flex flex-col items-start">
                                    <span className="text-gray-600 text-sm">TEST 3</span>
                                    <span className="text-orange-500 font-medium">Career Motivators</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {renderContent("CareerMotivators")}
                </div>
                <hr className="border-gray-300" />
    
                {/* Emotional Intelligence */}
                <div>
                    <div className={`bg-white rounded-lg ${
                        activeComponent === "EmotionalIntelligence" 
                        ? "border-r-4 border-r-blue-400 shadow-md" 
                        : ""
                    }`}>
                        <button
                            onClick={() => handleItemClick("EmotionalIntelligence")}
                            className="w-full p-4"
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/p4.png" 
                                    alt="Emotional" 
                                    width={24} 
                                    height={24} 
                                    className={`${
                                        activeComponent === "EmotionalIntelligence" 
                                        ? "[filter:invert(48%)_sepia(98%)_saturate(427%)_hue-rotate(206deg)_brightness(97%)_contrast(101%)]" 
                                        : ""
                                    }`}
                                />
                                <div className="flex flex-col items-start">
                                    <span className="text-gray-600 text-sm">TEST 4</span>
                                    <span className="text-blue-400 font-medium">Emotional Intelligence</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {renderContent("EmotionalIntelligence")}
                </div>
                <hr className="border-gray-300" />
    
                {/* Learning Styles */}
                <div>
                    <div className={`bg-white rounded-lg ${
                        activeComponent === "LearningStyles" 
                        ? "border-r-4 border-r-purple-500 shadow-md" 
                        : ""
                    }`}>
                        <button
                            onClick={() => handleItemClick("LearningStyles")}
                            className="w-full p-4"
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/p5.png" 
                                    alt="Learning" 
                                    width={24} 
                                    height={24} 
                                    className={`${
                                        activeComponent === "LearningStyles" 
                                        ? "[filter:invert(48%)_sepia(98%)_saturate(427%)_hue-rotate(206deg)_brightness(97%)_contrast(101%)]" 
                                        : ""
                                    }`}
                                />
                                <div className="flex flex-col items-start">
                                    <span className="text-gray-600 text-sm">TEST 5</span>
                                    <span className="text-purple-500 font-medium">Learning Styles</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {renderContent("LearningStyles")}
                </div>
    
                {/* Download Button */}
                <div className="mt-2">
                    <button className="flex items-center justify-center w-full py-3 px-4 bg-white border border-blue-500 text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-all">
                        <span className="font-medium">Download Report Card</span>
                        <FiDownload className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
 
};

export default Sidebar;
