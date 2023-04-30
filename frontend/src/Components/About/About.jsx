import React from "react";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".comparisonSection").forEach((section) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + section.offsetWidth,
            scrub: true,
            pin: true,
            anticipatePin: true,
          },
          defaults: { ease: "none" },
        });
        // animate the container one way...
        tl.fromTo(
          section.querySelector(".afterImage"),
          { xPercent: 100, x: 0 },
          { xPercent: 0 }
        )
          // ...and the image the opposite way (at the same time)
          .fromTo(
            section.querySelector(".afterImage img"),
            { xPercent: -100, x: 0 },
            { xPercent: 0 },
            0
          );
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="aboutPage">
      <div className="aboutText">
          <h1>Paint a bright future with education</h1>
          <p>~ Er Himanshu Girdhar</p>
      </div>
      <section className="comparisonSection">
        <div className="comparisonImage beforeImage">
          <img src="./Images/study.jpg" alt="before" loading="lazy"></img>
        </div>
        <div className="comparisonImage afterImage" >
          <img src="./Images/study.jpg" alt="after" loading="lazy"></img>
        </div>
      </section>
    </div>
  );
};

export default About;
