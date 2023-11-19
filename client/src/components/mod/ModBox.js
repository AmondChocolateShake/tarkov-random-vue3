import React from "react";
import ModList from "./ModList";

export default function ModBox() {
  const list = {
    display : "flex",
    justifyContent : "center",
    width: "100%",
    height: "60%",
    backgroundColor: "rgba(0, 0, 0, 1)",
  };
  return (
    <div style={list}>
      <ModList />
    </div>
  );
}
