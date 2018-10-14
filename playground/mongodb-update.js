// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bc24f0aa98256754794e68b')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOrginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
