import React from "react";
import './RatingResult.css';

interface RatingResultProps {
  number: number | undefined;
}

const RatingResult: React.FC<RatingResultProps> = ({ number }) => {
  return (
    <div className="result-main">
      <div className="image"><img src={"Images/illustration-thank-you.svg"} alt="Illustration" /></div>
      <span>You selected {number} out of 5</span>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. 
         If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
};

export default RatingResult;
