"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("timeslots")
      .then((results) => {
        res.json(results);
    });
  });

  // router.post("/events", (req, res) => {
  //   console.log('post /events')
  //   knex('events').insert({
  //     id: 1,
  //     event_name: `Sam's Birthday!`,
  //     details: `Everyone come to Sam's Bday party at Sam's House`,
  //     event_url: 'http://localhost:8080/123456789',
  //     sched_name: 'Sam Schantz',
  //     sched_email: 'samvschantz@gmail.com'
  //   }).then(() => {
  //     res.sendStatus(200);
  //     console.log('success')
  //   })
  //   .catch((err)=>{
  //    throw err;
  //   })


  // });

  return router;
}


