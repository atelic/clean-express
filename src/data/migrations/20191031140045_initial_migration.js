exports.up = function(knex) {
  return knex.schema.createTable("hello", table => {
    table.increments("id")
    table.string("message")
    table.string("author")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("hello")
}
