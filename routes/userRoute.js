const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
//create users

//get all users
router.route("/").get(getAllUser).post(createUser);
//update the users
router.route("/:id").patch(updateUser).delete(deleteUser);

module.exports = router;
