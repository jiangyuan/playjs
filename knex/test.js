const knex = require('knex')({
    client: 'mysql'
});

const t1 = knex('table').insert({
    a: 'b'
}).returning('*').toString();

const t2 = knex.select('title', 'author', 'year').from('books').toString();

console.log(t1);
console.log(t2);

