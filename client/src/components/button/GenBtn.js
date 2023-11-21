import { useState } from "react";

export default function GenBtn({ callbackClicked }) {
  const [isHovering, setHovering] = useState(false);
  // const [isClicked, setClicked] = useState(false);

  const btn = {
    width: "20%",
    height: "50%",
    backgroundColor: "rgba(217, 217, 217, 1)",
    cursor: "pointer",
    borderRadius: 5,
    border: "3px solid white",

    textAlign: "center",
    wordBreak: "break-all",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "rgba(0,0,0, 0.8)",
    fontWeight: "bold",
    fontSize: 30,
  };

  const hoverdBtn = {
    width: "20%",
    height: "50%",
    backgroundColor: "black",
    borderRadius: 5,
    border: "3px solid white",

    textAlign: "center",
    wordBreak: "break-all",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "rgba(255,255,255, 0.7)",
    fontWeight: "bold",
    fontSize: 30,
  };
  const gentext = {
    fontFamily: "bendereglarbold",
  };
  const clicked = () => {
    callbackClicked();
    setHovering(true);
    const intervalId = setInterval(() => {
      clearInterval(intervalId);
      setHovering(false)
    }, 3000);
  };

  return (
    <div
      style={isHovering ? hoverdBtn : btn}
      onClick={clicked}
    >
      <div style={gentext}>Generate</div>
    </div>
  );
}
