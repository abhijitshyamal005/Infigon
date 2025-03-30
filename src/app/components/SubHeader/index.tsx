import React from 'react';
import Link from 'next/link';

const SubHeader = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Career Analysis Report Header */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
                <div className="mb-6">
                    <h1 className="text-xl lg:text-2xl font-semibold mb-2">Your Career Analysis Report</h1>
                    <p className="text-gray-600 text-sm lg:text-base">
                        Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 border-gray-400">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 border border-gray-300 rounded-xl p-3">
                        <div>
                            <p className="font-medium text-sm lg:text-base">Want To Speak To An Expert Career Counsellor?</p>
                            <p className="text-sm text-gray-600">Explore a list of 1000+ Expert Career Counsellors near you!</p>
                        </div>
                        <Link
                            href="/experts"
                            className="text-black font-medium px-3 py-2 text-sm rounded-md bg-[#EBEBEB] hover:text-gray-800"
                        >
                            See All
                        </Link>
                    </div>
                </div>
            </div>

            {/* Career Options Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center border-t border-b border-gray-300 py-4 gap-4">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:border-r-2 lg:pr-8">
                    <span className="text-gray-600 text-sm lg:text-base">Your</span>
                    <span className="font-semibold text-blue-700 text-sm lg:text-base">TOP 3</span>
                    <span className="text-gray-600 text-sm lg:text-base">Career Options</span>

                    <div className="flex flex-col lg:flex-row items-center gap-3 mt-2 lg:mt-0">
                        <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1">
                            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">1</span>
                            <span className="text-gray-600 font-semibold blur-[1.5px] text-sm lg:text-base">Engineer</span>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1">
                            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">2</span>
                            <span className="text-gray-600 font-semibold blur-[1.5px] text-sm lg:text-base">Doctor</span>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1">
                            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">3</span>
                            <span className="text-gray-600 font-semibold blur-[1.5px] text-sm lg:text-base">Teacher</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <span className="font-medium text-sm lg:text-base">Choose them right here!</span>
                    <Link
                        href="/career-options"
                        className="bg-blue-600 font-semibold text-sm lg:text-base text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Your Career Options
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;