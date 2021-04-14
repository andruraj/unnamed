import React from "react";

const Bubbles = () => {
  return [...Array(25)].map((val, i) => {
    let size = 20 + Math.floor(Math.random() * 60) + "px";
    return (
      <span
        key={i}
        style={{
          width: size,
          height: size,
          left: Math.random() * innerWidth + "px",
          animationDelay: Math.random() * 4 + "s",
        }}
      ></span>
    );
  });
};

export default Bubbles;

// const createBubble = () => {
//   const bg = document.querySelector(".app > .bg");

//   if (bg !== null) {
//     const bubble = document.createElement("span");
//     const size = 20 + Math.random() * 60;

//     bubble.style.width = size + "px";
//     bubble.style.height = size + "px";
//     bubble.style.left = Math.random() * innerWidth + "px";
//     bg.append(bubble);

//     setTimeout(() => bubble.remove(), 4000);
//   }
// };

// export default createBubble;
