import data from "../../dummy.json";

export default function WeaponImg() {
  const imgBox = {
    width: "60%",
    height: "70%",
    backgroundColor: "rgba(158, 158, 158, 1)",
    border: "2px solid white",
    borderRadius: 5,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRight: "2px solid white",
  };
  const name = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize : 30,
  };
  return (
    <div style={imgBox}>
      <img style={img} src={data.imgLink} overflow alt="weaponImg" />
      <div style={name}>{data.name}</div>
    </div>
  );
}
