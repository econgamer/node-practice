// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppPractice', (err, db) => {
  if(err) throw err;

  console.log('Connect to MongoDb server');

  // db.collection('Todos').find({ _id: new ObjectId('596492fc4cbe2b20f08b260e')}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if(err) throw err;
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('todos' + count);
  // }, (err) => {
  //   if(err) throw err;
  // });

  db.collection('Users').find({age: '23'}).toArray((err, docs) => {
    if(err) throw err;

    console.log(JSON.stringify(docs, undefined, 2));

  });

  db.close();

});
