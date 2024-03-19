const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

router.get("/register", (req, res) => {
  res.render("home/register", {
    viewTitle: "Insert Employee",
  });
});
module.exports = router;
