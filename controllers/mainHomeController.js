const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

router.get("/home", (req, res) => {
  res.render("home/mainHome", {
    viewTitle: "Insert Employee",
  });
});
module.exports = router;
