// import Features from "./Features";
// import { useSpring, animated } from 'react-spring';

// const links = [
//     { name: 'About Us', href: '' },
//     { name: 'Our Major Causes', href: '' },
//     { name: 'Our values', href: '' },
//     { name: 'Meet our leadership', href: '' },
//   ]
//   // const stats = [
//   //   { name: 'Offices worldwide', value: '12' },
//   //   { name: 'Full-time colleagues', value: '20+' },
//   //   { name: 'Hours per week', value: '40' },
//   //   { name: 'Paid time off', value: 'Unlimited' },
//   // ]
  
//   export default function About() {
//     const animationProps = useSpring({
//       from: { opacity: 0, transform: 'translateY(-50px)' },
//       to: { opacity: 1, transform: 'translateY(0px)' },
//       config: { duration: 1000 },
//     });
//     return (
//       <>
//         <div className="relative mt-20  md:mt-2 lg:mt-20 isolate h-full lg:h-screen overflow-hidden bg-gray-900 py-24 sm:py-32">
//           <svg
//             className="absolute inset-0 -z-10 opacity-60 h-full w-full object-cover object-right md:object-center"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 100 100"
//             preserveAspectRatio="none"
//           >
//             <rect width="100" height="100" fill="url(#gradient)" />
//             <defs>
//               <linearGradient id="gradient" gradientTransform="rotate(90)">
//                 <stop offset="0%" stopColor="#6B46C1" /> {/* Purple-700 */}
//                 <stop offset="100%" stopColor="#718096" /> {/* Gray or White */}
//               </linearGradient>
//             </defs>
//           </svg>

//           <div
//             className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//             aria-hidden="true"
//           >
//             <div
//               className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//               style={{
//                 clipPath:
//                   "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//               }}
//             />
//           </div>
//           <div
//             className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//             aria-hidden="true"
//           >
//             <div
//               className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//               style={{
//                 clipPath:
//                   "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//               }}
//             />
//           </div>
//           <animated.div
//             // className="absolute inset-0 flex flex-col justify-center items-center p-16 text-white"
//             style={animationProps}
//           >
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//               <div className="mx-auto max-w-2xl lg:mx-0">
//                 <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//                   ABOUT US
//                 </h2>
//               </div>
//               <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//                 <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//                   {links.map((link) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       className="pointer-events-none text-gray-300 text-xl"
//                     >
//                       {link.name} <span aria-hidden="true">&rarr;</span>
//                     </a>
//                   ))}
//                 </div>
//                 <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl>
//               </div>
//             </div>
//           </animated.div>
//         </div>
//         <div className="container mx-auto px-4 py-16 h-full">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               About Us
//             </h2>
//             <p className="text-lg mb-16">
//               About Enouri Jehovah Jireh Foundation Enouri Jehovah Jireh
//               Foundation is a dedicated non-governmental organization (NGO)
//               committed to uplifting the lives of widows across our communities.
//               Founded on principles of compassion, empowerment, and social
//               justice, our foundation strives to be a beacon of hope for widows
//               facing economic, social, and emotional challenges.
//             </p>
//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               Our Objective
//             </h2>
//             <p className="text-lg mb-16">
//               To Promote Empowerment programmes for widows, To provide ⁠Medical &
//               wellness outreaches for widows and women in urban and rural
//               communities against Malaria & Cancer (Breast & Cervical cancer), To
//               Promote Trainings and Sensitizations for young and old widows in
//               rural communities, To Promote ⁠Advocacy against repugnant customs
//               and inhuman practices against widows and women and to advocate
//               against discrimination of all kinds, To promote Advocacy against
//               gender based violence, female genital mutilation and other inhuman
//               practices against widows and women, To collaborate with other
//               Associations and agencies of government on any project that impact
//               positively on life.
//             </p>
//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               Our Mission
//             </h2>
//             <p className="text-lg mb-16">
//               At Enouri Jehovah Jireh Foundation, our mission is clear: to
//               provide unwavering support, resources, and opportunities for
//               widows to rebuild their lives with dignity and resilience. We
//               believe in fostering an environment where widows can thrive,
//               regain their independence, and contribute positively to society.
//             </p>
//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               Our Vision
//             </h2>
//             <p className="text-lg mb-16">
//               Our vision is to create a world where widows are not only
//               supported but celebrated for their strength and resilience. We
//               envision a society where widows have access to education, economic
//               empowerment, healthcare, and social support systems that enable
//               them to lead fulfilling lives and become agents of change in their
//               communities.
//             </p>

