const User = require("../models/user");

// get all the users
async function getAllUser(req, res) {
  const allUsers = await User.find({});
  if (!allUsers) return res.status(200).json({ message: "No User Exists" });
  return res.status(200).json(allUsers);
}

//create all the users
async function createUser(req, res) {
  const { first_name, last_name, email, gender, job_title } = req.body;
  if (!first_name || !last_name || !email || !gender) {
    return res.status(400).status({ messag: "All Fields are necessary" });
  }

  const result = await User.create({
    firstName: first_name,
    lastName: last_name,
    email: email,
    gender: gender,
    jobTitle: job_title,
  });

  return res.status(201).json({ message: "Success", id: result._id });
}

//update users
async function updateUser(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is not passed" });
  const user = await User.findByIdAndUpdate(id, req.body);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.status(200).json(req.body);
}

//delete users
async function deleteUser(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "ID not passed" });
  const user = await User.findByIdAndDelete(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res
    .status(200)
    .json({ message: "Deleted Successfully", id: user._id });
}

module.exports = {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
};
