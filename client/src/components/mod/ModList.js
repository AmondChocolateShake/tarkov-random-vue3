import React from "react";
import data from "../../dummy.json";

export default function ModList() {
  const container = {
    display : "flex",
    flexDirection : "row",
    height: "100%",
    width : "100%",
    flexWrap : "wrap",
    overflow : "scroll"
  }
  const list = {
    width: "30%",
    height: "20%",
    backgroundColor: "rgba(30, 30, 30, 1)",
    margin: 20,
    display : "flex",
    flexDirection : "row",
    borderRadius : 5,
  };
  const modImg = {
    display: "flex",
    objectFit: "cover",
  };
  const text = {
    color: "white",
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
