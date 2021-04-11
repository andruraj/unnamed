import React from "react";
import { TiltPerspective } from "../utilities/Utils";

import ProfileAvatar from "./profileAvatar.png";

const Main = () => {
  return (
    <div className="profile">
      <Intro />
    </div>
  );
};

export default Main;

const Intro = () => (
  <div className="intro">
    <TiltPerspective
      options={{
        max: 10,
        perspective: 1000,
        scale: 1.05,
      }}
    >
      <span>
        <big>Web Developer</big>
        <small>
          I am a professional Full-Stack Developer based in Tamil Nadu, India
          with over 4 years of experience in delivering high quality responsive
          websites and exceptional user interface.
        </small>
      </span>
      <span>
        <img src={ProfileAvatar} height="150" />
      </span>
    </TiltPerspective>
  </div>
);
