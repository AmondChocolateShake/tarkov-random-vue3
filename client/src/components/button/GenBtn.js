import { useState } from "react";

export default function GenBtn() {
  const [isHovering, setHovering] = useState(false);

  const btn = {
    width: "20%",
    height: "50%",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: 5,
    border: "2px solid white",

    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  };

  const hoverdBtn = {
    width: "20%",
    height: "50%",
    backgroundColor: "black",
    cursor: "pointer",
    borderRadius: 5,
    border: "2px solid white",

    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  };

  const clicked = () => {
    console.log("clicked");
  };
  const handleMouseDown = () => {
    setHovering(true);
  };
  const handleMouseOver = () => {
    setHovering(false);

  };
  return (
    <div
      style={isHovering ? btn : hoverdBtn}
      onClick={clicked}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseDown}
    >
      Generate
    </div>
  );
}
