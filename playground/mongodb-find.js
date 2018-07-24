// For v2.2.5 API
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server (mongo db)');
  }
  console.log('Connected to MongoDB.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b55f8b04f201d26bd8823fb')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Users').find({name: 'Jen'}).toArray().then((docs) => {
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Error: ', err);
  // });

  // db.close();
});
