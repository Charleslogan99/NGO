import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="google_translate_element" className="fixed top-0 left-0 z-50 p-4"></div>
  );
};

export default GoogleTranslate;
