// For v2.2.5 API
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server (mongo db)');
  }
  console.log('Connected to MongoDB.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b571e1c5d38d94a5dff2abe')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b57133c10b2ab34211014b5')
  }, {
    $set: {
      name: 'Ahhhhh'
    },
    $inc: {
      age: 10
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
});
