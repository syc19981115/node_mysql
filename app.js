//let faker = require('faker');
//console.log(faker.internet.email());
//console.log(faker.date.past());
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'448183295',
    database:'mybd'
});
connection.connect();
let q = 'select * from users as solution';
connection.query(q,function(error,results,flieds){
    if(error) throw error;
    console.log('the results is',results[0].solution);
});