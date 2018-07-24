// For v2.2.5 API
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server (mongo db)');
  }
  console.log('Connected to MongoDB.');

  // db.collection('Users').deleteMany({name: 'Jen'}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5b55fadde7b32653e1c4b9b9')
  // }).then((res) => {
  //   console.log(res);
  // });

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Smoke weed'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Smoke weed'}).then((res) => {
  //   console.log(res);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });



  // db.close();
});
