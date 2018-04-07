
exports.up = function(knex, Promise) {
  return knex.schema.table('votes', function (t){
    t.dropColumn('timeslots_id');
    t.integer('event_id');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('votes', function (t){
    t.integer('timeslots_id');
    t.dropColumn('event_id');
   })
};
