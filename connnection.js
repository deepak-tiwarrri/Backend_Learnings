const mongoose = require("mongoose");

async function connectMongoDb(URL) {
  return mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB is connected now`))
    .catch((err) => console.error("Error in connection of mongodb: ", err));
}
module.exports = {
  connectMongoDb,
};
