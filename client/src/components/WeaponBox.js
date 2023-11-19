import React from "react";
import WeaponList from "./weapon/WeaponList";
import ModList from "./weapon/ModList";

export default function WeaponBox() {
  const WeaponBox = {
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
    <div style={WeaponBox}>
      <WeaponList />
      <ModList/>
    </div>
  );
}
