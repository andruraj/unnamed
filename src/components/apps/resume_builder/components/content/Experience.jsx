import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div>
      <p>Experience</p>
      <footer
        style={{
          bottom: 0,
          position: "absolute",
          width: "92%",
          margin: "1rem 0",
        }}
      >
        <Link className="btn" to="/resume-builder/" style={{ float: "left" }}>
          Back
        </Link>
        <Link
          className="btn"
          to="/resume-builder/education"
          style={{ float: "right" }}
        >
          Next
        </Link>
      </footer>
    </div>
  );
};

export default Experience;
