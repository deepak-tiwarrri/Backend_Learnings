const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("This is Homepage");
});

app.get("/about", (req, res) => {
  res.send(`This is About page ${req.query.name}`);
});
app.get("/age", (req, res) => {
  res.send(`Your age is ${req.query.age}`);
});
app.listen(8000, () => {
  console.log(`Server started and listening...`);
});
