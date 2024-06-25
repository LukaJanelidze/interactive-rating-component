import React from "react";
import "./Rate.css";

interface RateProps {
  number: number | undefined;
  setNumber: (number: number) => void;
  setSubmit: (submit: boolean) => void;
}

const Rate: React.FC<RateProps> = ({ number, setNumber, setSubmit }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="main">
      <div className="star-circle"><img src={"Images/icon-star.svg"} alt="" /></div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p>
      <div className="stars-box">
        {stars.map((item, index) => (
          <button
            key={index}
            className="stars"
            style={number === item ? { backgroundColor: "#FC7614", color: "white" } : {}}
            onClick={() => setNumber(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        className="submit"
        onClick={() => {
          if (number) setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Rate;
