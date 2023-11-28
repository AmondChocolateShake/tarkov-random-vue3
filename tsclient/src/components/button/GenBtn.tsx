import { useState } from "react";
import styled from "styled-components";

const Btn = styled.div`
width: "20%";
height: "50%";
backgroundColor: "rgba(217, 217, 217, 1)";
cursor: "pointer";
borderRadius: 5;
border: "3px solid white";

textAlign: "center";
wordBreak: "break-all";
display: "flex";
justifyContent: "space-evenly";
alignItems: "center";
color: "rgba(0,0,0, 0.8)";
fontWeight: "bold";
fontSize: 30;
'@media (max-width:600px)': {
  fontSize: 10;
},
`;
const HoverdBtn = styled.div`
width: "20%";
height: "50%";
backgroundColor: "black";
borderRadius: 5;
border: "3px solid white";

  text-align: "center";
  word-break: "break-all";
  display: "flex";
  justify-content: "space-evenly";
  align-items: "center";
  color: "rgba(255,255,255, 0.7)";
  font-weight: "bold";
  font-size: 30;
  '@media (max-width:600px)': {
    font-size: 10;
  },
`;
const Gentext = styled.div`
  font-family: "bendereglarbold";
`;

export default function GenBtn({
  callbackClicked,
}: {
  callbackClicked: () => void;
}) {
  const [isHovering, setHovering] = useState(false);
  // const [isClicked, setClicked] = useState(false);

  const clicked = () => {
    callbackClicked();
    setHovering(true);
    const intervalId = setInterval(() => {
      clearInterval(intervalId);
      setHovering(false);
    }, 3000);
  };

  return (
    <div>
      {isHovering ? <HoverdBtn /> : <Btn onClick={clicked} />}
      <Gentext>Generate</Gentext>
    </div>
  );
}
