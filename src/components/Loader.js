import { useState, useEffect } from "react";



const Loader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        if (nextPercentage <= 100) {
          return nextPercentage;
        } else {
          clearInterval(interval); // Stop the interval once the percentage reaches 100
          return prevPercentage;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full border-t-4 border-purple-700 border-opacity-50 h-16 w-16">
      <div className="absolute inset-0 flex items-center justify-center text-white">
          <span className="text-xl text-purple-700 font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
