import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home"); // redirect to homepage
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-lg font-bold mb-4">Thank you for using Glamstar Beauty World!. We hope to see you again 🎉</h1>
      <p className="text-sm text-gray-600">
        You will be redirected to the homepage shortly...
      </p>
    </div>
  );
};

export default ThankYou;
