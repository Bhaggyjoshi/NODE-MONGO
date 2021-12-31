const express = require('express');

const app = express();

// console.log(app);
app.listen(8000);

app.get("/products/:id",(req,res)=>{
    console.log("hello");
    console.log(req.params.id);
    
})

app.post("/products",(req,res)=>{
    
})