//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               Our Programs
//             </h2>
//             <ol>
//               <li className="text-lg mb-4">
//                 Financial Assistance: We provide financial support to widows to
//                 meet their basic needs, including housing, food, and healthcare
//                 expenses.
//               </li>
//               <li className="text-lg mb-4">
//                 Skills Training and Employment: Through vocational training
//                 programs and job placement assistance, we empower widows to gain
//                 valuable skills and secure sustainable employment opportunities.
//               </li>
//               <li className="text-lg mb-4">
//                 Educational Support: We offer scholarships and educational
//                 grants to widows and their children, ensuring access to quality
//                 education and breaking the cycle of poverty.
//               </li>
//               <li className="text-lg mb-16">
//                 Health and Wellness: We promote the health and wellness of
//                 widows through access to healthcare services, mental health
//                 support, and wellness programs.
//               </li>
//             </ol>
//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               Join Us in Making a Difference
//             </h2>
//             <p className="text-lg mb-4">
//               At Enouri Jehovah Jireh Foundation, we invite you to join us in
//               making a meaningful impact in the lives of widows. Together, we
//               can create a more inclusive and compassionate society where every
//               widow has the opportunity to thrive and live with dignity. Join
//               our cause, support our initiatives, and together, let's change
//               lives for the better.
//             </p>
//             {/* Add more content */}
//           </div>
//         </div>
//         <Features />
//         <div className="container mx-auto px-4 py-16 h-full">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl text-purple-700 font-semibold mb-4">
//               Our Core Values
//             </h2>
//             <ol>
//               <li className="text-lg mb-4">
//                 Compassion: We approach our work with empathy, understanding,
//                 and a deep sense of care for the widows we serve.
//               </li>
//               <li className="text-lg mb-4">
//                 Empowerment: We empower widows by providing them with the tools,
//                 resources, and skills they need to rebuild their lives and
//                 pursue their aspirations.
//               </li>
//               <li className="text-lg mb-4">
//                 Dignity: We uphold the dignity and worth of every widow,
//                 respecting their autonomy, choices, and cultural diversity.
//               </li>
//               <li className="text-lg mb-4">
//                 Collaboration: We believe in the power of collaboration and
//                 partnerships to maximize our impact and reach more widows in
//                 need.
//               </li>
//               <li className="text-lg mb-16">
//                 Transparency: We are committed to transparency and
//                 accountability in all our actions, ensuring that resources are
//                 utilized efficiently and effectively to benefit widows.
//               </li>
//             </ol>
//           </div>
//         </div>
//       </>
//     );
//   }
import React from 'react';
import { useSpring, animated } from 'react-spring';
import backgroundImage from '../assets/Herologo.jpg';
import Features from './Features';
const links = [
  { name: 'About Us', href: '' },
  { name: 'Our Major Causes', href: '' },
  { name: 'Our values', href: '' },
  { name: 'Meet our leadership', href: '' },
];

