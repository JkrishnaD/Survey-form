
export function ThankyouPage({message}) {

    return (
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-screen flex justify-center items-center font-sans">
        <div className="bg-white flex flex-col items-center p-5 shadow-white rounded-lg">
          <p className="pb-2 text-l font-medium">
            {message}
          </p>
        </div>
      </div>
    );
  }
  
  