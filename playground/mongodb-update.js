// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58bfe73c1436f3b2f3555a24')
  }, {
        $set: {
        completed: false
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58bfcd0cd2448613b018fbb6')
  }, {
      $set: {
        name: 'Andrew'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // db.close();
  });
