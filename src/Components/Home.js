import React from "react";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import "./scss/home.css";
import MenShoeBanner from "./MenShoeBanner";
import Banner3 from "./Banner3";

function Home() {
  return (
    <div>
      <div className="h">
        <Banner />
        <MenShoeBanner />
        <Banner3 />
        <Banner2 />
      </div>
    </div>
  );
}

export default Home;
