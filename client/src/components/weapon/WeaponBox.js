import styled from "styled-components";
import GenBtn from "../button/GenBtn";
import WeaponImg from "./WeaponImg";

const WeaponBoxContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;

  }
  justify-content: space-evenly;
  align-items: center;
`;
export default function WeaponBox({ callbackClicked }) {
  const handleSwitch = () => {
    callbackClicked();
  };
  return (
    <WeaponBoxContainer>
      <WeaponImg />
      <GenBtn callbackClicked={handleSwitch} />
    </WeaponBoxContainer>
  );
}
