import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    // Add more questions as needed
  ];

  return (
    <div>
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold cursor-pointer" onClick={() => handleToggle(index)}>
              {item.question}
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-300 ease-in-out" viewBox="0 0 20 20" fill="currentColor" rotate={activeIndex === index ? '180' : '0'} onClick={() => handleToggle(index)}>
              <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          {activeIndex === index && (
            <p className="text-gray-600 mt-2">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
