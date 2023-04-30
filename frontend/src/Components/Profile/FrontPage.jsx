import React, { useEffect } from "react";
import TextSpan from "./TextSpan";

const heading1 = "Mercury";
const heading2 = "Classes";
const TextArray = [Array.from(heading1), Array.from(heading2)];
const FrontPage = () => {

  useEffect(() => {
    const chars = document.getElementsByClassName("headingChar");
    // console.log(chars);
    setInterval(()=>{
      var it = Math.floor(Math.random()*(chars.length));
      chars[it].classList.add("rubber");
      // console.log(it);
      setTimeout(() => {
        chars[it].classList.remove("rubber");
        // console.log("done");
      }, 1000);
    },1500)

  }, [])
  
  window.addEventListener("load",()=>{
    document.getElementById("loader").style.visibility = "hidden";
  })

  return (
    <>
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
    </>
  );
};

export default FrontPage;
