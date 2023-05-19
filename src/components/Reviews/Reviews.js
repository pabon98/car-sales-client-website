import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://carsales-server.onrender.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div >
      <h4 className=" text-center mt-4">Our Customers Reviews</h4>
      <div className="my-3">
        {/* {reviews.map((review) => (
          <ReviewCard review={review}  key={review._id}>
           
          </ReviewCard>
        ))} */}
        <ReviewCard  reviews={reviews}></ReviewCard>
      </div>
    </div>
  );
};

export default Reviews;