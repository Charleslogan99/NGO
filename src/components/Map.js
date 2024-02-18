import React from 'react'

export default function Map() {
  return (
    <div>
      <div className="  mb-16 bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">
    Map and Directions
  </h2>
  {/* Embed Google Maps */}
  <div className="relative w-full h-96 rounded-lg overflow-hidden">
    <iframe
      className="absolute inset-0 w-full h-full"
      title="NGO Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.4195650454013!2d7.495454158385502!3d9.076478873499999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0e2c8cf29431%3A0x2e79323b4b6aa3c8!2sAbuja!5e0!3m2!1sen!2sng!4v1644074814249!5m2!1sen!2sng"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
  {/* Directions */}
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">
      Directions
    </h3>
    <p className="text-gray-600 mb-2">
      Our office is located in Abuja, Nigeria.
    </p>
    <p className="text-gray-600 mb-2">To get here:</p>
    <ol className="list-decimal text-gray-600 pl-4">
      <li>Take a taxi to the city center.</li>
      <li>
        Once in the city center, head towards Central Business District.
      </li>
      <li>Our office is located near the National Mosque.</li>
    </ol>
  </div>
</div>
</div>
    </div>
  )
}
