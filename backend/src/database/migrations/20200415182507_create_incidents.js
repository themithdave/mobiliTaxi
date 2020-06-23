
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();

        table.string('moderator_id').notNullable();
        table.foreign('moderator_id').references('id').inTable('moderators');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
