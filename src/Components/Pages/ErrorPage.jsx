import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="text-center max-w-md w-full">

        
        <h1 className="text-8xl font-extrabold text-green-600 animate-bounce">
          404
        </h1>

        
        <div className="flex justify-center mt-4">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
            <span className="text-4xl">😵</span>
          </div>
        </div>

        
        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          Page Not Found
        </h2>

       
        <p className="mt-3 text-base-content/70 text-sm md:text-base">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        
        <p className="mt-4 text-green-600 font-semibold">
          Redirecting in {countdown} seconds...
        </p>

        
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-success w-full sm:w-auto"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="btn btn-success text-white w-full sm:w-auto"
          >
            Go Home
          </Link>

        </div>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-base-content/50">
          Error Code: PAGE_NOT_FOUND
        </p>

      </div>
    </div>
  );
};

export default ErrorPage;