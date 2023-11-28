import styled from "styled-components";
import InnerContainer from "./InnerContainer";

const MainContainerStyle = styled.div`
  width: "100vw";
  height: "100vh";
  color: "white";
  background: "black";
  display: "flex";
  flexdirection: "column";
  justifycontent: "center";
  alignitems: "center";
`;

const MainContainer = (): JSX.Element => {
  return (

    <MainContainerStyle>
      <InnerContainer />
    </MainContainerStyle>
  );
};

export default MainContainer;
