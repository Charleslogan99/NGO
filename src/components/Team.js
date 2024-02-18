// const people = [
//   {
//     name: "(Mrs.) Rosemary Chike",
//     role: "Founder / CEO",
//     imageUrl: require("../assets/Rosemarychike.jpg"),
//   },
//   {
//     name: "(Ms.) Mirian Okoro",
//     role: "Director / Secretary",
//     imageUrl: require("../assets/Mimi.jpg"),
//   },
//   {
//     name: "(Mr.) Babasola Olukoya",
//     role: "Director",
//     imageUrl: require("../assets/Person2.JPG"),
//   },
//   {
//     name: "(Mrs.) Agbasi Ifeoma O",
//     role: "Director",     
//     imageUrl: require("../assets/Person3.JPG"),
//   },
//   {
//     name: "(Dr.) Agbasi Chukwudum",
//     role: "Director",
//     imageUrl: require("../assets/Dum.jpg"),
//   },
// ];

// const Team = () => {
//   const person1 = people[0];
//   const person2 = people[1];
//   const person3 = people[2];
//   const person4 = people[3];
//   const person5 = people[4];
//   // Add more person variables as needed...

//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
//         <div className="max-w-8xl">
//           <h2 className="text-3xl text-center font-bold tracking-tight text-purple-700 sm:text-4xl">
//             Meet our leadership
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             At the heart of our organization dedicated to widows, our esteemed
//             leaders embody the values and aspirations we hold dear. With a
//             wealth of experience and a profound commitment to serving others,
//             our leadership team sets the standard for excellence and compassion
//             in all our endeavors.
//           </p>
//         </div>
//         <div>
//           <div className="flex items-center gap-x-6">
//             <img
//               className="h-full w-24 rounded-2xl"
//               src={person1.imageUrl}
//               alt={person1.name}
//             />
//             <div>
//               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
//                 {person1.name}
//               </h3>
//               <p className="text-sm font-semibold leading-6 text-indigo-600">
//                 {person1.role}
//               </p>
//               <div className="text-xs font-semibold leading-6 text-gray-600">
//                 <p>
//                   Rosemary Uzoamaka Chike is an ordained minister of God in the
//                   Redeemed Christian church of God and a provincial Cordinator
//                   for counseling and follow-up in Abuja. She worked as a
//                   resource person (Volunteer) for UNICEF. She was also the
//                   project lead for a Non- Governmental organization by name
//                   CENFET in Abuja. She is the founder/ Chairman of Enouri
//                   Jehovah Jireh foundation for Widows and Aduri El Shaddai
//                   foundation for women and children. 
//                 </p>
//                 <p>Educational Qualifications:
//                   MA Theology- Redeemed Christian Bible College. PGD Theology-
//                   Redeemed Christian Bible College. BSc Marketing  - Abia state
//                   university WASC - Girls Secondary School, Okigwe First School
//                   leaving certificate - Ohabuike primary school,  Afikpo.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-x-6">
//             <img
//               className="h-full w-24 rounded-2xl"
//               src={person2.imageUrl}
//               alt={person2.name}
//             />
//             <div>
//               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
//                 {person2.name}
//               </h3>
//               <p className="text-sm font-semibold leading-6 text-indigo-600">
//                 {person2.role}
//               </p>
//               <div className="text-xs font-semibold leading-6 text-gray-600">
//                 <p>
                  
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-x-6">
//             <img
//               className="h-full w-24 rounded-2xl"
//               src={person3.imageUrl}
//               alt={person3.name}
//             />
//             <div>
//               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
//                 {person3.name}
//               </h3>
//               <p className="text-sm font-semibold leading-6 text-indigo-600">
//                 {person3.role}
//               </p>
//               <div className="text-xs font-semibold leading-6 text-gray-600">
//                 <p>
//                   Babasola Olukoya is a senior Pastor in charge of a province in
//                   the Redeemed Christian Church of God. He is also a special
//                   protocol officer to the General Overseer of the Redeemed
//                   Christian Church of God and his wife - Pastor and Pastor Mrs
//                   Enoch Adeboye. He is a Director  in Triple A micro finance
//                   Bank, Abuja and Chairman of CB construction company, an
//                   engineering outfit. He is the project lead in a Non-
//                   Governmental organization- Habitation of Hope, Abuja. He is
//                   also the Director of projects for Enouri Jehovah Jireh
//                   foundation for Widows and Aduri El Shaddai foundation for
//                   women and children. Educational Qualifications Honorary
//                   Doctorate degree - ISGG University MBA Leadership- Faith lead
//                   University, Florida MA Theology- Redeemed Christian Bible
//                   College BSc Quantity Surveying- Obafemi Awolowo University.
//                   WASC New state Secondary school Ladi lak primary School,
//                   Lagos.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-x-6">
//             <img
//               className="h-full w-24 rounded-2xl"
//               src={person4.imageUrl}
//               alt={person4.name}
//             />
//             <div>
//               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
//                 {person4.name}
//               </h3>
//               <p className="text-sm font-semibold leading-6 text-indigo-600">
//                 {person4.role}
//               </p>
//               <div className="text-xs font-semibold leading-6 text-gray-600">
//                 <p>
//                   Nnewi Girls Secondary school (WAEC) Institute of Management
//                   and Technology, Enugu State OND(Business administration)
//                   University of PortHarcourt, Rivers State. BSc...Sociology
//                   Nnamdi Azikiwe University... MSc Criminology
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-x-6">
//             <img
//               className="h-full w-24 rounded-2xl"
//               src={person5.imageUrl}
//               alt={person5.name}
//             />
//             <div>
//               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
//                 {person5.name}
//               </h3>
//               <p className="text-sm font-semibold leading-6 text-indigo-600">
//                 {person5.role}
//               </p>
//               <div className="text-xs font-semibold leading-6 text-gray-600">
//                 <p>
//                   New Era  Model Secondary School, Uruagu, Nnewi, Anambra
//                   State... WASSCE University of Nigeria, Nsukka, Enugu State
//                   (MBBS) He is the Director of finance for Enouri Jehovah Jireh
//                   foundation for Widows and Aduri El Shaddai foundation for
//                   women and children.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add more divs for other people as needed... */}
//       </div>
//     </div>
//   );
// };

