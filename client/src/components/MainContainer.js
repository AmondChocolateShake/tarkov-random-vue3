import React from "react";
import TarkovLogo from "./TarkovLogo";
import WeaponBox from "./weapon/WeaponBox";

export default function MainContainer() {
  const container = {
    width: "100vw",
    height: "100vh",
    color: "white",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={container}>
      <TarkovLogo/>
      <WeaponBox/>
    </div>
  );
}
