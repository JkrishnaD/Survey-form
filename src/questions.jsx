import { useEffect, useState } from "react";

export const Question = ({
  question,
  onAnswer,
  onNext,
  onPrev,
  currentQuestionIndex,
  totalQuestions,
  questions,
  goToQuestion,
}) => {
  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("inputValues")) || {};

    if (!savedAnswers[question.id]) {
      setInputValue("");
    }
    setInputValue(savedAnswers[question.id])
  }, [currentQuestionIndex]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const savedAnswers = JSON.parse(localStorage.getItem("inputValues")) || {};
    savedAnswers[question.id] = value;
    localStorage.setItem("inputValues", JSON.stringify(savedAnswers));
    onAnswer(question.id, e.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative bg-gradient-to-tr from-blue-400 to-sky-400 h-screen flex justify-center items-center flex-col">
      <div className="bg-white flex flex-col justify-center items-center p-3 rounded-md lg:w-[500px] gap-y-4">
        <h2 className="font-bold flex items-center justify-center gap-4 w-full px-4">
          <span>Questions</span>
          <span>
            {currentQuestionIndex + 1}/{totalQuestions}
          </span>
        </h2>
        <p className="font-medium">
          <span className="px-2">{currentQuestionIndex + 1}.</span>
          {question.text}
        </p>
        {question.type === "rating" && (
          <input
            className="border-2"
            type="number"
            min={question.range[0]}
            max={question.range[1]}
            value={inputValue}
            onChange={handleInput}
          />
        )}
        {question.type === "text" && (
          <textarea
            className="border"
            value={inputValue}
            onChange={handleInput}
          />
        )}
        <div className="space-x-4">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => goToQuestion(index)}
              className={`rounded-full p-3 border ${
                currentQuestionIndex === index
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center w-full ">
          <button
            className="bg-black text-white p-2 rounded-md font-semibold cursor-pointer disabled:cursor-not-allowed"
            onClick={onPrev}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-black text-white p-2 rounded-md font-semibold cursor-pointer disabled:cursor-not-allowed"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
