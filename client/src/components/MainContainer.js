import React from "react";

export default function MainContainer() {
  const container = {
    width: "100vw",
    height : "100vh",
    color: "white",
    background: "black",
    display : "flex",
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
  };
  return <div style={container}>mainBox</div>;
}
