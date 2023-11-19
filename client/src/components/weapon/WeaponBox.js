import GenBtn from "../button/GenBtn";
import WeaponImg from "./WeaponImg";

export default function WeaponBox() {
  const align = {
    display : "flex",
    flexDirection :"row",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <div style={align}>
      <WeaponImg />
      <GenBtn/>
    </div>
  );
}
