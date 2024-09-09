export function WelcomePage({ onStart }) {
  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-screen flex justify-center items-center font-sans">
      <div className="bg-white flex flex-col items-center justify-center p-5 space-y-2 shadow-white rounded-lg">
        <h1 className="p-2 text-2xl font-bold">
          Welcome to Our Customer Survey
        </h1>
        <p className="pb-2 text-l font-medium flex flex-col justify-center items-center">
          <span>We value your feedback.</span>{" "}
          <span>Please take a moment to answer a few questions.</span>
        </p>
        <button
          onClick={onStart}
          className="bg-black text-white p-2 font-semibold rounded-md hover:shadow-black hover:shadow-md hover:bg-white hover:text-black transition-all ease-in-out duration-300"
        >
          Start Survey
        </button>
      </div>
    </div>
  );
}
