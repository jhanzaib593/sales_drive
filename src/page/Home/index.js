import React from "react";
import Banner from "../../components/banner";
import Service from "../../components/service";
import Project from "../../components/project";
import Offers from "../../components/offers";
import Contact from "../../components/contact";

function Home() {
  return (
    <>
      <div className="container">
        <Banner />
      </div>
      <Service />
      <div className="container">
        <Project />
      </div>
      <Offers />
      <div className="container">
        <Contact />
      </div>
    </>
  );
}

export default Home;
