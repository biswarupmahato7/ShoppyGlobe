import React from "react";
import Navbar from "./Navbar";
import FilterSection from "./FilterSection";
import Advertise from "./advertisement/Advertise";
import AllItem from "./Items/AllItem";

const Home = () => {
  return (
    <>
      <div>
        
        <FilterSection/>
        <Advertise/>
        <AllItem/>
      </div>
    </>
  );
};

export default Home;
