// HTTP module
// ******************************
// for using different functionalities we have to call different url
// API contiously running it is running on server
// request on address(url) 
// request methode/type
// data = > body
// headers 
// response headers


// HTTP module helps to create server, were we can create API
// browser can send only get request
// Localhost => server is running in our pc only and accesible 

const http = require('http');
const url = require('url');
const fs = require('fs');

// create server => syntax             variable name.createServer((request, respones)=>{})
// port number helps to identify which server is running in our pc
// 127.0.0.1 / localhost:8000 => "base url is idenification which server we are trying to call", here 8000 is port number
// http.createServer((req,res)=>{

//     // console.log(req.method)
//     // req => contain url, req method and much more properties
//     if (req.url ==="/hello") { //here we are checking the url and according to  that we returning some  values
//        res.write("hello Everyone!"); //it is sending  respones
//     }
//     else if(req.url==="/bye"){
//         res.write("dummy Person");
//     }
//     else{
//         res.write("Find something else");
//     }
//     // res.write("Hello everyone");
//     res.end();
// }).listen(8000);

// browser waiting for respones , hence it is loading
// ******************************************
// request method
//body data
// url data
// headers

let product =JSON.parse( fs.readFileSync("product.json",{encoding:"utf-8"})); //reading file content and convert it into js object



http.createServer((req,res)=>{
// it just do separate base url and url parameters
    let path = url.parse(req.url,true);
    console.log(path);

    if(path.pathname==="/products" && req.method==="GET"){
        let id = path.query.id; //getting the id from url
        if (id===undefined) {
            res.write(JSON.stringify(product)) //get the response we used res.write
            res.end();
        }
        else{
            let prod = product.find((p)=>{return p.id===Number(id)});
            res.write(JSON.stringify(prod));
            res.end();
        }
       
    }
    else if (path.pathname==="/products" && req.method==="POST") {
        // req.on is method which is call everytime when chunk you received
        // chunk is parameter for chunk data and 

        // how I identify id is coming or not

        // extracting data from url

        let data ='';
        req.on('data',(chunk)=>{
            data += chunk; //here we are adding chunk by chunk in data which gonna be comming form client
            res.end();
        })
        // when all the data recieved and connection is closed for that we have one more request function
        // when stream is ending
        req.on('end',()=>{
            product.push(JSON.parse(data));
            fs.writeFileSync("./product.json",JSON.stringify(product));
            res.write(JSON.stringify({message:"Product created"}));
            res.end(); //end the function
        })
    }


    
    // else if => is end point
    // data we are sending from url it uses end point
    // we are reading the data from url



    else if (path.pathname==="/products" && req.method==="DELETE") {
        // console.log(path.query.name);
        // console.log(path.query.age);
        // read file
        // write file 
        // convert data into js object
        // do whatever changes we have to do

        // find the index of element => findIndex

        let id = path.query.id;
        let index = product.findIndex((product)=> product.id===Number(id)); // check which on which index id is present and the according to it just splice(delete the elemnt)
        product.splice(index,1);
        fs.writeFileSync("./product.json",JSON.stringify(product));
        res.write(JSON.stringify({message:"Product Deleted"}));
        res.end();
    }

    // to upadate the data , need index and what we have to update

    else if (path.pathname==="/products" && req.method==="PUT") {
        let id = path.query.id;

        let data ='';
        // getting data from request body
        req.on('data',(chunk)=>{
            data += chunk;

        })
        req.on('end',()=>{
   
            let index = product.findIndex((product)=> product.id===Number(id));
            product[index] = JSON.parse(data);
            fs.writeFileSync("./product.json",JSON.stringify(product));
            res.write(JSON.stringify({message:"Product Updated"}));
            res.end();
        })
    }


    
}).listen(8000)


// whenever we sending data from url then we have to pass variable and value called them url parameters
// to manipulate url we need url module
// query has data which we want and we can access
// api understand which url we have to work just using method