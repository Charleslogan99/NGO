
// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// const Hero = () => {
//   // Define animation properties using useSpring
//   const animationProps = useSpring({
//     from: { opacity: 0, transform: 'translateY(-50px)' },
//     to: { opacity: 1, transform: 'translateY(0px)' },
//     config: { duration: 1000 },
//   });

//   return (
//     <div className="relative h-screen mt-0 sm:mt-0 md:mt-0 lg:mt-20">
//       {/* SVG Background */}
//       <svg
//         className="absolute inset-0 w-full h-full"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <rect width="100" height="100" fill="url(#gradient-purple-gray)" />
//         <defs>
//           <linearGradient id="gradient-purple-gray" gradientTransform="rotate(90)">
//             <stop offset="0%" stopColor="#6B46C1" />
//             <stop offset="100%" stopColor="#718096" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Content with Animation */}
//       <animated.div
//         className="absolute inset-0 flex flex-col justify-center items-center text-white"
//         style={animationProps}
//       >
       
//       </animated.div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { useSpring, animated } from 'react-spring';
import backgroundImage from '../assets/Herologo2.jpg'; 

const Hero = () => {
  // Define animation properties using useSpring
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  return (
    <div className="relative h-screen mt-0 sm:mt-0 md:mt-0">
      {/* Image Background */}
      <div
        className="absolute inset-0 w-full h-full object-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        // alt="Background"
      />

      {/* Content with Animation */}
      <animated.div
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
        style={animationProps}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="text-center z-10 text-white">
         <h1 className="text-3xl text-gray-200 md:text-6xl lg:text-8xl font-bold mb-8">Empowering Widows</h1>
         <h1 className="text-3xl text-purple-600 md:text-6xl lg:text-7xl font-bold mb-4">&</h1>
         <h1 className="text-3xl text-gray-200 md:text-6xl lg:text-8xl  font-bold mb-4">Promoting Dignity</h1>
         <h1 className="text-3xl text-gray-200 md:text-6xl lg:text-8xl  font-bold mb-4"><span className='text-purple-700'>&</span> Opportunity</h1>
       </div>
      </animated.div>
    </div>
  );
};

export default Hero;
