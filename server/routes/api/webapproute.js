var express = require("express");
var router = express.Router();
//import the webapp model (schema) from the models folder
var webapps = require("../../models/webapp");


// Email Service
const sendMail = require("../api/sendMail");
router.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Add some basic validation if required

  const success = await sendMail(name, email, message);

  if (success) {
    return res.json({ success: true });
  } else {
    return res.status(500).json({ success: false });
  }
});

//@route GET /api/webapp
//@desc Get all webapps from the DB
//@access Public
router.get("/", function (req, res) {
  webapps
    .find()
    .sort({ webapp: 1 })
    .then(function (webapp) {
      res.json(webapp);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
