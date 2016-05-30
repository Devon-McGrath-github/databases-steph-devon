var config = require('./knexfile').development;
var knex = require('knex')(config);

// updates the lastName, changing whatever the current value is to "smith"
function update() {
  knex('Users')
    .where('id', 2)
    .update('lastName', 'totally neccessary catch statement')
    .catch()
}

// update()

// console logs all lastName Objects
knex('Users')
  .select('lastName')
  .then(function (data) {
    console.log(data);
  })
  .catch()

// deletes row decided by where()
knex('Users')
  .where('id', '8')
  .del()
  .then(console.log)
  .catch(
    function (err) {
      console.log(err)
      console.log('Delete error thingy');
    }
  )

// adds two new rows inserting 3 values into them
knex('Users')
  .insert([{
    firstName: 'Donald V2',
    lastName: 'Trump',
    username: 'TheBigMan',
  }, {
    firstName: 'Donald',
    lastName: 'hasselhoff',
    username: 'fuckhoff'
  }])
  .catch()
