import React from "react";
import { UserContext } from "../InnerContainer";

export default function WeaponImg() {
  const data = React.useContext(UserContext);

  const imgBox = {
    width: "60%",
    height: "inherit",
    backgroundColor: "rgba(158, 158, 158, 1)",
    border: "3px solid white",
    borderRadius: 5,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const img = {
    width: "100%",
    height: "100%",
    borderRadius : "3px"
  };
  const name = {
    textAlign: "center",
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
