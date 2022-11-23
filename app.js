const express = require("express");
const mongoose = require("mongoose");
const studentroutes = require("./routes/studentroute");
const courseroutes = require("./routes/courseroutes");
const reportcardroutes = require("./routes/reportcardroutes");
const courseRegisterRoutes = require("./routes/courseRegisterRoutes");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middlewares/requireAuth");

// create an express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// connect to database and start up server
const dbURI = "mongodb://127.0.0.1:27017/student-mgt";

mongoose
  .connect(dbURI, { useNewURLParser: true })
  .then((result) => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/result", requireAuth, (req, res) => {
  res.render("result");
});

app.use(courseroutes);
app.use(studentroutes);
app.use(courseRegisterRoutes);
app.use(reportcardroutes);

app.use((req, res) => {
  res.render("404");
});
