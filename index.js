const express = require("express");
const userRouter = require("./routes/userRoute");
const { connectMongoDb } = require("./connnection");
const { logReqRes } = require("./middlewares");
const app = express();

const URL = "mongodb://localhost:27017/userData";
app.use(express.json());

app.use("/api/users", logReqRes("log.txt"), userRouter);
const PORT = 8000;
connectMongoDb(URL);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
