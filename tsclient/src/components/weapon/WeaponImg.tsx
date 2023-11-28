import React from "react";
import styled from "styled-components";
import { UserContext } from "../InnerContainer";
import { IData } from "../interface/interface";
import data from '../../dummy.json'

const ImgBox = styled.div`
  width: 50%;
  height: 50%;
  @media screen and (max-width: 600px) {
    width: 50%;
    height: 50%;
  }
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
  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

const ModName = styled.div`
  text-align: center;
  color: rgba(30, 30, 30, 0.8);
  font-weight: bold;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    font-size: 100%;
  }
  font-family: bendereglarbold;
`;

const WeaponImg = () => {
  const data: IData | undefined = React.useContext(UserContext);

  if (!data) {
    return <div>Loading...</div>; // 또는 에러 메시지를 표시하는 등의 처리
  }

  return (
    <ImgBox>
      <ModImg src={data.imgLink} alt="weaponImg" />
      <ModName>{data.name}</ModName>
    </ImgBox>
  );
};

export default WeaponImg;
