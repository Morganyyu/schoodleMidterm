"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));


// generateRandomString function
function generateRandomString() {
  let output = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++)
  output += possible.charAt(Math.floor(Math.random() * possible.length));
  return output;
};




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/events", (req, res) => {

  res.render("events");
});

app.post("/events", (req, res) => {
	console.log('post /events')
  var dateTest = ('Year ' + req.body.year + 'Month ' + req.body.month + 'Day' + req.body.day + ' start time ' + req.body.start_time + ' end time ' + req.body.end_time)
  console.log(dateTest)
  var isoDate = new Date(req.body.year + req.body.month + req.body.day) //JSON.stringify(req.body)
  console.log('THIS IS WHERE THE ISODATE SHOULD BE: ' + isoDate)
  console.log('This is JSON stringify of req.body ' + JSON.stringify(req.body))
    knex('events').insert({

      event_name : req.body.title,
      event_url  : generateRandomString(),
      details    : req.body.details,
      sched_name : req.body.name,
      sched_email: req.body.email
    }).then(() => {
      //res.sendStatus(200);
      console.log('success')
    })
    .catch((err)=>{
     throw err;
    })
    knex('timeslots').insert({
      start_time : req.body.year,
      end_time   : req.body.month
    }).then(() => {
      console.log('success for timeslots this is so great weeeeeeeeeeeeeee')
    })
    .catch((err)=>{
     throw err;
    })

   res.render("events");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
