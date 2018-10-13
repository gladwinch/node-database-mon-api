// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // DELETE MANY DOCUMENT FROM A COLLECTION
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });
  //DELETE ONE DOCUMENT FROM A COLLECTION THE FIRST DOCUMENT
  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  //FIND AND DELETE
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5bc2381622208b04bcee9353")}).then((result) => {
    console.log(result);
  });

  // db.close();
});
