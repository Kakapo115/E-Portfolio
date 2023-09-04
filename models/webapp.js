// Schema definition file for the task collection data
var mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
var Schema = mongoose.Schema;
// Create a schema description of the tasks document structure
var webappSchema = new Schema(
  {
    previewImageURL:String,
    name:String,
    description:String,
  },
  { collection: "Webapps" },
  { versionKey: false }
);
module.exports = webapp = mongoose.model("webapp", webappSchema); 
