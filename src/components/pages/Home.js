import React from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div style={{ paddingTop: "70px" }} className="container">
      <div className="py-4">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
