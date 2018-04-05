exports.seed = function(knex, Promise) {
  return knex('timeslots').del()
    .then(function () {
      return Promise.all([
        knex('timeslots').insert({id: 1, time: "2015-03-25", event_id: 1}),
      ]);
    });
};
