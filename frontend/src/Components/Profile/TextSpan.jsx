import React, { useEffect } from "react";

const TextSpan = (props) => {
  useEffect(() => {
    const sp = document.getElementsByClassName("headingChar");
    for (let i = 0; i < sp.length; i++) {
      sp[i].addEventListener("mouseover", () => {
        // console.log("mouser on");
        sp[i].classList.add("rubber");
        setTimeout(() => {
          sp[i].classList.remove("rubber");
        }, 1000);
      });
    }
  }, []);
  return <span className="headingChar">{props.text}</span>;
};

export default TextSpan;
