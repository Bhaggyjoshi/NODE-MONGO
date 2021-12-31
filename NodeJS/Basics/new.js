// npm => node package manager, which helps us to install, delete , manage the packages
// inbuild packeges / module => which are provided by nodejs itself
// third party packages which is not provided by nodejs or writen by someone else which we used in aur project

// const { required } = require("nodemon/lib/config");

// packages = >
                // fs => it is used to read and write the file

// for that we have to import that package , bascially that will link your project with that file
// so we can used all its functionality


// syntax to import package is 
                // const variable_name = require('packege_name'), required is used to import a package
                // the package when we import it gives us the object which contain all the functionality

// sync     execute at once, other have to wait till it execute           

const fs = require('fs'); 

let data = fs.readFileSync("./new.txt", {encoding:"utf-8"});

// readfileSync => it is function which is provided by the fs package which helps us to read the containt of the file
// if we not used encoding then it send data in the form of buffer

// Buffer  =  it is nothing but when we have to send the data for that it established the connection betwn sender and reciever 
// that connection is nothing but the stream and through that stream data is send chunk by chunk or we say buffering

// why data is send over internet chunk by chunk and not whole?
// => it create a load or used more memory and if we send data fully then user have to wait but through this it is really hard to
// hence they send data chunk by chunk so usr can watched it and new chunk of data will recieved by user and he hasn't wait for it.

// for ex => live streaming without chunk and buffer live streaming is not possible.
console.log(data);


// writeFileSync() => it basically over write the containt of the file which we are using
fs.writeFileSync("./new.txt","hello guys");

// appendfileSync() = > it just add new text without affecting the old one

fs.appendFileSync("./new.txt","  Miss you guys");



// Asynchronous function
// readFile()
// writeFile()
// appendFile()

fs.readFile("./new.txt",{encoding:"utf-8"},(err,data)=>{
    if(err==null){
        console.log(data);
    }
})

console.log("I am the last but mostly i will executed first");