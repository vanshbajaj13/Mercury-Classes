import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [navBarToggle, setNavBarToggle] = useState("showNav");

  var oldScrollY = window.scrollY;

  document.addEventListener("scroll", (event) => {
    var scrollDiff = oldScrollY - window.scrollY;
    if (scrollDiff < -7) {
      setNavBarToggle("hideNav-enter");
    } else if (scrollDiff > 7) {
      setNavBarToggle("showNav-enter");
    }
    oldScrollY = window.scrollY;
  });

  useEffect(() => {
    const hg = document.getElementById("HG");
    hg.addEventListener("mouseover", () => {
      hg.classList.add("rubber");
      setTimeout(() => {
        hg.classList.remove("rubber");
      }, 1000);
    });
  }, []);

  return (
    <div>
      <header className={navBarToggle}>
        <h1 className="HG" id="HG">
          HG
        </h1>
        <h1 className="HG teel">.</h1>
        <ul>
          <li>
            <a href="#top">
              <h1>
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter

                      .deleteAll()
                      .typeString("Mercury Classes")
                      .pauseFor(1000)
                      .typeString("...")
                      .deleteAll()
                      .typeString("Er. Himanshu Girdhar")
                      .deleteAll()
                      .typeString(".")
                      .pauseFor(1000)
                      .typeString(".")
                      .pauseFor(1000)
                      .typeString(".")
                      .deleteAll()
                      .start();
                  }}
                />
              </h1>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
