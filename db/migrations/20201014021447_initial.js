const tableNames = require('../../constants/tableNames');

function addDefaultColumns(table) {
  table.increments().notNullable();
  table.timestamps(false, true);
  table.boolean('is_deleted').notNullable().default(false);
}

function addForeignKey(table, foreignTableName) {
  return table
    .integer(`${foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName)
    .onDelete('cascade');
}

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.role, (table) => {
    table.string('name', 254).notNullable().unique();
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.user, (table) => {
    table.string('display_name', 254).notNullable();
    table.string('email', 254).notNullable().unique();
    table.text('google_id').notNullable();
    addDefaultColumns(table);
    addForeignKey(table, tableNames.role).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.user);
  await knex.schema.dropTable(tableNames.role);
};
