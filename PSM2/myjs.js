// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb1";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//  else console.log("Database created!");
//   db.close(); 
// });

var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/testing1";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
// var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };  
// db.collection("employees").insertOne(myobj, function(err, res) {  
// if (err) throw err;  
db.comments.insert({
  'name':"yash",
  'age':44
})
console.log("1 record inserted");  
db.close();  
});  
