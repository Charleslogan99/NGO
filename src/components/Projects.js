import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg px-8 py-12 bg-none shadow-none rounded-lg text-center">
        <h1 className="text-6xl font-semibold text-purple-700">Coming Soon..!</h1>
        <p className="text-gray-900 mt-4">We are working hard to bring you something amazing.</p>
        <div className="mt-8 flex justify-center">
          <div className="rounded-md shadow">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
             <span aria-hidden="true">&larr;</span> Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
