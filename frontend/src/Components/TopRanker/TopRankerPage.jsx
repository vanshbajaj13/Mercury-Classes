import React from "react";
import Ranker from "./Ranker";

const TopRankerPage = () => {
  return (
    <section>
      <div className="rankerPage">
        <div className="rankerHeading">
          <h1>Our Top Rankers</h1>
        </div>
        <div className="rankersDiv">
            <Ranker></Ranker>
            <Ranker></Ranker>
            <Ranker></Ranker>
        </div>
      </div>
    </section>
  );
};

export default TopRankerPage;
