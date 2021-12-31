hello guys  Miss you guys

nodemon => run program internally
        tool =>    automate the program 

MongoDB => no SQL Database Management System

collections => in MongoDB tables are called collections, collection of objects/ documnets called collection in MongoDB

documents => object based record is document

Database server => where our data is stored
 server => services run continously

*******       MongoDB Commands    **********


 to see present data in Database 
 --> show Databases
 --> show dbs

to use a Database /create Database , if no Database is there that we want it basically create Database and used it
--> use Database_name

if Database is not have any collection then it will not show in Database list

to check i which data you are currently
--> db

to create a collection 
--> db.createCollection("collection_name")

to check collection in Database
--> show collections

to insert document in collection
--> db.collection_name.insert({object})

to check/view the document stored in collection 
--> db.collection_name.find()

to make data look good
--> db.collection_name.find().pretty()

to fetch/view documents based on a condition
--> db.collection_name.find({"property":"value".....})

in MongoDB there 2 operator 
--$gt -->grater than  {$gt:value}
--$lt -->less than    {$lt:value}

to get specific number of record/document
--> db.collection_name.find().limit(no of record want).pretty()

to fetch data in sorted fashion
--> db.collection_name.find().sort({property:1(ascending)/-1(descending)})

to upadate data / replace data
--> 





to used 3rd party libarary => mongoose
which hepls to create Database and connect to the server

installation of mongoose
--> npm install mongoose