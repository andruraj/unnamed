import React from "react";
import Navigation from "./components/navigation";
import "./index.css";

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <Navigation />
      <div className="content"></div>
    </div>
  );
};

export default ResumeBuilder;
