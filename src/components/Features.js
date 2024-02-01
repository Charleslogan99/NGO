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

import { FaGraduationCap, FaMedkit, FaUtensils, FaTshirt } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="container mx-auto pb-16 px-4 py-8">
      <div className='p-8'>
        <h1 className='font-semibold text-4xl text-purple-700 text-center'>Our Mission</h1>
        <p className='text-sm pt-4 text-black text-center'>Help people out of poverty, and make their lives better</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaGraduationCap className="w-full h-64 text-purple-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Education for every child</h3>
            <p className="text-purple-700">Card 1 Description</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaMedkit className="w-full h-64 text-purple-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Providing medical care</h3>
            <p className="text-purple-700">Card 2 Description</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaUtensils className="w-full h-64 text-purple-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Feeding the hungry people</h3>
            <p className="text-purple-700">Card 3 Description</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <FaTshirt className="w-full h-64 text-purple-700 p-16" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Providing clothing for people</h3>
            <p className="text-purple-700">Card 4 Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
