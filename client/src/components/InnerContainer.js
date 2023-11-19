import React from "react";
import ModBox from "./mod/ModBox";
import WeaponBox from "./weapon/WeaponBox";
import data from '../dummy.json'

export const UserContext = React.createContext();

export default function InnerContainer() {
  const InnerContainer = {
    width: "80vw",
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
      <UserContext.Provider value={data}>
        <WeaponBox />
        <ModBox />
      </UserContext.Provider>
    </div>
  );
}
