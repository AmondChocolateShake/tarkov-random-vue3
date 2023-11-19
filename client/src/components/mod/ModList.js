import React from "react";
import { UserContext } from "../InnerContainer";
// import '../../font.css'

export default function ModList() {

  const data = React.useContext(UserContext);
  
  const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    overflow: "scroll",
  };
  const list = {
    width: "40%",
    height: "20%",
    backgroundColor: "rgba(30, 30, 30, 1)",
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    border: "1px solid white",
  };
  const modImg = {
    width: "100%",
    height: "100%",
    borderRight: "1px solid white",
    display: "flex",
    objectFit: "contain",
  };
  const text = {
    display: "flex",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    margin: 5,
    fontFamily: "bendereglar",
  };
  return (
    <div style={container}>
      {data.modSlots.map((modSlot, index) => (
        <div style={list}>
          <img
            key={modSlot.id}
            style={modImg}
            src={modSlot.imgLink}
            alt={modSlot.name}
          ></img>
          <div style={text}>{modSlot.name}</div>
        </div>
      ))}
    </div>
  );
}
