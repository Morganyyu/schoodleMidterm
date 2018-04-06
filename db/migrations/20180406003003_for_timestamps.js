
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE timeslots ALTER COLUMN start_time TYPE timestamp'),
    knex.raw('ALTER TABLE timeslots ALTER COLUMN end_time TYPE timestamp')
   ])
};

exports.down = function(knex, Promise) {
  return knex.schema.table('timeslots', function (t){
    t.date('start_time');
    t.date('end_time');
   })
};
