const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

router.get("/dashboard", (req, res) => {
  res.render("home/dashboard", {
    viewTitle: "Insert Employee",
  });
});
module.exports = router;
