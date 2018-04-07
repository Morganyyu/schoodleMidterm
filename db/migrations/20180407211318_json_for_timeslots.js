
exports.up = function(knex, Promise) {
   return knex.schema.table('votes', function (t){
    t.json('timeslots_id_json');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('votes', function (t){
    t.dropColumn('timeslots_id_json');
   })
};
