const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.listen(4000, () => {
  console.log("port is running on port 4000");
});