// export default Team;

const people = [
  {
    name: "(Mrs.) Rosemary Chike",
    role: "Founder / CEO",
    imageUrl:
    require('../assets/Rosemarychike.jpg')
  },

  {
    name:"(Ms.) Mirian Okoro",
    role: "Director / Secretary",
    imageUrl:
      require('../assets/Mimi.jpg')
    },

  {
    name: "(Mr.) Babasola Olukoya",
    role: "Director",
    imageUrl:
      require('../assets/Person2.JPG')  },

  {
    name: "(Mrs.) Agbasi Ifeoma O",
    role: "Director",
    imageUrl:
      require('../assets/Person3.JPG')  },

  {
    name: "(Dr.) Agbasi Chukwudum",
    role: "Director",
    imageUrl:
      require('../assets/Dum.jpg')  },

  // More people...
];

  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl  font-bold tracking-tight text-purple-700 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              At the heart of our organization, our esteemed leaders embody
              the values and aspirations we hold dear. With a wealth of
              experience and a commitment to serving others, our leadership
              team sets the standard for excellence and compassion in all our
              endeavors.
            </p>
          </div>
          <ul
            // role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-purple-700">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
      
        </div>
        <div className='container mx-auto mt-24 text-xl font-satoshi max-w-5xl'> 
          <p className='text-gray-700'>  
               <strong className='text-stone-900 text-2xl'>Mrs Rosemary Uzoamaka Chike</strong> is an ordained minister of God in the
                Redeemed Christian church of God and a provincial Cordinator
                for counseling and follow-up in Abuja. She worked as a
                resource person (Volunteer) for UNICEF. She was also the
                project lead for a Non- Governmental organization by name
                CENFET in Abuja. She is the founder/ Chairman of Enouri
                Jehovah Jireh foundation for Widows and Aduri El Shaddai
                foundation for women and children. 
              </p>
              <p className='mb-8 mt-4 text-gray-700'><strong className='text-stone-900 text-2xl'>Educational Qualifications:  </strong>
                MA Theology- Redeemed Christian Bible College. PGD Theology-
                Redeemed Christian Bible College. BSc Marketing  - Abia state
                university WASC - Girls Secondary School, Okigwe First School
                leaving certificate - Ohabuike primary school,  Afikpo.
                </p>
                <p className='mb-8 text-gray-700'>
                <strong className='text-stone-900 text-2xl'>Ms  Mirian Okoro</strong>
                </p>
                <p className='mb-8 text-gray-700'>
                <strong className='text-stone-900 text-2xl'>Mr Babasola Olukoya</strong> is a senior Pastor in charge of a province in
                the Redeemed Christian Church of God. He is also a special
                protocol officer to the General Overseer of the Redeemed
                Christian Church of God and his wife - Pastor and Pastor Mrs
                Enoch Adeboye. He is a Director  in Triple A micro finance
                Bank, Abuja and Chairman of CB construction company, an
                engineering outfit. He is the project lead in a Non-
                Governmental organization- Habitation of Hope, Abuja. He is
                also the Director of projects for Enouri Jehovah Jireh
                foundation for Widows and Aduri El Shaddai foundation for
                women and children. Educational Qualifications Honorary
                Doctorate degree - ISGG University MBA Leadership- Faith lead
                University, Florida MA Theology- Redeemed Christian Bible
                College BSc Quantity Surveying- Obafemi Awolowo University.
                WASC New state Secondary school Ladi lak primary School,
                Lagos.
              </p>
              <p className='mb-8 text-gray-700'>
                <strong className='text-stone-900 text-2xl'>Mrs Agbasi Ifeoma O:  </strong>
                Nnewi Girls Secondary school (WAEC) Institute of Management
                and Technology, Enugu State OND(Business administration)
                University of PortHarcourt, Rivers State. BSc...Sociology
                Nnamdi Azikiwe University... MSc Criminology
              </p>
              <p className='text-gray-700'>
              <strong className='text-stone-900 text-2xl'>Dr Agbasi Chukwudum:  </strong>
                New Era  Model Secondary School, Uruagu, Nnewi, Anambra
                State... WASSCE University of Nigeria, Nsukka, Enugu State
                (MBBS) He is the Director of finance for Enouri Jehovah Jireh
                foundation for Widows and Aduri El Shaddai foundation for
                women and children.
              </p>
          </div>
      </div>
    );
  }
  