const http = require('http');
const url = require('url');
const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/products")
.then(()=>{
    console.log("Mongo connection Successfull !")
})
.catch((err)=>{
    console.log(err)
})


// schema for program collections

let productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    rating:Number,
    category:String
})

// model for program collection
const productModel = new mongoose.model("program",productSchema);

http.createServer((req,res)=>{
   
    let path = url.parse(req.url,true);
    if(path.pathname==="/products" && req.method==="POST"){
        let data =" ";
        req.on("data",(chunk)=>{
            data+=chunk;
        })
        req.on("end",()=>{
            let product=JSON.parse(data);
            let prodModelObj = new productModel(product);
            prodModelObj.save()
            .then(()=>{
                res.write(JSON.stringify({message:"product created"}))
                res.end();
            })
            .catch((err)=>{
                res.write(JSON.stringify({message:"Some problem"}))
                res.end();
            })
            
       })
    }

    else if (path.pathname==="/products" && req.method==="GET") {
    //    console.log(req.path)

       let id=path.query.id;

       if(id===undefined){
            productModel.find()
            .then((data)=>{
                res.write(JSON.stringify(data))
                res.end();
            })
            .catch((err)=>{
                console.log(err);
                res.write(JSON.stringify({message:"Something Wrong"}));
                res.end();
            })
       }
       else{
        productModel.findOne({_id:id})
        .then((data)=>{
            res.write(JSON.stringify(data));
            res.end();
        })
        .catch((err)=>{
            console.log(err);
            res.write(JSON.stringify({message:"Something Wrong"}));
            res.end();
        })
       }
       
       
       
       
       
    }

    else if (path.pathname="/products" && req.method ==="DELETE") {
        let id = path.query.id;

        productModel.deleteOne({_id:id})
        .then(()=>{
            res.write(JSON.stringify({message:"product deleted"}))
            res.end();
        })
        .catch((err)=>{
            console.log(err);
            res.write(JSON.stringify({message:"some problem"}))
            res.end();
        })
        
    }

    else if (path.pathname="/products" && req.method ==="PUT") {
        let id = path.query.id;

        let data = "";

        req.on("data",(chunk)=>{
            data+=chunk;
        })
        req.on("end",()=>{
            let productUpd=JSON.parse(data);
            productModel.updateOne({_id:id},productUpd)
            .then(()=>{
                res.write(JSON.stringify({message:"Product Upadated"}))
                res.end();
            })
            .catch((err)=>{
                console.log(err);
                res.write(JSON.stringify({message:"some problem"}))
                res.end();
            })
        })
    }

}).listen(8000);



