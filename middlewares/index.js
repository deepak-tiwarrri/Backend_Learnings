const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n ${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n `,
      (err, data) => {
        console.log("logged data");
        next();
      }
    );
  };
}
module.exports = {
  logReqRes,
};
