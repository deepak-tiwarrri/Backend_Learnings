const express = require("express");
const users = require("../MOCK_DATA.json");
const fs = require("fs");

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("hello from middleware");
//   res.setHeader("myName", "Deepak Tiwari");
//   next();
// });
// app.use((req, res, next) => {
//   console.log(`Hello from middleware2`);
//   res.end("hey");
// });

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  const { first_name, last_name, email, gender, job_title } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400); 
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    console.log("files is added");
  });
  return res.status(201).json({ status: "success", id: users.length });
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
