const express = require("express");
const app = express();
const port = 5000;
const data = require("./dummy.json");

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/generate", (req, res) => {
  console.log("Received Data:", data);
  res.json(data);
});

app.listen(port, () => {
  console.log("server working");
});
