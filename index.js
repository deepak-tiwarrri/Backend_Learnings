const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
app.get("/api/users", (req, res) => {
  return res.json(users);
});
//dynamic id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.filter((item) => item.id === id);
  return res.json(user);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
       ${users.map((item) => `<li>${item.first_name}</li></br>`).join("")}
    </ul>
  `;
  res.send(html);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
