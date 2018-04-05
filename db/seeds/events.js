exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return Promise.all([
        knex('events').insert({id: 1, event_name: `Sam's Birthday!`, details: `Everyone come to Sam's Bday party at Sam's House`, event_url: 'http://localhost:8080/123456789', sched_name: 'Sam Schantz', sched_email: 'samvschantz@gmail.com'}),
      ]);
    });
};
