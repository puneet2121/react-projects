import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prev = () => {
    setIndex((index) => {
      let newValue = index - 1;
      return newValue;
    });
  }
  const next = () => {
    setIndex((index) => {
      let newValue = index + 1;
      return newValue;
    });
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt=" " className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" >Random</button>
    </article>
  );
};

export default Review;
