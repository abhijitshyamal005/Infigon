import React from 'react';
import Link from 'next/link';

const SubHeader = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Career Analysis Report Header */}
            <div className=" flex gap-14">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold mb-2">Your Career Analysis Report</h1>
                <p className="text-gray-600">
                    Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.
                </p>
            </div>
            <div className="flex items-center gap-3 border-gray-400 ">
                <div className="flex items-center gap-3 border border-gray-300 rounded-xl p-3">
                    <div className="">
                        <p className="font-medium text-sm">Want To Speak To An Expert Career Counsellor?</p>
                        <p className="text-sm text-gray-600">Explore a list of 1000+ Expert Career Counsellors near you!</p>
                    </div>
                    <Link href="/experts" className="text-black font-medium px-3 py-2 text-sm rounded-md bg-[#EBEBEB] hover:text-gray-800">
                        See All
                    </Link>
                </div>
            </div>
            </div>

            {/* Career Options Section */}
            <div className=" items-center justify-center border-t border-b border-gray-300 py-4 gap-4 flex">
                <div className="flex items-center gap-4 border-r-2 pr-8">
                    <span className="text-gray-600">Your</span>
                    <span className="font-semibold text-blue-700">TOP 3</span>
                    <span className="text-gray-600">Career Options</span>

                   <div className="flex items-center  gap-3 ml-2">
                        <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1">
                            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">1</span>
                            <span className="text-gray-600 font-semibold blur-[1.5px]">Engineer</span>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1">
                            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">2</span>
                            <span className="text-gray-600 text-sm font-semibold blur-[1.5px]">Doctor</span>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1">
                            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">3</span>
                            <span className="text-gray-600 font-semibold blur-[1.5px]">Teacher</span>
                        </div> 
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="font-medium">Choose them right here!</span>
                    <Link
                        href="/career-options"
                        className="bg-blue-600 font-semibold text-sm text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Your Career Options
                    </Link>
                </div>
            </div>

         
            
        </div>
    );
};

export default SubHeader;