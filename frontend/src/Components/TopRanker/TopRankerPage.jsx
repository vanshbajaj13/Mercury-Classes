import React from "react";
import Ranker from "./Ranker";

const TopRankerPage = () => {
  return (
    <>
      <div className="rankerPage">
        <div className="rankerHeading">
          <h1>Our Top Rankers</h1>
        </div>
        <div className="rankersDiv">
          <div className="ranker">
            <div className="infoDiv">
              <div className="imgDiv">
                <img src="./Images/memoji.png" alt="ranker1"></img>
              </div>
              <div className="scoreDiv">
                <h2>Piyush jain</h2>
                <p>Phy - 95</p>
                <p>Chem - 94</p>
                <p>Math - 95</p>
              </div>
            </div>
          </div>
          <Ranker></Ranker>
          <div className="ranker">
            <div className="infoDiv">
              <div className="imgDiv">
                <img src="./Images/memoji.png" alt="ranker1"></img>
              </div>
              <div className="scoreDiv">
                <h2>Mehak Saini</h2>
                <p>Phy - 95</p>
                <p>Chem - 94</p>
                <p>Math - 95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRankerPage;
