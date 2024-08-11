import React, { useState, useEffect } from 'react';
import QuizQuestions from '../QuizQuestions/QuizQuestion';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(QuizQuestions.length).fill(' '));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        if (isSubmitted) {
            return;
          }

      if (timeLeft === 0 && !isSubmitted) {
        handleSubmit();
      } else {
        setTimeLeft(timeLeft === 0 ? 0 : timeLeft - 1);
    
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isSubmitted]);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleOptionSelect = (option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log('Time is up! Submitted answers:', selectedOptions);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="max-w-xl mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">{QuizQuestions[currentQuestion].question}</h2>
        <ul className="mb-4">
          {QuizQuestions[currentQuestion].options.map((option, index) => (
            <li key={index} className="mb-2">
              <button 
                className={`border rounded px-2 py-1 w-[100%] text-left ${selectedOptions[currentQuestion] === option ? 'bg-blue-500 text-white' : 'bg-gray-200 '}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          Time Left: {formatTime(timeLeft)}
        </div>
        <div>
          <button 
            className="mr-2 px-4 py-2 border rounded bg-blue-500 text-white"
            onClick={handlePrev} 
            disabled={currentQuestion === 0 || isSubmitted}
          >
            Previous
          </button>
          {currentQuestion === QuizQuestions.length - 1 && !isSubmitted ? (
            <button 
              className="px-4 py-2 border rounded bg-blue-500 text-white"
              onClick={handleSubmit} 
            >
              Submit
            </button>
          ) : (
            <button 
              className="px-4 py-2 border rounded bg-blue-500 text-white"
              onClick={handleNext} 
              disabled={currentQuestion === QuizQuestions.length - 1 || isSubmitted}
            >
              Next
            </button>
          )}
        </div>
      </div>
      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Your Test is Submitted</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
