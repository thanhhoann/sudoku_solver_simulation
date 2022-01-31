import React from "react";

export default function Cell({ num }) {
  const colors = [
    { name: "#FF0075" }, // 0
    { name: "#00C1D4" }, // 1
    { name: "#FFEEAD" }, // 2
    { name: "#39A388" }, // 3
    { name: "#7900FF" }, // 4
    { name: "#548CFF" }, // 5
    { name: "#F55C47" }, // 6
    { name: "#676FA3" }, // 7
    { name: "#FFAB4C" }, // 8
    { name: "#D5D5D5" }, // 9
  ];

  return (
    <>
      <div className="cell" style={{ backgroundColor: `${colors[num].name}` }}>
        {num}
      </div>
    </>
  );
}
