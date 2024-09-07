
export function WelcomePage({onStart}) {

  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-screen flex justify-center items-center font-sans">
      <div className="bg-white flex flex-col items-center justify-center p-5 shadow-white rounded-lg">
        <h1 className="p-2 text-2xl font-bold">
          Welcome to Our Customer Survey
        </h1>
        <p className="pb-2 text-l font-medium">
          We value your feedback. Please take a moment to answer a few
          questions.
        </p>
        <button onClick={onStart} className="bg-black text-white p-2 font-semibold rounded-md">
          Start Survey
        </button>
      </div>
    </div>
  );
}

