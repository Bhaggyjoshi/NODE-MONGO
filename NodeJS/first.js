// // console.log("hello node")

// // fs is inbuild package which is provided by nodejs
// // it i used for the read and write files.
// // syntax => const variable_name = require('package_name')
// // mostly packages returning an objects


// // all the below functions are sync function => it is execute it one by one.

const fs = require('fs'); //require helps importing the packages

// let data = fs.readFileSync("./data.txt",{encoding:"utf-8"}) 
// // utf -8 => Unicode Transformation Format - 8 bits
// // represent Unicode text in web pages
// // Encoding => converting data from one form to another.
// console.log(data);

// // writeFileSync => overrride the data or we say upadate it.
// fs.writeFileSync("./data.txt", "Nice to meet you guys.");

// data = fs.readFileSync("./data.txt",{encoding:"utf-8"})
// // if we not write encoding utf-8 then it simply print the number format of data which is present in the data.txt file
// // in buffer format or we can say in chunks form
// // console.log(data);

// // apendFileSync=> it just append tha data in it and not override it.
// // Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.
// fs.appendFileSync("./data.txt"," let's get startthe meeting :)")





// Async functions
// => async function execute after the sync function hence
// console.log("I am last but mostly I will be first") this printed first and then it print the data
fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
    if(err==null){
        console.log(data);
    }
    
})

// console.log("I am last but mostly I will be first")

fs.writeFile("./data.txt","I'm an async function",(err)=>{
    if (err!=null) {
        console.log(err);
    }
    else{
        console.log("File written Successful");
    }
})

fs.appendFile("./data.txt"," Now you can execute me.",(err)=>{
    if (err!=null) {
        console.log(err);
    }
    else{
        console.log("It is appended")
    }
})