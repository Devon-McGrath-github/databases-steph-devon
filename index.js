var knex = require('./knexfile');

function update() {
  console.log('Its updating');
  knex('Users')
    .where('id', '2')
    .update({
      firstName: 'Don'
    })
}

update()
