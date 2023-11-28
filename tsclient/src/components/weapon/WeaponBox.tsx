import styled from "styled-components";
import GenBtn from "../button/GenBtn";
import WeaponImg from "./WeaponImg";

interface WeaponBoxProps {
  callbackClicked: () => void;
}

const WeaponBoxContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }
  justify-content: space-evenly;
  align-items: center;
`;
const WeaponBox: React.FC<WeaponBoxProps> = ({ callbackClicked }) => {
  const handleSwitch = () => {
    callbackClicked();
  };
  return (
    <WeaponBoxContainer>
      <WeaponImg />
      <GenBtn callbackClicked={handleSwitch} />
    </WeaponBoxContainer>
  );
};

export default WeaponBox;
