// user request for any thing which needs
// => url
// request method/type
// data  - body 
// headers => extra information about request
// response headers

// API works with request url and method which we have called and according to that we used that functionality
// API continously recieving  request and sending responce which means it basically running on server


// HTTP module =>
// module  help to create api endpoints , server, writen down on which method which url called

// localserver = > the server is continously running in local network and accessible

const http = require('http');

// server in the our local network have same IP address but the have different port number

// here the function we write which is called on each request
// this method contain 2 parameters => 1. req  2. res

// req => it contain all request headers, type which is comming form the request
http.createServer((req,res)=>{
    // console.log("Welcome to Server!")

    if(req.url === "/sauri"){
        console.log(15)
    }else if(req.url==="/vidhi"){
        console.log(30)
    }else if(req.url === "/visi"){
        console.log(01)
    }else {
        console.log("page not found ")
    }

    console.log(req.url);
    // res.write helps to send the responce

    // res.write("Thank You :)");
 
    res.end();   //it just ending the response


}).listen(8000);

// when ever any one send request from browser the req method is always " GET "

// base url =>identificcation of which server we called
// the thing which actually takin us server is base url =>localhost:8000
// req.url => it gives "/whatever we write with base url"
// using this part of url we can do operations