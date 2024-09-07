import { useEffect, useState } from "react";
import { Note } from "./components/note";

export const Question = ({
  question,
  onAnswer,
  onNext,
  onPrev,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onAnswer(question.id, e.target.value);
  };
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [currentQuestionIndex]);

  return (
    <div className="relative bg-gradient-to-tr from-blue-400 to-sky-400 h-screen flex justify-center items-center flex-col">
      <div className="bg-white flex flex-col justify-center items-center p-3 rounded-md lg:w-[500px] gap-y-4">
        <h2 className="font-bold flex items-center justify-center gap-4 w-full px-4">
          <span>Questions</span>
          <span>
            {currentQuestionIndex + 1}/{totalQuestions}
          </span>
        </h2>
        <p className="font-medium">{question.text}</p>
        {question.type === "rating" && (
          <input
            className="border"
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
        <div className="flex flex-row justify-between items-center w-full ">
          <button
            className="bg-black text-white p-2 rounded-md font-semibold"
            onClick={onPrev}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-black text-white p-2 rounded-md font-semibold"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
      <div className="bottom-0 absolute">
        <Note />
      </div>
    </div>
  );
};
