// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Express to run server and routes
const app = express();

// Start up an instance of app

// Start up an instance of app
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

app.get("/all", sendtoServer);

//cALLBACK FUNCTION to complete all GET routes

function sendtoServer(req, res) {
  res.send(projectData);
  projectData = {};
}

// POST route

app.post("/add", addData);

function addData(req, res) {
  console.log(req.body);

  (projectData.date = req.body.date),
    (projectData.temp = req.body.temp),
    (projectData.content = req.body.content);
}
