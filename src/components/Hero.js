// import hero from '../assets/Wallpaper.jpg'; // Import your image

// const Hero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen"
//       style={{ backgroundImage: `url(${hero})` }}
//     >
//       {/* Your content goes here */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* <h1 className="text-white text-4xl font-bold">Your Hero Title</h1> */}
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-satoshi text-purple-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//               Announcing our next round of funding.{" "}
//               <a href="/" className="font-semibold text-gray-300">
//                 <span className="absolute inset-0" aria-hidden="true" />
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight  text-gray-100 sm:text-6xl">
//               GIVE A HAND TO MAKE THE WORLD A BETTER PLACE
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-400">
//               That don't lights. Blessed land spirit creature divide our made
//               two itself upon you'll dominion waters man second good you they're
//               divided upon winged were replenish night.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="/"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Get started
//               </a>
//               <a
//                 href="/"
//                 className="text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// HeroComponent.js

import heroImage from '../assets/Image1.jpg';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen sm:bg-auto sm:bg-center md:bg-cover lg:bg-cover xl:bg-cover mt-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-white text-3xl  font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-satoshi mb-4">
          GIVE A HAND 
        </h3>
        <h1 className="text-white text-3xl  font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-satoshi mb-4">
        TO MAKE THE WORLD A BETTER PLACE 
        </h1>
        {/* <p className="text-white  text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-lg mb-8">
        That don't lights. Blessed land spirit creature divide our made two itself upon you'll dominion waters man second good you they're divided upon winged were replenish night


        </p> */}
        <div className="flex flex-wrap justify-center">
          <button className="bg-purple-700 text-white font-bold  py-2 px-4 rounded-full mx-2 hover:bg-black  focus:outline-none focus:shadow-outline-blue active:bg-purple-800">
            Learn More 
          </button>
          <button className="bg-white text-purple-700 font-bold py-2 px-4 rounded-full mx-2 hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue active:bg-gray-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
