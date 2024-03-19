const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
// mongoose.connect(
//   "mongodb+srv://kmhabib:khurshida@cluster0.qqlnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
mongoose.connect(
  //  'mongodb://localhost:27017/EmployeeDB',
  "mongodb+srv://helloworld123new:MZa2rBNAisJO8jxp@google-meet-demo-db.yukolcv.mongodb.net/",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./employee.model");
require("./games.model");
