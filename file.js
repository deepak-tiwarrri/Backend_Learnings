const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);
// fs.writeFile("text1.txt", "hey,this is shubham", (err) => {
// if (err) console.error(err);
// });
// fs.writeFileSync("./text.txt", "Hey, this is deepak");

// const res = fs.readFileSync("./text1.txt", "utf-8");
// console.log("1");
const res = fs.readFileSync("./text1.txt", "utf-8");
// console.log(res);
// console.log("233");

fs.readFile("./text1.txt", "utf-8", (err, result) => {
  if (err) console.error("error is ", err);
  // console.log(result);
});
// console.log("3");
// console.log(res);
fs.appendFileSync("./text1.txt", `${Date.now()} hello there\n`);

// fs.cpSync("./text.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");
