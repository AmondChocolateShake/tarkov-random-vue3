import React from "react";
import styled from "styled-components";
import { UserContext } from "../InnerContainer";

const ImgBox = styled.div`
  width: 60%;
  @media screen and (max-width: 600px) {
    width : 80%;
    height : 70%;
    flex-direction : column;

  }
  height: inherit;
  background-color: rgba(158, 158, 158, 1);
  border: 3px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ModImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const ModName = styled.div`
  text-align: center;
  color: rgba(30, 30, 30, 0.8);
  font-weight: bold;
  font-size: 20px;
  font-family: bendereglarbold;
`;

const WeaponImg = () => {
  const data = React.useContext(UserContext);

  return (
    <ImgBox>
      <ModImg src={data.imgLink} alt="weaponImg" />
      <ModName>{data.name}</ModName>
    </ImgBox>
  );
};

export default WeaponImg;
