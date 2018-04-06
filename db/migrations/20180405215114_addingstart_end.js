
exports.up = function(knex, Promise) {
  return knex.schema.table('timeslots', function (t){
    t.dropColumn('time');
    t.date('start_time');
    t.date('end_time');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('timeslots', function (t){
    t.date('time');
    t.dropColumn('start_time');
    t.dropColumn('end_time');
   })
};

