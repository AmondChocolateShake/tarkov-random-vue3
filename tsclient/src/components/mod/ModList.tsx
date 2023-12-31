import React from "react";
import { UserContext } from "../InnerContainer";
import styled from "styled-components";
import { WeaponData } from "../interface/interface";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  overflow: scroll;
`;

// List 스타일드 컴포넌트
const List = styled.div`
  width: 100%;
  background-color: rgba(30, 30, 30, 1);
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid white;
`;

// ModImg 스타일드 컴포넌트
const ModImg = styled.img`
  width: 50%;
  height: 100%;
  max-height: 100px;
  border-right: 1px solid white;
  object-fit: contain;
`;

// Text 스타일드 컴포넌트
const Text = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-family: bendereglar;
`;

export default function ModList() {
  const data: WeaponData | undefined = React.useContext(UserContext);

  if (!data) {
    return <div>Weapon IMG Loading...</div>;
  }

  return (
    <Container>
      {data.modSlots.map((modSlot: WeaponData["modSlots"][0], index: number) => (
        <List key={index}>
          <ModImg src={modSlot.imgLink} alt={modSlot.name}></ModImg>
          <Text>{modSlot.name}</Text>
        </List>
      ))}
    </Container>
  );
}
