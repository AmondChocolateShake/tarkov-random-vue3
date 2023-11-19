import React, { useEffect, useState } from "react";
import ModBox from "./mod/ModBox";
import WeaponBox from "./weapon/WeaponBox";
import data from "../dummy.json";
export const UserContext = React.createContext();

export default function InnerContainer() {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost/5000/data", {
  //         method: "GET",
  //         headers: {
  //           "Context-Type": "application/json; charset=utf-8",
  //         },
  //       });
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching Data :", error);
  //     }
  //   };
  //   fetchData();
  //   setLoading(false);
  // }, [data]);

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
