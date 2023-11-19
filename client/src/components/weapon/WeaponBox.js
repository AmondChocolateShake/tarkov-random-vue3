import GenBtn from "../button/GenBtn";
import WeaponImg from "./WeaponImg";

export default function WeaponBox() {
  const align = {
    display : "flex",
    flexDirection :"row",
    justifyContent: "space-evenly",
    alignContent: "center",
  }
  return (
    <div style={align}>
      <WeaponImg />
      <GenBtn/>
    </div>
  );
}
