const express = require("express");
const app = express();
const port = 5000;
const data = require("./dummy.json");

app.get("/", (req, res) => {
  res.send("hellso");
});

app.post("/data", (req, res) => {
  console.log(req)
  console.log("Received Data:", data);
  res.json({ message: "Data received successfully", data });
});
app.listen(port, () => {
  console.log("server working");
});
