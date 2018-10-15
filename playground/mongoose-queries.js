const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bc2af8734536905e4483ea4';
User.findById(id).then((doc) => {
  console.log("Find BY ID:", doc);
},(e) => console.log(e))

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log("ID not found");
//   }
//   console.log('Todo find by ID', todo);
// }).catch((e) => console.log(e));
