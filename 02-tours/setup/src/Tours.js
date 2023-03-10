import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {props.tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTours={props.removeTours}></Tour>
      })}
    </div>
  </section>
  );
};

export default Tours;
