// import React from 'react';
// import { FaGraduationCap, FaMedkit, FaUtensils, FaHome, FaHandshake, FaMoneyBillAlt, FaBalanceScale, FaUsers } from 'react-icons/fa';

// const Features = () => {
//     // Define the causes and their respective icons
//     const causes = [
//       // {
//       //   title: "Education",
//       //   icon: <FaGraduationCap />,
//       //   description:
//       //     "Providing quality education for every child ensures they have the opportunity to learn, grow, and reach their full potential. Education empowers children to break the cycle of poverty, equips them with essential skills for the future, and fosters a more inclusive society.",
//       // },
//       {
//         title: "Healthcare",
//         icon: <FaMedkit />,
//         description:
//           "Access to adequate medical care is essential for maintaining good health and well-being. By providing medical care, we ensure that individuals, especially widows and their families, receive timely treatment, preventive care, and support services to address their healthcare needs and improve their quality of life.",
//       },
//       {
//         title: "Food Assistance",
//         icon: <FaUtensils />,
//         description:
//           "Hunger is a pressing issue affecting millions of people worldwide, including widows and their families. By providing nutritious food and meals, we address immediate hunger needs, alleviate food insecurity, and promote healthy living. Our goal is to ensure that no one goes to bed hungry and that everyone has access to nourishing food.",
//       },
//       {
//         title: "Shelter",
//         icon: <FaHome />,
//         description:
//           "Shelter is a basic human need and a fundamental aspect of security and well-being. By providing safe and stable housing, we offer individuals and families a sense of stability, protection, and dignity. Our goal is to ensure that everyone has access to secure and affordable housing options, regardless of their circumstances.",
//       },
//       {
//         title: "Empowerment",
//         icon: <FaHandshake />,
//         description:
//           "Empowerment initiatives equip individuals with the knowledge, skills, and resources they need to advocate for themselves and effect positive change in their lives and communities. By fostering empowerment, we enable individuals to overcome challenges, pursue opportunities, and realize their full potential.",
//       },
//       {
//         title: "Financial Support",
//         icon: <FaMoneyBillAlt />,
//         description:
//           "Financial support programs provide individuals with the means to meet their basic needs, pursue education and employment opportunities, and build financial stability. By offering financial assistance, we empower individuals to achieve financial independence, reduce economic disparities, and create brighter futures for themselves and their families.",
//       },
//       {
//         title: "Legal Aid",
//         icon: <FaBalanceScale />,
//         description:
//           "Legal aid services ensure that individuals have access to justice and legal representation, regardless of their socioeconomic status. By providing legal assistance, we protect individuals rights, promote fairness and equality under the law, and uphold the principles of justice and human rights.",
//       },
//       {
//         title: "Community Building",
//         icon: <FaUsers />,
//         description:
//           "Community building initiatives foster social connections, collaboration, and mutual support among individuals and groups within communities. By strengthening social networks and promoting inclusivity, we create vibrant and resilient communities where everyone feels valued, respected, and empowered to contribute positively to society.",
//       },
//     ];

//     return (
//         <div className="container mx-auto px-4 py-8 mb-20">
//             <h1 className='text-center my-8 text-6xl text-purple-700 font-satoshi mb-10'>Our Major Causes</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
//                 {/* Map through causes and render dynamic cards */}
//                 {causes.map((cause, index) => (
//                     <div key={index} className="bg-white transition duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md p-4 flex flex-col items-center">
//                         {/* Icon */}
//                         <div className="  text-purple-700 mb-2">
//                             <span className="text-5xl">{cause.icon}</span>
//                         </div>
//                         {/* Text */}
//                         <p className="text-2xl mb-4 text-center font-semibold text-gray-800">{cause.title}</p>
//                         <p className='text-sm text-center'>{cause.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Features;


import React from 'react';
import { FaMoneyBillAlt, FaBalanceScale, FaGraduationCap, FaMedkit, FaUsers, FaHome, FaChild, FaChalkboardTeacher, FaBullhorn } from 'react-icons/fa';

const Features = () => {
    // Define the causes and their respective icons
    const causes = [
      {
        title: "Financial Empowerment",
        icon: <FaMoneyBillAlt />,
        description:
          "Providing widows with financial resources, training, and opportunities to achieve economic independence and stability.",
      },
      {
        title: "Legal Assistance",
        icon: <FaBalanceScale />,
        description:
          "Offering legal support and advocacy to protect widows' rights, including inheritance, property ownership, and access to social welfare programs.",
      },
      {
        title: "Education and Skill Development",
        icon: <FaGraduationCap />,
        description:
          "Facilitating educational opportunities and skill-building programs to enhance widows' employability and socioeconomic prospects.",
      },
      {
        title: "Healthcare Access",
        icon: <FaMedkit />,
        description:
          "Ensuring widows have access to quality healthcare services, including preventive care, reproductive health services, and mental health support.",
      },
      {
        title: "Social Support Networks",
        icon: <FaUsers />,
        description:
          "Establishing support groups and community networks to foster solidarity, emotional well-being, and social inclusion among widows.",
      },
      {
        title: "Housing and Shelter",
        icon: <FaHome />,
        description:
          "Providing safe and affordable housing options for widows and their families, addressing homelessness and housing insecurity.",
      },
      {
        title: "Child Welfare",
        icon: <FaChild />,
        description:
          "Supporting widowed mothers in caring for their children, including access to childcare, education, and nutritional support.",
      },
      {
        title: "Empowerment Workshops and Training",
        icon: <FaChalkboardTeacher />,
        description:
          "Organizing workshops, training sessions, and empowerment programs to build confidence, leadership skills, and resilience among widows.",
      },
      {
        title: "Advocacy and Awareness",
        icon: <FaBullhorn />,
        description:
          "Advocating for policy changes, raising awareness about widows' rights and issues, and challenging societal stigmas and discrimination associated with widowhood.",
      },
    ];

    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <h1 className='text-center my-8 text-6xl text-purple-700 font-satoshi mb-10'>Our Major Causes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
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
