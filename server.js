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
  var randonmun = generateRandomString();
});


app.get("/:id", (req, res) => {


    knex
      .select("event_name","details","sched_name",)
      .from("events")
      .where("event_url" , req.params.id )
      .then((results) => {

        let templatevars = { title : results[0].event_name,
  	                         name:   results[0].sched_name,
                             location : results[0].location,
                             details :  results[0].details
                             }
         console.log(templatevars) 
         res.render("events", templatevars);
      });


});




app.post("/", (req, res) => {
	let oururl = generateRandomString()
	console.log('post /events')
    knex('events').insert({
      
      event_name: req.body.title,
      event_url:oururl,
      details: req.body.details,
      sched_name: req.body.name,
      sched_email: req.body.email
    }).then(() => {
      //res.sendStatus(200);
      console.log('success')
    })
    .catch((err)=>{
     throw err;
    })
    
   res.redirect(`/${oururl}`);
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});