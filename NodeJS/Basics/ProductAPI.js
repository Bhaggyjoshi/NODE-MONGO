const http = require('http');
const fs = require('fs');
const url = require('url');
const { json } = require('express/lib/response');



http.createServer((req,res)=>{
    let product = JSON.parse(fs.readFileSync("./product.json",{encoding:'utf-8'}));
    let path = url.parse(req.url,true);

    if(path.pathname==="/products" && req.method==="GET"){
        let id = path.query.id;

        // this works when we not have id parameter
        if(id === undefined){
            res.write(JSON.stringify(product));
            res.end();
        }

        // this works when we have to find using url parameter i.e id parameter
        else{
            let pro = product.find((p)=>{return p.id === Number(id)});
            res.write(JSON.stringify(pro));
            res.end(); 
        }
        
        // console.log(product);
    }  

    // we have to create the data 
    else if(path.pathname === "/products" && req.method === "POST"){
        let data = '';
        req.on('data',(chunk)=>{
            data += chunk;
        });

        req.on('end',()=>{
            // console.log(product);
            
            // when we passing data through body data for that we have to parse data and add it to the array of object(product)
            // after that we have overwrite the file for that for that er used writefileSync , when we add the data in file we have to stringyfy the data which means in json object

            product.push(JSON.parse(data));
            fs.writeFileSync("./product.json",JSON.stringify(product)); //json object conversion
            res.write(JSON.stringify({message:"product created"}));
            res.end();
        })
    }

    // deleting the one element of produdct

    else if(path.pathname === "/products" && req.method === "DELETE"){
        // we are extracting the id form the url
        let id = path.query.id;
        // through url we pass id and using that id we are finding the index of that id element
        let index = product.findIndex((pro)=>pro.id===Number(id));
        // now from that index we are deleting the elemnt through array of object(product)
        product.splice(index,1);
        // now the elemnt is deleted from the array so , it also change in file for that we are upadating the file by removing all data and adding new data.
        fs.writeFileSync("./product.json",JSON.stringify(product)); //json object conversion

        // here we are sendingt 
        res.write(JSON.stringify({message:"product Deleted"}));
        res.end();
    }

    else if(path.pathname === "/products" && req.method === "PUT"){

        //for upadating data we need  data and id

        let id = path.query.id;

        // here we are getting the data

        let data='';
        req.on('data',(chunk)=>{
            data+=chunk;
        })
        // now here we have id now from that data we want index of the data using the findindex 

        req.on('end',()=>{
            let index = product.findIndex((pro)=>pro.id===Number(id));
            
            // here we are used index to upadate the data 
            product[index]=JSON.parse(data);
            fs.writeFileSync("./product.json",JSON.stringify(product));
            res.write(JSON.stringify({message:"Product upadated"}));
            res.end();
        })
    }
   
}).listen(8000); 