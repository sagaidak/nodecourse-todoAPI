// For v2.2.5 API
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server (mongo db)');
  }
  console.log('Connected to MongoDB');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

//   db.collection('Users').insertOne({
//     name: 'Lisa',
//     age: 27,
//     location: 'Odessa'
//   }, (err, res) => {
//     if (err) return console.log('Some error while inserting', err);
//
//     console.log(res.ops[0]._id.getTimestamp());
//   });
//
  db.close();
});
