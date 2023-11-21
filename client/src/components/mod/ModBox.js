import React from "react";
import ModList from "./ModList";
import styled from "styled-components";

const ModBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 1);
  borderradius: 5;
`;
export default function ModBox() {
  return (
    <ModBoxContainer>
      <ModList />
    </ModBoxContainer>
  );
}
