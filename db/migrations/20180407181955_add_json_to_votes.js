
exports.up = function(knex, Promise) {
  return knex.schema.table('votes', function (t){
    t.json('vote_data');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('votes', function (t){
    t.dropColumn('vote_data');
   })
};
