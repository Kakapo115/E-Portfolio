var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");

// Add reference to the routes file
var webapproute = require("./routes/api/webapproute");

var app = express();

const cors = require("cors");
// Enable CORS for all routes
app.use(cors());

//Add body-parser middleware to handle JSON data
app.use(bodyparser.json());

// Connect to mongo using mongoose.
// Here's where we start using promises
mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(function (err) {
    console.log("MongoDB connected...");
  })
  .catch(function (err) {
    console.log(err);
  });

//var port = 3000;
//Comment out port 3000 and set port 5000 or the production server's
//preconfigured service port
var port = process.env.PORT || 5000;

app.use("/api/webapp", webapproute);

app.get("/", function (req, res) {
  res.json({ reply: "Route for HOME path." });
});
app.listen(port, function () {
  console.log("Server started on port:" + port);
});
