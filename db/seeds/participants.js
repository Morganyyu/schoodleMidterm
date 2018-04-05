exports.seed = function(knex, Promise) {
  return knex('participants').del()
    .then(function () {
      return Promise.all([
        knex('participants').insert({id: 1, name: 'Nacho', email: 'nacho@nacho.nacho'}),
      ]);
    });
};
