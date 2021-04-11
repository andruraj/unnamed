import React from "react";
import "./index.css";

const App = () => {
  React.useEffect(() => {
    setInterval(() => createBubble(), 250);
  }, []);
  return (
    <div className="resume-builder">
      <div className="bg"></div>
      <p>Components</p>
    </div>
  );
};

export default App;

const createBubble = () => {
  const bg = document.querySelector(".resume-builder > .bg");
  const bubble = document.createElement("span");
  const size = 20 + Math.random() * 60;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * innerWidth + "px";
  bg.append(bubble);

  setTimeout(() => bubble.remove(), 4000);
};
