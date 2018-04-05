
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', function (table) {
      table.increments('id'),
      table.varchar('event_name', 255),
      table.text('details'),
      table.varchar('event_url', 255),
      table.varchar('sched_name', 255),
      table.varchar('sched_email', 255)
    }),
    knex.schema.createTable('participants', function (table) {
      table.increments('id'),
      table.varchar('name', 255),
      table.varchar('email', 255)
    }),
    knex.schema.createTable('timeslots', function (table) {
      table.increments('id'),
      table.date('time'),
      table.integer('event_id').references('id').inTable('events')
    }),
    knex.schema.createTable('votes', function (table) {
      table.increments('id'),
      table.integer('participant_id').references('id').inTable('participants')
      table.integer('timeslots_id').references('id').inTable('timeslots')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events'),
    knex.schema.dropTable('participants'),
    knex.schema.dropTable('timeslots'),
    knex.schema.dropTable('votes')
  ])
};
