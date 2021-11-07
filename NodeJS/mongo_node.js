const mongoose = require('mongoose'); //mongoose is  third party module


// instablishing mongo connection using connect
mongoose.connect("mongodb://localhost:27017/products") //connect is async function which return a promise, everything perfect it resolve and if not then reject
// uri => is base address and url => /prosuct or whatever it takes as
.then(()=>{
    console.log("mongo connection successfull")
})
.catch((err)=>{
    console.log(err);
})

// schema => it used to work with collection has proper way which is schema
// structure of data, mongoose should know which

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    rating:Number,
    category:String
});

// model => it gives functionality to work on collection
// it takes 2 parameters 1. collection_name, schema_name

const productModel = new mongoose.model("program",productSchema);

//insert data /docunment using mongoose 

// let product={name:"Boat headphones",price:5000,rating:4.7,category:"electronic"};

// let productModelObj = new productModel(product);
// productModelObj.save()
// .then(()=>{
//     console.log("product created");
// })
// .catch((err)=>{
//     console.log(err);
// })


// here we are extracting promise from productModel and using .then we are getting the data from database
// .then basically resolved the promise , if .then again return promise the again we have to resolve it by .then

productModel.find()
.then((data)=>{
     console.log(data)
})
.catch((err)=>{
    console.log(err)
})
// findOne => return only one data, find =>return multiple data
// findById =>it takes parameter as id which we have to want

// deleteOne => delete one document from data base , it requires parameter as id
productModel.deleteOne({_id:"6187e8adce6ca85efda4f1dc"})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})