exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    // knex('Users').del(),

    // Inserts seed entries
    knex('Users').insert({
      firstName: 'first1',
      lastName: 'last1',
      username: 'user1'
    }),
    knex('Users').insert({
      firstName: 'first2',
      lastName: 'last2',
      username: 'user2'
    }),
    knex('Users').insert({
      firstName: 'first3',
      lastName: 'last3',
      username: 'user3'
    })
  );
};
