
use('sigma');

// Insert a few documents into the sales collection.
// db.getCollection('course').insertMany([
//     {name: 'MongoDB Basics', price: 100, instructor: 'John Doe'},
//     {name: 'Advanced MongoDB', price: 150, instructor: 'Jane Smith'},   
//     {name: 'MongoDB for Data Science', price: 200, instructor: 'Alice Johnson'}]);
 

// // Run a find command to view items sold on April 4th, 2014.

db.getCollection('course').
    find({name: 'MongoDB Basics', price: 100, instructor: 'John Doe'}).pretty();