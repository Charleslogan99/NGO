// import React from 'react';

// const Projects = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="max-w-lg px-8 py-12 bg-none shadow-none rounded-lg text-center">
//         <h1 className="text-6xl font-semibold text-purple-700">Coming Soon..!</h1>
//         <p className="text-gray-900 mt-4">We are working hard to bring you something amazing.</p>
//         <div className="mt-8 flex justify-center">
//           <div className="rounded-md shadow">
//             <a
//               href="/"
//               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
//             >
//              <span aria-hidden="true">&larr;</span> Back Home
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useState } from 'react';
// const Projects = () => {
//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       title: 'Empowerment Workshop',
//       description: 'Providing widows with skills and resources to empower them for economic independence.',
//       imageUrl: require('../assets/Image1.jpg'),
//     },
//     {
//       id: 2,
//       title: 'Healthcare Outreach',
//       description: 'Offering medical checkups and consultations for widows and their families.',
//       imageUrl: require('../assets/Image3.jpg'),
//     },
//     {
//       id: 3,
//       title: 'Educational Support Program',
//       description: 'Providing scholarships and educational materials to support widows and their children.',
//       imageUrl: require('../assets/Image3.jpg'),
//     },
//     {
//       id: 4,
//       title: 'Housing Project',
//       description: 'Building safe and affordable housing for widows and their families.',
//       imageUrl: require('../assets/Image3.jpg'),
//     },
//     {
//       id: 5,
//       title: 'Financial Literacy Training',
//       description: 'Offering workshops to widows on financial management and budgeting.',
//       imageUrl: require('../assets/Image3.jpg'),
//     },
//   ]);

//   const addProject = () => {
//     // For demo purposes, generating a random project with dummy data
//     const newProject = {
//       id: Math.floor(Math.random() * 1000),
//       title: 'New Project',
//       description: 'Description of the new project goes here...',
//       // imageUrl: 'https://via.placeholder.com/300',
//     };

//     setProjects([...projects, newProject]);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       {/* <h1 className="text-3xl font-bold mb-4">Projects</h1> */}

//       <button
//         onClick={addProject}
//         className="bg-purple-500 mt-16 lg:mt-20  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Add New Project
//       </button>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
//             <img src={project.imageUrl} alt={project.title} className="w-full h-96 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2">{project.title}</h2>
//               <p className="text-gray-700">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react'
import Carousel from './Carousel'

export default function Projects() {
  return (
    <div>
      <Carousel />
    </div>
  )
}
