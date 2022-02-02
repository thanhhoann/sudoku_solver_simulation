import React, { useEffect, useState } from "react";

export default function Cell({ num, index, isReset }) {
  const [content, setContent] = useState();

  const colors = [
    { name: "#FDD2BF" }, // 0
    { name: content ? "#00C1D4" : "white" }, // 1
    { name: content ? "#D96098" : "white" }, // 2
    { name: content ? "#39A388" : "white" }, // 3
    { name: content ? "#7900FF" : "white" }, // 4
    { name: content ? "#548CFF" : "white" }, // 5
    { name: content ? "#F55C47" : "white" }, // 6
    { name: content ? "#676FA3" : "white" }, // 7
    { name: content ? "#FFAB4C" : "white" }, // 8
    { name: content ? "#D5D5D5" : "white" }, // 9
    { name: content ? "#D5D5D5" : "white" }, // 9
    { name: content ? "#D5D5D5" : "white" }, // 9
  ];

  setTimeout(() => {
    num != 10 && setContent(num + 1);
  }, index * 10);

  let time_transition = index * 0.03;

  return (
    <>
      <div className="cell">
        <div
          class="side top"
          style={{
            backgroundColor: `${colors[num].name}`,
            transition: `${time_transition}s cubic-bezier(0.39, 0.575, 0.565, 1)`,
          }}
        ></div>
        <div
          class="side left"
          style={{
            backgroundColor: `${colors[num].name}`,
            transition: `${time_transition}s cubic-bezier(0.39, 0.575, 0.565, 1)`,
          }}
        ></div>
        <div
          class="side front"
          style={{
            backgroundColor: `${colors[num].name}`,
            transition: `${time_transition}s cubic-bezier(0.39, 0.575, 0.565, 1)`,
            transform: num == 10 && `rotateX(0deg)`,
          }}
        >
          <div className="text">{num != 10 && content}</div>
        </div>
      </div>
    </>
  );
}
