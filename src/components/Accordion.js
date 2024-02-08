import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What support services do you provide for widows?",
      answer:
        "Our NGO provides a range of support services for widows, including financial assistance, vocational training, counseling, legal aid, and access to healthcare facilities.",
    },

    {
      question: "How can widows access financial assistance through your NGO?",
      answer:
        "Widows can apply for financial assistance by filling out our application form available on our website or by visiting our office during working hours. Our team will review each application and provide assistance based on eligibility criteria.",
    },
    {
      question: "Are there any educational programs available for widows?",
      answer:
        "Yes, we offer educational programs tailored to the needs of widows, including adult education classes, skill-building workshops, and scholarship opportunities for widows and their children.",
    },
    {
      question: "Do you offer counseling or mental health support for widows?",
      answer:
        "Absolutely. We understand the emotional challenges widows may face, and our organization offers professional counseling services to provide emotional support and guidance during difficult times.",
    },

    {
      question:
        "Can widows receive legal assistance through your organization?",
      answer:
        "Yes, widows can seek legal assistance through our organization for matters such as inheritance rights, property disputes, and legal documentation. Our legal team is here to help navigate through legal processes.",
    },
    {
      question:
        "What resources are available for widows seeking employment or vocational training?",
      answer:
        "We provide various resources for widows interested in gaining employment or vocational training, including job placement services, vocational skills training programs, and entrepreneurship development initiatives.",
    },
    {
      question: "How do I apply for housing assistance as a widow?",
      answer:
        "Widows in need of housing assistance can submit an application through our housing program. Our team will assess each application based on specific criteria and provide support accordingly.",
    },
    {
      question:
        "Are there support groups or community events for widows to connect with others?",
      answer:
        "es, we organize support groups, community gatherings, and empowerment events where widows can connect with others, share experiences, and receive encouragement and support from their peers.",
    },
    {
      question:
        "What steps do I need to take to become a beneficiary of your NGO's programs?",
      answer:
        "To become a beneficiary, widows can reach out to our organization through our contact channels, attend informational sessions, or visit our office to learn about available programs and eligibility criteria.",
    },
    {
      question:
        "How can I volunteer or contribute to support widows through your organization?",
      answer:
        "We welcome volunteers and contributions from individuals who want to support widows in our community. You can explore volunteer opportunities on our website or contact us directly to learn about ways to contribute.",
    },
  ];

  return (
    <div>
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-8">
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-purple-700 font-semibold cursor-pointer" onClick={() => handleToggle(index)}>
              {item.question}
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer text-purple-700 w-6 transform transition-transform duration-300 ease-in-out" viewBox="0 0 20 20" fill="currentColor" rotate={activeIndex === index ? '180' : '0'} onClick={() => handleToggle(index)}>
              <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          {activeIndex === index && (
            <p className="text-gray-900 mt-8">{item.answer}</p>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default Accordion;
