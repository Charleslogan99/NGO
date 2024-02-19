const people = [
  {
    name: '(Mrs.) Rosemary Chike',
    role: 'Founder / CEO',

    description:
      'I am the founder,and ceo of this great ngo,A graduate of the university of Nigeria,Nsukka,I am here for a just cause',
    imageUrl: require('../assets/Rosemary.JPG'),
  },

  {
    name: '(Ms.) Miriam Okoro',
    role: 'Co-Founder / CEO',
    description:
      'I am the founder,and ceo of this great ngo,A graduate of the university of Nigeria,Nsukka,I am here for a just cause',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  {
    name: '(Mr.) Babasola Olukoya',
    role: 'Co-Founder / CEO',
    description:
      'I am the founder,and ceo of this great ngo,A graduate of the university of Nigeria,Nsukka,I am here for a just cause',
    imageUrl: require('../assets/Person2.JPG'),
  },

  {
    name: '(Mr.) Agbasi Ifeoma O',
    role: 'Co-Founder / CEO',
    description:
      'I am the founder,and ceo of this great ngo,A graduate of the university of Nigeria,Nsukka,I am here for a just cause',
    imageUrl: require('../assets/Person3.JPG'),
  },

  {
    name: '(Dr.) Agbasi Chukwudum',
    role: 'Co-Founder / CEO',
    description:
      'I am the founder,and ceo of this great ngo,A graduate of the university of Nigeria,Nsukka,I am here for a just cause',
    imageUrl: require('../assets/Person4.JPG'),
  },
]

export default function Team() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl'>
            Meet our leadership
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            At the heart of our organization dedicated to widows, our esteemed
            leaders embody the values and aspirations we hold dear. With a
            wealth of experience and a profound commitment to serving others,
            our leadership team sets the standard for excellence and compassion
            in all our endeavors.
          </p>
        </div>
        <ul className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
          {people.map((person) => (
            <li key={person.name}>
              <div className='flex items-center gap-x-6'>
                <div className='flex-none h-24 w-24 rounded-full'>
                  <img
                    className='h-full w-full rounded-full object-cover'
                    src={person.imageUrl}
                    alt=''
                  />
                </div>
                <div>
                  <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                    {person.name}
                  </h3>
                  <p className='text-sm font-semibold leading-6 text-indigo-600'>
                    {person.role}
                  </p>
                  <p className='text-xs font-semibold leading-6 text-gray-600'>
                    {person.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}