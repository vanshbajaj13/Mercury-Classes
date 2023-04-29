import React, { useEffect } from "react";
import TextSpan from "./TextSpan";

const heading1 = "Mercury";
const heading2 = "Classes";
const TextArray = [Array.from(heading1), Array.from(heading2)];
const FrontPage = () => {

  useEffect(() => {
    const chars = document.getElementsByClassName("headingChar");
    console.log(chars);
    for (let i = 0; i < chars.length; i++) {
      chars[i].addEventListener("animationend",()=>{
        selectRandom();
      })
    }
    
    function selectRandom() {
      var it = Math.floor(Math.random()*(chars.length));
      console.log(it);
      chars[it].style.animationName = "rubberBand";
      setTimeout(() => {
        chars[it].style.animationName = "";
        }, 1000);
    }

  }, [])
  
  return (
    <section>
      <div className="frontPage">
        <div className="imageDiv">
          <div className="bg-image"></div>

          <div className="bg-text">
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
