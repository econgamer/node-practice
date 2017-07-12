// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppPractice', (err, db) => {
  if(err) throw err;
  console.log('Connect to MongoDb server');

  //deleteMany(Eat lunch), deleteOne(Eat lunch), findOneAndDelete(complete = false)
  db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
  })


  db.close();

});
