import React from "react";
import { Link } from "react-router";

const EmpthyLine = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
        <div className="max-w-md">
          
        
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No interactions have happened
          </h2>
          <p className="text-gray-500 leading-relaxed">
            No interactions have happened yet. Once activity begins, you'll see
            the history and details appear right here.
          </p>

          <Link to={'/'} className="btn  bg-green-900 text-white font-semibold mt-5"> Go back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default EmpthyLine;
