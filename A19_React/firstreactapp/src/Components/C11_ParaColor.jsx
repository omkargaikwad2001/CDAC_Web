import { useState } from "react";

const ParaColor = () => {
  const [color, setColor] = useState("black"); // initial color

  return (
    <>
      <p
        style={{ color: color }}
        onClick={() => setColor("red")} // update color on click
      >
        This is paragraph
      </p>
    </>
  );
};

export { ParaColor };
