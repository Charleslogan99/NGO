// import Logo from '../assets/Wallpaper.jpg'
// const Features = () => {
//   return (
//     <div className="container mx-auto pb-16 px-4 py-8">
//         <div className='p-8'> 
//             <h1 className='font-semibold text-4xl text-purple-700 text-center'>Our Mission</h1>
//           <p className='text-sm pt-4 text-black text-center'>Help people out of poverty,and make their lives better</p>
//         </div>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//     {/* Card 1 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           {/* Replace 'image1.jpg' with your image path */}
//           <img className="w-full h-64 object-cover object-center" src={Logo} alt="Card 1" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Education for every child</h3>
//             <p className="text-purple-700">Card 1 Description</p>
//           </div>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           {/* Replace 'image1.jpg' with your image path */}
//           <img className="w-full h-64 object-cover object-center" src={Logo} alt="Card 1" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Providing medical care</h3>
//             <p className="text-purple-700">Card 2 Description</p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           {/* Replace 'icon2' with your icon */}
//           <svg className="w-full h-64 text-purple-700 p-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="12" cy="12" r="10" />
//             <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
//             <line x1="9.69" y1="8" x2="21.17" y2="8" />
//             <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
//             <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
//             <line x1="14.31" y1="16" x2="2.83" y2="16" />
//             <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
//           </svg>
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Feeding the hungry people</h3>
//             <p className="text-purple-700">Card 3 Description</p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           {/* Replace 'image3.jpg' with your image path */}
//           <img className="w-full h-64 object-cover object-center" src={Logo} alt="Card 3" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Providing cloth people</h3>
//             <p className="text-purple-700">Card 4 Description</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

// import { FaGraduationCap, FaMedkit, FaUtensils, FaTshirt } from 'react-icons/fa';

// const Features = () => {
//   return (
//     <div className="container mx-auto pb-16 px-4 py-8">
//       <div className='p-8'>
//         <h1 className='font-semibold text-4xl text-purple-700 text-center'>Our Major Causes</h1>
//         <p className='text-sm pt-4 text-black text-center'>Help people out of poverty, and make their lives better</p>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Card 1 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <FaGraduationCap className="w-full h-64 text-purple-700 p-16" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Education for every child</h3>
//             <p className="text-purple-700">Card 1 Description</p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <FaMedkit className="w-full h-64 text-purple-700 p-16" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Providing medical care</h3>
//             <p className="text-purple-700">Card 2 Description</p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <FaUtensils className="w-full h-64 text-purple-700 p-16" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Feeding the hungry people</h3>
//             <p className="text-purple-700">Card 3 Description</p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <FaTshirt className="w-full h-64 text-purple-700 p-16" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Providing clothing for people</h3>
//             <p className="text-purple-700">Card 4 Description</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from 'react';
import { FaGraduationCap, FaMedkit, FaUtensils, FaHome, FaHandshake, FaMoneyBillAlt, FaBalanceScale, FaUsers } from 'react-icons/fa';

const Features = () => {
    // Define the causes and their respective icons
    const causes = [
      {
        title: "Education",
        icon: <FaGraduationCap />,
        description:
          "Providing quality education for every child ensures they have the opportunity to learn, grow, and reach their full potential. Education empowers children to break the cycle of poverty, equips them with essential skills for the future, and fosters a more inclusive society.",
      },
      {
        title: "Healthcare",
        icon: <FaMedkit />,
        description:
          "Access to adequate medical care is essential for maintaining good health and well-being. By providing medical care, we ensure that individuals, especially widows and their families, receive timely treatment, preventive care, and support services to address their healthcare needs and improve their quality of life.",
      },
      {
        title: "Food Assistance",
        icon: <FaUtensils />,
        description:
          "Hunger is a pressing issue affecting millions of people worldwide, including widows and their families. By providing nutritious food and meals, we address immediate hunger needs, alleviate food insecurity, and promote healthy living. Our goal is to ensure that no one goes to bed hungry and that everyone has access to nourishing food.",
      },
      {
        title: "Shelter",
        icon: <FaHome />,
        description:
          "Shelter is a basic human need and a fundamental aspect of security and well-being. By providing safe and stable housing, we offer individuals and families a sense of stability, protection, and dignity. Our goal is to ensure that everyone has access to secure and affordable housing options, regardless of their circumstances.",
      },
      {
        title: "Empowerment",
        icon: <FaHandshake />,
        description:
          "Empowerment initiatives equip individuals with the knowledge, skills, and resources they need to advocate for themselves and effect positive change in their lives and communities. By fostering empowerment, we enable individuals to overcome challenges, pursue opportunities, and realize their full potential.",
      },
      {
        title: "Financial Support",
        icon: <FaMoneyBillAlt />,
        description:
          "Financial support programs provide individuals with the means to meet their basic needs, pursue education and employment opportunities, and build financial stability. By offering financial assistance, we empower individuals to achieve financial independence, reduce economic disparities, and create brighter futures for themselves and their families.",
      },
      {
        title: "Legal Aid",
        icon: <FaBalanceScale />,
        description:
          "Legal aid services ensure that individuals have access to justice and legal representation, regardless of their socioeconomic status. By providing legal assistance, we protect individuals rights, promote fairness and equality under the law, and uphold the principles of justice and human rights.",
      },
      {
        title: "Community Building",
        icon: <FaUsers />,
        description:
          "Community building initiatives foster social connections, collaboration, and mutual support among individuals and groups within communities. By strengthening social networks and promoting inclusivity, we create vibrant and resilient communities where everyone feels valued, respected, and empowered to contribute positively to society.",
      },
    ];

    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <h1 className='text-center my-8 text-6xl text-purple-700 font-satoshi mb-10'>Our Major Causes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 ">
                {/* Map through causes and render dynamic cards */}
                {causes.map((cause, index) => (
                    <div key={index} className="bg-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md p-4 flex flex-col items-center">
                        {/* Icon */}
                        <div className="  text-purple-700 mb-2">
                            <span className="text-5xl">{cause.icon}</span>
                        </div>
                        {/* Text */}
                        <p className="text-2xl mb-4 text-center font-semibold text-gray-800">{cause.title}</p>
                        <p className='text-sm text-center'>{cause.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
