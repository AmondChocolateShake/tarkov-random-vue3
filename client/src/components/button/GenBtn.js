export default function GenBtn() {
  const btn = {
    height : "80%",
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    cursor: "pointer",
  };
  const test = () => {
    console.log("test");
  };
  return (
    <div style={btn} onClick={test}>
      GenBtn
    </div>
  );
}
