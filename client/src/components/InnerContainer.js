import React, { useEffect, useState } from "react";
import ModBox from "./mod/ModBox";
import WeaponBox from "./weapon/WeaponBox";
import LoadComponent from "./load/LoadComponent";
import fetchData from "./api/fetchData.js";
import styled from "styled-components";

export const UserContext = React.createContext();

export default function InnerContainer() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  //fetch 재요청 함수
  const fetchReq = () => {
    if (!isButtonDisabled) {
      console.log("Fetching data...");
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
      }, 3000);
      getFetchData();
    }
  };

  //get 요청
  const getFetchData = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Data! :", error);
    }
  };

  //첫접속 시 무조건 요청 한번
  useEffect(() => {
    if (loading) {
      getFetchData();
    }
  }, [loading]);

  const InnerContainerSty = {
    width: "80vw",
    height: "80vh",
    maxWidth: "800px",
    maxHeigth: "80vh",
    backgroundColor: "#1E1E1E",
    border: "1px solid",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:600px)": {
      
    },
  };

  return (
    <div style={InnerContainerSty}>
      {loading ? (
        <LoadComponent />
      ) : (
        <UserContext.Provider value={data}>
          <WeaponBox callbackClicked={fetchReq} />
          <ModBox />
        </UserContext.Provider>
      )}
    </div>
  );
}
