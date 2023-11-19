import React from "react";
import TarkovLogo from "./logo/TarkovLogo";
import InnerContainer from "./InnerContainer";
import styled from "styled-components";

export default function MainContainer() {
  const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    color: white;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <StyledDiv>
      <TarkovLogo />
      <InnerContainer />
    </StyledDiv>
  );
}
