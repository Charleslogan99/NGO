import React from 'react';
import { FaDonate, FaLightbulb } from 'react-icons/fa';

const MajorCauses = () => {
    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <h1 className='text-center my-8 text-5xl text-purple-700 font-satoshi font-semibold mb-10'>Our Goals</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Donation Section */}
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
                    {/* Icon */}
                    <FaDonate className="w-12 h-12 text-purple-700" />
                    {/* Text */}
                    <h1 className="text-3xl font-semibold text-gray-800 mt-4">Donation</h1>
                    <p className="text-xl text-center font-semibold text-gray-800 mt-6">Support Widows Through Donations</p>
                    <p className='text-md mt-1 text-center'>Your generous donations help us provide financial support, counseling services, and skill development programs to widows in need. With your contribution, we can empower widows to rebuild their lives with dignity and resilience.</p>
                </div>

                {/* Inspiration Section */}
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
                    {/* Icon */}
                    <FaLightbulb className="w-12 h-12 text-purple-700" />
                    {/* Text */}
                    <h1 className="text-3xl font-semibold text-gray-800 mt-4">Inspiration</h1>
                    <p className="text-xl text-center font-semibold text-gray-800 mt-6">Find Inspiration in Stories of Courage</p>
                    <p className='text-md mt-1 text-center'>Explore stories of resilience and strength from widows who have overcome adversity. Through their experiences, find inspiration and motivation to support widows in your community and make a positive impact.</p>
                </div>
            </div>
        </div>
    );
};

export default MajorCauses;
