import React from "react";
import ModBox from "./mod/ModBox";
import WeaponImg from "./weapon/WeaponImg";

export default function InnerContainer() {
  const InnerContainer = {
    width: "60vw",
    height: "80vh",
    backgroundColor: "#1E1E1E",
    border: "1px solid",
    borderRadius: "5px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <div style={InnerContainer}>
      <WeaponImg />
      <ModBox/>
    </div>
  );
}
