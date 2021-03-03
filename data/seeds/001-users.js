const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    {
      id: 1,
      username: 'usertest',
      password: bcrypt.hashSync('pwtest1', 12),
    },
    {
      id: 2,
      username: 'usertest2',
      password: bcrypt.hashSync('pwtest2', 12),
    },
  ]);
};