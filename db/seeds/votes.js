exports.seed = function(knex, Promise) {
  return knex('votes').del()
    .then(function () {
      return Promise.all([
        knex('votes').insert({id: 1, participant_id: 1, timeslots_id: 1})
      ]);
    });
};