export default function About() {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  return (
    <>
      <div>
        <animated.div style={animationProps}>
          <div
            className="relative bg-cover bg-center h-screen flex items-center justify-center sm:mt-10 md:mt-10 xl:mt-24"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              
              <div className=" max-w-7xl lg:mx-0">

                <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                  ABOUT US
                </h2>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="pointer-events-none text-white text-xl"
                    >
                      {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
      <div className="container mx-auto px-4 py-16 h-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            About Us
          </h2>
          <p className="text-lg mb-16">
            About Enouri Jehovah Jireh Foundation Enouri Jehovah Jireh
            Foundation is a dedicated non-governmental organization (NGO)
            committed to uplifting the lives of widows across our communities.
            Founded on principles of compassion, empowerment, and social
            justice, our foundation strives to be a beacon of hope for widows
            facing economic, social, and emotional challenges.
          </p>
          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            Our Objective
          </h2>
          <p className="text-lg mb-16">
            To Promote Empowerment programmes for widows, To provide ⁠Medical
            & wellness outreaches for widows and women in urban and rural
            communities against Malaria & Cancer (Breast & Cervical cancer),
            To Promote Trainings and Sensitizations for young and old widows
            in rural communities, To Promote ⁠Advocacy against repugnant
            customs and inhuman practices against widows and women and to
            advocate against discrimination of all kinds, To promote Advocacy
            against gender based violence, female genital mutilation and other
            inhuman practices against widows and women, To collaborate with
            other Associations and agencies of government on any project that
            impact positively on life.
          </p>
          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg mb-16">
            At Enouri Jehovah Jireh Foundation, our mission is clear: to
            provide unwavering support, resources, and opportunities for
            widows to rebuild their lives with dignity and resilience. We
            believe in fostering an environment where widows can thrive,
            regain their independence, and contribute positively to society.
          </p>
          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-lg mb-16">
            Our vision is to create a world where widows are not only
            supported but celebrated for their strength and resilience. We
            envision a society where widows have access to education, economic
            empowerment, healthcare, and social support systems that enable
            them to lead fulfilling lives and become agents of change in their
            communities.
          </p>

          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            Our Programs
          </h2>
          <ol>
            <li className="text-lg mb-4">
              Financial Assistance: We provide financial support to widows to
              meet their basic needs, including housing, food, and healthcare
              expenses.
            </li>
            <li className="text-lg mb-4">
              Skills Training and Employment: Through vocational training
              programs and job placement assistance, we empower widows to gain
              valuable skills and secure sustainable employment opportunities.
            </li>
            <li className="text-lg mb-4">
              Educational Support: We offer scholarships and educational
              grants to widows and their children, ensuring access to quality
              education and breaking the cycle of poverty.
            </li>
            <li className="text-lg mb-16">
              Health and Wellness: We promote the health and wellness of
              widows through access to healthcare services, mental health
              support, and wellness programs.
            </li>
          </ol>
          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-4">
            At Enouri Jehovah Jireh Foundation, we invite you to join us in
            making a meaningful impact in the lives of widows. Together, we
            can create a more inclusive and compassionate society where every
            widow has the opportunity to thrive and live with dignity. Join
            our cause, support our initiatives, and together, let's change
            lives for the better.
          </p>
          {/* Add more content */}
        </div>
      </div>
      {/* Features component */}
      <Features />
      {/* Core Values section */}
      <div className="container mx-auto px-4 py-16 h-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-purple-700 font-semibold mb-4">
            Our Core Values
          </h2>
          <ol>
            <li className="text-lg mb-4">
              Compassion: We approach our work with empathy, understanding, and
              a deep sense of care for the widows we serve.
            </li>
            <li className="text-lg mb-4">
              Empowerment: We empower widows by providing them with the tools,
              resources, and skills they need to rebuild their lives and pursue
              their aspirations.
            </li>
            <li className="text-lg mb-4">
              Dignity: We uphold the dignity and worth of every widow,
              respecting their autonomy, choices, and cultural diversity.
            </li>
            <li className="text-lg mb-4">
              Collaboration: We believe in the power of collaboration and
              partnerships to maximize our impact and reach more widows in
              need.
            </li>
            <li className="text-lg mb-16">
              Transparency: We are committed to transparency and accountability
              in all our actions, ensuring that resources are utilized
              efficiently and effectively to benefit widows.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
