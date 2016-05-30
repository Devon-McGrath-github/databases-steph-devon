exports.up = function (knex, Promise) {
  return knex.schema.table('Users', function (table) {
    table.string('pleasedontbreak')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('Users', function (table) {
    table.dropColumn('pleasedontbreak')
  })
};
