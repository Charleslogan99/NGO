import React, { useEffect, useState } from 'react';


const CountingNumbers = () => {
  const [donationCount, setDonationCount] = useState(0);
  const [fundRaisedCount, setFundRaisedCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (donationCount < 850) {
        setDonationCount(prevCount => prevCount + 1); // Adjust increment for faster counting
      }
    }, 1);
    return () => clearInterval(interval);
  }, [donationCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fundRaisedCount < 5000) {
        setFundRaisedCount(prevCount => prevCount + 5); // Adjust increment for faster counting
      }
    }, 1);
    return () => clearInterval(interval);
  }, [fundRaisedCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < 50) {
        setCount1(prevCount => prevCount + 1); // Adjust increment for faster counting
      }
    }, 1);
    return () => clearInterval(interval);
  }, [count1]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count2 < 30) {
        setCount2(prevCount => prevCount + 1); // Adjust increment for faster counting
      }
    }, 1);
    return () => clearInterval(interval);
  }, [count2]);

  return (
    <div className=" bg-purple-700 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-white text-center p-4">
          <h2 className="text-4xl font-bold mb-2">{donationCount} +</h2>
          <p>Donations</p>
        </div>
        <div className="text-white text-center p-4">
          <h2 className="text-4xl font-bold mb-2">${fundRaisedCount} +</h2>
          <p>Fund Raised</p>
        </div>
        <div className="text-white text-center p-4">
          <h2 className="text-4xl font-bold mb-2">{count1} +</h2>
          <p>Projects Completed</p>
        </div>
        <div className="text-white text-center p-4">
          <h2 className="text-4xl font-bold mb-2">{count2} +</h2>
          <p>Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default CountingNumbers;
