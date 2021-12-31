const mongoose = require('mongoose');
// 3rd party libarary

// how to connect with mongo server using mongoose
// here connect is async function which return promise to handle that we used then and catch
mongoose.connect("mongodb://localhost:27017/products")
// here we basically resolve and reject the promises
.then(()=>{
    console.log("Mongo connection successful")
})
.catch((err)=>{
    console.log(err);
})

// to work with collection using mongoose for that we need schema
// schema =>structure of data

const programSchema = new mongoose.Schema({
    P_name:String,
    Price:Number,
    Rating:Number,
    Enrolled:String
})

// models helps yout o directly connect with collections

const programModel =  new mongoose.model('program',programSchema);



let program = {P_name: "Web Development",
    Price:30000,
    Rating:4.8,
    Enrolled:"ACOE101"};

// based on model we create object model
let programObj = new programModel(program);
programObj.save()
.then(()=>{
    console.log("program created !")
})
.catch((err)=>{
    console.log(err);
})