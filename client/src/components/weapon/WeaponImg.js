import React from "react";
import { UserContext } from "../InnerContainer";

export default function WeaponImg() {
  const data = React.useContext(UserContext);

  const imgBox = {
    width: "60%",
    height: "50%",
    backgroundColor: "rgba(158, 158, 158, 1)",
    border: "2px solid white",
    borderRadius: 5,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const img = {
    width: "100%",
    height: "80%",
    // objectFit: "contain",
    borderBottom: "2px solid white",
  };
  const name = {
    textAlign: "center",
    height: "20%",
    overflow: "auto",
    color: "rgba(30, 30, 30, 0.8)",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "bendereglarbold",
  };
  return (
    <div style={imgBox}>
      <img style={img} src={data.imgLink} overflow alt="weaponImg" />
      <div style={name}>{data.name}</div>
    </div>
  );
}
