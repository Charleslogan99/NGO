import React from 'react';
import { FaDonate, FaLightbulb } from 'react-icons/fa';

const MajorCauses = () => {
    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <h1 className='text-center my-8 text-5xl text-purple-700 font-satoshi mb-10'>Our Major Causes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                    {/* Icon */}
                    <FaDonate className="w-12 h-12 text-purple-700" />
                    {/* Text */}
                    <p className="text-lg font-semibold text-gray-800 mt-4">Give Donation</p>
                    <p className='text-sm text-center'>lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                    {/* Icon */}
                    <FaLightbulb className="w-12 h-12 text-purple-700" />
                    {/* Text */}
                    <p className="text-lg font-semibold text-gray-800 mt-4">Inspiration</p>
                    <p className='text-sm text-center'>lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd lorem ipsum decor dolorhdhjdhdjshshd</p>
                </div>
            </div>
        </div>
    );
};

export default MajorCauses;
