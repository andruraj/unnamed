import React from "react";
import "./App.css";

import NavBar from "./components/navigation/NavBar";
import Profile from "./components/profile/Main";

const App = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <WaveBg>
      <NavBar className={scroll ? "scrolled" : ""} />
      <Profile />
    </WaveBg>
  );
};

export default App;

const WaveBg = ({ children }) => (
  <div className="wave-bg">
    <div className="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="content">{children}</div>
  </div>
);
