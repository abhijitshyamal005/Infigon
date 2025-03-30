import React from 'react';
import PersonalityExplorer from '../PersonalityExplorer';
import InterestExplorer from '../InterestExplorer';
import CareerMotivators from '../CareerMotivators';
import EmotionalIntelligence from '../EmotionalIntelligence';
import LearningStyles from '../LearningStyles';

interface TestData {
    id: string;
    title: string;
    testNumber: string;
    color: string;
    borderColor: string;
    bgColor: string;
    textColor: string;
}

const testsData: TestData[] = [
    {
        id: "PersonalityExplorer",
        title: "Personality Explorer",
        testNumber: "TEST 1",
        color: "blue",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        id: "InterestExplorer",
        title: "Interest Explorer",
        testNumber: "TEST 2",
        color: "green",
        borderColor: "border-green-500",
        bgColor: "bg-green-100",
        textColor: "text-green-600"
    },
    {
        id: "CareerMotivators",
        title: "Career Motivators",
        testNumber: "TEST 3",
        color: "orange",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-100",
        textColor: "text-orange-500"
    },
    {
        id: "EmotionalIntelligence",
        title: "Emotional Intelligence",
        testNumber: "TEST 4",
        color: "blue",
        borderColor: "border-blue-400",
        bgColor: "bg-blue-100",
        textColor: "text-blue-400"
    },
    {
        id: "LearningStyles",
        title: "Learning Styles",
        testNumber: "TEST 5",
        color: "purple",
        borderColor: "border-purple-500",
        bgColor: "bg-purple-100",
        textColor: "text-purple-500"
    }
];

interface TestContentProps {
    activeComponent: string;
}

const TestContent: React.FC<TestContentProps> = ({ activeComponent }) => {
    const activeTest = testsData.find((test: TestData) => test.id === activeComponent);

    if (!activeTest) return null;

    const renderContent = () => {
        switch (activeComponent) {
            case 'PersonalityExplorer':
                return <PersonalityExplorer />;
            case 'InterestExplorer':
                return <InterestExplorer />;
            case 'CareerMotivators':
                return <CareerMotivators />;
            case 'EmotionalIntelligence':
                return <EmotionalIntelligence />;
            case 'LearningStyles':
                return <LearningStyles />;
            default:
                return null;
        }
    };

    return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
            {/* Header Section */}
            <div
                className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg shadow-md ${activeTest.bgColor} ${activeTest.borderColor} border`}
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span className={`font-medium text-sm sm:text-base ${activeTest.textColor}`}>
                        {activeTest.testNumber}
                    </span>
                    <h1 className={`text-lg sm:text-xl font-bold ${activeTest.textColor}`}>
                        {activeTest.title}
                    </h1>
                </div>
            </div>

            {/* Dynamic Content */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                {renderContent()}
            </div>
        </div>
    );
};

export default TestContent;