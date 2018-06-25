const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs.  for production, not development.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// if (process.env.NODE_ENV === "production") {
//   mongoose.connect(process.env.MONGODB_URI || "mongodb://jenn_prod:kagna92tngasklfjqh@ds117711.mlab.com:17711/heroku_13r8k3pv");
// //always must be last route defined before turning server on.
// } else {
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ReactAPINYT");
//}

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
