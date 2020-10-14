const orderedTableNames = require('../../constants/orderedTableNames');

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all(
    orderedTableNames.map((tableName) => knex(tableName).del()),
  );
};
