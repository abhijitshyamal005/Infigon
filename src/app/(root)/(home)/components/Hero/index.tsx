"use client"

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TestContent from './TestContent';
import PersonalityExplorer from "../PersonalityExplorer";
import InterestExplorer from "../InterestExplorer";
import CareerMotivators from "../CareerMotivators";
import EmotionalIntelligence from "../EmotionalIntelligence";
import LearningStyles from "../LearningStyles";

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
            default:
                return <PersonalityExplorer />;
        }
    };

    return (
        <div className="flex min-h-screen  justify-center px-4 md:px-8 lg:px-12">
            <div className="w-full max-w-7xl flex">
                <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                <TestContent activeComponent={activeComponent} />
            </div>
        </div>
    );
};

export default Hero;
