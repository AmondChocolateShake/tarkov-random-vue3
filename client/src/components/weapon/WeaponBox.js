import GenBtn from "../button/GenBtn";
import WeaponImg from "./WeaponImg";

export default function WeaponBox(callbackClicked) {
  const align = {
    width : "100%",
    height : "40%",
    display : "flex",
    flexDirection :"row",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
  const handleSwitch = () =>{
    callbackClicked()
  }
  return (
    <div style={align}>
      <WeaponImg />
      <GenBtn callbackClicked={handleSwitch}/>
    </div>
  );
}
