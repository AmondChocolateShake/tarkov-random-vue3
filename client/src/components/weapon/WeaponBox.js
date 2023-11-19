import GenBtn from "../button/GenBtn";
import WeaponImg from "./WeaponImg";

export default function WeaponBox() {
  const align = {
    width : "100%",
    height : "20%",
    display : "flex",
    flexDirection :"row",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
  return (
    <div style={align}>
      <WeaponImg />
      <GenBtn/>
    </div>
  );
}
