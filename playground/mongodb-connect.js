// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppPractice', (err, db) => {
  if(err) throw err;

  console.log('Connect to MongoDb server');

  db.collection('Users').insertOne({
    name: 'Michael III',
    age: '23',
    location: 'US'
  }, (err, result) => {
    if(err) throw err;

    console.log("created!!!!!");
  })


  db.close();

});
