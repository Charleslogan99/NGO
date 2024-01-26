import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Home from './Pages/Home'
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in your actual application)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
                         
    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (

    <div>
      {loading ? (
        <Loader />
      ) : (
        // Your main content goes here once loading is complete
        <div>
          <h1>Your App Content</h1>
          <Home />
        </div>
      
      )}
    </div>
  );
}
