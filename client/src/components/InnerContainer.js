import React, { useEffect, useState } from "react";
import ModBox from "./mod/ModBox";
import WeaponBox from "./weapon/WeaponBox";
import LoadComponent from "./load/LoadComponent";
import fetchData from './fetchData.js'

export const UserContext = React.createContext();

export default function InnerContainer() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  //fetch 재요청 함수
  const fetchReq = () =>{
    fetchData();
  }

  useEffect(() => {
    if (loading) {
      setData(fetchData());
    }
  }, []);

  const InnerContainer = {
    width: "80vw",
    height: "80vh",
    maxWidth : "800px",
    backgroundColor: "#1E1E1E",
    border: "1px solid",
    borderRadius: "5px",

    display: "flex",
    flexDirection: "column",
  };

  

  return (
    <div style={InnerContainer}>
      {loading ? (
        <LoadComponent/>
      ) : (
        <UserContext.Provider value={data}>
          <WeaponBox callbackClicked={fetchReq} />
          <ModBox />
        </UserContext.Provider>
      )}
    </div>
  );
}
