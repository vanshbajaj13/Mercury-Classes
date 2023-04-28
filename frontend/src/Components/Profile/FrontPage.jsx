import React from "react";
import TextSpan from "./TextSpan";

const heading1 = "Mercury";
const heading2 = "Classes";
const TextArray = [Array.from(heading1),Array.from(heading2)];
const FrontPage = () => {
  return (
    <div>
      <div className="frontPage">
        <img src="./Images/Profile.jpg" alt="profile" className="profile"></img>
        <div className="textContainer">
        <h1>
          {TextArray[0].map((ch, index) => {
            return(
            <TextSpan key={index} text={ch}></TextSpan>
            )
          })}
          <br>
          </br>
          {TextArray[1].map((ch, index) => {
            return(
            <TextSpan key={index} text={ch}></TextSpan>
            )
          })}
        </h1>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
