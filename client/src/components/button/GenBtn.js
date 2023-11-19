export default function GenBtn() {
  const btn = {
    width: "20%",
    height: "50%",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: 5,
    border: "2px solid white",
    
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "black",
    fontWeight : "bold",
    fontSize : "10"
  };
  const test = () => {
    console.log("test");
  };
  return (
    <div style={btn} onClick={test}>
      Generate
    </div>
  );
}
