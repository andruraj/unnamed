import React from "react";
import Card from "../card";

const Home = ({ comp = [] }) => {
  return (
    <div className="home">
      {comp.map((c, i) => (
        <Card title={c.title} content={c.description} route={c.route} key={i} />
      ))}
    </div>
  );
};

export default Home;
