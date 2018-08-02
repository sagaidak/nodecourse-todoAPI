const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b6292754d4ecd786cd45bdc11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) return console.log('Id not found');
//   console.log('Todo by ID: ', todo);
// }).catch((err) => {
//   console.log(err);
// });

const id = '5b573bb646326ee5bfda13d2';

if (!ObjectID.isValid(id)) console.log('Id not valid');

User.findById(id).then((user) => {
  if (!user) return console.log('Unable to find user');
  console.log('User: ', user);
}, (err) => {
  console.log(err);
});
