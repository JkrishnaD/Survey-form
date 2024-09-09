import React, { useState, useEffect } from "react";
import { Question } from "./questions";
import { WelcomePage } from "./components/welcomePage";
import { ThankyouPage } from "./components/thankyouPage";

const App = () => {
  const questions = [
    {
      id: 1,
      text: "How satisfied are you with our products?",
      type: "rating",
      range: [1, 5],
    },
    {
      id: 2,
      text: "How fair are the prices compared to similar retailers?",
      type: "rating",
      range: [1, 5],
    },
    {
      id: 3,
      text: "How satisfied are you with the value for money of your purchase?",
      type: "rating",
      range: [1, 5],
    },
    {
      id: 4,
      text: "On a scale of 1-10, how would you recommend us to your friends and family?",
      type: "rating",
      range: [1, 10],
    },
    { id: 5, text: "What could we do to improve our service?", type: "text" },
  ];

  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      const newSessionId = `session-${new Date().getDate()}`;
      setSessionId(newSessionId);
    }
  }, [sessionId]);

  const startSurvey = () => setStarted(true);

  const handleAnswer = (questionId, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = {
      questionId,
      answer: answer || null,
    };
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSurveySubmit();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSurveySubmit = () => {
    if (window.confirm("Are you sure you want to submit the survey?")) {
      localStorage.setItem(
        sessionId,
        JSON.stringify({ answers, status: "COMPLETED" })
      );
      setIsSubmitted(true);
      localStorage.removeItem("inputValues");
      setTimeout(() => {
        setStarted(false);
        setCurrentQuestionIndex(0);
      }, 5000);
    }
  };

  if (!started) {
    return <WelcomePage onStart={startSurvey} />;
  }

  if (isSubmitted) {
    return <ThankyouPage message="Thank you for your time! Bye👋" />;
  }

  return (
    <>
      <Question
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrev={handlePrev}
        questions={questions}
        goToQuestion={goToQuestion}
      />
    </>
  );
};

export default App;
