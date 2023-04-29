import React from "react";
import TextSpan from "./TextSpan";

const heading1 = "Mercury";
const heading2 = "Classes";
const TextArray = [Array.from(heading1), Array.from(heading2)];
const FrontPage = () => {
  return (
    <section>
      <div className="frontPage">
        <div className="imageDiv">
          <div class="bg-image"></div>

          <div class="bg-text">
            <h1>Knowledge is Power - Let Us Help You Harness It</h1>
            <p>~ Er Himanshu Girdhar</p>
          </div>
        </div>
        <div className="textContainer">
          <h1>
            {TextArray[0].map((ch, index) => {
              return <TextSpan key={index} text={ch}></TextSpan>;
            })}
            <br></br>
            {TextArray[1].map((ch, index) => {
              return <TextSpan key={index} text={ch}></TextSpan>;
            })}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
