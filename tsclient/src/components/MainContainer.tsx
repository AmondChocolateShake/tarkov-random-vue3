import InnerContainer from "./InnerContainer";

const MainContainerStyle: React.CSSProperties = {
  width : "100vw",
  height: "100vh",
  color: "white",
  background: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const MainContainer = (): JSX.Element => {
  return <div style={MainContainerStyle}>
    <InnerContainer/>
  </div>;
};

export default MainContainer;
