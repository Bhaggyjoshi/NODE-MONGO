// what we sending through request 
// body data
// url data
// headers

// everything related to the request is available in req
// to manipulate url we want new module => url

const http = require('http');
const url = require('url');

http.createServer((req,res)=>{

    // it gives what request method  we are using ta
    // console.log(req.method);

    // a single if functionality called 1 endpoint
    // it works when req.url and req.method matches the url then it executes the functionality
    

    // this divide url and url parameter separately 
    let path = url.parse(req.url,true);
    console.log(path);
    
    if(path.pathname ==="/products" && req.method==="GET"){
        console.log("Get data");
    }else if(path.pathname==="/products" && req.method==="POST"){
        // console.log("Creates data");
        // console.log(path.query.name);     
        let data ='';

        // here req.on run everytime when the user send the data and in this chunk of data is added to data variable and it gets added and added in the variable 
        req.on('data',(chunk)=>{
            data= data+chunk;
        })

        // it called when the whole data is recieved and connection or stream is closed

        req.on('end',()=>{
            console.log(JSON.parse(data ));
        })
    }else if (path.pathname==="/products" && req.method==="DELETE") {
        console.log(path.query.name);
    }

    res.end();
}).listen(8000)

// how to read data or extract body data from request

// when we send data from client to server it 1st creates a stream between them and through that the data is send chunk by chunk and for server
// we have to collabroat the data 
// here 2 request method which helps us in 
// 1. req.on('data',()=>{}) => it call everytime when we recieve the chunk and add it to the previous data which we have recieved
// 2. req.on('end',()=>{}) => it just called when the connection between stream is closed

// always send header where we send which type of data
// whenever we send data keep a habit of sending header(content-type:Application/json)


// url data
// in this we send data through url => url parameters
// http://localhost:8000/products?variable_name=value


// when we parse the url in path variable =>
/*Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?name=Bhagyashri',
    query: [Object: null prototype] { name: 'Bhagyashri' },
    pathname: '/products',
    path: '/products?name=Bhagyashri',
    href: '/products?name=Bhagyashri'
}*/
  
// createrserver is called everytime when the request comes  and based on that the url and method we do different functionality
