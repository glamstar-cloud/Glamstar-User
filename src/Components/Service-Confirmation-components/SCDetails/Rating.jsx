import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please rate before submitting.");
      return;
    }

    onSubmit({ rating, review });
    setRating(0);
    setReview("");
  };

  return (
    <div className="max-w-md sm:w-full px-2 py-4 ">

      {/* Rating stars */}
      <h2 className="font-semibold font-playfair mb-2">Rate your vendor</h2>
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= ( rating);
          return (
            <FaStar
              key={star}
              size={28}
              className={`cursor-pointer transition ${
                isFilled ? "text-yellow-700" : "text-gray-400"
              }`}
              onClick={() => setRating(star)}
            />
          );
        })}
      </div>

      {/* Review text area */}
      <div>
        <h2 className="font-semibold font-playfair mb-2 mt-10">Your Review (optional)</h2>
      <textarea
        className="w-full border p-2 rounded-md outline-none placeholder:text-sm"
        placeholder="Share your detailed experience with the service and vendor..."
        rows={4}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-red-800 text-white py-2 rounded-md hover:bg-red-700 font-medium"
      >Confirm Service</button>
    </div>
  );
};

export default Rating;
