const tableNames = require('../../constants/tableNames');

exports.seed = async (knex) => {
  await knex.raw('ALTER SEQUENCE role_id_seq restart with 4;');
  await knex(tableNames.role).insert([{
    id: 1,
    name: 'user',
  }, {
    id: 2,
    name: 'moderator',
  }, {
    id: 3,
    name: 'administrator',
  }]);
};
