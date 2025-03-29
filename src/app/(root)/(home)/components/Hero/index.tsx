"use client"

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PersonalityExplorer from "../PersonalityExplorer";
import InterestExplorer from "../InterestExplorer";
import CareerMotivators from "../CareerMotivators";
import EmotionalIntelligence from "../EmotionalIntelligence";
import LearningStyles from "../LearningStyles";
import PersonalityTypes from "../PersonalityTypes"; // Verify that the file '../PersonalityTypes.tsx' exists in the specified path or update the path to the correct location.
import YourResult from "../YourResult"; // Ensure the file '../YourResult.tsx' exists or update the path if it's located elsewhere.

const Hero = () => {
    const [activeComponent, setActiveComponent] = useState("PersonalityExplorer");

    const renderComponent = () => {
        switch (activeComponent) {
            case "PersonalityExplorer":
                return <PersonalityExplorer />;
            case "InterestExplorer":
                return <InterestExplorer />;
            case "CareerMotivators":
                return <CareerMotivators />;
            case "EmotionalIntelligence":
                return <EmotionalIntelligence />;
            case "LearningStyles":
                return <LearningStyles />;
            case "PersonalityTypes":
                return <PersonalityTypes />;
            case "YourResult":
                return <YourResult />;
            default:
                return <PersonalityExplorer />;
        }
    };

      
       return (
        <div className="flex min-h-screen justify-center px-4 md:px-8 lg:px-12">
            <div className="w-full max-w-7xl flex">
                {/* Sidebar scrolls with the main content until the end */}
                <div className="relative h-full">
                    <div className="sticky top-0">
                        <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                    </div>
                </div>
                {/* Main content becomes scrollable */}
                <div className="flex-1 overflow-y-auto">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
   
};

export default Hero;
